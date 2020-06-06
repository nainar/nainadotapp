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
    className: "jsx-1418883753",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, postData.title), __jsx("link", {
    rel: "icon",
    href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\uD83D\uDCA9</text></svg>",
    className: "jsx-1418883753",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-1418883753",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-1418883753",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, postData.title), __jsx("small", {
    className: "jsx-1418883753",
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
    className: "jsx-1418883753",
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
    className: "jsx-1418883753",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), postData.imgUrl ? __jsx("div", {
    className: "jsx-1418883753" + " " + "imgHolder",
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
    "class": "jsx-1418883753",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })) : __jsx("div", {
    className: "jsx-1418883753",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1418883753",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}*.jsx-1418883753{font-family:'Bai Jamjuree',sans-serif;-webkit-text-decoration:none;text-decoration:none;}h1.jsx-1418883753,h2.jsx-1418883753,h3.jsx-1418883753,h4.jsx-1418883753{color:#d8156e;}a.jsx-1418883753{-webkit-text-decoration:none, color:'purple',;text-decoration:none, color:'purple',;}small.jsx-1418883753{color:grey;}.text.jsx-1418883753{text-align:center;vertical-align:middles;}main.jsx-1418883753{position:relative;left:1em;-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);top:5.5em;padding-left:10px;padding-bottom:100px;width:95%;}.imgHolder.jsx-1418883753{width:30vw;height:30vh;}@media all and (max-width:500px){.imgHolder.jsx-1418883753{width:100%;height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmdCLEFBR29DLEFBS1ksQUFJekIsQUFLakIsQUFFYSxBQUdRLEFBSUQsQUFTTCxBQUtHLFdBcEJqQixBQWdCZSxBQUtHLEdBNUJsQixJQVV5QixBQUlkLEtBVVgsQUFLRSxJQXRDc0IsQUF3Qk0sV0FuQlAsR0FldkIsUUFuQmtFLG1DQVlsRSxJQVBBLHlCQUpBLE9BdUJXLFVBQ1Esa0JBQ0kscUJBQ1gsVUFDWiIsImZpbGUiOiIvVXNlcnMvbmFpbmFyL25haW5hZG90YXBwL3BhZ2VzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGdldEFsbFBvc3RJZHMsIGdldFBvc3REYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRlJ1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6IHRydWUgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSUyMmh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTIyIHZpZXdCb3g9JTIyMCAwIDEwMCAxMDAlMjI+PHRleHQgeT0lMjIuOWVtJTIyIGZvbnQtc2l6ZT0lMjI5MCUyMj7wn5KpPC90ZXh0Pjwvc3ZnPlwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgIDxzbWFsbD48RGF0ZSBkYXRlU3RyaW5nPXtwb3N0RGF0YS5kYXRlfSAvPjwvc21hbGw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICAgICAge3Bvc3REYXRhLmltZ1VybD8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nSG9sZGVyXCI+XG4gICAgICAgICAgICA8YW1wLWltZyBzcmM9e3Bvc3REYXRhLmltZ1VybH1cbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDI0XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDAzMlwiICBcbiAgICAgICAgICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCI+XG4gICAgICAgICAgICA8L2FtcC1pbWc+XG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxuICAgICAgICApIDogPGRpdj48L2Rpdj59XG4gICAgICA8L21haW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJztcbiAgICAgICAgZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcbiAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYWkrSmFtanVyZWUnKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogJ0JhaSBKYW1qdXJlZScsIHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIGgxLCBoMiwgaDMsIGg0IHtcbiAgICAgICAgY29sb3I6ICNkODE1NmU7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lLFxuICAgICAgICBjb2xvcjogJ3B1cnBsZScsXG4gICAgICB9XG4gICAgICBzbWFsbCB7XG4gICAgICAgIGNvbG9yOmdyZXk7XG4gICAgICB9XG4gICAgICAudGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZXM7XG4gICAgICB9XG4gICAgICBtYWluIHtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDFlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgICAgICAgdG9wOjUuNWVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgfSBcbiAgICAgIC5pbWdIb2xkZXIge1xuICAgICAgICAgIHdpZHRoOjMwdnc7IFxuICAgICAgICAgIGhlaWdodDozMHZoOyBcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIC5pbWdIb2xkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gZ2V0QWxsUG9zdElkcygpXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3REYXRhXG4gICAgfVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/nainar/nainadotapp/pages/[id].js */"));
}

/***/ })

})
//# sourceMappingURL=[id].js.f1f0593168ff68d4e57a.hot-update.js.map