import { createAction } from ".";
import { userSerivce } from "../../services/UserService";
import { TOKEN } from "../../util/config";
import { actionType } from "./type";

export const fetchMe = () => {
  return async (dispatch) => {
    try {
      const res = await userSerivce.fetchMe();
      dispatch(createAction(actionType.SET_ME, res.data));
    } catch (err) {
      localStorage.removeItem(TOKEN);
    }
  };
};
