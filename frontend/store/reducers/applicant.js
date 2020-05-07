import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  applicant: null,
  getApplicant: null,
  loading: false,
  modal: true,
  error: null,
  loadingScore: false,
};

/***SCRAPPING APPLICANT***/
const applicantScrapingStart = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};
const applicantScrapingSuccess = (state, action) => {
  return updateObject(state, { loading: false });
};
const applicantScrapingFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};
/***SCRAPPING APPLICANT***/

/***GET APPLICANT***/
const getApplicantStart = (state, action) => {
  return updateObject(state, { loading: false, error: null });
};
const getApplicantSuccess = (state, action) => {
  return updateObject(state, {
    getApplicant: action.getApplicant,
    loading: false,
  });
};
const getApplicantFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};
/***GET APPLICANT***/

/***DELETE APPLICANT***/
const deleteApplicantStart = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};
const deleteApplicantSuccess = (state, action) => {
  return updateObject(state, { loading: false });
};
const deleteApplicantFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};
/***DELETE APPLICANT***/

/***GET SCORE APPLICANT***/
const getScoreApplicantStart = (state, action) => {
  return updateObject(state, { loadingScore: true, error: null, modal: true });
};
const getScoreApplicantSuccess = (state, action) => {
  return updateObject(state, { loadingScore: false, modal: false });
};
const getScoreApplicantFail = (state, action) => {
  return updateObject(state, {
    loadingScore: false,
    error: action.error,
    modal: false,
  });
};
/***GET SCORE APPLICANT***/

/***MODAL RESET***/
const modalReset = (state, action) => {
  return updateObject(state, { modal: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /***SCRAPPING APPLICANT***/
    case actionType.APPLICANT_SCRAPING_START:
      return applicantScrapingStart(state, action);
    case actionType.APPLICANT_SCRAPING_SUCCESS:
      return applicantScrapingSuccess(state, action);
    case actionType.APPLICANT_SCRAPING_FAIL:
      return applicantScrapingFail(state, action);

    /***GET APPLICANT***/
    case actionType.GET_APPLICANT_START:
      return getApplicantStart(state, action);
    case actionType.GET_APPLICANT_SUCCESS:
      return getApplicantSuccess(state, action);
    case actionType.GET_APPLICANT_FAIL:
      return getApplicantFail(state, action);

    /***DELETE APPLICANT***/
    case actionType.DELETE_APPLICANT_START:
      return deleteApplicantStart(state, action);
    case actionType.DELETE_APPLICANT_SUCCESS:
      return deleteApplicantSuccess(state, action);
    case actionType.DELETE_APPLICANT_FAIL:
      return deleteApplicantFail(state, action);

    /***GET SCORE APPLICANT***/
    case actionType.GETSCORE_APPLICANT_START:
      return getScoreApplicantStart(state, action);
    case actionType.GETSCORE_APPLICANT_SUCCESS:
      return getScoreApplicantSuccess(state, action);
    case actionType.GETSCORE_APPLICANT_FAIL:
      return getScoreApplicantFail(state, action);

    case actionType.MODAL_RESET:
      return modalReset(state, action);

    default:
      return state;
  }
};

export default reducer;
