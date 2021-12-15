/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/sort.js */ \"./src/scripts/sort.js\");\n/* harmony import */ var _scripts_algorithms_bubble_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/algorithms/bubble.js */ \"./src/scripts/algorithms/bubble.js\");\n/* harmony import */ var _scripts_algorithms_merge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/algorithms/merge.js */ \"./src/scripts/algorithms/merge.js\");\n/* harmony import */ var _scripts_algorithms_quick_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/algorithms/quick.js */ \"./src/scripts/algorithms/quick.js\");\n\n\n\n\n\nconst sortFunc = new _scripts_sort_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // modal variables\n\n  const about = document.querySelector(\".about\");\n  const aboutButton = document.querySelector(\"#about-modal\");\n  const instructions = document.querySelector(\".instructions\");\n  const instructionsButton = document.querySelector(\"#instructions-modal\");\n\n  const modalBackground = document.querySelector(\".modal-background\");\n  const close = document.querySelector(\".close\");\n\n  // modal functionality\n\n  aboutButton.addEventListener(\"click\", function () {\n    about.style.display = \"flex\";\n    modalBackground.style.display = \"flex\";\n  });\n\n  instructionsButton.addEventListener(\"click\", function () {\n    instructions.style.display = \"flex\";\n    modalBackground.style.display = \"flex\";\n  });\n\n  document.addEventListener(\"click\", function (event) {\n    if (event.target.className === \"close\") {\n      if (about.style.display === \"flex\") about.style.display = \"none\";\n      if (instructions.style.display === \"flex\") instructions.style.display = \"none\";\n      if (modalBackground.style.display === \"flex\") modalBackground.style.display = \"none\";\n    }\n  });\n\n  // adding eventListener on button to generate new array of data //\n\n  const generate = document.querySelector(\"#generate\");\n\n  generate.addEventListener(\"click\", function () {\n    sortFunc.render(sortFunc.generateArray(parseInt(arraySize.value)));\n    sortFunc.enableButtons();                                              // enabling buttons here in case user doesn't want to see specific algorithm to the end\n  });\n\n  // adding eventListener on slider to adjust array size of data //\n\n  const arraySize = document.querySelector(\"#size\");\n\n  arraySize.addEventListener(\"input\", function () {\n    sortFunc.render(sortFunc.generateArray(parseInt(arraySize.value)));\n    sortFunc.enableButtons();\n  });\n\n  const bubbleSortButton = document.querySelector(\"#bubble\");\n\n  bubbleSortButton.addEventListener(\"click\", async function () {\n    sortFunc.updateDesc(\"bubble\");                                         // updating text description for bubble sort\n    const bars = document.querySelectorAll(\".bar\");                        // using querySelectorAll to grab all of the bars in a NodeList\n    if (bars.length === 0) return null;\n    sortFunc.disableButtons();\n    await (0,_scripts_algorithms_bubble_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sortFunc, bars);\n    sortFunc.sorted(bars);                                                 // changing final color of array to green\n    sortFunc.enableButtons();\n  });\n\n  const mergeSortbutton = document.querySelector(\"#merge\");\n\n  mergeSortbutton.addEventListener(\"click\", async function () {\n    sortFunc.updateDesc(\"merge\");\n    const bars = document.querySelectorAll('.bar');\n    if (bars.length === 0) return null;\n    sortFunc.disableButtons();\n    await (0,_scripts_algorithms_merge_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sortFunc, bars, 0, bars.length - 1);\n    sortFunc.sorted(bars);\n    sortFunc.enableButtons();\n  });\n\n  const quickSortbutton = document.querySelector(\"#quick\");\n\n  quickSortbutton.addEventListener(\"click\", async function () {\n    sortFunc.updateDesc(\"quick\");\n    const bars = document.querySelectorAll(\".bar\");\n    if (bars.length === 0) return null;\n    sortFunc.disableButtons();\n    await (0,_scripts_algorithms_quick_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sortFunc, bars, 0, bars.length - 1);\n    sortFunc.sorted(bars);\n    sortFunc.enableButtons();\n  });\n});\n\n\n//# sourceURL=webpack://SortingAlgorithmVisualizer/./src/index.js?");

