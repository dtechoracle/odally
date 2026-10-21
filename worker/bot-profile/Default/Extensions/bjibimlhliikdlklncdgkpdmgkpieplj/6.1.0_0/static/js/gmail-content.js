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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 699);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(60);
} else {}


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return signIn; });
/* unused harmony export signUp */
/* unused harmony export record */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return menu; });
/* unused harmony export bar */
/* unused harmony export email */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gb", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wb", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return jiraNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return jiraHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return gitlabBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return gitlabHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return lightBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return shadowLarge; });
/* unused harmony export darkOrange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zb", function() { return tilehighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return primaryHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return btnLinearColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VmBtnLinearColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return btnHoverLinearColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ab", function() { return tilehighlightHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return screenbackground; });
/* unused harmony export optionsBackground */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return bordercolor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yb", function() { return textBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return inputBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return nonActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return nonActiveHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return popupBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return switchTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return boxshadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return hoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return secondaryHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return lightshadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return mercury; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return darkorange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return backdrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return alto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return dim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return highlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return highlightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return camBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return google; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return fb; });
/* unused harmony export dateHighlight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bb", function() { return title; });
/* unused harmony export calendarShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return selectedDate; });
/* unused harmony export purpleHover */
/* unused harmony export fieldHighlight */
/* unused harmony export red */
/* unused harmony export pink */
/* unused harmony export checkbox */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return btnHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return lowOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return lightPurple; });
/* unused harmony export newHighlight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hb", function() { return whiteSmoke; });
/* unused harmony export brightOrange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return indicatorBg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return indicatorBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return shadowBlack; });
/* unused harmony export Eucalyptus */
/* unused harmony export pricingBgColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrangeDark; });
/* unused harmony export Green */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return scrollBar; });
/* unused harmony export cornSilk */
/* unused harmony export buttonGreen */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ib", function() { return yellowHightlight; });
/* unused harmony export goldenPoppy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return tennesseeOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return defaultTextBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xb", function() { return textBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return modalTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Db", function() { return vmBorderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return proLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return enterpriseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return enterpriseHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eb", function() { return vmBtnLinearColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fb", function() { return vmBtnLinearHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return plans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return brushColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return frameColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return blackOpac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ub", function() { return teamColors; });
/* unused harmony export tileShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return lightBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return darkPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return darkYellow; });
/* unused harmony export darkPink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return homeBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return camGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return profileGrey; });
/* unused harmony export Aquamarine */
/* unused harmony export oceanBlue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cb", function() { return titleGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return borderGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return errorTextColor; });
/**
 * Colors Palette
 */

/**
 * Gradient Color
 */

const signIn = '#EA7E1D 0% 0% no-repeat padding-box;';
const signUp = 'transparent linear-gradient(90deg, #4D44E9 0%, #8C5DE9 100%) 0% 0% no-repeat padding-box;';
const record = 'transparent linear-gradient(270deg, #AE73F8 0%, #AE73F8 100%, #AE73F8 100%) 0% 0% no-repeat padding-box;';
// export const menu =
//   'transparent linear-gradient(270deg, #08B3E5 0%, #63D6B5 100%) 0% 0% no-repeat padding-box;';
const menu = '#fff';
const bar = 'transparent linear-gradient(270deg, #4D44E9 0%, #8C5DE9 100%) 0% 0% no-repeat padding-box;';
const email = 'transparent linear-gradient(270deg, #6DE19B 0%, #6CEEDB 92%, #6CEEDB 100%) 0% 0% no-repeat padding-box;';
/**
 * Basic Colors
 */

const white = '#FFFFFF';
const black = '#000000';
const text = '#313345';
const jiraNormal = '#f6f6f6';
const jiraHover = '#ebeaed';
const gitlabBorder = '#bfbfbf';
const gitlabHover = '#868686';
const lightBorder = '#F0F0F0';
const shadow = '#0000001A';
const shadowLarge = 'rgba(0, 0, 0, 0.04), 0 2px 8px 0 rgba(0, 0, 0, 0.16);';
const darkOrange = '#F39B4B';
const tilehighlight = '#00BAFF';
const primaryHoverColor = '#00A8EB';
const btnLinearColor = 'linear-gradient(106deg, #00BAFF 31.97%, #2D85F7 100%)';
const VmBtnLinearColor = 'linear-gradient(112deg, #00BAFF 0%, #2D85F7 100%)';
const btnHoverLinearColor = 'linear-gradient(106deg, #00B2F4 31.97%, #0463DF 100%)';
const tilehighlightHover = '#F5FCFF';
const screenbackground = '#F1F1F1';
const optionsBackground = '#FAFAFA';
const bordercolor = '#CCCCCC';
const textBorder = '#ECE2FF';
const inputBackground = '#FBF9FE';
const error = '#FA3E3E';
const nonActive = '#F34141';
const nonActiveHover = '#E03C3C';
const active = '#83BF11';
const popupBackground = '#63D6B5';
const line = '#DEDFE3';
const switchTeam = '#7B7E8C';
const boxshadow = '#dedede';
const hoverColor = '#E4E5EB';
const secondaryHoverColor = '#EDEEF2';
const screen = '#e9e6f5';
const orange = '#FFC524';
const lightshadow = '#0000000F';
const mercury = '#E6E6E6';
const grey = '#4F4C4A';
const darkorange = '#EA7E1D';
const backdrop = 'rgba(0,0,0,0.2)';
const alto = '#DDDDDD';
const close = '#FF6159';
const hide = '#CFCFCF';
const dim = '#707070';
const purple = '#766ACE';
const highlight = '#F5F5F5';
const highlightText = '#54536E';
const camBackground = '#57595C';
const google = '#1C72E8';
const fb = '#0075FB';
const dateHighlight = '#F7F2FF';
const title = '#9392B1';
const calendarShadow = '#00000019';
const selectedDate = '#886DE5';
const purpleHover = '#F7F2FF';
const fieldHighlight = '#ffcd34';
const red = '#fa3e3f';
const pink = '#ffa5b6';
const checkbox = '#82bf13';
const hover = '#FFD347';
const btnHover = '#29c5ff';
const lowOrange = '#F7A554';
const lightPurple = '#AE73F8';
const newHighlight = '#ffc107';
const whiteSmoke = '#F2F2F2';
const brightOrange = '#FF9536';
const indicatorBg = "#DDF6FF";
const indicatorBorder = "#A5E0F5";
const shadowBlack = "rgba(0, 0, 0, 0.08)";
const Eucalyptus = '#48D0A9';
const pricingBgColor = '#EFEBFF';
const ActiveBoxShadow = '#FFC3003D';
const OrangeDark = '#FF7F00';
const Green = '#2AC79A';
const scrollBar = '#7f7f7f';
const cornSilk = '#FFFAE8';
const buttonGreen = '#63D6B5';
const yellowHightlight = '#EBEBEB';
const goldenPoppy = "#FFC404";
const tennesseeOrange = '#F47504';
const defaultTextBox = '#a6a9b9';
const textBlack = '#313345';
const modalTextColor = '#4A4F66';
const vmBorderColor = '#E3E4E7';
const proLabel = '#FB7906';
const enterpriseColor = '#7353ff';
const enterpriseHoverColor = '#5f3bff';
const vmBtnLinearColor = 'linear-gradient(135deg, #FF781A 0%, #F55322 100%)';
const vmBtnLinearHoverColor = 'linear-gradient(135deg, #F55322 0%, #FF781A 100%)';
const plans = {
  free: '#D8D8D8',
  starter: '#FFC300',
  pro: '#5AD4FF',
  bussiness: '#D4AFFF',
  enterprise: '#D4AFFF',
  lite: '#D8D8D8',
  team: '#5AD4FF'
};
const brushColors = {
  lightGreen: '#4EFFC2',
  red: '#FD5E5F',
  yellow: '#FFC450',
  blue: '#1AAEFF',
  white: '#FFFFFF'
};
const frameColors = {
  darkGrey: '#666666',
  mediumGrey: '#B7B7B7',
  normalGrey: bordercolor,
  lightGrey: '#F3F3F3',
  white,
  red: '#EA3D3D',
  yellow: '#FFD150',
  blue: '#4986ED',
  darkBlue: '#1967E8',
  pink: '#DE2E84',
  orange: '#EA8010',
  green: '#5DA321',
  oliveGreen: '#96633B',
  aquaBlue: '#0091BC',
  darkPurple: '#361C75',
  darkOrange: '#FF781A',
  lightOrange: '#E2AD86',
  lightYellow: '#FFFCCA',
  sunGlow: '#fdca2f',
  lavendar: '#ba5de1',
  turquoise: '#38edb8',
  redViolet: '#a81a79',
  hotPink: '#ff4cb9',
  dodgerBlue: '#1AAEFF',
  lightPink: '#fdb3e5',
  violet: '#d4a8fd',
  darkPink: '#ee89d8',
  lemonYellow: '#fffa7f',
  mintGreen: '#40a500',
  honeyYellow: '#ffd238',
  darkRed: '#e30e24',
  black: '#000000'
};
const blackOpac = function () {
  let opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return "rgba(0,0,0, ".concat(opacity, ")");
};
const teamColors = ['#2880B9', '#BDC3C7', '#2FCC71', '#9B59B6', '#F39C12'];
const tileShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
const lightBlue = '#2cb9fd';
const darkPurple = '#ae73f8';
const darkYellow = '#ffa852';
const darkPink = '#ff88a0';
const homeBackground = '#FCFCFC 0% 0% no-repeat padding-box';
const camGrey = '#e5e5e5';
const profileGrey = '#cecfcf';
const Aquamarine = '#82d3b7';
const oceanBlue = '#08b3e5';
const titleGrey = '#54536C';
const borderGrey = '#DCDCE1';
const errorTextColor = '#E65650';

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strategies; });
//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultFontFamily */
/* harmony import */ var _Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _theme_font__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10;






/** Default font */
const defaultFontFamily = "VM-Poppins";
const LabelComponent = styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].label(_templateObject || (_templateObject = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  user-select: ", ";\n  font-size: ", ";\n  display: ", ";\n  margin: ", ";\n  padding: ", ";\n  color: ", ";\n  text-align: ", ";\n  float: ", ";\n  cursor: ", ";\n  width: ", ";\n  line-height: ", ";\n  max-width: ", ";\n  visibility: ", ";\n  text-transform: ", ";\n  text-decoration: ", ";\n  margin-left: ", ";\n  margin-bottom: ", ";\n  opacity: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), props => props.fontFamily, props => {
  switch (props.fontWeight) {
    case "bold":
      return "700";
    case "bolder":
      return "900";
    case "normal":
      return "400";
    case "base":
      return "600";
    default:
      return props.fontWeight;
  }
}, props => props.userSelect, props => _theme_font__WEBPACK_IMPORTED_MODULE_4__[/* font */ "a"][props.size], props => props.display, props => props.margin, props => props.padding, props => props.color, props => props.align, props => props.float, props => props.cursor, props => props.width, props => props.lineHeight, props => props.maxWidth, props => props.isVisible ? "visible" : "hidden", props => props.textTransform, props => props.textDecoration, props => props.marginLeft, props => props.marginBottom, props => props.opacity, props => props.enableHover && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject2 || (_templateObject2 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      &:hover {\n        color: ", ";\n      }\n    "])), props.hoverColor), props => props.customStyle && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject3 || (_templateObject3 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      ", "\n    "])), props.customStyle), props => props.enableTrim && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject4 || (_templateObject4 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      white-space: ", ";\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: ", ";\n    "])), props.whiteSpace, props.textWidth ? props.textWidth : props.width), props => props.beforeContent && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject5 || (_templateObject5 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      &::before {\n        content: url(", ");\n        ", ";\n      }\n    "])), props.beforeContent, props.beforeContentStyles), props => props.isNone && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject6 || (_templateObject6 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      pointer-events: none;\n    "]))), props => props.verticalAlign && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject7 || (_templateObject7 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      vertical-align: ", ";\n    "])), props.verticalAlign), props => props.font && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject8 || (_templateObject8 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      font: ", ";\n    "])), props.font));
const AnchorComponent = styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"].a(_templateObject9 || (_templateObject9 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  user-select: ", ";\n  font-size: ", ";\n  display: ", ";\n  margin: ", ";\n  padding: ", ";\n  color: ", ";\n  text-align: ", ";\n  float: ", ";\n  cursor: ", ";\n  width: ", ";\n  line-height: ", ";\n  max-width: ", ";\n  visibility: ", ";\n  ", "\n  text-transform: ", ";\n  text-decoration: ", ";\n  margin-left: ", ";\n  ", "\n  ", "\n"])), props => props.fontFamily, props => {
  switch (props.fontWeight) {
    case "bold":
      return "700";
    case "bolder":
      return "900";
    case "normal":
      return "400";
    case "base":
      return "600";
    default:
      return props.fontWeight;
  }
}, props => props.userSelect, props => _theme_font__WEBPACK_IMPORTED_MODULE_4__[/* font */ "a"][props.size], props => props.display, props => props.margin, props => props.padding, props => props.color, props => props.align, props => props.float, props => props.cursor, props => props.width, props => props.lineHeight, props => props.maxWidth, props => props.isVisible ? "visible" : "hidden", props => props.customStyle && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject0 || (_templateObject0 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      ", "\n    "])), props.customStyle), props => props.textTransform, props => props.textDecoration, props => props.marginLeft, props => props.enableTrim && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject1 || (_templateObject1 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: ", ";\n    "])), props.textWidth ? props.textWidth : props.width), props => props.isNone && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* css */ "c"])(_templateObject10 || (_templateObject10 = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      pointer-events: none;\n    "]))));
const ParentComponent = props => {
  return props.isAnchor ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnchorComponent, props, props.children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelComponent, props, props.children);
};
const Typography = props => {
  const isHtmlText = props.isHtmlText;
  return props.dangerouslySetInnerHTML ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ParentComponent, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ParentComponent, props, typeof props.content === 'string' && props.content.trim() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    id: props.content
    // eslint-disable-next-line react/no-children-prop
    ,
    children: val => isHtmlText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      dangerouslySetInnerHTML: {
        __html: val
      }
    }) : val
  }) : props.innerContent, props.children);
};
Typography.defaultProps = {
  fontFamily: defaultFontFamily,
  fontWeight: "normal",
  size: "default",
  display: "inline",
  margin: "0px",
  padding: "0px",
  color: _theme_colors__WEBPACK_IMPORTED_MODULE_5__[/* text */ "wb"],
  align: "initial",
  float: "initial",
  cursor: "default",
  userSelect: "auto",
  onClick: () => {},
  name: "",
  maxWidth: "auto",
  width: "auto",
  isVisible: true,
  enableTrim: true,
  lineHeight: "inherit",
  isAnchor: false,
  enableHover: false,
  hoverColor: _theme_colors__WEBPACK_IMPORTED_MODULE_5__[/* white */ "Gb"],
  isNone: false,
  textTransform: "",
  textDecoration: "",
  marginLeft: "",
  whiteSpace: "nowrap",
  isHtmlText: false
};
/* harmony default export */ __webpack_exports__["a"] = (Typography);

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return filterProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_INTL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createIntlCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createFormatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getNamedFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




function filterProps(props, allowlist, defaults) {
    if (defaults === void 0) { defaults = {}; }
    return allowlist.reduce(function (filtered, name) {
        if (name in props) {
            filtered[name] = props[name];
        }
        else if (name in defaults) {
            filtered[name] = defaults[name];
        }
        return filtered;
    }, {});
}
var defaultErrorHandler = function (error) {
    // @ts-ignore just so we don't need to declare dep on @types/node
    if (false) {}
};
var defaultWarnHandler = function (warning) {
    // @ts-ignore just so we don't need to declare dep on @types/node
    if (false) {}
};
var DEFAULT_INTL_CONFIG = {
    formats: {},
    messages: {},
    timeZone: undefined,
    defaultLocale: 'en',
    defaultFormats: {},
    fallbackOnEmptyString: true,
    onError: defaultErrorHandler,
    onWarn: defaultWarnHandler,
};
function createIntlCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {},
    };
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
/**
 * Create intl formatters and populate cache
 * @param cache explicit cache to prevent leaking memory
 */
function createFormatters(cache) {
    if (cache === void 0) { cache = createIntlCache(); }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    var ListFormat = Intl.ListFormat;
    var DisplayNames = Intl.DisplayNames;
    var getDateTimeFormat = Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.DateTimeFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
    }, {
        cache: createFastMemoizeCache(cache.dateTime),
        strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
    });
    var getNumberFormat = Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.NumberFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
    }, {
        cache: createFastMemoizeCache(cache.number),
        strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
    });
    var getPluralRules = Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.PluralRules).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
    }, {
        cache: createFastMemoizeCache(cache.pluralRules),
        strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
    });
    return {
        getDateTimeFormat: getDateTimeFormat,
        getNumberFormat: getNumberFormat,
        getMessageFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function (message, locales, overrideFormats, opts) {
            return new intl_messageformat__WEBPACK_IMPORTED_MODULE_1__[/* IntlMessageFormat */ "a"](message, locales, overrideFormats, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ formatters: {
                    getNumberFormat: getNumberFormat,
                    getDateTimeFormat: getDateTimeFormat,
                    getPluralRules: getPluralRules,
                } }, (opts || {})));
        }, {
            cache: createFastMemoizeCache(cache.message),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
        }),
        getRelativeTimeFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (RelativeTimeFormat.bind.apply(RelativeTimeFormat, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.relativeTime),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
        }),
        getPluralRules: getPluralRules,
        getListFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (ListFormat.bind.apply(ListFormat, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.list),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
        }),
        getDisplayNames: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (DisplayNames.bind.apply(DisplayNames, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.displayNames),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
        }),
    };
}
function getNamedFormat(formats, type, name, onError) {
    var formatType = formats && formats[type];
    var format;
    if (formatType) {
        format = formatType[name];
    }
    if (format) {
        return format;
    }
    onError(new _error__WEBPACK_IMPORTED_MODULE_3__[/* UnsupportedFormatterError */ "h"]("No ".concat(type, " format named: ").concat(name)));
}


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ parse; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ TYPE; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ isLiteralElement; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ isArgumentElement; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ isNumberElement; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ isDateElement; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ isTimeElement; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ isSelectElement; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ isPluralElement; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ isPoundElement; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ isTagElement; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ isNumberSkeleton; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ isDateTimeSkeleton; });

