module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Jobs/EmptyCard.js":
/*!**************************************!*\
  !*** ./components/Jobs/EmptyCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/paulus/Desktop/automatch/components/Jobs/EmptyCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const EmptyCard = () => {
  return __jsx("div", {
    className: "row justify-content-md-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card shadow text-center pt-5 pb-5",
    style: {
      backgroundColor: "#f5f5f5"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/static/images/job-seeking.png",
    width: "120",
    className: "rounded mx-auto d-block mb-3",
    alt: "job seeking",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Sorry we can't find the Job.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyCard);

/***/ }),

/***/ "./components/Jobs/Job.js":
/*!********************************!*\
  !*** ./components/Jobs/Job.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paulus/Desktop/automatch/components/Jobs/Job.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Jobs = ({
  value,
  change,
  submit,
  clearLink,
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-3406300057" + " " + "container-fluid bg-color-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3406300057" + " " + "row justify-content-md-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3406300057" + " " + "col-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3406300057" + " " + "card border-0 bg-transparent text-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3406300057" + " " + "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-3406300057" + " " + "font-weight-bold text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Job Link"), __jsx("form", {
    onSubmit: submit,
    className: "jsx-3406300057",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3406300057" + " " + "input-group mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 19
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Enter job link",
    value: value,
    onChange: change,
    className: "jsx-3406300057" + " " + "form-control focus-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx("div", {
    onClick: clearLink,
    className: "jsx-3406300057" + " " + "input-group-append",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "jsx-3406300057" + " " + "far fa-times btn btn-outline-light btn-clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 23
    }
  }))), __jsx("button", {
    type: "submit",
    className: "jsx-3406300057" + " " + "btn btn-submit submit-hvr rounded-pill btn-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, "Submit"))))))), __jsx("section", {
    className: "jsx-3406300057" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3406300057",
    __self: undefined
  }, ".bg-color-top.jsx-3406300057{background-color:#113951;}.bg-tranparent.jsx-3406300057{background-color:transparent;}.btn-submit.jsx-3406300057{color:#fff !important;border-color:#fff !important;background-color:transparent !important;}.submit-hvr.jsx-3406300057:hover{color:#fff !important;background-color:#195477 !important;}.text-blue-dark.jsx-3406300057{color:#173f53;}.btn-seconddark.jsx-3406300057{border:1px solid #173f53;color:#173f53;}.btn-clear.jsx-3406300057{color:#909090;border-top:1px solid #ced4da;border-right:1px solid #ced4da;border-bottom:1px solid #ced4da;border-left:0px solid;background-color:white;-webkit-transition:all 0.2s;transition:all 0.2s;padding-left:5px;}.btn-clear.jsx-3406300057:hover{color:#dc3545;text-shadow:0px 0px 5px #dc3545;-webkit-transition:all 0.2s;transition:all 0.2s;}.focus-none.jsx-3406300057{padding-right:5px;}.focus-none.jsx-3406300057:focus{color:#495057;background-color:#fff;border-color:#ced4da white #ced4da #ced4da;outline:0;box-shadow:0 0 0 0 rgba(0,123,255,0.25);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9Kb2JzL0pvYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR29DLEFBR0ksQUFHUCxBQUtBLEFBSVIsQUFHVyxBQUlYLEFBVUEsQUFLSSxBQUdKLGNBeEJoQixBQU8rQixBQVVHLEFBUVYsSUFIeEIsSUEvQitCLEFBS08sR0FYdEMsQUFrQmdCLElBZmhCLE9Bc0M2QyxHQXRCN0MsSUFJaUMsR0FVWCxLQTFCb0IsT0FLMUMsZ0JBWWtDLEtBa0J0QixVQUNpQyxFQW5DN0MsR0EwQkEsWUFUd0Isc0JBQ0MsQ0FrQnpCLHNCQWpCc0IsZ0RBQ0gsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9Kb2JzL0pvYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEpvYnMgPSAoeyB2YWx1ZSwgY2hhbmdlLCBzdWJtaXQsIGNsZWFyTGluaywgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYmctY29sb3ItdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgdGV4dC1jZW50ZXIgbXQtNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtd2hpdGVcIj5Kb2IgTGluazwvaDI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb2N1cy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGpvYiBsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXtjbGVhckxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS10aW1lcyBidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLWNsZWFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Ym1pdCBzdWJtaXQtaHZyIHJvdW5kZWQtcGlsbCBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e2NoaWxkcmVufTwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJnLWNvbG9yLXRvcCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMzk1MTtcbiAgICAgICAgfVxuICAgICAgICAuYmctdHJhbnBhcmVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1zdWJtaXQge1xuICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuc3VibWl0LWh2cjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk1NDc3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtYmx1ZS1kYXJrIHtcbiAgICAgICAgICBjb2xvcjogIzE3M2Y1MztcbiAgICAgICAgfVxuICAgICAgICAuYnRuLXNlY29uZGRhcmsge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNzNmNTM7XG4gICAgICAgICAgY29sb3I6ICMxNzNmNTM7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1jbGVhciB7XG4gICAgICAgICAgY29sb3I6ICM5MDkwOTA7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NlZDRkYTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICAgICAgICBib3JkZXItbGVmdDogMHB4IHNvbGlkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5idG4tY2xlYXI6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCAjZGMzNTQ1O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICB9XG4gICAgICAgIC5mb2N1cy1ub25lIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvY3VzLW5vbmU6Zm9jdXMge1xuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhIHdoaXRlICNjZWQ0ZGEgI2NlZDRkYTtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvYnM7XG4iXX0= */\n/*@ sourceURL=/Users/paulus/Desktop/automatch/components/Jobs/Job.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Jobs);

/***/ }),

