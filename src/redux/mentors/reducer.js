// Foulders Reducers //
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
} from "../actions";

const INIT_STATE = {
  currentUser: {},
  loading: false,
  error: "",
  successDleteMessage: "",
  mentorsList: [],
};

export default (state = INIT_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case MENTORS_CREATE:
      return { ...state, loading: true, error: "" };
    case MENTORS_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: "",
      };
    case MENTORS_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case MENTORS_LIST:
      return { ...state, loading: true, error: "" };
    case MENTORS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        mentorsList: action.payload,
        error: "",
      };
    case MENTORS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        mentorsList: [],
        error: action.payload.message,
      };
    case MENTORS_DELETE:
      return { ...state, loading: true, error: "" };
    case MENTORS_DELETE_SUCCESS:
      return {
        ...state,
        loading: true,
        successDleteMessage: action.payload,
        error: "",
      };
    case MENTORS_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        successDleteMessage: "",
        error: action.payload.message,
      };
    default:
      return newState;
  }
};
