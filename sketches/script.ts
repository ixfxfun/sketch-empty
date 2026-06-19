import type { State } from './state.js';
import * as Flow from "ixfx/flow.js";
import { bipolar } from "ixfx/random.js";
import { saveState } from './state.js';

const settings = Object.freeze({
  loopSpeed: 0,
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
  const { loopSpeed } = settings;

  Flow.continuously(() => {
    update();
  }, loopSpeed).start();
}

setup();
