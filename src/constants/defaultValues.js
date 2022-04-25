export const adminRoot = "/admin";

export const UserRole = {
  // USER ROLE //
};

export const URL = {
  // Post//
  addMentor: "http://15.207.254.154:3002/api/v1/mentor/create",

  //Put//
  login: "http://15.207.254.154:3002/api/v1/student/login",
  changePassword: "http://15.207.254.154:3002/api/v1/student/changePassword",
  updateMentor: "http://15.207.254.154:3002/api/v1/mentor/update",

  //Delete//
  deleteMentor: "http://15.207.254.154:3002/api/v1/mentor/delete",

  //Get//
  logOut: "http://15.207.254.154:3002/api/v1/student/logout",
  getMentors: "http://15.207.254.154:3002/api/v1/mentor/list",
  getModules: "http://15.207.254.154:3002/api/v1/modules/list",
};
const API = "O10ZPA0jZS38wP7cO9EhI3jaDf24WmKX62nWw870";

export const KEY = {
  User_API_Key: API,
};

export const isAuthGuardActive = true;
