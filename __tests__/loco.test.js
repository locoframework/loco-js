import { init } from "index";
import Wire from "wire.coffee";

describe("#getWire", () => {
  it("returns the current instance of Wire", () => {
    expect(init({}).getWire()).toBeInstanceOf(Wire);
  });
});
