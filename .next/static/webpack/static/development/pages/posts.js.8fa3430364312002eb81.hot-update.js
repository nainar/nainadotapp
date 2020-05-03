webpackHotUpdate("static/development/pages/posts.js",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: __N_SSG, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Date */ "./components/Date.js");
var _jsxFileName = "/Users/nainar/nainadotapp/pages/posts.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var linkStyle = {
  'textDecoration': 'none',
  color: 'purple'
};
var __N_SSG = true;
var config = {
  amp: true
};

function HomePage(_ref) {
  var _this = this;

  var allPostsData = _ref.allPostsData;
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "jsx-1078787331",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "jsx-1078787331",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-1078787331",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Hi! \uD83D\uDC4B\uD83C\uDFFE Here are some posts."), __jsx("br", {
    className: "jsx-1078787331",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), allPostsData.map(function (_ref2) {
    var id = _ref2.id,
        date = _ref2.date,
        title = _ref2.title;
    return __jsx("div", {
      className: "jsx-1078787331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/[id]",
      as: "/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("a", {
      style: linkStyle,
      className: "jsx-1078787331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }, title)), __jsx("br", {
      className: "jsx-1078787331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx("small", {
      className: "jsx-1078787331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 24
      }
    })), __jsx("br", {
      className: "jsx-1078787331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx("br", {
      className: "jsx-1078787331",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1078787331",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}*.jsx-1078787331{font-family:'Bai Jamjuree',sans-serif;-webkit-text-decoration:none;text-decoration:none;}h1.jsx-1078787331{color:#d8156e;}main.jsx-1078787331{position:fixed;margin:0;color:#333333;top:calc(50% - 16px);left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding-left:10px;}small.jsx-1078787331{color:grey;}@media only screen and (max-width:768px){main.jsx-1078787331{top:4em;left:1em;-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);padding-left:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvcG9zdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JnQixBQUdvQyxBQUtZLEFBSTFCLEFBR0EsQUFTTCxBQUlBLFFBQ0MsR0FKYixHQVpBLENBR1csRUFjcUIsT0FiaEIsR0FiVSxXQUtELEFBU0YsV0FiNkMsVUFjekQsU0FDdUIsb0JBVmxDLHNCQXFCb0IsR0F6QnBCLGNBMEJFLDhDQVhpQixrQkFDbkIiLCJmaWxlIjoiL1VzZXJzL25haW5hci9uYWluYWRvdGFwcC9wYWdlcy9wb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL0RhdGUnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgJ3RleHREZWNvcmF0aW9uJzogJ25vbmUnLFxuICBjb2xvcjogJ3B1cnBsZSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFtcDogdHJ1ZSB9O1xuZnVuY3Rpb24gSG9tZVBhZ2Uoe2FsbFBvc3RzRGF0YX0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPG1haW4+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDE+SGkhIPCfkYvwn4++IEhlcmUgYXJlIHNvbWUgcG9zdHMuPC9oMT5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW2lkXVwiIGFzPXtgLyR7aWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c21hbGw+PERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz48L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJztcbiAgICAgICAgZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcbiAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYWkrSmFtanVyZWUnKTtcbiAgICB9XG4gICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiNkODE1NmU7XG4gICAgfVxuICAgIG1haW4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMTZweCk7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIH1cbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjpncmV5O1xuICAgIH0gICAgXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgbWFpbiB7XG4gICAgICAgIHRvcDogNGVtO1xuICAgICAgICBsZWZ0OiAxZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDowcHg7XG4gICAgICB9ICBcbiAgICB9XG5cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXX0= */\n/*@ sourceURL=/Users/nainar/nainadotapp/pages/posts.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=posts.js.8fa3430364312002eb81.hot-update.js.map