import Loco from "loco.coffee";
import Wire from "wire.coffee";
import { Models } from "index";

class Article extends Models.Base {
  static identity = "Article";
}

Models.Article = Article;

test("setting token correctly", () => {
  const wire = new Wire();
  wire.token = "123qweasdzxc";
  expect(wire._requestParams()).toEqual({
    synced_at: null,
    token: "123qweasdzxc"
  });
});

describe("#_getURL", () => {
  it("returns url with choosen protocol", () => {
    const wire = getWire();
    wire.ssl = true;
    const [protocol] = wire._getURL().split("/");
    expect(protocol).toEqual("https:");
  });

  it("return correct notifications's location", () => {
    const wire = getWire();
    wire.location = "nc";
    const [, , , location] = wire._getURL().split("/");
    expect(location).toEqual("nc");
  });
});

describe("#setPollingTime", () => {
  it("can change polling time", () => {
    const wire = getWire();
    expect(wire.pollingTime).toEqual(3000);
    const pollingInterval = wire.pollingInterval;
    wire.setPollingTime(10000);
    expect(wire.pollingTime).toEqual(10000);
    expect(wire.pollingInterval).not.toEqual(pollingInterval);
  });
});

describe("@site setter", () => {
  it("can set max size of notifications", () => {
    const wire = getWire();
    wire.size = 10;
    expect(wire.size).toEqual(10);
  });
});

const getWire = () => {
  const loco = new Loco();
  loco.init({ cable: null });
  return loco.wire;
};
