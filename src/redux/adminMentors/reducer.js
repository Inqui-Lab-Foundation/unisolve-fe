// Foulders Reducers //
import {
  ADMIN_MENTORS_LIST,
  ADMIN_MENTORS_LIST_SUCCESS,
  ADMIN_MENTORS_LIST_ERROR,
} from "../actions";

const INIT_STATE = {
  mentorsList: [],
};

export default (state = INIT_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADMIN_MENTORS_LIST:
      return { ...state, loading: true, error: "" };
    case ADMIN_MENTORS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        mentorsList: action.payload,
        error: "",
      };
    case ADMIN_MENTORS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        mentorsList: [],
        error: action.payload.message,
      };
    default:
      return newState;
  }
};
