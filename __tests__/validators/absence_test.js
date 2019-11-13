import { Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    blankAttrib: {
      validations: {
        absence: true
      }
    }
  };
}

describe("attribute is a string", () => {
  it("is invalid if has any characters", () => {
    const dummy = new Dummy({ blankAttrib: " " });
    dummy.isValid();
    expect(dummy.errors.blankAttrib[0]).toEqual("must be blank");
  });
});
