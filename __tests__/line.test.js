import { init } from "index";

class WsClient {
  connect(line) {
    line.connected();
  }

  disconnect() {
    return "disconnected";
  }

  send(payload) {
    return payload;
  }
}

const getLine = () => {
  return init({
    wsClient: new WsClient(),
    notificationCenter: () => {},
  }).getLine();
};

describe("#disconnect", () => {
  it("calls disconnect on the client", () => {
    expect(getLine().disconnect()).toEqual("disconnected");
  });
});

describe("#send", () => {
  it("returns false if disconnected", () => {
    const line = getLine();
    line.disconnected();
    expect(line.send({ type: "test" })).toEqual(false);
  });
});
