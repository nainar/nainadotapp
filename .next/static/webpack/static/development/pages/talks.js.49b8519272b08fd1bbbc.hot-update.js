webpackHotUpdate("static/development/pages/talks.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nainar/nainadotapp/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var config = {
  amp: true
};
var linkStyle = {
  marginRight: 15,
  'textDecoration': 'none',
  color: 'purple'
};
var mobileLinkStyle = {
  'textDecoration': 'none',
  color: 'purple',
  marginRight: '8%',
  marginLeft: '8%'
};
var dekstopLinkStyle = {
  marginRight: 15,
  'textDecoration': 'none',
  color: 'purple'
};

function getPages() {
  return [{
    link: '/posts',
    title: 'Posts'
  }, {
    link: '/work',
    title: 'Profesh'
  }, {
    link: '/talks',
    title: 'Talks'
  }];
}

function Header() {
  var _this = this;

  return __jsx("div", {
    className: "jsx-4115429509",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4115429509",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}*.jsx-4115429509{font-family:'Bai Jamjuree',sans-serif;}header.jsx-4115429509{width:100%;background-color:#38e4dd;padding:1vh 0 1vh 0;height:3em;position:fixed;overflow:hidden;top:0;}.name.jsx-4115429509{position:fixed;text-align:center;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:2em;top:0.5em;}.mobileLinks.jsx-4115429509{display:none;}.desktopLinks.jsx-4115429509{position:relative;width:100%;background-color:#38e4dd;top:1em;padding-left:1em;}@media only screen and (max-width:768px){.mobileLinks.jsx-4115429509{background-color:#38e4dd;width:100%;display:inline;padding-bottom:5px;font-size:1.25em;}.desktopLinks.jsx-4115429509{display:none;}.name.jsx-4115429509{font-size:1.5em;top:0.75em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUc0QyxBQUtVLEFBRzFCLEFBU0UsQUFRRixBQUdLLEFBU1MsQUFPWixBQUdHLFdBdENTLEVBaUI3QixBQW1CRSxFQTNCaUIsQ0E4QkosRUFuQkYsT0FTRSxFQXJDVyxBQWdEeEIsRUFuQnlCLElBWGhCLEdBVGEsQUE2QkwsRUFqQ25CLElBYzZCLE9BbEJ1QyxFQXNDN0MsR0FUYixFQXBCSyxNQXFCSSxLQXBCQSxHQTZCRSxTQVJyQixHQXBCb0IsS0E2QmxCLFdBNUJRLE1BQ1YsU0FaQSxzQkFrQmdCLGNBQ0osVUFDWiIsImZpbGUiOiIvVXNlcnMvbmFpbmFyL25haW5hZG90YXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFtcDogdHJ1ZSB9O1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNSxcbiAgJ3RleHREZWNvcmF0aW9uJzogJ25vbmUnLFxuICBjb2xvcjogJ3B1cnBsZSdcbn07XG5jb25zdCBtb2JpbGVMaW5rU3R5bGUgPSB7XG4gICd0ZXh0RGVjb3JhdGlvbic6ICdub25lJyxcbiAgY29sb3I6ICdwdXJwbGUnLFxuICBtYXJnaW5SaWdodDogJzglJyxcbiAgbWFyZ2luTGVmdDogJzglJyxcbn07XG5jb25zdCBkZWtzdG9wTGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTUsXG4gICd0ZXh0RGVjb3JhdGlvbic6ICdub25lJyxcbiAgY29sb3I6ICdwdXJwbGUnXG59O1xuXG5mdW5jdGlvbiBnZXRQYWdlcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGxpbms6ICcvcG9zdHMnLCB0aXRsZTogJ1Bvc3RzJyB9LFxuICAgIHsgbGluazogJy93b3JrJywgdGl0bGU6ICdQcm9mZXNoJyB9LFxuICAgIHsgbGluazogJy90YWxrcycsIHRpdGxlOiAnVGFsa3MnIH1cbiAgXTtcbiB9XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaSBKYW1qdXJlZSc7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhaStKYW1qdXJlZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKntcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWkgSmFtanVyZWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhlNGRkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDF2aCAwIDF2aCAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICB0b3A6IDAuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZUxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNrdG9wTGlua3Mge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ZTRkZDtcbiAgICAgICAgICAgICAgdG9wOiAxZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAubW9iaWxlTGlua3Mge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGU0ZGQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRlc2t0b3BMaW5rcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgICB0b3A6IDAuNzVlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+IFxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OYWluYSBSYWlzaW5naGFuaTwvdGl0bGU+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMga2V5PVwiYW1wLXNpZGViYXJcIiBjdXN0b20tZWxlbWVudD1cImFtcC1zaWRlYmFyXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLXNpZGViYXItMC4xLmpzXCIgLz5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBrZXk9XCJhbXAtZngtY29sbGVjdGlvblwiIGN1c3RvbS1lbGVtZW50PVwiYW1wLWZ4LWNvbGxlY3Rpb25cIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtZngtY29sbGVjdGlvbi0wLjEuanNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBhbXAtZng9XCJmbG9hdC1pbi10b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wTGlua3NcIj5cbiAgICAgICAgICB7Z2V0UGFnZXMoKS5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtwYWdlLmxpbmt9PlxuICAgICAgICAgICAgICA8YSBzdHlsZT17ZGVrc3RvcExpbmtTdHlsZX0+e3BhZ2UudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfSBjbGFzc05hbWU9XCJuYW1lXCI+TmFpbmEncyBCbG9nIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZUxpbmtzXCIgYW1wLWZ4PVwiZmxvYXQtaW4tdG9wXCI+XG4gICAgICAgICAge2dldFBhZ2VzKCkubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17cGFnZS5saW5rfT5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e21vYmlsZUxpbmtTdHlsZX0+e3BhZ2UudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuKX07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/nainar/nainadotapp/components/Header.js */"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-4115429509",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Naina Raisinghani"), __jsx("script", {
    async: true,
    key: "amp-sidebar",
    "custom-element": "amp-sidebar",
    src: "https://cdn.ampproject.org/v0/amp-sidebar-0.1.js",
    className: "jsx-4115429509",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    key: "amp-fx-collection",
    "custom-element": "amp-fx-collection",
    src: "https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js",
    className: "jsx-4115429509",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })), __jsx("header", {
    "amp-fx": "float-in-top",
    className: "jsx-4115429509",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4115429509" + " " + "desktopLinks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, getPages().map(function (page) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: page.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, __jsx("a", {
      style: dekstopLinkStyle,
      className: "jsx-4115429509",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    }, page.title));
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("a", {
    style: linkStyle,
    className: "jsx-4115429509" + " " + "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Naina's Blog ")), __jsx("div", {
    "amp-fx": "float-in-top",
    className: "jsx-4115429509" + " " + "mobileLinks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, getPages().map(function (page) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: page.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, __jsx("a", {
      style: mobileLinkStyle,
      className: "jsx-4115429509",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    }, page.title));
  }))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=talks.js.49b8519272b08fd1bbbc.hot-update.js.map