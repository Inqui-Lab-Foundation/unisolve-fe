// Foulders Reducers //
import {
  ADMIN_TEAMS_LIST,
  ADMIN_TEAMS_LIST_SUCCESS,
  ADMIN_TEAMS_LIST_ERROR,
  ADMIN_TEAMS_MEMBERS_LIST,
  ADMIN_TEAMS_MEMBERS_LIST_SUCCESS,
  ADMIN_TEAMS_MEMBERS_LIST_ERROR,
} from "../actions";

const INIT_STATE = {
  teamsList: [],
  teamsMembersList: [],
};

export default (state = INIT_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADMIN_TEAMS_LIST:
      return { ...state, loading: true, error: "" };
    case ADMIN_TEAMS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        teamsList: action.payload,
        error: "",
      };
    case ADMIN_TEAMS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        teamsList: [],
        error: action.payload.message,
      };
    case ADMIN_TEAMS_MEMBERS_LIST:
      return { ...state, loading: true, error: "" };
    case ADMIN_TEAMS_MEMBERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        teamsMembersList: action.payload,
        error: "",
      };
    case ADMIN_TEAMS_MEMBERS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        teamsMembersList: [],
        error: action.payload.message,
      };
    default:
      return newState;
  }
};
