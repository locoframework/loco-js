import { init, emit } from "index";
import mockXHR from "../__mock__/xhr";
import Wire from "wire";

const oldXMLHttpRequest = window.XMLHttpRequest;

class WsClient {
  connect(line) {
    line.connected();
  }

  send(payload) {
    return `emitted: ${payload.type}`;
  }
}

afterEach(() => {
  window.XMLHttpRequest = oldXMLHttpRequest;
});

class Article {
  static identity = "Article";
  static foo = "bar";
}

const loco = init({
  models: [Article],
});

describe("#getLine", () => {
  it("returns the current AC subscription", () => {
    expect(loco.getLine()).toBe(null);
  });
});

describe("#getWire", () => {
  it("returns the current instance of Wire", () => {
    expect(loco.getWire()).toBeInstanceOf(Wire);
  });
});

describe("#setAuthorizationHeader", () => {
  it("sets authorizationHeader for all models", () => {
    loco.setAuthorizationHeader("Bearer XXX");
    expect(loco.getModels().Article.authorizationHeader).toEqual("Bearer XXX");
  });
});

describe("#init", () => {
  it("sends Authorization header and sets withCredentials if passed", () => {
    const mock = mockXHR();
    init({
      authorizationHeader: "Bearer XXX",
      cookiesByCORS: true,
      models: [Article],
      notifications: {
        enable: true,
      },
    });
    expect(mock.withCredentials).toEqual(true);
    expect(mock.setRequestHeader).toHaveBeenCalledWith(
      "Authorization",
      "Bearer XXX",
    );
  });

  it("initializes with wsClient", () => {
    const res = [];
    const loco = init({
      wsClient: new WsClient(),
      notificationCenter: (obj) => {
        res.push(obj);
      },
    });
    expect(loco.getLine().client).toBeInstanceOf(WsClient);
    expect(res).toEqual([{ loco: "connected" }]);
  });

  it("routes the module-level emit through the initialized instance", () => {
    init({ wsClient: new WsClient(), notificationCenter: () => {} });
    expect(emit({ type: "test" })).toEqual("emitted: test");
  });
});
