import { Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    author: {
      validations: {
        exclusion: { in: ["admin", "superadmin"] }
      }
    }
  };
}

it("adds error if value is in an array", () => {
  const dummy = new Dummy({ author: "admin" });
  dummy.isValid();
  expect(dummy.errors.author[0]).toEqual("is reserved");
});

it("is valid if value is not in an array", () => {
  const dummy = new Dummy({ author: "admin" });
  dummy.author = "David";
  dummy.isValid();
  expect(dummy.errors).toBe(null);
});
