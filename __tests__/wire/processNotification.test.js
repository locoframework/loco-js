import Loco from "loco.coffee";
import { subscribe, Models } from "index";
import processNotification from "wire/processNotification";

class Article extends Models.Base {
  static identity = "Article";
}

Models.Article = Article;

const loco = new Loco();
loco.init({ cable: null });

it("returns if imap is empty", () => {
  const result = processNotification([
    "Article",
    1,
    "created",
    { id: 1, loco: { idempotency_key: "aea41272f11ea5c75db8ba589156771e" } },
  ]);
  expect(result).toBe(false);
});

it("returns false on a dubled idempotency key", () => {
  const idempotency_key = "4ea41272f11ea5c75db8ba5891567713";
  subscribe({ to: Article, with: () => {} });
  let result = processNotification([
    "Article",
    1,
    "created",
    { id: 1, loco: { idempotency_key: idempotency_key } },
  ]);
  expect(result).toBe(true);
  result = processNotification([
    "Article",
    1,
    "created",
    { id: 1, loco: { idempotency_key: idempotency_key } },
  ]);
  expect(result).toBe(false);
});
