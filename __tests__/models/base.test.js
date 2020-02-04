import createMockXHR from "../../__mock__/xhr";
import { Models } from "index";

class Comment extends Models.Base {
  static identity = "Article.Comment";
  //static remoteName = "Comment";
  static resources = {
    url: "/user/articles/:articleId/comments",
    paginate: { per: 10 }
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
