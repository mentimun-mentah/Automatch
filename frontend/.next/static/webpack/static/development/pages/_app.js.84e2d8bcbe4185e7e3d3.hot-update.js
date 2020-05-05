webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./store/reducers/auth.js");
/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobs */ "./store/reducers/jobs.js");



var reducers = {
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  jobs: _jobs__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers));

/***/ }),

/***/ "./store/reducers/jobs.js":
/*!********************************!*\
  !*** ./store/reducers/jobs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initialState = {
  loading: false,
  error: null
};
/***JOB SCRAPING***/

var jobScrapingStart = function jobScrapingStart(state, action) {
  return updateObject(state, {
    loading: true
  });
};

var jobScrapingSuccess = function jobScrapingSuccess(state, action) {
  return updateObject(state, {
    loading: false
  });
};

var jobScrapingFail = function jobScrapingFail(state, action) {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};
/***JOB SCRAPING***/


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    /***JOB SCRAPING***/
    case actionType.JOB_SCRAPING_START:
      return jobScrapingStart(state, action);

    case actionType.JOB_SCRAPING_SUCCESS:
      return jobScrapingSuccess(state, action);

    case actionType.JOB_SCRAPING_FAIL:
      return jobScrapingFail(state, action);

    /***JOB SCRAPING***/

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.84e2d8bcbe4185e7e3d3.hot-update.js.map