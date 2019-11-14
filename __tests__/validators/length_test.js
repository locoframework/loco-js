import { Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    title: {
      validations: {
        length: { minimum: 1, maximum: 255 }
      }
    }
  };
}

class Article extends Models.Base {
  static identity = "Article";

  static attributes = {
    title: {
      validations: {
        presence: true,
        length: { within: [3, 255] }
      }
    }
  };
}

describe("i18n support (en)", () => {
  describe("too short", () => {
    it("has message on variant 'one'", () => {
      const dummy = new Dummy({ title: "" });
      dummy.isValid();
      expect(dummy.errors.title[0]).toEqual(
        "is too short (minimum is 1 character)"
      );
    });

    it("has message on variant 'few'", () => {
      const article = new Article({ title: "ab" });
      article.isValid();
      expect(article.errors.title[0]).toEqual(
        "is too short (minimum is 3 characters)"
      );
    });
  });
});
