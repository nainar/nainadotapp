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
var mediumPosts = [{
  date: '2016-08-07',
  title: 'Rising Women in Tech: Developing Countries',
  url: 'https://medium.com/@nainar/2016-mid-year-review-6f1659493a44'
}, {
  date: '2016-07-06',
  title: '2016 Mid Year Review',
  url: 'https://medium.com/@nainar/2016-mid-year-review-6f1659493a44'
}, {
  date: '2016-01-25',
  title: 'My failure Resume',
  url: 'https://medium.com/@nainar/my-failure-resume-82d5ad2bdee5'
}];
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
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "jsx-3158389004",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "jsx-3158389004",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-3158389004",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Hi! \uD83D\uDC4B\uD83C\uDFFE Here are some posts."), __jsx("br", {
    className: "jsx-3158389004",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), allPostsData.map(function (_ref2) {
    var id = _ref2.id,
        date = _ref2.date,
        title = _ref2.title;
    return __jsx("div", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/[id]",
      as: "/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx("a", {
      style: linkStyle,
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, title)), __jsx("br", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }), __jsx("small", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 24
      }
    })), __jsx("br", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }), __jsx("br", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }));
  }), __jsx("h1", {
    className: "jsx-3158389004",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Previous posts written elsewhere"), __jsx("br", {
    className: "jsx-3158389004",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), mediumPosts.map(function (_ref3) {
    var date = _ref3.date,
        title = _ref3.title,
        url = _ref3.url;
    return __jsx("div", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: url,
      as: url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("a", {
      style: linkStyle,
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }, title)), __jsx("br", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }), __jsx("small", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 24
      }
    })), __jsx("br", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx("br", {
      className: "jsx-3158389004",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3158389004",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}*.jsx-3158389004{font-family:'Bai Jamjuree',sans-serif;-webkit-text-decoration:none;text-decoration:none;}h1.jsx-3158389004{color:#d8156e;}main.jsx-3158389004{position:fixed;margin:0;color:#333333;top:calc(50% - 16px);left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding-left:10px;width:95%;}small.jsx-3158389004{color:grey;}@media only screen and (max-width:1500px){main.jsx-3158389004{position:relative;top:5.5em;left:1em;-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);padding-left:0px;padding-bottom:100px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvcG9zdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERnQixBQUdvQyxBQUtZLEFBSTFCLEFBR0EsQUFVTCxBQUlVLFdBSHRCLEdBYkEsQ0FHVyxHQWNHLE1BYkUsR0FiVSxDQTJCYixTQUNtQixDQXZCUCxBQVNGLFdBYjZDLFVBY3pELFNBQ3VCLG9CQVZsQyx5QkFKQSxpQkEyQm9CLGlCQUNLLHFCQUN2QixLQWRpQixrQkFDUCxVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvcG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRlJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gICd0ZXh0RGVjb3JhdGlvbic6ICdub25lJyxcbiAgY29sb3I6ICdwdXJwbGUnXG59O1xuXG5jb25zdCBtZWRpdW1Qb3N0cyA9IFtcbiAge1xuICAgIGRhdGU6ICcyMDE2LTA4LTA3JyxcbiAgICB0aXRsZTogJ1Jpc2luZyBXb21lbiBpbiBUZWNoOiBEZXZlbG9waW5nIENvdW50cmllcycsXG4gICAgdXJsOiAnaHR0cHM6Ly9tZWRpdW0uY29tL0BuYWluYXIvMjAxNi1taWQteWVhci1yZXZpZXctNmYxNjU5NDkzYTQ0J1xuICB9LCBcbiAge1xuICAgIGRhdGU6ICcyMDE2LTA3LTA2JyxcbiAgICB0aXRsZTogJzIwMTYgTWlkIFllYXIgUmV2aWV3JyxcbiAgICB1cmw6ICdodHRwczovL21lZGl1bS5jb20vQG5haW5hci8yMDE2LW1pZC15ZWFyLXJldmlldy02ZjE2NTk0OTNhNDQnXG4gIH0sIFxuICB7XG4gICAgZGF0ZTogJzIwMTYtMDEtMjUnLFxuICAgIHRpdGxlOiAnTXkgZmFpbHVyZSBSZXN1bWUnLFxuICAgIHVybDogJ2h0dHBzOi8vbWVkaXVtLmNvbS9AbmFpbmFyL215LWZhaWx1cmUtcmVzdW1lLTgyZDVhZDJiZGVlNSdcbiAgfSwgXG5dO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6IHRydWUgfTtcbmZ1bmN0aW9uIEhvbWVQYWdlKHthbGxQb3N0c0RhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxtYWluPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgxPkhpISDwn5GL8J+PviBIZXJlIGFyZSBzb21lIHBvc3RzLjwvaDE+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tpZF1cIiBhcz17YC8ke2lkfWB9PlxuICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsPjxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxoMT5QcmV2aW91cyBwb3N0cyB3cml0dGVuIGVsc2V3aGVyZTwvaDE+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAge21lZGl1bVBvc3RzLm1hcCgoeyBkYXRlLCB0aXRsZSwgdXJsIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXt1cmx9IGFzPXt1cmx9PlxuICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNtYWxsPjxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0JhaSBKYW1qdXJlZSc7XG4gICAgICAgIGZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XG4gICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFpK0phbWp1cmVlJyk7XG4gICAgfVxuICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogJ0JhaSBKYW1qdXJlZScsIHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBjb2xvcjojZDgxNTZlO1xuICAgIH1cbiAgICBtYWluIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDE2cHgpO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICAgIHNtYWxsIHtcbiAgICAgIGNvbG9yOmdyZXk7XG4gICAgfSAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAgICAgbWFpbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA1LjVlbTtcbiAgICAgICAgbGVmdDogMWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICB9ICBcbiAgICB9XG5cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXX0= */\n/*@ sourceURL=/Users/nainar/nainadotapp/pages/posts.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=posts.js.59ea46d85bd5c6b5e9d9.hot-update.js.map