// UNUSED EXPORTS: SKELETON_TYPE, createLiteralElement, createNumberElement

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
    return {
        type: TYPE.literal,
        value: value,
    };
}
function createNumberElement(value, style) {
    return {
        type: TYPE.number,
        value: value,
        style: style,
    };
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: miliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js
// @generated from regex-gen.ts
var regex_generated_WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-skeleton-parser/lib/number.js


function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(regex_generated_WHITE_SPACE_REGEX)
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    }
    else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), { trailingZeroDisplay: 'stripIfInteger' });
            }
            else if (opt) {
                result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-skeleton-parser/lib/index.js



// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
// @generated from time-data-gen.ts
// prettier-ignore  
var timeData = {
    "AX": [
        "H"
    ],
    "BQ": [
        "H"
    ],
    "CP": [
        "H"
    ],
    "CZ": [
        "H"
    ],
    "DK": [
        "H"
    ],
    "FI": [
        "H"
    ],
    "ID": [
        "H"
    ],
    "IS": [
        "H"
    ],
    "ML": [
        "H"
    ],
    "NE": [
        "H"
    ],
    "RU": [
        "H"
    ],
    "SE": [
        "H"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "AS": [
        "h",
        "H"
    ],
    "BT": [
        "h",
        "H"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "GH": [
        "h",
        "H"
    ],
    "IN": [
        "h",
        "H"
    ],
    "LS": [
        "h",
        "H"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PW": [
        "h",
        "H"
    ],
    "SO": [
        "h",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WS": [
        "h",
        "H"
    ],
    "001": [
        "H",
        "h"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "AR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CL": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CU": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BO": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-EC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-PE": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "GT": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "HN": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MX": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "NI": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "PY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "SV": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "UY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "JP": [
        "H",
        "h",
        "K"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BO": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "EC": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "PE": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ]
};

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js

/**
 * Returns the best matching date time pattern if a date time skeleton
 * pattern is provided with a locale. Follows the Unicode specification:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
 * @param skeleton date time skeleton pattern that possibly includes j, J or C
 * @param locale
 */
function getBestPattern(skeleton, locale) {
    var skeletonCopy = '';
    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
        var patternChar = skeleton.charAt(patternPos);
        if (patternChar === 'j') {
            var extraLength = 0;
            while (patternPos + 1 < skeleton.length &&
                skeleton.charAt(patternPos + 1) === patternChar) {
                extraLength++;
                patternPos++;
            }
            var hourLen = 1 + (extraLength & 1);
            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            var dayPeriodChar = 'a';
            var hourChar = getDefaultHourSymbolFromLocale(locale);
            if (hourChar == 'H' || hourChar == 'k') {
                dayPeriodLen = 0;
            }
            while (dayPeriodLen-- > 0) {
                skeletonCopy += dayPeriodChar;
            }
            while (hourLen-- > 0) {
                skeletonCopy = hourChar + skeletonCopy;
            }
        }
        else if (patternChar === 'J') {
            skeletonCopy += 'H';
        }
        else {
            skeletonCopy += patternChar;
        }
    }
    return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */
function getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === undefined &&
        // @ts-ignore hourCycle(s) is not identified yet
        locale.hourCycles &&
        // @ts-ignore
        locale.hourCycles.length) {
        // @ts-ignore
        hourCycle = locale.hourCycles[0];
    }
    if (hourCycle) {
        switch (hourCycle) {
            case 'h24':
                return 'k';
            case 'h23':
                return 'H';
            case 'h12':
                return 'h';
            case 'h11':
                return 'K';
            default:
                throw new Error('Invalid hourCycle');
        }
    }
    // TODO: Once hourCycle is fully supported remove the following with data generation
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== 'root') {
        regionTag = locale.maximize().region;
    }
    var hourCycles = timeData[regionTag || ''] ||
        timeData[languageTag || ''] ||
        timeData["".concat(languageTag, "-001")] ||
        timeData['001'];
    return hourCycles[0];
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var parser_a;






var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((parser_a = re.exec('a')) === null || parser_a === void 0 ? void 0 : parser_a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var parser_Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: TYPE.pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: TYPE.literal,
                    value: "<".concat(tagName, "/>"),
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: TYPE.tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: TYPE.literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: TYPE.argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: TYPE.number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var dateTimePattern = skeleton;
                        // Get "best match" pattern only if locale is passed, if not, let it
                        // pass as-is where `parseDateTimeSkeleton()` will throw an error
                        // for unsupported patterns.
                        if (this.locale) {
                            dateTimePattern = getBestPattern(skeleton, this.locale);
                        }
                        var style = {
                            type: SKELETON_TYPE.dateTime,
                            pattern: dateTimePattern,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? parseDateTimeSkeleton(dateTimePattern)
                                : {},
                        };
                        var type = argType === 'date' ? TYPE.date : TYPE.time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? TYPE.number
                            : argType === 'date'
                                ? TYPE.date
                                : TYPE.time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, Object(tslib_es6["a" /* __assign */])({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: TYPE.select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: TYPE.plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = parseNumberSkeletonFromString(skeleton);
        }
        catch (e) {
            return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: SKELETON_TYPE.number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? parseNumberSkeleton(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) {
        }
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());

/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/index.js




function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if (isSelectElement(el) || isPluralElement(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
            delete el.style.location;
        }
        else if ((isDateElement(el) || isTimeElement(el)) &&
            isDateTimeSkeleton(el.style)) {
            delete el.style.location;
        }
        else if (isTagElement(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = Object(tslib_es6["a" /* __assign */])({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new parser_Parser(message, opts).parse();
    if (result.err) {
        var error = SyntaxError(ErrorKind[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}



/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return invariantIntlContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_INTL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assignUniqueKeysToParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return shallowEqual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _formatjs_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);




function invariantIntlContext(intl) {
    Object(_formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_2__[/* invariant */ "a"])(intl, '[React Intl] Could not find required `intl` object. ' +
        '<IntlProvider> needs to exist in the component ancestry.');
}
var DEFAULT_INTL_CONFIG = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, _formatjs_intl__WEBPACK_IMPORTED_MODULE_3__[/* DEFAULT_INTL_CONFIG */ "a"]), { textComponent: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"] });
/**
 * Takes a `formatXMLElementFn`, and composes it in function, which passes
 * argument `parts` through, assigning unique key to each part, to prevent
 * "Each child in a list should have a unique "key"" React error.
 * @param formatXMLElementFn
 */
function assignUniqueKeysToParts(formatXMLElementFn) {
    return function (parts) {
        // eslint-disable-next-line prefer-rest-params
        return formatXMLElementFn(react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(parts));
    };
}
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    var len = aKeys.length;
    if (bKeys.length !== len) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        var key = aKeys[i];
        if (objA[key] !== objB[key] ||
            !Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __rest; });
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __esDecorate */
/* unused harmony export __runInitializers */
/* unused harmony export __propKey */
/* unused harmony export __setFunctionName */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __spreadArray; });
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/* unused harmony export __classPrivateFieldIn */
/* unused harmony export __addDisposableResource */
/* unused harmony export __disposeResources */
/* unused harmony export __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
        var ar = [];
        for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;

}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while (r = env.stack.pop()) {
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                else s |= 1;
            }
            catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
        });
    }
    return path;
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __esDecorate: __esDecorate,
    __runInitializers: __runInitializers,
    __propKey: __propKey,
    __setFunctionName: __setFunctionName,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
    __rewriteRelativeImportExtension: __rewriteRelativeImportExtension,
});


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(33);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InvalidValueError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InvalidValueTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MissingValueError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error));

var InvalidValueError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError));

var InvalidValueTypeError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError));

var MissingValueError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError));



/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCommonData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeData; });
/* unused harmony export resetData */
/* harmony import */ var _Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/* global chrome */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

/**
 * Store the data in chrome local storage
 * @param {*} key
 * @param {*} data
 */
function setData(key, data) {
  // localStorage.setItem(key, JSON.stringify(data));
  try {
    chrome.storage.local.set({
      [key]: JSON.stringify(data)
    }, () => {
      // console.log(`data is set to ${JSON.stringify(data)}`);
    });
  } catch (e) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

/**
 * Retreive the data from chrome local storage
 * @param {*} key
 * @param {*} data
 */
function getData(key, callBackAction) {
  try {
    chrome.storage.local.get([key], result => {
      let data = JSON.parse(result[key] || '{}');
      if (data.expiry) {
        const now = new Date();
        if (now.getTime() > data.expiry) {
          chrome.storage.local.remove([key], () => {});
          data = {};
        }
      }
      callBackAction(data || {});
    });
  } catch (e) {
    const data = JSON.parse(localStorage.getItem(key));
    callBackAction(data || {});
  }
}
function setCommonData(key, data) {
  getData(key, jsonData => {
    const commonData = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, jsonData), data);
    setData(key, commonData);
  });
}

/**
 * Remove the data from chrome local storage
 * @param {*} key 
 * @param {*} callbackAction 
 */

function removeData(key, callbackAction) {
  try {
    chrome.storage.local.remove([key], () => {
      if (callbackAction) {
        callbackAction();
      }
    });
  } catch (e) {
    localStorage.removeItem(key);
    if (callbackAction) {
      callbackAction();
    }
  }
}

/**
 * To reset the all stored data
 */
function resetData() {
  removeData('userDetails', () => {});
  removeData('userSettings', () => {});
  removeData('cropBounds', () => {});
}

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return font; });
// FONT-SIZES
// eslint-disable-next-line import/prefer-default-export
const font = {
  microMini: '10px',
  micro: '11px',
  microLarge: '12px',
  mini: '13px',
  base: '14px',
  smallBase: '15px',
  default: '16px',
  small: '18px',
  smallmedium: '20px',
  smallLarge: '24px',
  mediumSmall: '26px',
  medium: '28px',
  xmedium: '30px',
  largeSmall: '32px',
  largeMedium: '36px',
  large: '38px',
  xLarge: '42px',
  xxLarge: '56px'
};

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  START_RECORDING: "START_RECORDING",
  STOP_RECORDING: "STOP_RECORDING",
  SIGN_UP: "SIGN_UP",
  SIGN_IN: "SIGN_IN",
  VMAKER: "VMAKER",
  OR: "OR",
  RESERVED: "RESERVED",
  ABOUT: "ABOUT",
  EMAIL_REQUIRED: "EMAIL_REQUIRED",
  USERNAME_NOT_VALID: "USERNAME_NOT_VALID",
  EMAIL_NOT_VALID: "EMAIL_NOT_VALID",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  EMAIL_FORM: "EMAIL_FORM",
  RECOVER_EMAIL: "RECOVER_EMAIL",
  ALREDY_HAVE_ACC: "ALREDY_HAVE_ACC",
  SUBMIT: "SUBMIT",
  SWITCH_TEAM: "SWITCH_TEAM",
  SIGN_OUT: "SIGN_OUT",
  QUIT: "QUIT",
  VIEW_PLANS: "VIEW_PLANS",
  CHECK_UPDATE: "CHECK_UPDATE",
  CHECK_PENDING: "CHECK_PENDING",
  GET_LOGS: "GET_LOGS",
  MY_VIDEOS: "MY_VIDEOS",
  PREFERENCES: "PREFERENCES",
  CUSTOM_SIZE: "CUSTOM_SIZE",
  RECORD_CURRENT_TAB: "RECORD_CURRENT_TAB",
  FULL_SCREEN_RECORD: "FULL_SCREEN_RECORD",
  CAM_ONLY: "CAM_ONLY",
  SCREEN_ONLY: "SCREEN_ONLY",
  SCREEN_AND_CAM: "SCREEN_AND_CAM",
  FIELDS_MANDATORY: "FIELDS_MANDATORY",
  RETRY: "RETRY",
  NO_NET_MSG: "NO_NET_MSG",
  OOPS: "OOPS",
  CAMERA: "CAMERA",
  AUDIO: "AUDIO",
  RECORDING_QUALITY: "RECORDING_QUALITY",
  CANCEL_RECORDING_TEXT: "CANCEL_RECORDING_TEXT",
  SERVER_ERROR: "SERVER_ERROR",
  RECORDING_STOPPED: "RECORDING_STOPPED",
  SUPPORT_TEAM: "SUPPORT_TEAM",
  CANCEL_CONFIRMATION: "CANCEL_CONFIRMATION",
  RESUME: "RESUME",
  CANCEL: "CANCEL",
  PASSWORD: "PASSWORD",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  SIGN_IN_HEADER_TEXT: "SIGN_IN_HEADER_TEXT",
  ALL_FIELDS_MANDATORY: "ALL_FIELDS_MANDATORY",
  START_CONTENT: "START_CONTENT",
  NAME: "NAME",
  AGREE1: "AGREE1",
  AGREE2: "AGREE2",
  ACTIVATION_LINK: "ACTIVATION_LINK",
  NEW_TO_VMAKER: "NEW_TO_VMAKER",
  HELLO_THERE: "HELLO_THERE",
  WELCOME: "WELCOME",
  VMAKER_BUTTON_TEXT: "VMAKER_BUTTON_TEXT",
  EMAIL: "EMAIL",
  GOOGLE: "GOOGLE",
  FACEBOOK: "FACEBOOK",
  RECORD_NEW_VIDEO: "RECORD_NEW_VIDEO",
  INSERT_LAST_RECORDING: "INSERT_LAST_RECORDING",
  INSERT_RECORDING: "INSERT_RECORDING",
  VIDEO_TITLE: "VIDEO_TITLE",
  VIDEO_LINK_DEFAULT_TITLE: "VIDEO_LINK_DEFAULT_TITLE",
  CREATE_WORKSPACE: "CREATE_WORKSPACE",
  MUTE_RECORDING_HEADER: "MUTE_RECORDING_HEADER",
  NEW_VERSION: "NEW_VERSION",
  AVAILABLE: "AVAILABLE",
  UPDATE_AVAILABLE_SUBTEXT: "UPDATE_AVAILABLE_SUBTEXT",
  UPDATE_NOW: "UPDATE_NOW",
  UPDATE_NOT_AVAILABLE: "UPDATE_NOT_AVAILABLE",
  MUTE_RECORDING_SUBTEXT: "MUTE_RECORDING_SUBTEXT",
  CANCEL_MUTE_ACTION: "CANCEL_MUTE_ACTION",
  PROCEED: "PROCEED",
  OKAY: "OKAY",
  ERROR_HEADER: "ERROR_HEADER",
  DONE: "DONE",
  DELETE: "DELETE",
  RECORD: "RECORD",
  VIDEO_STREAM_ENDED_HEADER: "VIDEO_STREAM_ENDED_HEADER",
  VIDEO_STREAM_ENDED_TEXT: "VIDEO_STREAM_ENDED_TEXT",
  VIDEO_NOT_UPLOADED: "VIDEO_NOT_UPLOADED",
  DOWNLOAD_LOCALLY: "DOWNLOAD_LOCALLY",
  DOWNLOAD_FAILED: "DOWNLOAD_FAILED",
  STREAM_ERROR: "STREAM_ERROR",
  DOWNLOAD: "DOWNLOAD",
  DONT_RECORD: "DONT_RECORD",
  ABOUT_VMAKER: "ABOUT_VMAKER",
  QUIT_VMAKER: "QUIT_VMAKER",
  TEAM_NOT_SELECTED: "TEAM_NOT_SELECTED",
  TRY_AGAIN: "TRY_AGAIN",
  DENIED_ACCESS: "DENIED_ACCESS",
  MIC_RE_ACCESS: "MIC_RE_ACCESS",
  CAMERA_RE_ACCESS: "CAMERA_RE_ACCESS",
  RE_LAUNCH: "RE_LAUNCH",
  RELAUNCH_EXTENISON: "RELAUNCH_EXTENISON",
  RECORD_NOW: "RECORD_NOW",
  NO_MIC_HEADER: "NO_MIC_HEADER",
  NO_MIC_TEXT: "NO_MIC_TEXT",
  POPUP_TEXT_1: "POPUP_TEXT_1",
  POPUP_TEXT_2: "POPUP_TEXT_2",
  POPUP_TEXT_3: "POPUP_TEXT_3",
  POPUP_TEXT_4: "POPUP_TEXT_4",
  GOT_IT: "GOT_IT",
  FRAME: "FRAME",
  SHAPE: "SHAPE",
  CHOOSE_FRAME: "CHOOSE_FRAME",
  FRAME_TEXT: "FRAME_TEXT",
  FRAME_TEXT_INPUT_PLACEHOLDER: "FRAME_TEXT_INPUT_PLACEHOLDER",
  FRAME_TEXT_DEFAULT_TEXT: "FRAME_TEXT_DEFAULT_TEXT",
  SILHOUETTE: "SILHOUETTE",
  RESET_ALL: "RESET_ALL",
  CAMERA_OPTIONS: "CAMERA_OPTIONS",
  COLORS: "COLORS",
  FONT: "FONT",
  BACKGROUND: "BACKGROUND",
  ALMOST_THERE: "ALMOST_THERE",
  FORGOT_CONFIRM: "FORGOT_CONFIRM",
  SYSTEM_AUDIO: "SYSTEM_AUDIO",
  RECORDING_COUNTDOWN: "RECORDING_COUNTDOWN",
  HIGHLIGHT_CLICKS: "HIGHLIGHT_CLICKS",
  FLIP_CAMERA: "FLIP_CAMERA",
  ZOOM_EFFECT: "ZOOM_EFFECT",
  CONTROL_MENU: "CONTROL_MENU",
  AUDIO_IN_MONO: "AUDIO_IN_MONO",
  NOISE_CONTROL: "NOISE_CONTROL",
  SENSITIVE_INFO: "SENSITIVE_INFO",
  ENABLE_DND: "ENABLE_DND",
  SHOW_DOCK: "SHOW_DOCK",
  LAUNCH_STARTUP: "LAUNCH_STARTUP",
  AUTO_UPDATE: "AUTO_UPDATE",
  AUTO: "AUTO",
  PAUSE_KEY: "PAUSE_KEY",
  FINISH_KEY: "FINISH_KEY",
  STOP_RECORD_WIN_KEY: "STOP_RECORD_WIN_KEY",
  STOP_RECORD_MAC_KEY: "STOP_RECORD_MAC_KEY",
  PAUSE_RECORD_WIN_KEY: "PAUSE_RECORD_WIN_KEY",
  PAUSE_RECORD_MAC_KEY: "PAUSE_RECORD_MAC_KEY",
  RESUME_RECORD_WIN_KEY: "RESUME_RECORD_WIN_KEY",
  RESUME_RECORD_MAC_KEY: "RESUME_RECORD_MAC_KEY",
  MUTE_RECORD_WIN_KEY: "MUTE_RECORD_WIN_KEY",
  MUTE_RECORD_MAC_KEY: "MUTE_RECORD_MAC_KEY",
  UNMUTE_RECORD_WIN_KEY: "UNMUTE_RECORD_WIN_KEY",
  UNMUTE_RECORD_MAC_KEY: "UNMUTE_RECORD_MAC_KEY",
  CANCEL_RECORD_WIN_KEY: "CANCEL_RECORD_WIN_KEY",
  CANCEL_RECORD_MAC_KEY: "CANCEL_RECORD_MAC_KEY",
  DRAW: "DRAW",
  WITH: "WITH",
  VIDEO_RECORDING_QUALITY: "VIDEO_RECORDING_QUALITY",
  TIMER_HEADER: "TIMER_HEADER",
  TIMER_CONTENT: "TIMER_CONTENT",
  CONTINUE: "CONTINUE",
  TIMER_NOTE: "TIMER_NOTE",
  LANGUAGE: "LANGUAGE",
  TAB_AUDIO_MODAL_HEADER: "TAB_AUDIO_MODAL_HEADER",
  TAB_AUDIO_MODAL_TEXT: "TAB_AUDIO_MODAL_TEXT",
  PROCEED_WITH_CURRENT_TAB: "PROCEED_WITH_CURRENT_TAB",
  PROCEED_WITH_FULL_SCREEN: "PROCEED_WITH_FULL_SCREEN",
  TAB_AUDIO_MODAL_DISCLAIMER: "TAB_AUDIO_MODAL_DISCLAIMER",
  PS: "PS",
  CHECKBOX_MESSAGE: "CHECKBOX_MESSAGE",
  FULL_SCREEN_AUDIO_HEADER: "FULL_SCREEN_AUDIO_HEADER",
  FULL_SCREEN_AUDIO_SUBTEXT: "FULL_SCREEN_AUDIO_SUBTEXT",
  CURRENT_TAB_WITHOUT_TAB_AUDIO: "CURRENT_TAB_WITHOUT_TAB_AUDIO",
  NO_THANKS: "NO_THANKS",
  THANKS_HEADS_UP: "THANKS_HEADS_UP",
  AVOID_TAB_AUDIO_ECHO: "AVOID_TAB_AUDIO_ECHO",
  SURE_THANKS: "SURE_THANKS",
  NEVER_MIND: "NEVER_MIND",
  UPGRADE: "UPGRADE",
  SEE_ALL_PLANS: "SEE_ALL_PLANS",
  NEED_MORE_CUSTOMIZATION: "NEED_MORE_CUSTOMIZATION",
  CURRENT_LIMIT: "CURRENT_LIMIT",
  CONTACT_US: "CONTACT_US",
  S_PLAN_1: "S_PLAN_1",
  S_PLAN_2: "S_PLAN_2",
  S_PLAN_3: "S_PLAN_3",
  S_PLAN_4: "S_PLAN_4",
  S_PLAN_5: "S_PLAN_5",
  S_PLAN_6: "S_PLAN_6",
  S_PLAN_7: "S_PLAN_7",
  S_PLAN_8: "S_PLAN_8",
  T_PLAN_1: "T_PLAN_1",
  T_PLAN_2: "T_PLAN_2",
  T_PLAN_3: "T_PLAN_3",
  T_PLAN_4: "T_PLAN_4",
  T_PLAN_5: "T_PLAN_5",
  T_PLAN_6: "T_PLAN_6",
  HIGH_INTERNET_SPEED: "HIGH_INTERNET_SPEED",
  LOW_INTERNET_SPEED: "LOW_INTERNET_SPEED",
  COPY_LINK: "COPY_LINK",
  SOMETHING_WENT_WRONG: "SOMETHING_WENT_WRONG",
  RELAUNCH_AND_TRY_AGAIN: "RELAUNCH_AND_TRY_AGAIN",
  UPGRADE_UNLIMITED_RECORDING: "UPGRADE_UNLIMITED_RECORDING",
  UNLIMITED_RECORDING_UPGRADE: "UNLIMITED_RECORDING_UPGRADE",
  REACHED_MIN_RECORDING: "REACHED_MIN_RECORDING",
  MINIUTES_LIMIT: "MINIUTES_LIMIT",
  HOURS_LIMIT: "HOURS_LIMIT",
  RECORDING_LIMIT: "RECORDING_LIMIT",
  RESTRICTION_TIME_MSG: "RESTRICTION_TIME_MSG",
  GO_TO_MY_VIDEO: "GO_TO_MY_VIDEO",
  CHOOSE_BACKGROUND: "CHOOSE_BACKGROUND",
  NONE: "NONE",
  UPLOAD: "UPLOAD",
  REMOVE_BG: "REMOVE_BG",
  FOR_UNLIMITED_RECORDING: "FOR_UNLIMITED_RECORDING",
  TAB_AUDIO_TOOLTIP: "TAB_AUDIO_TOOLTIP",
  FULL_SCREEN: "FULL_SCREEN",
  CURRENT_SCREEN: "CURRENT_SCREEN",
  COMPUTER_AUDIO: "COMPUTER_AUDIO",
  ECHO_MODAL: "ECHO_MODAL",
  OK_GOT_IT: "OK_GOT_IT",
  VIRTUAL_CTA: "VIRTUAL_CTA",
  PAUSE_KEY_WINDOWS: "PAUSE_KEY_WINDOWS",
  FINISH_KEY_WINDOWS: "FINISH_KEY_WINDOWS",
  EFFECTS: "EFFECTS",
  FRAMES_TEXT: "FRAMES_TEXT",
  BACKGROUNDS: "BACKGROUNDS",
  ACCESS_DENIED: "ACCESS_DENIED",
  CHROME_UPDATE_ERROR: "CHROME_UPDATE_ERROR",
  ACCESS_ERROR_STEPS: "ACCESS_ERROR_STEPS",
  READ_ACCESS: "READ_ACCESS",
  AUDIO_UPGRADE_TEXT: "AUDIO_UPGRADE_TEXT",
  VIRTUALBG_UPGRADE_TEXT: "VIRTUALBG_UPGRADE_TEXT",
  COM_AUDIO_UPGRADE_TEXT: "COM_AUDIO_UPGRADE_TEXT",
  DRAW_UPGRADE_TEXT: "DRAW_UPGRADE_TEXT",
  UNLIMITED_UPGRADE_TEXT: "UNLIMITED_UPGRADE_TEXT",
  CHOOSE_YOUR_PRICING_PLAN: "CHOOSE_YOUR_PRICING_PLAN",
  LOOKING_FOR_MORE_AWESOME_FEATURE: "LOOKING_FOR_MORE_AWESOME_FEATURE",
  COMPARE_PLANS: "COMPARE_PLANS",
  BLUR: 'BLUR',
  RECORD_WITH_VMAKER: "RECORD_WITH_VMAKER",
  RECORDER_WIDGET: "RECORDER_WIDGET",
  MARKETER: "MARKETER",
  EDUCATOR: "EDUCATOR",
  YOUTUBER: "YOUTUBER",
  FREELANCER: "FREELANCER",
  LEARNING: "LEARNING",
  MANAGER: "MANAGER",
  STUDENT: "STUDENT",
  CEO: "CEO",
  OTHERS: "OTHERS",
  QUICK_VIDEO_MESSAGE: "QUICK_VIDEO_MESSAGE",
  FEEDBACK_VIDEO: "FEEDBACK_VIDEO",
  VIDEO_PROSPECTING_EMAILS: "VIDEO_PROSPECTING_EMAILS",
  TUTORIAL_DEMO_VIDEOS: "TUTORIAL_DEMO_VIDEOS",
  RECORD_ONLINE_CLASS: "RECORD_ONLINE_CLASS",
  CREATE_EDUCATIONAL_VIDEOS: "CREATE_EDUCATIONAL_VIDEOS",
  RECORD_YOUTUBE_VIDEO: "RECORD_YOUTUBE_VIDEO",
  RECORD_GAME_PLAY_VIDEOS: "RECORD_GAME_PLAY_VIDEOS",
  CREATE_VIDEO_RESUME: "CREATE_VIDEO_RESUME",
  RECORD_VIDEO_PRESENTATION: "RECORD_VIDEO_PRESENTATION",
  SELECT_OPTION_CURRENT_ROLE: "SELECT_OPTION_CURRENT_ROLE",
  PURPOSE_LOOKING_FOR_VMAKER: "PURPOSE_LOOKING_FOR_VMAKER",
  SSO: "SSO",
  OR_CONTINUE: "OR_CONTINUE",
  CONTINUE_WITH_SSO: "CONTINUE_WITH_SSO",
  UNSUPPORTED_RESOLUTION_TOOLTIP: "UNSUPPORTED_RESOLUTION_TOOLTIP",
  SELECT_BLUR_AREA: "SELECT_BLUR_AREA",
  CLEAR_ALL: "CLEAR_ALL",
  RESUME_RECORDING: "RESUME_RECORDING",
  OFF_CAMERA: "OFF_CAMERA",
  OFF_MICROPHONE: "OFF_MICROPHONE",
  MONTH_USER: "MONTH_USER",
  YEARLY_USER: "YEARLY_USER",
  PRICING_PAGE: "PRICING_PAGE",
  BOOK_A_DEMO: "BOOK_A_DEMO",
  UPGRADE_PLAN: "UPGRADE_PLAN",
  CUSTOM_REQUIREMENTS: "CUSTOM_REQUIREMENTS",
  ENTERPRISE_PLAN: "ENTERPRISE_PLAN",
  LOOKS_LIKE_OUT_OF_GENERATIVE_CREDITS: "LOOKS_LIKE_OUT_OF_GENERATIVE_CREDITS",
  EXPLOR_ENTERPRISE: "EXPLOR_ENTERPRISE",
  GO_BEYOND_STANDARD: "GO_BEYOND_STANDARD",
  EVERYTHING_IN_TEAMS_PLUS: "EVERYTHING_IN_TEAMS_PLUS",
  UNLIMITED_RECORDING_DURATION: "UNLIMITED_RECORDING_DURATION",
  CUSTOM_STORAGE_LIMITS: "CUSTOM_STORAGE_LIMITS",
  AI_AVATAR_VIDEO_GENERATION: "AI_AVATAR_VIDEO_GENERATION",
  AI_VIDEO_DUBBING: "AI_VIDEO_DUBBING",
  AUTO_SUBTITLES_TRANSLATION: "AUTO_SUBTITLES_TRANSLATION",
  EXPORT_VIDEOS_4K: "EXPORT_VIDEOS_4K",
  SMART_FOCUS_AI: "SMART_FOCUS_AI",
  LLM_INTEGRATION: "LLM_INTEGRATION",
  PRIORITY_SUPPORT: "PRIORITY_SUPPORT",
  BRAND_KIT_CUSTOM_WORKFLOWS: "BRAND_KIT_CUSTOM_WORKFLOWS",
  CAPTURE_AUDIO_COMPUTER_BROWSER: "CAPTURE_AUDIO_COMPUTER_BROWSER",
  UPGRADE_RECORD_HD_QUALITY: "UPGRADE_RECORD_HD_QUALITY",
  UPGRADE_FRAME_BACKGROUND_CUSTOMISATION: "UPGRADE_FRAME_BACKGROUND_CUSTOMISATION",
  BLUR_SENSITIVE_DETAILS: "BLUR_SENSITIVE_DETAILS",
  UPGRADE_BLUR_SENSITIVE_INFO: "UPGRADE_BLUR_SENSITIVE_INFO",
  HIDE_CONTROL_MENU: "HIDE_CONTROL_MENU",
  HIGHLIGHT_CLICKS_GUIDE_VIEWER: "HIGHLIGHT_CLICKS_GUIDE_VIEWER",
  UPGRADE_VMAKER_AI_EXPERIENCE: "UPGRADE_VMAKER_AI_EXPERIENCE",
  CUSTOM_CREDITS_STORAGE_WORKFLOWS: "CUSTOM_CREDITS_STORAGE_WORKFLOWS",
  SCREEN_RECORDING: "SCREEN_RECORDING",
  SYSTEM_AUDIO_RECORDING: "SYSTEM_AUDIO_RECORDING",
  FRAME_BG_CUSTOMIZATION: "FRAME_BG_CUSTOMIZATION",
  BLUR_TOOL: "BLUR_TOOL",
  DISABLE_CONTROL_MENU: "DISABLE_CONTROL_MENU",
  MOUSE_CLICK_HIGHLIGHTS: "MOUSE_CLICK_HIGHLIGHTS",
  MINS_PER_RECORDING: "MINS_PER_RECORDING",
  HOURS: "HOURS",
  INCLUDED: "INCLUDED",
  CUSTOM: "CUSTOM",
  P1080_HD: "P1080_HD",
  P2K_HD: "P2K_HD"
});

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(61);
} else {}


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(70);
} else {}


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return triggerSimpleAjax; });
/* harmony import */ var _Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_chrome_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _getVersion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var _sendMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);

