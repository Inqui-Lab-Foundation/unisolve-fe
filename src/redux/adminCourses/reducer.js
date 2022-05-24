// Foulders Reducers //
import {
  ADMIN_COURSES_LIST,
  ADMIN_COURSES_LIST_SUCCESS,
  ADMIN_COURSES_LIST_ERROR,
} from "../actions";

const INIT_STATE = {
  loading: false,
  error: "",
  successDleteMessage: "",
  adminCoursesList: [],
};

export default (state = INIT_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADMIN_COURSES_LIST:
      return { ...state, loading: true, error: "" };
    case ADMIN_COURSES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        adminCoursesList: action.payload,
        error: "",
      };
    case ADMIN_COURSES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        adminCoursesList: [],
        error: action.payload.message,
      };
    default:
      return newState;
  }
};
