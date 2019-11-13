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
  it("is invalid if has any character", () => {
    const dummy = new Dummy({ blankAttrib: " " });
    dummy.isValid();
    expect(dummy.errors.blankAttrib[0]).toEqual("must be blank");
  });

  it("is valid if blank", () => {
    const dummy = new Dummy({ blankAttrib: "" });
    dummy.isValid();
    expect(dummy.errors).toBe(null);
  });
});
