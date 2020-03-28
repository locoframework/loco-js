import { init } from "index";
import { Config } from "deps";

describe("init", () => {
  it("sets protocol with host and removes a slash at the end", () => {
    init({ protocolWithHost: "https://localhost:3000/" });
    expect(Config.protocolWithHost).toEqual("https://localhost:3000");
  });
});
