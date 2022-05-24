export const adminRoot = "/admin";

export const UserRole = {
  // USER ROLE //
};

export const URL = {
  // Post//
  login: "http://15.207.254.154:3002/api/v1/student/login",
  adminLogin: "http://15.207.254.154:3002/api/v1/admin/login",
  addMentor: "http://15.207.254.154:3002/api/v1/mentor/create",
  addAdminCourses: "http://15.207.254.154:3002/api/v1/course/create",

  //Put//
  changePassword: "http://15.207.254.154:3002/api/v1/student/changePassword",
  updateMentor: "http://15.207.254.154:3002/api/v1/mentor/update",

  //Delete//
  deleteMentor: "http://15.207.254.154:3002/api/v1/mentor/delete",

  //Get//
  logOut: "http://15.207.254.154:3002/api/v1/student/logout",
  adminLogOut: "http://15.207.254.154:3002/api/v1/admin/logout",
  getMentors: "http://15.207.254.154:3002/api/v1/mentor/list",
  getModules: "http://15.207.254.154:3002/api/v1/modules/list",
  getAdminCouses: "http://15.207.254.154:3002/api/v1/course/list",
};
const API = "O10ZPA0jZS38wP7cO9EhI3jaDf24WmKX62nWw870";

export const KEY = {
  User_API_Key: API,
};

export const isAuthGuardActive = true;
