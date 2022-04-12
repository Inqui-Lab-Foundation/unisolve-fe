import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import sample from "./sample/reducers";
import mentors from "./mentors/reducer";

const reducers = combineReducers({
  authUser,
  sample,
  mentors,
});

export default reducers;
