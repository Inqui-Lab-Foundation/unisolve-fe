import axios from "axios";

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../actions";
import { URL, KEY, UserRole } from "../../constants/defaultValues";
import {
  setCurrentUser,
  getRolePath,
  getHeaders,
  getNormalHeaders,
} from "../../helpers/Utils";

export const loginUserSuccess = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};
export const loginUserError = (message) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER_ERROR,
    payload: { message },
  });
};

export const loginUser = (data, history) => async (dispatch) => {
  console.log("========data", data);
  try {
    const loginData = {
      ...data,
      passwordConfirmation: data.password,
    };
    dispatch({ type: LOGIN_USER });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);

    const result = await axios
      .post(`${URL.login}`, loginData, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    console.log("============", result);
    if (result && result.status === 200) {
      const item = result.data;
      console.log("============", item);
      setCurrentUser(item);
      dispatch(loginUserSuccess(item));
      history.push("/dashboard");
    } else {
      dispatch(loginUserError(result.statusText));
    }
  } catch (error) {
    dispatch(loginUserError({}));
    // NotificationManager.error(
    //   "Server down! Please try again later.",
    //   "Error",
    //   3000
    // );
  }
};

export const loginUserLogOut = (history) => async (dispatch) => {
  try {
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .get(`${URL.logOut}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    if (result && result.status === 200) {
      setCurrentUser();
      localStorage.removeItem("headerOption");
      history.push("/login");
    }
  } catch (error) {}
};
