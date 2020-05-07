import * as actionType from "./actionTypes";
import { getUser } from "./index";
import Router from "next/router";
import axios from "../axios-instance";
import cookie from "nookies";
import swal from "sweetalert";

/***JOB SCRAPING***/
export const jobScrapingStart = () => {
  return { type: actionType.JOB_SCRAPING_START };
};
export const jobScrapingSuccess = () => {
  return { type: actionType.JOB_SCRAPING_SUCCESS };
};
export const jobScrapingFail = (error) => {
  return { type: actionType.JOB_SCRAPING_FAIL, error: error };
};
/***JOB SCRAPING***/

/***GET JOB***/
export const getJobStart = () => {
  return { type: actionType.GET_JOB_START };
};
export const getJobSuccess = (jobData) => {
  return { type: actionType.GET_JOB_SUCCESS, jobData: jobData };
};
export const getJobFail = (error) => {
  return { type: actionType.GET_JOB_FAIL, error: error };
};
/***GET JOB***/

/***GET CK JOB***/
export const getCkStart = () => {
  return { type: actionType.GET_CK_START };
};
export const getCkSuccess = () => {
  return { type: actionType.GET_CK_SUCCESS };
};
export const getCkFail = (error) => {
  return { type: actionType.GET_CK_FAIL, error: error };
};
/***GET CK JOB***/

/***DELETE JOB***/
export const deleteJobStart = () => {
  return { type: actionType.DELETE_JOB_START };
};
export const deleteJobSuccess = () => {
  return { type: actionType.DELETE_JOB_SUCCESS };
};
export const deleteJobFail = () => {
  return { type: actionType.DELETE_JOB_FAIL };
};
/***DELETE JOB***/

export const jobScraping = (url_job, ctx) => {
  return (dispatch) => {
    dispatch(getUser());
    dispatch(jobScrapingStart());
    const { access_token } = cookie.get(ctx);
    const link = { url_job: url_job };
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .post("/scrape-job", link, headerCfg)
      .then(() => {
        dispatch(jobScrapingSuccess());
        dispatch(getUser(access_token));
      })
      .catch((error) => {
        const { status } = error.response;
        dispatch(jobScrapingFail(error.response.data));
        if (status === 400) {
          swal({
            title: error.response.data.message,
            text: "",
            icon: "error",
            button: "Got it",
            dangerMode: true,
          });
        }
        if (
          error.response.data.message === "Upss job portal not registerd yet."
        ) {
          swal({
            title: error.response.data.message,
            text: "Click register to make your job portal available.",
            icon: "warning",
            buttons: ["Cancel", "Register it"],
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) Router.push("/job-portal", "/job-portal");
          });
        }
        if (error.response.data.url_job) {
          swal({
            title: error.response.data.url_job[0],
            text: "",
            icon: "error",
            button: "Got it",
            dangerMode: true,
          });
        }
      });
  };
};

export const getJob = (jobId, ctx) => {
  return (dispatch) => {
    dispatch(getUser());
    dispatch(getJobStart());
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .get(`/job/${jobId}`, headerCfg)
      .then((res) => {
        dispatch(getJobSuccess(res.data));
      })
      .catch((error) => {
        console.log("get Job error ==> ", error.response);
      });
  };
};

export const getCk = (jobId, ctx) => {
  return (dispatch) => {
    dispatch(getCkStart());
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    axios
      .get(`/concept-keyword-job/${jobId}`, headerCfg)
      .then(() => {
        dispatch(getCkSuccess());
        dispatch(getJob(jobId, access_token));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(getCkFail());
      });
  };
};

export const deleteJob = (jobId, ctx) => {
  return (dispatch) => {
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    swal({
      title: "Are you sure?!",
      text: "This will delete your job data and all the candidates.",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteJobStart());
          axios
            .delete(`/delete-job/${jobId}`, headerCfg)
            .then((res) => {
              Router.push("/jobs", "/jobs");
              dispatch(deleteJobSuccess());
              swal({
                title: "Yuhuu!",
                text: res.data.message,
                icon: "success",
                timer: 3000,
              });
            })
            .catch((error) => {
              dispatch(deleteJobFail());
              console.log("deleteJobFail => ", error.response);
            });
        }
      })
      .catch((error) => {
        dispatch(deleteJobFail());
        console.log("deleteJobFail => ", error.response);
      });
  };
};
