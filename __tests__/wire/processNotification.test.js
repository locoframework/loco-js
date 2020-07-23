import Loco from "loco.coffee";
import { Models } from "index";
import processNotification from "wire/processNotification";

class Article extends Models.Base {
  static identity = "Article";
}

Object.assign(Models, { Article });

it("returns if imap is empty", () => {
  const loco = new Loco({ notifications: { enable: true } });
  loco.init({ cable: null });
  const result = processNotification(["Article", 1, "created", { id: 1 }]);
  expect(result).toBe(undefined);
});
