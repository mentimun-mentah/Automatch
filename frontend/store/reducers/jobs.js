import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  loading: false,
  error: null,
  jobData: null,
};

/***JOB SCRAPING***/
const jobScrapingStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const jobScrapingSuccess = (state, action) => {
  return updateObject(state, { loading: false });
};
const jobScrapingFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};
/***JOB SCRAPING***/

/***GET JOB***/
export const getJobStart = (state, action) => {
  return updateObject(state, { loading: true });
};
export const getJobSuccess = (state, action) => {
  return updateObject(state, { loading: false, jobData: action.jobData });
};
export const getJobFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};
/***GET JOB***/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /***JOB SCRAPING***/
    case actionType.JOB_SCRAPING_START:
      return jobScrapingStart(state, action);
    case actionType.JOB_SCRAPING_SUCCESS:
      return jobScrapingSuccess(state, action);
    case actionType.JOB_SCRAPING_FAIL:
      return jobScrapingFail(state, action);
    /***JOB SCRAPING***/

    /***GET JOB***/
    case actionType.GET_JOB_START:
      return getJobStart(state, action);
    case actionType.GET_JOB_SUCCESS:
      return getJobSuccess(state, action);
    case actionType.GET_JOB_FAIL:
      return getJobFail(state, action);
    /***GET JOB***/

    default:
      return state;
  }
};

export default reducer;
