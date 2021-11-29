import { actionType } from "../action/type";

const initialState = {
  me: null,
  user: null
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_ME:
      state.me = payload;
      return { ...state };
    case actionType.SET_USER_INFO:
      state.user = payload;
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
