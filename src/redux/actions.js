// Export All Actions In Over All Foulder //

/* Sample List  */
export const GET_SAMPLE_LIST_DATA = "GET_SAMPLE_LIST_DATA";

/* Studnt */
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

/* Admin */
export const ADMIN_LOGIN_USER = "ADMIN_LOGIN_USER";
export const ADMIN_LOGIN_USER_SUCCESS = "ADMIN_LOGIN_USER_SUCCESS";
export const ADMIN_LOGIN_USER_ERROR = "ADMIN_LOGIN_USER_ERROR";
export const ADMIN_LOGIN_USER_LOGOUT = "ADMIN_LOGIN_USER_LOGOUT";
export const ADMIN_LOGIN_USER_LOGOUT_SUCCESS =
  "ADMIN_LOGIN_USER_LOGOUT_SUCCESS";
export const ADMIN_LOGIN_USER_LOGOUT_ERROR = "ADMIN_LOGIN_USER_LOGOUT_ERROR";

export const ADMIN_COURSES_LIST = "ADMIN_COURSES_LIST";
export const ADMIN_COURSES_LIST_SUCCESS = "ADMIN_COURSES_LIST_SUCCESS";
export const ADMIN_COURSES_LIST_ERROR = "ADMIN_COURSES_LIST_ERROR";

export const ADMIN_COURSES_DETAILS = "ADMIN_COURSES_DETAILS";
export const ADMIN_COURSES_DETAILS_SUCCESS = "ADMIN_COURSES_DETAILS_SUCCESS";
export const ADMIN_COURSES_DETAILS_ERROR = "ADMIN_COURSES_DETAILS_ERROR";

export const ADMIN_COURSES_QUESTIONS = "ADMIN_COURSES_QUESTIONS";
export const ADMIN_COURSES_QUESTIONS_SUCCESS =
  "ADMIN_COURSES_QUESTIONS_SUCCESS";
export const ADMIN_COURSES_QUESTIONS_ERROR = "ADMIN_COURSES_QUESTIONS_ERROR";

export const ADMIN_COURSES_QUESTIONS_RESPONCE =
  "ADMIN_COURSES_QUESTIONS_RESPONCE";
export const ADMIN_COURSES_QUESTIONS_RESPONCE_SUCCESS =
  "ADMIN_COURSES_QUESTIONS_RESPONCE_SUCCESS";
export const ADMIN_COURSES_QUESTIONS_RESPONCE_ERROR =
  "ADMIN_COURSES_QUESTIONS_RESPONCE_ERROR";

export const ADMIN_COURSES_REF_QUESTIONS_RESPONCE =
  "ADMIN_COURSES_REF_QUESTIONS_RESPONCE";
export const ADMIN_COURSES_REF_QUESTIONS_RESPONCE_SUCCESS =
  "ADMIN_COURSES_REF_QUESTIONS_RESPONCE_SUCCESS";
export const ADMIN_COURSES_REF_QUESTIONS_RESPONCE_ERROR =
  "ADMIN_COURSES_REF_QUESTIONS_RESPONCE_ERROR";

export const ADMIN_COURSES_REF_QUESTIONS = "ADMIN_COURSES_REF_QUESTIONS";
export const ADMIN_COURSES_REF_QUESTIONS_SUCCESS =
  "ADMIN_COURSES_REF_QUESTIONS_SUCCESS";
export const ADMIN_COURSES_REF_QUESTIONS_ERROR =
  "ADMIN_COURSES_REF_QUESTIONS_ERROR";

export const ADMIN_COURSES_CREATE = "ADMIN_COURSES_CREATE";
export const ADMIN_COURSES_CREATE_SUCCESS = "ADMIN_COURSES_CREATE_SUCCESS";
export const ADMIN_COURSES_CREATE_ERROR = "ADMIN_COURSES_CREATE_ERROR";

export const ADMIN_MENTORS_LIST = "ADMIN_MENTORS_LIST";
export const ADMIN_MENTORS_LIST_SUCCESS = "ADMIN_MENTORS_LIST_SUCCESS";
export const ADMIN_MENTORS_LIST_ERROR = "ADMIN_MENTORS_LIST_ERROR";

export const ADMIN_EVALUTORS_LIST = "ADMIN_EVALUTORS_LIST";
export const ADMIN_EVALUTORS_LIST_SUCCESS = "ADMIN_EVALUTORS_LIST_SUCCESS";
export const ADMIN_EVALUTORS_LIST_ERROR = "ADMIN_EVALUTORS_LIST_ERROR";

export const ADMIN_NOTIFICATIONS_LIST = "ADMIN_NOTIFICATIONS_LIST";
export const ADMIN_NOTIFICATIONS_LIST_SUCCESS =
  "ADMIN_NOTIFICATIONS_LIST_SUCCESS";
export const ADMIN_NOTIFICATIONS_LIST_ERROR = "ADMIN_NOTIFICATIONS_LIST_ERROR";

//
export const SCHOOL_REGISTRATOION_BULKUPLOAD_LIST =
  "SCHOOL_REGISTRATOION_BULKUPLOAD_LIST";
export const SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_SUCCESS =
  "SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_SUCCESS";
export const SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_ERROR =
  "SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_ERROR";

//
export const EVALUATORS_BULKUPLOAD_LIST = "EVALUATORS_BULKUPLOAD_LIST";
export const EVALUATORS_BULKUPLOAD_LIST_SUCCESS =
  "EVALUATORS_BULKUPLOAD_LIST_SUCCESS";
export const EVALUATORS_BULKUPLOAD_LIST_ERROR =
  "EVALUATORS_BULKUPLOAD_LIST_ERROR";

export * from "./auth/actions";
export * from "./admin/actions";
export * from "./mentors/actions";
export * from "./modules/actions";
export * from "./sample/actions";
export * from "./adminCourses/actions";
export * from "./adminEvalutors/actions";
export * from "./adminMentors/actions";
export * from "./adminNotifications/actions";
export * from "./schoolRegistration/actions";
export * from "./evaluatorsBulkUpload/actions";
