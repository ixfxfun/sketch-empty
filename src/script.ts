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
  // TODO: Compute new state and then call saveState
}

function use() {
  // TODO: Use contents of 'state'
}

function setup() {
  const { loopSpeed } = settings;

  saveState({
    randomValue: bipolar(),
  });
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
  state = Object.freeze({
    ...state,
    ...s,
  });
}
