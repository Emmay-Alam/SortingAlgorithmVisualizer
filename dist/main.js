/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sort.js */ \"./src/scripts/sort.js\");\n/* harmony import */ var _scripts_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_sort_js__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTSxDQUNuRCxDQUREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU29ydGluZ0FsZ29yaXRobVZpc3VhbGl6ZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU29ydCBmcm9tIFwiLi9zY3JpcHRzL3NvcnQuanNcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG59KTsiXSwibmFtZXMiOlsiU29ydCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/sort.js":
/*!*****************************!*\
  !*** ./src/scripts/sort.js ***!
  \*****************************/
/***/ (function() {

eval("// generating a new array of data (currently set a min of 5 and max of 100 for data values)\nfunction generateArray() {\n  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;\n  var newArray = [];\n\n  for (var i = 0; i < amount; i++) {\n    newArray.push(getRandomInt(5, 100));\n  }\n\n  ;\n  return newArray;\n}\n\n; // rendering newly generated array\n\nfunction render(array) {\n  var graph = document.querySelector(\".graph\");\n\n  for (var i = 0; i < array.length; i++) {\n    var bar = document.createElement(\"div\");\n    bar.classList.add(\"bar\");\n    bar.innerHTML = \"\".concat(array[i]);\n    graph.appendChild(bar);\n  }\n\n  ;\n}\n\n; // random number generator between a range (to provide random values for generated data)\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min) + min);\n} // creating a button to generate new array of data\n\n\nvar generate = document.querySelector(\"#generate\");\ngenerate.addEventListener(\"click\", function () {\n  render(generateArray());\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb3J0aW5nQWxnb3JpdGhtVmlzdWFsaXplci8uL3NyYy9zY3JpcHRzL3NvcnQuanM/YWRiOCJdLCJuYW1lcyI6WyJnZW5lcmF0ZUFycmF5IiwiYW1vdW50IiwibmV3QXJyYXkiLCJpIiwicHVzaCIsImdldFJhbmRvbUludCIsInJlbmRlciIsImFycmF5IiwiZ3JhcGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGgiLCJiYXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXJhdGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLGFBQVQsR0FBcUM7QUFBQSxNQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFDbkMsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsTUFBcEIsRUFBNEJFLENBQUMsRUFBN0IsRUFBaUM7QUFDL0JELElBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxZQUFZLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBMUI7QUFDRDs7QUFBQTtBQUVELFNBQU9ILFFBQVA7QUFDRDs7QUFBQSxDLENBRUQ7O0FBRUEsU0FBU0ksTUFBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEIsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxPQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdJLEtBQUssQ0FBQ0ksTUFBMUIsRUFBa0NSLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBTVMsR0FBRyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRCxJQUFBQSxHQUFHLENBQUNFLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixLQUFsQjtBQUNBSCxJQUFBQSxHQUFHLENBQUNJLFNBQUosYUFBbUJULEtBQUssQ0FBQ0osQ0FBRCxDQUF4QjtBQUNBSyxJQUFBQSxLQUFLLENBQUNTLFdBQU4sQ0FBa0JMLEdBQWxCO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQSxDLENBRUQ7O0FBRUEsU0FBU1AsWUFBVCxDQUF1QmEsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CRCxFQUFBQSxHQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLENBQU47QUFDQUMsRUFBQUEsR0FBRyxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsR0FBWCxDQUFOO0FBQ0EsU0FBT0MsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0csTUFBTCxNQUFpQkosR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBekMsQ0FBUDtBQUNELEMsQ0FFRDs7O0FBRUEsSUFBTU0sUUFBUSxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7QUFDQWMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzdDbkIsRUFBQUEsTUFBTSxDQUFDTixhQUFhLEVBQWQsQ0FBTjtBQUNELENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0aW5nIGEgbmV3IGFycmF5IG9mIGRhdGEgKGN1cnJlbnRseSBzZXQgYSBtaW4gb2YgNSBhbmQgbWF4IG9mIDEwMCBmb3IgZGF0YSB2YWx1ZXMpXG5cbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXkgKGFtb3VudCA9IDI1KSB7XG4gIGNvbnN0IG5ld0FycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgIG5ld0FycmF5LnB1c2goZ2V0UmFuZG9tSW50KDUsIDEwMCkpXG4gIH07XG5cbiAgcmV0dXJuIG5ld0FycmF5O1xufTtcblxuLy8gcmVuZGVyaW5nIG5ld2x5IGdlbmVyYXRlZCBhcnJheVxuXG5mdW5jdGlvbiByZW5kZXIgKGFycmF5KSB7XG4gIGNvbnN0IGdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmFwaFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYXIuY2xhc3NMaXN0LmFkZChcImJhclwiKTtcbiAgICBiYXIuaW5uZXJIVE1MID0gYCR7YXJyYXlbaV19YDtcbiAgICBncmFwaC5hcHBlbmRDaGlsZChiYXIpO1xuICB9O1xufTtcblxuLy8gcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgYmV0d2VlbiBhIHJhbmdlICh0byBwcm92aWRlIHJhbmRvbSB2YWx1ZXMgZm9yIGdlbmVyYXRlZCBkYXRhKVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQgKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8vIGNyZWF0aW5nIGEgYnV0dG9uIHRvIGdlbmVyYXRlIG5ldyBhcnJheSBvZiBkYXRhXG5cbmNvbnN0IGdlbmVyYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW5lcmF0ZVwiKTtcbmdlbmVyYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlcihnZW5lcmF0ZUFycmF5KCkpO1xufSk7XG4iXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvc29ydC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/sort.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb3J0aW5nQWxnb3JpdGhtVmlzdWFsaXplci8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;