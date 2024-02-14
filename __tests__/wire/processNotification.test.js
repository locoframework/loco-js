import Loco from "loco.coffee";
import { Models } from "loco-js-model";
import { subscribe } from "index";
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

it("returns false if idempotency key has been received already", () => {
  const notification = [
    "Article",
    1,
    "created",
    { id: 1, loco: { idempotency_key: "aea41272f11ea5c75db8ba589156771e" } },
  ];
  const result = processNotification(notification);
  expect(result).toBe(false);
});

it("sends notification to notification center if model is undefined", () => {
  const notification = [
    "UnknownModel",
    1,
    "created",
    { id: 1, loco: { idempotency_key: "aea41272f11ea5c75db8ba589156771f" } },
  ];
  const notificationCenter = jest.fn();
  const emit = () => {};
  const result = processNotification(notification, { notificationCenter, emit });
  expect(result).toBe(false);
  expect(notificationCenter).toHaveBeenCalledWith(
    { type: "UnknownModel created",
      payload: {
        id: 1
      },
    },
    emit
  );
});

it("sends notification to notification center if model is defined", () => {
  const notification = [
    "Article",
    1,
    "created",
    { id: 1, loco: { idempotency_key: "aea41272f11ea5c75db8ba589156771g" } },
  ];
  const notificationCenter = jest.fn();
  const emit = () => {};
  processNotification(notification, { notificationCenter, emit });
  expect(notificationCenter).toHaveBeenCalledWith(
    { type: "Article created",
      payload: {
        id: 1
      }
    },
    emit
  );
});