/***/ }),

/***/ "./src/scripts/algorithms/bubble.js":
/*!******************************************!*\
  !*** ./src/scripts/algorithms/bubble.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ bubble; }\n/* harmony export */ });\nasync function bubble (sortFunc, bars) {\n  for (let i = 0; i < bars.length - 1; i++) {              // iterating through the length of the NodeList\n    for (let j = 0; j < (bars.length - i - 1); j++) {      // iterating through the length of the NodeList MINUS the sorted bars\n      bars[j].style.background = \"#FF6D6A\";                   // setting the two bars being compared to a different color\n      bars[j + 1].style.background = \"#FF6D6A\";\n\n      let bar1 = parseInt(bars[j].style.height);\n      let bar2 = parseInt(bars[j + 1].style.height);\n\n      if(bar1 > bar2) {\n        await sortFunc.delay(250);                                 // hard coding a value of 250ms for the delay between comparisons\n        swap(bars[j], bars[j + 1]);\n      };\n\n      bars[j].style.background = \"#8BD3E6\";                   // regardless of swap, setting compared bars back to original color\n      bars[j + 1].style.background = \"#8BD3E6\";\n    };\n\n    bars[bars.length - i - 1].style.background = \"#E9EC6B\";  // coloring bars bubbled up to the end to denote that it is sorted\n  };\n\n  bars[0].style.background = \"#E9EC6B\";                     // ensuring remaining bar after sorting is colored\n};\n\nfunction swap (bar1, bar2) {                                   // basic swap function to switch bar heights\n  let tempHeight = bar1.style.height;\n  bar1.style.height = bar2.style.height;\n  bar2.style.height = tempHeight;\n};\n\n\n//# sourceURL=webpack://SortingAlgorithmVisualizer/./src/scripts/algorithms/bubble.js?");

/***/ }),

/***/ "./src/scripts/algorithms/merge.js":
/*!*****************************************!*\
  !*** ./src/scripts/algorithms/merge.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ merge; }\n/* harmony export */ });\nasync function mergeHelper (sortFunc, bars, min, max, middle) {\n  const leftHalf = middle - min + 1;                      // defining the left half of the array\n  const rightHalf = max - middle;                         // defining the right half of the array\n\n  let left = new Array(leftHalf);                         // creating new array to contain the split up left half\n  let right = new Array(rightHalf);                       // creating new array to contain the split up right half\n\n  for (let i = 0; i < leftHalf; i++) {                    // iterating through left half and giving it a color\n    await sortFunc.delay(200);                                     // hard coding a value of 200ms for the delay between comparisons\n\n    bars[min + i].style.background = \"#B1A2CA\";\n    left[i] = bars[min + i].style.height;                 // storing each height of the bars into left half\n  };\n\n  for (let i = 0; i < rightHalf; i++) {                   // iterating through right half and giving it a DIFFERENT color\n    await sortFunc.delay(200);\n\n    bars[middle + 1 + i].style.background = '#E9EC6B';\n    right[i] = bars[middle + 1 + i].style.height;         // storing each height of the bars into right half\n  };\n\n  await sortFunc.delay(200);\n\n  let i = 0, j = 0, k = min;\n\n  while (i < leftHalf && j < rightHalf) {                // iterating through both arrays (as long as neither are empty) to \"merge\" the bars together\n    await sortFunc.delay(200);\n\n    if (parseInt(left[i]) <= parseInt(right[j])) {       // comparing heights between each bar in the respective arrays\n      bars[k].style.height = left[i];                    // left side merge\n      bars[k].style.background = '#77DD77';\n      i++;\n      k++;\n    } else {\n      bars[k].style.height = right[j];                   // right side merge\n      bars[k].style.background = '#77DD77';\n      j++;\n      k++;\n    };\n  };\n\n  while (i < leftHalf) {                                // in case either array runs out, iterate through a singluar half to \"merge\" the bars to the main array\n    await sortFunc.delay(200);\n    bars[k].style.background = '#77DD77';\n    bars[k].style.height = left[i];                     // left side merge\n    i++;\n    k++;\n  };\n\n  while (j < rightHalf) {                                // in case either array runs out, iterate through a singluar half to \"merge\" the bars to the main array\n    await sortFunc.delay(200);\n    bars[k].style.background = '#77DD77';\n    bars[k].style.height = right[j];                     // right side merge\n    j++;\n    k++;\n  };\n};\n\nasync function merge (sortFunc, bars, left, right) {               // merge sort function to recursively call on main array\n\n  if (left < right) {                                    // only calling if previous elements are sorted properly\n\n    const mid = left + Math.floor((right - left) / 2);\n\n    await merge(sortFunc, bars, left, mid);                        // recursive call on left half\n    await merge(sortFunc, bars, mid + 1, right);                   // recursive call on right half\n    await mergeHelper(sortFunc, bars, left, right, mid);           // helper method taking care of the actual sorting\n  };\n};\n\n//# sourceURL=webpack://SortingAlgorithmVisualizer/./src/scripts/algorithms/merge.js?");

/***/ }),

