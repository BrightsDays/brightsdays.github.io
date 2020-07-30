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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener("DOMContentLoaded", function () {
  //MENU

  /*var menu = document.querySelector(".menu"),
      item = menu.querySelectorAll(".menu__item"),
      list = document.querySelectorAll(".list");
    for (var i = 0; i < list.length; i++) {
    list[i].style.display = "none";
  }
    list[1].style.display = "flex";
  item[1].classList.add("active");
    var _loop = function _loop(j) {
    item[j].addEventListener("click", function (e) {
      e.preventDefault();
        for (var _i = 0; _i < list.length; _i++) {
        list[_i].style.display = "none";
          item[_i].classList.remove("active");
      }
        if (j != 0) {
        list[j].style.display = "flex";
      } else {
        list[j].style.display = "block";
      }
      item[j].classList.add("active");
    });
  };
    for (var j = 0; j < item.length; j++) {
    _loop(j);
  }*/
  //TOGGLE
  var toggle = document.querySelector('.toggle'),
      switcher = document.querySelector('.toggle__switch'),
      about = document.querySelector('.about__info'),
      switchMode = 'en';
  toggle.addEventListener('click', function () {
    if (switchMode === 'en') {
      switchMode = 'ru';
      switcher.style.right = "2px";
      switcher.textContent = 'RU';
      about.innerHTML = "<h1>Обо мне:</h1><p>Пять лет я занимался администрированием сайтов и информационными блогами. В процессе приходилось вносить правки в структуру сайтов и верстать отдельные страницы.</p><p>С 2019 года изучаю JavaScript и React, с 2020 верстаю сайты удаленно.</p><h3>Мой стек:</h3><p>- HTML5, CSS3, SASS/SCSS, Bootstrap;</p><p>- JavaScript, React JS;</p><p>- Gimp, Photoshop, Figma, Zeplin;</p><p>- Git, Github;</p><p>- Russian (native), English (world/A2);</p><p>- Windows, Linux.</p>";
    } else if (switchMode === 'ru') {
      switchMode = 'en';
      switcher.style.right = "14px";
      switcher.textContent = 'EN';
      about.innerHTML = "<h1>About:</h1><p>For the five years I was engaged in the administration of web stores  and my information blogs. Often I had to make changes to the structure of sites and layout of individual pages.</p><p>Studying JavaScript and React since 2019, making websites remotely since 2020.</p><h3>I'm use:</h3><p>- HTML5, CSS3, SASS/SCSS, Bootstrap;</p><p>- JavaScript, React JS;</p><p>- Gimp, Photoshop, Figma, Zeplin;</p><p>- Git, Github;</p><p>- Russian (native), English (world/A2);</p><p>- Windows, Linux.</p>";
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map