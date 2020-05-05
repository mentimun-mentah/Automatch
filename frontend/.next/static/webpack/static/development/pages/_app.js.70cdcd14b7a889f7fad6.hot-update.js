webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Signup.js":
/*!*************************************!*\
  !*** ./components/Header/Signup.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Transition */ "./components/Transition/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.module.css */ "./components/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_axios_instance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/axios-instance */ "./store/axios-instance.js");


var _this = undefined,
    _jsxFileName = "/Users/paulus/Desktop/automatch/components/Header/Signup.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var formSignup = {
  username: {
    value: "",
    isValid: true,
    message: ""
  },
  email: {
    value: "",
    isValid: true,
    message: ""
  },
  password: {
    value: "",
    isValid: true,
    message: ""
  },
  confirm_password: {
    value: "",
    isValid: true,
    message: ""
  }
};

var Signin = function Signin(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(formSignup),
      signup = _useState[0],
      setSignup = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var submitHandler = function submitHandler(event) {
    event.preventDefault();
    resetValidation();

    if (formIsValid()) {
      setLoading(true);
      var data = {
        username: signup.username.value,
        email: signup.email.value,
        password: signup.password.value,
        confirm_password: signup.confirm_password.value
      };
      _store_axios_instance__WEBPACK_IMPORTED_MODULE_9__["default"].post("/register", data).then(function (res) {
        setLoading(false);
        props.closed();
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
          title: "Awesome!",
          text: "Check your email to activated your account.",
          icon: "success"
        });
        console.log("success", res.data);
      })["catch"](function (err) {
        console.log("error register", err.response);
        setLoading(false);
        var state = JSON.parse(JSON.stringify(signup));

        if (err.response && err.response.data) {
          for (var key in err.response.data) {
            if (state[key]) {
              state[key].value = state[key].value;
              state[key].isValid = false;
              state[key].message = err.response.data[key];
            }
          }
        }

        setSignup(state);
      });
    }
  };

  var buttonValid = true;

  for (var key in signup) {
    buttonValid = signup[key].isValid && buttonValid && signup[key].value && buttonValid;
  }

  var inputHandler = function inputHandler(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    var data = _objectSpread({}, signup, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, _objectSpread({}, signup[name], {
      value: value,
      isValid: true,
      message: ""
    })));

    setSignup(data);
  };

  var resetValidation = function resetValidation() {
    var state = JSON.parse(JSON.stringify(signup));

    for (var _key in state) {
      if (state[_key].hasOwnProperty("isValid")) {
        state[_key].isValid = true;
        state[_key].message = "";
      }
    }

    setSignup(state);
  };

  var formIsValid = function formIsValid() {
    var username = _objectSpread({}, signup.username);

    var email = _objectSpread({}, signup.email);

    var password = _objectSpread({}, signup.password);

    var confirm_password = _objectSpread({}, signup.confirm_password);

    var isGood = true;

    if (validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(username.value)) {
      username.isValid = false;
      username.message = "Username can't be empty";
      isGood = false;
    }

    if (!validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmail(email.value)) {
      email.isValid = false;
      email.message = "Email isn't valid";
      isGood = false;
    }

    if (!validator__WEBPACK_IMPORTED_MODULE_6___default.a.isLength(password.value, {
      min: 6,
      max: undefined
    })) {
      password.isValid = false;
      password.message = "Password at least 6 characters";
      isGood = false;
    }

    if (validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(confirm_password.value)) {
      confirm_password.isValid = false;
      confirm_password.message = "Password can't be empty";
      isGood = false;
    }

    if (!validator__WEBPACK_IMPORTED_MODULE_6___default.a.equals(confirm_password.value, password.value)) {
      confirm_password.isValid = false;
      confirm_password.message = "Password isn't matches";
      isGood = false;
    }

    if (!isGood) {
      setSignup({
        username: username,
        email: email,
        password: password,
        confirm_password: confirm_password
      });
    }

    return isGood;
  };

  var switchToSignin = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    props.viewed();
    resetValidation();
  }, [props, resetValidation]);
  var username = signup.username,
      email = signup.email,
      password = signup.password,
      confirm_password = signup.confirm_password;
  var usernameInvalid = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
    "is-invalid": !username.isValid
  });
  var emailInvalid = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
    "is-invalid": !email.isValid
  });
  var passwordInvalid = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
    "is-invalid": !password.isValid
  });
  var confirmInvalid = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
    "is-invalid": !confirm_password.isValid
  });
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: _Transition__WEBPACK_IMPORTED_MODULE_4__["Fade"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "text-center ".concat(_Header_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.ff_yeseva),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "Welcome Recruiters."), __jsx("p", {
    className: "text-center text-muted lh-15",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, "Register as company to start Recruiting hundred of workers more easier, faster and more accurate.")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "mx-auto mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "row-cols-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  }, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    name: "username",
    placeholder: "Username",
    onChange: inputHandler,
    className: usernameInvalid,
    value: username.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }), !username.isValid && __jsx("small", {
    className: "form-text text-muted mt-0 mb-n2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }, username.message)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }, "Email Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "email",
    name: "email",
    placeholder: "Email Address",
    onChange: inputHandler,
    className: emailInvalid,
    value: email.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 19
    }
  }), !email.isValid && __jsx("small", {
    className: "form-text text-muted mt-0 mb-n2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, email.message)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "password",
    name: "password",
    placeholder: "Enter Password",
    onChange: inputHandler,
    className: passwordInvalid,
    value: password.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }), !password.isValid && __jsx("small", {
    className: "form-text text-muted mt-0 mb-n2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, password.message)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 19
    }
  }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "password",
    name: "confirm_password",
    placeholder: "Confirm Password",
    onChange: inputHandler,
    className: confirmInvalid,
    value: confirm_password.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 19
    }
  }), !confirm_password.isValid && __jsx("small", {
    className: "form-text text-muted mt-0 mb-n2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, confirm_password.message))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    block: true,
    variants: "primary",
    type: "submit",
    className: "mt-3 mb-3",
    disabled: !buttonValid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, "Register", " ", loading && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    as: "span",
    animation: "border",
    size: "sm",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "text-center text-muted lh-15",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }, __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 15
    }
  }, "To make Automatch work, we log user data and share it with service providers. Click", " "), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "".concat("text-info", " ", _Header_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.hov_pointer, " "),
    onClick: switchToSignin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 17
    }
  }, " ", "\u201CSign in\u201D", " ")), __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 15
    }
  }, "above to accept Automatch\u2019s Terms of Service & Privacy Policy."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ })

})
//# sourceMappingURL=_app.js.70cdcd14b7a889f7fad6.hot-update.js.map