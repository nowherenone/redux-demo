import * as types from "./actionTypes";

const initialState = {
  selectedDots: {},
  isEnough: false,
  dotCount: 42
};

/**
 * Common application reducer
 *
 * @export
 * @param {Object} [state=initialState]
 * @param {Object} [action={}]
 * @returns
 */
export default function reduce(state = initialState, action = {}) {
  /**
   * Processing actions
   */

  switch (action.type) {
    case types.SELECT_DOT: {
      const selectedDots = { ...state.selectedDots };
      selectedDots[action.dotNumber] = !selectedDots[action.dotNumber];

      return { ...state, selectedDots };
    }

    case types.CHECK_SELECTED: {
      return { ...state, isEnough: action.isEnough };
    }

    default:
      return state;
  }
}
