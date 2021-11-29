import axios from "axios";
import { actionType } from "./type";
import { createAction } from "./index";
import { TOKEN } from "../../util/config";
import { authSerivce } from "../../services/AuthService";
import { history } from "../../App";
import Swal from "sweetalert2";

export const SignIn = (data, callback) => {
  return async (dispatch) => {
    try {
      const res = await authSerivce.signIn(data);
      localStorage.setItem(TOKEN, res.data.token);

      setTimeout(() => {
        dispatch(createAction(actionType.SET_SIGN_IN, true));
        dispatch(createAction(actionType.SET_ME, res.data.user));
      }, 400);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign in success",
        showConfirmButton: false,
        timer: 1200
      });
      setTimeout(() => {
        history.goBack();
      }, 1500);

      if (callback) {
        callback();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or password is not correct"
      });
    }
  };
};

export const signOut = (callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.SET_ME, null));
    localStorage.removeItem(TOKEN);

    if (callback) {
      callback();
    }
  };
};

export const signUp = (data, callback) => {
  return async (dispatch) => {
    try {
      await authSerivce.signUp(data);
      setTimeout(() => {
        dispatch(createAction(actionType.SET_SIGN_UP, true));
      }, 400);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign up success",
        showConfirmButton: false,
        timer: 1200
      });

      setTimeout(() => {
        history.goBack();
      }, 1200);

      if (callback) {
        callback();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Please check your information again!"
      });
    }
  };
};
