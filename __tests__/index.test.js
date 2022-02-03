import {
  getLocale,
  init,
  createConnector,
  Controllers,
  I18n,
  Models,
} from "index";
import { Config } from "deps";

describe("init", () => {
  it("does not set protocol with host", () => {
    init({ protocolWithHost: "https://localhost:3000/" });
    expect(Config.protocolWithHost).toEqual(null);
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

  it("sets controllers", () => {
    init({ controllers: { ArticleController: { foo: "bar" } } });
    expect(Controllers.ArticleController).toEqual({ foo: "bar" });
  });
});

describe("createConnector", () => {
  it("return correct object", () => {
    const loco = init({});
    const connector = createConnector(loco);
    expect(connector.getLocale).toEqual(getLocale);
    expect(connector.loco).toEqual(loco);
    expect(connector.I18n).toEqual(I18n);
  });
});
