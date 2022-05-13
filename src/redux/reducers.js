import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import admin from "./admin/reducer";
import sample from "./sample/reducers";
import mentors from "./mentors/reducer";
import modules from "./modules/reducer";

const reducers = combineReducers({
  authUser,
  admin,
  sample,
  mentors,
  modules,
});

export default reducers;
