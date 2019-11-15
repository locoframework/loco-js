import Loco from "base/loco.coffee";
import { I18n, Models } from "index";

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    dumbAttrib: {
      validations: {
        length: { within: [0, 1] }
      }
    },
    lang: {
      validations: {
        length: { is: 2 }
      }
    },
    letter: {
      validations: {
        length: { is: 1 }
      }
    },
    shortDesc: {
      validations: {
        length: { minimum: 10, maximum: 50 }
      }
    },
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

const tooLongTitle =
  "Migrations are stored as files in the db/migrate directory, one for each migration class. The name of the file is of the form YYYYMMDDHHMMSS_create_products.rb, that is to say a UTC timestamp identifying the migration followed by an underscore followed by the name of the migration.";

I18n.pl = {
  variants: {
    few: i => {
      const num = parseInt(String(i)[String(i).length - 1]);
      return (
        [2, 3, 4].indexOf(num) !== -1 &&
        !(String(i).length === 2 && String(i)[0] === "1")
      );
    }
  },
  errors: {
    messages: {
      too_long: {
        few: "jest za długie (maksymalnie %{count} znaki)",
        many: "jest za długie (maksymalnie %{count} znaków)",
        one: "jest za długie (maksymalnie jeden znak)",
        other: "jest za długie (maksymalnie %{count} znaków)"
      },
      too_short: {
        few: "jest za krótkie (przynajmniej %{count} znaki)",
        many: "jest za krótkie (przynajmniej %{count} znaków)",
        one: "jest za krótkie (przynajmniej jeden znak)",
        other: "jest za krótkie (przynajmniej %{count} znaków)"
      },
      wrong_length: {
        few: "ma nieprawidłową długość (powinna wynosić %{count} znaki)",
        many: "ma nieprawidłową długość (powinna wynosić %{count} znaków)",
        one: "ma nieprawidłową długość (powinna wynosić jeden znak)",
        other: "ma nieprawidłową długość (powinna wynosić %{count} znaków)"
      },
      other_than: "musi być inna niż %{count}"
    }
  }
};

describe("i18n support (en)", () => {
  describe("too short", () => {
    it("has message on variant 'one'", () => {
      const dummy = new Dummy({ title: "" });
      dummy.isValid();
      expect(dummy.errors.title[0]).toEqual(
        "is too short (minimum is 1 character)"
      );
    });

    it("has message on variant 'other'", () => {
      const article = new Article({ title: "ab" });
      article.isValid();
      expect(article.errors.title[0]).toEqual(
        "is too short (minimum is 3 characters)"
      );
    });
  });

  describe("too long", () => {
    it("has message on variant 'one'", () => {
      const dummy = new Dummy({ dumbAttrib: "ab" });
      dummy.isValid();
      expect(dummy.errors.dumbAttrib[0]).toEqual(
        "is too long (maximum is 1 character)"
      );
    });

    it("has message on variant 'other'", () => {
      const article = new Article({ title: tooLongTitle });
      article.isValid();
      expect(article.errors.title[0]).toEqual(
        "is too long (maximum is 255 characters)"
      );
    });
  });

  describe("wrong length", () => {
    it("has message on variant 'one'", () => {
      const dummy = new Dummy({ letter: "ab" });
      dummy.isValid();
      expect(dummy.errors.letter[0]).toEqual(
        "is the wrong length (should be 1 character)"
      );
    });

    it("has message on variant 'other'", () => {
      const dummy = new Dummy({ lang: "a" });
      dummy.isValid();
      expect(dummy.errors.lang[0]).toEqual(
        "is the wrong length (should be 2 characters)"
      );
    });
  });
});

describe("i18n support (pl)", () => {
  beforeEach(() => {
    const loco = new Loco();
    loco.setLocale("pl");
  });

  it("has message on variant 'one'", () => {
    const dummy = new Dummy({ title: "" });
    dummy.isValid();
    expect(dummy.errors.title[0]).toEqual(
      "jest za krótkie (przynajmniej jeden znak)"
    );
  });

  it("has message on variant 'few'", () => {
    const article = new Article({ title: "ab" });
    article.isValid();
    expect(article.errors.title[0]).toEqual(
      "jest za krótkie (przynajmniej 3 znaki)"
    );
  });

  it("has message on variant 'many'", () => {
    const dummy = new Dummy({ shortDesc: "abc" });
    dummy.isValid();
    expect(dummy.errors.shortDesc[0]).toEqual(
      "jest za krótkie (przynajmniej 10 znaków)"
    );
  });

  it("has message on variant 'other'", () => {
    const dummy = new Dummy({ shortDesc: "abc" });
    dummy.isValid();
    expect(dummy.errors.shortDesc[0]).toEqual(
      "jest za krótkie (przynajmniej 10 znaków)"
    );
  });
});
