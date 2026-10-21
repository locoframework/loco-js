import { jest } from "@jest/globals";
import Loco from "loco";
import { Models, connector } from "loco-js-model";
import { connectWithModel, subscribe } from "index";
import processNotification from "wire/processNotification";

class Article extends Models.Base {
  static identity = "Article";
}

Models.Article = Article;

const loco = new Loco();
loco.init({ cable: null });

it("returns if imap is empty", () => {
  const result = processNotification({
    loco: { idempotency_key: "aea41272f11ea5c75db8ba589156771e" },
    type: "created",
    payload: { id: 1 },
    obj_class: "Article",
    obj_id: 1,
  });
  expect(result).toBe(false);
});

it("returns false if not connected with LocoJSModel", () => {
  const idempotency_key = "4ea41272f11ea5c75db8ba5891567712";
  subscribe({ to: Article, with: () => {} });
  let result = processNotification({
    loco: { idempotency_key: idempotency_key },
    type: "created",
    payload: { id: 1 },
    obj_class: "Article",
    obj_id: 1,
  });
  expect(result).toBe(false);
});

it("returns false on a dubled idempotency key if connected with LocoJSModel", () => {
  connectWithModel(connector);
  const idempotency_key = "4ea41272f11ea5c75db8ba5891567713";
  subscribe({ to: Article, with: () => {} });
  let result = processNotification({
    loco: { idempotency_key: idempotency_key },
    type: "created",
    payload: { id: 1 },
    obj_class: "Article",
    obj_id: 1,
  });
  expect(result).toBe(true);
  result = processNotification({
    loco: { idempotency_key: idempotency_key },
    type: "created",
    payload: { id: 1 },
    obj_class: "Article",
    obj_id: 1,
  });
  expect(result).toBe(false);
});

it("returns false if idempotency key has been received already", () => {
  const notification = {
    loco: { idempotency_key: "aea41272f11ea5c75db8ba589156771e" },
    type: "created",
    payload: { id: 1 },
    obj_class: "Article",
    obj_id: 1,
  };
  const result = processNotification(notification);
  expect(result).toBe(false);
});

it("sends notification to notification center if model is undefined", () => {
  const notification = {
    loco: { idempotency_key: "aea41272f11ea5c75db8ba589156771f" },
    type: "created",
    payload: { id: 1 },
    obj_class: "UnknownModel",
    obj_id: 1,
  };
  const notificationCenter = jest.fn();
  const emit = () => {};
  const result = processNotification(notification, {
    notificationCenter,
    emit,
  });
  expect(result).toBe(false);
  expect(notificationCenter).toHaveBeenCalledWith(
    {
      type: "UnknownModel created",
      payload: {
        id: 1,
      },
    },
    emit,
  );
});

it("sends notification to notification center if model is defined", () => {
  const notification = {
    loco: { idempotency_key: "aea41272f11ea5c75db8ba589156771g" },
    type: "created",
    payload: { id: 1 },
    obj_class: "Article",
    obj_id: 1,
  };
  const notificationCenter = jest.fn();
  const emit = () => {};
  processNotification(notification, { notificationCenter, emit });
  expect(notificationCenter).toHaveBeenCalledWith(
    {
      type: "Article created",
      payload: {
        id: 1,
      },
    },
    emit,
  );
});

it("does not treat notifications without an idempotency key as duplicates", () => {
  const notification = {
    loco: { idempotency_key: null },
    type: "PING",
    payload: {},
    obj_class: null,
    obj_id: null,
  };
  expect(processNotification(notification)).toBe(true);
  expect(processNotification(notification)).toBe(true);
});

it("merges the record subject's id into the payload", () => {
  const notificationCenter = jest.fn();
  const emit = () => {};
  processNotification(
    {
      loco: { idempotency_key: "merge-id-1" },
      type: "created",
      payload: { title: "Hi" },
      obj_class: "UnknownModel",
      obj_id: 7,
    },
    { notificationCenter, emit },
  );
  expect(notificationCenter).toHaveBeenCalledWith(
    { type: "UnknownModel created", payload: { title: "Hi", id: 7 } },
    emit,
  );
});
