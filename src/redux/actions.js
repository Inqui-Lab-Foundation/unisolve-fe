// Export All Actions In Over All Foulder //

/* Sample List  */
export const GET_SAMPLE_LIST_DATA = "GET_SAMPLE_LIST_DATA";

/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const LOGIN_USER_LOGOUT = "LOGIN_USER_LOGOUT";
export const LOGIN_USER_LOGOUT_SUCCESS = "LOGIN_USER_LOGOUT_SUCCESS";
export const LOGIN_USER_LOGOUT_ERROR = "LOGIN_USER_LOGOUT_ERROR";

// Mentors //
export const MENTORS_CREATE = "MENTORS_CREATE";
export const MENTORS_CREATE_SUCCESS = "MENTORS_CREATE_SUCCESS";
export const MENTORS_CREATE_ERROR = "MENTORS_CREATE_ERROR";
export const MENTORS_LIST = "MENTORS_LIST";
export const MENTORS_LIST_SUCCESS = "MENTORS_LIST_SUCCESS";
export const MENTORS_LIST_ERROR = "MENTORS_LIST_ERROR";
export const MENTORS_DELETE = "MENTORS_DELETE";
export const MENTORS_DELETE_SUCCESS = "MENTORS_DELETE_SUCCESS";
export const MENTORS_DELETE_ERROR = "MENTORS_DELETE_ERROR";

export const MENTORS_EDIT = "MENTORS_EDIT";
export const MENTORS_EDIT_SUCCESS = "MENTORS_EDIT_SUCCESS";
export const MENTORS_EDIT_ERROR = "MENTORS_EDIT_ERROR";

// Modules //

export const MODULES_LIST = "MODULES_LIST";
export const MODULES_LIST_SUCCESS = "MODULES_LIST_SUCCESS";
export const MODULES_LIST_ERROR = "MODULES_LIST_ERROR";

export * from "./auth/actions";
export * from "./mentors/actions";
export * from "./modules/actions";
export * from "./sample/actions";
