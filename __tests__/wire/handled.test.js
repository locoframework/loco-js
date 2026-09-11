import { connectWithModel, init } from "index";
import { connector, Models } from "loco-js-model";
import processNotification from "wire/processNotification";

class WsClient {
  connect() {}
  disconnect() {}
  send() {}
}

class Article {
  static identity = "Article";
  static getIdentity() {
    return "Article";
  }
  static getRemoteName() {
    return "Article";
  }
}

const notification = (event, syncTime, id = 1) => [
  "Article",
  id,
  event,
  {
    payload: { id },
    loco: {
      idempotency_key: `${event}-${syncTime}-${id}`,
      sync_time: syncTime,
    },
  },
];

const transient = (syncTime) => [
  null,
  null,
  null,
  {
    type: "NEW_MESSAGE",
    payload: { message: "hi" },
    loco: { idempotency_key: `msg-${syncTime}`, sync_time: syncTime },
  },
];

const locoWith = (received) =>
  init({
    wsClient: new WsClient(),
    notificationCenter: (n) => received.push(n),
  });

// Mirrors what Wire#check does for each notification it polls.
const deliver = (loco, data) => {
  const wire = loco.getWire();
  processNotification(data, {
    notificationCenter: wire.notificationCenter,
    handled: wire.handled,
  });
};

beforeAll(() => {
  connectWithModel(connector);
  Models.Article = Article;
});

describe("#replaySince", () => {
  it("re-delivers record notifications newer than the snapshot", () => {
    const received = [];
    const loco = locoWith(received);
    deliver(loco, notification("created", "2026-09-10T10:00:00.000000Z"));
    deliver(loco, notification("updated", "2026-09-10T10:00:02.000000Z", 2));
    received.length = 0;

    expect(loco.replaySince("2026-09-10T10:00:01.000000Z")).toEqual(1);
    expect(received).toEqual([{ type: "Article updated", payload: { id: 2 } }]);
  });

  it("re-delivers a notification stamped at the snapshot's own instant", () => {
    const loco = locoWith([]);
    deliver(loco, notification("created", "2026-09-10T11:00:00.000000Z", 3));

    // Date.parse truncates microseconds, so same-millisecond notifications
    // must replay rather than be dropped.
    expect(loco.replaySince("2026-09-10T11:00:00.000400Z")).toEqual(1);
  });

  // 6.0's multi-instance feature: two Locos can point at different backends,
  // so `sync_time` values are positions on two unrelated clocks. A shared tail
  // would compare them, and replay one backend's notifications into the other.
  it("keeps a separate tail per instance", () => {
    const fromA = [];
    const fromB = [];
    const locoA = locoWith(fromA);
    const locoB = locoWith(fromB);

    deliver(locoA, notification("created", "2026-09-10T13:00:00.000000Z", 4));
    fromA.length = 0;

    expect(locoB.replaySince("2026-09-10T12:00:00.000000Z")).toEqual(0);
    expect(fromB).toEqual([]);
    expect(locoA.replaySince("2026-09-10T12:00:00.000000Z")).toEqual(1);
    expect(fromA).toEqual([{ type: "Article created", payload: { id: 4 } }]);
  });

  it("never re-delivers a transient notification", () => {
    const received = [];
    const loco = locoWith(received);
    deliver(loco, transient("2026-09-10T14:00:00.000000Z"));
    expect(received).toEqual([
      { type: "NEW_MESSAGE", payload: { message: "hi" } },
    ]);
    received.length = 0;

    expect(loco.replaySince("2026-09-10T12:00:00.000000Z")).toEqual(0);
    expect(received).toEqual([]);
  });

  // `Loco.emit(..., ws_only: true)` writes no Notification row, so it has no
  // created_at to be stamped with — and it reaches the client through
  // Line#received rather than processNotification, never touching the tail.
  it("never re-delivers a ws_only notification", () => {
    const received = [];
    const loco = locoWith(received);

    loco.getLine().received({
      type: "NEW_MESSAGE",
      payload: { message: "hi", author: "jane" },
      loco: { idempotency_key: "ws-only-1" },
    });
    expect(received).toEqual([
      { type: "NEW_MESSAGE", payload: { message: "hi", author: "jane" } },
    ]);
    received.length = 0;

    expect(loco.replaySince("2026-09-10T12:00:00.000000Z")).toEqual(0);
    expect(received).toEqual([]);
  });

  it("returns 0 for a snapshot with no as-of", () => {
    const loco = locoWith([]);
    expect(loco.replaySince(undefined)).toEqual(0);
    expect(loco.replaySince(null)).toEqual(0);
  });
});
