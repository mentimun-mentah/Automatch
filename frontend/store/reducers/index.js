import { combineReducers } from "redux";
import authReducer from "./auth";
import jobsReducer from "./jobs";
import applicantsReducer from "./applicant";

const reducers = {
  auth: authReducer,
  jobs: jobsReducer,
  applicants: applicantsReducer,
};

export default combineReducers(reducers);
