/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(3);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi core\n ** module id = 0\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///multi_core?");

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	eval("'use strict';\n\n/**\n * NOTE: You should not need to modify\n * this file!\n *\n * You can if you want to though, of course :)\n *\n */\nconsole.log('Hello');\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/core.js\n ** module id = 3\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/js/core.js?");

/***/ }
/******/ ]);