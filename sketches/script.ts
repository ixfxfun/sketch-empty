import type { State } from './state.js';
import { bipolar } from "@ixfx/random.js";
import { saveState } from './state.js';

const settings = Object.freeze({
  loopSpeedMs: 50,
});

/**
 * Do things that change state
 */
function update() {
  // Calculate stuff...
  const randomValue = bipolar();

  // ...and then save it all to state
  const state = saveState({
    randomValue,
  });

  // Use state
  use(state);
}

/**
 * Do things that use state
 * @param state State
 */
function use(state: State) {
  const { randomValue } = state;
  const el = document.querySelector(`#output`);
  if (!el)
    return;
  el.textContent = randomValue.toPrecision(2);
}

/**
 * Run once when sketch first loads
 */
function setup() {
  const { loopSpeedMs } = settings;

  setInterval(() => {
    update();
  }, loopSpeedMs);
}

setup();
