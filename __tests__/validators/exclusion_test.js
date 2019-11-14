import Loco from "base/loco.coffee";
import { I18n, Models } from "index";

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

class DummyCustomMsg extends Models.Base {
  static identity = "DummyCustomMsg";

  static attributes = {
    author: {
      validations: {
        exclusion: {
          in: ["admin", "superadmin"],
          message: "being an admin is not for u"
        }
      }
    }
  };
}

I18n.pl = {
  errors: {
    messages: {
      exclusion: "jest zarezerwowane"
    }
  }
};

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

it("supports i18n", () => {
  const loco = new Loco();
  loco.setLocale("pl");
  const dummy = new Dummy({ author: "admin" });
  dummy.isValid();
  expect(dummy.errors.author[0]).toEqual("jest zarezerwowane");
});

it("supports custom message", () => {
  const dcm = new DummyCustomMsg({ author: "admin" });
  dcm.isValid();
  expect(dcm.errors.author[0]).toEqual("being an admin is not for u");
});
