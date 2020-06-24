import * as actionType from "./actionTypes";
import { getJob, getUser, logout } from "./index";
import axios from "../axios-instance";
import cookie from "nookies";
import swal from "sweetalert";

/***SCRAPPING APPLICANT***/
export const applicantScrapingStart = () => {
  return { type: actionType.APPLICANT_SCRAPING_START };
};
export const applicantScrapingSuccess = () => {
  return { type: actionType.APPLICANT_SCRAPING_SUCCESS };
};
export const applicantScrapingFail = (error) => {
  return { type: actionType.APPLICANT_SCRAPING_FAIL, error: error };
};
/***SCRAPPING APPLICANT***/

/***GET APPLICANT***/
export const getApplicantStart = () => {
  return { type: actionType.GET_APPLICANT_START };
};
export const getApplicantSuccess = (getApplicant) => {
  return { type: actionType.GET_APPLICANT_SUCCESS, getApplicant: getApplicant };
};
export const getApplicantFail = (error) => {
  return { type: actionType.GET_APPLICANT_FAIL, error: error };
};
/***GET APPLICANT***/

/***DELETE APPLICANT***/
export const deleteApplicantStart = () => {
  return { type: actionType.DELETE_APPLICANT_START };
};
export const deleteApplicantSuccess = () => {
  return { type: actionType.DELETE_APPLICANT_SUCCESS };
};
export const deleteApplicantFail = () => {
  return { type: actionType.DELETE_APPLICANT_FAIL };
};
/***DELETE APPLICANT***/

/***GET SCORE APPLICANT***/
export const getScoreApplicantStart = () => {
  return { type: actionType.GETSCORE_APPLICANT_START };
};
export const getScoreApplicantSuccess = () => {
  return { type: actionType.GETSCORE_APPLICANT_SUCCESS };
};
export const getScoreApplicantFail = (error) => {
  return { type: actionType.GETSCORE_APPLICANT_FAIL, error: error };
};
/***GET SCORE APPLICANT***/

/***QUALIFIED APPLICANT***/
export const qualifyApplicantStart = () => {
  return { type: actionType.QUALIFY_APPLICANT_START };
};
export const qualifyApplicantSuccess = () => {
  return { type: actionType.QUALIFY_APPLICANT_SUCCESS };
};
export const qualifyApplicantFail = () => {
  return { type: actionType.QUALIFY_APPLICANT_FAIL };
};
/***QUALIFIED APPLICANT***/

/***SEARCH APPLICANT***/
export const searchApplicantStart = () => {
  return { type: actionType.SEARCH_APPLICANT_START };
};
export const searchApplicantSuccess = (applicant) => {
  return { type: actionType.SEARCH_APPLICANT_SUCCESS, applicant: applicant };
};
export const searchApplicantFail = (error) => {
  return { type: actionType.SEARCH_APPLICANT_FAIL, error: error };
};
/***SEARCH APPLICANT***/

/***MODAL RESET***/
export const modalReset = () => {
  return { type: actionType.MODAL_RESET };
};
/***MODAL RESET***/

export const applicantScraping = (url, jobId, ctx) => {
  return (dispatch) => {
    dispatch(getUser());
    dispatch(applicantScrapingStart());
    const { access_token } = cookie.get(ctx);
    const links = { url_applicants: url };
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .post(`/scrape-applicants/${jobId}`, links, headerCfg)
      .then(() => {
        dispatch(applicantScrapingSuccess());
        dispatch(getJob(jobId));
      })
      .catch((error) => {
        console.log(error.response)
        let urlError = "";
        if(error.response && error.response.data){
          for (let key in error.response.data.url_applicants) {
            urlError = error.response.data.url_applicants[key];
            console.log(urlError);
          }
          console.log(urlError);
          dispatch(applicantScrapingFail(error.response));
          swal({
            icon: "error",
            content: {
              element: "p",
              attributes: {
                innerHTML: `${urlError}`,
              },
            },

            button: "Got it",
            dangerMode: true,
          });
        }
        if(error.response && error.response.data.message){
          swal({
            icon: "error",
            title: error.response.data.message,
          })
        }
        console.log("applicantScrapingFail => ", error.response);
      });
  };
};

export const getApplicant = (id, ctx) => {
  return (dispatch) => {
    dispatch(getUser());
    dispatch(getApplicantStart());
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .get(`/applicant/${id}`, headerCfg)
      .then((res) => {
        dispatch(getApplicantSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getApplicantFail(error));
        console.log("getApplicantFail => ", error.response);
      });
  };
};

export const deleteApplicant = (id, jobId, ctx) => {
  return (dispatch) => {
    dispatch(getUser());
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    swal({
      title: "Are you sure?!",
      text: "This will delete the candidate profile.",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteApplicantStart());
        axios
          .delete(`/applicant/${id}`, headerCfg)
          .then((res) => {
            swal({
              title: "Yuhuu!",
              text: res.data.message,
              icon: "success",
              timer: 3000,
            });
            dispatch(deleteApplicantSuccess());
            dispatch(getJob(jobId));
          })
          .catch((error) => {
            dispatch(deleteApplicantFail());
            console.log("deleteApplicantFail => ", error.response);
          });
      } else {
      }
    });
  };
};

export const getScoreApplicant = (jobId, ctx) => {
  return (dispatch) => {
    dispatch(getUser());
    dispatch(getScoreApplicantStart());
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .get(`/get-score/applicant/${jobId}`, headerCfg)
      .then((res) => {
        console.log("getScoreApplicantSuccess => ", res.data);
        dispatch(getScoreApplicantSuccess());
        dispatch(getJob(jobId));
        dispatch(modalReset());
        if (res.data.message === "All applicant has been scored") {
          swal({
            icon: "success",
            text: "All applicant has been scored",
          });
        }
      })
      .catch((err) => {
        console.log("getScoreApplicantFail => ", err.response);
        if (err.response && err.response.status === 422) {
          dispatch(logout());
        }
        dispatch(getScoreApplicantFail());
        dispatch(modalReset());
      });
  };
};

export const qualifyApplicant = (id, jobId, ctx) => {
  return (dispatch) => {
    dispatch(getUser());
    dispatch(qualifyApplicantStart());
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .put(`/applicant/qualify/${id}`, null, headerCfg)
      .then((res) => {
        dispatch(getApplicant(id));
        dispatch(getJob(jobId));
        dispatch(qualifyApplicantSuccess());
        swal({ text: res.data.message, icon: "success" });
      })
      .catch((err) => {
        dispatch(getApplicant(id));
        dispatch(getJob(jobId));
        dispatch(qualifyApplicantFail());
        swal({ text: err.response.message, icon: "error" });
      });
  };
};

export const searchApplicant = (search, jobId, ctx) => {
  return (dispatch) => {
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .get(`/search-applicant/?s=${search}&job_id=${jobId}`, headerCfg)
      .then((res) => {
        dispatch(searchApplicantSuccess(res.data));
      })
      .catch((err) => {
        console.log("searchApplicant catch => ",err.response)
      })
  };
};
