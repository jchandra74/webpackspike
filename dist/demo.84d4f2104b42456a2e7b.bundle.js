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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demo/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/demo/app.component.html":
/*!*************************************!*\
  !*** ./src/demo/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <header text=\"Hello from App\"></header>\r\n</div>"

/***/ }),

/***/ "./src/demo/app.component.ts":
/*!***********************************!*\
  !*** ./src/demo/app.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var template = __webpack_require__(/*! ./app.component.html */ "./src/demo/app.component.html");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getTemplate = function () {
        return template;
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/demo/app.js":
/*!*************************!*\
  !*** ./src/demo/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infrastructure_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infrastructure/renderer */ "./src/infrastructure/renderer.ts");
/* harmony import */ var _infrastructure_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_infrastructure_renderer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/demo/app.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _infrastructure_components_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/components/header.component */ "./src/infrastructure/components/header.component.ts");
/* harmony import */ var _infrastructure_components_header_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_infrastructure_components_header_component__WEBPACK_IMPORTED_MODULE_2__);




const renderer = new _infrastructure_renderer__WEBPACK_IMPORTED_MODULE_0__["Renderer"]();
renderer.registerComponent("header", _infrastructure_components_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]);
renderer.render(document.body, _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]);


/***/ }),

/***/ "./src/infrastructure/components/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/infrastructure/components/header.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.getTemplate = function () {
        return "\n        <h1>\n            {{#if text}}\n                {{text}}\n            {{else}}\n                Hello, World!\n            {{/if}}        \n        </h1>\n        ";
    };
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/infrastructure/renderer.ts":
/*!****************************************!*\
  !*** ./src/infrastructure/renderer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Handlebars = __webpack_require__(/*! handlebars */ "handlebars");
var Renderer = /** @class */ (function () {
    function Renderer() {
        this.components = {};
    }
    Renderer.prototype.render = function (element, component, context) {
        var cmp;
        if (typeof component === "string") {
            cmp = new this.components[component]();
        }
        else {
            cmp = new component();
        }
        var template = cmp.getTemplate();
        var attrs = this.getAttributes(element);
        var el = this.createElement(template, attrs);
        this.parseSubComponents(el);
        element.appendChild(el);
        if (cmp["bind"]) {
            cmp.bind(el, attrs);
        }
    };
    Renderer.prototype.registerComponent = function (name, component) {
        this.components[name.toLocaleLowerCase()] = component;
    };
    Renderer.prototype.getAttributes = function (element) {
        var attrs = {};
        for (var i = 0; i < element.attributes.length; i++) {
            attrs[element.attributes[i].name] = element.attributes[i].value;
        }
        return attrs;
    };
    Renderer.prototype.createElement = function (template, context) {
        var tpl = Handlebars.compile(template);
        var html = tpl(context);
        var div = document.createElement("div");
        div.innerHTML = html;
        return div.firstElementChild;
    };
    Renderer.prototype.parseSubComponents = function (element) {
        for (var i = 0; i < element.children.length; i++) {
            var name_1 = element.children[i].tagName;
            if (this.components[name_1.toLocaleLowerCase()]) {
                this.render(element.children[i], this.components[name_1.toLocaleLowerCase()], null);
            }
        }
    };
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "Handlebars" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Handlebars;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9kZW1vL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYXN0cnVjdHVyZS9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhc3RydWN0dXJlL3JlbmRlcmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkhhbmRsZWJhcnNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsbUY7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsZ0dBQWlEO0FBRWpEO0lBQUE7SUFJQSxDQUFDO0lBSEMsa0NBQVcsR0FB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LGlCQUFpQixFQUFFLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FDSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQ3pDLElBQUksQ0FDTCxDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQTdEWSw0QkFBUTs7Ozs7Ozs7Ozs7O0FDSHJCLDRCIiwiZmlsZSI6ImRlbW8uODRkNGYyMTA0YjQyNDU2YTJlN2IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZGVtby9hcHAuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGhlYWRlciB0ZXh0PVxcXCJIZWxsbyBmcm9tIEFwcFxcXCI+PC9oZWFkZXI+XFxyXFxuPC9kaXY+XCIiLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL2luZnJhc3RydWN0dXJlL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0ICogYXMgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tIFwiLi4vaW5mcmFzdHJ1Y3R1cmUvcmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vaW5mcmFzdHJ1Y3R1cmUvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5yZW5kZXJlci5yZWdpc3RlckNvbXBvbmVudChcImhlYWRlclwiLCBIZWFkZXJDb21wb25lbnQpO1xyXG5yZW5kZXJlci5yZW5kZXIoZG9jdW1lbnQuYm9keSwgQXBwQ29tcG9uZW50KTtcclxuIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICB7eyNpZiB0ZXh0fX1cclxuICAgICAgICAgICAgICAgIHt7dGV4dH19XHJcbiAgICAgICAgICAgIHt7ZWxzZX19XHJcbiAgICAgICAgICAgICAgICBIZWxsbywgV29ybGQhXHJcbiAgICAgICAgICAgIHt7L2lmfX0gICAgICAgIFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgYDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgSSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgcHJpdmF0ZSBjb21wb25lbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBJLklDb21wb25lbnRDb25zdHJ1Y3RvciB9ID0ge307XHJcblxyXG4gIHJlbmRlcihcclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgY29tcG9uZW50OiBJLklDb21wb25lbnRDb25zdHJ1Y3RvciB8IHN0cmluZyxcclxuICAgIGNvbnRleHQ6IGFueVxyXG4gICkge1xyXG4gICAgbGV0IGNtcDogSS5JQ29tcG9uZW50O1xyXG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgY21wID0gbmV3IHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRdKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbXAgPSBuZXcgY29tcG9uZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBsYXRlID0gY21wLmdldFRlbXBsYXRlKCk7XHJcblxyXG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRBdHRyaWJ1dGVzKGVsZW1lbnQpO1xyXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLCBhdHRycyk7XHJcblxyXG4gICAgdGhpcy5wYXJzZVN1YkNvbXBvbmVudHMoZWwpO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpO1xyXG5cclxuICAgIGlmIChjbXBbXCJiaW5kXCJdKSB7XHJcbiAgICAgICg8SS5JQmluZGluZ0NvbXBvbmVudD5jbXApLmJpbmQoZWwsIGF0dHJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyQ29tcG9uZW50KG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBJLklDb21wb25lbnRDb25zdHJ1Y3Rvcikge1xyXG4gICAgdGhpcy5jb21wb25lbnRzW25hbWUudG9Mb2NhbGVMb3dlckNhc2UoKV0gPSBjb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEF0dHJpYnV0ZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBhdHRycyA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXR0cnNbZWxlbWVudC5hdHRyaWJ1dGVzW2ldLm5hbWVdID0gZWxlbWVudC5hdHRyaWJ1dGVzW2ldLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dHJzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KHRlbXBsYXRlOiBzdHJpbmcsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgbGV0IHRwbCA9IEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XHJcbiAgICBsZXQgaHRtbCA9IHRwbChjb250ZXh0KTtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICByZXR1cm4gPEhUTUxFbGVtZW50PmRpdi5maXJzdEVsZW1lbnRDaGlsZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFyc2VTdWJDb21wb25lbnRzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG5hbWUgPSBlbGVtZW50LmNoaWxkcmVuW2ldLnRhZ05hbWU7XHJcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudHNbbmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpXSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKFxyXG4gICAgICAgICAgPEhUTUxFbGVtZW50PmVsZW1lbnQuY2hpbGRyZW5baV0sXHJcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbbmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpXSxcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFyczsiXSwic291cmNlUm9vdCI6IiJ9