/* eslint-disable camelcase */






const timeoutDuration = 90000;

/**
 * Get access token from local json state and append it to header
 */
const getToken = () => {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    Object(_storage__WEBPACK_IMPORTED_MODULE_6__[/* getData */ "a"])('userDetails', data => {
      const access_token = data.access_token,
        refresh = data.refresh;
      const tokenId = access_token;
      resolve({
        tokenId,
        refresh
      });
    });
  });
};
const logApiDuration = (date1, url) => {
  try {
    const date2 = Date.now();
    const timeDiff = Math.abs(date2 - date1);
    const timeDiffInSecond = timeDiff / 1000;
    Object(_sendMessage__WEBPACK_IMPORTED_MODULE_5__[/* sendDatadogLog */ "b"])('info', "Time taken for this ".concat(url, " api : ").concat(timeDiffInSecond, " Seconds"));
  } catch (e) {
    Object(_sendMessage__WEBPACK_IMPORTED_MODULE_5__[/* sendDatadogLog */ "b"])('e', "Error in duration http helper ".concat(url, " ").concat(e));
  }
};

/**
 * Common function for http call. Replacement for axios
 * @param {*} requestURL
 * @param {*} method
 * @param {*} body
 * @param {*} onSuccess
 * @param {*} onFailure
 * @param {*} customHeader
 * @param {*} requesHeaders
 * @param {*} isHandledError
 */
function triggerSimpleAjax(requestURL) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
  let isFormData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  let onSuccess = arguments.length > 4 ? arguments[4] : undefined;
  let onFailure = arguments.length > 5 ? arguments[5] : undefined;
  let customHeader = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  let requesHeaders = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  let isHandledError = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  let enableToken = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : true;
  const date1 = Date.now();
  let headerObject = {};
  if (!isFormData) {
    headerObject = {
      'Content-Type': 'application/json'
    };
  }
  const requestBody = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, body), {}, {
    product: 'vmaker',
    source: 'vmakerPlugin',
    version: Object(_getVersion__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(),
    unixtime: Math.floor(Date.now() / 1000),
    platform: window.navigator.platform,
    plugin: 1
  });
  if (customHeader && !Object(_lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(customHeader)) {
    headerObject = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, headerObject), customHeader);
  }
  getToken().then(_ref => {
    let tokenId = _ref.tokenId,
      refresh = _ref.refresh;
    if (tokenId && enableToken) {
      headerObject = Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, headerObject), {}, {
        'authorization': "".concat(tokenId, "|").concat(refresh)
      });
    }
    const headers = headerObject;
    const requestDetails = enableToken ? {
      method,
      mode: 'cors',
      credentials: 'include',
      headers
    } : {
      method,
      mode: 'cors',
      headers
    };
    if (method !== 'GET' && !isFormData) requestDetails.body = JSON.stringify(requestBody);
    if (isFormData) {
      const data = new FormData();
      // eslint-disable-next-line array-callback-return
      Object.keys(requestBody).map(key => {
        data.append(key, requestBody[key]);
      });
      requestDetails.body = data;
    }

    /**
     * This promise will start the network request and will return the data from the server
     * or throw errors in case the network request fails
     */
    const request = new Promise((resolve, reject) => {
      node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(requestURL, requesHeaders || requestDetails).then(data => {
        if (data.status === 200 || data.status === 401) {
          return data.json();
        }
        if (data.status === 400 && isHandledError) {
          return data.json().then(result => {
            return Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_akbarbashakm_Documents_Development_Vmaker_Plugin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, result), {}, {
              statusCode: 400
            });
          });
        }
        Object(_sendMessage__WEBPACK_IMPORTED_MODULE_5__[/* sendDatadogLog */ "b"])('error', "API: ".concat(requestURL, " -"), {
          body,
          data
        });
        return reject(data);
      }).then(result => {
        const access_token = result.access_token,
          error = result.error,
          message = result.message,
          errormsg = result.errormsg;
        if (access_token) {
          Object(_storage__WEBPACK_IMPORTED_MODULE_6__[/* setCommonData */ "c"])('userDetails', {
            access_token
          });
        }
        if (error && (message || errormsg || '').indexOf('Token') > -1) {
          // VMK-5576
          Object(_storage__WEBPACK_IMPORTED_MODULE_6__[/* removeData */ "b"])('userDetails');
          Object(_sendMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_constants_chrome_messages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].RELAUNCH_EXTENSION);
          reject(result);
        }
        logApiDuration(date1, requestURL);
        resolve(result);
      }).catch(err => {
        logApiDuration(date1, requestURL);
        Object(_sendMessage__WEBPACK_IMPORTED_MODULE_5__[/* sendDatadogLog */ "b"])('error', "API: ".concat(requestURL, " - "), {
          body,
          err
        });
        reject(err);
      });
    });

    /**
     * Will execute a reject action after the `timeoutDuration`
     * If it executes this will mark the network request as timed out
     */
    const networkTimeOut = reject => {
      return setTimeout(() => {
        const errorObject = Error(JSON.stringify({
          status: "Request timed out!",
          url: requestURL
        }));
        reject(errorObject);
      }, timeoutDuration);
    };

    /**
     * Starts both the timeout and the network request
     * and resolves whichever executes first.
     */
    // eslint-disable-next-line no-new
    new Promise((resolve, reject) => {
      const timeoutId = networkTimeOut(reject);
      request.then(result => {
        clearTimeout(timeoutId);
        onSuccess(result);
        resolve(result);
      }).catch(error => {
        clearTimeout(timeoutId);
        // eslint-disable-next-line no-unused-expressions
        onFailure && onFailure(error);
        reject(error);
      });
    });
  });
}

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* unused harmony export default */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);




function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}
// TODO: We should provide initial value here
var IntlContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"](null);
var IntlConsumer = IntlContext.Consumer, IntlProvider = IntlContext.Provider;
var Provider = IntlProvider;
var Context = IntlContext;
function injectIntl(WrappedComponent, options) {
    var _a = options || {}, _b = _a.intlPropName, intlPropName = _b === void 0 ? 'intl' : _b, _c = _a.forwardRef, forwardRef = _c === void 0 ? false : _c, _d = _a.enforceContext, enforceContext = _d === void 0 ? true : _d;
    var WithIntl = function (props) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IntlConsumer, null, function (intl) {
        var _a;
        if (enforceContext) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* invariantIntlContext */ "c"])(intl);
        }
        var intlProp = (_a = {}, _a[intlPropName] = intl, _a);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, props, intlProp, { ref: forwardRef ? props.forwardedRef : null })));
    })); };
    WithIntl.displayName = "injectIntl(".concat(getDisplayName(WrappedComponent), ")");
    WithIntl.WrappedComponent = WrappedComponent;
    if (forwardRef) {
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WithIntl, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, props, { forwardedRef: ref }))); }), WrappedComponent);
    }
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(WithIntl, WrappedComponent);
}


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(54);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export ServerStyleSheet */
/* unused harmony export StyleSheetConsumer */
/* unused harmony export StyleSheetContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return me; });
/* unused harmony export ThemeConsumer */
/* unused harmony export ThemeContext */
/* unused harmony export ThemeProvider */
/* unused harmony export __PRIVATE__ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Ae; });
/* unused harmony export isStyledComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return We; });
/* unused harmony export useTheme */
/* unused harmony export version */
/* unused harmony export withTheme */
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return"function"==typeof e}function b(e){return false||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&void 0!==Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"})&&(Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).REACT_APP_SC_ATTR||Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).SC_ATTR)||"data-styled",A="5.3.11",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"})&&(void 0!==Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).REACT_APP_SC_DISABLE_SPEEDY&&""!==Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).REACT_APP_SC_DISABLE_SPEEDY?"false"!==Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).REACT_APP_SC_DISABLE_SPEEDY&&Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).REACT_APP_SC_DISABLE_SPEEDY:void 0!==Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).SC_DISABLE_SPEEDY&&""!==Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).SC_DISABLE_SPEEDY?"false"!==Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).SC_DISABLE_SPEEDY&&Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_NODE_ENV":"production","REACT_APP_INBOX_SDK_ID":"sdk_Vmaker_bdb139ed46"}).SC_DISABLE_SPEEDY:"production"!=="production")),P={},O= false?undefined:{};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw true?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):undefined}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return false&&false,T.set(e,t),x.set(t,e),t},B=function(e){return x.get(e)},z=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e)},M="style["+N+'][data-styled-version="5.3.11"]',G=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},F=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),L(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},Y=function(){return true?__webpack_require__.nc:undefined},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.11");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=y({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(y({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=B(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=N+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return(K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!_(n))return!1}return!0}var re=te("5.3.11"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= true&&(void 0===n||n.isStatic)&&ne(e),this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=_e(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, false&&(false);else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](a),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ie.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),ue=ce.Consumer,le=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),de=(le.Consumer,new X),he=ae();function pe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ce)||de}function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(le)||he}function me(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],s=t[1],c=pe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ae({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ce.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(le.Provider,{value:l}, false?undefined:e.children))}var ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ve=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return"-"+e.toLowerCase()};function Ee(e){return ve.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=_e(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return"";if(_(e))return"."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return false&&false,_e(u,n,r,o)}var l;return e instanceof ye?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(Array.isArray(t[i])&&t[i].isCss||E(t[i])?s.push(Ee(i)+":",t[i],";"):g(t[i])?s.push.apply(s,e(t[i],i)):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]||r.startsWith("--")?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(v(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(v(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(false){ var o, n, r; }},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return"string"==typeof e&&( true||false)}var ke=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];ke(t)&&ke(r)?ze(r,t):e[n]=t}function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(ke(i))for(var a in i)Ve(a)&&Be(e,i[a],a)}return e}var Me=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Ge=Me.Consumer;function Le(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return D(14);if(E(e)){var n=e(t);return true?n:undefined}return Array.isArray(e)||"object"!=typeof e?D(8):t?y({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Me.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=_(e),i=!xe(e),a=t.attrs,c=void 0===a?S:a,l=t.componentId,d=void 0===l?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.11"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):l,h=t.displayName,p=void 0===h?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):h,v=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||d,g=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,N=t.shouldForwardProp;o&&e.shouldForwardProp&&(N=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var A,C=new oe(n,v,o?e.componentStyle:void 0),I=C.isStatic&&0===c.length,P=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,d=e.styledComponentId,h=e.target,p=function(e,t,n){void 0===e&&(e=w);var r=y({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Oe(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me),a)||w,t,o),m=p[0],v=p[1],g=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return false&&false,i}(i,r,m, false?undefined:void 0),S=n,b=v.$as||t.$as||v.as||t.as||h,_=xe(b),N=v!==t?y({},t,{},v):t,A={};for(var C in N)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?A.as=N[C]:(l?l(C,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],b):!_||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(C))&&(A[C]=N[C]));return t.style&&v.style!==t.style&&(A.style=y({},t.style,{},v.style)),A.className=Array.prototype.concat(c,d,g!==d?g:null,t.className,v.className).filter(Boolean).join(" "),A.ref=S,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(b,A)}(A,e,t,I)};return P.displayName=p,(A=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(P)).attrs=g,A.componentStyle=C,A.displayName=p,A.shouldForwardProp=N,A.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,A.styledComponentId=v,A.target=o?e.target:e,A.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,y({},o,{attrs:g,componentId:s}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?ze({},e.defaultProps,t):t}}), false&&(false),Object.defineProperty(A,"toString",{value:function(){return"."+A.styledComponentId}}),i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return D(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,y({},o,{},n))},s.attrs=function(n){return e(t,r,y({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ne(e),X.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(_e(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&X.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(i)),u=new He(i,a);function d(e){var t=pe(),n=fe(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me),d=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return false&&false, false&&false,t.server&&h(d,e,t,o,n),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){if(!t.server)return h(d,e,t,o,n),function(){return u.removeStyles(d,t)}}),[d,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,P,n,o);else{var s=y({},t,{theme:Oe(t,r,d.defaultProps)});u.renderStyles(e,s,n,o)}}return false&&false,react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(d)}function We(e){ false&&false;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ye(s,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Y();return"<style "+[n&&'nonce="'+n+'"',N+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?D(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return D(2);var n=((t={})[N]="",t["data-styled-version"]="5.3.11",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=Y();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",y({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new X({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?D(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(me,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return D(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me),i=e.defaultProps,a=Oe(t,o,i);return false&&false,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,y({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+b(e)+")",t},Xe=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me)},Ze={StyleSheet:X,masterSheet:de}; false&&false, false&&(false);/* harmony default export */ __webpack_exports__["d"] = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(57)))

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ isPropValid; });

// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}



// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js


// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PART_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFormatXMLElementFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatToParts; });
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isLiteralElement */ "e"])(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isLiteralElement */ "e"])(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isPoundElement */ "i"])(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* MissingValueError */ "e"](varName, originalMessage);
        }
        var value = values[varName];
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isArgumentElement */ "b"])(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isDateElement */ "c"])(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isDateTimeSkeleton */ "d"])(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isTimeElement */ "l"])(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isDateTimeSkeleton */ "d"])(el.style)
                    ? el.style.parsedOptions
                    : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isNumberElement */ "f"])(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isNumberSkeleton */ "g"])(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isTagElement */ "k"])(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* InvalidValueTypeError */ "d"](value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isSelectElement */ "j"])(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* InvalidValueError */ "c"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__[/* isPluralElement */ "h"])(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* FormatError */ "b"]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", _error__WEBPACK_IMPORTED_MODULE_1__[/* ErrorCode */ "a"].MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* InvalidValueError */ "c"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["a"] = (stylis_min);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["a"] = (unitlessKeys);


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable global-require */



if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(53).enable();
  window.Promise = __webpack_require__(55);
}

// fetch() polyfill for making API calls.
__webpack_require__(56);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {}


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(39);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(39);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var global = (function(self) {
  return self
  // eslint-disable-next-line no-invalid-this
})(typeof self !== 'undefined' ? self : undefined)
var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : ''
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException

