import axios from "axios";

import {
  MENTORS_CREATE,
  MENTORS_CREATE_SUCCESS,
  MENTORS_CREATE_ERROR,
  MENTORS_LIST,
  MENTORS_LIST_SUCCESS,
  MENTORS_LIST_ERROR,
  MENTORS_DELETE,
  MENTORS_DELETE_SUCCESS,
  MENTORS_DELETE_ERROR,
  MENTORS_EDIT,
  MENTORS_EDIT_SUCCESS,
  MENTORS_EDIT_ERROR,
} from "../actions";
import { URL, KEY, UserRole } from "../../constants/defaultValues";
import { getCurrentUser, getNormalHeaders } from "../../helpers/Utils";
const currentUser = getCurrentUser("current_user");

export const mentorCreateSuccess = (user) => async (dispatch) => {
  dispatch({
    type: MENTORS_CREATE_SUCCESS,
    payload: user,
  });
};
export const mentorCreateError = (message) => async (dispatch) => {
  dispatch({
    type: MENTORS_CREATE_ERROR,
    payload: { message },
  });
};

export const mentorCreate = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: MENTORS_CREATE });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .post(`${URL.addMentor}`, data, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    if (result && result.status === 200) {
      // dispatch(mentorCreateSuccess(item));
      history.push("/teams");
    } else {
      dispatch(mentorCreateError(result.statusText));
    }
  } catch (error) {
    dispatch(mentorCreateError({}));
  }
};

export const getMentorsListSuccess = (user) => async (dispatch) => {
  dispatch({
    type: MENTORS_LIST_SUCCESS,
    payload: user,
  });
};
export const getMentorsListError = (message) => async (dispatch) => {
  dispatch({
    type: MENTORS_LIST_ERROR,
    payload: { message },
  });
};

export const getMentorsList = (history) => async (dispatch) => {
  try {
    dispatch({ type: MENTORS_LIST });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .get(`${URL.getMentors}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    if (result && result.status === 200) {
      const data = result.data;
      dispatch(getMentorsListSuccess(data));
      history.push("/teams");
    } else {
      dispatch(getMentorsListError(result.statusText));
    }
  } catch (error) {
    dispatch(getMentorsListError({}));
  }
};

export const deleteMentorSuccess = (user) => async (dispatch) => {
  dispatch({
    type: MENTORS_DELETE_SUCCESS,
    payload: user,
  });
};
export const deleteMentorError = (message) => async (dispatch) => {
  dispatch({
    type: MENTORS_DELETE_ERROR,
    payload: { message },
  });
};

export const deleteMentor = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: MENTORS_DELETE });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .delete(`${URL.deleteMentor + "/" + courseId}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    if (result && result.status === 200) {
      const data = result.data.text;
      dispatch(deleteMentorSuccess(data));
    } else {
      dispatch(deleteMentorError(result.statusText));
    }
  } catch (error) {
    dispatch(deleteMentorError({}));
  }
};

export const mentorsEditSuccess = (user) => async (dispatch) => {
  dispatch({
    type: MENTORS_EDIT_SUCCESS,
    payload: user,
  });
};
export const mentorsEditError = (message) => async (dispatch) => {
  dispatch({
    type: MENTORS_EDIT_ERROR,
    payload: { message },
  });
};

export const mentorsEdit = (courseId, data, history) => async (dispatch) => {
  console.log("-------------", data);
  try {
    dispatch({ type: MENTORS_EDIT });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .put(`${URL.updateMentor + "/" + courseId}`, data, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    console.log("========result", result);
    if (result && result.status === 200) {
      // const data = result.data.text;
      // dispatch(mentorsEditSuccess(data));
      history.push("/teams");
    } else {
      dispatch(mentorsEditError(result.statusText));
    }
  } catch (error) {
    dispatch(mentorsEditError({}));
  }
};
