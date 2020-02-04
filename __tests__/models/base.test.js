import createMockXHR from "../../__mock__/xhr";
import { Models } from "index";

class Comment extends Models.Base {
  static identity = "Article.Comment";
  static remoteName = "Comment";
  static resources = {
    url: "/user/articles/:articleId/comments",
    paginate: { per: 10 }
  };

  static attributes = {
    author: {
      validations: {
        presence: true
      }
    },
    text: {
      validations: {
        presence: true
      }
    },
    articleId: {
      type: "Int",
      validations: {
        presence: true
      },
      remoteName: "article_id"
    },
    approved: {
      type: "Boolean"
    }
  };
}

class Article extends Models.Base {
  static identity = "Article";

  static attributes = {
    title: {
      type: "String"
    },
    adminRate: {
      type: "Float"
    },
    adminReviewStartedAt: {
      type: "Number"
    }
  };

  static validate = ["vulgarityLevel"];

  vulgarityLevel = () => {
    if (this.content != null && /fuck/i.exec(this.content)) {
      this.addErrorMessage("Article contains strong language.", {
        for: "base"
      });
    }
  };
}

class Dummy extends Models.Base {
  static identity = "Dummy";

  static attributes = {
    dumbAttrib5: {
      validations: {
        size: { minimum: 1 },
        format: {
          with: /^[a-z0-9]{5,}$/,
          if: o => o.dumbAttrib5 != null && o.dumbAttrib5.length >= 5
        }
      }
    }
  };
}

const oldXMLHttpRequest = window.XMLHttpRequest;
let mockXHR = null;

beforeEach(() => {
  mockXHR = createMockXHR();
  window.XMLHttpRequest = jest.fn(() => mockXHR);
});

afterEach(() => {
  window.XMLHttpRequest = oldXMLHttpRequest;
});

it("does not send param if was used in URL", () => {
  Comment.all({ articleId: 1 });
  expect(mockXHR.open).toBeCalledWith(
    "GET",
    "/user/articles/1/comments?page=1"
  );
});

describe("attribute types", () => {
  it("can be Number", () => {
    const article = new Article({ adminReviewStartedAt: "1464490570.0260842" });
    expect(article.adminReviewStartedAt).toEqual(1464490570.0260842);
  });

  it("can be Float", () => {
    const article = new Article({ adminRate: "  8.33 aaa " });
    expect(article.adminRate).toEqual(8.33);
  });

  it("can be String", () => {
    const article = new Article({ title: 12.33 });
    expect(article.title).toEqual("12.33");
  });
});

describe("validation", () => {
  it("allows custom validations", () => {
    const article = new Article({ content: "Some words.. and fUCk!" });
    expect(article.isInvalid()).toBe(true);
    expect(article.errors.base[0]).toEqual("Article contains strong language.");
  });

  it("supports conditional validation", () => {
    const dummy = new Dummy({ dumbAttrib5: "KRAKOW" });
    dummy.isValid();
    expect(dummy.errors.dumbAttrib5[0]).toEqual("is invalid");
    dummy.dumbAttrib5 = "KRK";
    dummy.isValid();
    expect(dummy.errors).toBe(null);
  });
});

describe("#save", () => {
  it("properly builds URL for nested models", () => {
    const comment = new Comment({
      articleId: 1,
      author: "Joe Doe",
      text: "foo bar baz"
    });
    comment.save();
    expect(mockXHR.open).toBeCalledWith("POST", "/user/articles/1/comments");
  });
});

describe("#serialize", () => {
  it("sets proper key's name for nested models", () => {
    const comment = new Comment({
      articleId: 1,
      author: "Joe Doe",
      text: "foo bar baz"
    });
    expect(comment.serialize()["comment"]).not.toBe(undefined);
  });
});

describe("#assignAttr", () => {
  it("assigns Boolean values", () => {
    const comment = new Comment();
    comment.assignAttr("approved", true);
    expect(comment.approved).toEqual(true);
  });

  it("converts to Boolean values", () => {
    const comment = new Comment();
    comment.assignAttr("approved", "0");
    expect(comment.approved).toEqual(false);
  });
});
