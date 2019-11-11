import Loco from "base/loco.coffee";
import Wire from "base/wire.coffee";

test('setting token correctly', () => {
  const wire = new Wire;
  wire.setToken('123qweasdzxc');
  expect(wire._requestParams()).toEqual({ synced_at: null, token: '123qweasdzxc' });
});

describe('#setPollingTime', () => {
  it('can change polling time', () => {
    const wire = getWire();
    expect(wire.getPollingTime()).toEqual(3000);
    const pollingInterval = wire.getPollingInterval();
    wire.setPollingTime(10000);
    expect(wire.getPollingTime()).toEqual(10000);
    expect(wire.getPollingInterval()).not.toEqual(pollingInterval);
  });

  const getWire = () => {
    const loco = new Loco({ notifications: { enable: true } });
    loco.init();
    return loco.getWire();
  }
});
