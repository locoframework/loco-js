import { Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    dumbAttrib5: {
      validations: {
        size: { minimum: 1 }
      }
    }
  };
}

it("is alias for Length Validator", () => {
  const dummy = new Dummy({ dumbAttrib5: "" });
  dummy.isValid();
  expect(dummy.errors.dumbAttrib5[0]).toEqual(
    "is too short (minimum is 1 character)"
  );
});
