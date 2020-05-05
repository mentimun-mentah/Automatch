webpackHotUpdate("static/development/pages/jobs.js",{

/***/ "./store/actions/jobs.js":
/*!*******************************!*\
  !*** ./store/actions/jobs.js ***!
  \*******************************/
/*! exports provided: jobScrapingStart, jobScrapingSuccess, jobScrapingFail, getJobStart, getJobSuccess, getJobFail, jobScraping, getJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobScrapingStart", function() { return jobScrapingStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobScrapingSuccess", function() { return jobScrapingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobScrapingFail", function() { return jobScrapingFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobStart", function() { return getJobStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobSuccess", function() { return getJobSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobFail", function() { return getJobFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobScraping", function() { return jobScraping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJob", function() { return getJob; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./store/actions/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axios-instance */ "./store/axios-instance.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






/***JOB SCRAPING***/

var jobScrapingStart = function jobScrapingStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_START"]
  };
};
var jobScrapingSuccess = function jobScrapingSuccess() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_SUCCESS"]
  };
};
var jobScrapingFail = function jobScrapingFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_FAIL"],
    error: error
  };
};
/***JOB SCRAPING***/

/***GET JOB***/

var getJobStart = function getJobStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_JOB_START"]
  };
};
var getJobSuccess = function getJobSuccess(jobData) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_JOB_SUCCESS"],
    jobData: jobData
  };
};
var getJobFail = function getJobFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_JOB_FAIL"],
    error: error
  };
};
/***GET JOB***/

var jobScraping = function jobScraping(url_job, ctx) {
  return function (dispatch) {
    dispatch(Object(_index__WEBPACK_IMPORTED_MODULE_1__["getUser"])());
    dispatch(jobScrapingStart());

    var _cookie$get = nookies__WEBPACK_IMPORTED_MODULE_4___default.a.get(ctx),
        access_token = _cookie$get.access_token;

    var link = {
      url_job: url_job
    };
    var headerCfg = {
      headers: {
        Authorization: "Bearer ".concat(access_token)
      }
    };
    _axios_instance__WEBPACK_IMPORTED_MODULE_3__["default"].post("/scrape-job", link, headerCfg).then(function () {
      dispatch(Object(_index__WEBPACK_IMPORTED_MODULE_1__["getUser"])());
      dispatch(jobScrapingSuccess());
    })["catch"](function (error) {
      var status = error.response.status;
      dispatch(jobScrapingFail(error.response.data));

      if (status === 400) {
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
          title: error.response.data.message,
          text: "",
          icon: "error",
          button: "Got it",
          dangerMode: true
        });
      }

      if (error.response.data.message === "Upss job portal not registerd yet.") {
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
          title: error.response.data.message,
          text: "Click register to make your job portal available.",
          icon: "warning",
          buttons: ["Cancel", "Register it"],
          dangerMode: true
        }).then(function (willDelete) {
          if (willDelete) next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/job-portal", "/job-portal");
        });
      }

      if (error.response.data.url_job) {
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
          title: error.response.data.url_job[0],
          text: "",
          icon: "error",
          button: "Got it",
          dangerMode: true
        });
      }
    });
  };
};
var getJob = function getJob(jobId, ctx) {
  return function (dispatch) {
    dispatch(Object(_index__WEBPACK_IMPORTED_MODULE_1__["getUser"])());
    dispatch(getJobStart());

    var _cookie$get2 = nookies__WEBPACK_IMPORTED_MODULE_4___default.a.get(ctx),
        access_token = _cookie$get2.access_token;

    var headerCfg = {
      headers: {
        Authorization: "Bearer ".concat(access_token)
      }
    };
    _axios_instance__WEBPACK_IMPORTED_MODULE_3__["default"].get("/job/".concat(jobId), headerCfg).then(function (res) {
      console.log(res.data);
      dispatch(getJobSuccess(res.data));
    })["catch"](function (error) {
      console.log("get Job error ==> ", error.response);
    });
  };
};

/***/ })

})
//# sourceMappingURL=jobs.js.5042dcbca35df992b6a2.hot-update.js.map