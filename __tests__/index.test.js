import {
  init,
  Models,
} from "index";

describe("init", () => {
  it("sets models", () => {
    init({ models: { Article: { foo: "bar" } } });
    expect(Models.Article).toEqual({ foo: "bar" });
  });

  it("sets authorizationHeader on models if passed as a config", () => {
    init({
      models: { Article: { foo: "bar" } },
      authorizationHeader: "Bearer XXX",
    });
    expect(Models.Article.authorizationHeader).toEqual("Bearer XXX");
  });
});
