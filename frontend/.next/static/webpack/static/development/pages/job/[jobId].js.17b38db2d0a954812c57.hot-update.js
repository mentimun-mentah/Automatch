webpackHotUpdate("static/development/pages/job/[jobId].js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axios-instance */ "./store/axios-instance.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");




/*** AUTH ***/

var authStart = function authStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_START"]
  };
};
var authSuccess = function authSuccess(access_token, refresh_token) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_SUCCESS"],
    access_token: access_token,
    refresh_token: refresh_token
  };
};
var authlogout = function authlogout() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["AUTH_LOGOUT"]
  };
};
var refreshTokenSuccess = function refreshTokenSuccess(access_token) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["REFRESH_TOKEN_SUCCESS"],
    access_token: access_token
  };
};
/*** AUTH ***/

var getUserSuccess = function getUserSuccess(user) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_USER"],
    user: user
  };
};
var getUser = function getUser(ctx) {
  return function (dispatch) {
    var _cookie$get = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx),
        access_token = _cookie$get.access_token;

    var headerCfg = {
      headers: {
        Authorization: "Bearer ".concat(access_token)
      }
    };
    _axios_instance__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user", headerCfg).then(function (res) {
      dispatch(getUserSuccess(res.data));
    })["catch"](function (err) {
      if (err.response.status === 422) {
        nookies__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(ctx, "access_token");
        nookies__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(ctx, "refresh_token");
        dispatch(authlogout());
        swal({
          title: "Uuppsss!",
          text: "Invalid user credential, please re-login!",
          icon: "error"
        }).then(function () {
          return next_router__WEBPACK_IMPORTED_MODULE_0___default.a.reload("/");
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    });
  };
};
var logout = function logout(ctx) {
  return function (dispatch) {
    var _cookie$get2 = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx),
        access_token = _cookie$get2.access_token;

    var headerCfg = {
      headers: {
        Authorization: "Bearer ".concat(access_token)
      }
    };
    _axios_instance__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]("/logout", headerCfg).then(function () {
      dispatch(authlogout());
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.reload("/");
    });
  };
};
var refreshToken = function refreshToken(refresh_token, ctx) {
  return function (dispatch) {
    var _cookie$get3 = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx),
        access_token = _cookie$get3.access_token;

    var headerCfg = {
      headers: {
        Authorization: "Bearer ".concat(refresh_token)
      }
    };

    if (access_token && refresh_token) {
      _axios_instance__WEBPACK_IMPORTED_MODULE_2__["default"].post("/refresh", null, headerCfg).then(function (res) {
        nookies__WEBPACK_IMPORTED_MODULE_1___default.a.set(null, "access_token", res.data.access_token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/"
        });
        dispatch(refreshTokenSuccess(res.data.access_token));
      })["catch"](function (error) {
        console.log(error.response);
      });
    }
  };
};
var authCheckState = function authCheckState(ctx) {
  return function (dispatch) {
    dispatch(authStart());

    var _cookie$get4 = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx),
        access_token = _cookie$get4.access_token;

    if (access_token) {
      var _cookie$get5 = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx),
          refresh_token = _cookie$get5.refresh_token;

      if (refresh_token) {
        dispatch(authSuccess(access_token, refresh_token));
      }
    } else {
      dispatch(authlogout());
    }
  };
};

/***/ })

})
//# sourceMappingURL=[jobId].js.17b38db2d0a954812c57.hot-update.js.map