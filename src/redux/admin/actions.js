import axios from "axios";

import {
  ADMIN_LOGIN_USER,
  ADMIN_LOGIN_USER_SUCCESS,
  ADMIN_LOGIN_USER_ERROR,
} from "../actions";
import { URL, KEY, UserRole } from "../../constants/defaultValues";
import {
  setCurrentUser,
  getRolePath,
  getHeaders,
  getNormalHeaders,
} from "../../helpers/Utils";

export const adminLoginUserSuccess = (user) => async (dispatch) => {
  dispatch({
    type: ADMIN_LOGIN_USER_SUCCESS,
    payload: user,
  });
};
export const adminLoginUserError = (message) => async (dispatch) => {
  dispatch({
    type: ADMIN_LOGIN_USER_ERROR,
    payload: { message },
  });
};

export const adminLoginUser = (data, history) => async (dispatch) => {
  try {
    const loginData = {
      ...data,
      passwordConfirmation: data.password,
    };
    dispatch({ type: ADMIN_LOGIN_USER });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    console.log(URL.adminLogin);
    const result = await axios
      .post(`${URL.adminLogin}`, loginData, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    console.log("============", result);
    if (result && result.status === 200) {
      const item = result.data;
      console.log("============", item);
      setCurrentUser(item);
      dispatch(adminLoginUserSuccess(result));
      history.push("/admin/dashboard");
    } else {
      dispatch(adminLoginUserError(result.statusText));
    }
  } catch (error) {
    dispatch(adminLoginUserError({}));
    // NotificationManager.error(
    //   "Server down! Please try again later.",
    //   "Error",
    //   3000
    // );
  }
};

export const adminLoginUserLogOut = (history) => async (dispatch) => {
  try {
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    console.log(URL.adminLogOut);
    const result = await axios

      .get(`${URL.adminLogOut}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    console.log("====result", result);
    if (result && result.status === 200) {
      setCurrentUser();
      localStorage.removeItem("headerOption");
      history.push("/admin");
    }
  } catch (error) {}
};
