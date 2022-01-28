import { init } from "index";
import Wire from "wire.coffee";

const loco = init({ models: { Article: { foo: "bar" } } });

describe("#getEnv", () => {
  it("returns env", () => {
    expect(loco.getEnv()).toEqual({
      namespaceController: null,
      controller: null,
      action: null,
      models: { Article: { foo: "bar" } },
    });
  });
});

describe("#getLine", () => {
  it("returns the current AC subscription", () => {
    expect(loco.getLine()).toBe(undefined);
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
    expect(loco.getEnv().models.Article.authorizationHeader).toEqual(
      "Bearer XXX"
    );
  });
});

describe("#setDisconnectedForTooLong", () => {
  it("sets disconnectedForTooLong for the Wire", () => {
    loco.setDisconnectedForTooLong(() => "foobar");
    expect(loco.getWire().disconnectedForTooLong()).toEqual("foobar");
  });
});
