import { Views } from "index";

class User extends Views.Base {
  constructor(opts = {}) {
    super(opts);
  }
}

describe("Views.Base", () => {
  describe("#getDelegator", () => {
    it("returns delegator", () => {
      const view = new User();
      view.setDelegator("foo");
      expect(view.getDelegator()).toEqual("foo");
    });
  });
});
