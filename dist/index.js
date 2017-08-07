(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-loops", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-loops"] = factory();
	else
		root["dyna-loops"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.array = (someLikeArray) => {
    if (typeof someLikeArray === 'string')
        someLikeArray = someLikeArray.split('');
    if (typeof someLikeArray === 'number') {
        let newArray = [];
        exports.forTimes(someLikeArray, () => newArray.push(undefined));
        someLikeArray = newArray;
    }
    return Array.apply(this, someLikeArray);
};
exports.keys = (obj) => Object.keys(obj);
exports.values = (obj) => Object.keys(obj).map((key) => obj[key]);
exports.keyValues = (obj) => Object.keys(obj).map((key) => ({ key, value: obj[key] }));
exports.forKeys = (obj, cb) => exports.keys(obj).forEach(cb);
exports.forValues = (obj, cb) => exports.values(obj).forEach(cb);
exports.keyForValue = (obj, value) => {
    let found = exports.keyValues(obj).find((kvp) => kvp.value === value);
    return found && found.key;
};
exports.forLoop = (start, end, cb) => {
    let stop = false;
    for (let iterator = start; !stop && iterator <= end; iterator++)
        cb(iterator, () => stop = true);
};
exports.forTimes = (times, cb) => {
    exports.forLoop(0, times - 1, cb);
};
exports.hasValue = (array, value) => array.indexOf(value) > -1;
exports.hasValues = (array, values) => {
    let foundValues = 0;
    values.forEach((value) => {
        if (exports.hasValue(array, value))
            foundValues++;
    });
    return foundValues === values.length;
};
exports.hasSomeValues = (array, values) => {
    let foundValues = 0;
    values.forEach((value) => {
        if (exports.hasValue(array, value))
            foundValues++;
    });
    return foundValues > 0;
};
exports.default = {
    array: exports.array,
    keys: exports.keys,
    values: exports.values,
    keyValues: exports.keyValues,
    keyForValue: exports.keyForValue,
    forKeys: exports.forKeys,
    forValues: exports.forValues,
    forLoop: exports.forLoop,
    forTimes: exports.forTimes,
    hasValue: exports.hasValue,
    hasValues: exports.hasValues,
    hasSomeValues: exports.hasSomeValues,
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});