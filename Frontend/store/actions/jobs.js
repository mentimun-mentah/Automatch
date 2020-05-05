import * as actionType from "./actionTypes";
import { getUser } from "./index";
import Router from "next/router";
import axios from "../axios-instance";
import cookie from "nookies";
import swal from "sweetalert";

/***JOB SCRAPING***/
export const jobScrapingStart = () => {
  return {
    type: actionType.JOB_SCRAPING_START,
  };
};

export const jobScrapingSuccess = () => {
  return {
    type: actionType.JOB_SCRAPING_SUCCESS,
  };
};

export const jobScrapingFail = (error) => {
  return {
    type: actionType.JOB_SCRAPING_FAIL,
    error: error,
  };
};
/***JOB SCRAPING***/

/***GET JOB***/
export const getJobStart = () => {
  return {
    type: actionType.GET_JOB_START,
  };
};

export const getJobSuccess = (jobData) => {
  return {
    type: actionType.GET_JOB_SUCCESS,
    jobData: jobData,
  };
};

export const getJobFail = (error) => {
  return {
    type: actionType.GET_JOB_FAIL,
    error: error,
  };
};
/***GET JOB***/

export const jobScraping = (url_job, ctx) => {
  return (dispatch) => {
    dispatch(getUser());
    dispatch(jobScrapingStart());
    const { access_token } = cookie.get(ctx);
    const link = { url_job: url_job };
    const headerCfg = {
      headers: { Authorization: `Bearer ${access_token}` },
    };
    axios
      .post("/scrape-job", link, headerCfg)
      .then(() => {
        dispatch(getUser());
        dispatch(jobScrapingSuccess());
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
    const headerCfg = {
      headers: { Authorization: `Bearer ${access_token}` },
    };
    axios
      .get(`/job/${jobId}`, headerCfg)
      .then((res) => {
        console.log(res.data);
        dispatch(getJobSuccess(res.data));
      })
      .catch((error) => {
        console.log("get Job error ==> ", error.response);
      });
  };
};
