import Loco from "base/loco.coffee";
import { I18n, Models } from "index";

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

class DummyCustomMsg extends Models.Base {
  static identity = "DummyCustomMsg";

  static attributes = {
    blankAttrib: {
      validations: {
        absence: {
          message: "only blank dude"
        }
      }
    }
  };
}

I18n.pl = {
  errors: {
    messages: {
      present: "musi być puste"
    }
  }
};

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

it("supports i18n", () => {
  const loco = new Loco();
  loco.setLocale("pl");
  const dummy = new Dummy({ blankAttrib: 0 });
  dummy.isValid();
  expect(dummy.errors.blankAttrib[0]).toEqual("musi być puste");
});

it("supports custom message", () => {
  const dummy = new DummyCustomMsg({ blankAttrib: 0 });
  dummy.isValid();
  expect(dummy.errors.blankAttrib[0]).toEqual("only blank dude");
});
