import { combineReducers } from "redux";
import userReducer from "./users/users.reducer";

const rootReducers = () =>
  combineReducers({
    users: userReducer,
  });

  export default rootReducers;