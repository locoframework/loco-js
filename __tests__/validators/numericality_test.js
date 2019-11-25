import { Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    year: {
      validations: {
        numericality: {
          only_integer: true,
          greater_than: 1887,
          less_than_or_equal_to: o => o.releaseYear
        }
      }
    }
  };
}

class DummyCustomMsg extends Models.Base {
  static identity = "DummyCustomMsg";

  static attributes = {
    year: {
      validations: {
        numericality: {
          only_integer: true,
          greater_than: 1887,
          less_than_or_equal_to: o => o.releaseYear,
          message: "your number is not acceptable"
        }
      }
    }
  };
}

it("is valid if int required and int is passed as string", () => {
  const dummy = new Dummy({ year: "foo" });
  dummy.year = "1900";
  dummy.isValid();
  expect(dummy.errors).toBe(null);
});

it("supports custom message", () => {
  const dcm = new DummyCustomMsg({ year: "foo" });
  dcm.isValid();
  expect(dcm.errors.year[0]).toEqual("your number is not acceptable");
});
