import { init } from "index";
import Wire from "wire.coffee";

const loco = init({});

describe("#getEnv", () => {
  it("returns env", () => {
    expect(loco.getEnv()).toEqual({
      namespaceController: null,
      controller: null,
      action: null,
      models: {},
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
