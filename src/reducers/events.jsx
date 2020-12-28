import { READE_EVENTS } from "../actions";

//状態の初期値を定義
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case READE_EVENTS:
      return state;
    default:
      return state;
  }
};
