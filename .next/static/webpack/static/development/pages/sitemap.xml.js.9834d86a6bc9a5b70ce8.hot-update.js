webpackHotUpdate("static/development/pages/sitemap.xml.js",{

/***/ "./pages/sitemap.xml.ts":
/*!******************************!*\
  !*** ./pages/sitemap.xml.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sitemap; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/posts */ "./lib/posts.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






var blogPostsXml = function blogPostsXml(blogPostsData) {
  var latestPost = blogPostsData[0].date;
  var postsXml = "";
  blogPostsData.map(function (post) {
    var postDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["parseISO"])(post.date);

    if (!latestPost || postDate > latestPost) {
      latestPost = postDate;
    }

    postsXml += "\n    <url>\n<<<<<<< HEAD\n      <loc>https://naina.app/".concat(post.id, "</loc>\n=======\n      <loc>").concat(post.id, "</loc>\n>>>>>>> 90d21c1416505563ad864017b069be39758e6f79\n      <lastmod>").concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(postDate, 'LLLL d, yyyy'), "</lastmod>\n      <priority>0.80</priority>\n    </url>");
  });
  return {
    postsXml: postsXml,
    latestPost: latestPost
  };
};

var sitemapXml = function sitemapXml(blogPostsData) {
  var _blogPostsXml = blogPostsXml(blogPostsData),
      postsXml = _blogPostsXml.postsXml,
      latestPost = _blogPostsXml.latestPost;

  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n    <url>\n      <loc>https://naina.app/</loc>\n      <lastmod>https://naina.app/".concat(latestPost, "</lastmod>\n      <priority>1.00</priority>\n    </url>\n    <url>\n      <loc>https://naina.app/posts</loc>\n      <priority>0.8</priority>\n    </url>\n    <url>\n      <loc>https://naina.app/work</loc>\n      <priority>0.7</priority>\n    </url>\n    <url>\n      <loc>https://naina.app/talks</loc>\n      <priority>0.5</priority>\n    </url>\n    ").concat(postsXml, "\n  </urlset>");
};

var Sitemap = /*#__PURE__*/function () {
  function Sitemap() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sitemap);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sitemap, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res, blogPostsData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res = _ref.res;
              blogPostsData = Object(_lib_posts__WEBPACK_IMPORTED_MODULE_3__["getSortedPostsData"])();
              res.setHeader("Content-Type", "text/xml");
              res.write(sitemapXml(blogPostsData));
              res.end();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return Sitemap;
}();



/***/ })

})
//# sourceMappingURL=sitemap.xml.js.9834d86a6bc9a5b70ce8.hot-update.js.map