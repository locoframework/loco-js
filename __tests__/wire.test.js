import Loco from "loco.coffee";
import Wire from "wire.coffee";
import { Models } from "index";

class Article extends Models.Base {
  static identity = "Article";
}

Object.assign(Models, { Article });

test("setting token correctly", () => {
  const wire = new Wire();
  wire.setToken("123qweasdzxc");
  expect(wire._requestParams()).toEqual({
    synced_at: null,
    token: "123qweasdzxc"
  });
});

describe("#_getURL", () => {
  it("returns url with choosen protocol", () => {
    const wire = getWire();
    wire.setSSL(true);
    const [protocol] = wire._getURL().split("/");
    expect(protocol).toEqual("https:");
  });

  it("return correct notifications's location", () => {
    const wire = getWire();
    wire.setLocation("nc");
    const [, , , location] = wire._getURL().split("/");
    expect(location).toEqual("nc");
  });
});

describe("#setPollingTime", () => {
  it("can change polling time", () => {
    const wire = getWire();
    expect(wire.getPollingTime()).toEqual(3000);
    const pollingInterval = wire.getPollingInterval();
    wire.setPollingTime(10000);
    expect(wire.getPollingTime()).toEqual(10000);
    expect(wire.getPollingInterval()).not.toEqual(pollingInterval);
  });
});

describe("#setSize", () => {
  it("can set max size of notifications", () => {
    const wire = getWire();
    wire.setSize(10);
    expect(wire.getSize()).toEqual(10);
  });
});

const getWire = () => {
  const loco = new Loco({ notifications: { enable: true } });
  loco.init();
  return loco.getWire();
};
