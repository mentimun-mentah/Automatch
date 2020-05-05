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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      user = _useState5[0],
      setUser = _useState5[1];

  var onLogout = function onLogout() {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["logout"]());
  };

  var onGetUser = function onGetUser() {
    return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["getUser"]());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _parseCookies = Object(nookies__WEBPACK_IMPORTED_MODULE_6__["parseCookies"])(),
        access_token = _parseCookies.access_token;

    setTkn(access_token);

    if (access_token) {
      onGetUser();
    }
  }, [tkn, onGetUser]);
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
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    className: "rounded-pill mr-sm-3",
    onClick: showModalHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
          lineNumber: 95,
          columnNumber: 11
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/profile",
      as: "/profile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      className: "text-hvr-none",
      as: "span",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }, "Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/jobs",
      as: "/jobs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      className: "text-hvr-none",
      as: "span",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }
    }, "Job List")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/logout",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      className: "text-hvr-none",
      as: "span",
      onClick: logoutHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
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
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 138,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "ml-auto align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "a",
    className: "hov_pointer mr-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/#features",
    as: "/#features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "a",
    className: "hov_pointer mr-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, "Features")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/#pricing",
    as: "/#pricing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "a",
    className: "hov_pointer mr-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, "Pricing")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/#workflows",
    as: "/#workflows",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "a",
    className: "hov_pointer mr-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, "Workflows")), auth)))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-4275914465" + " " + "modal-dialog modal-lg modal-dialog-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-4275914465" + " " + "modal-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-4275914465" + " " + "bar top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4275914465" + " " + "bar right delay1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4275914465" + " " + "bar bottom delay2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4275914465" + " " + "bar left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    className: "border-0 pb-0 ml-auto",
    closeButton: true,
    onClick: closeModalHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4275914465" + " " + "col-md-8 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    exitBeforeEnter: true,
    key: changeView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }, changeView ? __jsx(_Signin__WEBPACK_IMPORTED_MODULE_11__["default"], {
    viewed: changeViewHandler,
    view: changeView,
    closed: closeModalHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 25
    }
  }) : __jsx(_Signup__WEBPACK_IMPORTED_MODULE_10__["default"], {
    viewed: changeViewHandler,
    view: changeView,
    closed: closeModalHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 25
    }
  }))))))) : null), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
      lineNumber: 226,
      columnNumber: 11
    }
  }) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4275914465",
    __self: _this
  }, ".navbar-default{-webkit-transition:500ms ease;transition:500ms ease;background:#021927;}.navbar-default .nav-link{color:white !important;}.navbar-scrolled{-webkit-transition:500ms ease;transition:500ms ease;background:white;box-shadow:rgb(76,76,76) 0px 1px 2px;}.navbar-scrolled .nav-link{color:black !important;}.modal-content.jsx-4275914465{border:none !important;border-radius:0px !important;overflow:hidden !important;}.dropdown-toggle::after{display:none !important;}.dropdown-menu{padding:0.5rem !important;}.nav-item .show .dropdown-menu .dropdown-item,.dropdown-item:hover{background-color:#113951;color:#ffffff;cursor:pointer;}.bar.jsx-4275914465{position:absolute;width:50px;height:5px;background:#23ace6;-webkit-transition:all 2s linear;transition:all 2s linear;-webkit-animation-duration:2s;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bar.delay1.jsx-4275914465{-webkit-animation-delay:1.4s;animation-delay:1.4s;-webkit-animation-delay:1.4s;}.bar.delay2.jsx-4275914465{-webkit-animation-delay:1.1s;animation-delay:1.1s;-webkit-animation-delay:1.1s;}.top.jsx-4275914465{top:0px;left:-5px;}.right.jsx-4275914465{top:18px;right:-23px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.bottom.jsx-4275914465{bottom:0px;left:-5px;}.left.jsx-4275914465{top:180px;left:-23px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}@-webkit-keyframes h-move{0%.jsx-4275914465{left:-50px;}100%.jsx-4275914465{left:100%;}}@-webkit-keyframes h-move-jsx-4275914465{0%{left:-50px;}100%{left:100%;}}@keyframes h-move-jsx-4275914465{0%{left:-50px;}100%{left:100%;}}.top.jsx-4275914465,.bottom.jsx-4275914465{-webkit-animation-name:h-move;-webkit-animation-name:h-move-jsx-4275914465;animation-name:h-move-jsx-4275914465;}@-webkit-keyframes v-move{0%.jsx-4275914465{top:-30px;}100%.jsx-4275914465{top:110%;}}@-webkit-keyframes v-move-jsx-4275914465{0%{top:-30px;}100%{top:110%;}}@keyframes v-move-jsx-4275914465{0%{top:-30px;}100%{top:110%;}}.right.jsx-4275914465,.left.jsx-4275914465{-webkit-animation-name:v-move;-webkit-animation-name:v-move-jsx-4275914465;animation-name:v-move-jsx-4275914465;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsdXMvRGVza3RvcC9hdXRvbWF0Y2gvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk9rQixBQUdpQyxBQUlDLEFBR0QsQUFLQyxBQUdBLEFBS0MsQUFHRSxBQU1ELEFBS1AsQUFhRyxBQUlBLEFBSWIsQUFJQyxBQUtFLEFBSUQsQUFNRyxBQUdELEFBS0MsQUFHRCxBQUtrQixBQUtsQixBQUdELEFBS0MsQUFHRCxBQUttQixRQXZEcEIsQ0FJRSxBQXVDWixBQVFBLENBdENXLEFBU1gsQUFRQSxBQVVBLEFBUUEsQ0F2Q1UsQUFVVixBQVFBLE9BaERXLEFBc0JiLEdBSTBCLEFBSzFCLEFBSTBCLEVBakUxQixBQVFBLEFBRytCLENBSy9CLENBU2dCLENBTmhCLEdBWWEsQ0F1RFcsQUFxQkEsU0FqRlAsQ0FNSSxVQVdVLEFBSUEsRUFuRFYsQUFPRixBQVNVLEVBZTdCLEtBTTJCLFVBN0JjLEVBUHpDLFFBZ0JBLEFBK0JBLEFBSUEsMEJBU0EsQUFTQSxDQTdEQSxNQWtGQSxBQXFCQSxLQTFFZ0MsOEJBQ1Isb0RBQ1csaUNBQ1IsMERBQ2tCLDJDQUNSLDhFQUNyQyIsImZpbGUiOiIvVXNlcnMvcGF1bHVzL0Rlc2t0b3AvYXV0b21hdGNoL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTmF2YmFyLFxuICBDb250YWluZXIsXG4gIE5hdixcbiAgRm9ybSxcbiAgQnV0dG9uLFxuICBNb2RhbCxcbiAgTmF2RHJvcGRvd24sXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEJhY2tkcm9wTW9kYWwgfSBmcm9tIFwiLi4vVHJhbnNpdGlvblwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XG5cbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vc3RvcmUvYXhpb3MtaW5zdGFuY2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTaWdudXAgZnJvbSBcIi4vU2lnbnVwXCI7XG5pbXBvcnQgU2lnbmluIGZyb20gXCIuL1NpZ25pblwiO1xuXG5jb25zdCBIZWFkZXIgPSBSZWFjdC5tZW1vKCgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IFtpc1RvcCwgc2V0SXNUb3BdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGFuZ2VWaWV3LCBzZXRDaGFuZ2VWaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rrbiwgc2V0VGtuXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgb25Mb2dvdXQgPSAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmxvZ291dCgpKTtcbiAgY29uc3Qgb25HZXRVc2VyID0gKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5nZXRVc2VyKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuICAgIHNldFRrbihhY2Nlc3NfdG9rZW4pO1xuICAgIGlmIChhY2Nlc3NfdG9rZW4pIHtcbiAgICAgIG9uR2V0VXNlcigpO1xuICAgIH1cbiAgfSwgW3Rrbiwgb25HZXRVc2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGluVG9wID0gd2luZG93LnNjcm9sbFkgPCA1MDtcbiAgICAgIGlmIChpblRvcCAhPT0gaXNUb3ApIHtcbiAgICAgICAgc2V0SXNUb3AoaW5Ub3ApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICBzZXRJc1RvcCh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtpc1RvcF0pO1xuXG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0VGtuKCk7XG4gICAgb25Mb2dvdXQoKTtcbiAgICBkZXN0cm95Q29va2llKG51bGwsIFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgIGRlc3Ryb3lDb29raWUobnVsbCwgXCJyZWZyZXNoX3Rva2VuXCIpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3BlblwiKTtcbiAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVZpZXdIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldENoYW5nZVZpZXcoIWNoYW5nZVZpZXcpO1xuICB9O1xuXG4gIGxldCBhdXRoID0gKFxuICAgIDxGb3JtIGlubGluZT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXBpbGwgbXItc20tM1wiXG4gICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbEhhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIFNpZ24gdXBcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcblxuICBpZiAodGtuKSB7XG4gICAgYXV0aCA9IChcbiAgICAgIDxOYXZEcm9wZG93blxuICAgICAgICBhbGlnblJpZ2h0XG4gICAgICAgIHRpdGxlPXtcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VzZXIgJiYgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdGF0aWMvYXZhdGFycy8ke3VzZXIuYXZhdGFyfWB9XG4gICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCJcbiAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgYXM9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT1cInRleHQtaHZyLW5vbmVcIiBhcz1cInNwYW5cIj5cbiAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9qb2JzXCIgYXM9XCIvam9ic1wiPlxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT1cInRleHQtaHZyLW5vbmVcIiBhcz1cInNwYW5cIj5cbiAgICAgICAgICAgIEpvYiBMaXN0XG4gICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaHZyLW5vbmVcIlxuICAgICAgICAgICAgYXM9XCJzcGFuXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdkRyb3Bkb3duPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyXG4gICAgICAgIGV4cGFuZD1cImxnXCJcbiAgICAgICAgZml4ZWQ9XCJ0b3BcIlxuICAgICAgICBjbGFzc05hbWU9e2lzVG9wID8gXCJuYXZiYXItZGVmYXVsdFwiIDogXCJuYXZiYXItc2Nyb2xsZWRcIn1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICBpc1RvcFxuICAgICAgICAgICAgICAgICAgICA/IFwiL3N0YXRpYy9pbWFnZXMvbG9nby1uYXZiYXItd2hpdGUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9zdGF0aWMvaW1hZ2VzL2xvZ28tbmF2YmFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTYwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBdXRvbWF0Y2ggTG9nb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG8gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9XCIvXCI+XG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPVwiYVwiIGNsYXNzTmFtZT1cImhvdl9wb2ludGVyIG1yLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2ZlYXR1cmVzXCIgYXM9XCIvI2ZlYXR1cmVzXCI+XG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPVwiYVwiIGNsYXNzTmFtZT1cImhvdl9wb2ludGVyIG1yLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgIEZlYXR1cmVzXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNwcmljaW5nXCIgYXM9XCIvI3ByaWNpbmdcIj5cbiAgICAgICAgICAgICAgICA8TmF2LkxpbmsgYXM9XCJhXCIgY2xhc3NOYW1lPVwiaG92X3BvaW50ZXIgbXItc20tM1wiPlxuICAgICAgICAgICAgICAgICAgUHJpY2luZ1xuICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jd29ya2Zsb3dzXCIgYXM9XCIvI3dvcmtmbG93c1wiPlxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz1cImFcIiBjbGFzc05hbWU9XCJob3ZfcG9pbnRlciBtci1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICBXb3JrZmxvd3NcbiAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHthdXRofVxuICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9OYXZiYXI+XG5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxuICAgICAgICB7bW9kYWxTaG93ID8gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbFwiXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX1cbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTMwMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIgdG9wXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIgcmlnaHQgZGVsYXkxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIgYm90dG9tIGRlbGF5MlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyIGxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBwYi0wIG1sLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9kYWxIYW5kbGVyfVxuICAgICAgICAgICAgICAgID48L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBrZXk9e2NoYW5nZVZpZXd9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjaGFuZ2VWaWV3ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25pblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3ZWQ9e2NoYW5nZVZpZXdIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3PXtjaGFuZ2VWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQ9e2Nsb3NlTW9kYWxIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ251cFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3ZWQ9e2NoYW5nZVZpZXdIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3PXtjaGFuZ2VWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQ9e2Nsb3NlTW9kYWxIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cbiAgICAgICAge21vZGFsU2hvdyA/IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtYmFja2Ryb3AgZmFkZSBzaG93XCJcbiAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJpblwiXG4gICAgICAgICAgICBleGl0PVwib3V0XCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtCYWNrZHJvcE1vZGFsfVxuICAgICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgOmdsb2JhbCgubmF2YmFyLWRlZmF1bHQpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMjE5Mjc7XG4gICAgICAgIH1cbiAgICAgICAgOmdsb2JhbCgubmF2YmFyLWRlZmF1bHQgLm5hdi1saW5rKSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgOmdsb2JhbCgubmF2YmFyLXNjcm9sbGVkKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2IoNzYsIDc2LCA3NikgMHB4IDFweCAycHg7XG4gICAgICAgIH1cbiAgICAgICAgOmdsb2JhbCgubmF2YmFyLXNjcm9sbGVkIC5uYXYtbGluaykge1xuICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tdG9nZ2xlOjphZnRlcikge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51KSB7XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgOmdsb2JhbCgubmF2LWl0ZW1cbiAgICAgICAgICAgIC5zaG93XG4gICAgICAgICAgICAuZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0sIC5kcm9wZG93bi1pdGVtOmhvdmVyKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMzk1MTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyM2FjZTY7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDJzIGxpbmVhcjtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5iYXIuZGVsYXkxIHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNHM7XG4gICAgICAgIH1cbiAgICAgICAgLmJhci5kZWxheTIge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4xcztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4xcztcbiAgICAgICAgfVxuICAgICAgICAudG9wIHtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICAgIHJpZ2h0OiAtMjNweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgfVxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgdG9wOiAxODBweDtcbiAgICAgICAgICBsZWZ0OiAtMjNweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGgtbW92ZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgbGVmdDogLTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBoLW1vdmUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIGxlZnQ6IC01MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50b3AsXG4gICAgICAgIC5ib3R0b20ge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGgtbW92ZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogaC1tb3ZlO1xuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB2LW1vdmUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdG9wOiAxMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHYtbW92ZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0b3A6IDExMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yaWdodCxcbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHYtbW92ZTtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogdi1tb3ZlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/paulus/Desktop/automatch/components/Header/index.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.0af263add0b21db336b8.hot-update.js.map