import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import sample from "./sample/reducers";

const reducers = combineReducers({
  authUser,
  sample,
});

export default reducers;