if (typeof DOMException !== 'function') {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 58:
/***/ (function(module) {

module.exports = JSON.parse("{\"START_RECORDING\":\"Start Recording\",\"STOP_RECORDING\":\"Stop Recording\",\"SIGN_UP\":\"Sign Up\",\"SIGN_IN\":\"Sign In\",\"VMAKER\":\"Vmaker\",\"OR\":\"Or\",\"RESERVED\":\"[content], Animaker, Inc. All Rights Reserved\",\"ABOUT\":\"About\",\"EMAIL_REQUIRED\":\"Email id is required\",\"USERNAME_NOT_VALID\":\"Username is not valid\",\"EMAIL_NOT_VALID\":\"Email id is not valid\",\"FORGOT_PASSWORD\":\"Forgot Password?\",\"EMAIL_FORM\":\"Enter your registered email\",\"RECOVER_EMAIL\":\"Enter your registered email address\",\"ALREDY_HAVE_ACC\":\"Already have an account? \",\"SUBMIT\":\"Submit\",\"SWITCH_TEAM\":\"Switch team\",\"SIGN_OUT\":\"Sign out\",\"QUIT\":\"Quit\",\"VIEW_PLANS\":\"View plans\",\"CHECK_UPDATE\":\"Check for update\",\"GET_LOGS\":\"Get Vmaker logs\",\"MY_VIDEOS\":\"My videos\",\"PREFERENCES\":\"Preferences\",\"CUSTOM_SIZE\":\"Custom Size\",\"RECORD_CURRENT_TAB\":\"Current tab recording\",\"FULL_SCREEN_RECORD\":\"Full screen recording\",\"CAM_ONLY\":\"Webcam\",\"SCREEN_ONLY\":\"Screen\",\"SCREEN_AND_CAM\":\"Screen + Webcam\",\"FIELDS_MANDATORY\":\"All fields are mandatory\",\"RETRY\":\"Retry\",\"NO_NET_MSG\":\"Looks like you are disconnected from the internet\",\"OOPS\":\"Oops\",\"CAMERA\":\"Camera\",\"AUDIO\":\"Audio\",\"RECORDING_QUALITY\":\"Recording Quality\",\"CANCEL_RECORDING_TEXT\":\"Cancel Recording\",\"SERVER_ERROR\":\"Server Error\",\"RECORDING_STOPPED\":\"Your recording has been stopped due to Server Error.\",\"SUPPORT_TEAM\":\"Please Contact Support Team.\",\"RESUME\":\"Resume\",\"CANCEL\":\"Cancel\",\"PASSWORD\":\"Password\",\"EMAIL_ADDRESS\":\"Email Address\",\"SIGN_IN_HEADER_TEXT\":\"It’s been a while\",\"ALL_FIELDS_MANDATORY\":\"All the fields are mandatory\",\"START_CONTENT\":\"Let's get started\",\"NAME\":\"Name\",\"AGREE1\":\"By signing up, you agree to our terms\",\"AGREE2\":\"of service and privacy policy.\",\"ACTIVATION_LINK\":\"Activation Link\",\"NEW_TO_VMAKER\":\"New to Vmaker?\",\"HELLO_THERE\":\"Hello there!\",\"WELCOME\":\"Hey there, it’s been a while!\",\"VMAKER_BUTTON_TEXT\":\"Record Vmaker Video\",\"EMAIL\":\"Email\",\"GOOGLE\":\"Google\",\"FACEBOOK\":\"Facebook\",\"RECORD_NEW_VIDEO\":\"Record a new video\",\"INSERT_LAST_RECORDING\":\"Insert last recording\",\"INSERT_RECORDING\":\"Insert Recording\",\"VIDEO_TITLE\":\"Video Title\",\"VIDEO_LINK_DEFAULT_TITLE\":\"Vmaker Recording\",\"CREATE_WORKSPACE\":\"Create workspace\",\"MUTE_RECORDING_HEADER\":\"Your microphone is muted\",\"NEW_VERSION\":\"New version\",\"AVAILABLE\":\"of Vmaker available now\",\"UPDATE_AVAILABLE_SUBTEXT\":\"Click Okay to proceed with the update\",\"UPDATE_NOW\":\"Update Now\",\"UPDATE_NOT_AVAILABLE\":\"Vmaker is up to date\",\"MUTE_RECORDING_SUBTEXT\":\"You cannot record your voice on mute. Do you want to proceed anyway?\",\"CANCEL_MUTE_ACTION\":\"No, let's unmute\",\"PROCEED\":\"Yes, Proceed \",\"OKAY\":\"Okay\",\"ERROR_HEADER\":\"Error\",\"DONE\":\"Done\",\"DELETE\":\"Delete\",\"RECORD\":\"Record\",\"VIDEO_STREAM_ENDED_HEADER\":\"Video stream has ended\",\"VIDEO_STREAM_ENDED_TEXT\":\"Relaunch all open browsers and retry\",\"VIDEO_NOT_UPLOADED\":\"Your recent recorded video is not uploaded properly.\",\"DOWNLOAD_LOCALLY\":\"Please proceed download locally.\",\"DOWNLOAD_FAILED\":\"Something went wrong with the download\",\"STREAM_ERROR\":\"Recording stream error. Please relaunch the application and try again\",\"DOWNLOAD\":\"Download\",\"DONT_RECORD\":\"Don't Record\",\"ABOUT_VMAKER\":\"About Vmaker\",\"QUIT_VMAKER\":\"Quit Vmaker\",\"TEAM_NOT_SELECTED\":\"Team Information is Missing\",\"TRY_AGAIN\":\"Please try again later.\",\"DENIED_ACCESS\":\"Looks like you denied access\",\"MIC_RE_ACCESS\":\"Allow access to your Mic by adjusting your media settings in the URL. Once done, Relaunch the application. Else proceed the recording without sound\",\"CAMERA_RE_ACCESS\":\"Allow access to your Camera by adjusting your media settings in the URL. Once done,\",\"RE_LAUNCH\":\"Please relaunch the application\",\"RELAUNCH_EXTENISON\":\"Relaunch\",\"RECORD_NOW\":\"Record Now\",\"NO_MIC_HEADER\":\"No Microphone Detected\",\"NO_MIC\":\"No Microphone\",\"NO_MIC_TEXT\":\"If you want to proceed recording without audio, click Record Now. Else Relaunch the application\",\"POPUP_TEXT_1\":\"Vmaker for chrome has successfully installed!\",\"POPUP_TEXT_2\":\"Click the\",\"POPUP_TEXT_3\":\"Icon above to pin Vmaker for\",\"POPUP_TEXT_4\":\"Easy access\",\"GOT_IT\":\"Got it!\",\"FRAME\":\"Frame\",\"SHAPE\":\"Shape\",\"CHOOSE_FRAME\":\"Choose Frames\",\"FRAME_TEXT\":\"Frame Text\",\"FRAME_TEXT_INPUT_PLACEHOLDER\":\"Your Text\",\"FRAME_TEXT_DEFAULT_TEXT\":\"YOUR TEXT\",\"SILHOUETTE\":\"Silhouette\",\"RESET_ALL\":\"Reset All\",\"CAMERA_OPTIONS\":\"Camera Options\",\"COLORS\":\"Colors\",\"FONT\":\"Font\",\"BACKGROUND\":\"Background\",\"ALMOST_THERE\":\"You're almost there!\",\"FORGOT_CONFIRM\":\"We've emailed you a link to reset the password. Please check the spam or promotion folder, if you couldn't find it in your inbox.\",\"SYSTEM_AUDIO\":\"Include tab audio\",\"RECORDING_COUNTDOWN\":\"Recording countdown\",\"HIGHLIGHT_CLICKS\":\"Highlight mouse clicks\",\"FLIP_CAMERA\":\"Flip camera\",\"ZOOM_EFFECT\":\"Enable zoom effects\",\"CONTROL_MENU\":\"Show control menu\",\"AUDIO_IN_MONO\":\"Record audio in mono\",\"NOISE_CONTROL\":\"Noise control\",\"SENSITIVE_INFO\":\"Blur sensitive info\",\"ENABLE_DND\":\"Enable DND\",\"SHOW_DOCK\":\"Show dock icon\",\"LAUNCH_STARTUP\":\"Launch at startup\",\"AUTO_UPDATE\":\"Enable auto update\",\"AUTO\":\"Auto\",\"PAUSE_KEY\":\"Pause ⇧⌘1\",\"FINISH_KEY\":\"Finish ⇧⌘2\",\"STOP_RECORD_WIN_KEY\":\"Stop ⇧ Ctrl 2\",\"STOP_RECORD_MAC_KEY\":\"Stop ⇧ ⌘ 2\",\"PAUSE_RECORD_WIN_KEY\":\"Pause ⇧ Ctrl 1\",\"PAUSE_RECORD_MAC_KEY\":\"Pause ⇧ ⌘ 1\",\"RESUME_RECORD_WIN_KEY\":\"Resume ⇧ Ctrl 1\",\"RESUME_RECORD_MAC_KEY\":\"Resume ⇧ ⌘ 1\",\"MUTE_RECORD_WIN_KEY\":\"Mute ⇧ Ctrl U\",\"MUTE_RECORD_MAC_KEY\":\"Mute ⇧ ⌘ U\",\"UNMUTE_RECORD_WIN_KEY\":\"Unmute ⇧ Ctrl U\",\"UNMUTE_RECORD_MAC_KEY\":\"Unmute ⇧ ⌘ U\",\"CANCEL_RECORD_WIN_KEY\":\"Cancel ⇧ Ctrl X\",\"CANCEL_RECORD_MAC_KEY\":\"Cancel ⇧ ⌘ X\",\"DRAW\":\"Draw\",\"WITH\":\"With\",\"VIDEO_RECORDING_QUALITY\":\"Recording quality\",\"TIMER_HEADER\":\"Do you still wish to continue recording?\",\"TIMER_CONTENT\":\"You have been recording for a while now. If you wish to continue, click on the continue button. Else click on stop recording\",\"CONTINUE\":\"Continue\",\"TIMER_NOTE\":\"PS: If you do not respond within the next five minute then the recording will automatically end\",\"LANGUAGE\":\"Language\",\"TAB_AUDIO_MODAL_HEADER\":\"Hey, you can also add system audio to your screen recording\",\"TAB_AUDIO_MODAL_TEXT\":\"To add it, switch to Current Tab recording. Right now system audio is not supported for Full Screen recordings\",\"PROCEED_WITH_CURRENT_TAB\":\"Record Current Tab\",\"PROCEED_WITH_FULL_SCREEN\":\"Record Full Screen\",\"PS\":\"PS:\",\"TAB_AUDIO_MODAL_DISCLAIMER\":\"Before you start recording, head over to Preferences and switch on Include tab audio\",\"CHECKBOX_MESSAGE\":\"Don’t show this message again\",\"FULL_SCREEN_AUDIO_HEADER\":\"You have chosen to record the full screen. Please note you wouldn’t be able to record the tab audio.\",\"FULL_SCREEN_AUDIO_SUBTEXT\":\"To record tab audio, switch to current tab recording and enable “Include tab audio” under preferences.\",\"CURRENT_TAB_WITHOUT_TAB_AUDIO\":\"If you are trying to record tab audio, ensure you enable “Include tab audio” under preferences.\",\"NO_THANKS\":\"No, Thanks\",\"THANKS_HEADS_UP\":\"Sure 👍🏼\",\"AVOID_TAB_AUDIO_ECHO\":\"You have enabled tab audio. For best experience, we would recommend using an alternate audio source in order to avoid echo in the final output.\",\"SURE_THANKS\":\"Sure, Thanks\",\"NEVER_MIND\":\"Never mind\",\"UPGRADE\":\"Upgrade\",\"CURRENT_LIMIT\":\"Current limit:\",\"S_PLAN_1\":\"Everything in lite, plus\",\"S_PLAN_2\":\"Screen annotate & mouse emphasis\",\"S_PLAN_3\":\"Screen record for 30 mins\",\"S_PLAN_4\":\"Hide control menu\",\"S_PLAN_5\":\"Blur sensitive info\",\"S_PLAN_6\":\"Record computer audio\",\"S_PLAN_7\":\"Custom frames and background\",\"S_PLAN_8\":\"Advanced privacy\",\"T_PLAN_1\":\"Everything in Starter, plus\",\"T_PLAN_2\":\"Branded video page\",\"T_PLAN_3\":\"Screen record for 4 hours\",\"T_PLAN_4\":\"Custom sub-domain\",\"T_PLAN_5\":\"Advanced editing capabilities\",\"T_PLAN_6\":\"Video Background removal\",\"CHECK_PENDING\":\"Check for pending\",\"SEE_ALL_PLANS\":\"See all Plans\",\"NEED_MORE_CUSTOMIZATION\":\"Need more customization? \",\"CONTACT_US\":\"Contact Us\",\"HIGH_INTERNET_SPEED\":\"Cheers! Your internet connection is good.\",\"LOW_INTERNET_SPEED\":\"Oops! Looks like your internet is weak.\",\"COPY_LINK\":\"Copy Link\",\"SOMETHING_WENT_WRONG\":\"Something went wrong\",\"RELAUNCH_AND_TRY_AGAIN\":\"Please relaunch the application and try again\",\"UPGRADE_UNLIMITED_RECORDING\":\" Upgrade for unlimited recording.\",\"UNLIMITED_RECORDING_UPGRADE\":\"Upgrade to Vmaker premium plans for unlimited recording time.\",\"REACHED_MIN_RECORDING\":\"You’ve reached the [content] minute recording time.\",\"MINIUTES_LIMIT\":\"[content] min. \",\"HOURS_LIMIT\":\"[content] hours\",\"RECORDING_LIMIT\":\"[content] minute recording limit\",\"RESTRICTION_TIME_MSG\":\"Your recording will complete once you reach the limit.\",\"GO_TO_MY_VIDEO\":\"Go to my video\",\"CHOOSE_BACKGROUND\":\"Choose Background\",\"NONE\":\"None\",\"UPLOAD\":\"Upload\",\"REMOVE_BG\":\"Remove BG\",\"FOR_UNLIMITED_RECORDING\":\"to extend\",\"TAB_AUDIO_TOOLTIP\":\"Switch to Current Tab for recording computer audio\",\"TAB_AUDIO_TOOLTIP_WHEN_EXTERNAL_SOURCE\":\"Relaunch plugin from address bar to enable computer audio\",\"FULL_SCREEN\":\"Full screen\",\"CURRENT_SCREEN\":\"Current tab\",\"COMPUTER_AUDIO\":\"Computer Audio (Enable for meeting)\",\"ECHO_MODAL\":\"To avoid echo in audio output, use headphones with mic\",\"OK_GOT_IT\":\"Ok, Got it\",\"VIRTUAL_CTA\":\"Now try virtual backgrounds here!\",\"PAUSE_KEY_WINDOWS\":\"Pause ⇧ Ctrl 1\",\"FINISH_KEY_WINDOWS\":\"Finish ⇧ Ctrl 2\",\"EFFECTS\":\"Effects\",\"FRAMES_TEXT\":\"Frames\",\"BACKGROUNDS\":\"Backgrounds\",\"ACCESS_DENIED\":\"Access Denied\",\"CHROME_UPDATE_ERROR\":\"You are seeing this because of the latest Chrome update.\",\"ACCESS_ERROR_STEPS\":\"Note: Chrome's permission to record screen has been revoked.\",\"READ_ACCESS\":\"Read: how to give permission\",\"AUDIO_UPGRADE_TEXT\":\"Unlock unlimited recording duration\",\"VIRTUALBG_UPGRADE_TEXT\":\"<b>Add</b> a  <b>frame</b> to your <b>webcam</b> overlay\",\"COM_AUDIO_UPGRADE_TEXT\":\"<b>Record computer audio</b> when using <b>headphones</b>\",\"DRAW_UPGRADE_TEXT\":\"<b>Draw</b> on the <b>screen while you record</b>\",\"UNLIMITED_UPGRADE_TEXT\":\"Extend <b>recording <br/> duration</b>\",\"CHOOSE_YOUR_PRICING_PLAN\":\"Choose your pricing plan!\",\"LOOKING_FOR_MORE_AWESOME_FEATURE\":\"Looking for more awesome features? Switch to our Enterprise Plan!\",\"COMPARE_PLANS\":\"Compare plans\",\"BLUR\":\"Blur\",\"RECORD_WITH_VMAKER\":\"Record this meeting\",\"RECORDER_WIDGET\":\"Recorder widget\",\"MARKETER\":\"I am a Marketer / Sales person\",\"EDUCATOR\":\"I am an Educator\",\"YOUTUBER\":\"I am a YouTuber\",\"FREELANCER\":\"I am a Freelancer\",\"LEARNING\":\"I am into Learning & Development\",\"MANAGER\":\"I am a Manager / Team Lead\",\"STUDENT\":\"I am a Student\",\"CEO\":\"I am a CEO / Founder\",\"OTHERS\":\"Others\",\"VIDEO_PROSPECTING_EMAILS\":\"Video prospecting through email\",\"TUTORIAL_DEMO_VIDEOS\":\"Create tutorial / demo videos\",\"RECORD_ONLINE_CLASS\":\"Record online meeting / classes\",\"CREATE_EDUCATIONAL_VIDEOS\":\"Create educational videos\",\"RECORD_YOUTUBE_VIDEO\":\"Record videos for YouTube\",\"RECORD_GAME_PLAY_VIDEOS\":\"Record game play videos\",\"CREATE_VIDEO_RESUME\":\"Create video resume\",\"RECORD_VIDEO_PRESENTATION\":\"Record video presentation\",\"SELECT_OPTION_CURRENT_ROLE\":\"Select the option that best describes your current role\",\"PURPOSE_LOOKING_FOR_VMAKER\":\"What purpose are you looking to use Vmaker for?\",\"CANCEL_CONFIRMATION\":\"Are you sure you want to cancel the recording?\",\"SSO\":\"SSO\",\"OR_CONTINUE\":\"Or Continue\",\"CONTINUE_WITH_SSO\":\"Continue with SSO\",\"UNSUPPORTED_RESOLUTION_TOOLTIP\":\"Not supported by your display\",\"CLEAR_ALL\":\"Clear all\",\"SELECT_BLUR_AREA\":\"Select the area to be blurred\",\"RESUME_RECORDING\":\"Resume Recording\",\"OFF_CAMERA\":\"Off camera\",\"OFF_MICROPHONE\":\"Off Microphone\",\"LOOKS_LIKE_OUT_OF_GENERATIVE_CREDITS\":\"Looks like out of generative credits\",\"BOOK_A_DEMO\":\"Book a Demo\",\"MONTH_USER\":\"/month\",\"YEARLY_USER\":\"/year\",\"PRICING_PAGE\":\"Pricing page\",\"UPGRADE_PLAN\":\"Upgrade\",\"CUSTOM_REQUIREMENTS\":\"Have custom requirements?\",\"ENTERPRISE_PLAN\":\"Enterprise Plan\",\"EXPLOR_ENTERPRISE\":\"Custom requirements? Explore our enterprise\",\"GO_BEYOND_STANDARD\":\"Go beyond the standard with larger pool of credits and custom features.\",\"EVERYTHING_IN_TEAMS_PLUS\":\"Everything in Teams, plus\",\"UNLIMITED_RECORDING_DURATION\":\"Unlimited Recording Duration\",\"CUSTOM_STORAGE_LIMITS\":\"Custom storage limits\",\"AI_AVATAR_VIDEO_GENERATION\":\"AI Avatar video generation (custom credits)\",\"AI_VIDEO_DUBBING\":\"AI Video Dubbing\",\"AUTO_SUBTITLES_TRANSLATION\":\"Auto subtitles & translation (custom credits)\",\"EXPORT_VIDEOS_4K\":\"Export videos in up to 4K quality\",\"SMART_FOCUS_AI\":\"Smart Focus AI\",\"LLM_INTEGRATION\":\"LLM Integration\",\"PRIORITY_SUPPORT\":\"Priority support\",\"BRAND_KIT_CUSTOM_WORKFLOWS\":\"Brand kit & custom workflows\",\"CAPTURE_AUDIO_COMPUTER_BROWSER\":\"Capture audio from computer and browser directly\",\"UPGRADE_RECORD_HD_QUALITY\":\"Upgrade to record in HD quality\",\"UPGRADE_FRAME_BACKGROUND_CUSTOMISATION\":\"Upgrade for frame and background customisation\",\"BLUR_SENSITIVE_DETAILS\":\"Blur sensitive details as you record\",\"UPGRADE_BLUR_SENSITIVE_INFO\":\"Upgrade to blur sensitive information\",\"HIDE_CONTROL_MENU\":\"Upgrade to hide control menu\",\"HIGHLIGHT_CLICKS_GUIDE_VIEWER\":\"Highlight clicks to guide viewer attention\",\"UPGRADE_VMAKER_AI_EXPERIENCE\":\"Upgrade your Vmaker AI Experience\",\"CUSTOM_CREDITS_STORAGE_WORKFLOWS\":\"Custom credits, storage, and workflows based on your needs.\",\"SCREEN_RECORDING\":\"Screen Recording\",\"SYSTEM_AUDIO_RECORDING\":\"System audio recording\",\"FRAME_BG_CUSTOMIZATION\":\"Frame / BG customization\",\"BLUR_TOOL\":\"Blur tool\",\"DISABLE_CONTROL_MENU\":\"Disable control menu\",\"MOUSE_CLICK_HIGHLIGHTS\":\"Mouse click highlights\",\"MINS_PER_RECORDING\":\"30 mins/recording\",\"HOURS\":\"4 Hours/recording\",\"INCLUDED\":\"Included\",\"CUSTOM\":\"Custom\",\"P1080_HD\":\"1080p HD\",\"P2K_HD\":\"2K HD\"}");

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVersion; });
/* global chrome */

/**
 * Returns extension version from manifest.json 
 * @returns 
 */
function getVersion() {
  try {
    return chrome.runtime.getManifest().version;
  } catch (e) {
    return '1.0.0';
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(40),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),m=__webpack_require__(40),r=__webpack_require__(62);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(63);
} else {}


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
module.exports = __webpack_require__(704);


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IntlErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UnsupportedFormatterError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InvalidConfigError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MissingDataError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IntlFormatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MessageFormatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MissingTranslationError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var IntlErrorCode;
(function (IntlErrorCode) {
    IntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
    IntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
    IntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
    IntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
    IntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
})(IntlErrorCode || (IntlErrorCode = {}));
var IntlError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(IntlError, _super);
    function IntlError(code, message, exception) {
        var _this = this;
        var err = exception
            ? exception instanceof Error
                ? exception
                : new Error(String(exception))
            : undefined;
        _this = _super.call(this, "[@formatjs/intl Error ".concat(code, "] ").concat(message, " \n").concat(err ? "\n".concat(err.message, "\n").concat(err.stack) : '')) || this;
        _this.code = code;
        // @ts-ignore just so we don't need to declare dep on @types/node
        if (typeof Error.captureStackTrace === 'function') {
            // @ts-ignore just so we don't need to declare dep on @types/node
            Error.captureStackTrace(_this, IntlError);
        }
        return _this;
    }
    return IntlError;
}(Error));

var UnsupportedFormatterError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(UnsupportedFormatterError, _super);
    function UnsupportedFormatterError(message, exception) {
        return _super.call(this, IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception) || this;
    }
    return UnsupportedFormatterError;
}(IntlError));

var InvalidConfigError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(InvalidConfigError, _super);
    function InvalidConfigError(message, exception) {
        return _super.call(this, IntlErrorCode.INVALID_CONFIG, message, exception) || this;
    }
    return InvalidConfigError;
}(IntlError));

var MissingDataError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(MissingDataError, _super);
    function MissingDataError(message, exception) {
        return _super.call(this, IntlErrorCode.MISSING_DATA, message, exception) || this;
    }
    return MissingDataError;
}(IntlError));

var IntlFormatError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(IntlFormatError, _super);
    function IntlFormatError(message, locale, exception) {
        return _super.call(this, IntlErrorCode.FORMAT_ERROR, "".concat(message, " \nLocale: ").concat(locale, "\n"), exception) || this;
    }
    return IntlFormatError;
}(IntlError));

var MessageFormatError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(MessageFormatError, _super);
    function MessageFormatError(message, locale, descriptor, exception) {
        var _this = _super.call(this, "".concat(message, " \nMessageID: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.id, "\nDefault Message: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.defaultMessage, "\nDescription: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.description, " \n"), locale, exception) || this;
        _this.descriptor = descriptor;
        return _this;
    }
    return MessageFormatError;
}(IntlFormatError));

var MissingTranslationError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(MissingTranslationError, _super);
    function MissingTranslationError(descriptor, locale) {
        var _this = _super.call(this, IntlErrorCode.MISSING_TRANSLATION, "Missing message: \"".concat(descriptor.id, "\" for locale \"").concat(locale, "\", using ").concat(descriptor.defaultMessage ? 'default message' : 'id', " as fallback.")) || this;
        _this.descriptor = descriptor;
        return _this;
    }
    return MissingTranslationError;
}(IntlError));



/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(31);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/provider.js + 8 modules
var provider = __webpack_require__(86);

// EXTERNAL MODULE: ./src/utils/helper/sendMessage.js
var sendMessage = __webpack_require__(8);

// EXTERNAL MODULE: ./src/constants/chrome-messages.js
var chrome_messages = __webpack_require__(9);

// EXTERNAL MODULE: ./src/constants/app-content.js
var app_content = __webpack_require__(3);

// EXTERNAL MODULE: ./src/utils/common-component/Vmaker-logo.js
var Vmaker_logo = __webpack_require__(76);

// EXTERNAL MODULE: ./src/utils/theme/colors.js
var colors = __webpack_require__(1);

// CONCATENATED MODULE: ./src/assets/gmail-cam.png
/* harmony default export */ var gmail_cam = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAADAAAAADBhQ6EAAAAsklEQVQoFd2SMQ7CMAxFv6OwM8BOZoa2JwBuwA3oTYCTUI7ASQjiAOlehjI3ikmGSCgTJUx4+bJjP/04ofnNNADtMCYYemDe9JXq0zExGhYIhFJKlClsdjdrmRa/yadXs5BEJ3LIAwbQhMQexHU0kuVQCjQAryIsqN/hb+PPgdZhy+Dj+9Kyrhw+9qNQh8Gx8o9zDuAsYHTmwW1XqBqSKxEsM/MzHn6ifuZiLXTa2y2VfgFhsTakHFxhlAAAAABJRU5ErkJggg==");
// CONCATENATED MODULE: ./src/assets/gmail-insert.png
/* harmony default export */ var gmail_insert = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAALCAYAAACUPhZAAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAF6ADAAQAAAABAAAACwAAAAAgP4kQAAABnElEQVQoFY1SQVLCUAxNymctM+Dadu1o4QZwArgBcAK4gXoDOAEcgRuIJwD0AK1rykzXUhvzPv3aGaryF01+Xn6Svjym4rTeoi598oSZBi7mrAilmUgn7QRxcxfNPOKJw76tUCzMyyzP55qXIu7h03yNRpzzc1Vh4ETCJ/vHl8lnksc686axiXxkMiZGYVxykrlnaLm/Dba4X3q0WKNWI61DM2a+0T9dJ22/x61dtGLiPgofwmB6acGqPDQxTLE2uBJPeupzH4mYuPxAmz4q9lCOnfnK81Gkh10AA9fXOqy6Q6WhazkHcPwguwT4xWk751erPBtDfhnPtYe7GxLZEXNoPKuSmQOSMBhYBblAhc0yitPwNDVg0OKJMqHrVwlsGUrRwAJyU57Gh/tgVVHn39CJb15AcSLyngm1rcSUp6UKZ4gKaKJmC790oPMxOC1ka3MdrkUaOm3b3bHM5C5YGwT2YTDSBcYkNNVNNzTURbx86nV60vvWE8X4HEeukLywoWlSSNlOXi5SxTN7lDrt2983P1O6t5b/QjUu9gVvKal2DM4FlgAAAABJRU5ErkJggg==");
// EXTERNAL MODULE: ./src/utils/common-component/Typography.js
var Typography = __webpack_require__(12);

