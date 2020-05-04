webpackHotUpdate("static/development/pages/[id].js",{

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
    "amp-fx": "float-in-top",
    className: "jsx-915605967" + " " + "finalHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "915605967",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}*.jsx-915605967{font-family:'Bai Jamjuree',sans-serif;}.finalHeader.jsx-915605967{position:fixed;overflow:hidden;}header.jsx-915605967{width:100%;background-color:#38e4dd;padding:1vh 0 1vh 0;height:3em;top:0;}.name.jsx-915605967{position:fixed;text-align:center;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:2em;top:0.5em;}.mobileLinks.jsx-915605967{display:none;}.desktopLinks.jsx-915605967{position:relative;width:100%;background-color:#38e4dd;top:1em;padding-left:1em;}@media only screen and (max-width:768px){.mobileLinks.jsx-915605967{background-color:#38e4dd;width:100%;display:inline;position:fixed;top:3em;padding-bottom:5px;font-size:1.25em;}.desktopLinks.jsx-915605967{display:none;}.name.jsx-915605967{font-size:1.5em;top:0.75em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUc0QyxBQUtVLEFBR3hCLEFBSUYsQUFRRSxBQVFGLEFBR0ssQUFTUyxBQVNaLEFBR0csV0F2Q1MsRUFnQjdCLEFBcUJFLEVBekNnQixBQVlDLENBZ0NKLEVBckJGLE9BU0UsRUF4Q1csQUFxRHhCLEVBckJ5QixFQXZCM0IsRUFZVyxHQVJhLEFBNEJMLEVBcENuQixJQWlCNkIsT0FyQnVDLEVBeUNqRCxHQVRULEVBbkJLLE1Bb0JJLElBU1AsQ0EzQkYsTUFDVixDQTJCdUIsS0FUdkIsY0FVcUIsaUJBQ25CLEdBNUNGLHNCQXFCZ0IsY0FDSixVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHsgYW1wOiB0cnVlIH07XG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1LFxuICAndGV4dERlY29yYXRpb24nOiAnbm9uZScsXG4gIGNvbG9yOiAncHVycGxlJ1xufTtcbmNvbnN0IG1vYmlsZUxpbmtTdHlsZSA9IHtcbiAgJ3RleHREZWNvcmF0aW9uJzogJ25vbmUnLFxuICBjb2xvcjogJ3B1cnBsZScsXG4gIG1hcmdpblJpZ2h0OiAnOCUnLFxuICBtYXJnaW5MZWZ0OiAnOCUnLFxufTtcbmNvbnN0IGRla3N0b3BMaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNSxcbiAgJ3RleHREZWNvcmF0aW9uJzogJ25vbmUnLFxuICBjb2xvcjogJ3B1cnBsZSdcbn07XG5cbmZ1bmN0aW9uIGdldFBhZ2VzKCkge1xuICByZXR1cm4gW1xuICAgIHsgbGluazogJy9wb3N0cycsIHRpdGxlOiAnUG9zdHMnIH0sXG4gICAgeyBsaW5rOiAnL3dvcmsnLCB0aXRsZTogJ1Byb2Zlc2gnIH0sXG4gICAgeyBsaW5rOiAnL3RhbGtzJywgdGl0bGU6ICdUYWxrcycgfVxuICBdO1xuIH1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgYW1wLWZ4PVwiZmxvYXQtaW4tdG9wXCIgY2xhc3NOYW1lPVwiZmluYWxIZWFkZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWkgSmFtanVyZWUnO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYWkrSmFtanVyZWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maW5hbEhlYWRlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ZTRkZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxdmggMCAxdmggMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNlbTtcblxuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICB0b3A6IDAuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZUxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNrdG9wTGlua3Mge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ZTRkZDtcbiAgICAgICAgICAgICAgdG9wOiAxZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAubW9iaWxlTGlua3Mge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGU0ZGQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgICAgICAgICAgICAgdG9wOiAzZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZGVza3RvcExpbmtzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgIHRvcDogMC43NWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT4gXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5haW5hIFJhaXNpbmdoYW5pPC90aXRsZT5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBrZXk9XCJhbXAtc2lkZWJhclwiIGN1c3RvbS1lbGVtZW50PVwiYW1wLXNpZGViYXJcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtc2lkZWJhci0wLjEuanNcIiAvPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIGtleT1cImFtcC1meC1jb2xsZWN0aW9uXCIgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtZngtY29sbGVjdGlvblwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1meC1jb2xsZWN0aW9uLTAuMS5qc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNrdG9wTGlua3NcIj5cbiAgICAgICAgICB7Z2V0UGFnZXMoKS5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtwYWdlLmxpbmt9PlxuICAgICAgICAgICAgICA8YSBzdHlsZT17ZGVrc3RvcExpbmtTdHlsZX0+e3BhZ2UudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0gY2xhc3NOYW1lPVwibmFtZVwiPk5haW5hJ3MgQmxvZyA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9iaWxlTGlua3NcIj5cbiAgICAgICAge2dldFBhZ2VzKCkubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e3BhZ2UubGlua30+XG4gICAgICAgICAgICA8YSBzdHlsZT17bW9iaWxlTGlua1N0eWxlfT57cGFnZS50aXRsZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/nainar/nainadotapp/components/Header.js */"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-915605967",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Naina Raisinghani"), __jsx("script", {
    async: true,
    key: "amp-sidebar",
    "custom-element": "amp-sidebar",
    src: "https://cdn.ampproject.org/v0/amp-sidebar-0.1.js",
    className: "jsx-915605967",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    key: "amp-fx-collection",
    "custom-element": "amp-fx-collection",
    src: "https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js",
    className: "jsx-915605967",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: "jsx-915605967",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-915605967" + " " + "desktopLinks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, getPages().map(function (page) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: page.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, __jsx("a", {
      style: dekstopLinkStyle,
      className: "jsx-915605967",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, page.title));
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("a", {
    style: linkStyle,
    className: "jsx-915605967" + " " + "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Naina's Blog "))), __jsx("span", {
    className: "jsx-915605967" + " " + "mobileLinks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, getPages().map(function (page) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: page.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, __jsx("a", {
      style: mobileLinkStyle,
      className: "jsx-915605967",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, page.title));
  })));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=[id].js.d86a10ab34d82f36f962.hot-update.js.map