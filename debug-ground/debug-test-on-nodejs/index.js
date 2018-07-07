/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);
__webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
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
exports.forLoopByNext = function (start, end, cb) {
    var funcs = Array(end - start + 1).fill(cb);
    var index = start;
    var run = function () {
        if (funcs.length) {
            var func = funcs.pop();
            func(index, function () {
                index++;
                run();
            });
        }
    };
    run();
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
    forLoopByNext: exports.forLoopByNext,
    forTimes: exports.forTimes,
    forLoopToArray: exports.forLoopToArray,
    hasValue: exports.hasValue,
    hasValues: exports.hasValues,
    hasSomeValues: exports.hasSomeValues,
    uniques: exports.uniques,
    debounce: exports.debounce,
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(2);
var testObject = {
    fname: 'John',
    lname: 'Smith',
    age: 40,
};
describe('loops test', function () {
    it('should convert an array to array', function () {
        var a = index_1.default.array(['a', 'b', 'c']);
        expect(Array.isArray(a)).toBe(true);
        expect(a.length).toBe(3);
        expect(a[0]).toBe('a');
        expect(a[1]).toBe('b');
        expect(a[2]).toBe('c');
    });
    it('should convert a string to array', function () {
        var a = index_1.default.array('anel');
        expect(Array.isArray(a)).toBe(true);
        expect(a.length).toBe(4);
        expect(a[0]).toBe('a');
        expect(a[1]).toBe('n');
        expect(a[2]).toBe('e');
        expect(a[3]).toBe('l');
    });
    it('should convert a number to array', function () {
        var a = index_1.default.array(4);
        expect(Array.isArray(a)).toBe(true);
        expect(a.length).toBe(4);
        expect(a[0]).toBe(undefined);
        expect(a[1]).toBe(undefined);
        expect(a[2]).toBe(undefined);
        expect(a[3]).toBe(undefined);
    });
    it('should get the correct keys', function () {
        expect(index_1.default.keys(testObject).length).toBe(3);
        expect(index_1.default.hasValues(index_1.default.keys(testObject), ['age', 'lname', 'fname'])).toBe(true);
    });
    it('should get the correct values', function () {
        expect(index_1.default.hasValues(index_1.default.values(testObject), ['Smith', 'John', 40])).toBe(true);
    });
    it('should have values', function () {
        expect(index_1.default.hasValues(index_1.default.values(testObject), ['Smith', 'John', 40])).toBe(true);
    });
    it('should have correct keyValues', function () {
        var output = index_1.default.keyValues(testObject);
        expect(output[0].key).toBe('fname');
        expect(output[1].key).toBe('lname');
        expect(output[2].key).toBe('age');
        expect(output[0].value).toBe('John');
        expect(output[1].value).toBe('Smith');
        expect(output[2].value).toBe(40);
    });
    it('should get the correct key using the keyForValue', function () {
        expect(index_1.default.keyForValue(testObject, 'John')).toBe('fname');
        expect(index_1.default.keyForValue(testObject, 'Smith')).toBe('lname');
        expect(index_1.default.keyForValue(testObject, 40)).toBe('age');
        expect(index_1.default.keyForValue(testObject, 'xxxx')).toBe(undefined);
    });
    it('should hasValues return false is not of all values exists', function () {
        expect(index_1.default.hasValues(index_1.default.values(testObject), ['Smith', 'John', 32])).toBe(false);
    });
    it('should have some values', function () {
        expect(index_1.default.hasSomeValues(index_1.default.values(testObject), ['Smith', 'John'])).toBe(true);
    });
    it('should return false hasSomeValues is none value exists', function () {
        expect(index_1.default.hasSomeValues(index_1.default.values(testObject), ['SmithXXX', 'JohnXXX'])).toBe(false);
    });
    it('should forLoop iterate correct', function () {
        var output = '';
        index_1.default.forLoop(3, 6, (function (iterator) { return output += iterator; }));
        expect(output).toBe('3456');
    });
    it('should forLoop iterate correct using also stop', function () {
        var output = '';
        index_1.default.forLoop(3, 10, (function (iterator, stop) {
            if (iterator === 6)
                stop();
            else
                output += iterator;
        }));
        expect(output).toBe('345');
    });
    it('should forTimes iterate correct', function () {
        var output = '';
        index_1.default.forTimes(6, (function (iterator) { return output += iterator; }));
        expect(output).toBe('012345');
    });
    it('should forTimes iterate correct using also stop', function () {
        var output = '';
        index_1.default.forTimes(10, (function (iterator, stop) {
            if (iterator < 6)
                output += iterator;
            else
                stop();
        }));
        expect(output).toBe('012345');
    });
    it('should generate a nice array using the forLoopToArray', function () {
        var output = index_1.default
            .forLoopToArray(0, 10, function (iterator, stop) {
            if (iterator == 5)
                stop();
            return { i: iterator };
        });
        expect(output.length).toBe(6);
        index_1.default.forTimes(6, function (i) { return expect(output[i].i).toBe(i); });
    });
    it('should shuffle an array using the shuffleArray', function () {
        var source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var shuffled = index_1.default.shuffleArray(source);
        expect(shuffled.length).toBe(source.length);
        expect(shuffled.join()).not.toBe(source.join());
        expect(shuffled.reduce(function (acc, v) {
            acc += v;
            return acc;
        }, 0))
            .toBe(source.reduce(function (acc, v) {
            acc += v;
            return acc;
        }, 0));
    });
    it('should create generate permutations for an array', function () {
        var sample = ['Anne', 'Lorry', 'Nadja', 'Laetitia'];
        var calc = index_1.default.arrayPermutations(sample);
        var expected = '[["Anne","Lorry","Nadja","Laetitia"],["Anne","Lorry","Laetitia","Nadja"],["Anne","Nadja","Lorry","Laetitia"],["Anne","Nadja","Laetitia","Lorry"],["Anne","Laetitia","Lorry","Nadja"],["Anne","Laetitia","Nadja","Lorry"],["Lorry","Anne","Nadja","Laetitia"],["Lorry","Anne","Laetitia","Nadja"],["Lorry","Nadja","Anne","Laetitia"],["Lorry","Nadja","Laetitia","Anne"],["Lorry","Laetitia","Anne","Nadja"],["Lorry","Laetitia","Nadja","Anne"],["Nadja","Anne","Lorry","Laetitia"],["Nadja","Anne","Laetitia","Lorry"],["Nadja","Lorry","Anne","Laetitia"],["Nadja","Lorry","Laetitia","Anne"],["Nadja","Laetitia","Anne","Lorry"],["Nadja","Laetitia","Lorry","Anne"],["Laetitia","Anne","Lorry","Nadja"],["Laetitia","Anne","Nadja","Lorry"],["Laetitia","Lorry","Anne","Nadja"],["Laetitia","Lorry","Nadja","Anne"],["Laetitia","Nadja","Anne","Lorry"],["Laetitia","Nadja","Lorry","Anne"]]';
        expect(JSON.stringify(calc).trim()).toBe(expected.trim());
    });
    it('should create generate combinations for an array', function () {
        var sample = ['Anne', 'Lorry', 'Nadja', 'Laetitia'];
        var calc = index_1.default.arrayCombinations(sample);
        var expected = '[["Anne"],["Lorry"],["Anne","Lorry"],["Nadja"],["Anne","Nadja"],["Lorry","Nadja"],["Anne","Lorry","Nadja"],["Laetitia"],["Anne","Laetitia"],["Lorry","Laetitia"],["Anne","Lorry","Laetitia"],["Nadja","Laetitia"],["Anne","Nadja","Laetitia"],["Lorry","Nadja","Laetitia"],["Anne","Lorry","Nadja","Laetitia"]]';
        expect(JSON.stringify(calc).trim()).toBe(expected.trim());
    });
    it('should create generate permuted combinations for an array', function () {
        var sample = ['Anne', 'Lorry', 'Laetitia'];
        var calc = index_1.default.arrayPermutedCombinations(sample);
        var expected = '[[["Anne"]],[["Lorry"]],[["Anne","Lorry"],["Lorry","Anne"]],[["Laetitia"]],[["Anne","Laetitia"],["Laetitia","Anne"]],[["Lorry","Laetitia"],["Laetitia","Lorry"]],[["Anne","Lorry","Laetitia"],["Anne","Laetitia","Lorry"],["Lorry","Anne","Laetitia"],["Lorry","Laetitia","Anne"],["Laetitia","Anne","Lorry"],["Laetitia","Lorry","Anne"]]]';
        expect(JSON.stringify(calc).trim()).toBe(expected.trim());
    });
    it('should unique array items', function () {
        var input = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 0, 0, "1", "1", "2", "3", "3", "4", "5", "5"];
        var output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "1", "2", "3", "4", "5"];
        expect(JSON.stringify(index_1.default.uniques(input)))
            .toBe(JSON.stringify(output));
    });
    it('should debounce hits in very short time', function (done) {
        var check = 0;
        var myFunc = function () { return check++; };
        var dbFunc = index_1.debounce(myFunc, 100);
        for (var i = 0; i < 100; i++) {
            dbFunc();
        }
        setTimeout(function () {
            expect(check).toBe(2);
            done();
        }, 200);
    });
    it('should debounce with values', function (done) {
        var check = 0;
        var myFunc = function (value) { return check += value; };
        var dbFunc = index_1.debounce(myFunc, 100);
        for (var i = 0; i < 100; i++) {
            dbFunc(2);
        }
        setTimeout(function () {
            expect(check).toBe(4);
            done();
        }, 200);
    });
    it('should call the cbs with forLoopByNext in correct order', function (done) {
        var collect = "";
        index_1.forLoopByNext(5, 7, function (index, next) {
            collect += index;
            setTimeout(next, 500);
            if (collect.length === 3) {
                expect(collect).toBe("567");
                done();
            }
        });
    });
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dev node: Come on!!! this is super ugly...
// If you find a stable way to debug the jest tests please fork me!
// As documented here: https://facebook.github.io/jest/docs/troubleshooting.html is not working as far of May/17
if (typeof global === 'undefined' && typeof window !== 'undefined') global = window;

var HIDE_SUCCESS_VALIDATION = true;

// init section

global._mockJest = null;

global.clearTest = function () {
	global._mockJest = {
		errors: 0,
		passed: 0,
		descriptions: []
	};
};
global.clearTest();

global.describe = function (description, cbDefineIts) {
	global._mockJest.descriptions.push({
		description: description,
		its: []
	});

	cbDefineIts();
	startTests();
};

global.describe.skip = function () {
	return undefined;
};

global.it = function (description, cbTest) {
	global._mockJest.descriptions[global._mockJest.descriptions.length - 1].its.push({
		description: description,
		cbTest: cbTest
	});
	startTests();
};

global.it.skip = function () {
	return undefined;
};

global.expect = function (expectValue) {
	return comparisons(expectValue);
};

// start and functions section

var comparisons = function comparisons(expectValue) {
	var not = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	return {
		get not() {
			return comparisons(expectValue, true);
		},
		toBe: function toBe(toBeValue) {
			var result = expectValue === toBeValue;
			if (not) result = !result;
			if (result) {
				if (!HIDE_SUCCESS_VALIDATION) console.log('        Success, equal value [' + expectValue + ' === ' + toBeValue + ']');
				global._mockJest.passed++;
			} else {
				console.log('        FAILED, expected [' + toBeValue + '] but received [' + expectValue + ']');
				global._mockJest.errors++;
			}
		}
	};
};

var startTimer = null;

function startTests() {
	if (startTimer) clearTimeout(startTimer);
	startTimer = setTimeout(executeTests, 100);
}

function executeTests() {
	var descriptions = [].concat(global._mockJest.descriptions);

	var processTheNextDescription = function processTheNextDescription() {
		var description = descriptions.shift();
		if (description) {
			executeADescription(description, function () {
				processTheNextDescription();
			});
		} else {
			finished();
		}
	};

	// start
	processTheNextDescription();
}

function executeADescription(description, cbCompleted) {
	console.log('Description::: Start:', description.description);
	var its = [].concat(description.its);

	executeIts(its, function () {
		console.log('Description::: Finished:', description.description);
		console.log('');
		cbCompleted();
	});
}

function executeIts(its, cbCompleted) {
	var it = its.shift();
	if (!it) {
		cbCompleted();
		return;
	}

	console.log('    it:::', it.description);
	if (it.cbTest.length === 0) {
		it.cbTest();
		executeIts(its, cbCompleted);
	} else {
		it.cbTest(function () {
			executeIts(its, cbCompleted);
		});
	}
}

function exit(code) {
	if (typeof process !== 'undefined' && typeof process.exit !== 'undefined') {
		process.exit(code);
	}
}

function finished() {
	var report = 'All TEST finished, results:' + ' ' + 'errors:' + ' ' + global._mockJest.errors + ' ' + 'passed:' + ' ' + global._mockJest.passed;
	console.log('');
	if (global._mockJest.errors) {
		console.log(' xx   xx ');
		console.log('  xx xx  ');
		console.log('   xxx   ');
		console.log('  xx xx  ');
		console.log(' xx   xx ' + report);
		exit(100);
	} else {
		console.log('      vv');
		console.log('     vv');
		console.log('vv  vv');
		console.log(' vvvv');
		console.log('  vv      ' + report);
		exit(0);
	}
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);