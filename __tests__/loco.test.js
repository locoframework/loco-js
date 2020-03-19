import Loco from "loco.coffee";

describe("#setProtocolWithHost", () => {
  test("removes slash at the end", () => {
    const loco = new Loco();
    loco.setProtocolWithHost("https://localhost:3000/");
    expect(loco.getProtocolWithHost()).toEqual("https://localhost:3000");
  });
});
