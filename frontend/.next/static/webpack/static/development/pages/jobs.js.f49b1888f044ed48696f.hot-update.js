webpackHotUpdate("static/development/pages/jobs.js",{

/***/ "./pages/jobs/index.js":
/*!*****************************!*\
  !*** ./pages/jobs/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withAuth */ "./hoc/withAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Jobs_Job__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Jobs/Job */ "./components/Jobs/Job.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");


var _this = undefined,
    _jsxFileName = "/Users/paulus/Desktop/automatch/pages/jobs/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var linkJob = {
  link: {
    value: "",
    isValid: true,
    message: ""
  }
};

var JobsContainer = function JobsContainer() {
  var dispatch = useDispatch();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(linkJob),
      linkjob = _useState[0],
      setLinkjob = _useState[1];

  var onJobScraping = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (url_job) {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["jobScraping"](url_job));
  }, [dispatch]);

  var submitHandler = function submitHandler(event) {
    event.preventDefault();
    resetValidation();

    if (linkIsValid()) {
      onJobScraping(linkjob.link.value);
    }
  };

  var linkChangeHandler = function linkChangeHandler(event) {
    var data = _objectSpread({}, linkjob, {
      link: {
        value: event.target.value,
        isValid: true,
        message: ""
      }
    });

    setLinkjob(data);
  };

  var clearLinkjobHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var data = _objectSpread({}, linkjob, {
      link: {
        value: "",
        isValid: true,
        message: ""
      }
    });

    setLinkjob(data);
  }, [linkjob]);

  var linkIsValid = function linkIsValid() {
    var link = _objectSpread({}, linkjob.link);

    var isGood = true;

    if (validator__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(link.value, {
      ignore_whitespace: true
    })) {
      link.isValid = false;
      link.message = null;
      link.isGood = false;
      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
        title: "Upss not found!",
        text: "You can click button register it to make your job portal available.",
        icon: "warning",
        buttons: ["Cancel", "Register it"],
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/job-portal", "/job-portal");
      });
    }

    if (!isGood) {
      setLinkjob(link);
    }

    return isGood;
  };

  var resetValidation = function resetValidation() {
    var state = JSON.parse(JSON.stringify(linkjob));

    for (var key in state) {
      if (state[key].hasOwnProperty("isValid")) {
        state[key].isValid = true, state[key].message = "";
      }
    }

    setLinkjob(state);
  };

  return __jsx(_components_Jobs_Job__WEBPACK_IMPORTED_MODULE_6__["default"], {
    change: linkChangeHandler,
    submit: submitHandler,
    value: linkjob.link.value,
    clearLink: clearLinkjobHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  });
};

JobsContainer.getInitialProps = function (ctx) {
  ctx.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["getUser"]());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuth__WEBPACK_IMPORTED_MODULE_2__["withAuth"])(JobsContainer));

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
    dispatch(jobScrapingStart());
    dispatch(Object(_index__WEBPACK_IMPORTED_MODULE_1__["getUser"])());

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
    })["catch"](function (error) {
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
//# sourceMappingURL=jobs.js.f49b1888f044ed48696f.hot-update.js.map