/**
 * State for sketch
 */
export type State = Readonly<{
  randomValue: number;
}>;

/**
 * Initial value for state
 */
let state: State = {
  randomValue: 0,
};

/**
 * Merges changed state with existing state
 * @param changedState
 */
export function saveState(changedState: Partial<State>) {
  state = Object.freeze({
    ...state,
    ...changedState,
  });
  return state;
}
