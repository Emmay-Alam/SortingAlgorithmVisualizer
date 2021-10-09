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
/***/ (function() {

eval("// import Sort from \"./scripts/sort.js\"\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // generating a new array of data (currently set a min of 5 and max of 100 for data values)\n  function generateArray() {\n    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;\n    deleteArray();\n    var newArray = [];\n\n    for (var i = 0; i < amount; i++) {\n      newArray.push(getRandomInt(5, 100));\n    }\n\n    ;\n    return newArray;\n  }\n\n  ; // rendering newly generated array\n\n  function render(array) {\n    var graph = document.querySelector(\".graph\");\n\n    for (var i = 0; i < array.length; i++) {\n      var bar = document.createElement(\"div\");\n      bar.classList.add(\"bar\");\n      bar.innerHTML = \"\".concat(array[i]);\n      bar.style.height = \"\".concat(array[i], \"px\");\n      graph.appendChild(bar);\n    }\n\n    ;\n  }\n\n  ; // delete previously generated / rendered array\n\n  function deleteArray() {\n    var graph = document.querySelector(\".graph\");\n\n    while (graph.firstChild) {\n      graph.removeChild(graph.firstChild);\n    }\n\n    ;\n  }\n\n  ; // random number generator between a range (to provide random values for generated data) - from MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random\n\n  function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min);\n  } // creating a button to generate new array of data\n\n\n  var generate = document.querySelector(\"#generate\");\n  generate.addEventListener(\"click\", function () {\n    render(generateArray());\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb3J0aW5nQWxnb3JpdGhtVmlzdWFsaXplci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdlbmVyYXRlQXJyYXkiLCJhbW91bnQiLCJkZWxldGVBcnJheSIsIm5ld0FycmF5IiwiaSIsInB1c2giLCJnZXRSYW5kb21JbnQiLCJyZW5kZXIiLCJhcnJheSIsImdyYXBoIiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImJhciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImhlaWdodCIsImFwcGVuZENoaWxkIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsImdlbmVyYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhEO0FBRUYsV0FBU0MsYUFBVCxHQUFxQztBQUFBLFFBQWJDLE1BQWEsdUVBQUosRUFBSTtBQUNuQ0MsSUFBQUEsV0FBVztBQUNYLFFBQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQXBCLEVBQTRCRyxDQUFDLEVBQTdCLEVBQWlDO0FBQy9CRCxNQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBY0MsWUFBWSxDQUFDLENBQUQsRUFBSSxHQUFKLENBQTFCO0FBQ0Q7O0FBQUE7QUFFRCxXQUFPSCxRQUFQO0FBQ0Q7O0FBQUEsR0FiaUQsQ0FlbEQ7O0FBRUEsV0FBU0ksTUFBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEIsUUFBTUMsS0FBSyxHQUFHWCxRQUFRLENBQUNZLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxTQUFLLElBQUlOLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdJLEtBQUssQ0FBQ0csTUFBMUIsRUFBa0NQLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsVUFBTVEsR0FBRyxHQUFHZCxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRCxNQUFBQSxHQUFHLENBQUNFLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixLQUFsQjtBQUNBSCxNQUFBQSxHQUFHLENBQUNJLFNBQUosYUFBbUJSLEtBQUssQ0FBQ0osQ0FBRCxDQUF4QjtBQUNBUSxNQUFBQSxHQUFHLENBQUNLLEtBQUosQ0FBVUMsTUFBVixhQUFzQlYsS0FBSyxDQUFDSixDQUFELENBQTNCO0FBQ0FLLE1BQUFBLEtBQUssQ0FBQ1UsV0FBTixDQUFrQlAsR0FBbEI7QUFDRDs7QUFBQTtBQUNGOztBQUFBLEdBM0JpRCxDQTZCbEQ7O0FBRUEsV0FBU1YsV0FBVCxHQUF3QjtBQUN0QixRQUFNTyxLQUFLLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixRQUF2QixDQUFkOztBQUVBLFdBQU9ELEtBQUssQ0FBQ1csVUFBYixFQUF5QjtBQUN2QlgsTUFBQUEsS0FBSyxDQUFDWSxXQUFOLENBQWtCWixLQUFLLENBQUNXLFVBQXhCO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQSxHQXJDaUQsQ0F1Q2xEOztBQUVBLFdBQVNkLFlBQVQsQ0FBdUJnQixHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0JELElBQUFBLEdBQUcsR0FBR0UsSUFBSSxDQUFDQyxJQUFMLENBQVVILEdBQVYsQ0FBTjtBQUNBQyxJQUFBQSxHQUFHLEdBQUdDLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxHQUFYLENBQU47QUFDQSxXQUFPQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLE1BQWlCSixHQUFHLEdBQUdELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQO0FBQ0QsR0E3Q2lELENBK0NsRDs7O0FBRUEsTUFBTU0sUUFBUSxHQUFHOUIsUUFBUSxDQUFDWSxhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBQ0FrQixFQUFBQSxRQUFRLENBQUM3QixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzdDUSxJQUFBQSxNQUFNLENBQUNQLGFBQWEsRUFBZCxDQUFOO0FBQ0QsR0FGRDtBQUlELENBdEREIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFNvcnQgZnJvbSBcIi4vc2NyaXB0cy9zb3J0LmpzXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgLy8gZ2VuZXJhdGluZyBhIG5ldyBhcnJheSBvZiBkYXRhIChjdXJyZW50bHkgc2V0IGEgbWluIG9mIDUgYW5kIG1heCBvZiAxMDAgZm9yIGRhdGEgdmFsdWVzKVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQXJyYXkgKGFtb3VudCA9IDI1KSB7XG4gICAgZGVsZXRlQXJyYXkoKTtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgICAgbmV3QXJyYXkucHVzaChnZXRSYW5kb21JbnQoNSwgMTAwKSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9O1xuXG4gIC8vIHJlbmRlcmluZyBuZXdseSBnZW5lcmF0ZWQgYXJyYXlcblxuICBmdW5jdGlvbiByZW5kZXIgKGFycmF5KSB7XG4gICAgY29uc3QgZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyYXBoXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJhci5jbGFzc0xpc3QuYWRkKFwiYmFyXCIpO1xuICAgICAgYmFyLmlubmVySFRNTCA9IGAke2FycmF5W2ldfWA7XG4gICAgICBiYXIuc3R5bGUuaGVpZ2h0ID0gYCR7YXJyYXlbaV19cHhgO1xuICAgICAgZ3JhcGguYXBwZW5kQ2hpbGQoYmFyKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIGRlbGV0ZSBwcmV2aW91c2x5IGdlbmVyYXRlZCAvIHJlbmRlcmVkIGFycmF5XG5cbiAgZnVuY3Rpb24gZGVsZXRlQXJyYXkgKCkge1xuICAgIGNvbnN0IGdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmFwaFwiKTtcblxuICAgIHdoaWxlIChncmFwaC5maXJzdENoaWxkKSB7XG4gICAgICBncmFwaC5yZW1vdmVDaGlsZChncmFwaC5maXJzdENoaWxkKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIGJldHdlZW4gYSByYW5nZSAodG8gcHJvdmlkZSByYW5kb20gdmFsdWVzIGZvciBnZW5lcmF0ZWQgZGF0YSkgLSBmcm9tIE1ETiBkb2NzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3JhbmRvbVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUludCAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbiAgfVxuXG4gIC8vIGNyZWF0aW5nIGEgYnV0dG9uIHRvIGdlbmVyYXRlIG5ldyBhcnJheSBvZiBkYXRhXG5cbiAgY29uc3QgZ2VuZXJhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmVyYXRlXCIpO1xuICBnZW5lcmF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJlbmRlcihnZW5lcmF0ZUFycmF5KCkpO1xuICB9KTtcblxufSk7Il0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;