/***/ "./src/scripts/algorithms/quick.js":
/*!*****************************************!*\
  !*** ./src/scripts/algorithms/quick.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ quick; }\n/* harmony export */ });\nasync function partition (sortFunc, bars, left, right) {            // this particular implementation of partition is the Lomuto partition, using the last element as the pivot\n  bars[right].style.background = \"#E9EC6B\";               // pivot bar\n\n  let i = left - 1;                                       // index of smallest bar\n\n  for (let j = left; j <= right - 1; j++) {\n    bars[j].style.background = \"#EFBE7D\";                 // currently selected bar to compare to pivot\n\n    await sortFunc.delay(250);                                     // hard coding a value of 250ms for the delay between comparisons\n\n    if (parseInt(bars[j].style.height) <= parseInt(bars[right].style.height)) {   // checking for elements less or equal to the pivot\n      i++;                                                // increment to the next bar\n      swap(bars[i], bars[j]);\n\n      bars[i].style.background = \"#FF6D6A\";               // color of the bars LESS than the pivot bar after swap\n\n      if (i !== j) bars[j].style.background = \"#B1A2CA\";  // color of the bars MORE than the pivot bar after swap\n      await sortFunc.delay(250);\n    } else {\n      bars[j].style.background = \"#B1A2CA\";               // color of the bars MORE than the pivot with no swap\n    }\n  }\n\n  i++;\n  await sortFunc.delay(250);\n\n  swap(bars[i], bars[right]);\n\n  bars[right].style.background = \"#B1A2CA\";               // ensuring bars MORE than the pivot are the same color\n  bars[i].style.background = \"lightgreen\";                // coloring sorted pivot\n\n  await sortFunc.delay(250);\n\n  for (let k = 0; k < bars.length; k++) {\n    if (bars[k].style.background !== \"lightgreen\")        //checking for sorted pivot color and then resetting the colors of all the other bars\n      bars[k].style.background = \"#8BD3E6\";\n  }\n\n  return i;                                             // returning pivot index\n}\n\nasync function quick (sortFunc, bars, left, right) {              // quick sort function to recursively call on main array\n  if (left < right) {\n    let pivot = await partition(sortFunc, bars, left, right);     // retrieving pivot index from partition helper function\n    await quick(sortFunc, bars, left, pivot - 1);                 // recursive call on left half\n    await quick(sortFunc, bars, pivot + 1, right);                // recursive call on right half\n  }\n}\n\nfunction swap (bar1, bar2) {                            // basic swap function to switch bar heights\n  let tempHeight = bar1.style.height;\n  bar1.style.height = bar2.style.height;\n  bar2.style.height = tempHeight;\n};\n\n\n//# sourceURL=webpack://SortingAlgorithmVisualizer/./src/scripts/algorithms/quick.js?");

/***/ }),

