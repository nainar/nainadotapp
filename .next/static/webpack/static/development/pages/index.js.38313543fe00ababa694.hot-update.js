webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/amp */ "./node_modules/next/amp.js");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nainar/nainadotapp/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var config = {
  amp: 'true'
};

function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx("li", {
    className: "jsx-2144997699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2144997699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2144997699",
    __self: this
  }, "li.jsx-2144997699{list-style:none;margin:5px 0;}a.jsx-2144997699{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-2144997699:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUcyQixBQUtLLEFBTVQsWUFDZCxJQVhlLGFBQ2YscUJBSWEsV0FDUyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL25haW5hci9uYWluYWRvdGFwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgd2l0aEFtcCB9IGZyb20gJ25leHQvYW1wJ1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6ICd0cnVlJyB9O1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxuICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyB9XG4gIF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG4gIFxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG5cbmZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT7imqDvuI/wn5qn8J+Rt/Cfj73igI3imYDvuI9VTkRFUiBDT05TVFJVQ1RJT04h8J+Rt/Cfj73igI3imYDvuI/wn5qn4pqg77iPPC9oMT5cbiAgICAgIHsvKiA8dWw+XG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+ICovfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYWkgSmFtanVyZWUnO1xuICAgICAgICBmb250LXN0eWxlOiBzYW5zLXNlcmlmO1xuICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhaStKYW1qdXJlZScpO1xuICAgIH1cbiAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYWkgSmFtanVyZWUnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTZweCk7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il19 */\n/*@ sourceURL=/Users/nainar/nainadotapp/pages/index.js */"));
};

function Blog() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3836376171",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\u26A0\uFE0F\uD83D\uDEA7\uD83D\uDC77\uD83C\uDFFD\u200D\u2640\uFE0FUNDER CONSTRUCTION!\uD83D\uDC77\uD83C\uDFFD\u200D\u2640\uFE0F\uD83D\uDEA7\u26A0\uFE0F"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3836376171",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}*.jsx-3836376171{font-family:'Bai Jamjuree',sans-serif;}h1.jsx-3836376171{color:red;position:fixed;top:calc(50% - 16px);left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NnQixBQUdvQyxBQUtZLEFBRzlCLFVBQ00sZUFDTSxFQVRDLFdBSzFCLFFBS2EsR0FUdUQsTUFVaEMsMERBVHBDLCtDQVVzQixrQkFDVCxTQUNiIiwiZmlsZSI6Ii9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHdpdGhBbXAgfSBmcm9tICduZXh0L2FtcCdcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHsgYW1wOiAndHJ1ZScgfTtcblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbiAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICAgIDxsaT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG4gIFxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xuXG5mdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+4pqg77iP8J+ap/Cfkbfwn4+94oCN4pmA77iPVU5ERVIgQ09OU1RSVUNUSU9OIfCfkbfwn4+94oCN4pmA77iP8J+ap+KaoO+4jzwvaDE+XG4gICAgICB7LyogPHVsPlxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPiAqL31cbiAgICA8c3R5bGUganN4PntgXG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJztcbiAgICAgICAgZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcbiAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYWkrSmFtanVyZWUnKTtcbiAgICB9XG4gICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBjb2xvcjpyZWQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE2cHgpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdfQ== */\n/*@ sourceURL=/Users/nainar/nainadotapp/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=index.js.38313543fe00ababa694.hot-update.js.map