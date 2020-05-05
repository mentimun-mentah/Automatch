webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/jobs.js":
/*!********************************!*\
  !*** ./store/reducers/jobs.js ***!
  \********************************/
/*! exports provided: getJobStart, getJobSuccess, getJobFail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobStart", function() { return getJobStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobSuccess", function() { return getJobSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobFail", function() { return getJobFail; });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./store/actions/actionTypes.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility */ "./store/utility.js");


var initialState = {
  loading: false,
  error: null,
  jobData: null
};
/***JOB SCRAPING***/

var jobScrapingStart = function jobScrapingStart(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: true
  });
};

var jobScrapingSuccess = function jobScrapingSuccess(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: false
  });
};

var jobScrapingFail = function jobScrapingFail(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: false,
    error: action.error
  });
};
/***JOB SCRAPING***/

/***GET JOB***/


var getJobStart = function getJobStart(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: true
  });
};
var getJobSuccess = function getJobSuccess(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: false,
    jobData: action.jobData
  });
};
var getJobFail = function getJobFail(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    loading: false,
    error: action.error
  });
};
/***GET JOB***/

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    /***JOB SCRAPING***/
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_START"]:
      return jobScrapingStart(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_SUCCESS"]:
      return jobScrapingSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_FAIL"]:
      return jobScrapingFail(state, action);

    /***JOB SCRAPING***/

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.a33f1a11de7f329f672e.hot-update.js.map