// EXTERNAL MODULE: ./src/utils/helper/httpHelper.js
var httpHelper = __webpack_require__(34);

// EXTERNAL MODULE: ./src/static/lang/en.json
var en = __webpack_require__(58);

// CONCATENATED MODULE: ./src/utils/common-component/Spinner.js

var _templateObject, _templateObject2, _templateObject3;




// Ring spinner animation
const ldsRingAnimation = Object(styled_components_browser_esm["e" /* keyframes */])(_templateObject || (_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n"])));
const StyledRing = styled_components_browser_esm["d" /* default */].div(_templateObject2 || (_templateObject2 = Object(taggedTemplateLiteral["a" /* default */])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 100%;\n"])));
const StyledRingElement = styled_components_browser_esm["d" /* default */].div(_templateObject3 || (_templateObject3 = Object(taggedTemplateLiteral["a" /* default */])(["\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  margin: 8px;\n  border: 3px solid ", ";\n  border-radius: 50%;\n  animation: ", " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: ", " transparent transparent transparent;\n\n  &:nth-child(1) { animation-delay: -0.45s; }\n  &:nth-child(2) { animation-delay: -0.3s; }\n  &:nth-child(3) { animation-delay: -0.15s; }\n"])), props => props.spinColor || colors["zb" /* tilehighlight */], ldsRingAnimation, props => props.spinColor || colors["zb" /* tilehighlight */]);
const Spinner = _ref => {
  let spinnerHeight = _ref.spinnerHeight,
    spinColor = _ref.spinColor;
  return /*#__PURE__*/react_default.a.createElement(StyledRing, {
    spinnerHeight: spinnerHeight
  }, /*#__PURE__*/react_default.a.createElement(StyledRingElement, {
    spinColor: spinColor
  }), /*#__PURE__*/react_default.a.createElement(StyledRingElement, {
    spinColor: spinColor
  }), /*#__PURE__*/react_default.a.createElement(StyledRingElement, {
    spinColor: spinColor
  }));
};
/* harmony default export */ var common_component_Spinner = (Spinner);
// CONCATENATED MODULE: ./src/content-scripts/gmail-content.js



var gmail_content_templateObject, gmail_content_templateObject2, gmail_content_templateObject3, _templateObject4, _templateObject5;
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */















const OPEN_FROM_EXTERNAL_BUTTON = chrome_messages["a" /* default */].OPEN_FROM_EXTERNAL_BUTTON,
  INSERT_LAST_RECORDING_IN_GMAIL = chrome_messages["a" /* default */].INSERT_LAST_RECORDING_IN_GMAIL,
  INSERT_LINK_IN_GMAIL = chrome_messages["a" /* default */].INSERT_LINK_IN_GMAIL,
  GET_HOVER_MODAL_DATA = chrome_messages["a" /* default */].GET_HOVER_MODAL_DATA;
const INSERT_LAST_RECORDING = app_content["a" /* default */].INSERT_LAST_RECORDING,
  RECORD_NEW_VIDEO = app_content["a" /* default */].RECORD_NEW_VIDEO,
  VIDEO_LINK_DEFAULT_TITLE = app_content["a" /* default */].VIDEO_LINK_DEFAULT_TITLE;
function getGmailEditable() {
  let el = document.querySelector('div[role="textbox"][contenteditable="true"]');
  if (!el) el = document.querySelector('[aria-label="Message Body"][contenteditable="true"]');
  if (!el) {
    const dialogs = document.querySelectorAll('div[role="dialog"]');
    dialogs.forEach(d => {
      if (!el) {
        const c = d.querySelector('div[role="textbox"][contenteditable="true"]') || d.querySelector('[aria-label="Message Body"][contenteditable="true"]');
        if (c) el = c;
      }
    });
  }
  return el;
}
function secureInsertHTML(html) {
  const body = getGmailEditable();
  if (!body) return;
  body.focus();
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  const ref = body.firstChild;
  let lastInserted = null;
  while (wrapper.firstChild) {
    const node = wrapper.firstChild;
    if (ref) body.insertBefore(node, ref);else body.appendChild(node);
    lastInserted = node;
  }
  const selection = window.getSelection();
  if (lastInserted && selection) {
    const range = document.createRange();
    range.setStartAfter(lastInserted);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
const Option = styled_components_browser_esm["d" /* default */].div(gmail_content_templateObject || (gmail_content_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n    padding: 10px 0px;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all 0.3s;\n    display: flex;\n    justify-content: space-around;\n    &:hover{\n        background-color: ", ";\n    }\n"])), colors["lb" /* screenbackground */]);
const Icon = styled_components_browser_esm["d" /* default */].img(gmail_content_templateObject2 || (gmail_content_templateObject2 = Object(taggedTemplateLiteral["a" /* default */])(["\n    width: 20px;\n    height: 12px;\n    margin-top: 3px;\n"])));
const HoverArea = styled_components_browser_esm["d" /* default */].div(gmail_content_templateObject3 || (gmail_content_templateObject3 = Object(taggedTemplateLiteral["a" /* default */])(["\n    width: 30px;\n    height: 280px;\n    position: absolute;\n    left: -22px;\n    top: -225%;\n    background-color: transparent;\n    z-index: 11;\n"])));
const ModalRoot = styled_components_browser_esm["d" /* default */].div(_templateObject4 || (_templateObject4 = Object(taggedTemplateLiteral["a" /* default */])(["\n    display:none;\n    background-color: ", ";\n    width: 380px;\n    height: 280px;\n    position: absolute;\n    left: -225%;\n    top: -225%;\n    box-shadow: 0px 3px 6px #00000029;\n    border-radius: 4px;\n    z-index:10;\n    iframe{\n        width:380px;\n        height:280px;\n    }\n"])), colors["Gb" /* white */]);
const OptionsRoot = styled_components_browser_esm["d" /* default */].div(_templateObject5 || (_templateObject5 = Object(taggedTemplateLiteral["a" /* default */])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height:", ";\n    padding: 0px;\n    .last-record-option:hover > ", "{\n        display: block;\n    }\n"])), props => props.showAllOptions ? '85px' : '42px', ModalRoot);
const GmailOptions = _ref => {
  let elementId = _ref.elementId;
  const _useState = Object(react["useState"])({
      title: '',
      embedLink: '',
      playerLink: ''
    }),
    _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
    lastRecord = _useState2[0],
    setLastRecord = _useState2[1];
  const _useState3 = Object(react["useState"])(true),
    _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
    isLastRecordAvailable = _useState4[0],
    setIsLastRecordAvailable = _useState4[1];
  const _useState5 = Object(react["useState"])(true),
    _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
    iframeLoading = _useState6[0],
    setIframeLoading = _useState6[1];
  Object(react["useEffect"])(() => {
    setIframeLoading(true);
  }, [lastRecord.embedLink]);
  Object(react["useEffect"])(() => {
    Object(sendMessage["a" /* default */])(GET_HOVER_MODAL_DATA, null, data => {
      if (data && data.loggedIn) {
        const userid = data.userid,
          teamid = data.teamid,
          lastRecordURL = data.lastRecordURL,
          embedURL = data.embedURL,
          playerURL = data.playerURL;
        const formData = {
          userid,
          teamid
        };
        Object(httpHelper["a" /* default */])(lastRecordURL, 'POST', true, formData, res => {
          if (!res.error && res.data && Array.isArray(res.data.projassets)) {
            const _res$data$projassets = Object(slicedToArray["a" /* default */])(res.data.projassets, 1),
              _res$data$projassets$ = _res$data$projassets[0],
              firstProj = _res$data$projassets$ === void 0 ? {} : _res$data$projassets$;
            const _firstProj$_source = firstProj._source,
              _firstProj$_source2 = _firstProj$_source === void 0 ? {} : _firstProj$_source,
              id = _firstProj$_source2.id,
              name = _firstProj$_source2.name;
            if (id) {
              setLastRecord({
                title: name,
                embedLink: "".concat(embedURL).concat(id),
                playerLink: "".concat(playerURL).concat(id)
              });
            } else {
              setIsLastRecordAvailable(false);
            }
          } else {
            setIsLastRecordAvailable(false);
          }
        }, () => setIsLastRecordAvailable(false));
      } else {
        setIsLastRecordAvailable(false);
      }
    });
  }, []);
  const insertLastRecording = e => {
    var _window$__vm_closeDro, _window;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    (_window$__vm_closeDro = (_window = window).__vm_closeDropdown) === null || _window$__vm_closeDro === void 0 ? void 0 : _window$__vm_closeDro.call(_window);
    Object(sendMessage["a" /* default */])(INSERT_LAST_RECORDING_IN_GMAIL, Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, lastRecord), {}, {
      elementId
    }));
  };
  const openApp = e => {
    var _window$__vm_closeDro2, _window2;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    Object(sendMessage["a" /* default */])(OPEN_FROM_EXTERNAL_BUTTON, {
      showPostRecordModal: true,
      appName: 'gmail',
      textAreaElementId: elementId
    });
    (_window$__vm_closeDro2 = (_window2 = window).__vm_closeDropdown) === null || _window$__vm_closeDro2 === void 0 ? void 0 : _window$__vm_closeDro2.call(_window2); // ✅ close dropdown
  };
  return /*#__PURE__*/react_default.a.createElement(OptionsRoot, {
    showAllOptions: isLastRecordAvailable
  }, /*#__PURE__*/react_default.a.createElement(Option, {
    onClick: openApp
  }, /*#__PURE__*/react_default.a.createElement(Icon, {
    src: gmail_cam
  }), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    size: 'microLarge',
    cursor: 'pointer',
    content: RECORD_NEW_VIDEO
  })), isLastRecordAvailable && /*#__PURE__*/react_default.a.createElement("div", {
    className: 'last-record-option'
  }, /*#__PURE__*/react_default.a.createElement(Option, {
    onClick: insertLastRecording
  }, /*#__PURE__*/react_default.a.createElement(Icon, {
    src: gmail_insert
  }), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    size: 'microLarge',
    cursor: 'pointer',
    content: INSERT_LAST_RECORDING
  })), /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(HoverArea, null), /*#__PURE__*/react_default.a.createElement(ModalRoot, null, iframeLoading && /*#__PURE__*/react_default.a.createElement(common_component_Spinner, {
    spinnerHeight: 20,
    spinColor: colors["zb" /* tilehighlight */]
  }), /*#__PURE__*/react_default.a.createElement("iframe", {
    src: lastRecord.embedLink,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    onLoad: () => setIframeLoading(false)
  })))));
};
chrome.runtime.onMessage.addListener(data => {
  switch (data.message) {
    case INSERT_LAST_RECORDING_IN_GMAIL:
      {
        var _window$__vm_closeDro3, _window3;
        const _ref2 = data.payload || {},
          playerLink = _ref2.playerLink,
          title = _ref2.title;
        const safeTitle = title;
        const finalTitle = "".concat(safeTitle);
        if (playerLink) secureInsertHTML("<p><a href=\"".concat(playerLink, "\">").concat(finalTitle, "</a></p>"));
        (_window$__vm_closeDro3 = (_window3 = window).__vm_closeDropdown) === null || _window$__vm_closeDro3 === void 0 ? void 0 : _window$__vm_closeDro3.call(_window3); // ✅ close dropdown
        break;
      }
    case INSERT_LINK_IN_GMAIL:
      {
        var _window$__vm_closeDro4, _window4;
        const _ref3 = data.payload || {},
          url = _ref3.url,
          videoTitle = _ref3.title;
        const defaultTitle = en[VIDEO_LINK_DEFAULT_TITLE] || VIDEO_LINK_DEFAULT_TITLE;
        secureInsertHTML("<p><a href=\"".concat(url, "\">").concat(videoTitle || defaultTitle, "</a></p>"));
        (_window$__vm_closeDro4 = (_window4 = window).__vm_closeDropdown) === null || _window$__vm_closeDro4 === void 0 ? void 0 : _window$__vm_closeDro4.call(_window4); // ✅ close dropdown
        break;
      }
    default:
  }
});
(function initGmailDomIntegration() {
  const VM_DROPDOWN_CLASS = 'vmaker-gmail-dropdown';
  let activeDropdown = null;
  window.__vm_closeDropdown = () => {
    if (activeDropdown) {
      activeDropdown.remove();
      activeDropdown = null;
    }
  };
  const closeAnyDropdown = () => {
    document.querySelectorAll(".".concat(VM_DROPDOWN_CLASS)).forEach(n => n.remove());
    activeDropdown = null;
  };
  const openDropdown = (anchorEl, composeRoot) => {
    closeAnyDropdown();
    const bodyEl = getGmailEditable();
    if (!bodyEl) return;
    const container = document.createElement('div');
    container.className = VM_DROPDOWN_CLASS;
    container.style.position = 'fixed';
    container.style.zIndex = '2147483647';
    container.style.width = '170px';
    container.style.background = '#fff';
    container.style.borderRadius = '4px';
    container.style.boxShadow = '0px 3px 6px rgba(0,0,0,0.16)';
    const rect = anchorEl.getBoundingClientRect();
    let top = rect.bottom + 6;
    let left = rect.left;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const dropdownWidth = 170;
    const dropdownHeight = 120;
    if (left + dropdownWidth > vw - 8) left = vw - dropdownWidth - 8;
    if (top + dropdownHeight > vh - 8) top = rect.top - dropdownHeight - 6;
    const isComposeToolbar = composeRoot && composeRoot.closest('.aDh') || anchorEl.closest('.aDh');
    const offset = isComposeToolbar ? 70 : 30;
    container.style.top = "".concat(Math.round(top) + offset, "px");
    container.style.left = "".concat(Math.round(left), "px");
    document.body.appendChild(container);
    activeDropdown = container;
    react_dom_default.a.render(/*#__PURE__*/react_default.a.createElement(provider["a" /* default */], {
      locale: "en",
      messages: en
    }, /*#__PURE__*/react_default.a.createElement(GmailOptions, null)), container);
    const onDocClick = e => {
      if (!container.contains(e.target) && e.target !== anchorEl) {
        window.__vm_closeDropdown();
        document.removeEventListener('click', onDocClick, true);
      }
    };
    setTimeout(() => document.addEventListener('click', onDocClick, true), 0);

    // ✅ close dropdown when compose closes
    const obsCompose = new MutationObserver(() => {
      if (!document.body.contains(composeRoot)) {
        window.__vm_closeDropdown();
        obsCompose.disconnect();
      }
    });
    obsCompose.observe(document.body, {
      childList: true,
      subtree: true
    });
  };
  const injectButtonForCompose = composeRoot => {
    if (!composeRoot || composeRoot.getAttribute('data-vmaker-btn-injected') === '1') return;
    const sendButtonEl = composeRoot.querySelector('div[role="button"][aria-label*="Send"], .T-I.J-J5-Ji.aoO');
    if (!sendButtonEl) return;
    const sendTd = sendButtonEl.closest('td');
    const row = sendTd === null || sendTd === void 0 ? void 0 : sendTd.parentElement;
    if (!row || row.querySelector('td.vmaker-button-td')) return;
    const td = document.createElement('td');
    td.className = 'vmaker-button-td';
    const wrap = document.createElement('div');
    const btn = document.createElement('div');
    btn.id = "vmaker-btn-".concat(Math.random().toString(36).slice(2));
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.cursor = 'pointer';
    btn.setAttribute('role', 'button');
    const img = document.createElement('img');
    img.src = Vmaker_logo["a" /* default */];
    img.style.width = '28px';
    img.style.height = '28px';
    btn.appendChild(img);
    wrap.appendChild(btn);
    td.appendChild(wrap);
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openDropdown(btn, composeRoot);
    });
    if (sendTd.nextSibling) row.insertBefore(td, sendTd.nextSibling);else row.appendChild(td);
    composeRoot.setAttribute('data-vmaker-btn-injected', '1');
  };
  const scanAndInject = () => {
    document.querySelectorAll('div[role="dialog"]').forEach(d => {
      if (d.querySelector('input[name="subjectbox"]') && getGmailEditable()) {
        injectButtonForCompose(d);
      }
    });
  };
  const obs = new MutationObserver(scanAndInject);
  obs.observe(document.body, {
    childList: true,
    subtree: true
  });
  scanAndInject();
})();

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getMagnitude */
/* unused harmony export repeat */
/* unused harmony export setInternalSlot */
/* unused harmony export setMultiInternalSlots */
/* unused harmony export getInternalSlot */
/* unused harmony export getMultiInternalSlots */
/* unused harmony export isLiteralPart */
/* unused harmony export defineProperty */
/* unused harmony export UNICODE_EXTENSION_SEQUENCE_REGEX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return invariant; });
/**
 * Cannot do Math.log(x) / Math.log(10) bc if IEEE floating point issue
 * @param x number
 */
function getMagnitude(x) {
    // Cannot count string length via Number.toString because it may use scientific notation
    // for very small or very large numbers.
    return Math.floor(Math.log(x) * Math.LOG10E);
}
function repeat(s, times) {
    if (typeof s.repeat === 'function') {
        return s.repeat(times);
    }
    var arr = new Array(times);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = s;
    }
    return arr.join('');
}
function setInternalSlot(map, pl, field, value) {
    if (!map.get(pl)) {
        map.set(pl, Object.create(null));
    }
    var slots = map.get(pl);
    slots[field] = value;
}
function setMultiInternalSlots(map, pl, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var k = _a[_i];
        setInternalSlot(map, pl, k, props[k]);
    }
}
function getInternalSlot(map, pl, field) {
    return getMultiInternalSlots(map, pl, field)[field];
}
function getMultiInternalSlots(map, pl) {
    var fields = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        fields[_i - 2] = arguments[_i];
    }
    var slots = map.get(pl);
    if (!slots) {
        throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
    }
    return fields.reduce(function (all, f) {
        all[f] = slots[f];
        return all;
    }, Object.create(null));
}
function isLiteralPart(patternPart) {
    return patternPart.type === 'literal';
}
/*
  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
*/
function defineProperty(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value,
    });
}
var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntlMessageFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
        }),
        getDateTimeFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
        }),
        getPluralRules: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "d"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__[/* strategies */ "b"].variadic,
        }),
    };
}
var IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== _formatters__WEBPACK_IMPORTED_MODULE_3__[/* PART_TYPE */ "a"].literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return Object(_formatters__WEBPACK_IMPORTED_MODULE_3__[/* formatToParts */ "b"])(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () { return ({
            locale: _this.resolvedLocale.toString(),
        }); };
        this.getAst = function () { return _this.ast; };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
                locale: this.resolvedLocale,
            });
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function (locales) {
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_1__[/* parse */ "m"];
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());



/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/utils.js
var utils = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js



function useIntl() {
    var intl = react["useContext"](injectIntl["a" /* Context */]);
    Object(utils["c" /* invariantIntlContext */])(intl);
    return intl;
}

// CONCATENATED MODULE: ./node_modules/react-intl/lib/src/components/message.js
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */




