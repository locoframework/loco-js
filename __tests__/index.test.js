import {
  init,
  Models,
} from "index";

describe("init", () => {
  it("sets models", () => {
    init({ models: { Article: { foo: "bar" } } });
    expect(Models.Article).toEqual({ foo: "bar" });
  });
});
