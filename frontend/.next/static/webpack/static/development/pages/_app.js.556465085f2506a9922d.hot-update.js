webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");
/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-cron */ "./node_modules/node-cron/src/node-cron.js");
/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_cron__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Footer */ "./components/Footer/index.js");
var _this = undefined,
    _jsxFileName = "/Users/paulus/Desktop/automatch/components/Layout/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Layout = function Layout(_ref) {
  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var refresh_token = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth.refresh_token;
  });
  var task = node_cron__WEBPACK_IMPORTED_MODULE_3___default.a.schedule("15 * * * * *", function () {
    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["refreshToken"](refresh_token));
  });

  if (refresh_token === undefined) {
    task.destroy();
  }

  if (refresh_token) {
    task.start();
  }

  var onTryAutoSignin = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["authCheckState"]());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onTryAutoSignin();
  }, [onTryAutoSignin]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.556465085f2506a9922d.hot-update.js.map