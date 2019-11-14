import Loco from "base/loco.coffee";
import { I18n, Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    rate: {
      validations: {
        inclusion: { within: ["bad", "good", "excellent"] }
      }
    }
  };
}

I18n.pl = {
  errors: {
    messages: {
      inclusion: "nie znajduje się na liście dopuszczalnych wartości"
    }
  }
};

it("adds error if value is not available in an array", () => {
  const dummy = new Dummy({ rate: "decent" });
  dummy.isValid();
  expect(dummy.errors.rate[0]).toEqual("is not included in the list");
});

it("is valid if value is available in an array", () => {
  const dummy = new Dummy({ rate: "good" });
  dummy.isValid();
  expect(dummy.errors).toBe(null);
});

it("supports i18n", () => {
  const loco = new Loco();
  loco.setLocale("pl");
  const dummy = new Dummy({ rate: "decent" });
  dummy.isValid();
  expect(dummy.errors.rate[0]).toEqual(
    "nie znajduje się na liście dopuszczalnych wartości"
  );
});
