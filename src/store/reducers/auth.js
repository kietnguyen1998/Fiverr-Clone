import { actionType } from "../action/type";

const initialState = {
  signIn: false,
  signUp: false
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_SIGN_IN:
      state.signIn = payload;
      return { ...state };

    case actionType.SET_SIGN_UP:
      state.signUp = payload;
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
