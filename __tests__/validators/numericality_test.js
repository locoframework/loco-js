import { Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    dumbAttrib: {
      validations: {
        numericality: { equal_to: 5 }
      }
    },
    dumbAttrib2: {
      validations: {
        numericality: { odd: true }
      }
    },
    dumbAttrib3: {
      validations: {
        numericality: { even: true }
      }
    },
    releaseYear: {
      validations: {
        numericality: {
          only_integer: true,
          greater_than_or_equal_to: new Date().getFullYear(),
          less_than: 2100,
          other_than: 2098
        }
      }
    },
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
  expect(dummy.errors.year).toBe(undefined);
});

it("supports custom message", () => {
  const dcm = new DummyCustomMsg({ year: "foo" });
  dcm.isValid();
  expect(dcm.errors.year[0]).toEqual("your number is not acceptable");
});

describe("i18n support (en)", () => {
  let dummy = new Dummy({ year: "foo" });

  afterEach(() => {
    dummy = new Dummy({ year: "foo" });
  });

  it("has message if not a number", () => {
    dummy.isValid();
    expect(dummy.errors.year[0]).toEqual("is not a number");
  });

  it("has message if not an integer", () => {
    dummy.year = "231.23";
    dummy.isValid();
    expect(dummy.errors.year[0]).toEqual("must be an integer");
  });

  it("has message if value is not greather than specified value", () => {
    dummy.year = 1887;
    dummy.isValid();
    expect(dummy.errors.year[0]).toEqual("must be greater than 1887");
  });

  it("has message if value is not greather than or equal to specified value", () => {
    dummy.releaseYear = 2015;
    dummy.isValid();
    expect(dummy.errors.releaseYear[0]).toEqual(
      `must be greater than or equal to ${new Date().getFullYear()}`
    );
  });

  it("has message if value is not equal to specified value", () => {
    dummy.dumbAttrib = 6;
    dummy.isValid();
    expect(dummy.errors.dumbAttrib[0]).toEqual("must be equal to 5");
  });

  it("has message if value is not less than specified value", () => {
    dummy.releaseYear = 2101;
    dummy.isValid();
    expect(dummy.errors.releaseYear[0]).toEqual("must be less than 2100");
  });

  it("has message if value is not less than or equal to specified value", () => {
    dummy.year = 2015;
    dummy.releaseYear = 2013;
    dummy.isValid();
    expect(dummy.errors.year[0]).toEqual("must be less than or equal to 2013");
  });

  it("has message if value is not other than specified value", () => {
    dummy.releaseYear = 2098;
    dummy.isValid();
    expect(dummy.errors.releaseYear[0]).toEqual("must be other than 2098");
  });

  it("has message if specified value is not odd", () => {
    dummy.dumbAttrib2 = "12";
    dummy.isValid();
    expect(dummy.errors.dumbAttrib2[0]).toEqual("must be odd");
  });

  it("has message if specified value is not even", () => {
    dummy.dumbAttrib3 = "12345";
    dummy.isValid();
    expect(dummy.errors.dumbAttrib3[0]).toEqual("must be even");
  });
});
