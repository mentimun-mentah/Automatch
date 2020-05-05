webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/auth.js":
/*!********************************!*\
  !*** ./store/reducers/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./store/actions/actionTypes.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility */ "./store/utility.js");


var initialState = {
  access_token: null,
  refresh_token: null,
  user: null
};
/*** LOGIN ***/

var authStart = function authStart(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {});
};

var authSuccess = function authSuccess(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    access_token: action.access_token,
    refresh_token: action.refresh_token
  });
};

var authLogout = function authLogout(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    access_token: null,
    refresh_token: null
  });
};
/*** LOGIN ***/


var getUser = function getUser(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    user: action.user
  });
};

var refreshTokenSuccess = function refreshTokenSuccess(state, action) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_1__["updateObject"])(state, {
    access_token: action.access_token
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    /*** LOGIN ***/
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_START"]:
      return authStart(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"]:
      return authSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGOUT"]:
      return authLogout(state, action);

    /*** LOGIN ***/

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_USER"]:
      return getUser(state, action);

    /*** REFRESH TOKEN ***/

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REFRESH_TOKEN_SUCCESS"]:
      return refreshTokenSuccess(state, action);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.01d1c9d5a8bc5fe24384.hot-update.js.map