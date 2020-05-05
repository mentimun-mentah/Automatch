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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hoc_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/withAuth */ "./hoc/withAuth.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Jobs_Job__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Jobs/Job */ "./components/Jobs/Job.js");
/* harmony import */ var _components_Jobs_EmptyCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Jobs/EmptyCard */ "./components/Jobs/EmptyCard.js");
/* harmony import */ var _components_Jobs_JobCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Jobs/JobCard */ "./components/Jobs/JobCard.js");


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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(linkJob),
      linkjob = _useState[0],
      setLinkjob = _useState[1];

  var jobs = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth.user;
  });
  console.log("jobs ==> ", jobs);
  var onJobScraping = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (url_job) {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["jobScraping"](url_job));
  }, [dispatch]);
  var onGetUser = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["getUser"]());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onGetUser();
  }, [onGetUser]);

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

    if (validator__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(link.value, {
      ignore_whitespace: true
    })) {
      link.isValid = false;
      link.message = null;
      link.isGood = false;
      sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
        title: "Upss not found!",
        text: "You can click button register it to make your job portal available.",
        icon: "warning",
        buttons: ["Cancel", "Register it"],
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/job-portal", "/job-portal");
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

  var jobCard = __jsx(_components_Jobs_EmptyCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  });

  if (jobs !== null && jobs.jobs !== undefined && jobs.jobs.length > 0) {
    jobCard = __jsx("div", {
      className: "row row-cols-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }
    }, jobs.jobs.map(function (job, i) {
      var image = job.image,
          company = job.company,
          location = job.location,
          title_job = job.title_job,
          posted = job.posted,
          id = job.id;
      return __jsx(_components_Jobs_JobCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: i,
        image: image,
        company: company,
        location: location,
        title_job: title_job,
        posted: posted,
        id: id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      });
    }));
  }

  return __jsx(_components_Jobs_Job__WEBPACK_IMPORTED_MODULE_8__["default"], {
    change: linkChangeHandler,
    submit: submitHandler,
    value: linkjob.link.value,
    clearLink: clearLinkjobHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, jobCard);
};

JobsContainer.getInitialProps = function (ctx) {
  ctx.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["getUser"]());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuth__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(JobsContainer));

/***/ })

})
//# sourceMappingURL=jobs.js.0db83f8a77a2284ebf19.hot-update.js.map