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

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = function (someLikeArray) {
    if (typeof someLikeArray === 'string')
        someLikeArray = someLikeArray.split('');
    if (typeof someLikeArray === 'number') {
        var newArray_1 = [];
        exports.forTimes(someLikeArray, function () { return newArray_1.push(undefined); });
        someLikeArray = newArray_1;
    }
    return Array.apply(_this, someLikeArray);
};
exports.shuffleArray = function (array) {
    var output = [];
    var source = [].concat(array);
    while (source.length)
        output.push(source.splice(exports.random(0, source.length - 1), 1)[0]);
    return output;
};
exports.random = function (from, to_) {
    if (to_ === undefined) {
        to_ = from;
        from = 0;
    }
    if (to_ < from) {
        var h = from;
        from = to_;
        to_ = h;
    }
    return Math.floor((Math.random() * ((to_ - from) + 1)) + from);
};
exports.isNumber = function (n) { return !isNaN(parseFloat(n)) && isFinite(n); };
exports.inRange = function (number, from, to) { return number >= from && number <= to; };
exports.keys = function (obj) { return Object.keys(obj); };
exports.values = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
exports.keyValues = function (obj) { return Object.keys(obj).map(function (key) { return ({ key: key, value: obj[key] }); }); };
exports.forKeys = function (obj, cb) { return exports.keys(obj).forEach(cb); };
exports.forValues = function (obj, cb) { return exports.values(obj).forEach(cb); };
exports.keyForValue = function (obj, value) {
    var found = exports.keyValues(obj).find(function (kvp) { return kvp.value === value; });
    return found && found.key;
};
exports.forLoop = function (start, end, cb) {
    var stop = false;
    for (var iterator = start; !stop && iterator <= end; iterator++)
        cb(iterator, function () { return stop = true; });
};
exports.forTimes = function (times, cb) {
    exports.forLoop(0, times - 1, cb);
};
exports.forLoopToArray = function (start, end, cb) {
    var output = [];
    exports.forLoop(start, end, function (iterator, stop) {
        output.push(cb(iterator, stop));
    });
    return output;
};
exports.hasValue = function (array, value) { return array.indexOf(value) > -1; };
exports.hasValues = function (array, values) {
    var foundValues = 0;
    values.forEach(function (value) {
        if (exports.hasValue(array, value))
            foundValues++;
    });
    return foundValues === values.length;
};
exports.hasSomeValues = function (array, values) {
    var foundValues = 0;
    values.forEach(function (value) {
        if (exports.hasValue(array, value))
            foundValues++;
    });
    return foundValues > 0;
};
exports.arrayPermutations = function (array) {
    // credits: http://rextester.com/OUC90847
    var combinations = [];
    var combination = [];
    var indices = [];
    var generate = function (level) {
        for (var i = 0; i < array.length; i++) {
            if (!indices[i]) {
                indices[i] = true;
                combination[level] = array[i];
                if (level < array.length - 1)
                    generate(level + 1);
                else
                    combinations.push([].concat(combination));
                indices[i] = false;
            }
        }
    };
    generate(0);
    return combinations;
};
exports.arrayCombinations = function (array) {
    // credits: http://js-algorithms.tutorialhorizon.com/2015/10/23/combinations-of-an-array/
    var combinations = [];
    var compsPower = Math.pow(2, array.length);
    for (var i = 0; i < compsPower; i++) {
        var combination = [];
        for (var j = 0; j < array.length; j++) {
            if ((i & Math.pow(2, j))) {
                combination.push(array[j]);
            }
        }
        if (combination.length) {
            combinations.push(combination);
        }
    }
    return combinations;
};
exports.arrayPermutedCombinations = function (array) {
    return [].concat(exports.arrayCombinations(array).map(function (a) { return exports.arrayPermutations(a); }));
};
exports.uniques = function (array) {
    return array.reduce(function (acc, item) {
        if (acc.indexOf(item) === -1)
            acc.push((item));
        return acc;
    }, []);
};
exports.round = function (value, digits) {
    return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits);
};
exports.floor = function (value, digits) {
    return Math.floor(value * Math.pow(10, digits)) / Math.pow(10, digits);
};
exports.roundToString = function (value, digits) {
    var minValue = 1 / (Math.pow(10, digits));
    if (value === 0 || value >= minValue) {
        return exports.round(value, digits).toLocaleString();
    }
    else {
        return '<' + (minValue.toLocaleString());
    }
};
// Debounce factory function like _.debounce
// Creates a function that calls the given function in debounce mode.
// On 1st hit is calls the function immediately. On repeated in timeout hits waits till the end of timeout and then it calls is again.
exports.debounce = function (func, timeout) {
    if (timeout === void 0) { timeout = 100; }
    var active = false;
    var toCall = null;
    var timerHandler;
    var callIt = function () {
        active = false;
        if (!active && toCall) {
            toCall();
            toCall = null;
        }
    };
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (active) {
            toCall = function () { return func.apply(void 0, args); };
            clearTimeout(timerHandler);
            timerHandler = setTimeout(callIt, timeout);
        }
        else {
            func.apply(void 0, args);
            active = true;
            timerHandler = setTimeout(callIt, timeout);
        }
    };
};
exports.default = {
    array: exports.array,
    arrayPermutations: exports.arrayPermutations,
    arrayCombinations: exports.arrayCombinations,
    arrayPermutedCombinations: exports.arrayPermutedCombinations,
    shuffleArray: exports.shuffleArray,
    random: exports.random,
    isNumber: exports.isNumber,
    inRange: exports.inRange,
    keys: exports.keys,
    values: exports.values,
    keyValues: exports.keyValues,
    keyForValue: exports.keyForValue,
    forKeys: exports.forKeys,
    forValues: exports.forValues,
    forLoop: exports.forLoop,
    forTimes: exports.forTimes,
    forLoopToArray: exports.forLoopToArray,
    hasValue: exports.hasValue,
    hasValues: exports.hasValues,
    hasSomeValues: exports.hasSomeValues,
    uniques: exports.uniques,
    debounce: exports.debounce,
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});