function areEqual(prevProps, nextProps) {
    var values = prevProps.values, otherProps = Object(tslib_es6["c" /* __rest */])(prevProps, ["values"]);
    var nextValues = nextProps.values, nextOtherProps = Object(tslib_es6["c" /* __rest */])(nextProps, ["values"]);
    return (Object(utils["d" /* shallowEqual */])(nextValues, values) &&
        Object(utils["d" /* shallowEqual */])(otherProps, nextOtherProps));
}
function FormattedMessage(props) {
    var intl = useIntl();
    var formatMessage = intl.formatMessage, _a = intl.textComponent, Text = _a === void 0 ? react["Fragment"] : _a;
    var id = props.id, description = props.description, defaultMessage = props.defaultMessage, values = props.values, children = props.children, _b = props.tagName, Component = _b === void 0 ? Text : _b, ignoreTag = props.ignoreTag;
    var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
    var nodes = formatMessage(descriptor, values, {
        ignoreTag: ignoreTag,
    });
    if (typeof children === 'function') {
        return children(Array.isArray(nodes) ? nodes : [nodes]);
    }
    if (Component) {
        return react["createElement"](Component, null, react["Children"].toArray(nodes));
    }
    return react["createElement"](react["Fragment"], null, nodes);
}
FormattedMessage.displayName = 'FormattedMessage';
var MemoizedFormattedMessage = react["memo"](FormattedMessage, areEqual);
MemoizedFormattedMessage.displayName = 'MemoizedFormattedMessage';
/* harmony default export */ var message = __webpack_exports__["a"] = (MemoizedFormattedMessage);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const VmakerLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO19C3AV15nm15KQhB6AQRJI4g02j9gCj1/k4TF4JpOXJ9ip1EwSOzEkuwne3azxJhtv1cYTO9ndqiRba7w1W9naKWOSSmqSrB1je3cyfqyNxzUJju0gbhIEwYAwIIEkQEgCSUi6vfX37b63H6e7T5/u2/fe7vNVXUSfPv33uX37+8///+c/5yiqqkJCQiKdqJK/u4REeiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREilFTyq/e1dU1D8BOAHcD2GA7/RyAvZlMZk+JmichkXgoqqqW5Dt2dXUR6Yncc32qvk4KIpPJDMfUNAmJ1KAkCqCrq2sbgKcCXHIQwGapBCQkokXsMYCurq6NAckP3T3YV6QmSUikFqUIAu5ilF0C8ASALQC262a/HRt0y0FCQiIixOoC6L3/AVvxJd2877bVZbkJBzOZzMbit1RCIh2I2wK4m1VmJz9Bj/4/ZyveoI8cSEhIRIC4FYC99z6ZyWS8fHvWEKC0ACQkIkLcCsDee/f61JdRfwmJIiJuBWA39f168+VFbIuEROoRtwKw9/hzu7q6dnrUd5zzcRkkJCQCIG4FsJdR9rhdCVCgr6ura69LerCEhEREiD0TsKuriwJ79zNOndSTfZbrrgErRXiLtAAkJKJDKRTAPN0V8JsDYMcTmUzGy12QkJAIiFLNBdio9/a8SuCHmUymbLIAn96R3aiPaGh/80/Q9CjtT9Xv2FFHZV9nL/OVoxfw1PNto6AcXllRyXGRpVmO/2Z3lbQgTSjlbMB5+jj/Vo9qlCX4aCaTYaUPx4ZndmQpgWkzfVRbXEKE/L51OMnPdS9OgtjLopLDKysqOTzXqQV3kz57v7q7KrXDzSVTAAZ0a2AnIy6wXV8PoCQ/zjM7skT4bXr2omapuL5sIclvKQtBfkdZVKQNIYdHVlRyWNdx1VFza0/826eqUrf2RMkVAHJKgMj2mrksk8kopWjLMzuyRPpHASwzl4uQVvTF5pEVlZnNJTsq0jJkRSWHVYdbdqGQLM5dKrDrwafSYRXIJcF0kJn/zI5srz4BKTD5eVBq8rMgamb73l9QVqxyrOSHbul9i4LUT2zPPupzi0SgpEuClQOe2ZH1jEXwkj80aT1M/0ByEMo3FpLDgqgV4XsvwTZxkN9cT1MET2zXYj/bHnyqyjFZLSlItQWgB/d6fQKRFoiQ31MOvMkf+MWOiiAJCvqx4EF+MzaowIFdCbYGUqsAntmRpZGFZ72GIl1fpIDk93whA5Df98UOGayLXI5Lm6KSw7qOM+jHdX9T2bd2bc/ue3x7NnFT0VPpAjyzI+uWjZhHZGamgBxWnchMcVPZ5MwoBi4fyf+1Y05dB+bUdmh/m+s6AskWaU8QOaw6xXhGpuM7aNjw8e3ZzQ8lKECYOgXwzI4sjf3e4VVH1O8PJMd0EFdgjIh+9MJrODXyFk6Pvo2RyX6fKwqoq25C55ybsbj5Fqy6ZgufQij/oB+XLNMx5YB0P749e/dDCYkLpGoYMHTPH9L0F/X7w/rGp0bexh8Gn8Mfhl5g1BJDZ/NNWN+6FetaPsndpjj9/oBBP9cyl/MHoWLzv9tT+ZZAahQAD/nh9SJVIPmJ+L868wOcHnmHUSMaNNe1Y1PnA1irKwK3NgmZ/qX1+92Pc5W0peorXQmkIgioJ/cEJj9PnSL7nUJyLk324Wc9X8LPe/5FUclPGJ3sx8vH/wZ7Dn4MZ0beZrZJ1O+Pqg4LETz/DS4rXFcUEm8BPJObuGNfidgBEdNftFdj1RMiDaOH/P3g83jt5PcwOTPGkAC0NlyH1oY1aG1ci7aGNairaUbr7DWu9x+Z7NM+g1eOYORqHwYvH8aZUXelsmHhvbi1cwfqqpv5v4egCyHq94dSLE5ZD31tT1XFKoI0KIBuxsIiFkTl94cJ+gVWLAyC/PLYIw4/n4J3FLRbMucWrJ6/BbU6Mb3ksO5nPz528TUtkHj84quaFWBGS8N1uGftk5oSiEqx2euJkp9VLwT5oacPb/zaniq/9S3LEolWAM/s0BI4vuVXr9L9foru//TQlzB45Y/5stXXbMb7Wrdq5OeV41rPp01k+vcMPacphau65VFb3aQpgZaGNaG+G+91ouS3lwUkv4HXv7anajPj0rJHYhWAnuLru/BIscjPkhWJT+tBfurtV1+zBR9Y/IA2du+nkITNcxdZ1JaDZ3+iKYPRq/0OJRD0u7ndn6uOAPldj/lciC1f31N5aw0kOQ/g0aDk56kTRY8ZZZ1Xe7+n+ejv79yBm9rvdfW9Rb5rkDJo7kaz5v/f0rkDh4eex2/O/AD/78QjuHvtk07Xo8jPX+R7hJSzpxJXsU7kKIDe+3uuIMTr93Nf41bGKYvXNzbjnbM/0Y6+cMPP8YHF7oE3HjNbmPwuvTYNC/719T/Hinl34o33vicsR6iNHEwW9fs95Cz7r9uyrJ2vyhpJtQB2Bs3x5zH9A8kxHUTyYjMIQub+nyy61/M6EaKFaZP5mBQSWQPkGoi0Sei5cZj+ouTneG47XVa+LlskNQ8g0PqBon6/qxx4kz/wi+1CkDmMdFwROUIKIcD03jqT+S/aJi7Scvr9vnIYJzjbeMf3t2Uryg1InALQx/2XuZ13fSECkt/zxQpAfl/yyRl+fAqKk/xcCkGA/CZUlBuQRAvAtfePrKfhLAt6L7cykftHZuZH5cIItqkCn1HZrF7NgyQqAKYG5vX7ua9xK3Pp/YVebLmsF18Zx5cT9fsF2rThexXkBiRKAejRf4f5z0v+0C+kh+kfSA4i9I1jXsufhahiEeXg9/vJ0uVUzBb2SRsF4HrwPOQP/OMH8Pt9z8e0rFfTAqBhjsK81nw8PaHiQp+Y0ohSITmuKR+/3y5nc6WMBiRNATjSMV1/tIDk9/zxA5Df98UuQtCPiD6/XUFtnYqaWkCdAbJTiuV61fbXKkrB/EWAUqWiahaQzQJTVxUMn8sphqi/G1cdQfIz2yhIfpZy0yEtgBLB4ntFZmYKyGHViUqOn+za2cCilQrqm1RgigirZ1VnFcxMOOt7k7+A7IyC7EzusBrAgoUKFiwEaupVTEwoGHhPxdj5cN8trmcU9v4+11VMDCCxCiBJfr/fdXRc2wC0r1Awu1nFzESO8NlJ9nQKEfK7BdqoeGpC0YJJi5YqqF6lYiYL9J+ARRnwfDdu8nE8JG5i+8jiJr+10HUYutyQyExAUfIH7g3KwO+f1w60LQVUnewG+d2ui5r8sD3bmau5+7cvAaqvUzF6XsGZI2p01hin6e8rh3FC2GIRkFMuSMWioCLk95SDYOT3vZeA39+2gvzyXG+vTlrPeZF/bqeKuiYFs+cAjS3QYgKEplYFNXXW+sOnC8Qd7qOeHhgbUjE6CExP2RQNgwTT4wrqG4A1twHjlxWc/L0Kl+p8z1/Q72eeF/T7ReSUMxKnACrB77RXCEL+AvH13t6miOzXzV8BzOvMkX1eJ5GWf5b1vMWFutcsNv6XKyMlMDqk4uIZYPCYiumrhbr2ttC5mlk5RTAxpqD3D9ZWlvT5h/D7g54vRyRKAfCa/tzXuJVxyoryxW6cDyy+DpiZLJj5buRvWwssWAG0rCze/qrNrfRR0LEOwJ8rmkLo61G1DxGe5WpMT+YUwdpNwMVzCs6d4HcNirmsF9f9BeRUAhLtAvCY/q7XuJV5mP6B5MC997dj5U25H2rGHNSztaOuWcXSWxSN9NV1fhKjBymENa0K1vypgoHjKk52k3WgMH8DCho2zQXmbQJOHAQmx32eG8dDEiW/iNJOgulvILEKoNR+v+95DtP/mnZg4bIc8bMu7ZjTmSP+vM7ySepsW6lon/ER4NibKs70FM6Zvx8pgqXrVYyPKTjtFijk9Pv9zouSNsnkR+JHAQKS3/OHDED+KPz+pe9TUF+vauRnKaGGBSpW3F5exLeDAo3Xf1jBqtuAw/+k4tzxQgXjO1FuQd1s4LpbgSO/sQqo1KBfJSmEdI0CuByz6oheF0UdCpZlrwJq1kn+6loVKz+koG1d5UzjIEVw410KLpxW0fOGipFBZ2yC4gZrN6kOl8CMSgj6VZo1kLjZgGUf9PPo1SiZhwJk2auMsXw1F9G/5QtVaFtXvOBeMTF/sYIPfrYK197G/v7kEixZD8zvqIhkHy455Y5kjgJUYNDP7O/br62epeLaP1OwoIhR/Tix+jaKEQCZV7IWa4C+szqjYH67itlNubiA+ZwZUQX9WEi6329G8tYDqMCgH5G/tYNN/sb5KjZ+piox5DcwpxW47VNV6FyXKzB/Zy0u0AAsvd47q9FAGPJzKZaE+f1mJEsBVGDQzyC/mnW+7G1roJG/3rmidiIwqw7Y8GEFXR9mPxvKGTCUQJDnLYN+/EjkoqBRBf2ilM2q40X+FR+EZvanAYvXKdj0qZyrY38O1TXAsuudWYZBn7VoWTHklBMSvztwmKCfsN9pK2BdRwG/hUvY5L92C9CxIR3kN7BgsYIPfLoqrwQIRiCQlIAWGLRdU45Bv0qzBpI7ChDgfNxBPyL/yi5gxj6hRid/pUb5w4LiAu//dBVqZqmOUQCyluabVkEvx6CfHAUoMSol6LfiBnbAL3byD+0DpoaB4W73Oo3LgYblwNyNwKx5RW/SXF0J/OrprHWC0YyC1qUqLl9k5wlIv18MyU8F9imzX1DsoN+KjYqW5GOXEwv5+/cCg/tyxL90MPj1DcuAls1A62ag/e6iKQRSAh+wKQFVzxNYvkHF4f3W+mFIy1LckcipEKRvQRCfMr86YYN+NdaJfBoo2l808l/qBt7dlSP/1KVwsq6cBN77Ye6D7UD7VmDZtpwyiBikBK6/Q0H3y4VnRX+vTihYuRE43u3+1EV//2IGj8sViQ8Cooz8/oXLnNfM6VCLE+2nXv6NzcCrN+YIG5b8LPQ/B+y/B3hxOfDensjFL1mv4Do9a9D8zJRqNR8PKMegnxwFKCECa/GY/P4l6+CY2EMR7/Ufi/gnoB6fiP/GFmDo9Whlu4Esg3e25xRBf7SrYa/ZpGBBp3VkIDutoGVJeQb9eBRJOSFRCqCYQT9fxeKT7FPFmNiz7uMRzt2nYF5mZ67Hj4v4dpAiIIuAFNCV3sjE3vqXVZhVax0ZoHjASttQaamDfpVGfiTdBQilxYPI8Zneu3C5U/G0d9H6fBGZ/tTrv7oROPZENPLCghQQtScit4AyBm/8C+ezUmpUbQl0RGiep8HvNyOxCoDX9Pe7LmzwkOb1T09YV/KpbVax7NaIyE8k03rck9HIiwoUcyC3gKySCNC+SkH7qoIcer7kCqzYEDLoF6XfX4FaIRWpwI6yGIJ+BmY3qpa6BJrPH4np3/NojmTFCPBFBbJK9t+dc1FC4oY7FNTUWlcOmpxQ0DzfKleU/KFGASrUJEjfKEBMQT/ovb+R7WcUNneq0czse2cbcPix8HLiAI0WkJUSUgk0zAFW/4lzXkDHdd7XxR30k6MAJYSnFg8R9GNd4Ccn3/ub/qz6YASPnMxqbSy+gkCJR284tm4MjFU30p4GVivgqskKKHXQr9IMgXSPAriURVEn3/ubyE/LdTe28n4bF5DPXy7BvqAgJUCWSwhQQHDdJqcF1X5d6YN+legFpGcUIMqgH6OSvYh6KbvFsTRs4I+i/eTzVzLIcqHMxBBYtj5nBZif/fQU8iMCbr+JDPo5kY65ADEG/QhN84GZcetkH1q+u745hAIg/3l/dCm3fcO1eOtEI97qbcSRs7Nx5Gy9o07HvCmsWTSOW5Zfxs0rxrB20UQ0N//dQ7n5BHPFd9Fevk5Bz5uF50urCNEogbH9mPT7+ZD8uQAxBv0MLFpNjmmhnP52doXs/cl0jmCojwj/41+34LXDc3zr9g3P0j5G3TWLJnDfpiFsvfFi6HZoyuzObuEJRRQMPPSm1QqoawxHfm5rUGD0oFyR7FGAmIN+BqpUK/nrm0NG/imvnyLpIXD4bD2++NRKfOmplVzkZ4GshEf2LsZHH1+LV+0yqDdfug1Y92jub4PPFvmkzEK4AhQLWGpbT/DqpMuQYIxBv0qzBOTmoBEHfWi7bvtCHwtWRND7h8APXluIH+xrC9cGE8gq2Pn3y7Bl7Qj+yxcXoPHm/wa03OGsSBmBmuXikhZMw5jLOJSFCzrJ5O+xnmtZqmDkgvuvV8ygnwwClhg8pr9o0I/3ugVLnOfb1oZQABT1FzT9RyeqtV4/SvKb0Y9bgdv3sclPoHIy8718fUpmEkTHakVbPciMmjqrWxBX0K9SYwDJdAFiDvqZr6tWrPVp086mMEN/ggQxyP92b2OIm7ujubkZu3fvRmOjz5LFs+YCmzxmCNKoQIiJQ6QEDKh6TgCNBsigHx8Suy9AnEE/A/TiTU9ae/tQ5j9NrRXs/R/8+2XMyH5U2Lp1K5qamvik0UpCSz3cmBBWQKc+P8BM0talChdhi+r3P6vs0z+78KxyN55Vir+emgDKVgF0dXUFTxsrUdAv7+svcZJ9bqffjTxwUmw23Xd/2V60nt/AnXfeGeyCDo8hzBBrCLQuUSwkVbWUYeuvJOr3i5JfL7tD/zxI6gBAL55V9uBZRSzgUSSUiwJgJYlH9qCKGfQzl81udtaYJzrll8xigcg/DfP9ZH+L2D0D4Oabbw52gddwH01mEpw6XFsHzG2xDv8pprc67qCfh5y5AO4H0I1nlXBR3QhRFgogk8nQsrT2KW1CWS+l8PsNzJplPaYtvGtEZ/31ifWKjzy7RPCGwTA2NhatQMHvS2hdXFhshf5OTLgr3WIG/TjjAqQIntKsgTJAObkA+2zHW7u6ugJZAXH6/azjmavW48bWkGP/AfHcgWu0Ibo4cPjw4WB38ZsJKPB9DVyjB1nNvwlrIxEWogr6CQQF7y8HJVBOCoDVBYR6QIGHAAMG/Rz1bLv8zA6zp58AIX6wb2GIGwbDc88FdE/8enhyAy557E/gAZom7LDG6oLvKQhO8kc4AnC/FiAsIcpGAWQyGSK7PeR9R1dXl1CIOI6gn/m4dYVzo4+5HRADESHgIh+U6RdX7w9dAfT19fFVplmAPD7+oJgV0MYIvjYvEAsEhgj6iWJPKUcIym0UgLV+1Le6uroCrSsVV9DPfuz2/8AQ6AnJ/I8bO3fu9I8FEPl5JzEJWgAs+P0WkbiL0SiEuS7vfSwoKwWQyWTITmTZlo93dXXtDRoTQJGDfubjxrnO8nmLBWMAl4MnxrzdyzkmHyEoDvCRj3wEzz//PFPo1IkfBVshOERCUKtt6fBqPck9TNBPWCEE1/4lUwDlOBdgmx4Q3GAr36oHBmkpnL26snCgWEE/v/NVNAMoa41GC0OACMVM+vHC6OgovvnNb+K73/0u1q5dm69JymHXpw9qU4m5EcFS4vZNRR3n3coCmv4Rkh+aFfCsshn3qOKRUEGUnQLIZDLDehIQSwlAH0u9v6ury3Hic+ufxJI5N+WPi+n3s05GQn4EJ8LhEpHfDFIEb731lqXsSP/sgAog3HRnM/nVmIN+IchvYDNjJKzoKMtMQFIC+gMR3uFCZCgviuuMv/WMpKBigfL+yxFxtmteq3OxUDvCunl+8kOiJIHAsk0FJiWQyWRICTzESBLyBK/fz1EUaOjQfK4+zBCgRGDU1lt/gyhM9jDxAwGIL48UAmU/GSiTyezS04JJEfjuaR1X0C+IHIl4EKTnL2bQT/CdCL9xggAqYkEQ3SUgRbBLHwnYyNKYTbVtFEBcZi4rVtDPj/wjgz4CJSLFhQHO363Ifn+IDiG6MdAAqLgVgTKZTK82s4qROfjjL2c32xWABREG/bzO07n8hiAxILLFOiNGx7yrsd1rapKeOmccQID8zDrRkR/6Ox075OagHGVBfthIXIKAq+U218+gqX4mijtHijXt48HEzWUN+gRHkNGYqIJ+EfzusY8AIFWbgwZY1iuoHOgLUprLaUhqepK7uVYIrJRbjlZA4DYJrhAM7fnn/hq/geIW5C2foJ8ZB3GPKi2AqBB30I/KJkzD3cZ49Oig4FvSGnwtlDvXjojdq0jYItKeFvGtw4YHrUlYWZtBVIZBPzPC7ZQSAonfG7DYQT+jbGYi9z9zMsq0qAsssErunevKSwEIKaRGsTVgqPe3m/0z07Z4QIxBv4AKgXr/kk0LTvy+AMUM+pnLLvQ701BHhzjbaQcpgAb3WCYLFHAT6nWLAIpHCG0eImgBXBzQla+p7LI+qBZV0I9VGAH5L+mp7yWD3Bw0TG9gg3lJasJYmKFAATLc935RjRMtPr/pfHB5pPAE9we4OOj8PYbPsX9FUfJHFSy0YSfuUUsy/GcguRZAzMk+2iCUbeRvdCiEd+i1iKYLKO++1FYA7ScopIjaxdfFsOcA0MSsyfF4g34CPf89pTT9DSR2XwARLR42fjA1Za0zMapgYpSjvSwQIWbNDXzZf7rndEmHBL/xsT5tWDIwlolbwgOnrb8ILRRayqCfz/nXtSS2e1TxRRAjRPI2B40p6McqGz2voHmeNSB14bSKjnWCSUGkBGjjjAAg8pESoK27CB0dHdoS3rSRB4Ku5BMQ924aEgv+kfkvuFPw5RH6WJ/vzHRZBv2e06L9JZjy64VkKYCogn6CvuFgr4qmjdalwQaPAR3rfG7mhtU7AysA6BH4b3y0H0fqduDhhx+2bODxwAMP4JFHHgm+pp8PyPV4+GP9YhevEl8P49wp669CR2NDiuWXicp/D2hVPqbn93drn3vUkuT6+yGR24ObIRTQYVzE+9LU1KuYMpalVoELZ1RLimogUK9I++sNBZ8Vfd+fNQEf+Q7z3He+8x3NCrDP3xfFzcsva1aHEMjNCWH+n3q38H9V9//PnrCWmVFMv99yfI8qvt1RjEj9KECYoB+rbNJEfmhLhSsYOB4iGLhO8D1a7d2r3nfffWJybfjkxovYvf24mN8PvfcXzACk8f/Tx3L/N55wbcB9GET9fhGXohyR6rkAYYN+rDrnTzmFDB7jEOAGGg5s3xr8Oh+f2ogJiIICjbs+e1K854fu+/soKi+cftc5/j856j4hiNsaiDboV9ZIz1yACJJ9eOSMnXduUd13OMS8AELXruAjAn4bcYQA9fovPnQkfPqx9r3E8/973lEtvwX9/+wxp1JgHbMQVdCvkhRCOuYCRJjsw1M2PmYNBNLfMz0hXgtKkFkb0BXw2YjjRM+vA4mj8f0HNg/gHx86ovX6wia/AbJqQo79Xxyy9vaz603j/ybEFPSrSCiq3zKqFYQf/cvsPjW3I2uwH01wpqCbrFmzgc41ViVQP0fFn94fUt/S+vpBNgy9s5s9xZbW6n9jc24hz95GbfHOM8Oz0Ddcm69CBKfZfJRifMuKy9HO7Sdr5iO9Qr3/lZkpnJocwf7fjuPUxStaWV7RTtFQrOk3sSzX5nQNCvVsMzlhfyecCj0vU2XLHHj/yceMe+YoZlsxWlUcbdOp2Pt/b7o9tgShxCsA0aCfkEIwybp2EwqjAXrd6/8c6BTNCYBu1r+6kX/1XCIY+dhaoG1ubrch2oo7s7OoLoIv7jzAPe4/NDWOI1fO48jlC9rf81PeawywyGUltOmcaie2wlQaZgLzXetxD9Oxpa6av9/r/3DTh8SnRQZEooYBSxH0c5PVfxRoWWKte2y/Gk4BEKE37c1ttsGzdRiRvOfR3KdccNNTvuSnXv7A2Dm8cqEXpyb44gx5MuV7ZEuvWjg26luIWBbEZ8Ygio1E5wHEEfRzk0WmaMd15JMWhgXHRxUtFhBKCRB5bt/HrwTKCUT+pe5j/tTbPz94FAdGz2I8O83V8CQRXxXNFwmBxCqAOIN+bucv9itomGe94N39KhauVFATcLzagkpUAh7kpx7/p+d68KtL/EOKcRHfeg/nPQvy4ernexKfoTTiRCpGAXhNfz85QWUN9KqotQ0JkhXQ2x3BT20oAYEJQ7HDg/wvXziBh999jZv8BQI7iaiqhfMG8VStXu44q5Urtnr6sWq9Lkd0W938saLL0q9TFeY9s457sOvZj+NE4lcEiivo51bnzFFn+dE3I1o2nJSAW6S/HEDK6fbXmOQnc//7J/fjZ+d6Apj7BeIbpMw6CKx4E191I77CIHpxiI98me0eJmskLqQrE7CIQT83OWMXgGqbFUDIvJLluCsHKEeAlMCqB6ORFxVoDgMN9TEWNqFo/mPH38CRKxe4bsYiZSzEN1kLPMQvEFi3Tlh+vmpSIjblYnYp4kJ65gIUOejnJefU74CqamvW2uiggqNvRvhzU1Yd9bYBlxKLHNTr3/C47p44x/n/+dJpfP/km1y9foFcwYhv8fOZMQJO4qt2JeJNfFflwkl87X7SBYgGpQj6uZVRdtrEmPOHJVfg/OkIlQD1ttTrEgFLERsgK4Tu75Lfv7svg6f6Mr5iWOQKQnx3Qiu6rHIgPhz1SjEKIJcF97pOUBbr/Jk/qqitd7oC77ygYjzqVbyIgIYiKLZFQIpGI/4Jz9x+Ir9foC8e4tutCjAJDBjRedsQn/2eECW+u3KJE3JZ8JCygsg5mcnFA8zXTE0pePv/ZDEVZrIQC0YWICkCLRB3f7RWAeXyU3Sf5BPxPRb0pLF9L/KzAmEGQQp+NHusPTjx3ZSGh3KxxBU8CByS+MY94kSyMwFD+P2i5Pf6AckVuHAKmNNmrTsypKD7ZRW33FUk7U+ugRGMu9SdmyhEf+nDk1ZMikNbnGQzMG9joEk85PM/P3SUeS73/ZOVxMOWZb1HoR2wpS1DfPEYQSQ3E7CEQT+vsmfF1G8AABMcSURBVAt9QOM1QNUsa/nAcWhKYOOHi/wCEJHtqbhXenMfO8iKEFyrj0BpvD89e8hRHhfxS5HEE4b4Kod7GTUSvySYGVEpBGE5esGpP6jaZKGrtslCp3ty/yu6ErBD24hEbE1+N1B23+7+jCXan+/hbAQukAuepj5YSoKpNCqV+HIYMBqUQdDPT87R/cgHBc3lpw4B3S+p0ccEYgaZ/eaJPGlJ4rEP6RXquVxnj3HErAGSpwDKKOjn16Y/7gdmmUcGDAuhB/jnp4sQGIwJlOhDM/ngQsokJ/EUiO8xbOhyXSmGApOlAMrE7w/SppMHc0pAtVUaHVKw7ydZXIoiZThmUNS/8OIHI36eiBWaxCNGfFiuixOJzwQULRMlf1AL4ep4TgmYcwQM0MQhsgTeOxT3ayEOivofvnwxtUk8eT8/HxNQLH4+m/imZyXzAKKDMGlVn/Mh4gesY1IClBU4i5EoNHVVwYGXgTdfqIy4wN6Bd4tI/PJP4mEplyyHC5O1xAPiQ7K3B7dBlLRxyXn3TWu5+Xz/MeClJ7PoP1a+1sDhyxcwNDWRf9ELfrR7ZD9pSTxBiW/cA4if/JBzAZwFPKa/iBweWXS+96CKqxOAUm2yBvT/kjXw5gvAG09ncaW0mwAz8dKFXpcXnRHgKzPiG8fIWwvG72W1KtyJDzbxWVaGjwsTJ1K7LDirgqjf7yeHdZ2XnP4jKs73ArWzncFBwtBpBS/uVvHOS2rZKAIa9//tyEBkxDcW5ID92DV6Dus9/YjvS2ircsm6KBczoZnEV/mJb3Zh4kLiEoGE/fUiyWHV4ZEzegEY+TWw8iYV09Ps3W5OHqKPiqXrgfWbFDTM4WhMkfDG8BlnL2oiCEyWjOux9q8ziWd5fRPe13QNGqprcH2TdbKR9bkpznOmCsfGL+PyzDQOjowgM3qJ2dYokniM0Qrz7a2y3JOY1JiDgHJzUJTW73ct0wuPvwNc06GiZSkwMc5WBO8dgjZSsKBTxbL1CjpXK5gVZs1BAfRQ5D9C4jdWz8InWpZgy/xFaK2tj6SNNzTnJkPd2w5cnpnBS0MD+MW5PpydnHQQWPXM/HP67YayYV0XhPgxewDJngwkStqo5Lhd6yvbVnixLzeHYMn1Obfg6lVnL0GXDJ1RMHQG6N6X1ZRA62KgY7USeMPMoKAtut/R1jhTQhOfjv9q0Qrc1bJY6/GLhcbqatyzsF37/KjvNH5xth+j09MlJ750AYoIEfKzIEp+LsXCKDSKTv0+9z9yC2hjruy0s9eg/09PKTjZA+2Dl1XMaVHRulhB22LgmrZwrgLtyHtxQMXAaeDsKfqr4ML8i1BvNu7PO1nHSXwi/MPLb8D7msT3CxTBFzoW44Pz5uO7x4/h6JXLent5iQ/bfAJGXS6loTB/+2IjNcuCsyoI9fQccljXcSkWD/KbcewdsgSAhatoGzJVGx1wq0tllwYVLaPw6IFcCZW1deZqty5h9zhmWRcHgKlJFRcG6a9iOpe7dqR5NBTxNZO/qgbfXnUjls9u4nhS0WNVQwMeX7ceOw8dwtErxpZjhe9gIXqRiG8cx4lEKoDITHEBOaw6Uckxl1HyEFkEdNyxhqYYq5YYAUwvnPk64+/AGUX/q5ertusc93VXMiNNox5pu27mdMFaoJ7/26tLR34D5BbsWr8eX/zd77W4QNzEV106gWIi+SsCBTDZSyaH84d3Uyx9R1RtduG5P6qoVoC6etWT/F739mqv2/WXZ0+EGsv/6tJ1JSe/AVIC//m6a4WTeFjHjqFAOIcCs6Z7xInEZwKW2u/nOc9r+vudpxWHThzQlcERFTMTQG2tWlAIPvcOSv4aXfaV+gnhJB6K8t86t8Xn28aL1Q0N2L54cb5HDpLEY80EdCG+yia+eRg1LqRrFEDQ7xclf5R+P5dCMFUiF+HMEdVSo215bqsyyjKkADudncna/XqrTFrOvFbfNVzN5j40U3H4XG4vfsKVD03aXl6GeWvqGQsuAfCZReyFSGi8/u9OH8fL589pQra2deLLS1b6PIXo8FftC/Gz/nMYnZ7Jt9s9xmGPFzDyCmzuQ+F3d+ZOxIn0jAJEFfQTVRqsOoLkZ7ZR9a9zrtdZqtpq29vEbo/qqOPq17oQn87d6THG/79OH8crQ+fyZHp2oE+7/isxKYGm6mpNCTx5qs93SK+5phqf6WjDTXOa0D95FT85M4gjl8e5AqNgxEbiRGrnAnD75hyVyk6xRCibTw7DLOZYiee2eQtc7/Py0IDJfM798/JQvIsjfKK1xZQC7B4P+JvVy/DlJYtw09wm3NU2H393w2q019X5TyRiuEhyOnAE4DXZbVX8y8ok6Oco85HFTX6f3t9NDvNF51iJ5zYP37+xuqZgOptm6cWJRXW1WEREdiE+kfXRa5dh8wLrcutNNdXYsXQhxzyEgvWUNSnQOJHKfQGEeroyDPrxkJZHVlg59t6RZ0GO65u9k33ubutwTM+9e2EHR6uixbWNDYyZh7nv8fWVnVqPz0J7fR3H1GGD+FYrI04kOwZQwck+XAqBy18vvhyzBQAwfFztH6sf7Zfme2/HUq3ei+cH0FRVg79oadPSduPGdY0N2Hf+UsEa0b/jXy6cj892tLq2Zm1jvS0PwPo8vCYgxYlUjQII+/0C9xKVwytbRA6PLBE5KuMFZh2bX/aVHOP+93Us0T6lRMHFKXyPTy5cgEev9W4XuQEs4vPMJ4gTid4YxOOQVYVdFtVkIUbvL0r+Yvr9onJ4iY+8OV0hsLRX0QJ9fuTPPxeBiUTSBYgCKQv6iSikqOIHAKzDZAG206oEFHxzYE3DbDy+jn8DlcDEL0EQMHkKQAb9fGWJ+v1udfJkNwW3/HbVKYW5K4ZCdP7x9y3XTHteMP18H+JLCyAMZNAvNjnmNqkBiM8ru1xgfC8KBrbX1QZqlQjx5WSgcLDscCns93PUiUoOr2wROTyyopAjtJ2WT7vKCUa2X1Cwnof3uoiQ04HDQLUpADuS5PeLtCkqOU5Z3n6upZcz5cRXAgwC94xNBG6tV2CU9TxU/58nciTNAthn/Eeox47Z7xclfzH9fj85LFluiTJ+22lVBnJtHZmewY/PnA/U4rzFwzErMmuqFyeSpgC6Ifpix7SsVxCI+uui5A/i91vLeIhvrVcpGsBM4L/tHcCRAJYAN/Fhj6PEh0QpgC8/WTWsAift5b4PtQyCfsUibRg5vG3iI77TH64UGMQcmc7i8929OMypBLiJb9tzIE4kcTLQXvNBqJ6uCHJ4ZYvI4ZEVlRxzHZHttM5OXuW4Q+lh/16kBL7QfRKj01mO5xOM+OZ8iriQRAWwx/hPGL/f85oApr/fdbx+v0ibopLDIyvodlr9kxWw0yn1+lNZR+zi0tQM7jvgrQTevHjF6frQCZOfn39Wpp2E484DSJwC+MqTVRQHcLgBCOH385xP2gy/ILJEttM6evkKR2tKD4r+22McdHxobAKfO/CeqxIgS8H+PLziAeadlONEUhcE2ePb08pkH36F4CMrCPGNF5+i6uXuBhC53xy+4jqWf2h0At85eo557f/uHwlMfGkBRAQV2EWWmqu0EOR31BEkP5N8gqRlKbdI5HDIKhAdVuIDni8+mb5vXLzIumPZ4JWhEd8knqf7R/DvD521WAJfP3QWLw5c9vj+tsVSbEOocSKRCmDHk1XDfrEAO0TIzyOHVRZVHR7ZYcjPKzvr4ueziG9+0X/WN8C4a/ngF/2XLN/J3HHkk3hUaErghtffxV//9jSWvXIUP+8b9SE+a3mw/LFnMlvUSPKy4I+SFcBr+tuq8JVxaARuQvrI4iZoBHJ4ZKm2/wchvlHWNzmJfxgMllwTF34zfAX7NfOfP4nn1xfGwxDfuE4qgCiwI5cTsMsiSgb9itMmS2RbscygYxHf9LLj8ROnMDYzw9HSePGNQ/1CSTwFRWj+/oa1oDBW/7HfI97vmeiNQR54soqsgIPagQz68SsEDr/ffmwe8+fZVcdYBJOi5d8+yhy0KRke7unHqYkpPuK7BjzdcyDM9bLOe3TH+b0TvzMQgG2I2O/mqSOkWEKUFUMOqw5bDj/xjRfduI6w7/xw2SgB8vuf1nz/2Ilv1JUuQJR4gPICVGy3ixQlf1KX9eKR5XZNluXnuxDfSZLc8QsDF/BYiZXAfz8xhK/3nGXPX4Dd1QEziceq+FB4Hv7E144vfHSZtACixgO7q2hE4IduYkXJzyNL1McWJX9sfr/pvEdAy5f4BetBwfPnLuKzB45ou+vECRrC2/G7M9h14ryzrawen2Ms3/48/Iiv13s91i+eFgVA+Fe7q7YZSkDIhOb0+33lME4Im+JFtEZ4/P78/10CXL7EZwwhHr48gY//pgf/871zGJsubnCQiP/EifO4/VfH8OLAGIOYxSO+8dxgtRb2+TY6Yihq3GHHEuN/fDFLk4W2Gq3gIg0n+blII0Bae1lUcnhl+cn5xwd+ayV+vo77fvnei2MU6m6ZPwd3tszFzXOb0FE/i9GSYDgzMYWesUm8NDiGlwZHcWnKSOCxmfqW72mOW9i/l1np2Y49NhA1js3PDcCNlz6+JFYXIHUKADklQC7B/aX2+6MiragcHlk8cn5JCiBi4jvJVCBmZ32tpgwc/ritgcbxpSlVz+ln3bMsiE/HJ0c+voR/yeGIkJ7dgU3417urtv3tF7OULfiguZzX9HfU8TnO1/GRJdpji8jhkcUrJ2vJAWAT3zB14UIu67bZbOIbx6fGp7SPnfgO5cK7BFexiW/6/h5ts0xjjwupiQHY8dWnqh/KqjOfMuYM8JLfj+y8ROOxu3jILyJHVJabHM+hP87AYNZn2Ex12UePVY87e8+om68XPonH7ftn3dpaeHa7GI+36EitAiA8uKd27/Dl0yuzUJ+3n4s76MelWATkuLbTR1YQOeGJD0/iG9ci36sqpntbl9oORPzijeUHIT59Xh/7xOJYx/8NpFoBEB75+bLhB5+q+dTUzPinVajvIQD5uRRCBKQNI0dEkYjIMZu/DuLDj/h8UXc35cJcarvExHc3981WRf7aRxmPPBakMghIUBTFmHitmD5V379v+P5ZNU3fVKAsNeqK9NhgksRfjqvsCOTwyBKR88KOg/mXGZYXXe+lTcds/9jLB+ffTss1oMhxD1ZbkW+vKV7A2TYwiV+4h6nu61c+0bmZ8YhjgVQAVgWg6FZR9bc+ffyO5tltn6+prv8EoMwxXytC/kDXFUEOT5tE5Tz3lYyprjfxPYN2LoFBLuILKpcSEt9o243jd3XEOvRnhlQAhR0qqkwKQFMC+t+a//ipnrsa61pur5vV9IHqqtr1XKTxIS2rTIT8PHJ4ZYnK2ZtXAJxDehVOfPs9gxM/f/zE+F0dOxmPOTZIBVBQAIpNCVSb/taY/37u9j1ds2vnzWtpXrW+uqp2rgpVUdUsvZ1KVs3SM9Vl5v46iEV1GG1yKBYO8rMQlRXBbB9Dzq//g/KlUhK/jMbyeYkPfd3KjeN3dQz7P/niIbUKAP5ugMUK0P9fbVMI5k+VTYHYZScWG/6p+zfwIhecxHRL4inbsfzoiG+gpKa/gVQmArnA+F2V/DuTC/gSvJLSjbpVpk/WplCQbCXAn8RTccRHgcCebXNVGoXrTHioHMiPtCsAlWz1nBWg2ogPE/kV0/8dIlAgfLWp51dMQ6xuFkBiFEK2FMT3vZbtTtjrOZVGUYlP+OH4XR0lSfphQVoABZiVgAHVpfc3WwiGq5C1uQBgWAGJRPGH9BJBfOjk31ZO70DqFYDJCsgXmf5vkHrG9N6oOuFVm8lv9//dyJ84ZZA04vPdw13xuaDsyA+pAHJwcQUMZE2kNSuBKpfAHysIiCRbAc5VcvTy5Cfx8BAf5Up+SAVQgI8SgEkR2M1/+/AhK/BnJn8iFUFKk3h48Nj4XR0lS/X1g1QAJngEBe0mvWr7a4/680T/ExQE9DfFE5jE4weaZbpt/K6Okkzz5YVUADbYlABcrAG7AmCRPvG9voEwxK/wsXw3vK6TvyQz/IJAKgAGbIFBN2tA9SB9asgPC8EEh/SSQ3zK7ttZ7r2+GVIBuEDVUyRdrAG7BYC0kh/lTHwUCOzZNlelwe3nk7lPY/u7Sp3aGxRSAfiAYQ3YYVYGSMOwnx2Bie+rNMp6LN+Mgzrx91Ya8Q1IBcAB1TRhgqEM7DECuyLgfJcqFylJ4jFApKflu/eUSzpvGEgFEBA21wAuBGcFDhMLC5mSlcRDPn2vTngie3clBPaCINWzAaOCLZNQogyhyhedCakAYoBUEMWHJLgYpAKQkEgxUr8qsIREmiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREiiEVgIREWgHg/wOz0qZMnNRfvwAAAABJRU5ErkJggg==";
/* harmony default export */ __webpack_exports__["a"] = (VmakerLogo);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isEmpty; });
/**
 * Checks if value is an empty collection.
 * Objects are considered empty if they have no own enumerable string keyed properties.
 * Array, String are considered empty if they have Zero length
 * Falsey values are empty.
 * @param {*} collection The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */

