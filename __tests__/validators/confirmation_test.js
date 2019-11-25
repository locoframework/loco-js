import { I18n, Loco, Models } from "index";

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

class DummyCustomMsg extends Models.Base {
  static identity = "DummyCustomMsg";

  static attributes = {
    accessPassword: {
      validations: {
        confirmation: { message: "different than confirmation" }
      }
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

it("supports custom message", () => {
  const dummy = new DummyCustomMsg({ accessPassword: "secret" });
  dummy.isValid();
  expect(dummy.errors.accessPasswordConfirmation[0]).toEqual(
    "different than confirmation"
  );
});
