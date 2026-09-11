// A bounded tail of record-scoped notifications already delivered, kept so a
// server-rendered snapshot can be repaired: the snapshot is authoritative only
// as of the moment it was rendered, and anything newer that it replaced has to
// be applied again.
//
// One tail per Loco instance, never module state: `sync_time` is a position on
// one backend's clock, so entries from two backends are not comparable.
//
// Only notifications tied to a record (obj_class + event) are kept. Transient
// signals — a chat message, a ping — are not state, and re-delivering one
// would duplicate it.

const MAX = 1000;

class Handled {
  #entries = [];

  record(syncTime, deliver) {
    const at = Date.parse(syncTime);
    if (Number.isNaN(at)) return;

    this.#entries.push({ at, deliver });
    if (this.#entries.length > MAX) this.#entries.shift();
  }

  // `asOf` is a server timestamp on the same clock as the notifications' own.
  // The comparison is inclusive because Date.parse truncates to milliseconds:
  // re-delivering one notification the snapshot already had is harmless — the
  // handlers address records by id — while dropping one is the bug this exists
  // to fix. Returns how many were replayed.
  replaySince(asOf) {
    const from = Date.parse(asOf);
    if (Number.isNaN(from)) return 0;

    const due = this.#entries.filter((entry) => entry.at >= from);
    for (const entry of due) entry.deliver();
    return due.length;
  }
}

export default Handled;
