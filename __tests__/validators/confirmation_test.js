import { Models } from "index";

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

it("validates format", () => {
  const user = new User({ password: "secret", passwordConfirmation: "sexret" });
  user.isValid();
  expect(user.errors.passwordConfirmation[0]).toEqual("doesn't match Password");
});
