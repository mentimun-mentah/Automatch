import { combineReducers } from "redux";
import authReducer from "./auth";
import jobsReducer from "./jobs";

const reducers = {
  auth: authReducer,
  jobs: jobsReducer,
};

export default combineReducers(reducers);