/***/ "./components/Jobs/JobCard.js":
/*!************************************!*\
  !*** ./components/Jobs/JobCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Transition */ "./components/Transition/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/paulus/Desktop/automatch/components/Jobs/JobCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const JobCard = ({
  image,
  company,
  location,
  title_job,
  posted,
  id
}) => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "col",
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: _Transition__WEBPACK_IMPORTED_MODULE_3__["Fade"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3975242291" + " " + "card text-center rounded shadow mb-2 w-13rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3975242291" + " " + "card-body",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "jsx-3975242291" + " " + "card-text font-weight-bold mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-3975242291" + " " + "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, company)), __jsx("p", {
    className: "jsx-3975242291" + " " + "card-text text-muted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "jsx-3975242291" + " " + "far fa-map-marker-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), " ", location), __jsx("hr", {
    className: "jsx-3975242291",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "jsx-3975242291" + " " + "card-text font-weight-bold text-blue-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-3975242291",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, title_job)), __jsx("p", {
    className: "jsx-3975242291" + " " + "card-text text-muted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, posted), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/job/[jobId]",
    as: `/job/${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3975242291" + " " + "btn btn-hover btn-seconddark rounded-pill",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Process")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3975242291",
    __self: undefined
  }, ".btn-seconddark.jsx-3975242291{border:1px solid #173f53;color:#173f53;}.text-blue-dark.jsx-3975242291{color:#173f53;}.btn-hover.jsx-3975242291:hover{background-color:#0065ff;color:#ffffff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9Kb2JzL0pvYkNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUdvQyxBQUlYLEFBR1csY0FGM0IsV0FKZ0IsQUFPVyxjQU4zQixXQU9BIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9Kb2JzL0pvYkNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCIuLi9UcmFuc2l0aW9uXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSm9iQ2FyZCA9ICh7IGltYWdlLCBjb21wYW55LCBsb2NhdGlvbiwgdGl0bGVfam9iLCBwb3N0ZWQsIGlkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29sXCJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJpblwiXG4gICAgICBleGl0PVwib3V0XCJcbiAgICAgIHZhcmlhbnRzPXtGYWRlfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LWNlbnRlciByb3VuZGVkIHNoYWRvdyBtYi0yIHctMTNyZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgd2lkdGg9XCI2OFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIG14LWF1dG8gZC1ibG9jayBtYi0yXCJcbiAgICAgICAgICAgIGFsdD17Y29tcGFueX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250LXdlaWdodC1ib2xkIG1iLTBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1iLTRcIj57Y29tcGFueX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+IHtsb2NhdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibHVlLWRhcmtcIj5cbiAgICAgICAgICAgIDxzcGFuPnt0aXRsZV9qb2J9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgdGV4dC1tdXRlZFwiPntwb3N0ZWR9PC9wPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvam9iL1tqb2JJZF1cIiBhcz17YC9qb2IvJHtpZH1gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4taG92ZXIgYnRuLXNlY29uZGRhcmsgcm91bmRlZC1waWxsXCI+UHJvY2VzczwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idG4tc2Vjb25kZGFyayB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE3M2Y1MztcbiAgICAgICAgICBjb2xvcjogIzE3M2Y1MztcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1ibHVlLWRhcmsge1xuICAgICAgICAgIGNvbG9yOiAjMTczZjUzO1xuICAgICAgICB9XG4gICAgICAgIC5idG4taG92ZXI6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY1ZmY7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvYkNhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/paulus/Desktop/automatch/components/Jobs/JobCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (JobCard);

/***/ }),

/***/ "./components/Transition/Spinner/ScaleLoader.js":
/*!******************************************************!*\
  !*** ./components/Transition/Spinner/ScaleLoader.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/paulus/Desktop/automatch/components/Transition/Spinner/ScaleLoader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const override = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const scaleloader = () => {
  return __jsx("div", {
    className: "modal d-block ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal-backdrop fade show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-content",
    style: {
      backgroundColor: "transparent",
      zIndex: "1060",
      border: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_2__["ScaleLoader"], {
    css: override,
    height: 100,
    width: 10,
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (scaleloader);

/***/ }),

/***/ "./components/Transition/index.js":
/*!****************************************!*\
  !*** ./components/Transition/index.js ***!
  \****************************************/
/*! exports provided: FadePage, Fade, Zoom, BackdropModal, LeftToRight, RightToLeft, TopToBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadePage", function() { return FadePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return Fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoom", function() { return Zoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropModal", function() { return BackdropModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftToRight", function() { return LeftToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightToLeft", function() { return RightToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopToBottom", function() { return TopToBottom; });
const FadePage = {
  initial: {
    opacity: 0,
    y: "-100vh"
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0
  }
};
const Fade = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};
const Zoom = {
  initial: {
    opacity: 0,
    scale: 0
  },
  in: {
    opacity: 1,
    scale: 1
  },
  out: {
    opacity: 0
  }
};
const BackdropModal = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 0.5
  },
  out: {
    opacity: 0
  }
};
const LeftToRight = {
  initial: {
    x: 300,
    opacity: 0
  },
  in: {
    x: 0,
    opacity: 1
  },
  out: {
    x: 300,
    opacity: 0
  }
};
const RightToLeft = {
  initial: {
    x: 300,
    opacity: 0
  },
  in: {
    x: 0,
    opacity: 1
  },
  out: {
    x: -300,
    opacity: 0
  }
};
const TopToBottom = {
  initial: {
    y: 300,
    opacity: 0
  },
  in: {
    y: 0,
    opacity: 1
  },
  out: {
    y: -300,
    opacity: 0
  }
};

/***/ }),

/***/ "./hoc/withAuth.js":
/*!*************************!*\
  !*** ./hoc/withAuth.js ***!
  \*************************/
/*! exports provided: withAuth, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuth", function() { return withAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/paulus/Desktop/automatch/hoc/withAuth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const authenticate = context => {
  const {
    access_token
  } = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(context); // Checking if cookie is present
  // if it is not present, redirect user to signin page

  if (context.req && !access_token) {
    context.res.writeHead(302, {
      Location: "/"
    });
    context.res.end();
    return;
  }

  if (!access_token) {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
  }

  return access_token;
};

const isAuth = context => {
  const {
    access_token
  } = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(context);
  return access_token;
};

const withAuth = WrappedComponent => {
  return class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static async getInitialProps(context) {
      const access_token = authenticate(context);
      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(context));
      return _objectSpread({}, componentProps, {
        access_token
      });
    }

    render() {
      return __jsx(WrappedComponent, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 14
        }
      }));
    }

  };
};



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/jobs/index.js":
/*!*****************************!*\
  !*** ./pages/jobs/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withAuth */ "./hoc/withAuth.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Jobs_Job__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Jobs/Job */ "./components/Jobs/Job.js");
/* harmony import */ var _components_Jobs_EmptyCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Jobs/EmptyCard */ "./components/Jobs/EmptyCard.js");
/* harmony import */ var _components_Jobs_JobCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Jobs/JobCard */ "./components/Jobs/JobCard.js");
/* harmony import */ var _components_Transition_Spinner_ScaleLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Transition/Spinner/ScaleLoader */ "./components/Transition/Spinner/ScaleLoader.js");
var _jsxFileName = "/Users/paulus/Desktop/automatch/pages/jobs/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const linkJob = {
  link: {
    value: "",
    isValid: true,
    message: ""
  }
};

const JobsContainer = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: linkjob,
    1: setLinkjob
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(linkJob);
  const jobs = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth.user);
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.jobs.loading);
  const onJobScraping = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(url_job => dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["jobScraping"](url_job)), [dispatch]);

  const submitHandler = event => {
    event.preventDefault();
    resetValidation();

    if (linkIsValid() && linkjob.link.value !== "") {
      onJobScraping(linkjob.link.value);
      clearLinkjobHandler();
    }
  };

  const linkChangeHandler = event => {
    const data = _objectSpread({}, linkjob, {
      link: {
        value: event.target.value,
        isValid: true,
        message: ""
      }
    });

    setLinkjob(data);
  };

  const clearLinkjobHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const data = _objectSpread({}, linkjob, {
      link: {
        value: "",
        isValid: true,
        message: ""
      }
    });

    setLinkjob(data);
  }, [linkjob]);

  const linkIsValid = () => {
    const link = _objectSpread({}, linkjob.link);

    let isGood = true;

    if (validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(link.value)) {
      link.isValid = false;
      link.message = "";
      link.isGood = false;
      sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
        title: "Upss not found!",
        text: "You can click button register it to make your job portal available.",
        icon: "warning",
        buttons: ["Cancel", "Register it"],
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/job-portal", "/job-portal");
      });
    }

    if (!isGood) {
      setLinkjob(link);
    }

    return isGood;
  };

  const resetValidation = () => {
    const state = JSON.parse(JSON.stringify(linkjob));

    for (let key in state) {
      if (state[key].hasOwnProperty("isValid")) {
        state[key].isValid = true, state[key].message = "";
      }
    }

    setLinkjob(state);
  };

  let jobCard = __jsx(_components_Jobs_EmptyCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  });

  if (jobs !== null && jobs.jobs !== undefined && jobs.jobs.length > 0) {
    jobCard = __jsx("div", {
      className: "row row-cols-5",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, jobs.jobs.map((job, i) => {
      const {
        image,
        company,
        location,
        title_job,
        posted,
        id
      } = job;
      return __jsx(_components_Jobs_JobCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: i,
        image: image,
        company: company,
        location: location,
        title_job: title_job,
        posted: posted,
        id: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      });
    }));
  }

  let submitLink = null;

  if (loading) {
    submitLink = __jsx(_components_Transition_Spinner_ScaleLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 18
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, submitLink, __jsx(_components_Jobs_Job__WEBPACK_IMPORTED_MODULE_7__["default"], {
    change: linkChangeHandler,
    submit: submitHandler,
    value: linkjob.link.value,
    clearLink: clearLinkjobHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, jobCard));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuth__WEBPACK_IMPORTED_MODULE_2__["withAuth"])(JobsContainer));

/***/ }),

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
const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const GET_USER = "GET_USER";
const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS"; //JOBS

const JOB_SCRAPING_START = "JOB_SCRAPING_START";
const JOB_SCRAPING_SUCCESS = "JOB_SCRAPING_SUCCESS";
const JOB_SCRAPING_FAIL = "JOB_SCRAPING_FAIL";
const GET_JOB_START = "GET_JOB_START";
const GET_JOB_SUCCESS = "GET_JOB_SUCCESS";
const GET_JOB_FAIL = "GET_JOB_FAIL"; //MODAL

const MODAL_RESET = "MODAL_RESET";

/***/ }),

/***/ "./store/actions/auth.js":
/*!*******************************!*\
  !*** ./store/actions/auth.js ***!
  \*******************************/
/*! exports provided: authStart, authSuccess, authlogout, refreshTokenSuccess, getUserSuccess, getUser, logout, refreshToken, authCheckState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authStart", function() { return authStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSuccess", function() { return authSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authlogout", function() { return authlogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshTokenSuccess", function() { return refreshTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSuccess", function() { return getUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshToken", function() { return refreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authCheckState", function() { return authCheckState; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axios-instance */ "./store/axios-instance.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");




/*** AUTH ***/

const authStart = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_START"]
  };
};
const authSuccess = (access_token, refresh_token) => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_SUCCESS"],
    access_token: access_token,
    refresh_token: refresh_token
  };
};
const authlogout = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_LOGOUT"]
  };
};
const refreshTokenSuccess = access_token => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["REFRESH_TOKEN_SUCCESS"],
    access_token: access_token
  };
};
/*** AUTH ***/

const getUserSuccess = user => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_USER"],
    user: user
  };
};
const getUser = ctx => {
  return dispatch => {
    const {
      access_token
    } = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx);
    const headerCfg = {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    };
    _axios_instance__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user", headerCfg).then(res => {
      dispatch(getUserSuccess(res.data));
    }).catch(err => {
      if (err.response.status === 422) {
        nookies__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(ctx, "access_token");
        nookies__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(ctx, "refresh_token");
        dispatch(authlogout());
        swal({
          title: "Uuppsss!",
          text: "Invalid user credential, please re-login!",
          icon: "error"
        });
        next_router__WEBPACK_IMPORTED_MODULE_0___default.a.reload("/");
      }
    });
  };
};
const logout = ctx => {
  return dispatch => {
    const {
      access_token
    } = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx);
    const headerCfg = {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    };
    _axios_instance__WEBPACK_IMPORTED_MODULE_2__["default"].delete("/logout", headerCfg).then(() => {
      dispatch(authlogout());
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.reload("/");
    });
  };
};
const refreshToken = (refresh_token, ctx) => {
  return dispatch => {
    const {
      access_token
    } = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx);
    const headerCfg = {
      headers: {
        Authorization: `Bearer ${refresh_token}`
      }
    };

    if (access_token && refresh_token) {
      _axios_instance__WEBPACK_IMPORTED_MODULE_2__["default"].post("/refresh", null, headerCfg).then(res => {
        nookies__WEBPACK_IMPORTED_MODULE_1___default.a.set(null, "access_token", res.data.access_token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/"
        });
        dispatch(refreshTokenSuccess(res.data.access_token));
      }).catch(error => {
        console.log(error.response);
      });
    }
  };
};
const authCheckState = ctx => {
  return dispatch => {
    dispatch(authStart());
    const {
      access_token
    } = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx);

    if (access_token) {
      const {
        refresh_token
      } = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx);

      if (refresh_token) {
        dispatch(authSuccess(access_token, refresh_token));
      }
    } else {
      dispatch(authlogout());
    }
  };
};

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: authCheckState, refreshToken, logout, getUser, jobScraping, getJob */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getJob", function() { return _jobs__WEBPACK_IMPORTED_MODULE_1__["getJob"]; });




/***/ }),

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axios-instance */ "./store/axios-instance.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






/***JOB SCRAPING***/

const jobScrapingStart = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_START"]
  };
};
const jobScrapingSuccess = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_SUCCESS"]
  };
};
const jobScrapingFail = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["JOB_SCRAPING_FAIL"],
    error: error
  };
};
/***JOB SCRAPING***/

/***GET JOB***/

const getJobStart = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_JOB_START"]
  };
};
const getJobSuccess = jobData => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_JOB_SUCCESS"],
    jobData: jobData
  };
};
const getJobFail = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_JOB_FAIL"],
    error: error
  };
};
/***GET JOB***/

const jobScraping = (url_job, ctx) => {
  return dispatch => {
    dispatch(Object(_index__WEBPACK_IMPORTED_MODULE_1__["getUser"])());
    dispatch(jobScrapingStart());
    const {
      access_token
    } = nookies__WEBPACK_IMPORTED_MODULE_4___default.a.get(ctx);
    const link = {
      url_job: url_job
    };
    const headerCfg = {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    };
    _axios_instance__WEBPACK_IMPORTED_MODULE_3__["default"].post("/scrape-job", link, headerCfg).then(() => {
      dispatch(Object(_index__WEBPACK_IMPORTED_MODULE_1__["getUser"])());
      dispatch(jobScrapingSuccess());
    }).catch(error => {
      const {
        status
      } = error.response;
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
        }).then(willDelete => {
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
const getJob = (jobId, ctx) => {
  return dispatch => {
    dispatch(Object(_index__WEBPACK_IMPORTED_MODULE_1__["getUser"])());
    dispatch(getJobStart());
    const {
      access_token
    } = nookies__WEBPACK_IMPORTED_MODULE_4___default.a.get(ctx);
    const headerCfg = {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    };
    _axios_instance__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/job/${jobId}`, headerCfg).then(res => {
      console.log(res.data);
      dispatch(getJobSuccess(res.data));
    }).catch(error => {
      console.log("get Job error ==> ", error.response);
    });
  };
};

/***/ }),

/***/ "./store/axios-instance.js":
/*!*********************************!*\
  !*** ./store/axios-instance.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://127.0.0.1:5000/"
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/jobs/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulus/Desktop/automatch/pages/jobs/index.js */"./pages/jobs/index.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=jobs.js.map