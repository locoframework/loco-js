import { init } from "index";
import { Models } from "loco-js-model";

describe("init", () => {
  it("sets models", () => {
    init({ models: { Article: { foo: "bar" } } });
    expect(Models.Article).toEqual({ foo: "bar" });
  });
});
