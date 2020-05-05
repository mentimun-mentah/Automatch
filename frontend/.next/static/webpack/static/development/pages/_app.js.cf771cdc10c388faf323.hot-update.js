webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./store/actions/actionTypes.js ***!
  \**************************************/
/*! exports provided: AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, GET_USER, REFRESH_TOKEN_SUCCESS, JOB_SCRAPING_START, JOB_SCRAPING_SUCCESS, JOB_SCRAPING_FAIL, GET_JOB_START, GET_JOB_SUCCESS, GET_JOB_FAIL, MODAL_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_START", function() { return AUTH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FAIL", function() { return AUTH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGOUT", function() { return AUTH_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN_SUCCESS", function() { return REFRESH_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOB_SCRAPING_START", function() { return JOB_SCRAPING_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOB_SCRAPING_SUCCESS", function() { return JOB_SCRAPING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOB_SCRAPING_FAIL", function() { return JOB_SCRAPING_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_JOB_START", function() { return GET_JOB_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_JOB_SUCCESS", function() { return GET_JOB_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_JOB_FAIL", function() { return GET_JOB_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_RESET", function() { return MODAL_RESET; });
//AUTH
var AUTH_START = "AUTH_START";
var AUTH_SUCCESS = "AUTH_SUCCESS";
var AUTH_FAIL = "AUTH_FAIL";
var AUTH_LOGOUT = "AUTH_LOGOUT";
var GET_USER = "GET_USER";
var REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS"; //JOBS

var JOB_SCRAPING_START = "JOB_SCRAPING_START";
var JOB_SCRAPING_SUCCESS = "JOB_SCRAPING_SUCCESS";
var JOB_SCRAPING_FAIL = "JOB_SCRAPING_FAIL";
var GET_JOB_START = "GET_JOB_START";
var GET_JOB_SUCCESS = "GET_JOB_SUCCESS";
var GET_JOB_FAIL = "GET_JOB_FAIL"; //MODAL

var MODAL_RESET = "MODAL_RESET";

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: authCheckState, refreshToken, logout, getUser, jobScraping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./store/actions/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authCheckState", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["authCheckState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refreshToken", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["refreshToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["getUser"]; });

/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs */ "./store/actions/jobs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jobScraping", function() { return _jobs__WEBPACK_IMPORTED_MODULE_1__["jobScraping"]; });




/***/ }),

/***/ "./store/actions/jobs.js":
/*!*******************************!*\
  !*** ./store/actions/jobs.js ***!
  \*******************************/
/*! exports provided: jobScrapingStart, jobScrapingSuccess, jobScrapingFail, getJobStart, getJobSuccess, getJobFail, jobScraping */
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
var jobScrapingSuccess = function jobScrapingSuccess(user) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_SUCCESS"],
    user: user
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

/***/ })

})
//# sourceMappingURL=_app.js.cf771cdc10c388faf323.hot-update.js.map