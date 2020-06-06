webpackHotUpdate("static/development/pages/[id].js",{

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/*! exports provided: __N_SSG, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Date */ "./components/Date.js");
var _jsxFileName = "/Users/nainar/nainadotapp/pages/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var __N_SSG = true;
var config = {
  amp: true
};
function Post(_ref) {
  var postData = _ref.postData;
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("title", {
    className: "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, postData.title), __jsx("link", {
    rel: "icon",
    href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\uD83D\uDCA9</text></svg>",
    className: "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, postData.title), __jsx("small", {
    className: "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dateString: postData.date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 16
    }
  })), __jsx("br", {
    className: "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: postData.contentHtml
    },
    className: "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), postData.imgUrl ? __jsx("div", {
    className: "jsx-2930156034" + " " + "imgHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("amp-img", {
    src: postData.imgUrl,
    width: "3024",
    height: "4032",
    layout: "intrinsic",
    "class": "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })) : __jsx("div", {
    className: "jsx-2930156034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2930156034",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}*.jsx-2930156034{font-family:'Bai Jamjuree',sans-serif;-webkit-text-decoration:none;text-decoration:none;}h1.jsx-2930156034,h2.jsx-2930156034,h3.jsx-2930156034,h4.jsx-2930156034{color:#d8156e;}a.jsx-2930156034{-webkit-text-decoration:none, color:'purple',;text-decoration:none, color:'purple',;}small.jsx-2930156034{color:grey;}.text.jsx-2930156034{text-align:center;vertical-align:middles;}main.jsx-2930156034{position:relative;left:0;-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);top:5.5em;padding-left:10px;padding-bottom:100px;width:95%;}.imgHolder.jsx-2930156034{width:30vw;height:30vh;}@media all and (max-width:500px){.imgHolder.jsx-2930156034{width:100%;height:100%;}}@media all and (min-width:1500px){main.jsx-2930156034{position:fixed;margin:0;top:calc(50%);left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding-left:0px;padding-bottom:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmdCLEFBR29DLEFBS1ksQUFJekIsQUFLakIsQUFFYSxBQUdRLEFBSUQsQUFTTCxBQUtHLEFBTUksV0ExQnJCLEFBZ0JlLEFBS0csR0E1QmxCLENBa0NlLEdBeEJVLEFBSWhCLEtBVVQsQUFLRSxDQU1rQixDQXBCVSxFQXhCTixXQUtELEFBd0NSLEdBekJmLE1BMEJzQyxFQTdDNEIsbUNBWWxFLElBUEEseUJBSkEsS0F1QlcsVUFDUSxrQkFDSSxNQW9CRCxlQW5CVixFQW9CYSxRQW5CekIsV0FvQkUiLCJmaWxlIjoiL1VzZXJzL25haW5hci9uYWluYWRvdGFwcC9wYWdlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBnZXRBbGxQb3N0SWRzLCBnZXRQb3N0RGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cydcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvRGF0ZSdcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHsgYW1wOiB0cnVlIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0RGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdERhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0lMjJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiB2aWV3Qm94PSUyMjAgMCAxMDAgMTAwJTIyPjx0ZXh0IHk9JTIyLjllbSUyMiBmb250LXNpemU9JTIyOTAlMjI+8J+SqTwvdGV4dD48L3N2Zz5cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPntwb3N0RGF0YS50aXRsZX08L2gxPlxuICAgICAgICA8c21hbGw+PERhdGUgZGF0ZVN0cmluZz17cG9zdERhdGEuZGF0ZX0gLz48L3NtYWxsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19IC8+XG4gICAgICAgIHtwb3N0RGF0YS5pbWdVcmw/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0hvbGRlclwiPlxuICAgICAgICAgICAgPGFtcC1pbWcgc3JjPXtwb3N0RGF0YS5pbWdVcmx9XG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAyNFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQwMzJcIiAgXG4gICAgICAgICAgICAgIGxheW91dD1cImludHJpbnNpY1wiPlxuICAgICAgICAgICAgPC9hbXAtaW1nPlxuICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcbiAgICAgICAgKSA6IDxkaXY+PC9kaXY+fVxuICAgICAgPC9tYWluPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0JhaSBKYW1qdXJlZSc7XG4gICAgICAgIGZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XG4gICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFpK0phbWp1cmVlJyk7XG4gICAgICB9XG4gICAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYWkgSmFtanVyZWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBoMSwgaDIsIGgzLCBoNCB7XG4gICAgICAgIGNvbG9yOiAjZDgxNTZlO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSxcbiAgICAgICAgY29sb3I6ICdwdXJwbGUnLFxuICAgICAgfVxuICAgICAgc21hbGwge1xuICAgICAgICBjb2xvcjpncmV5O1xuICAgICAgfVxuICAgICAgLnRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVzO1xuICAgICAgfVxuICAgICAgbWFpbiB7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAgICAgICB0b3A6NS41ZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICB9IFxuICAgICAgLmltZ0hvbGRlciB7XG4gICAgICAgICAgd2lkdGg6MzB2dzsgXG4gICAgICAgICAgaGVpZ2h0OjMwdmg7IFxuICAgICAgfVxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLmltZ0hvbGRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlKTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgIH0gIFxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKVxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YVxuICAgIH1cbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/nainar/nainadotapp/pages/[id].js */"));
}

/***/ })

})
//# sourceMappingURL=[id].js.7b62f6120c55415abfb2.hot-update.js.map