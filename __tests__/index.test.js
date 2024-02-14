import {
  init,
  Models,
} from "index";

describe("init", () => {
  it("sets models", () => {
    init({ models: { Article: { foo: "bar" } } });
    expect(Models.Article).toEqual({ foo: "bar" });
  });

  it("sets protocolWithHost on models if passed as a config", () => {
    init({
      models: { Article: { foo: "bar" } },
      protocolWithHost: "https://localhost:3003/",
    });
    expect(Models.Article.protocolWithHost).toEqual("https://localhost:3003/");
  });

  it("sets authorizationHeader on models if passed as a config", () => {
    init({
      models: { Article: { foo: "bar" } },
      authorizationHeader: "Bearer XXX",
    });
    expect(Models.Article.authorizationHeader).toEqual("Bearer XXX");
  });
});
