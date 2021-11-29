import { actionType } from "../action/type";

const initialState = {
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.IS_LOADING:
      state.isLoading = payload;
      return { ...state };

    default:
      return state;
  }
};
