webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/jobs.js":
/*!********************************!*\
  !*** ./store/reducers/jobs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./store/actions/actionTypes.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility */ "./store/utility.js");


var initialState = {
  loading: false,
  error: null
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
//# sourceMappingURL=_app.js.cfff0f8ef97448f74fe1.hot-update.js.map