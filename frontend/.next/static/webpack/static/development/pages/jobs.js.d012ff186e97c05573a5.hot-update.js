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
/* harmony import */ var _components_Jobs_Job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Jobs/Job */ "./components/Jobs/Job.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");


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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(linkJob),
      linkjob = _useState[0],
      setLinkjob = _useState[1];

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

  var submitHandler = function submitHandler(event) {
    event.preventDefault();
    resetValidation();

    if (linkIsValid()) {
      console.log();
      linkjob.link.value;
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

  var linkIsValid = function linkIsValid() {
    var link = _objectSpread({}, linkjob.link);

    var isGood = true;

    if (validator.isEmpty(link.value, {
      ignore_whitespace: true
    })) {
      link.isValid = false;
      link.message = null;
      link.isGood = false;
      swal({
        title: "Upss not found!",
        text: "You can click button register it to make your job portal available.",
        icon: "warning",
        buttons: ["Cancel", "Register it"],
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) Router.push("/job-portal", "/job-portal");
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

  return __jsx(_components_Jobs_Job__WEBPACK_IMPORTED_MODULE_3__["default"], {
    change: linkChangeHandler,
    submit: submitHandler,
    value: linkjob.link.value,
    clearLink: clearLinkjobHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  });
};

JobsContainer.getInitialProps = function (ctx) {
  ctx.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["getUser"]());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuth__WEBPACK_IMPORTED_MODULE_2__["withAuth"])(JobsContainer));

/***/ })

})
//# sourceMappingURL=jobs.js.d012ff186e97c05573a5.hot-update.js.map