import * as types from "./actionTypes";
//import * as statusActions from "../status/actions";

// Simple action
export const selectDot = dotNumber => {
  return {
    type: types.SELECT_DOT,
    dotNumber
  };
};

// Async action
export const checkSelected = () => {
  return async (dispatch, getState) => {
    const { selectedDots } = getState().common;

    const isEnough =
      Object.keys(selectedDots).filter(k => selectedDots[k]).length > 2;

    dispatch({
      type: types.CHECK_SELECTED,
      isEnough
    });
  };
};

// Async action
export const selectDotAsync = dotNumber => {
  return async (dispatch, getState) => {
    // Async operation
    dispatch(selectDot(dotNumber));
    dispatch(checkSelected());
  };
};
