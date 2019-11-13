import Loco from "base/loco.coffee";
import { I18n, Models } from "index";

class User extends Models.Base {
  static identity = "User";

  static attributes = {
    password: {
      validations: {
        presence: { on: "create" },
        confirmation: true
      }
    },
    passwordConfirmation: {
      remoteName: "password_confirmation"
    }
  };
}

I18n.pl = {
  attributes: {
    User: {
      password: "Hasło",
      passwordConfirmation: "Powtórz hasło"
    }
  },
  errors: {
    messages: {
      confirmation: "nie zgadza się z polem %{attribute}"
    }
  },
  models: {
    User: "Użytkownik"
  }
};

it("validates format", () => {
  const user = new User({ password: "secret", passwordConfirmation: "sexret" });
  user.isValid();
  expect(user.errors.passwordConfirmation[0]).toEqual("doesn't match Password");
});

it("supports i18n", () => {
  const loco = new Loco();
  loco.setLocale("pl");
  const user = new User({ password: "secret", passwordConfirmation: "sexret" });
  user.isValid();
  expect(user.errors.passwordConfirmation[0]).toEqual(
    "nie zgadza się z polem Hasło"
  );
});
