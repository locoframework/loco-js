// Own file: module state is per test file, so this is the only place `emit`
// can be observed before init() has replaced it.
import { emit } from "index";

it("throws when called before init", () => {
  expect(() => emit({ type: "PING" })).toThrow(/before init/);
});
