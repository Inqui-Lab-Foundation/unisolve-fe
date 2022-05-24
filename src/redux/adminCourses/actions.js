import axios from "axios";

import {
  ADMIN_COURSES_LIST,
  ADMIN_COURSES_LIST_SUCCESS,
  ADMIN_COURSES_LIST_ERROR,
} from "../actions";
import { URL, KEY, UserRole } from "../../constants/defaultValues";
import { getCurrentUser, getNormalHeaders } from "../../helpers/Utils";

export const getAdminCorsesListSuccess = (user) => async (dispatch) => {
  dispatch({
    type: ADMIN_COURSES_LIST_SUCCESS,
    payload: user,
  });
};

export const getAdminCoursesListError = (message) => async (dispatch) => {
  dispatch({
    type: ADMIN_COURSES_LIST_ERROR,
    payload: { message },
  });
};

export const getAdminCoursesList = (history) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_COURSES_LIST });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .get(`${URL.getAdminCouses}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    console.log("=====", result);
    if (result && result.status === 200) {
      const data = result.data;
      dispatch(getAdminCorsesListSuccess(data));
      // history.push("admin/courses");
    } else {
      dispatch(getAdminCoursesListError(result.statusText));
    }
  } catch (error) {
    dispatch(getAdminCoursesListError({}));
  }
};
