webpackHotUpdate("static/development/pages/jobs.js",{

/***/ "./components/Jobs/EmptyCard.js":
/*!**************************************!*\
  !*** ./components/Jobs/EmptyCard.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Jobs/JobCard.js":
/*!************************************!*\
  !*** ./components/Jobs/JobCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Transition */ "./components/Transition/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/paulus/Desktop/automatch/components/Jobs/JobCard.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var JobCard = function JobCard(_ref) {
  var image = _ref.image,
      company = _ref.company,
      location = _ref.location,
      title_job = _ref.title_job,
      posted = _ref.posted,
      id = _ref.id;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "col",
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: _Transition__WEBPACK_IMPORTED_MODULE_3__["Fade"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3975242291" + " " + "card text-center rounded shadow mb-2 w-13rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3975242291" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: image,
    width: "68",
    alt: company,
    className: "jsx-3975242291" + " " + "rounded mx-auto d-block mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "jsx-3975242291" + " " + "card-text font-weight-bold mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-3975242291" + " " + "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, company)), __jsx("p", {
    className: "jsx-3975242291" + " " + "card-text text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "jsx-3975242291" + " " + "far fa-map-marker-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), " ", location), __jsx("hr", {
    className: "jsx-3975242291",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "jsx-3975242291" + " " + "card-text font-weight-bold text-blue-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-3975242291",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, title_job)), __jsx("p", {
    className: "jsx-3975242291" + " " + "card-text text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, posted), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/job/[jobId]",
    as: "/job/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3975242291" + " " + "btn btn-hover btn-seconddark rounded-pill",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Process")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3975242291",
    __self: _this
  }, ".btn-seconddark.jsx-3975242291{border:1px solid #173f53;color:#173f53;}.text-blue-dark.jsx-3975242291{color:#173f53;}.btn-hover.jsx-3975242291:hover{background-color:#0065ff;color:#ffffff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9Kb2JzL0pvYkNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUdvQyxBQUlYLEFBR1csY0FGM0IsV0FKZ0IsQUFPVyxjQU4zQixXQU9BIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9Kb2JzL0pvYkNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCIuLi9UcmFuc2l0aW9uXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSm9iQ2FyZCA9ICh7IGltYWdlLCBjb21wYW55LCBsb2NhdGlvbiwgdGl0bGVfam9iLCBwb3N0ZWQsIGlkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29sXCJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJpblwiXG4gICAgICBleGl0PVwib3V0XCJcbiAgICAgIHZhcmlhbnRzPXtGYWRlfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LWNlbnRlciByb3VuZGVkIHNoYWRvdyBtYi0yIHctMTNyZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgd2lkdGg9XCI2OFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIG14LWF1dG8gZC1ibG9jayBtYi0yXCJcbiAgICAgICAgICAgIGFsdD17Y29tcGFueX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250LXdlaWdodC1ib2xkIG1iLTBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1iLTRcIj57Y29tcGFueX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+IHtsb2NhdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibHVlLWRhcmtcIj5cbiAgICAgICAgICAgIDxzcGFuPnt0aXRsZV9qb2J9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgdGV4dC1tdXRlZFwiPntwb3N0ZWR9PC9wPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvam9iL1tqb2JJZF1cIiBhcz17YC9qb2IvJHtpZH1gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taG92ZXIgYnRuLXNlY29uZGRhcmsgcm91bmRlZC1waWxsXCI+UHJvY2VzczwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idG4tc2Vjb25kZGFyayB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE3M2Y1MztcbiAgICAgICAgICBjb2xvcjogIzE3M2Y1MztcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1ibHVlLWRhcmsge1xuICAgICAgICAgIGNvbG9yOiAjMTczZjUzO1xuICAgICAgICB9XG4gICAgICAgIC5idG4taG92ZXI6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY1ZmY7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvYkNhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/paulus/Desktop/automatch/components/Jobs/JobCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (JobCard);

/***/ }),

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
/* harmony import */ var _components_Jobs_EmptyCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Jobs/EmptyCard */ "./components/Jobs/EmptyCard.js");
/* harmony import */ var _components_Jobs_EmptyCard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_Jobs_EmptyCard__WEBPACK_IMPORTED_MODULE_11__);
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

  var onJobScraping = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (url_job) {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["jobScraping"](url_job));
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

  var jobCard = __jsx(_components_Jobs_EmptyCard__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  });

  return __jsx(_components_Jobs_Job__WEBPACK_IMPORTED_MODULE_8__["default"], {
    change: linkChangeHandler,
    submit: submitHandler,
    value: linkjob.link.value,
    clearLink: clearLinkjobHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=jobs.js.bbfe946136ad1e786e26.hot-update.js.map