module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nainar/nainadotapp/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const config = {
  amp: true
};
const svgStyle = {
  'enableBackground': 'new 0 0 493.497 493.497',
  display: 'inline-block',
  width: '1.5em',
  height: '1.5em'
};
const svgEmailStyle = {
  display: 'inline-block',
  width: '1.5em',
  height: '1.5em',
  padding: '0px 0px 0px 5px'
};
const fillStyle = {
  fill: '#000000'
};

const Footer = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("script", {
  async: true,
  key: "amp-fx-collection",
  "custom-element": "amp-fx-collection",
  src: "https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})), __jsx("footer", {
  role: "contentinfo",
  "amp-fx": "float-in-bottom",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1376483810",
  __self: undefined
}, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}footer.jsx-1376483810{font-family:'Bai Jamjuree',sans-serif;position:fixed;overflow:hidden;height:3em;left:0;bottom:0;width:100%;background-color:#a77be48a;text-align:center;padding:1vh 0 1vh 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUd3QyxBQUtZLDJCQUpqQixXQUtQLFdBSmlELElBS2hELGdCQUNMLFdBQ0osT0FDRSxTQUNFLFdBQ2dCLE1BVC9CLHFCQVVzQixrQkFDRSxvQkFDeEIiLCJmaWxlIjoiL1VzZXJzL25haW5hci9uYWluYWRvdGFwcC9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6IHRydWUgfTtcblxuY29uc3Qgc3ZnU3R5bGU9IHtcbiAgICAnZW5hYmxlQmFja2dyb3VuZCc6ICduZXcgMCAwIDQ5My40OTcgNDkzLjQ5NycsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIFxuICAgIHdpZHRoOiAnMS41ZW0nLFxuICAgIGhlaWdodDogJzEuNWVtJyxcbn1cblxuY29uc3Qgc3ZnRW1haWxTdHlsZT0ge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBcbiAgICB3aWR0aDogJzEuNWVtJyxcbiAgICBoZWlnaHQ6ICcxLjVlbScsXG4gICAgcGFkZGluZzogJzBweCAwcHggMHB4IDVweCdcbn1cblxuY29uc3QgZmlsbFN0eWxlID0ge2ZpbGw6JyMwMDAwMDAnfVxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8c2NyaXB0IGFzeW5jIGtleT1cImFtcC1meC1jb2xsZWN0aW9uXCIgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtZngtY29sbGVjdGlvblwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1meC1jb2xsZWN0aW9uLTAuMS5qc1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxmb290ZXIgcm9sZT1cImNvbnRlbnRpbmZvXCIgYW1wLWZ4PVwiZmxvYXQtaW4tYm90dG9tXCI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhaStKYW1qdXJlZScpO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaSBKYW1qdXJlZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc3YmU0OGE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxdmggMCAxdmggMDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25haW5hclwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgYXJpYS1sYWJlbD1cIkxvb2sgYXQgbXkgR2l0SHViXCI+XG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTggMThcIiBzdHlsZT17c3ZnU3R5bGV9PlxuICAgICAgICA8Zz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTggMEMzLjU4IDAgMCAzLjU4MiAwIDhjMCAzLjUzNSAyLjI5MiA2LjUzMyA1LjQ3IDcuNTkuNC4wNzUuNTQ3LS4xNzIuNTQ3LS4zODUgMC0uMTktLjAwNy0uNjkzLS4wMS0xLjM2LTIuMjI2LjQ4My0yLjY5NS0xLjA3My0yLjY5NS0xLjA3My0uMzY0LS45MjQtLjg5LTEuMTctLjg5LTEuMTctLjcyNS0uNDk2LjA1Ni0uNDg2LjA1Ni0uNDg2LjgwMy4wNTYgMS4yMjUuODI0IDEuMjI1LjgyNC43MTQgMS4yMjMgMS44NzMuODcgMi4zMy42NjUuMDcyLS41MTcuMjc4LS44Ny41MDctMS4wNy0xLjc3Ny0uMi0zLjY0NC0uODg4LTMuNjQ0LTMuOTUzIDAtLjg3My4zMS0xLjU4Ny44MjMtMi4xNDctLjA4My0uMjAyLS4zNTgtMS4wMTUuMDc3LTIuMTE3IDAgMCAuNjcyLS4yMTUgMi4yLjgyLjYzOC0uMTc4IDEuMzIzLS4yNjYgMi4wMDMtLjI3LjY4LjAwNCAxLjM2NC4wOTIgMi4wMDMuMjcgMS41MjctMS4wMzUgMi4xOTgtLjgyIDIuMTk4LS44Mi40MzcgMS4xMDIuMTYzIDEuOTE1LjA4IDIuMTE3LjUxMy41Ni44MjMgMS4yNzQuODIzIDIuMTQ3IDAgMy4wNzMtMS44NyAzLjc1LTMuNjUzIDMuOTQ3LjI4Ny4yNDYuNTQzLjczNS41NDMgMS40OCAwIDEuMDctLjAxIDEuOTMzLS4wMSAyLjE5NSAwIC4yMTUuMTQ0LjQ2My41NS4zODVDMTMuNzEgMTQuNTMgMTYgMTEuNTM0IDE2IDhjMC00LjQxOC0zLjU4Mi04LTgtOFwiPjwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+PC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL25haW5hcjkyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBhcmlhLWxhYmVsPVwiRm9sbG93IG1lIG9uIFR3aXR0ZXJcIj5cbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxOCAxOFwiIHN0eWxlPXtzdmdTdHlsZX0+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDMuMDM4Yy0uNTkuMjYtMS4yMi40MzctMS44ODUuNTE3LjY3Ny0uNDA3IDEuMTk4LTEuMDUgMS40NDMtMS44MTYtLjYzNC4zNzUtMS4zMzcuNjQ4LTIuMDg1Ljc5NS0uNTk4LS42MzgtMS40NS0xLjAzNi0yLjM5Ni0xLjAzNi0xLjgxMiAwLTMuMjgyIDEuNDY4LTMuMjgyIDMuMjggMCAuMjU4LjAzLjUxLjA4NS43NUM1LjE1MiA1LjM5IDIuNzMzIDQuMDg0IDEuMTE0IDIuMS44MyAyLjU4My42NyAzLjE0Ny42NyAzLjc1YzAgMS4xNC41OCAyLjE0MyAxLjQ2IDIuNzMyLS41MzgtLjAxNy0xLjA0NS0uMTY1LTEuNDg3LS40MXYuMDRjMCAxLjU5IDEuMTMgMi45MTggMi42MzMgMy4yMi0uMjc2LjA3NC0uNTY2LjExNC0uODY1LjExNC0uMjEgMC0uNDE2LS4wMi0uNjE3LS4wNTguNDE4IDEuMzA0IDEuNjMgMi4yNTMgMy4wNjcgMi4yOC0xLjEyNC44OC0yLjU0IDEuNDA0LTQuMDc3IDEuNDA0LS4yNjUgMC0uNTI2LS4wMTUtLjc4My0uMDQ1IDEuNDUzLjkzIDMuMTc4IDEuNDc0IDUuMDMyIDEuNDc0IDYuMDM4IDAgOS4zNC01IDkuMzQtOS4zMzggMC0uMTQzLS4wMDQtLjI4NC0uMDEtLjQyNS42NC0uNDYzIDEuMTk4LTEuMDQgMS42MzgtMS43elwiIGZpbGxSdWxlPVwibm9uemVyb1wiPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPjwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9uYWluYXI5Mi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGFyaWEtbGFiZWw9XCJGb2xsb3cgbWUgb24gSW5zdGFncmFtXCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT17c3ZnU3R5bGV9PlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIHN0eWxlPXtmaWxsU3R5bGV9XG4gICAgICAgICAgZD1cIk0yNTYsNDkuNDcxYzY3LjI2NiwwLDc1LjIzMy4yNTcsMTAxLjgsMS40NjksMjQuNTYyLDEuMTIxLDM3LjksNS4yMjQsNDYuNzc4LDguNjc0YTc4LjA1Miw3OC4wNTIsMCwwLDEsMjguOTY2LDE4Ljg0NSw3OC4wNTIsNzguMDUyLDAsMCwxLDE4Ljg0NSwyOC45NjZjMy40NSw4Ljg3Nyw3LjU1NCwyMi4yMTYsOC42NzQsNDYuNzc4LDEuMjEyLDI2LjU2NSwxLjQ2OSwzNC41MzIsMS40NjksMTAxLjhzLTAuMjU3LDc1LjIzMy0xLjQ2OSwxMDEuOGMtMS4xMjEsMjQuNTYyLTUuMjI1LDM3LjktOC42NzQsNDYuNzc4YTgzLjQyNyw4My40MjcsMCwwLDEtNDcuODExLDQ3LjgxMWMtOC44NzcsMy40NS0yMi4yMTYsNy41NTQtNDYuNzc4LDguNjc0LTI2LjU2LDEuMjEyLTM0LjUyNywxLjQ2OS0xMDEuOCwxLjQ2OXMtNzUuMjM3LS4yNTctMTAxLjgtMS40NjljLTI0LjU2Mi0xLjEyMS0zNy45LTUuMjI1LTQ2Ljc3OC04LjY3NGE3OC4wNTEsNzguMDUxLDAsMCwxLTI4Ljk2Ni0xOC44NDUsNzguMDUzLDc4LjA1MywwLDAsMS0xOC44NDUtMjguOTY2Yy0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuOHMwLjI1Ny03NS4yMzMsMS40NjktMTAxLjhjMS4xMjEtMjQuNTYyLDUuMjI0LTM3LjksOC42NzQtNDYuNzc4QTc4LjA1Miw3OC4wNTIsMCwwLDEsNzguNDU4LDc4LjQ1OGE3OC4wNTMsNzguMDUzLDAsMCwxLDI4Ljk2Ni0xOC44NDVjOC44NzctMy40NSwyMi4yMTYtNy41NTQsNDYuNzc4LTguNjc0LDI2LjU2NS0xLjIxMiwzNC41MzItMS40NjksMTAxLjgtMS40NjltMC00NS4zOTFjLTY4LjQxOCwwLTc3LC4yOS0xMDMuODY2LDEuNTE2LTI2LjgxNSwxLjIyNC00NS4xMjcsNS40ODItNjEuMTUxLDExLjcxYTEyMy40ODgsMTIzLjQ4OCwwLDAsMC00NC42MiwyOS4wNTdBMTIzLjQ4OCwxMjMuNDg4LDAsMCwwLDE3LjMsOTAuOTgyQzExLjA3NywxMDcuMDA3LDYuODE5LDEyNS4zMTksNS42LDE1Mi4xMzQsNC4zNjksMTc5LDQuMDc5LDE4Ny41ODIsNC4wNzksMjU2UzQuMzY5LDMzMyw1LjYsMzU5Ljg2NmMxLjIyNCwyNi44MTUsNS40ODIsNDUuMTI3LDExLjcxLDYxLjE1MWExMjMuNDg5LDEyMy40ODksMCwwLDAsMjkuMDU3LDQ0LjYyLDEyMy40ODYsMTIzLjQ4NiwwLDAsMCw0NC42MiwyOS4wNTdjMTYuMDI1LDYuMjI4LDM0LjMzNywxMC40ODYsNjEuMTUxLDExLjcxLDI2Ljg3LDEuMjI2LDM1LjQ0OSwxLjUxNiwxMDMuODY2LDEuNTE2czc3LS4yOSwxMDMuODY2LTEuNTE2YzI2LjgxNS0xLjIyNCw0NS4xMjctNS40ODIsNjEuMTUxLTExLjcxYTEyOC44MTcsMTI4LjgxNywwLDAsMCw3My42NzctNzMuNjc3YzYuMjI4LTE2LjAyNSwxMC40ODYtMzQuMzM3LDExLjcxLTYxLjE1MSwxLjIyNi0yNi44NywxLjUxNi0zNS40NDksMS41MTYtMTAzLjg2NnMtMC4yOS03Ny0xLjUxNi0xMDMuODY2Yy0xLjIyNC0yNi44MTUtNS40ODItNDUuMTI3LTExLjcxLTYxLjE1MWExMjMuNDg2LDEyMy40ODYsMCwwLDAtMjkuMDU3LTQ0LjYyQTEyMy40ODcsMTIzLjQ4NywwLDAsMCw0MjEuMDE4LDE3LjNDNDA0Ljk5MywxMS4wNzcsMzg2LjY4MSw2LjgxOSwzNTkuODY2LDUuNiwzMzMsNC4zNjksMzI0LjQxOCw0LjA3OSwyNTYsNC4wNzloMFpcIi8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgc3R5bGU9e2ZpbGxTdHlsZX1cbiAgICAgICAgICBkPVwiTTI1NiwxMjYuNjM1QTEyOS4zNjUsMTI5LjM2NSwwLDEsMCwzODUuMzY1LDI1NiwxMjkuMzY1LDEyOS4zNjUsMCwwLDAsMjU2LDEyNi42MzVabTAsMjEzLjMzOEE4My45NzMsODMuOTczLDAsMSwxLDMzOS45NzQsMjU2LDgzLjk3NCw4My45NzQsMCwwLDEsMjU2LDMzOS45NzNaXCIvPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgc3R5bGU9e2ZpbGxTdHlsZX1cbiAgICAgICAgICBjeD1cIjM5MC40NzZcIiBjeT1cIjEyMS41MjRcIiByPVwiMzAuMjNcIi8+XG4gICAgICA8L3N2Zz48L2E+XG4gICAgPGEgaHJlZj1cIm1haWx0bzptZUBuYWluYS5hcHBcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGFyaWEtbGFiZWw9XCJFbWFpbCBtZSFcIj5cbiAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA0OTMuNDk3IDQ5My40OTdcIiBzdHlsZT17c3ZnRW1haWxTdHlsZX0+XG4gICAgICA8cGF0aCBkPVwiTTQ0NC41NTYsODUuMjE4SDQ4Ljk0MkMyMS45NTQsODUuMjE4LDAsMTA3LjE3MSwwLDEzNC4xNnYyMjUuMTc3YzAsMjYuOTg4LDIxLjk1NCw0OC45NDIsNDguOTQyLDQ4Ljk0MmgzOTUuNjEzXG4gICAgICAgIGMyNi45ODgsMCw0OC45NDEtMjEuOTU0LDQ4Ljk0MS00OC45NDJWMTM0LjE2QzQ5My40OTcsMTA3LjE3MSw0NzEuNTQ0LDg1LjIxOCw0NDQuNTU2LDg1LjIxOHogTTQ2MC44NywxMzQuMTZ2MjI1LjE3N1xuICAgICAgICBjMCwyLjU3NC0wLjcyNSw0LjkyNC0xLjc5Myw3LjA5TDM0My43NCwyNTEuMDgxbDExNy4wOTctMTE3LjA5N0M0NjAuODM3LDEzNC4wNDksNDYwLjg3LDEzNC4wOTYsNDYwLjg3LDEzNC4xNnogTTMyLjYyOCwzNTkuMzM2XG4gICAgICAgIFYxMzQuMTZjMC0wLjA2NCwwLjAzMy0wLjExLDAuMDMzLTAuMTc1bDExNy4wOTcsMTE3LjA5N0wzNC40MTMsMzY2LjQyNkMzMy4zNTMsMzY0LjI2LDMyLjYyOCwzNjEuOTExLDMyLjYyOCwzNTkuMzM2elxuICAgICAgICBNMjUxLjc4NCwyOTYuOTAyYy0yLjY5MiwyLjY5MS03LjM3OCwyLjY5MS0xMC4wNywwTDYyLjY2NywxMTcuODQ2aDM2OC4xNzJMMjUxLjc4NCwyOTYuOTAyeiBNMTcyLjgyNywyNzQuMTUybDQ1LjgxOCw0NS44MTlcbiAgICAgICAgYzcuNTEyLDcuNTExLDE3LjQ5MywxMS42NDUsMjguMTA0LDExLjY0NWMxMC42MSwwLDIwLjU5Mi00LjEzNCwyOC4xMDQtMTEuNjQ1bDQ1LjgyLTQ1LjgxOWwxMDEuNDksMTAxLjQ5OUg3MS4zMjdMMTcyLjgyNywyNzQuMTUyelxuICAgICAgICBcIi8+XG4gICAgICA8Zz5cbiAgICAgIDwvZz5cbiAgICAgIDxnPlxuICAgICAgPC9nPlxuICAgICAgPGc+XG4gICAgICA8L2c+XG4gICAgICA8Zz5cbiAgICAgIDwvZz5cbiAgICAgIDxnPlxuICAgICAgPC9nPlxuICAgICAgPGc+XG4gICAgICA8L2c+XG4gICAgICA8Zz5cbiAgICAgIDwvZz5cbiAgICAgIDxnPlxuICAgICAgPC9nPlxuICAgICAgPGc+XG4gICAgICA8L2c+XG4gICAgICA8Zz5cbiAgICAgIDwvZz5cbiAgICAgIDxnPlxuICAgICAgPC9nPlxuICAgICAgPGc+XG4gICAgICA8L2c+XG4gICAgICA8Zz5cbiAgICAgIDwvZz5cbiAgICAgIDxnPlxuICAgICAgPC9nPlxuICAgICAgPGc+XG4gICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L2E+XG4gIDxkaXYgaWQ9XCJmb290ZXJUZXh0XCI+U291cmNlIGNvZGUgaW4gdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmFpbmFyL25haW5hZG90YXBwL1wiPnJlcG9zaXRvcnk8L2E+IG9uIEdpdEh1YjwvZGl2PlxuPC9mb290ZXI+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=/Users/nainar/nainadotapp/components/Footer.js */"), __jsx("a", {
  href: "https://github.com/nainar",
  target: "_blank",
  rel: "noopener",
  "aria-label": "Look at my GitHub",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("svg", {
  viewBox: "0 0 18 18",
  style: svgStyle,
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("path", {
  d: "M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
})))), __jsx("a", {
  href: "https://twitter.com/nainar92",
  target: "_blank",
  rel: "noopener",
  "aria-label": "Follow me on Twitter",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("svg", {
  viewBox: "0 0 18 18",
  style: svgStyle,
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("path", {
  d: "M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z",
  fillRule: "nonzero",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
})))), __jsx("a", {
  href: "https://www.instagram.com/nainar92/",
  target: "_blank",
  rel: "noopener",
  "aria-label": "Follow me on Instagram",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  style: svgStyle,
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("path", {
  style: fillStyle,
  d: "M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}), __jsx("path", {
  style: fillStyle,
  d: "M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}), __jsx("circle", {
  style: fillStyle,
  cx: "390.476",
  cy: "121.524",
  r: "30.23",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}))), __jsx("a", {
  href: "mailto:me@naina.app",
  target: "_blank",
  rel: "noopener",
  "aria-label": "Email me!",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 493.497 493.497",
  style: svgEmailStyle,
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("path", {
  d: "M444.556,85.218H48.942C21.954,85.218,0,107.171,0,134.16v225.177c0,26.988,21.954,48.942,48.942,48.942h395.613 c26.988,0,48.941-21.954,48.941-48.942V134.16C493.497,107.171,471.544,85.218,444.556,85.218z M460.87,134.16v225.177 c0,2.574-0.725,4.924-1.793,7.09L343.74,251.081l117.097-117.097C460.837,134.049,460.87,134.096,460.87,134.16z M32.628,359.336 V134.16c0-0.064,0.033-0.11,0.033-0.175l117.097,117.097L34.413,366.426C33.353,364.26,32.628,361.911,32.628,359.336z M251.784,296.902c-2.692,2.691-7.378,2.691-10.07,0L62.667,117.846h368.172L251.784,296.902z M172.827,274.152l45.818,45.819 c7.512,7.511,17.493,11.645,28.104,11.645c10.61,0,20.592-4.134,28.104-11.645l45.82-45.819l101.49,101.499H71.327L172.827,274.152z ",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}))), __jsx("div", {
  id: "footerText",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, "Source code in the ", __jsx("a", {
  href: "https://github.com/nainar/nainadotapp/",
  className: "jsx-1376483810",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, "repository"), " on GitHub")));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nainar/nainadotapp/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const config = {
  amp: true
};
const linkStyle = {
  marginRight: 15,
  'text-decoration': 'none',
  color: 'purple'
};

function getPages() {
  return [{
    link: '/p/resume',
    title: 'Resume'
  }, {
    link: '/p/posts',
    title: 'Posts'
  }, {
    link: '/p/talks',
    title: 'Talks'
  }];
}

function Header() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Naina Raisinghani"), __jsx("script", {
    async: true,
    key: "amp-sidebar",
    "custom-element": "amp-sidebar",
    src: "https://cdn.ampproject.org/v0/amp-sidebar-0.1.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("script", {
    async: true,
    key: "amp-fx-collection",
    "custom-element": "amp-fx-collection",
    src: "https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("header", {
    "amp-fx": "float-in-top",
    className: "jsx-2588450100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2588450100",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}header.jsx-2588450100{font-family:'Bai Jamjuree',sans-serif;width:100%;background-color:#07c1b98a;padding:1vh 0 1vh 0;height:3em;position:fixed;overflow:hidden;top:0;}.name.jsx-2588450100{position:fixed;text-align:center;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:2em;top:0.5em;}.links.jsx-2588450100{position:relative;top:1em;padding-left:1em;}amp-sidebar.jsx-2588450100,#toggleSidebar.jsx-2588450100{display:none;}@media only screen and (max-width:768px){amp-sidebar.jsx-2588450100,#toggleSidebar.jsx-2588450100{display:block;position:relative;padding-left:1em;height:100%;z-index:1000;}#toggleSidebar.jsx-2588450100{padding-top:1em;}.links.jsx-2588450100{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJvQixBQUc0QyxBQUtZLEFBVTFCLEFBUUcsQUFLTCxBQUtHLEFBT0UsQUFHSCxhQWRqQixBQWVFLENBVm9CLENBbEJILENBeUJqQixFQWpCUSxRQUNTLENBeEJPLEtBa0NMLENBbEJWLEtBWEksSUFZYyxDQVE3QixNQXhCb0UsQUFLckMsQUE2QmYsWUFDQSxhQUNkLEVBOUJzQixvQkFDVCxXQUNJLE1BUG5CLFNBUW9CLGFBUUosR0FQTixNQUNWLEtBT1ksVUFDWiIsImZpbGUiOiIvVXNlcnMvbmFpbmFyL25haW5hZG90YXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFtcDogdHJ1ZSB9O1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNSxcbiAgJ3RleHQtZGVjb3JhdGlvbic6ICdub25lJyxcbiAgY29sb3I6ICdwdXJwbGUnXG59O1xuXG4gZnVuY3Rpb24gZ2V0UGFnZXMoKSB7XG4gICByZXR1cm4gW1xuICAgICB7IGxpbms6ICcvcC9yZXN1bWUnLCB0aXRsZTogJ1Jlc3VtZScgfSxcbiAgICAgeyBsaW5rOiAnL3AvcG9zdHMnLCB0aXRsZTogJ1Bvc3RzJyB9LFxuICAgICB7IGxpbms6ICcvcC90YWxrcycsIHRpdGxlOiAnVGFsa3MnIH1cbiAgIF07XG4gfVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmFpbmEgUmFpc2luZ2hhbmk8L3RpdGxlPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIGtleT1cImFtcC1zaWRlYmFyXCIgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtc2lkZWJhclwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1zaWRlYmFyLTAuMS5qc1wiIC8+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMga2V5PVwiYW1wLWZ4LWNvbGxlY3Rpb25cIiBjdXN0b20tZWxlbWVudD1cImFtcC1meC1jb2xsZWN0aW9uXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWZ4LWNvbGxlY3Rpb24tMC4xLmpzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgYW1wLWZ4PVwiZmxvYXQtaW4tdG9wXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJztcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFpK0phbWp1cmVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjMWI5OGE7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXZoIDAgMXZoIDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgIHRvcDogMC41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgICB0b3A6IDFlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbXAtc2lkZWJhciwgI3RvZ2dsZVNpZGViYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIGFtcC1zaWRlYmFyLCAjdG9nZ2xlU2lkZWJhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgei1pbmRleDoxMDAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICN0b2dnbGVTaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAge2dldFBhZ2VzKCkubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17cGFnZS5saW5rfT5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+e3BhZ2UudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgaWQ9XCJ0b2dnbGVTaWRlYmFyXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJjbG9zZSBzaWRlYmFyXCIgb249XCJ0YXA6c2lkZWJhcjEudG9nZ2xlXCIgdGFiaW5kZXg9XCIwXCI+4piwPC9kaXY+XG4gICAgICAgIDxhbXAtc2lkZWJhciBpZD1cInNpZGViYXIxXCIgbGF5b3V0PVwibm9kaXNwbGF5XCIgc2lkZT1cImxlZnRcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlYmFyXCIgc3R5bGU9e3tsaXN0U3R5bGU6ICdub25lJ319PlxuICAgICAgICAgICAge2dldFBhZ2VzKCkubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGFnZS5saW5rfT5cbiAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PntwYWdlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2FtcC1zaWRlYmFyPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9IGNsYXNzTmFtZT1cIm5hbWVcIj5OYWluYSdzIEJsb2cgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/nainar/nainadotapp/components/Header.js */"), __jsx("span", {
    className: "jsx-2588450100" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, getPages().map(page => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: page.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    className: "jsx-2588450100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, page.title)))), __jsx("div", {
    id: "toggleSidebar",
    role: "button",
    "aria-label": "close sidebar",
    on: "tap:sidebar1.toggle",
    tabindex: "0",
    className: "jsx-2588450100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u2630"), __jsx("amp-sidebar", {
    id: "sidebar1",
    layout: "nodisplay",
    side: "left",
    class: "jsx-2588450100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("ul", {
    class: "sidebar",
    style: {
      listStyle: 'none'
    },
    className: "jsx-2588450100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, getPages().map(page => __jsx("li", {
    className: "jsx-2588450100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: page.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    className: "jsx-2588450100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, page.title)))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    className: "jsx-2588450100" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Naina's Blog "))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nainar/nainadotapp/components/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const config = {
  amp: true
};

