import { init } from "index";
import mockXHR from "../__mock__/xhr";
import Wire from "wire.coffee";

const oldXMLHttpRequest = window.XMLHttpRequest;

afterEach(() => {
  window.XMLHttpRequest = oldXMLHttpRequest;
});

const loco = init({
  models: { Article: { foo: "bar" } },
});

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

describe("#init", () => {
  it("sends Authorization header and sets withCredentials if passed", () => {
    const mock = mockXHR();
    init({
      authorizationHeader: "Bearer XXX",
      cookiesByCORS: true,
      models: { Article: { foo: "bar" } },
      notifications: {
        enable: true,
      },
    });
    expect(mock.withCredentials).toEqual(true);
    expect(mock.setRequestHeader).toBeCalledWith("Authorization", "Bearer XXX");
  });
});
