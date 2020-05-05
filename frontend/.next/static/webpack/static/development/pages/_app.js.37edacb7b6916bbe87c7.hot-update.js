webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/actions/jobs.js":
/*!*******************************!*\
  !*** ./store/actions/jobs.js ***!
  \*******************************/
/*! exports provided: jobScrapingStart, jobScrapingSuccess, jobScrapingFail, jobScraping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobScrapingStart", function() { return jobScrapingStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobScrapingSuccess", function() { return jobScrapingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobScrapingFail", function() { return jobScrapingFail; });
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
    _axios_instance__WEBPACK_IMPORTED_MODULE_3__["default"].post("/scrape-job", link, headerCfg).then(function (res) {
      console.log(res.data);
      dispatch(Object(_index__WEBPACK_IMPORTED_MODULE_1__["getUser"])());
      dispatch(jobScrapingSuccess());
    })["catch"](function (error) {
      console.log(error.response);
      dispatch(jobScrapingFail(error.response.data));

      if (error.response.data.message) {
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
//# sourceMappingURL=_app.js.37edacb7b6916bbe87c7.hot-update.js.map