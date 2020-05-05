webpackHotUpdate("static/development/pages/jobs.js",{

/***/ "./pages/jobs/index.js":
/*!*****************************!*\
  !*** ./pages/jobs/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withAuth */ "./hoc/withAuth.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");
var _this = undefined,
    _jsxFileName = "/Users/paulus/Desktop/automatch/pages/jobs/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Jobs = function Jobs() {
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "jobs"));
};

Jobs.getInitialProps = function (ctx) {
  ctx.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["getUser"]());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuth__WEBPACK_IMPORTED_MODULE_1__["withAuth"])(Jobs));

/***/ })

})
//# sourceMappingURL=jobs.js.86e394fdf4b37df5202d.hot-update.js.map