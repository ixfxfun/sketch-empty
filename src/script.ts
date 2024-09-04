import * as Flow from "ixfx/flow.js";
import { State } from "./types";

const settings = Object.freeze({});

let state: State = Object.freeze({});

function update() {
  // TODO: Compute new state and then call saveState
}

function use() {
  // TODO: Use contents of 'state'
}

function setup() {
  Flow.continuously(() => {
    update();
    use();
  }).start();
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
