import axios from "axios";

import {
  ADMIN_MENTORS_LIST,
  ADMIN_MENTORS_LIST_SUCCESS,
  ADMIN_MENTORS_LIST_ERROR,
} from "../actions";
import { URL, KEY, UserRole } from "../../constants/defaultValues";
import { getCurrentUser, getNormalHeaders } from "../../helpers/Utils";
const currentUser = getCurrentUser("current_user");

export const getAdminMentorsListSuccess = (user) => async (dispatch) => {
  dispatch({
    type: ADMIN_MENTORS_LIST_SUCCESS,
    payload: user,
  });
};

export const getAdminMentorsListError = (message) => async (dispatch) => {
  dispatch({
    type: ADMIN_MENTORS_LIST_ERROR,
    payload: { message },
  });
};

export const getAdminMentorsList = (history) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MENTORS_LIST });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .get(`${URL.getMentors}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    if (result && result.status === 200) {
      const data = result.data;
      dispatch(getAdminMentorsListSuccess(data));
      // history.push("/teams");
    } else {
      dispatch(getAdminMentorsListError(result.statusText));
    }
  } catch (error) {
    dispatch(getAdminMentorsListError({}));
  }
};
