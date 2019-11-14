import Loco from "base/loco.coffee";
import { I18n, Models } from "index";

class User extends Models.Base {
  static identity = "User";

  static attributes = {
    email: {
      validations: {
        presence: true,
        format: { with: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i }
      }
    }
  };
}

I18n.pl = {
  errors: {
    messages: {
      invalid: "jest nieprawidłowe"
    }
  }
};

it("validates format", () => {
  const user = new User({ email: "joe.doe.com" });
  user.isValid();
  expect(user.errors.email[0]).toEqual("is invalid");
});

it("supports i18n", () => {
  const loco = new Loco();
  loco.setLocale("pl");
  const user = new User({ email: "joe.doe.com" });
  user.isValid();
  expect(user.errors.email[0]).toEqual("jest nieprawidłowe");
});