function isEmpty(collection) {
  if (collection) {
    return collection.constructor === Object ? !Object.keys(collection).length > 0 : !collection.length > 0;
  }
  return true;
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sendTabMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sendMessageToPinTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sendDatadogLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sendMessageToIframe; });
/* unused harmony export sendMessageToCamIframe */
/* harmony import */ var _constants_chrome_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* eslint-disable no-console */
/* global chrome */

const LOG_DATADOG_MESSAGE = _constants_chrome_messages__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LOG_DATADOG_MESSAGE;
const sendMessage = function (message) {
  let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let _callbackAction = arguments.length > 2 ? arguments[2] : undefined;
  try {
    // eslint-disable-next-line consistent-return
    chrome.runtime.sendMessage({
      message,
      payload
    }, response => {
      const lastErr = chrome.runtime.lastError;
      if (lastErr) {
        return lastErr;
      }
      if (_callbackAction) {
        _callbackAction(response);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
const sendTabMessage = function (tabId, message) {
  let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let _callbackAction
  // eslint-disable-next-line consistent-return
  = arguments.length > 3 ? arguments[3] : undefined;
  try {
    if (!tabId) {
      sendMessage(message, payload, _callbackAction);
      return false;
    }
    // eslint-disable-next-line consistent-return
    chrome.tabs.sendMessage(tabId, {
      message,
      payload,
      tabId
    }, response => {
      const lastErr = chrome.runtime.lastError;
      if (lastErr) {
        return lastErr;
      }
      if (_callbackAction) {
        _callbackAction(response);
      }
    });
    return true;
  } catch (err) {
    console.log(err);
  }
};
const sendMessageToPinTab = function (message) {
  let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let _callbackAction
  // eslint-disable-next-line consistent-return
  = arguments.length > 2 ? arguments[2] : undefined;
  try {
    // sendMessage("GET_PINNED_TAB_ID", null, (tabId) => {
    //     if (tabId) {
    //         sendTabMessage(tabId, message, payload, _callbackAction)
    //     } else {
    //         sendMessage(message, payload, _callbackAction)
    //     }
    // })
    sendMessage(message, payload, _callbackAction);
    return true;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Send log message from content scripts to background to send to Datadog
 * @param {*} severity 
 * @param {*} message 
 */
const sendDatadogLog = (severity, message, data) => {
  sendMessage(LOG_DATADOG_MESSAGE, {
    severity,
    message,
    data
  });
};
const sendMessageToIframe = (message, payload) => {
  const mediaFrame = document.querySelector('vmaker-container').shadowRoot.querySelector('#vmaker-media-iframe');
  if (mediaFrame) {
    mediaFrame.contentWindow.postMessage({
      message,
      payload
    }, '*');
  }
};
const sendMessageToCamIframe = (message, payload) => {
  const mediaFrame = document.querySelector('vmaker-container').shadowRoot.querySelector('#vmaker-media-iframe-cam');
  if (mediaFrame) {
    mediaFrame.contentWindow.postMessage({
      message,
      payload
    }, '*');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (sendMessage);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var globalObject = getGlobal();

module.exports = exports = globalObject.fetch;

// Needed for TypeScript and Webpack.
if (globalObject.fetch) {
	exports.default = globalObject.fetch.bind(globalObject);
}

exports.Headers = globalObject.Headers;
exports.Request = globalObject.Request;
exports.Response = globalObject.Response;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: createIntl

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/utils.js
var utils = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@formatjs/ecma402-abstract/lib/utils.js
var lib_utils = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/intl-messageformat/lib/src/core.js
var core = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/@formatjs/intl/lib/src/error.js
var error = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/index.js + 10 modules
var lib = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/message.js





function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce(function (all, k) {
        all[k] = Object(tslib_es6["a" /* __assign */])({ timeZone: timeZone }, opts[k]);
        return all;
    }, {});
}
function deepMergeOptions(opts1, opts2) {
    var keys = Object.keys(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, opts1), opts2));
    return keys.reduce(function (all, k) {
        all[k] = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (opts1[k] || {})), (opts2[k] || {}));
        return all;
    }, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
        return f1;
    }
    var mfFormats = core["a" /* IntlMessageFormat */].formats;
    return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
}
function formatMessage(_a, state, messageDescriptor, values, opts) {
    var locale = _a.locale, formats = _a.formats, messages = _a.messages, defaultLocale = _a.defaultLocale, defaultFormats = _a.defaultFormats, fallbackOnEmptyString = _a.fallbackOnEmptyString, onError = _a.onError, timeZone = _a.timeZone, defaultRichTextElements = _a.defaultRichTextElements;
    if (messageDescriptor === void 0) { messageDescriptor = { id: '' }; }
    var msgId = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
    // `id` is a required field of a Message Descriptor.
    Object(lib_utils["a" /* invariant */])(!!msgId, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
    var id = String(msgId);
    var message = 
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    messages &&
        Object.prototype.hasOwnProperty.call(messages, id) &&
        messages[id];
    // IMPORTANT: Hot path if `message` is AST with a single literal node
    if (Array.isArray(message) &&
        message.length === 1 &&
        message[0].type === lib["a" /* TYPE */].literal) {
        return message[0].value;
    }
    // IMPORTANT: Hot path straight lookup for performance
    if (!values &&
        message &&
        typeof message === 'string' &&
        !defaultRichTextElements) {
        return message.replace(/'\{(.*?)\}'/gi, "{$1}");
    }
    values = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, defaultRichTextElements), (values || {}));
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    if (!message) {
        if (fallbackOnEmptyString === false && message === '') {
            return message;
        }
        if (!defaultMessage ||
            (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())) {
            // This prevents warnings from littering the console in development
            // when no `messages` are passed into the <IntlProvider> for the
            // default locale.
            onError(new error["g" /* MissingTranslationError */](messageDescriptor, locale));
        }
        if (defaultMessage) {
            try {
                var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
                return formatter.format(values);
            }
            catch (e) {
                onError(new error["e" /* MessageFormatError */]("Error formatting default message for: \"".concat(id, "\", rendering default message verbatim"), locale, messageDescriptor, e));
                return typeof defaultMessage === 'string' ? defaultMessage : id;
            }
        }
        return id;
    }
    // We have the translated message
    try {
        var formatter = state.getMessageFormat(message, locale, formats, Object(tslib_es6["a" /* __assign */])({ formatters: state }, (opts || {})));
        return formatter.format(values);
    }
    catch (e) {
        onError(new error["e" /* MessageFormatError */]("Error formatting message: \"".concat(id, "\", using ").concat(defaultMessage ? 'default message' : 'id', " as fallback."), locale, messageDescriptor, e));
    }
    if (defaultMessage) {
        try {
            var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
            return formatter.format(values);
        }
        catch (e) {
            onError(new error["e" /* MessageFormatError */]("Error formatting the default message for: \"".concat(id, "\", rendering message verbatim"), locale, messageDescriptor, e));
        }
    }
    if (typeof message === 'string') {
        return message;
    }
    if (typeof defaultMessage === 'string') {
        return defaultMessage;
    }
    return id;
}

// EXTERNAL MODULE: ./node_modules/@formatjs/intl/lib/src/utils.js
var src_utils = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/number.js


var NUMBER_FORMAT_OPTIONS = [
    'localeMatcher',
    'style',
    'currency',
    'currencyDisplay',
    'unit',
    'unitDisplay',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    // ES2020 NumberFormat
    'compactDisplay',
    'currencyDisplay',
    'currencySign',
    'notation',
    'signDisplay',
    'unit',
    'unitDisplay',
    'numberingSystem',
];
function getFormatter(_a, getNumberFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = ((format &&
        Object(src_utils["e" /* getNamedFormat */])(formats, 'number', format, onError)) ||
        {});
    var filteredOptions = Object(src_utils["d" /* filterProps */])(options, NUMBER_FORMAT_OPTIONS, defaults);
    return getNumberFormat(locale, filteredOptions);
}
function formatNumber(config, getNumberFormat, value, options) {
    if (options === void 0) { options = {}; }
    try {
        return getFormatter(config, getNumberFormat, options).format(value);
    }
    catch (e) {
        config.onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting number.', e));
    }
    return String(value);
}
function formatNumberToParts(config, getNumberFormat, value, options) {
    if (options === void 0) { options = {}; }
    try {
        return getFormatter(config, getNumberFormat, options).formatToParts(value);
    }
    catch (e) {
        config.onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting number.', e));
    }
    return [];
}

// EXTERNAL MODULE: ./node_modules/intl-messageformat/lib/src/error.js
var src_error = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/relativeTime.js



var RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'];
function relativeTime_getFormatter(_a, getRelativeTimeFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = (!!format && Object(src_utils["e" /* getNamedFormat */])(formats, 'relative', format, onError)) || {};
    var filteredOptions = Object(src_utils["d" /* filterProps */])(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
    return getRelativeTimeFormat(locale, filteredOptions);
}
function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
    if (options === void 0) { options = {}; }
    if (!unit) {
        unit = 'second';
    }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    if (!RelativeTimeFormat) {
        config.onError(new src_error["b" /* FormatError */]("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", src_error["a" /* ErrorCode */].MISSING_INTL_API));
    }
    try {
        return relativeTime_getFormatter(config, getRelativeTimeFormat, options).format(value, unit);
    }
    catch (e) {
        config.onError(new error["c" /* IntlFormatError */]('Error formatting relative time.', config.locale, e));
    }
    return String(value);
}

// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/dateTime.js



var DATE_TIME_FORMAT_OPTIONS = [
    'localeMatcher',
    'formatMatcher',
    'timeZone',
    'hour12',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName',
    'hourCycle',
    'dateStyle',
    'timeStyle',
    'calendar',
    // 'dayPeriod',
    'numberingSystem',
];
function dateTime_getFormatter(_a, type, getDateTimeFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError, timeZone = _a.timeZone;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (timeZone && { timeZone: timeZone })), (format && Object(src_utils["e" /* getNamedFormat */])(formats, type, format, onError)));
    var filteredOptions = Object(src_utils["d" /* filterProps */])(options, DATE_TIME_FORMAT_OPTIONS, defaults);
    if (type === 'time' &&
        !filteredOptions.hour &&
        !filteredOptions.minute &&
        !filteredOptions.second &&
        !filteredOptions.timeStyle &&
        !filteredOptions.dateStyle) {
        // Add default formatting options if hour, minute, or second isn't defined.
        filteredOptions = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, filteredOptions), { hour: 'numeric', minute: 'numeric' });
    }
    return getDateTimeFormat(locale, filteredOptions);
}
function formatDate(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return dateTime_getFormatter(config, 'date', getDateTimeFormat, options).format(date);
    }
    catch (e) {
        config.onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting date.', e));
    }
    return String(date);
}
function formatTime(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return dateTime_getFormatter(config, 'time', getDateTimeFormat, options).format(date);
    }
    catch (e) {
        config.onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting time.', e));
    }
    return String(date);
}
function formatDateTimeRange(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var from = _a[0], to = _a[1], _b = _a[2], options = _b === void 0 ? {} : _b;
    var timeZone = config.timeZone, locale = config.locale, onError = config.onError;
    var filteredOptions = Object(src_utils["d" /* filterProps */])(options, DATE_TIME_FORMAT_OPTIONS, timeZone ? { timeZone: timeZone } : {});
    try {
        return getDateTimeFormat(locale, filteredOptions).formatRange(from, to);
    }
    catch (e) {
        onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting date time range.', e));
    }
    return String(from);
}
function formatDateToParts(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return dateTime_getFormatter(config, 'date', getDateTimeFormat, options).formatToParts(date);
    }
    catch (e) {
        config.onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting date.', e));
    }
    return [];
}
function formatTimeToParts(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return dateTime_getFormatter(config, 'time', getDateTimeFormat, options).formatToParts(date);
    }
    catch (e) {
        config.onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting time.', e));
    }
    return [];
}

// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/plural.js



var PLURAL_FORMAT_OPTIONS = [
    'localeMatcher',
    'type',
];
function formatPlural(_a, getPluralRules, value, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    if (!Intl.PluralRules) {
        onError(new src_error["b" /* FormatError */]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", src_error["a" /* ErrorCode */].MISSING_INTL_API));
    }
    var filteredOptions = Object(src_utils["d" /* filterProps */])(options, PLURAL_FORMAT_OPTIONS);
    try {
        return getPluralRules(locale, filteredOptions).select(value);
    }
    catch (e) {
        onError(new error["c" /* IntlFormatError */]('Error formatting plural.', locale, e));
    }
    return 'other';
}

// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/list.js




var LIST_FORMAT_OPTIONS = [
    'localeMatcher',
    'type',
    'style',
];
var now = Date.now();
function generateToken(i) {
    return "".concat(now, "_").concat(i, "_").concat(now);
}
function formatList(opts, getListFormat, values, options) {
    if (options === void 0) { options = {}; }
    var results = formatListToParts(opts, getListFormat, values, options).reduce(function (all, el) {
        var val = el.value;
        if (typeof val !== 'string') {
            all.push(val);
        }
        else if (typeof all[all.length - 1] === 'string') {
            all[all.length - 1] += val;
        }
        else {
            all.push(val);
        }
        return all;
    }, []);
    return results.length === 1 ? results[0] : results;
}
function formatListToParts(_a, getListFormat, values, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var ListFormat = Intl.ListFormat;
    if (!ListFormat) {
        onError(new src_error["b" /* FormatError */]("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", src_error["a" /* ErrorCode */].MISSING_INTL_API));
    }
    var filteredOptions = Object(src_utils["d" /* filterProps */])(options, LIST_FORMAT_OPTIONS);
    try {
        var richValues_1 = {};
        var serializedValues = values.map(function (v, i) {
            if (typeof v === 'object') {
                var id = generateToken(i);
                richValues_1[id] = v;
                return id;
            }
            return String(v);
        });
        return getListFormat(locale, filteredOptions)
            .formatToParts(serializedValues)
            .map(function (part) {
            return part.type === 'literal'
                ? part
                : Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, part), { value: richValues_1[part.value] || part.value });
        });
    }
    catch (e) {
        onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting list.', e));
    }
    // @ts-ignore
    return values;
}

// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/displayName.js



var DISPLAY_NAMES_OPTONS = [
    'localeMatcher',
    'style',
    'type',
    'fallback',
];
function formatDisplayName(_a, getDisplayNames, value, options) {
    var locale = _a.locale, onError = _a.onError;
    var DisplayNames = Intl.DisplayNames;
    if (!DisplayNames) {
        onError(new src_error["b" /* FormatError */]("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", src_error["a" /* ErrorCode */].MISSING_INTL_API));
    }
    var filteredOptions = Object(src_utils["d" /* filterProps */])(options, DISPLAY_NAMES_OPTONS);
    try {
        return getDisplayNames(locale, filteredOptions).of(value);
    }
    catch (e) {
        onError(new error["a" /* IntlError */](error["b" /* IntlErrorCode */].FORMAT_ERROR, 'Error formatting display name.', e));
    }
}

// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/create-intl.js










function messagesContainString(messages) {
    var firstMessage = messages ? messages[Object.keys(messages)[0]] : undefined;
    return typeof firstMessage === 'string';
}
function verifyConfigMessages(config) {
    if (config.onWarn &&
        config.defaultRichTextElements &&
        messagesContainString(config.messages || {})) {
        config.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
    }
}
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
function createIntl(config, cache) {
    var formatters = Object(src_utils["b" /* createFormatters */])(cache);
    var resolvedConfig = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, src_utils["a" /* DEFAULT_INTL_CONFIG */]), config);
    var locale = resolvedConfig.locale, defaultLocale = resolvedConfig.defaultLocale, onError = resolvedConfig.onError;
    if (!locale) {
        if (onError) {
            onError(new error["d" /* InvalidConfigError */]("\"locale\" was not configured, using \"".concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details")));
        }
        // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.
        resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
    }
    else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
        onError(new error["f" /* MissingDataError */]("Missing locale data for locale: \"".concat(locale, "\" in Intl.NumberFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details")));
    }
    else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length &&
        onError) {
        onError(new error["f" /* MissingDataError */]("Missing locale data for locale: \"".concat(locale, "\" in Intl.DateTimeFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details")));
    }
    verifyConfigMessages(resolvedConfig);
    return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, resolvedConfig), { formatters: formatters, formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat), formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat), formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat), formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateTimeRange: formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules), formatMessage: formatMessage.bind(null, resolvedConfig, formatters), $t: formatMessage.bind(null, resolvedConfig, formatters), formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat), formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat), formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames) });
}

// EXTERNAL MODULE: ./node_modules/intl-messageformat/lib/src/formatters.js
var src_formatters = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/react-intl/lib/src/components/provider.js
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */






function processIntlConfig(config) {
    return {
        locale: config.locale,
        timeZone: config.timeZone,
        fallbackOnEmptyString: config.fallbackOnEmptyString,
        formats: config.formats,
        textComponent: config.textComponent,
        messages: config.messages,
        defaultLocale: config.defaultLocale,
        defaultFormats: config.defaultFormats,
        onError: config.onError,
        onWarn: config.onWarn,
        wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
        defaultRichTextElements: config.defaultRichTextElements,
    };
}
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
    if (!values) {
        return values;
    }
    return Object.keys(values).reduce(function (acc, k) {
        var v = values[k];
        acc[k] = Object(src_formatters["c" /* isFormatXMLElementFn */])(v)
            ? Object(utils["b" /* assignUniqueKeysToParts */])(v)
            : v;
        return acc;
    }, {});
}
var provider_formatMessage = function (config, formatters, descriptor, rawValues) {
    var rest = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        rest[_i - 4] = arguments[_i];
    }
    var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
    var chunks = formatMessage.apply(void 0, Object(tslib_es6["d" /* __spreadArray */])([config,
        formatters,
        descriptor,
        values], rest, false));
    if (Array.isArray(chunks)) {
        return react["Children"].toArray(chunks);
    }
    return chunks;
};
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
var provider_createIntl = function (_a, cache) {
    var rawDefaultRichTextElements = _a.defaultRichTextElements, config = Object(tslib_es6["c" /* __rest */])(_a, ["defaultRichTextElements"]);
    var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
    var coreIntl = createIntl(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, utils["a" /* DEFAULT_INTL_CONFIG */]), config), { defaultRichTextElements: defaultRichTextElements }), cache);
    return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, coreIntl), { formatMessage: provider_formatMessage.bind(null, {
            locale: coreIntl.locale,
            timeZone: coreIntl.timeZone,
            fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
            formats: coreIntl.formats,
            defaultLocale: coreIntl.defaultLocale,
            defaultFormats: coreIntl.defaultFormats,
            messages: coreIntl.messages,
            onError: coreIntl.onError,
            defaultRichTextElements: defaultRichTextElements,
        }, coreIntl.formatters) });
};
var provider_IntlProvider = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(IntlProvider, _super);
    function IntlProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cache = Object(src_utils["c" /* createIntlCache */])();
        _this.state = {
            cache: _this.cache,
            intl: provider_createIntl(processIntlConfig(_this.props), _this.cache),
            prevConfig: processIntlConfig(_this.props),
        };
        return _this;
    }
    IntlProvider.getDerivedStateFromProps = function (props, _a) {
        var prevConfig = _a.prevConfig, cache = _a.cache;
        var config = processIntlConfig(props);
        if (!Object(utils["d" /* shallowEqual */])(prevConfig, config)) {
            return {
                intl: provider_createIntl(config, cache),
                prevConfig: config,
            };
        }
        return null;
    };
    IntlProvider.prototype.render = function () {
        Object(utils["c" /* invariantIntlContext */])(this.state.intl);
        return react["createElement"](injectIntl["b" /* Provider */], { value: this.state.intl }, this.props.children);
    };
    IntlProvider.displayName = 'IntlProvider';
    IntlProvider.defaultProps = utils["a" /* DEFAULT_INTL_CONFIG */];
    return IntlProvider;
}(react["PureComponent"]));
/* harmony default export */ var provider = __webpack_exports__["a"] = (provider_IntlProvider);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SETUP_MOUSEPOS_LISTENER: 'SETUP_MOUSEPOS_LISTENER',
  REMOVE_MOUSEPOS_LISTENER: 'REMOVE_MOUSEPOS_LISTENER',
  SET_POINTER_EVENTS: 'SET_POINTER_EVENTS',
  SET_POINTER_EVENTS_FOR_IFRAME: 'SET_POINTER_EVENTS_FOR_IFRAME',
  TOGGLE_APP: 'TOGGLE_APP',
  INITIALISE_SENTRY: 'INITIALISE_SENTRY',
  CLOSE_MEDIA_PICKER_IF_EXISTS: 'CLOSE_MEDIA_PICKER_IF_EXISTS',
  HIDE_APP: 'HIDE_APP',
  SHOW_APP: 'SHOW_APP',
  CAM_STREAM_LOADED: 'CAM_STREAM_LOADED',
  GET_VMAKER_LOGS: 'GET_VMAKER_LOGS',
  NO_VIDEO_STREAM_ERROR: 'NO_VIDEO_STREAM_ERROR',
  NO_BLOB_GENERATOR_ERROR: 'NO_BLOB_GENERATOR_ERROR',
  OPEN_IN_PLAYER_PAGE: 'OPEN_IN_PLAYER_PAGE',
  LOG_DATADOG_MESSAGE: 'LOG_DATADOG_MESSAGE',
  OPEN_FROM_EXTERNAL_BUTTON: 'OPEN_FROM_EXTERNAL_BUTTON',
  RELAUNCH_EXTENSION: 'RELAUNCH_EXTENSION',
  HIDE_IF_VISIBLE: 'HIDE_IF_VISIBLE',
  GET_BACKGROUND_STATE: 'GET_BACKGROUND_STATE',
  GET_CURRENT_RECORDING_TIME: 'GET_CURRENT_RECORDING_TIME',
  GET_CLICK_EVENTS: 'GET_CLICK_EVENTS',
  EMPTY_CLICK_EVENTS: 'EMPTY_CLICK_EVENTS',
  GET_HOVER_MODAL_DATA: 'GET_HOVER_MODAL_DATA',
  GET_POST_RECORD_MODAL_DATA: 'GET_POST_RECORD_MODAL_DATA',
  SET_REQUEST_URLS: 'SET_REQUEST_URLS',
  START_ICON_COUNTDOWN: 'START_ICON_COUNTDOWN',
  STOP_ICON_COUNTDOWN: 'STOP_ICON_COUNTDOWN',
  START_VM_RECORDING_PIN: 'START_VM_RECORDING_PIN',
  STOP_VM_RECORDING_PIN: 'STOP_VM_RECORDING_PIN',
  CANCEL_VM_RECORDING_PIN: 'CANCEL_VM_RECORDING_PIN',
  PAUSE_VM_RECORDING_PIN: 'PAUSE_VM_RECORDING_PIN',
  RESUME_VM_RECORDING_PIN: 'RESUME_VM_RECORDING_PIN',
  MUTE_VM_RECORDING_PIN: 'MUTE_VM_RECORDING_PIN',
  UNMUTE_VM_RECORDING_PIN: 'UNMUTE_VM_RECORDING_PIN',
  RESUME_FROM_CANCEL_PROMPT: 'RESUME_FROM_CANCEL_PROMPT',
  PAUSE_FOR_CANCEL_PROMPT: 'PAUSE_FOR_CANCEL_PROMPT',
  STORE_MAIN_TAB_ID: 'STORE_MAIN_TAB_ID',
  UPDATE_RECORDING_STATE: 'UPDATE_RECORDING_STATE',
  INITIATE_SCRIPT_INJECTION: 'INITIATE_SCRIPT_INJECTION',
  REQUEST_SCREEN_RECORDING: 'REQUEST_SCREEN_RECORDING',
  REQUEST_CAMERA_RECORDING: 'REQUEST_CAMERA_RECORDING',
  RECORDING_STREAM_STARTED: 'RECORDING_STREAM_STARTED',
  RECORDING_STREAM_ERROR: 'RECORDING_STREAM_ERROR',
  RECORDING_CANCELLED: 'RECORDING_CANCELLED',
  UPDATE_REDUX_DATA: 'UPDATE_REDUX_DATA',
  INITIALISE_SOCKET: 'INITIALISE_SOCKET',
  STORE_SOCKET_ID: 'STORE_SOCKET_ID',
  CHECK_FOR_UPDATES: 'CHECK_FOR_UPDATES',
  UPDATE_AVAILABLE: 'UPDATE_AVAILABLE',
  OPEN_UPDATE_PAGE: 'OPEN_UPDATE_PAGE',
  NO_UPDATE_AVAILABLE: 'NO_UPDATE_AVAILABLE',
  SEND_SOCIAL_AUTH_RESPONSE: 'SEND_SOCIAL_AUTH_RESPONSE',
  STOPPED_FROM_BACKGROUND: 'STOPPED_FROM_BACKGROUND',
  CANCEL_FROM_BACKGROUND: 'CANCEL_FROM_BACKGROUND',
  MUTE_AND_UNMUTE_FROM_BACKGROUND: 'MUTE_AND_UNMUTE_FROM_BACKGROUND',
  PAUSE_AND_RESUME_FROM_BACKGROUND: 'PAUSE_AND_RESUME_FROM_BACKGROUND',
  SEND_MOUSE_HIGHLIGHT_COORDINATES: 'SEND_MOUSE_HIGHLIGHT_COORDINATES',
  INSERT_LAST_RECORDING_IN_GMAIL: 'INSERT_LAST_RECORDING_IN_GMAIL',
  INSERT_LINK_IN_GMAIL: 'INSERT_LINK_IN_GMAIL',
  OPEN_AUTH_TAB: 'OPEN_AUTH_TAB',
  CLOSE_AUTH_TAB: 'CLOSE_AUTH_TAB',
  CANCEL_RECORDING_UPLOAD_ERROR: 'CANCEL_RECORDING_UPLOAD_ERROR',
  RECORD_MAX_TIMER_ALERT: 'RECORD_MAX_TIMER_ALERT',
  RECORD_MAX_TIMER_RESUME: 'RECORD_MAX_TIMER_RESUME',
  RECORD_MAX_TIMER_STOP: 'RECORD_MAX_TIMER_STOP',
  GET_DEVICES: 'GET_DEVICES',
  DEVICES_LIST: 'DEVICES_LIST',
  SET_RESOLUTIONS: 'SET_RESOLUTIONS',
  RESUME_SET_POINTER: 'RESUME_SET_POINTER',
  GET_INTEGRATION_OPTIONS: 'GET_INTEGRATION_OPTIONS',
  CHECK_PENDING_FROM_INITIATE: 'CHECK_PENDING_FROM_INITIATE',
  STOP_MEDIA_STREAMS_ON_ERROR: 'STOP_MEDIA_STREAMS_ON_ERROR',
  RESTRICT_TIMER_COUNTER: 'RESTRICT_TIMER_COUNTER',
  OPEN_URL: 'OPEN_URL',
  PROCEED_AUTH: 'PROCEED_AUTH',
  VMAKER_AUTH_RESPONSE: 'VMAKER_AUTH_RESPONSE',
  INJECT_RECORDER_WIDGET: 'INJECT_RECORDER_WIDGET',
  TOGGLE_RECORDER_WIDGET: 'TOGGLE_RECORDER_WIDGET',
  GET_MEDIA_DEVICES: 'GET_MEDIA_DEVICES',
  MEDIA_DEVICES_LIST: 'MEDIA_DEVICES_LIST',
  SOURCE_OF_LAUNCH: 'SOURCE_OF_LAUNCH',
  IS_OPENED_FROM_EXTERNAL: 'IS_OPENED_FROM_EXTERNAL',
  UPDATE_RECORDER_CONFIG: 'UPDATE_RECORDER_CONFIG',
  GET_ACTIVE_TAB: 'GET_ACTIVE_TAB',
  CHECK_FOR_PENDING: 'CHECK_FOR_PENDING',
  REMOVE_RECORDER_LISTENER: 'REMOVE_RECORDER_LISTENER',
  PLAY_STOP_SOUND: 'PLAY_STOP_SOUND',
  STOP_FROM_BACKGROUND: 'STOP_FROM_BACKGROUND',
  SET_RECORDING_TO_FALSE: 'SET_RECORDING_TO_FALSE',
  SEND_REQUEST_URLS: 'SEND_REQUEST_URLS',
  ADD_TAB_SWITCH_LISTENER: 'ADD_TAB_SWITCH_LISTENER',
  REMOVE_TAB_SWITCH_LISTENER: 'REMOVE_TAB_SWITCH_LISTENER',
  APP_LOADED: 'APP_LOADED',
  CLEAR_NO_BLOB_TIMEOUT: 'CLEAR_NO_BLOB_TIMEOUT',
  GET_CURRENT_TAB_ID: 'GET_CURRENT_TAB_ID',
  REMOVE_BLURRED_CLASS: 'REMOVE_BLURRED_CLASS',
  CLEAR_ALL_BLUR: 'CLEAR_ALL_BLUR',
  GET_REFRESHED_TAB: 'GET_REFRESHED_TAB',
  HIDE_ALL_BUT_BLUR: 'HIDE_ALL_BUT_BLUR',
  SHOW_ALL: 'SHOW_ALL',
  REMOVE_APP_FROM_TABS: 'REMOVE_APP_FROM_TABS'
});

/***/ })

/******/ });