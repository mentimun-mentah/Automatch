module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DetailJob/DetailJob.js":
/*!*******************************************!*\
  !*** ./components/DetailJob/DetailJob.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Transition */ "./components/Transition/index.js");
var _jsxFileName = "/Users/paulus/Desktop/automatch/components/DetailJob/DetailJob.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const DetailJob = ({
  children
}) => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: _Transition__WEBPACK_IMPORTED_MODULE_4__["Fade"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-1195972908" + " " + "container mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1195972908" + " " + "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "image",
    alt: "company",
    className: "jsx-1195972908" + " " + "img-thumbnail rounded-lg mx-auto d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }), __jsx("h5", {
    className: "jsx-1195972908" + " " + "mt-2 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "\"title_job\""), __jsx("span", {
    className: "jsx-1195972908",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "company"), " \u2022 ", __jsx("span", {
    className: "jsx-1195972908",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 38
    }
  }, "location"), __jsx("p", {
    className: "jsx-1195972908" + " " + "mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "jsx-1195972908" + " " + "far fa-clock mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), "posted"), __jsx("button", {
    type: "button",
    className: "jsx-1195972908" + " " + "btn btn-outline-danger badge-pill",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "jsx-1195972908" + " " + "fal fa-times-circle mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), "Delete job")), __jsx("h5", {
    className: "jsx-1195972908" + " " + "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Concepts"), __jsx("h5", {
    className: "jsx-1195972908" + " " + "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Keywords")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    exitBeforeEnter: true,
    initial: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, children)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1195972908",
    __self: undefined
  }, ".job-content.jsx-1195972908{height:400px;overflow-y:scroll;}.bmd{padding:0.4em 0.6em !important;font-size:80% !important;margin-left:0.5rem !important;font-weight:400 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9EZXRhaWxKb2IvRGV0YWlsSm9iLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHd0IsQUFJa0IsYUFIYixrQkFDcEIsQUFHMkIseUJBQ0ssOEJBQ0gsMkJBQzdCIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9EZXRhaWxKb2IvRGV0YWlsSm9iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIEJhZGdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCIuLi9UcmFuc2l0aW9uXCI7XG5cbmNvbnN0IERldGFpbEpvYiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaW5pdGlhbFwiIGFuaW1hdGU9XCJpblwiIGV4aXQ9XCJvdXRcIiB2YXJpYW50cz17RmFkZX0+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIGFsdD1cImNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy10aHVtYm5haWwgcm91bmRlZC1sZyBteC1hdXRvIGQtYmxvY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtMiBtYi0xXCI+XCJ0aXRsZV9qb2JcIjwvaDU+XG4gICAgICAgICAgICAgIDxzcGFuPmNvbXBhbnk8L3NwYW4+IOKAoiA8c3Bhbj5sb2NhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jbG9jayBtci0yXCI+PC9pPlxuICAgICAgICAgICAgICAgIHBvc3RlZFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJhZGdlLXBpbGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFsIGZhLXRpbWVzLWNpcmNsZSBtci0xXCI+PC9pPkRlbGV0ZSBqb2JcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9XCJkZWxldGVKb2JcIlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItY29udGVudCBtdC00XCI+e3BhcnNlKGNvbnRlbnRzKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiam9iLWNvbnRlbnQgbXQtNFwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5qb2JzLmRlc2MgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAqL31cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC00XCI+Q29uY2VwdHM8L2g1PlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTRcIj5LZXl3b3JkczwvaDU+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBsZz17Nn0+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmpvYi1jb250ZW50IHtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgfVxuICAgICAgICA6Z2xvYmFsKC5ibWQpIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjRlbSAwLjZlbSAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogODAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEZXRhaWxKb2I7XG4iXX0= */\n/*@ sourceURL=/Users/paulus/Desktop/automatch/components/DetailJob/DetailJob.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailJob);

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

/***/ "./pages/job/[jobId].js":
/*!******************************!*\
  !*** ./pages/job/[jobId].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");
/* harmony import */ var _components_DetailJob_DetailJob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DetailJob/DetailJob */ "./components/DetailJob/DetailJob.js");
var _jsxFileName = "/Users/paulus/Desktop/automatch/pages/job/[jobId].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Detail = () => {
  return __jsx(_components_DetailJob_DetailJob__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  });
};

Detail.getInitialProps = ctx => {
  const {
    jobId
  } = ctx.query;
  console.log(jobId);
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

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

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/job/[jobId].js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulus/Desktop/automatch/pages/job/[jobId].js */"./pages/job/[jobId].js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

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

/***/ })

/******/ });
//# sourceMappingURL=[jobId].js.map