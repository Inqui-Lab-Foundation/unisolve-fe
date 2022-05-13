// Foulders Reducers //
import {
  ADMIN_LOGIN_USER,
  ADMIN_LOGIN_USER_SUCCESS,
  ADMIN_LOGIN_USER_ERROR,
} from "../actions";

const INIT_STATE = {
  currentUser: {},
  loading: false,
  error: "",
};

export default (state = INIT_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADMIN_LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case ADMIN_LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: "",
      };
    case ADMIN_LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    default:
      return newState;
  }
};
