export const adminRoot = "/admin";

export const UserRole = {
  // USER ROLE //
};

export const URL = {
  // Post//
  login: "http://15.207.254.154:3002/api/v1/auth/login",
  adminLogin: "http://15.207.254.154:3002/api/v1/auth/login",
  addMentor: "http://15.207.254.154:3002/api/v1/mentor/create",
  addAdminCourses: "http://15.207.254.154:3002/api/v1/course",

  //Put//
  changePassword: "http://15.207.254.154:3002/api/v1/auth/changePassword",
  updateMentor: "http://15.207.254.154:3002/api/v1/mentor/update",
  putAdminQuizResponce: "http://15.207.254.154:3002/api/v1/quiz/",

  //Delete//
  deleteMentor: "http://15.207.254.154:3002/api/v1/mentor/delete",

  //Get//
  logOut: "http://15.207.254.154:3002/api/v1/auth/logout",
  adminLogOut: "http://15.207.254.154:3002/api/v1/auth/logout",
  getMentors: "http://15.207.254.154:3002/api/v1/mentor/list",
  getModules: "http://15.207.254.154:3002/api/v1/modules/list",
  getAdminCouses: "http://15.207.254.154:3002/api/v1/courses/",
  getAdminCousesDetails: "http://15.207.254.154:3002/api/v1/courses/",
  getAdminEvaluator: "http://15.207.254.154:3002/api/v1/evaluator/list",
  getNotificationsList: "http://15.207.254.154:3002/api/v1/notifications/tome",
  getAdminQstList: "http://15.207.254.154:3002/api/v1/quiz/",
  getSchoolRegistrationBulkupload:
    "http://15.207.254.154:3002/api/v1/organizations",
  getEvaluatorsBulkupload:
    "http://15.207.254.154:3002/api/v1/crud/user_profile/",
};
const API = "O10ZPA0jZS38wP7cO9EhI3jaDf24WmKX62nWw870";

export const KEY = {
  User_API_Key: API,
};

export const isAuthGuardActive = true;
