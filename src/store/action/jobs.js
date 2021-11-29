import { actionType } from "./type";
import { createAction } from "./index";
import { jobsSerivce } from "../../services/JobsService";

export const fetchListJobs = () => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await jobsSerivce.fetchListJobs();

      dispatch(createAction(actionType.SET_LIST_JOBS, res.data));

      
    } catch (err) {}

    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400);
  };
};

export const fetchTitleJobs = (callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await jobsSerivce.fetchTitleJobs();

      dispatch(createAction(actionType.SET_TITLE_JOBS, res.data));

      if (callback) {
        callback();
      }
    } catch (err) {}
    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400);
  };
};

export const fetchSubTypeJobs = (_id, callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await jobsSerivce.fetchSubTypeJobs(_id);

      dispatch(createAction(actionType.SET_SUB_TYPE_JOBS, res.data));

      if (callback) {
        callback();
      }
    } catch (err) {}
    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400);
  };
};

// export const fetchListTypeJobs = (_id, callback) => {
//   return async (dispatch) => {
//     dispatch(createAction(actionType.IS_LOADING, true));
//     try {
//       const res = await jobsSerivce.fetchListTypeJobs(_id);

//       dispatch(createAction(actionType.SET_LIST_TYPE_JOBS, res.data));

//       if (callback) {
//         callback();
//       }
//     } catch (err) {}
//     setTimeout(() => {
//       dispatch(createAction(actionType.IS_LOADING, false));
//     }, 400);
//   };
// };

export const searchJobByName = (callback) => {
  return async (dispatch) => {
    try {
      const res = await jobsSerivce.searchJobByName();

      dispatch(createAction(actionType.SEARCH_JOBS, res.data));

      if (callback) {
        callback();
      }
    } catch (err) {}
  };
};

export const fetchJobsDetail = (_id, callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));

    try {
      const res = await jobsSerivce.fetchJobsDetail(_id);

      dispatch(createAction(actionType.SET_DETAIL, res.data));

      if (callback) {
        callback();
      }
    } catch (err) {}
    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 400);
  };
};
