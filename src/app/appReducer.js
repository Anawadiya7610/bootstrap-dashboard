import { combineReducers } from "redux";
import { userRaducer as userPage } from "../api/user/userRaducer";

const appReducer = combineReducers(
  {
  userPage,
});
export default appReducer;
