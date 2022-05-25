import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import admin from "./admin/reducer";
import sample from "./sample/reducers";
import mentors from "./mentors/reducer";
import modules from "./modules/reducer";
import adminCourses from "./adminCourses/reducer";

const reducers = combineReducers({
  authUser,
  admin,
  adminCourses,
  sample,
  mentors,
  modules,
});

export default reducers;
