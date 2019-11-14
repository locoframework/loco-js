import { Models } from "index";

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

it("validates format", () => {
  const user = new User({ email: "joe.doe.com" });
  user.isValid();
  expect(user.errors.email[0]).toEqual("is invalid");
});