const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Naina Raisinghani"), __jsx("link", {
  rel: "icon",
  href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\uD83D\uDCA9</text></svg>",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("script", {
  async: true,
  key: "amp-analytics",
  "custom-element": "amp-analytics",
  src: "https://cdn.ampproject.org/v0/amp-analytics-0.1.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), props.children, __jsx("amp-analytics", {
  type: "googleanalytics",
  id: "analytics1",
  "data-credentials": "include",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("script", {
  type: "application/json",
  dangerouslySetInnerHTML: {
    __html: JSON.stringify({
      vars: {
        account: 'UA-126879454-1'
      },
      triggers: {
        trackPageview: {
          on: 'visible',
          request: 'pageview'
        }
      }
    })
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/p/talks.js":
/*!**************************!*\
  !*** ./pages/p/talks.js ***!
  \**************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nainar/nainadotapp/pages/p/talks.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const config = {
  amp: true
};

function TalksPage() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Naina Raisinghani"), __jsx("link", {
    rel: "icon",
    href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\uD83D\uDCA9</text></svg>",
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("script", {
    async: true,
    key: "amp-youtube",
    "custom-element": "amp-youtube",
    src: "https://cdn.ampproject.org/v0/amp-youtube-0.1.js",
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2312336972" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2312336972" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("amp-youtube", {
    "data-videoid": "UyPdVFbZ3gs",
    layout: "fixed",
    width: "480",
    height: "270",
    class: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2312336972" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "AMP: A user driven component roadmap"), __jsx("p", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Come along and learn about all the new shiny components and feature work that the AMP Project has taken on. This talk also includes a sneak peek on future feature work to come.")), __jsx("amp-youtube", {
    "data-videoid": "aRK85FSEsx0",
    layout: "fixed",
    width: "480",
    height: "270",
    class: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2312336972" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Rapidly Building Better Web Experiences with AMP "), __jsx("p", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "AMP set out with the vision to bring reliably fast performance to the web. We are now expanding the format to new mediums like email and stories while ensuring AMP has a positive return on investment for the millions of sites that use it. This talk is a whirlwind tour on everything new with AMP in 2019.")), __jsx("amp-youtube", {
    "data-videoid": "Ez_wOEmH2P0",
    layout: "fixed",
    width: "480",
    height: "270",
    class: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2312336972" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "AMP as a service: Auto-upgraded, accelerated developer workflows"), __jsx("p", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "As the number of frameworks increase, AMP stays the well lit path that allows engineering teams to make the best decisions for their users. This talk describes how much like SaaS, by using AMP CTOs ensure their engineering teams are able to be more agile in creating forward looking experiences while being backward compatible by leveraging the thousands of open source contributions made to AMP daily.")), __jsx("amp-youtube", {
    "data-videoid": "s7OyBFLr9rY",
    layout: "fixed",
    width: "480",
    height: "270",
    class: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2312336972" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Houdini - how you too can write a browser rendering engine!"), __jsx("p", {
    className: "jsx-2312336972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "This talk describes the Houdini APIs. A group of APIs that give developers direct access to the CSS Object Model (CSSOM), thereby enabling them to write code the browser can parse as CSS, and creating new CSS features without waiting for them to be implemented natively in browsers.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2312336972",
    __self: this
  }, "@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}*.jsx-2312336972{font-family:'Bai Jamjuree',sans-serif;-webkit-text-decoration:none;text-decoration:none;}.main.jsx-2312336972{top:4em;}.container.jsx-2312336972{display:grid;grid-template-columns:480px 480px;grid-template-rows:auto;grid-gap:10px;}.text.jsx-2312336972{text-align:center;vertical-align:middles;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWluYXIvbmFpbmFkb3RhcHAvcGFnZXMvcC90YWxrcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRGdCLEFBR29DLEFBS1ksQUFJL0IsQUFHSyxBQU1LLFFBUnRCLEtBR3NDLEtBTVgsU0FsQkQsV0FLRCxHQWN6QixNQU40QixFQVp3QyxzQkFhbEQsY0FDbEIsR0FUQSx5QkFKQSIsImZpbGUiOiIvVXNlcnMvbmFpbmFyL25haW5hZG90YXBwL3BhZ2VzL3AvdGFsa3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHsgYW1wOiB0cnVlIH07XG5cbmZ1bmN0aW9uIFRhbGtzUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5haW5hIFJhaXNpbmdoYW5pPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0lMjJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiB2aWV3Qm94PSUyMjAgMCAxMDAgMTAwJTIyPjx0ZXh0IHk9JTIyLjllbSUyMiBmb250LXNpemU9JTIyOTAlMjI+8J+SqTwvdGV4dD48L3N2Zz5cIiAvPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIGtleT1cImFtcC15b3V0dWJlXCIgY3VzdG9tLWVsZW1lbnQ9XCJhbXAteW91dHViZVwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC15b3V0dWJlLTAuMS5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxhbXAteW91dHViZSBkYXRhLXZpZGVvaWQ9XCJVeVBkVkZiWjNnc1wiIGxheW91dD1cImZpeGVkXCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIyNzBcIiA+PC9hbXAteW91dHViZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDxoMj5BTVA6IEEgdXNlciBkcml2ZW4gY29tcG9uZW50IHJvYWRtYXA8L2gyPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBDb21lIGFsb25nIGFuZCBsZWFybiBhYm91dCBhbGwgdGhlIG5ldyBzaGlueSBjb21wb25lbnRzIGFuZCBmZWF0dXJlIHdvcmsgdGhhdCB0aGUgQU1QIFByb2plY3QgaGFzIHRha2VuIG9uLiBUaGlzIHRhbGsgYWxzbyBpbmNsdWRlcyBhIHNuZWFrIHBlZWsgb24gZnV0dXJlIGZlYXR1cmUgd29yayB0byBjb21lLiBcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGFtcC15b3V0dWJlIGRhdGEtdmlkZW9pZD1cImFSSzg1RlNFc3gwXCIgbGF5b3V0PVwiZml4ZWRcIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjI3MFwiPjwvYW1wLXlvdXR1YmU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8aDI+UmFwaWRseSBCdWlsZGluZyBCZXR0ZXIgV2ViIEV4cGVyaWVuY2VzIHdpdGggQU1QIDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQU1QIHNldCBvdXQgd2l0aCB0aGUgdmlzaW9uIHRvIGJyaW5nIHJlbGlhYmx5IGZhc3QgcGVyZm9ybWFuY2UgdG8gdGhlIHdlYi4gXG4gICAgICAgICAgICAgICAgV2UgYXJlIG5vdyBleHBhbmRpbmcgdGhlIGZvcm1hdCB0byBuZXcgbWVkaXVtcyBsaWtlIGVtYWlsIGFuZCBzdG9yaWVzIHdoaWxlIGVuc3VyaW5nIFxuICAgICAgICAgICAgICAgIEFNUCBoYXMgYSBwb3NpdGl2ZSByZXR1cm4gb24gaW52ZXN0bWVudCBmb3IgdGhlIG1pbGxpb25zIG9mIHNpdGVzIHRoYXQgdXNlIGl0LiBcbiAgICAgICAgICAgICAgICBUaGlzIHRhbGsgaXMgYSB3aGlybHdpbmQgdG91ciBvbiBldmVyeXRoaW5nIG5ldyB3aXRoIEFNUCBpbiAyMDE5LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YW1wLXlvdXR1YmUgZGF0YS12aWRlb2lkPVwiRXpfd09FbUgyUDBcIiBsYXlvdXQ9XCJmaXhlZFwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMjcwXCI+PC9hbXAteW91dHViZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDxoMj5BTVAgYXMgYSBzZXJ2aWNlOiBBdXRvLXVwZ3JhZGVkLCBhY2NlbGVyYXRlZCBkZXZlbG9wZXIgd29ya2Zsb3dzPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQXMgdGhlIG51bWJlciBvZiBmcmFtZXdvcmtzIGluY3JlYXNlLCBBTVAgc3RheXMgdGhlIHdlbGwgbGl0IHBhdGggdGhhdCBhbGxvd3MgZW5naW5lZXJpbmcgdGVhbXMgXG4gICAgICAgICAgICAgICAgICAgIHRvIG1ha2UgdGhlIGJlc3QgZGVjaXNpb25zIGZvciB0aGVpciB1c2Vycy4gVGhpcyB0YWxrIGRlc2NyaWJlcyBob3cgbXVjaCBsaWtlIFNhYVMsIGJ5IHVzaW5nIEFNUCBDVE9zIGVuc3VyZSB0aGVpciBlbmdpbmVlcmluZyBcbiAgICAgICAgICAgICAgICAgICAgdGVhbXMgYXJlIGFibGUgdG8gYmUgbW9yZSBhZ2lsZSBpbiBjcmVhdGluZyBmb3J3YXJkIGxvb2tpbmcgZXhwZXJpZW5jZXMgd2hpbGUgYmVpbmcgYmFja3dhcmQgY29tcGF0aWJsZSBcbiAgICAgICAgICAgICAgICAgICAgYnkgbGV2ZXJhZ2luZyB0aGUgdGhvdXNhbmRzIG9mIG9wZW4gc291cmNlIGNvbnRyaWJ1dGlvbnMgbWFkZSB0byBBTVAgZGFpbHkuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxhbXAteW91dHViZSBkYXRhLXZpZGVvaWQ9XCJzN095QkZMcjlyWVwiIGxheW91dD1cImZpeGVkXCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIyNzBcIj48L2FtcC15b3V0dWJlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGgyPkhvdWRpbmkgLSBob3cgeW91IHRvbyBjYW4gd3JpdGUgYSBicm93c2VyIHJlbmRlcmluZyBlbmdpbmUhPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyB0YWxrIGRlc2NyaWJlcyB0aGUgSG91ZGluaSBBUElzLlxuICAgICAgICAgICAgICAgICAgICBBIGdyb3VwIG9mIEFQSXMgdGhhdCBnaXZlIGRldmVsb3BlcnMgZGlyZWN0IGFjY2VzcyB0byB0aGUgQ1NTIE9iamVjdCBNb2RlbCAoQ1NTT00pLCBcbiAgICAgICAgICAgICAgICAgICAgdGhlcmVieSBlbmFibGluZyB0aGVtIHRvIHdyaXRlIGNvZGUgdGhlIGJyb3dzZXIgY2FuIHBhcnNlIGFzIENTUywgXG4gICAgICAgICAgICAgICAgICAgIGFuZCBjcmVhdGluZyBuZXcgQ1NTIGZlYXR1cmVzIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlbSB0byBiZSBpbXBsZW1lbnRlZCBuYXRpdmVseSBpbiBicm93c2Vycy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJztcbiAgICAgICAgZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcbiAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYWkrSmFtanVyZWUnKTtcbiAgICB9XG4gICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAubWFpbiB7XG4gICAgICAgIHRvcDogNGVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ODBweCA0ODBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVzO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWxrc1BhZ2U7Il19 */\n/*@ sourceURL=/Users/nainar/nainadotapp/pages/p/talks.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (TalksPage);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/p/talks.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nainar/nainadotapp/pages/p/talks.js */"./pages/p/talks.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=talks.js.map