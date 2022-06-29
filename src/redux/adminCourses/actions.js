import axios from "axios";

import {
  ADMIN_COURSES_LIST,
  ADMIN_COURSES_LIST_SUCCESS,
  ADMIN_COURSES_LIST_ERROR,
  ADMIN_COURSES_DETAILS,
  ADMIN_COURSES_DETAILS_SUCCESS,
  ADMIN_COURSES_DETAILS_ERROR,
  ADMIN_COURSES_CREATE,
  ADMIN_COURSES_CREATE_SUCCESS,
  ADMIN_COURSES_CREATE_ERROR,
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
  // console.log("aaaaaaaaaaaaaaaaaaaaaa");
  try {
    dispatch({ type: ADMIN_COURSES_LIST });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .get(`${URL.getAdminCouses}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    console.log("=====---------------", result);
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

export const adminCoursesCreateSuccess = (user) => async (dispatch) => {
  dispatch({
    type: ADMIN_COURSES_CREATE_SUCCESS,
    payload: user,
  });
};

export const adminCoursesCreateError = (message) => async (dispatch) => {
  dispatch({
    type: ADMIN_COURSES_CREATE_ERROR,
    payload: { message },
  });
};

export const adminCoursesCreate = (data, history) => async (dispatch) => {
  console.log("========", data);
  try {
    dispatch({ type: ADMIN_COURSES_CREATE });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .post(`${URL.addAdminCourses}`, data, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });

    if (result && result.status === 201) {
      dispatch(adminCoursesCreateSuccess("Course Successfully Create"));
      setTimeout(() => {
        history.push("/admin/playvideo");
        dispatch(adminCoursesCreateSuccess(""));
      }, 1000);
      // history.push("/teams");
    } else {
      dispatch(adminCoursesCreateError(result.statusText));
    }
  } catch (error) {
    dispatch(adminCoursesCreateError({}));
  }
};

export const getAdminCourseDetailsSuccess = (user) => async (dispatch) => {
  dispatch({
    type: ADMIN_COURSES_DETAILS_SUCCESS,
    payload: user,
  });
};

export const getAdminCourseDetailsError = (message) => async (dispatch) => {
  dispatch({
    type: ADMIN_COURSES_DETAILS_ERROR,
    payload: { message },
  });
};

export const getAdminCourseDetails = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_COURSES_DETAILS });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .get(`${URL.getAdminCousesDetails + courseId}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    console.log("=====---------------", result);
    if (result && result.status === 200) {
      const data = result.data;
      dispatch(getAdminCourseDetailsSuccess(data));
    } else {
      dispatch(getAdminCourseDetailsError(result.statusText));
    }
  } catch (error) {
    dispatch(getAdminCourseDetailsError({}));
  }
};
