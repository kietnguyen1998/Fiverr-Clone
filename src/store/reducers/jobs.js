import { actionType } from "../action/type";

const initialState = {
  listJobs: [],
  titleJobs: [],
  subTypeJobs: [],
  // typeJobs: [],
  searchJob: [],
  detail: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_LIST_JOBS:
      state.listJobs = payload;
      return { ...state };

    case actionType.SET_TITLE_JOBS:
      state.titleJobs = payload;
      return { ...state };

    case actionType.SET_SUB_TYPE_JOBS:
      state.subTypeJobs = payload;
      return { ...state };

    // case actionType.SET_LIST_TYPE_JOBS:
    //   state.typeJobs = payload;
    //   return { ...state };

    case actionType.SEARCH_JOBS:
      state.searchJob = payload;
      return { ...state };

    case actionType.SET_DETAIL:
      state.detail = payload;
      return { ...state };
    default:
      return state;
  }
};
