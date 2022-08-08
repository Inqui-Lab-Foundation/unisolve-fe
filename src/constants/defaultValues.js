export const adminRoot = "/admin";

export const UserRole = {
  // USER ROLE //
};

export const URL = {
  // Post//
  login: process.env.REACT_APP_API_BASE_URL + "/auth/login",
  adminLogin: process.env.REACT_APP_API_BASE_URL + "/auth/login",
  teacherLogin: process.env.REACT_APP_API_BASE_URL + "/auth/login",
  addMentor: process.env.REACT_APP_API_BASE_URL + "/mentor/create",
  addAdminCourses: process.env.REACT_APP_API_BASE_URL + "/course",
  postAdminRefQuizResponce:
    process.env.REACT_APP_API_BASE_URL + "/reflectiveQuiz/",

  //Put//
  changePassword: process.env.REACT_APP_API_BASE_URL + "/auth/changePassword",
  updateMentor: process.env.REACT_APP_API_BASE_URL + "/mentor/update",
  putAdminQuizResponce: process.env.REACT_APP_API_BASE_URL + "/quiz/",

  //Delete//
  deleteMentor: process.env.REACT_APP_API_BASE_URL + "/mentor/delete",

  //Get//
  logOut: process.env.REACT_APP_API_BASE_URL + "/auth/logout",
  adminLogOut: process.env.REACT_APP_API_BASE_URL + "/auth/logout",
  teacherLogOut: process.env.REACT_APP_API_BASE_URL + "/auth/logout",
  getMentors: process.env.REACT_APP_API_BASE_URL + "/mentors",
  getModules: process.env.REACT_APP_API_BASE_URL + "/modules/list",
  getAdminCouses: process.env.REACT_APP_API_BASE_URL + "/courses/",
  getAdminCousesDetails: process.env.REACT_APP_API_BASE_URL + "/courses/",
  getAdminEvaluator: process.env.REACT_APP_API_BASE_URL + "/evaluator/list",
  getNotificationsList:
    process.env.REACT_APP_API_BASE_URL + "/notifications/tome",
  getAdminQstList: process.env.REACT_APP_API_BASE_URL + "/quiz/",
  getAdminRefQizList: process.env.REACT_APP_API_BASE_URL + "/reflectiveQuiz/",
  getSchoolRegistrationBulkupload:
    "http://15.207.254.154:3002/api/v1/organizations",
  getFaqCategoryList: `${process.env.REACT_APP_API_BASE_URL}/faqCategories`,
  getFaqList: `${process.env.REACT_APP_API_BASE_URL}/faqs`,
};
const API = "O10ZPA0jZS38wP7cO9EhI3jaDf24WmKX62nWw870";

export const KEY = {
  User_API_Key: API,
};

export const isAuthGuardActive = true;
