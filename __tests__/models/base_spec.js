import createMockXHR from "../../__mock__/xhr";
import { Models } from "index";

class Comment extends Models.Base {
  static identity = "Article.Comment";
  static remoteName = "Comment";
  static resources = {
    url: "/user/articles/:articleId/comments",
    paginate: { per: 10 }
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
