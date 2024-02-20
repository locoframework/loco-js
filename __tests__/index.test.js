import { init, connectWithModel } from "index";
import { Models, connector } from "loco-js-model";

describe("init", () => {
  it("does not set models without calling connectWithModel first", () => {
    init({ models: { Article: { foo: "bar" } } });
    expect(Models.Article).toEqual(undefined);
  });

  it("sets models if connectWithModel is called first", () => {
    connectWithModel(connector);
    init({ models: { Article: { foo: "bar" } } });
    expect(Models.Article).toEqual({ foo: "bar" });
  });
});
