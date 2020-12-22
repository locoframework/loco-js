import { init, Controllers, Models } from "index";
import { Config } from "deps";

describe("init", () => {
  it("sets protocol with host and removes a slash at the end", () => {
    init({ protocolWithHost: "https://localhost:3000/" });
    expect(Config.protocolWithHost).toEqual("https://localhost:3000");
  });

  it("sets cookiesByCORS on LocoJSModel", () => {
    expect(Config.cookiesByCORS).toEqual(false);
    init({ cookiesByCORS: true });
    expect(Config.cookiesByCORS).toEqual(true);
  });

  it("sets models", () => {
    init({ models: { Article: { foo: "bar" } } });
    expect(Models.Article).toEqual({ foo: "bar" });
  });

  it("sets controllers", () => {
    init({ controllers: { ArticleController: { foo: "bar" } } });
    expect(Controllers.ArticleController).toEqual({ foo: "bar" });
  });
});