/***/ "./src/scripts/descriptions.js":
/*!*************************************!*\
  !*** ./src/scripts/descriptions.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titles\": function() { return /* binding */ titles; },\n/* harmony export */   \"descriptions\": function() { return /* binding */ descriptions; }\n/* harmony export */ });\nconst titles = {\n  bubbleTitle: \"Bubble Sort\",\n  mergeTitle: \"Merge Sort\",\n  quickTitle: \"Quick Sort\",\n}\n\nconst descriptions = {\n  bubbleDesc: \"Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.\",\n  mergeDesc: \"Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms. Merge sort first divides the array into equal halves and then combines them in a sorted manner.\",\n  quickDesc: \"Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n2), respectively.\"\n}\n\n\n//# sourceURL=webpack://SortingAlgorithmVisualizer/./src/scripts/descriptions.js?");

/***/ }),

/***/ "./src/scripts/sort.js":
/*!*****************************!*\
  !*** ./src/scripts/sort.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SortFunctions; }\n/* harmony export */ });\n/* harmony import */ var _descriptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptions.js */ \"./src/scripts/descriptions.js\");\n\n\nclass SortFunctions {\n  constructor () {};\n  // generating a new array of data (currently set a min of 5 and max of 100 for data values) //\n\n  generateArray (amount) {\n    this.deleteArray();\n    const newArray = [];\n\n    for (let i = 0; i < amount; i++) {\n      newArray.push(this.getRandomInt(5, 100))\n    };\n\n    return newArray;\n  };\n\n  // rendering newly generated array //\n\n  render (array) {\n    const graph = document.querySelector(\".graph\");\n\n    for (let i = 0; i < array.length; i++) {\n      const bar = document.createElement(\"div\");\n\n      bar.classList.add(\"bar\");\n      bar.style.height = `${array[i] * Math.PI}px`;\n\n      graph.appendChild(bar);\n    };\n  };\n\n  // delete previously generated / rendered array //\n\n  deleteArray () {\n    const graph = document.querySelector(\".graph\");\n\n    while (graph.firstChild) {\n      graph.removeChild(graph.firstChild);\n    };\n  };\n\n  // using promise function to add delay between sorting animations //\n  delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  };\n\n  // random number generator between a range (to provide random values for generated data) - from MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random //\n\n  getRandomInt (min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min);\n  };\n\n  // changing color for sorted array //\n\n  sorted (bars) {\n    bars.forEach(el => el.style.background = \"green\");\n  }\n\n  // updating text descriptions on algorithm event click //\n\n  updateDesc (desc) {\n    const title = document.querySelector(\".description-title\");\n    title.innerHTML = _descriptions_js__WEBPACK_IMPORTED_MODULE_0__.titles[`${desc}Title`];\n\n    const description = document.querySelector(\".description\")\n    description.innerHTML = _descriptions_js__WEBPACK_IMPORTED_MODULE_0__.descriptions[`${desc}Desc`];\n  };\n\n  // button disable function (meant for during sort) //\n\n  disableButtons () {\n    document.querySelector(\"#bubble\").disabled = true;\n    document.querySelector(\"#merge\").disabled = true;\n    document.querySelector(\"#quick\").disabled = true;\n  };\n\n  // button enable function (meant for after sorting is complete) //\n\n  enableButtons () {\n    document.querySelector(\"#bubble\").disabled = false;\n    document.querySelector(\"#merge\").disabled = false;\n    document.querySelector(\"#quick\").disabled = false;\n  };\n};\n\n//# sourceURL=webpack://SortingAlgorithmVisualizer/./src/scripts/sort.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;