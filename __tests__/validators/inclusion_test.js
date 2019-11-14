import { Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    rate: {
      validations: {
        inclusion: { within: ["bad", "good", "excellent"] }
      }
    }
  };
}

it("adds error if value is not available in an array", () => {
  const dummy = new Dummy({ rate: "decent" });
  dummy.isValid();
  expect(dummy.errors.rate[0]).toEqual("is not included in the list");
});

it("is valid if value is available in an array", () => {
  const dummy = new Dummy({ rate: "good" });
  dummy.isValid();
  expect(dummy.errors).toBe(null);
});
