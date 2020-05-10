import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  loading: false,
  error: null,
  jobData: null,
  applicants: [],
};

/***JOB SCRAPING***/
const jobScrapingStart = (state, action) => {
  return updateObject(state, { loading: true, error: null });
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
  return updateObject(state, { loading: true, error: null });
};
export const getJobSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    jobData: action.jobData,
    applicants: action.jobData.applicants,
  });
};
export const getJobFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};
/***GET JOB***/

/***GET CK JOB***/
export const getCkStart = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};
export const getCkSuccess = (state, action) => {
  return updateObject(state, { loading: false });
};
export const getCkFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};
/***GET CK JOB***/

/***SEARCH APPLICANT***/
const searchApplicantStart = (state, action) => {
  return updateObject(state, { loading: false, error: null });
};
const searchApplicantSuccess = (state, action) => {
  let newState = { ...state };
  newState.jobData.applicants = action.applicant;
  return newState;
};
const searchApplicantFail = (state, action) => {
  return updateObject(state, { loading: false });
};
/***SEARCH APPLICANT***/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /***JOB SCRAPING***/
    case actionType.JOB_SCRAPING_START:
      return jobScrapingStart(state, action);
    case actionType.JOB_SCRAPING_SUCCESS:
      return jobScrapingSuccess(state, action);
    case actionType.JOB_SCRAPING_FAIL:
      return jobScrapingFail(state, action);

    /***GET JOB***/
    case actionType.GET_JOB_START:
      return getJobStart(state, action);
    case actionType.GET_JOB_SUCCESS:
      return getJobSuccess(state, action);
    case actionType.GET_JOB_FAIL:
      return getJobFail(state, action);

    /***GET CK JOB***/
    case actionType.GET_CK_START:
      return getCkStart(state, action);
    case actionType.GET_CK_SUCCESS:
      return getCkSuccess(state, action);
    case actionType.GET_CK_FAIL:
      return getCkFail(state, action);

    /***SEARCH APPLICANT***/
    case actionType.SEARCH_APPLICANT_START:
      return searchApplicantStart(state, action);
    case actionType.SEARCH_APPLICANT_SUCCESS:
      return searchApplicantSuccess(state, action);
    case actionType.SEARCH_APPLICANT_FAIL:
      return searchApplicantFail(state, action);

    default:
      return state;
  }
};

export default reducer;
