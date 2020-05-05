webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Transition */ "./components/Transition/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");
/* harmony import */ var _store_axios_instance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/axios-instance */ "./store/axios-instance.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Signup */ "./components/Header/Signup.js");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Signin */ "./components/Header/Signin.js");
var _this = undefined,
    _jsxFileName = "/Users/paulus/Desktop/automatch/components/Header/index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Header = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function () {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isTop = _useState[0],
      setIsTop = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalShow = _useState2[0],
      setModalShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      changeView = _useState3[0],
      setChangeView = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      tkn = _useState4[0],
      setTkn = _useState4[1];

  var onLogout = function onLogout() {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["logout"]());
  };

  var onGetUser = function onGetUser() {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["getUser"]());
  };

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.auth.user;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _parseCookies = Object(nookies__WEBPACK_IMPORTED_MODULE_6__["parseCookies"])(),
        access_token = _parseCookies.access_token;

    setTkn(access_token);

    if (access_token) {
      onGetUser();
    }
  }, [tkn, user]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener("scroll", function () {
      var inTop = window.scrollY < 50;

      if (inTop !== isTop) {
        setIsTop(inTop);
      }
    });
    return function () {
      document.removeEventListener("scroll", function () {
        setIsTop(true);
      });
    };
  }, [isTop]);

  var logoutHandler = function logoutHandler() {
    setTkn();
    onLogout();
    Object(nookies__WEBPACK_IMPORTED_MODULE_6__["destroyCookie"])(null, "access_token");
    Object(nookies__WEBPACK_IMPORTED_MODULE_6__["destroyCookie"])(null, "refresh_token");
  };

  var showModalHandler = function showModalHandler() {
    document.body.classList.add("modal-open");
    setModalShow(true);
  };

  var closeModalHandler = function closeModalHandler() {
    document.body.classList.remove("modal-open");
    setModalShow(false);
  };

  var changeViewHandler = function changeViewHandler() {
    setChangeView(!changeView);
  };

  var auth = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "rounded-pill mr-sm-3",
    onClick: showModalHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Sign up"));

  if (tkn) {
    auth = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
      alignRight: true,
      title: __jsx("img", {
        src: user && "http://localhost:5000/static/avatars/".concat(user.avatar),
        width: "40",
        height: "40",
        className: "rounded-circle",
        alt: "avatar",
        style: {
          objectFit: "cover"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/profile",
      as: "/profile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      className: "text-hvr-none",
      as: "span",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, "Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/jobs",
      as: "/jobs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      className: "text-hvr-none",
      as: "span",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, "Job List")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/logout",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      className: "text-hvr-none",
      as: "span",
      onClick: logoutHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, "Logout")));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    expand: "lg",
    fixed: "top",
    className: isTop ? "navbar-default" : "navbar-scrolled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: isTop ? "/static/images/logo-navbar-white.png" : "/static/images/logo-navbar.png",
    width: "160",
    height: "40",
    alt: "Automatch Logo",
    className: "jsx-4275914465" + " " + "d-inline-block align-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "ml-auto align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "a",
    className: "hov_pointer mr-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/#features",
    as: "/#features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "a",
    className: "hov_pointer mr-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, "Features")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/#pricing",
    as: "/#pricing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "a",
    className: "hov_pointer mr-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, "Pricing")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/#workflows",
    as: "/#workflows",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "a",
    className: "hov_pointer mr-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, "Workflows")), auth)))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, modalShow ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "modal",
    style: {
      display: "block"
    },
    initial: {
      opacity: 0,
      y: -300
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-4275914465" + " " + "modal-dialog modal-lg modal-dialog-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-4275914465" + " " + "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-4275914465" + " " + "bar top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4275914465" + " " + "bar right delay1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4275914465" + " " + "bar bottom delay2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4275914465" + " " + "bar left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    className: "border-0 pb-0 ml-auto",
    closeButton: true,
    onClick: closeModalHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4275914465" + " " + "col-md-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    exitBeforeEnter: true,
    key: changeView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, changeView ? __jsx(_Signin__WEBPACK_IMPORTED_MODULE_11__["default"], {
    viewed: changeViewHandler,
    view: changeView,
    closed: closeModalHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  }) : __jsx(_Signup__WEBPACK_IMPORTED_MODULE_10__["default"], {
    viewed: changeViewHandler,
    view: changeView,
    closed: closeModalHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }))))))) : null), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, modalShow ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "modal-backdrop fade show",
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: _Transition__WEBPACK_IMPORTED_MODULE_4__["BackdropModal"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4275914465",
    __self: _this
  }, ".navbar-default{-webkit-transition:500ms ease;transition:500ms ease;background:#021927;}.navbar-default .nav-link{color:white !important;}.navbar-scrolled{-webkit-transition:500ms ease;transition:500ms ease;background:white;box-shadow:rgb(76,76,76) 0px 1px 2px;}.navbar-scrolled .nav-link{color:black !important;}.modal-content.jsx-4275914465{border:none !important;border-radius:0px !important;overflow:hidden !important;}.dropdown-toggle::after{display:none !important;}.dropdown-menu{padding:0.5rem !important;}.nav-item .show .dropdown-menu .dropdown-item,.dropdown-item:hover{background-color:#113951;color:#ffffff;cursor:pointer;}.bar.jsx-4275914465{position:absolute;width:50px;height:5px;background:#23ace6;-webkit-transition:all 2s linear;transition:all 2s linear;-webkit-animation-duration:2s;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bar.delay1.jsx-4275914465{-webkit-animation-delay:1.4s;animation-delay:1.4s;-webkit-animation-delay:1.4s;}.bar.delay2.jsx-4275914465{-webkit-animation-delay:1.1s;animation-delay:1.1s;-webkit-animation-delay:1.1s;}.top.jsx-4275914465{top:0px;left:-5px;}.right.jsx-4275914465{top:18px;right:-23px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.bottom.jsx-4275914465{bottom:0px;left:-5px;}.left.jsx-4275914465{top:180px;left:-23px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}@-webkit-keyframes h-move{0%.jsx-4275914465{left:-50px;}100%.jsx-4275914465{left:100%;}}@-webkit-keyframes h-move-jsx-4275914465{0%{left:-50px;}100%{left:100%;}}@keyframes h-move-jsx-4275914465{0%{left:-50px;}100%{left:100%;}}.top.jsx-4275914465,.bottom.jsx-4275914465{-webkit-animation-name:h-move;-webkit-animation-name:h-move-jsx-4275914465;animation-name:h-move-jsx-4275914465;}@-webkit-keyframes v-move{0%.jsx-4275914465{top:-30px;}100%.jsx-4275914465{top:110%;}}@-webkit-keyframes v-move-jsx-4275914465{0%{top:-30px;}100%{top:110%;}}@keyframes v-move-jsx-4275914465{0%{top:-30px;}100%{top:110%;}}.right.jsx-4275914465,.left.jsx-4275914465{-webkit-animation-name:v-move;-webkit-animation-name:v-move-jsx-4275914465;animation-name:v-move-jsx-4275914465;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE9rQixBQUdpQyxBQUlDLEFBR0QsQUFLQyxBQUdBLEFBS0MsQUFHRSxBQU1ELEFBS1AsQUFhRyxBQUlBLEFBSWIsQUFJQyxBQUtFLEFBSUQsQUFNRyxBQUdELEFBS0MsQUFHRCxBQUtrQixBQUtsQixBQUdELEFBS0MsQUFHRCxBQUttQixRQXZEcEIsQ0FJRSxBQXVDWixBQVFBLENBdENXLEFBU1gsQUFRQSxBQVVBLEFBUUEsQ0F2Q1UsQUFVVixBQVFBLE9BaERXLEFBc0JiLEdBSTBCLEFBSzFCLEFBSTBCLEVBakUxQixBQVFBLEFBRytCLENBSy9CLENBU2dCLENBTmhCLEdBWWEsQ0F1RFcsQUFxQkEsU0FqRlAsQ0FNSSxVQVdVLEFBSUEsRUFuRFYsQUFPRixBQVNVLEVBZTdCLEtBTTJCLFVBN0JjLEVBUHpDLFFBZ0JBLEFBK0JBLEFBSUEsMEJBU0EsQUFTQSxDQTdEQSxNQWtGQSxBQXFCQSxLQTFFZ0MsOEJBQ1Isb0RBQ1csaUNBQ1IsMERBQ2tCLDJDQUNSLDhFQUNyQyIsImZpbGUiOiIvVXNlcnMvcGF1bHVzL0Rlc2t0b3AvYXV0b21hdGNoL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTmF2YmFyLFxuICBDb250YWluZXIsXG4gIE5hdixcbiAgRm9ybSxcbiAgQnV0dG9uLFxuICBNb2RhbCxcbiAgTmF2RHJvcGRvd24sXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEJhY2tkcm9wTW9kYWwgfSBmcm9tIFwiLi4vVHJhbnNpdGlvblwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL3N0b3JlL2F4aW9zLWluc3RhbmNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2lnbnVwIGZyb20gXCIuL1NpZ251cFwiO1xuaW1wb3J0IFNpZ25pbiBmcm9tIFwiLi9TaWduaW5cIjtcblxuY29uc3QgSGVhZGVyID0gUmVhY3QubWVtbygoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hhbmdlVmlldywgc2V0Q2hhbmdlVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0a24sIHNldFRrbl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uTG9nb3V0ID0gKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5sb2dvdXQoKSk7XG4gIGNvbnN0IG9uR2V0VXNlciA9ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuZ2V0VXNlcigpKTtcblxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuICAgIHNldFRrbihhY2Nlc3NfdG9rZW4pO1xuICAgIGlmIChhY2Nlc3NfdG9rZW4pIHtcbiAgICAgIG9uR2V0VXNlcigpO1xuICAgIH1cbiAgfSwgW3RrbiwgdXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpblRvcCA9IHdpbmRvdy5zY3JvbGxZIDwgNTA7XG4gICAgICBpZiAoaW5Ub3AgIT09IGlzVG9wKSB7XG4gICAgICAgIHNldElzVG9wKGluVG9wKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgc2V0SXNUb3AodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbaXNUb3BdKTtcblxuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFRrbigpO1xuICAgIG9uTG9nb3V0KCk7XG4gICAgZGVzdHJveUNvb2tpZShudWxsLCBcImFjY2Vzc190b2tlblwiKTtcbiAgICBkZXN0cm95Q29va2llKG51bGwsIFwicmVmcmVzaF90b2tlblwiKTtcbiAgfTtcblxuICBjb25zdCBzaG93TW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW9wZW5cIik7XG4gICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VWaWV3SGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRDaGFuZ2VWaWV3KCFjaGFuZ2VWaWV3KTtcbiAgfTtcblxuICBsZXQgYXV0aCA9IChcbiAgICA8Rm9ybSBpbmxpbmU+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1waWxsIG1yLXNtLTNcIlxuICAgICAgICBvbkNsaWNrPXtzaG93TW9kYWxIYW5kbGVyfVxuICAgICAgPlxuICAgICAgICBTaWduIHVwXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG5cbiAgaWYgKHRrbikge1xuICAgIGF1dGggPSAoXG4gICAgICA8TmF2RHJvcGRvd25cbiAgICAgICAgYWxpZ25SaWdodFxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1c2VyICYmIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvc3RhdGljL2F2YXRhcnMvJHt1c2VyLmF2YXRhcn1gfVxuICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiXG4gICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiIGFzPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9XCJ0ZXh0LWh2ci1ub25lXCIgYXM9XCJzcGFuXCI+XG4gICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvam9ic1wiIGFzPVwiL2pvYnNcIj5cbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9XCJ0ZXh0LWh2ci1ub25lXCIgYXM9XCJzcGFuXCI+XG4gICAgICAgICAgICBKb2IgTGlzdFxuICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ291dFwiPlxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWh2ci1ub25lXCJcbiAgICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhclxuICAgICAgICBleHBhbmQ9XCJsZ1wiXG4gICAgICAgIGZpeGVkPVwidG9wXCJcbiAgICAgICAgY2xhc3NOYW1lPXtpc1RvcCA/IFwibmF2YmFyLWRlZmF1bHRcIiA6IFwibmF2YmFyLXNjcm9sbGVkXCJ9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgaXNUb3BcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9zdGF0aWMvaW1hZ2VzL2xvZ28tbmF2YmFyLXdoaXRlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIDogXCIvc3RhdGljL2ltYWdlcy9sb2dvLW5hdmJhci5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE2MFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXG4gICAgICAgICAgICAgICAgYWx0PVwiQXV0b21hdGNoIExvZ29cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz1cImFcIiBjbGFzc05hbWU9XCJob3ZfcG9pbnRlciBtci1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNmZWF0dXJlc1wiIGFzPVwiLyNmZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz1cImFcIiBjbGFzc05hbWU9XCJob3ZfcG9pbnRlciBtci1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICBGZWF0dXJlc1xuICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jcHJpY2luZ1wiIGFzPVwiLyNwcmljaW5nXCI+XG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPVwiYVwiIGNsYXNzTmFtZT1cImhvdl9wb2ludGVyIG1yLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgIFByaWNpbmdcbiAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI3dvcmtmbG93c1wiIGFzPVwiLyN3b3JrZmxvd3NcIj5cbiAgICAgICAgICAgICAgICA8TmF2LkxpbmsgYXM9XCJhXCIgY2xhc3NOYW1lPVwiaG92X3BvaW50ZXIgbXItc20tM1wiPlxuICAgICAgICAgICAgICAgICAgV29ya2Zsb3dzXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7YXV0aH1cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTmF2YmFyPlxuXG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cbiAgICAgICAge21vZGFsU2hvdyA/IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0zMDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGcgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyIHRvcFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyIHJpZ2h0IGRlbGF5MVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyIGJvdHRvbSBkZWxheTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhciBsZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcGItMCBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsSGFuZGxlcn1cbiAgICAgICAgICAgICAgICA+PC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXIga2V5PXtjaGFuZ2VWaWV3fT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlVmlldyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VkPXtjaGFuZ2VWaWV3SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldz17Y2hhbmdlVmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VkPXtjbG9zZU1vZGFsSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWdudXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VkPXtjaGFuZ2VWaWV3SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldz17Y2hhbmdlVmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VkPXtjbG9zZU1vZGFsSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG4gICAgICAgIHttb2RhbFNob3cgPyAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWJhY2tkcm9wIGZhZGUgc2hvd1wiXG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICBhbmltYXRlPVwiaW5cIlxuICAgICAgICAgICAgZXhpdD1cIm91dFwiXG4gICAgICAgICAgICB2YXJpYW50cz17QmFja2Ryb3BNb2RhbH1cbiAgICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIDpnbG9iYWwoLm5hdmJhci1kZWZhdWx0KSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDIxOTI3O1xuICAgICAgICB9XG4gICAgICAgIDpnbG9iYWwoLm5hdmJhci1kZWZhdWx0IC5uYXYtbGluaykge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIDpnbG9iYWwoLm5hdmJhci1zY3JvbGxlZCkge1xuICAgICAgICAgIHRyYW5zaXRpb246IDUwMG1zIGVhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiKDc2LCA3NiwgNzYpIDBweCAxcHggMnB4O1xuICAgICAgICB9XG4gICAgICAgIDpnbG9iYWwoLm5hdmJhci1zY3JvbGxlZCAubmF2LWxpbmspIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIpIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudSkge1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIDpnbG9iYWwoLm5hdi1pdGVtXG4gICAgICAgICAgICAuc2hvd1xuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtLCAuZHJvcGRvd24taXRlbTpob3Zlcikge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTM5NTE7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5iYXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjNhY2U2O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAuYmFyLmRlbGF5MSB7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xuICAgICAgICB9XG4gICAgICAgIC5iYXIuZGVsYXkyIHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMXM7XG4gICAgICAgIH1cbiAgICAgICAgLnRvcCB7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgIHRvcDogMThweDtcbiAgICAgICAgICByaWdodDogLTIzcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20ge1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgIHRvcDogMTgwcHg7XG4gICAgICAgICAgbGVmdDogLTIzcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBoLW1vdmUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIGxlZnQ6IC01MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgaC1tb3ZlIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICBsZWZ0OiAtNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudG9wLFxuICAgICAgICAuYm90dG9tIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBoLW1vdmU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGgtbW92ZTtcbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdi1tb3ZlIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRvcDogMTEwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyB2LW1vdmUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdG9wOiAxMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmlnaHQsXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB2LW1vdmU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHYtbW92ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/paulus/Desktop/automatch/components/Header/index.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.4ee8a792682ca36eb588.hot-update.js.map