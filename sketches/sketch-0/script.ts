import * as Flow from "ixfx/flow.js";
import { bipolar } from "ixfx/random.js";
import { State } from "./types.js";

const settings = Object.freeze({
  loopSpeed: 0,
});

let state: State = {
  randomValue: 0,
};

function update() {
  // TODO: Compute new state
  saveState({
    randomValue: bipolar(),
  });
}

function use() {
  const { randomValue } = state;

  // TODO: Use contents of 'state'
  const el = document.querySelector(`#output`);
  if (!el) return;
  el.textContent = randomValue.toPrecision(2);
}

function setup() {
  const { loopSpeed } = settings;

  Flow.continuously(() => {
    update();
    use();
  }, loopSpeed).start();
  console.log(`Started!`);
}

setup();

/**
 * Save state
 */
function saveState(s: Partial<State>) {
  const newState = Object.freeze({
    ...state,
    ...s,
  });
  state = newState;
  return state;
}
