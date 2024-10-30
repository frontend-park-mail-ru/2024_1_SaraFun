/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Rubik-Regular.woff */ "./src/assets/fonts/Rubik-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Rubik-Regular.woff2 */ "./src/assets/fonts/Rubik-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/background.svg */ "./src/assets/img/background.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Rubik';
    src:  url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
          url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
}

body {
    font-family: 'Rubik', sans-serif;
    background-color: var(--primary);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-position: center;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: var(--nav-width);
}

:root {
    --primary: #B9F1D9FF;
    --secondary: #49B2A6FF;
    --red1: #FF1A1AFF;
    --error: #FF6275FF;
    --warning: #FAC748FF;
    --success: #204E4AFF;
    --white1: #FFFFFFFF;
    --black1: #000000FF;
    --grey1: #C4C4C4FF;
    --grey2: #8C8C8CFF;
    --nav-width: 55px;
}

.h1 {
    font-family: Rubik;
    filter: blur(2.0000rem);
    line-height: normal;
    letter-spacing: 0.0000%;
    font-weight: 700;
}

.text-base {
    font-family: Rubik;
    filter: blur(1.0000rem);
    line-height: normal;
    letter-spacing: 0.0000%;
    font-weight: 400;
}
  
.h2 {
    font-family: Rubik;
    filter: blur(1.5000rem);
    line-height: normal;
    letter-spacing: 0.0000%;
    font-weight: 600;
}
  
.h3 {
    font-family: Rubik;
    filter: blur(1.1875rem);
    line-height: normal;
    letter-spacing: 0.0000%;
    font-weight: 500;
}
  
.link {
    font-family: Rubik;
    filter: blur(1.0000rem);
    line-height: normal;
    letter-spacing: 0.0000%;
    font-weight: 400;
}
  
.text-base-medium {
    font-family: Rubik;
    filter: blur(1.0000rem);
    line-height: normal;
    letter-spacing: 0.0000%;
    font-weight: 500;
}

.container {
    background-color: var(--white1);
    border-radius: 25px;
    width: 70vw;
    min-width: 700px;
    height: 85vh;
    min-height: 592px;
    display: flex;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
}

.form-section {
    width: 50%;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}



.logo img {
    width: 150px;
    user-select: none;
    pointer-events: none;
}

a {
    color: var(--secondary);
}

.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--white1);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding: 0 10%;
}

.nav button {
    width: 180px;
    align-self: center;
    padding: 12px; 
    background-color: var(--secondary);
    color: var(--white1);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 0px;
    box-sizing: border-box;
}

.nav__logo {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    pointer-events: none;
}

.nav__logo img{
    height: 100%; 
    object-fit: cover;
    object-position: center; 
}

.nav-link {
    display: block;
    padding: 12px 18px;
    text-decoration: none;
    color: var(--black1);
}

.nav-link:hover {
    background: var(--primary);
    border-radius: 10px;
}

.main-nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

.main-nav ul li a{
    color: var(--black1);
    text-decoration: none;
}

.form-section-tinder {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.footer-text {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-top: auto;
    gap: 1em;
    color: var(--grey2);
}

.footer-text a {
    color: var(--secondary);
    text-decoration: none;
}

.footer-text a:hover {
    text-decoration: underline;
}

.image-section-wrapper {
    width: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
}
.image-section {
    width: 50%; 
    background-color: var(--secondary);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    pointer-events: none;
}
label {
    margin-bottom: 8px;
    display: block;
    color: var(--black1);
}
input[type="text"], input[type="password"] {
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
    font-size: 14px;
    box-sizing: border-box;
}
button {
    width: 100%; 
    padding: 12px; 
    background-color: var(--secondary);
    color: var(--white1);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 12px;
    box-sizing: border-box;
}
button:hover {
    background-color: var(--success);
}
.error {
    color: var(--error);
    font-size: 12px;
    margin-bottom: 8px;
    display: none; 
}
.image-section img {
    height: 100%; 
    object-fit: cover;
    object-position: center; 
}
.description {
    align-self: center;
    margin-bottom: 20px; 
}

.card {
    display: flex;
    flex-direction: column;
    height: 100vh; 
}
.card-content {
    flex: 1;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    background-color: var(--secondary);
    color: var(--white1);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    box-sizing: border-box;
    transition: background-color 0.3s ease;
}
.btn:hover {
    background-color: var(--success);
}
.btn span {
    margin-left: 8px; 
}
.error {
    color: var(--error);
    font-size: 12px;
    margin-bottom: 8px;
    display: none; 
}
.btn::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 8px;
}
/* .btn.skip::before {
    background-image: url('../assets/icons/skip.svg');
}
.btn.like::before {
    background-image: url('../assets/icons/like.svg');
}
.btn.photo::before {
    background-image: url('../assets/icons/photo.svg');
}
.btn.gift::before {
    background-image: url('../assets/icons/gift.svg');
} */

.card-actions {
    display: flex;
    gap: 20px; 
    justify-content: center;
    align-self: center;
    margin-top: auto;
}

.tinder--buttons {
    display:flex;
    justify-content: center;
    flex: 0 0 100px;
    padding-top: 10px;
    gap: 20px; 
}

.custom-btn {
    display: flex;
    background-color: var(--secondary);
    border: none;
    border-radius: 70%;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    position: relative; 
}

.tinder--buttons button {
    border-radius: 50%;
    line-height: 60px;
    width: 80px;
    height: 80px;
    border: none;
    background: var(--secondary);
    display: inline-block;
    margin: 0 8px;
    justify-content: center;
    align-items: center;
    position: relative; 
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.tinder--buttons button img{
    width: 75%;
    height: 75%;
    object-fit: contain;
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
}

.custom-btn img {
    width: 75%;
    height: 75%;
    object-fit: contain;
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
}

.tinder {
    width: 100vw;
    height: 92vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    opacity: 1;
    transition: opacity 0.1s ease-in-out;
}

.loaded.tinder {
    opacity: 1;
}

.tinder--cards {
    flex-grow: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1;
}

.tinder--card {
    padding: 20px;
    display: inline-block;
    width: 65vw;
    height: 75vh;
    background: var(--white1);
    border-radius: 12px;
    overflow: hidden;
    position: absolute;
    will-change: transform;
    transition: all 0.3s ease-in-out;
    cursor: grab;
    display: flex;
    user-select: none;
    opacity: 1;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.image-section-tinder {
    width: 50%; 
    background-color: var(--secondary);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    pointer-events: none;
}

.image-section-tinder img {
    height: 100%; 
    object-fit: cover;
    user-select: none;
    object-position: center; 
    pointer-events: none;
}

*, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.moving.tinder--card {
    transition: none;
    cursor: grabbing;
}
  
.tinder--card p {
    font-size: 20px;
    padding: 0 16px;
    pointer-events: none;
}
  
.tinder--buttons button:focus {
    outline: 0;
}
  
.tinder--buttons i {
    font-size: 32px;
    vertical-align: middle;
}

.fa-heart img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    position: absolute;
}

.gender-selection {
    display: flex;
    align-items: center;
}

.gender-selection input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #fff;
    border: 2px solid var(--secondary, #49B2A6FF);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    outline: none;
    margin-right: 10px;
}

.gender-selection input[type="radio"]:checked::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--secondary, #49B2A6FF);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.gender-selection label {
    margin-right: 20px;
    color: var(--secondary, #49B2A6FF);
}

input[type="range"] {
    -webkit-appearance: none; 
    width: 100%;
    height: 8px;
    background: #ddd;
    border-radius: 5px;
    outline: none; 
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; 
    appearance: none; 
    width: 20px; 
    height: 20px; 
    background: var(--secondary); 
    border-radius: 50%; 
    cursor: pointer; 
}

input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: var(--secondary);
    border-radius: 50%;
    cursor: pointer;
}

output {
    margin-top: 10px;
    font-size: 16px;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB;gEAC8D;AAClE;;AAEA;IACI,gCAAgC;IAChC,gCAAgC;IAChC,yDAAkD;IAClD,sBAAsB;IACtB,2BAA2B;IAC3B,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,2CAA2C;IAC3C,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;;;AAIA;IACI,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,wBAAwB;IACxB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,2CAA2C;IAC3C,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,kCAAkC;IAClC,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,kCAAkC;IAClC,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,oBAAoB;AACxB;AACA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,oBAAoB;IACpB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,gCAAgC;AACpC;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,kCAAkC;IAClC,oBAAoB;IACpB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,sBAAsB;IACtB,sCAAsC;AAC1C;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,WAAW;IACX,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,4BAA4B;IAC5B,iBAAiB;AACrB;AACA;;;;;;;;;;;GAWG;;AAEH;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,qBAAqB;IACrB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,2CAA2C;AAC/C;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,UAAU;IACV,2CAA2C;AAC/C;;AAEA;IACI,UAAU;IACV,kCAAkC;IAClC,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,sBAAsB;IACtB,6CAA6C;IAC7C,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uCAAuC;IACvC,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'Rubik';\n    src:  url('./assets/fonts/Rubik-Regular.woff') format('woff2'),\n          url('./assets/fonts/Rubik-Regular.woff2') format('woff');\n}\n\nbody {\n    font-family: 'Rubik', sans-serif;\n    background-color: var(--primary);\n    background-image: url(./assets/img/background.svg);\n    background-size: cover;\n    background-position: center;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    padding-top: var(--nav-width);\n}\n\n:root {\n    --primary: #B9F1D9FF;\n    --secondary: #49B2A6FF;\n    --red1: #FF1A1AFF;\n    --error: #FF6275FF;\n    --warning: #FAC748FF;\n    --success: #204E4AFF;\n    --white1: #FFFFFFFF;\n    --black1: #000000FF;\n    --grey1: #C4C4C4FF;\n    --grey2: #8C8C8CFF;\n    --nav-width: 55px;\n}\n\n.h1 {\n    font-family: Rubik;\n    filter: blur(2.0000rem);\n    line-height: normal;\n    letter-spacing: 0.0000%;\n    font-weight: 700;\n}\n\n.text-base {\n    font-family: Rubik;\n    filter: blur(1.0000rem);\n    line-height: normal;\n    letter-spacing: 0.0000%;\n    font-weight: 400;\n}\n  \n.h2 {\n    font-family: Rubik;\n    filter: blur(1.5000rem);\n    line-height: normal;\n    letter-spacing: 0.0000%;\n    font-weight: 600;\n}\n  \n.h3 {\n    font-family: Rubik;\n    filter: blur(1.1875rem);\n    line-height: normal;\n    letter-spacing: 0.0000%;\n    font-weight: 500;\n}\n  \n.link {\n    font-family: Rubik;\n    filter: blur(1.0000rem);\n    line-height: normal;\n    letter-spacing: 0.0000%;\n    font-weight: 400;\n}\n  \n.text-base-medium {\n    font-family: Rubik;\n    filter: blur(1.0000rem);\n    line-height: normal;\n    letter-spacing: 0.0000%;\n    font-weight: 500;\n}\n\n.container {\n    background-color: var(--white1);\n    border-radius: 25px;\n    width: 70vw;\n    min-width: 700px;\n    height: 85vh;\n    min-height: 592px;\n    display: flex;\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n    box-sizing: border-box;\n}\n\n.form-section {\n    width: 50%;\n    padding-right: 20px;\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n}\n\n\n\n.logo img {\n    width: 150px;\n    user-select: none;\n    pointer-events: none;\n}\n\na {\n    color: var(--secondary);\n}\n\n.nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: var(--nav-width);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: var(--white1);\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n    padding: 0 10%;\n}\n\n.nav button {\n    width: 180px;\n    align-self: center;\n    padding: 12px; \n    background-color: var(--secondary);\n    color: var(--white1);\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n    font-size: 16px;\n    margin-bottom: 0px;\n    box-sizing: border-box;\n}\n\n.nav__logo {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n    pointer-events: none;\n}\n\n.nav__logo img{\n    height: 100%; \n    object-fit: cover;\n    object-position: center; \n}\n\n.nav-link {\n    display: block;\n    padding: 12px 18px;\n    text-decoration: none;\n    color: var(--black1);\n}\n\n.nav-link:hover {\n    background: var(--primary);\n    border-radius: 10px;\n}\n\n.main-nav ul {\n    list-style: none;\n    display: flex;\n    gap: 20px;\n}\n\n.main-nav ul li a{\n    color: var(--black1);\n    text-decoration: none;\n}\n\n.form-section-tinder {\n    width: 50%;\n    padding: 20px;\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n}\n\n.footer-text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: auto;\n    gap: 1em;\n    color: var(--grey2);\n}\n\n.footer-text a {\n    color: var(--secondary);\n    text-decoration: none;\n}\n\n.footer-text a:hover {\n    text-decoration: underline;\n}\n\n.image-section-wrapper {\n    width: 50%; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.image-section {\n    width: 50%; \n    background-color: var(--secondary);\n    border-radius: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n    pointer-events: none;\n}\nlabel {\n    margin-bottom: 8px;\n    display: block;\n    color: var(--black1);\n}\ninput[type=\"text\"], input[type=\"password\"] {\n    width: 100%;\n    padding: 12px;\n    border-radius: 6px;\n    border: 1px solid #ccc;\n    margin-bottom: 16px;\n    font-size: 14px;\n    box-sizing: border-box;\n}\nbutton {\n    width: 100%; \n    padding: 12px; \n    background-color: var(--secondary);\n    color: var(--white1);\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    font-size: 16px;\n    margin-bottom: 12px;\n    box-sizing: border-box;\n}\nbutton:hover {\n    background-color: var(--success);\n}\n.error {\n    color: var(--error);\n    font-size: 12px;\n    margin-bottom: 8px;\n    display: none; \n}\n.image-section img {\n    height: 100%; \n    object-fit: cover;\n    object-position: center; \n}\n.description {\n    align-self: center;\n    margin-bottom: 20px; \n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    height: 100vh; \n}\n.card-content {\n    flex: 1;\n}\n\n.btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 8px 16px;\n    background-color: var(--secondary);\n    color: var(--white1);\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 14px;\n    box-sizing: border-box;\n    transition: background-color 0.3s ease;\n}\n.btn:hover {\n    background-color: var(--success);\n}\n.btn span {\n    margin-left: 8px; \n}\n.error {\n    color: var(--error);\n    font-size: 12px;\n    margin-bottom: 8px;\n    display: none; \n}\n.btn::before {\n    content: '';\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    margin-right: 8px;\n}\n/* .btn.skip::before {\n    background-image: url('../assets/icons/skip.svg');\n}\n.btn.like::before {\n    background-image: url('../assets/icons/like.svg');\n}\n.btn.photo::before {\n    background-image: url('../assets/icons/photo.svg');\n}\n.btn.gift::before {\n    background-image: url('../assets/icons/gift.svg');\n} */\n\n.card-actions {\n    display: flex;\n    gap: 20px; \n    justify-content: center;\n    align-self: center;\n    margin-top: auto;\n}\n\n.tinder--buttons {\n    display:flex;\n    justify-content: center;\n    flex: 0 0 100px;\n    padding-top: 10px;\n    gap: 20px; \n}\n\n.custom-btn {\n    display: flex;\n    background-color: var(--secondary);\n    border: none;\n    border-radius: 70%;\n    width: 80px;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n    position: relative; \n}\n\n.tinder--buttons button {\n    border-radius: 50%;\n    line-height: 60px;\n    width: 80px;\n    height: 80px;\n    border: none;\n    background: var(--secondary);\n    display: inline-block;\n    margin: 0 8px;\n    justify-content: center;\n    align-items: center;\n    position: relative; \n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.tinder--buttons button img{\n    width: 75%;\n    height: 75%;\n    object-fit: contain;\n    position: absolute;\n    top: 50%; \n    left: 50%; \n    transform: translate(-50%, -50%);\n}\n\n.custom-btn img {\n    width: 75%;\n    height: 75%;\n    object-fit: contain;\n    position: absolute;\n    top: 50%; \n    left: 50%; \n    transform: translate(-50%, -50%);\n}\n\n.tinder {\n    width: 100vw;\n    height: 92vh;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    opacity: 1;\n    transition: opacity 0.1s ease-in-out;\n}\n\n.loaded.tinder {\n    opacity: 1;\n}\n\n.tinder--cards {\n    flex-grow: 1;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    z-index: 1;\n}\n\n.tinder--card {\n    padding: 20px;\n    display: inline-block;\n    width: 65vw;\n    height: 75vh;\n    background: var(--white1);\n    border-radius: 12px;\n    overflow: hidden;\n    position: absolute;\n    will-change: transform;\n    transition: all 0.3s ease-in-out;\n    cursor: grab;\n    display: flex;\n    user-select: none;\n    opacity: 1;\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.image-section-tinder {\n    width: 50%; \n    background-color: var(--secondary);\n    border-radius: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n    pointer-events: none;\n}\n\n.image-section-tinder img {\n    height: 100%; \n    object-fit: cover;\n    user-select: none;\n    object-position: center; \n    pointer-events: none;\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n.moving.tinder--card {\n    transition: none;\n    cursor: grabbing;\n}\n  \n.tinder--card p {\n    font-size: 20px;\n    padding: 0 16px;\n    pointer-events: none;\n}\n  \n.tinder--buttons button:focus {\n    outline: 0;\n}\n  \n.tinder--buttons i {\n    font-size: 32px;\n    vertical-align: middle;\n}\n\n.fa-heart img {\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n    position: absolute;\n}\n\n.gender-selection {\n    display: flex;\n    align-items: center;\n}\n\n.gender-selection input[type=\"radio\"] {\n    appearance: none;\n    -webkit-appearance: none;\n    background-color: #fff;\n    border: 2px solid var(--secondary, #49B2A6FF);\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    position: relative;\n    cursor: pointer;\n    outline: none;\n    margin-right: 10px;\n}\n\n.gender-selection input[type=\"radio\"]:checked::before {\n    content: '';\n    display: block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: var(--secondary, #49B2A6FF);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.gender-selection label {\n    margin-right: 20px;\n    color: var(--secondary, #49B2A6FF);\n}\n\ninput[type=\"range\"] {\n    -webkit-appearance: none; \n    width: 100%;\n    height: 8px;\n    background: #ddd;\n    border-radius: 5px;\n    outline: none; \n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none; \n    appearance: none; \n    width: 20px; \n    height: 20px; \n    background: var(--secondary); \n    border-radius: 50%; \n    cursor: pointer; \n}\n\ninput[type=\"range\"]::-moz-range-thumb {\n    width: 20px;\n    height: 20px;\n    background: var(--secondary);\n    border-radius: 50%;\n    cursor: pointer;\n}\n\noutput {\n    margin-top: 10px;\n    font-size: 16px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/App.js */ "./src/modules/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


const root = document.querySelector('#root');
if (root) {
    const app = new _modules_App_js__WEBPACK_IMPORTED_MODULE_0__["default"](root);
    await app.init();
}
else {
    console.error('Element with id "root" not found.');
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/components/Navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _modules_apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/apiService.js */ "./src/modules/apiService.js");


/**
 * Class representing the navigation bar.
 */
class Navbar {
	/**
   * Creates an instance of Navbar.
   * @param {HTMLElement} nav - The nav element.
   * @param {Object} app - The application instance.
   */
	constructor(nav, app) {
		this.nav = nav;
		this.app = app;
		this.addEventListeners();
	}
  
	/**
   * Adds event listeners to the navigation links and logout button.
   */
	addEventListeners() {
		const navLinks = document.querySelectorAll('li.nav-link a');

		navLinks.forEach(link => {
			link.addEventListener('click', (event) => {
				event.preventDefault();
				const path = link.getAttribute('href');
				this.app.render(path);
			});
		});
      
		const button = document.getElementById('button-logout');
		if (button) {
			button.addEventListener('click', async () => {
				await (0,_modules_apiService_js__WEBPACK_IMPORTED_MODULE_0__.logout)();
				this.app.render('/login');
			});
		}
	}
}

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService.js */ "./src/modules/apiService.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ "./src/modules/router.js");



/**
 * Class representing the main application.
 */
class App {
	#state = {};
	root;

	/**
   * Creates an instance of App.
   * @param {HTMLElement} root - The root element for rendering the application.
   */
	constructor(root) {
		this.root = root;
		this.#state.isAuthenticated = false;
		this.router = (0,_router_js__WEBPACK_IMPORTED_MODULE_1__.createRouter)(this);
	}

	/**
   * Initializes the application by checking authentication and rendering the appropriate page.
   * @returns {Promise<void>} - A promise that resolves after initialization.
   */
	async init() {
		try {
			this.#state.isAuthenticated = await (0,_apiService_js__WEBPACK_IMPORTED_MODULE_0__.checkAuth)();
			if (this.#state.isAuthenticated) {
				this.render(window.location.pathname);
			} else {
				this.render(this.router.login.path);
			}

			window.addEventListener('popstate', () => {
				this.render(window.location.pathname);
			});

		} catch (error) {
			this.render(this.router.login.path);
		}
	}

	/**
   * Renders the specified page.
   * @param {string} pageLink - The link to the page to render.
   */
	render(pageLink) {
		const route = Object.values(this.router).find(route => route.path === pageLink);
		if (route) {
			history.pushState({}, '', route.path);
			const componentInstance = new route.componentName(this);
		} else {
			if (this.#state.isAuthenticated) {
				this.render(this.router.feed.path);
			} else {
				this.render(this.router.login.path);
			}
		}
	}
}

/***/ }),

/***/ "./src/modules/ajax.js":
/*!*****************************!*\
  !*** ./src/modules/ajax.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ajax: () => (/* binding */ ajax),
/* harmony export */   ajaxMultipartForm: () => (/* binding */ ajaxMultipartForm)
/* harmony export */ });
/**
 * Performs an AJAX request.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {string} method - The HTTP method to use (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {Object} [body=null] - The request body to send, if any.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the response is not ok.
 */
async function ajax(url, method, body = null) {
	const options = {
		method: method,
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	};

	if (body) {
		options.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error(`${response.status}: ${response.statusText}`);
		}

		return response;

	} catch (error) {
		throw error;
	}
}

/**
 * Performs an AJAX request with a multipart form.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {string} method - The HTTP method to use (e.g., 'POST').
 * @param {File} file - The file to send in the multipart form.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the response is not ok.
 */
async function ajaxMultipartForm(url, method, file) {
	const formData = new FormData();
	formData.append('file', file);

	const options = {
		method: method,
		body: formData,
		credentials: 'include'
	};

	try {
		const response = await fetch(url, options);
        
		if (!response.ok) {
			throw new Error(`${response.status}: ${response.statusText}`);
		}

		return response;

	} catch (error) {
		throw error;
	}
}


/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AJAX_METHODS: () => (/* binding */ AJAX_METHODS),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   post: () => (/* binding */ post),
/* harmony export */   postFile: () => (/* binding */ postFile),
/* harmony export */   put: () => (/* binding */ put),
/* harmony export */   putFile: () => (/* binding */ putFile)
/* harmony export */ });
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.js */ "./src/modules/ajax.js");


/**
 * Enum for AJAX methods.
 * @readonly
 * @enum {string}
 */
const AJAX_METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

/**
 * Performs a GET request.
 * 
 * @param {string} url - The URL to send the request to.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
const get = async (url) => {
	try {
		return await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, AJAX_METHODS.GET);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a POST request.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {Object} body - The request body to send.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
const post = async (url, body) => {
	try {
		return await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, AJAX_METHODS.POST, body);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a PUT request.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {Object} body - The request body to send.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
const put = async (url, body) => {
	try {
		return await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, AJAX_METHODS.PUT, body);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a DELETE request.
 * 
 * @param {string} url - The URL to send the request to.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
const del = async (url) => {
	try {
		return await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, AJAX_METHODS.DELETE);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a POST request with a file.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {File} file - The file to send in the request.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
const postFile = async (url, file) => {
	try {
		return await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajaxMultipartForm)(url, AJAX_METHODS.POST, file);
	} catch (error) {
		throw error;
	}
};

/**
 * Performs a PUT request with a file.
 * 
 * @param {string} url - The URL to send the request to.
 * @param {File} file - The file to send in the request.
 * @returns {Promise<Response>} - A promise that resolves to the response object.
 * @throws {Error} - Throws an error if the request fails.
 */
const putFile = async (url, file) => {
	try {
		return await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajaxMultipartForm)(url, AJAX_METHODS.PUT, file);
	} catch (error) {
		throw error;
	}
};

/***/ }),

/***/ "./src/modules/apiService.js":
/*!***********************************!*\
  !*** ./src/modules/apiService.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkAuth: () => (/* binding */ checkAuth),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers),
/* harmony export */   loginUser: () => (/* binding */ loginUser),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   registerUser: () => (/* binding */ registerUser)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");


/**
 * Logs in a user.
 * 
 * @param {string} login - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if login is successful, otherwise false.
 */
async function loginUser(login, password) {
	try {
		const body = {'username': login, 'password': password};
		const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.post)('http://5.188.140.7:8080/signin', body);
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/**
 * Registers a new user.
 * 
 * @param {string} login - The username of the new user.
 * @param {string} password - The password of the new user.
 * @param {string} gender - The gender of the new user.
 * @param {string} age - The age of the new user.
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if registration is successful, otherwise false.
 */
async function registerUser(login, password, gender, age) {
	try {
		const body = {
			'username': login, 
			'password': password, 
			'gender': gender, 
			'age': parseInt(age)
		};
		const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.post)('http://5.188.140.7:8080/signup', body);
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/**
 * Fetches the list of users.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.
 */
async function fetchUsers() {
	try {
		const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)('http://5.188.140.7:8080/getusers');
		return response.json();

	} catch (error) {
		console.error(error);
		return [];
	}
}

/**
 * Checks if the user is authenticated.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true
 * 								if the user is authenticated, otherwise false.
 */
async function checkAuth() {
	try {
		const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)('http://5.188.140.7:8080/checkauth');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/**
 * Logs out the user.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if logout is successful, otherwise false.
 */
async function logout() {
	try {
		const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)('http://5.188.140.7:8080/logout');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/***/ }),

/***/ "./src/modules/router.js":
/*!*******************************!*\
  !*** ./src/modules/router.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRouter: () => (/* binding */ createRouter)
/* harmony export */ });
/* harmony import */ var _pages_login_login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/login/login.js */ "./src/pages/login/login.js");
/* harmony import */ var _pages_feed_feed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/feed/feed.js */ "./src/pages/feed/feed.js");
/* harmony import */ var _pages_signup_signup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/signup/signup.js */ "./src/pages/signup/signup.js");




/**
 * Creates a router configuration object.
 * 
 * @returns {Object} - The router configuration object.
 * @returns {Object} feed - The feed route configuration.
 * @returns {string} feed.path - The path for the feed route.
 * @returns {string} feed.handle - The handle for the feed route.
 * @returns {Function} feed.componentName - The component to render for the feed route.
 * @returns {Object} login - The login route configuration.
 * @returns {string} login.path - The path for the login route.
 * @returns {string} login.handle - The handle for the login route.
 * @returns {Function} login.componentName - The component to render for the login route.
 * @returns {Object} signup - The signup route configuration.
 * @returns {string} signup.path - The path for the signup route.
 * @returns {string} signup.handle - The handle for the signup route.
 * @returns {Function} signup.componentName - The component to render for the signup route.
 */
const createRouter = () => ({
	feed: {
		path: '/feed',
		handle: 'Главная',
		componentName: _pages_feed_feed_js__WEBPACK_IMPORTED_MODULE_1__.FeedPage,
	},
	login: {
		path: '/login',
		handle: 'Авторизация',
		componentName: _pages_login_login_js__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
	},
	signup: {
		path: '/signup',
		handle: 'Регистрация',
		componentName: _pages_signup_signup_js__WEBPACK_IMPORTED_MODULE_2__.RegistrationPage,
	},
});

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidLogin: () => (/* binding */ isValidLogin),
/* harmony export */   isValidPassword: () => (/* binding */ isValidPassword)
/* harmony export */ });
/**
 * Validates if the given password meets the required criteria.
 * 
 * @param {string} password - The password to validate.
 * @returns {boolean} - Returns true if the password is valid, otherwise false.
 */
function isValidPassword(password) {
	if (!password) {
		return false;
	}
	if (password.length < 6 || password.length > 40) {
		return false;
	}

	if (!/\d/.test(password)) {
		return false;
	}

	for (let char of password) {
		if (!/[a-zA-Z0-9*?!$]/.test(char)) {
			return false;
		}
	}

	return true;
}

/**
 * Validates if the given login meets the required criteria.
 * 
 * @param {string} login - The login to validate.
 * @returns {boolean} - Returns true if the login is valid, otherwise false.
 */
function isValidLogin(login) {
	if (login.length < 5 || login.length > 15) {
		return false;
	}
    
	const invalidChars = /[^a-zA-Z0-9_-]/;
	if (invalidChars.test(login)) {
		return false;
	}
    
	if ((login.startsWith('_') || login.startsWith('-')) || 
		(login.endsWith('_') || login.endsWith('-'))) {
		return false;
	}
    
	if (/\d/.test(login.charAt(0))) {
		return false;
	}
    
	return true;
}

/***/ }),

/***/ "./src/pages/feed/feed.js":
/*!********************************!*\
  !*** ./src/pages/feed/feed.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedPage: () => (/* binding */ FeedPage)
/* harmony export */ });
/* harmony import */ var _templates_feed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/feed.js */ "./src/templates/feed.js");
/* harmony import */ var _modules_apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/apiService.js */ "./src/modules/apiService.js");
/* harmony import */ var _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar/navbar.js */ "./src/components/Navbar/navbar.js");




/**
 * Class representing the Feed Page.
 */
class FeedPage {
	/**
     * Creates an instance of FeedPage.
     * @param {Object} parent - The parent object containing the root element.
     */
	constructor(parent) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render().then(() => {;
			this.navbar = new _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector('nav'), parent);
		});
	}

	/**
     * Renders the feed page by fetching users and initializing cards.
     * @returns {Promise<void>} - A promise that resolves when the rendering is complete.
     */
	async render() {
		let users = await (0,_modules_apiService_js__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)();
		if (users.length === 0) {
			users = [{username: 'Анкеты закончились :(', gender: '-', age: '-'}];
		}

		/**
         * Initializes the cards by setting their styles and adding them to the container.
         */
		function initCards() { 
			let newCards = document.querySelectorAll('.tinder--card:not(.removed)');
		
			newCards.forEach(function (card, index) {
				card.style.zIndex = allCards.length - index;
				card.style.transform = 
					'scale(' + (20 - index) / 20 + ') ' + 
					'translateY(-' + 30 * index + 'px)';
				card.style.opacity = (10 - index) / 10;
			});
				
			tinderContainer.classList.add('loaded');
		}

		this.parent.root.innerHTML = (0,_templates_feed_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ users });
		var tinderContainer = document.querySelector('.tinder');
		var allCards = document.querySelectorAll('.tinder--card');
		let nope = document.getElementById('nope');
		let love = document.getElementById('love');
		initCards();

		allCards.forEach(function (el) {
			let startX, startY, currentX, currentY, initialX, initialY;
			let isDragging = false;
			
			/**
             * Starts the drag event.
             * @param {Event} event - The drag start event.
             */
			function startDrag(event) {
				isDragging = true;
				startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
				startY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;
				if (el.style.transform && el.style.transform.includes('translate')) {
					let transformValues = el.style.transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
					if (transformValues) {
						initialX = parseFloat(transformValues[1]);
						initialY = parseFloat(transformValues[2]);
					} else {
						initialX = 0;
						initialY = 0;
					}
			  	} else {
					initialX = 0;
					initialY = 0;
			  	}
			  	el.classList.add('moving');
			}
			
			/**
             * Handles the drag event.
             * @param {Event} event - The drag event.
             */
			function drag(event) {
				if (!isDragging) {return;}
			
				currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
				currentY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
			
				let deltaX = currentX - startX;
				let deltaY = currentY - startY;
			
				tinderContainer.classList.toggle('tinder_love', deltaX > 0);
				tinderContainer.classList.toggle('tinder_nope', deltaX < 0);
			
				let xMulti = deltaX * 0.03;
				let yMulti = deltaY / 80;
				let rotate = xMulti * yMulti;
			
				el.style.transform = 
					'translate(' + (initialX + deltaX) + 'px, ' + 
					(initialY + deltaY) + 'px) rotate(' + rotate + 'deg)';
			}
			
			/**
             * Ends the drag event.
             */
			function endDrag() {
				if (!isDragging) {return;}
				isDragging = false;
			
				el.classList.remove('moving');
				tinderContainer.classList.remove('tinder_love');
				tinderContainer.classList.remove('tinder_nope');
			
				let deltaX = currentX - startX;
				let deltaY = currentY - startY;
				let moveOutWidth = document.body.clientWidth;
				let keep = Math.abs(deltaX) < 80;
			
				el.classList.toggle('removed', !keep);
			
				if (keep) {
					el.style.transform = '';
			  	} else {
					let toX = deltaX > 0 ? moveOutWidth : -moveOutWidth;
					let toY = deltaY;
					let xMulti = deltaX * 0.03;
					let yMulti = deltaY / 80;
					let rotate = xMulti * yMulti;
		
					el.style.transform = 'translate(' + toX + 'px, ' + toY + 'px) rotate(' + rotate + 'deg)';
					initCards();
			  	}
			}
	  
			el.addEventListener('mousedown', startDrag);
			el.addEventListener('mousemove', drag);
			el.addEventListener('mouseup', endDrag);
			el.addEventListener('mouseleave', endDrag);
	  
			el.addEventListener('touchstart', startDrag);
			el.addEventListener('touchmove', drag);
			el.addEventListener('touchend', endDrag);
			el.addEventListener('touchcancel', endDrag);
		});
		
		/**
         * Creates a button listener for the like or dislike buttons.
         * @param {boolean} love - Indicates if the button is for liking (true) or disliking (false).
         * @returns {Function} - The event listener function.
         */
		function createButtonListener(love) {
			return function (event) {
				let cards = document.querySelectorAll('.tinder--card:not(.removed)');
				let moveOutWidth = document.body.clientWidth * 1.5;
			
				if (!cards.length) {return false;}
			
				let card = cards[0];
			
				card.classList.add('removed');
			
				if (love) {
					card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
				} else {
					card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
				}
			
				initCards();
			
				event.preventDefault();
			};
		}
  
		let nopeListener = createButtonListener(false);
		let loveListener = createButtonListener(true);
		
		nope.addEventListener('click', nopeListener);
		love.addEventListener('click', loveListener);
	}
}

/***/ }),

/***/ "./src/pages/login/login.js":
/*!**********************************!*\
  !*** ./src/pages/login/login.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _templates_login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/login.js */ "./src/templates/login.js");
/* harmony import */ var _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Navbar/navbar.js */ "./src/components/Navbar/navbar.js");
/* harmony import */ var _modules_apiService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/apiService.js */ "./src/modules/apiService.js");




/**
 * Class representing the login page.
 */
class LoginPage {
	/**
   * Creates an instance of LoginPage.
   * @param {Object} parent - The parent object.
   */
	constructor(parent) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.parent.root.innerHTML = this.render();
		this.addEventListeners();
		this.navbar = new _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('nav'), parent);
	}

	/**
   * Renders the login page template.
   * @returns {string} - The HTML string of the login page template.
   */
	render() {
		return (0,_templates_login_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
	}

	/**
   * Adds event listeners to the login page elements.
   */
	addEventListeners() {
		document.getElementById('link').addEventListener('click', (event) => {
			event.preventDefault();
			const url = new URL(event.target.href);
			const path = url.pathname;
			this.parent.render(path);
		});

		document.querySelector('button').addEventListener('click', async () => {
			const login = document.getElementById('login').value;
			const password = document.getElementById('password').value;

			let valid = true;

			if (!login) {
				document.getElementById('login-error').style.display = 'block';
				valid = false;
			} else {
				document.getElementById('login-error').style.display = 'none';
			}

			if (!password) {
				document.getElementById('password-error').style.display = 'block';
				valid = false;
			} else {
				document.getElementById('password-error').style.display = 'none';
			}

			if (valid) {
				try {
					const isLogedIn = await (0,_modules_apiService_js__WEBPACK_IMPORTED_MODULE_2__.loginUser)(login, password);
					if (!isLogedIn) {
						document.getElementById('login-password-error').style.display = 'block';            
					} else { 
						this.parent.render('/feed');
					}
				} catch (error) {
					console.error(error);
				}
			} else {
				console.error('Error in authorization');
			}
		});
	}
}

/***/ }),

/***/ "./src/pages/signup/signup.js":
/*!************************************!*\
  !*** ./src/pages/signup/signup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationPage: () => (/* binding */ RegistrationPage)
/* harmony export */ });
/* harmony import */ var _templates_signup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/signup.js */ "./src/templates/signup.js");
/* harmony import */ var _modules_apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/apiService.js */ "./src/modules/apiService.js");
/* harmony import */ var _modules_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/validation.js */ "./src/modules/validation.js");
/* harmony import */ var _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar/navbar.js */ "./src/components/Navbar/navbar.js");






/**
 * Class representing the registration page.
 */
class RegistrationPage {
	/**
   * Creates an instance of RegistrationPage.
   * @param {Object} parent - The parent object.
   */
	constructor(parent) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.parent.root.innerHTML = this.render();
		this.addEventListeners();
		this.navbar = new _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('nav'), parent);
	}
  
	/**
   * Renders the registration page template.
   * @returns {string} - The HTML string of the registration page template.
   */
	render() {
		return (0,_templates_signup_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
	}

	/**
   * Adds event listeners to the registration page elements.
   */
	addEventListeners() {
		document.getElementById('link').addEventListener('click', (event) => {
			event.preventDefault();
			const url = new URL(event.target.href);
			const path = url.pathname;
			this.parent.render(path);
		});

		document.querySelector('button').addEventListener('click', async () => {
			const login = document.getElementById('login').value;
			const password = document.getElementById('password').value;
			const gender = document.querySelector('input[name="gender"]:checked').value;
			const age = document.getElementById('age').value;

			let valid = true;

			if (!(0,_modules_validation_js__WEBPACK_IMPORTED_MODULE_2__.isValidLogin)(login)) {
				document.getElementById('login-error').style.display = 'block';
				valid = false;
			} else {
				document.getElementById('login-error').style.display = 'none';
			}

			if (!(0,_modules_validation_js__WEBPACK_IMPORTED_MODULE_2__.isValidPassword)(password)) {
				document.getElementById('password-error').style.display = 'block';
				valid = false;
			} else {
				document.getElementById('password-error').style.display = 'none';
			}

			if (valid) {
				try {
					const isSignedUp = await (0,_modules_apiService_js__WEBPACK_IMPORTED_MODULE_1__.registerUser)(login, password, gender, age);
					if (!isSignedUp) {
						document.getElementById('login-password-error').style.display = 'block';            
					} else { 
						this.parent.render('/feed');
					}
					this.parent.render('/feed');
				} catch (error) {
					console.error(error);
				}
			}
		});
	}
}

/***/ }),

/***/ "./src/templates/feed.js":
/*!*******************************!*\
  !*** ./src/templates/feed.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ template)
/* harmony export */ });
function template(locals) {let pug_html = '', pug_mixins = {}, pug_interp;let pug_debug_filename, pug_debug_line;try {;
	let locals_for_with = (locals || {});
    
	(function (users) {
		;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
		pug_mixins['card'] = pug_interp = function(username, gender, age){
			let block = (this && this.block), attributes = (this && this.attributes) || {};
			;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + '\u003Cdiv class="tinder--card"\u003E';
			;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + '\u003Cdiv class="image-section"\u003E';
			;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002Fimage.svg" alt="Image" draggable="false"\u002F\u003E\u003C\u002Fdiv\u003E';
			;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + '\u003Cdiv class="form-section-tinder"\u003E';
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + '\u003Ch1\u003E';
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + (null == (pug_interp = username) ? '' : pug_interp) + '\u003C\u002Fh1\u003E';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + '\u003Ctext-base\u003E';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + 'Пол: ';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + (null == (pug_interp = gender) ? '' : pug_interp) + '\u003C\u002Ftext-base\u003E';
			;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + '\u003Ctext-base\u003E';
			;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + 'Возраст: ';
			;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug';
			pug_html = pug_html + (null == (pug_interp = age) ? '' : pug_interp) + '\u003C\u002Ftext-base\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E';
		};
		;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';







		;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_mixins['navbar'] = pug_interp = function(isAuth){
			let block = (this && this.block), attributes = (this && this.attributes) || {};
			;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cdiv class="nav"\u003E';
			;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cdiv class="nav__logo"\u003E';
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cimg src="..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg" alt="logo"\u002F\u003E\u003C\u002Fdiv\u003E';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cdiv class="main-nav"\u003E';
			;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cul\u003E';
			;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			if ((isAuth)) {
				;pug_debug_line = 10;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
				;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + '\u003Ca href="\u002Ffeed"\u003E';
				;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + 'Главная\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
			}
			else {
				;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
				;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + '\u003Ca href="\u002Flogin"\u003E';
				;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + 'Логин\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
				;pug_debug_line = 15;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
				;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + '\u003Ca href="\u002Fsignup"\u003E';
				;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + 'Регистрация\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
			}
			pug_html = pug_html + '\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E';
			;pug_debug_line = 17;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			if ((isAuth)) {
				;pug_debug_line = 18;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + '\u003Cbutton id="button-logout" type="button"\u003E';
				;pug_debug_line = 18;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + 'Выйти из аккаунта\u003C\u002Fbutton\u003E';
				;pug_debug_line = 19;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
				pug_html = pug_html + '\u003C!--+textButton(\'Выйти из аккаунта\', \'button-logout\')--\u003E';
			}
			pug_html = pug_html + '\u003C\u002Fdiv\u003E';
		};
		;pug_debug_line = 4;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_mixins['navbar'](true);
		;pug_debug_line = 6;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Cdiv class="tinder"\u003E';
		;pug_debug_line = 7;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Cdiv class="tinder--cards"\u003E';
		;pug_debug_line = 8;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		// iterate users
		;(function(){
			let $$obj = users;
			if ('number' === typeof $$obj.length) {
				for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
					var user = $$obj[pug_index0];
					;pug_debug_line = 9;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
					pug_mixins['card'](user.username, user.gender, user.age);
				}
			} else {
				var $$l = 0;
				for (var pug_index0 in $$obj) {
					$$l++;
					var user = $$obj[pug_index0];
					;pug_debug_line = 9;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
					pug_mixins['card'](user.username, user.gender, user.age);
				}
			}
		}).call(this);

		pug_html = pug_html + '\u003C\u002Fdiv\u003E';
		;pug_debug_line = 10;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Cdiv class="tinder--buttons"\u003E';
		;pug_debug_line = 11;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Cbutton id="nope"\u003E';
		;pug_debug_line = 12;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Ci class="fa fa-remove"\u003E';
		;pug_debug_line = 13;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002FX.svg" alt="X"\u002F\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E';
		;pug_debug_line = 14;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Cbutton id="love"\u003E';
		;pug_debug_line = 15;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Ci class="fa fa-heart"\u003E';
		;pug_debug_line = 16;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug';
		pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002FHeart.svg" alt="Heart"\u002F\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E';
	}.call(this, 'users' in locals_for_with ?
		locals_for_with.users :
		typeof users !== 'undefined' ? users : undefined));
	;} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}

/***/ }),

/***/ "./src/templates/login.js":
/*!********************************!*\
  !*** ./src/templates/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ template)
/* harmony export */ });
function template(locals) {let pug_html = '', pug_mixins = {}, pug_interp;let pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
	pug_mixins['imageSection'] = pug_interp = function(path){
		let block = (this && this.block), attributes = (this && this.attributes) || {};
		;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
		pug_html = pug_html + '\u003Cdiv class="image-section"\u003E';
		;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
		pug_html = pug_html + '\u003C!--img(src!=path, alt="Image")--\u003E';
		;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
		pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002Fimage.svg" alt="Image"\u002F\u003E';
		;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
		pug_html = pug_html + '\u003C!--img(src=`..\u002F..\u002Fassets\u002Fimg\u002F${path}` alt="Image") будет работать...--\u003E\u003C\u002Fdiv\u003E';
	};
	;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
	pug_html = pug_html + '\u003C!--надо чинить--\u003E';
	;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
	const pathToImage = '../assets/img/image.svg'
;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
	pug_mixins['base'] = pug_interp = function(typeOfPage){
		let block = (this && this.block), attributes = (this && this.attributes) || {};
		;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
		pug_html = pug_html + '\u003Cdiv class="container"\u003E';
		;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
		pug_html = pug_html + '\u003Cdiv class="form-section"\u003E';
		;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
		if (typeOfPage === 'signup') {
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
			pug_mixins['customInput'] = pug_interp = function(inputType, formType){
				let block = (this && this.block), attributes = (this && this.attributes) || {};
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
				if (inputType=='password') {
					;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					pug_html = pug_html + '\u003Clabel class=".text-base" for="password"\u003E';
					;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					pug_html = pug_html + 'Пароль\u003C\u002Flabel\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					pug_html = pug_html + '\u003Cinput type="password" id="password" placeholder="Введите пароль"\u002F\u003E';
					;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					if (formType=='registration') {
						;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Cp class="error" id="password-error" style="display:none;"\u003E';
						;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + 'Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E';
					}
					else
						if (formType=='login') {
							;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cp class="error" id="password-error"\u003E';
							;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Ошибка: Введите пароль\u003C\u002Fp\u003E';
							;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cp class="error" id="login-password-error"\u003E';
							;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E';
						}
				}
				else
					if (inputType=='login') {
						;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Clabel class=".text-base" for="login"\u003E';
						;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + 'Логин\u003C\u002Flabel\u003E';
						;pug_debug_line = 12;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Cinput class=".text-base" type="text" id="login" placeholder="Введите логин"\u002F\u003E';
						;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						if (formType=='registration') {
							;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cp class="error" id="login-error" style="display:none;"\u003E';
							;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E';
						}
						else
							if (formType=='login') {
								;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + '\u003Cp class="error" id="login-error"\u003E';
								;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + 'Ошибка: Введите правильный логин\u003C\u002Fp\u003E';
							}
					}
			};
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
			pug_mixins['header'] = pug_interp = function(title){
				let block = (this && this.block), attributes = (this && this.attributes) || {};
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_html = pug_html + '\u003Cdiv class="logo"\u003E';
				;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002FLogo.svg" alt="Logo"\u002F\u003E\u003C\u002Fdiv\u003E';
				;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_html = pug_html + '\u003Ch1 class="description"\u003E';
				;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_html = pug_html + (null == (pug_interp = title) ? '' : pug_interp) + '\u003C\u002Fh1\u003E';
			};
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
			pug_mixins['textButton'] = pug_interp = function(text, elemId){
				let block = (this && this.block), attributes = (this && this.attributes) || {};
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
				pug_html = pug_html + '\u003Cbutton type="button"\u003E';
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
				pug_html = pug_html + (null == (pug_interp = text) ? '' : pug_interp) + '\u003C\u002Fbutton\u003E';
			};
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
			pug_mixins['footerText'] = pug_interp = function(type){
				let block = (this && this.block), attributes = (this && this.attributes) || {};
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
				if (type=='login') {
					;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + '\u003Cdiv class="footer-text"\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + '\u003Cspan\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + 'У вас еще нет аккаунта? \u003C\u002Fspan\u003E';
					;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + '\u003Ca class=".link" href="\u002Fsignup" id="link"\u003E';
					;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + 'Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
				}
				else
					if (type=='registration') {
						;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Cdiv class="footer-text"\u003E';
						;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Cspan\u003E';
						;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + 'У вас уже есть аккаунт? \u003C\u002Fspan\u003E';
						;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Ca class=".link" href="\u002Flogin" id="link"\u003E';
						;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + 'Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
					}
			};
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['header']('Добро пожаловать!');
			;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['customInput']('login', 'registration');
			;pug_debug_line = 10;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['customInput']('password', 'registration');
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Ctext class=".text-base"\u003E';
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + 'Пол';
			;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Cdiv class="gender-selection"\u003E';
			;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Cinput type="radio" id="male" name="gender" value="male" checked="checked"\u002F\u003E';
			;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Clabel for="male"\u003E';
			;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + 'Мужской\u003C\u002Flabel\u003E';
			;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Cinput type="radio" id="female" name="gender" value="female"\u002F\u003E';
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Clabel for="female"\u003E';
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + 'Женский\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Cp class="error" id="gender-error" style="display:none;"\u003E';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + 'Выберите пол\u003C\u002Fp\u003E\u003C\u002Ftext\u003E';
			;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + '\u003Clabel class=".text-base" for="age"\u003E';
			;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + 'Возраст\u003C\u002Flabel\u003E';
			;pug_debug_line = 15;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + '\u003Cinput type="range" id="age" name="age" min="18" max="100" value="18" oninput="this.nextElementSibling.value = this.value"\u002F\u003E';
			;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + '\u003Coutput\u003E';
			;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + '18\u003C\u002Foutput\u003E';
			;pug_debug_line = 18;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['textButton']('Зарегистрироваться');
			;pug_debug_line = 20;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['footerText']('registration');
		}
		else
			if (typeOfPage === 'login') {
				;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
				pug_mixins['customInput'] = pug_interp = function(inputType, formType){
					let block = (this && this.block), attributes = (this && this.attributes) || {};
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					if (inputType=='password') {
						;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Clabel class=".text-base" for="password"\u003E';
						;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + 'Пароль\u003C\u002Flabel\u003E';
						;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Cinput type="password" id="password" placeholder="Введите пароль"\u002F\u003E';
						;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						if (formType=='registration') {
							;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cp class="error" id="password-error" style="display:none;"\u003E';
							;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E';
						}
						else
							if (formType=='login') {
								;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + '\u003Cp class="error" id="password-error"\u003E';
								;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + 'Ошибка: Введите пароль\u003C\u002Fp\u003E';
								;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + '\u003Cp class="error" id="login-password-error"\u003E';
								;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + 'Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E';
							}
					}
					else
						if (inputType=='login') {
							;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Clabel class=".text-base" for="login"\u003E';
							;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Логин\u003C\u002Flabel\u003E';
							;pug_debug_line = 12;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cinput class=".text-base" type="text" id="login" placeholder="Введите логин"\u002F\u003E';
							;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							if (formType=='registration') {
								;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + '\u003Cp class="error" id="login-error" style="display:none;"\u003E';
								;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + 'Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E';
							}
							else
								if (formType=='login') {
									;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
									pug_html = pug_html + '\u003Cp class="error" id="login-error"\u003E';
									;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
									pug_html = pug_html + 'Ошибка: Введите правильный логин\u003C\u002Fp\u003E';
								}
						}
				};
				;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_mixins['header'] = pug_interp = function(title){
					let block = (this && this.block), attributes = (this && this.attributes) || {};
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
					pug_html = pug_html + '\u003Cdiv class="logo"\u003E';
					;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
					pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002FLogo.svg" alt="Logo"\u002F\u003E\u003C\u002Fdiv\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
					pug_html = pug_html + '\u003Ch1 class="description"\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
					pug_html = pug_html + (null == (pug_interp = title) ? '' : pug_interp) + '\u003C\u002Fh1\u003E';
				};
				;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
				pug_mixins['textButton'] = pug_interp = function(text, elemId){
					let block = (this && this.block), attributes = (this && this.attributes) || {};
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
					pug_html = pug_html + '\u003Cbutton type="button"\u003E';
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
					pug_html = pug_html + (null == (pug_interp = text) ? '' : pug_interp) + '\u003C\u002Fbutton\u003E';
				};
				;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
				pug_mixins['footerText'] = pug_interp = function(type){
					let block = (this && this.block), attributes = (this && this.attributes) || {};
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					if (type=='login') {
						;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Cdiv class="footer-text"\u003E';
						;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Cspan\u003E';
						;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + 'У вас еще нет аккаунта? \u003C\u002Fspan\u003E';
						;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Ca class=".link" href="\u002Fsignup" id="link"\u003E';
						;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + 'Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
					}
					else
						if (type=='registration') {
							;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + '\u003Cdiv class="footer-text"\u003E';
							;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + '\u003Cspan\u003E';
							;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + 'У вас уже есть аккаунт? \u003C\u002Fspan\u003E';
							;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + '\u003Ca class=".link" href="\u002Flogin" id="link"\u003E';
							;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + 'Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
						}
				};
				;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['header']('С возвращением!');
				;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['customInput']('login', 'login');
				;pug_debug_line = 10;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['customInput']('password', 'login');
				;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['textButton']('Войти в аккаунт', 'login-button');
				;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['footerText']('login');
			}
		pug_html = pug_html + '\u003C\u002Fdiv\u003E';
		;pug_debug_line = 12;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
		pug_mixins['imageSection'](pathToImage);
		pug_html = pug_html + '\u003C\u002Fdiv\u003E';
	};
	;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
	pug_mixins['textButton'] = pug_interp = function(text, elemId){
		let block = (this && this.block), attributes = (this && this.attributes) || {};
		;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
		pug_html = pug_html + '\u003Cbutton type="button"\u003E';
		;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
		pug_html = pug_html + (null == (pug_interp = text) ? '' : pug_interp) + '\u003C\u002Fbutton\u003E';
	};
	;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
	pug_mixins['navbar'] = pug_interp = function(isAuth){
		let block = (this && this.block), attributes = (this && this.attributes) || {};
		;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cdiv class="nav"\u003E';
		;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cdiv class="nav__logo"\u003E';
		;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cimg src="..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg" alt="logo"\u002F\u003E\u003C\u002Fdiv\u003E';
		;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cdiv class="main-nav"\u003E';
		;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cul\u003E';
		;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		if ((isAuth)) {
			;pug_debug_line = 10;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
			;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Ca href="\u002Ffeed"\u003E';
			;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + 'Главная\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
		}
		else {
			;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
			;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Ca href="\u002Flogin"\u003E';
			;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + 'Логин\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
			;pug_debug_line = 15;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
			;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Ca href="\u002Fsignup"\u003E';
			;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + 'Регистрация\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
		}
		pug_html = pug_html + '\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E';
		;pug_debug_line = 17;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		if ((isAuth)) {
			;pug_debug_line = 18;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cbutton id="button-logout" type="button"\u003E';
			;pug_debug_line = 18;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + 'Выйти из аккаунта\u003C\u002Fbutton\u003E';
			;pug_debug_line = 19;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003C!--+textButton(\'Выйти из аккаунта\', \'button-logout\')--\u003E';
		}
		pug_html = pug_html + '\u003C\u002Fdiv\u003E';
	};
	;pug_debug_line = 4;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Flogin\u002Flogin.pug';
	pug_mixins['navbar'](false);
	;pug_debug_line = 5;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Flogin\u002Flogin.pug';
	pug_mixins['base']('login');} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}

/***/ }),

/***/ "./src/templates/signup.js":
/*!*********************************!*\
  !*** ./src/templates/signup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ template)
/* harmony export */ });
function template(locals) {let pug_html = '', pug_mixins = {}, pug_interp;let pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
	pug_mixins['imageSection'] = pug_interp = function(path){
		let block = (this && this.block), attributes = (this && this.attributes) || {};
		;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
		pug_html = pug_html + '\u003Cdiv class="image-section"\u003E';
		;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
		pug_html = pug_html + '\u003C!--img(src!=path, alt="Image")--\u003E';
		;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
		pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002Fimage.svg" alt="Image"\u002F\u003E';
		;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
		pug_html = pug_html + '\u003C!--img(src=`..\u002F..\u002Fassets\u002Fimg\u002F${path}` alt="Image") будет работать...--\u003E\u003C\u002Fdiv\u003E';
	};
	;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FImageSection\u002FImageSection.pug';
	pug_html = pug_html + '\u003C!--надо чинить--\u003E';
	;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
	const pathToImage = '../assets/img/image.svg'
;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
	pug_mixins['base'] = pug_interp = function(typeOfPage){
		let block = (this && this.block), attributes = (this && this.attributes) || {};
		;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
		pug_html = pug_html + '\u003Cdiv class="container"\u003E';
		;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
		pug_html = pug_html + '\u003Cdiv class="form-section"\u003E';
		;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
		if (typeOfPage === 'signup') {
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
			pug_mixins['customInput'] = pug_interp = function(inputType, formType){
				let block = (this && this.block), attributes = (this && this.attributes) || {};
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
				if (inputType=='password') {
					;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					pug_html = pug_html + '\u003Clabel class=".text-base" for="password"\u003E';
					;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					pug_html = pug_html + 'Пароль\u003C\u002Flabel\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					pug_html = pug_html + '\u003Cinput type="password" id="password" placeholder="Введите пароль"\u002F\u003E';
					;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					if (formType=='registration') {
						;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Cp class="error" id="password-error" style="display:none;"\u003E';
						;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + 'Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E';
					}
					else
						if (formType=='login') {
							;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cp class="error" id="password-error"\u003E';
							;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Ошибка: Введите пароль\u003C\u002Fp\u003E';
							;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cp class="error" id="login-password-error"\u003E';
							;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E';
						}
				}
				else
					if (inputType=='login') {
						;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Clabel class=".text-base" for="login"\u003E';
						;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + 'Логин\u003C\u002Flabel\u003E';
						;pug_debug_line = 12;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Cinput class=".text-base" type="text" id="login" placeholder="Введите логин"\u002F\u003E';
						;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						if (formType=='registration') {
							;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cp class="error" id="login-error" style="display:none;"\u003E';
							;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E';
						}
						else
							if (formType=='login') {
								;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + '\u003Cp class="error" id="login-error"\u003E';
								;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + 'Ошибка: Введите правильный логин\u003C\u002Fp\u003E';
							}
					}
			};
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
			pug_mixins['header'] = pug_interp = function(title){
				let block = (this && this.block), attributes = (this && this.attributes) || {};
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_html = pug_html + '\u003Cdiv class="logo"\u003E';
				;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002FLogo.svg" alt="Logo"\u002F\u003E\u003C\u002Fdiv\u003E';
				;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_html = pug_html + '\u003Ch1 class="description"\u003E';
				;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_html = pug_html + (null == (pug_interp = title) ? '' : pug_interp) + '\u003C\u002Fh1\u003E';
			};
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
			pug_mixins['textButton'] = pug_interp = function(text, elemId){
				let block = (this && this.block), attributes = (this && this.attributes) || {};
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
				pug_html = pug_html + '\u003Cbutton type="button"\u003E';
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
				pug_html = pug_html + (null == (pug_interp = text) ? '' : pug_interp) + '\u003C\u002Fbutton\u003E';
			};
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
			pug_mixins['footerText'] = pug_interp = function(type){
				let block = (this && this.block), attributes = (this && this.attributes) || {};
				;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
				if (type=='login') {
					;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + '\u003Cdiv class="footer-text"\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + '\u003Cspan\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + 'У вас еще нет аккаунта? \u003C\u002Fspan\u003E';
					;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + '\u003Ca class=".link" href="\u002Fsignup" id="link"\u003E';
					;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					pug_html = pug_html + 'Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
				}
				else
					if (type=='registration') {
						;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Cdiv class="footer-text"\u003E';
						;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Cspan\u003E';
						;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + 'У вас уже есть аккаунт? \u003C\u002Fspan\u003E';
						;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Ca class=".link" href="\u002Flogin" id="link"\u003E';
						;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + 'Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
					}
			};
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['header']('Добро пожаловать!');
			;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['customInput']('login', 'registration');
			;pug_debug_line = 10;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['customInput']('password', 'registration');
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Ctext class=".text-base"\u003E';
			;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + 'Пол';
			;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Cdiv class="gender-selection"\u003E';
			;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Cinput type="radio" id="male" name="gender" value="male" checked="checked"\u002F\u003E';
			;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Clabel for="male"\u003E';
			;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + 'Мужской\u003C\u002Flabel\u003E';
			;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Cinput type="radio" id="female" name="gender" value="female"\u002F\u003E';
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Clabel for="female"\u003E';
			;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + 'Женский\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + '\u003Cp class="error" id="gender-error" style="display:none;"\u003E';
			;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug';
			pug_html = pug_html + 'Выберите пол\u003C\u002Fp\u003E\u003C\u002Ftext\u003E';
			;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + '\u003Clabel class=".text-base" for="age"\u003E';
			;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + 'Возраст\u003C\u002Flabel\u003E';
			;pug_debug_line = 15;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + '\u003Cinput type="range" id="age" name="age" min="18" max="100" value="18" oninput="this.nextElementSibling.value = this.value"\u002F\u003E';
			;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + '\u003Coutput\u003E';
			;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_html = pug_html + '18\u003C\u002Foutput\u003E';
			;pug_debug_line = 18;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['textButton']('Зарегистрироваться');
			;pug_debug_line = 20;pug_debug_filename = 'src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug';
			pug_mixins['footerText']('registration');
		}
		else
			if (typeOfPage === 'login') {
				;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
				pug_mixins['customInput'] = pug_interp = function(inputType, formType){
					let block = (this && this.block), attributes = (this && this.attributes) || {};
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
					if (inputType=='password') {
						;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Clabel class=".text-base" for="password"\u003E';
						;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + 'Пароль\u003C\u002Flabel\u003E';
						;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						pug_html = pug_html + '\u003Cinput type="password" id="password" placeholder="Введите пароль"\u002F\u003E';
						;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
						if (formType=='registration') {
							;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cp class="error" id="password-error" style="display:none;"\u003E';
							;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E';
						}
						else
							if (formType=='login') {
								;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + '\u003Cp class="error" id="password-error"\u003E';
								;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + 'Ошибка: Введите пароль\u003C\u002Fp\u003E';
								;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + '\u003Cp class="error" id="login-password-error"\u003E';
								;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + 'Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E';
							}
					}
					else
						if (inputType=='login') {
							;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Clabel class=".text-base" for="login"\u003E';
							;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + 'Логин\u003C\u002Flabel\u003E';
							;pug_debug_line = 12;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							pug_html = pug_html + '\u003Cinput class=".text-base" type="text" id="login" placeholder="Введите логин"\u002F\u003E';
							;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
							if (formType=='registration') {
								;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + '\u003Cp class="error" id="login-error" style="display:none;"\u003E';
								;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
								pug_html = pug_html + 'Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E';
							}
							else
								if (formType=='login') {
									;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
									pug_html = pug_html + '\u003Cp class="error" id="login-error"\u003E';
									;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug';
									pug_html = pug_html + 'Ошибка: Введите правильный логин\u003C\u002Fp\u003E';
								}
						}
				};
				;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
				pug_mixins['header'] = pug_interp = function(title){
					let block = (this && this.block), attributes = (this && this.attributes) || {};
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
					pug_html = pug_html + '\u003Cdiv class="logo"\u003E';
					;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
					pug_html = pug_html + '\u003Cimg src="..\u002Fassets\u002Fimg\u002FLogo.svg" alt="Logo"\u002F\u003E\u003C\u002Fdiv\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
					pug_html = pug_html + '\u003Ch1 class="description"\u003E';
					;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FHeader\u002FHeader.pug';
					pug_html = pug_html + (null == (pug_interp = title) ? '' : pug_interp) + '\u003C\u002Fh1\u003E';
				};
				;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
				pug_mixins['textButton'] = pug_interp = function(text, elemId){
					let block = (this && this.block), attributes = (this && this.attributes) || {};
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
					pug_html = pug_html + '\u003Cbutton type="button"\u003E';
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
					pug_html = pug_html + (null == (pug_interp = text) ? '' : pug_interp) + '\u003C\u002Fbutton\u003E';
				};
				;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
				pug_mixins['footerText'] = pug_interp = function(type){
					let block = (this && this.block), attributes = (this && this.attributes) || {};
					;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
					if (type=='login') {
						;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Cdiv class="footer-text"\u003E';
						;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Cspan\u003E';
						;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + 'У вас еще нет аккаунта? \u003C\u002Fspan\u003E';
						;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + '\u003Ca class=".link" href="\u002Fsignup" id="link"\u003E';
						;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
						pug_html = pug_html + 'Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
					}
					else
						if (type=='registration') {
							;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + '\u003Cdiv class="footer-text"\u003E';
							;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + '\u003Cspan\u003E';
							;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + 'У вас уже есть аккаунт? \u003C\u002Fspan\u003E';
							;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + '\u003Ca class=".link" href="\u002Flogin" id="link"\u003E';
							;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FFooterText\u002FFooterText.pug';
							pug_html = pug_html + 'Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
						}
				};
				;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['header']('С возвращением!');
				;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['customInput']('login', 'login');
				;pug_debug_line = 10;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['customInput']('password', 'login');
				;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['textButton']('Войти в аккаунт', 'login-button');
				;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug';
				pug_mixins['footerText']('login');
			}
		pug_html = pug_html + '\u003C\u002Fdiv\u003E';
		;pug_debug_line = 12;pug_debug_filename = 'src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug';
		pug_mixins['imageSection'](pathToImage);
		pug_html = pug_html + '\u003C\u002Fdiv\u003E';
	};
	;pug_debug_line = 1;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
	pug_mixins['textButton'] = pug_interp = function(text, elemId){
		let block = (this && this.block), attributes = (this && this.attributes) || {};
		;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
		pug_html = pug_html + '\u003Cbutton type="button"\u003E';
		;pug_debug_line = 2;pug_debug_filename = 'src\u002Fcomponents\u002FTextButton\u002FTextButton.pug';
		pug_html = pug_html + (null == (pug_interp = text) ? '' : pug_interp) + '\u003C\u002Fbutton\u003E';
	};
	;pug_debug_line = 3;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
	pug_mixins['navbar'] = pug_interp = function(isAuth){
		let block = (this && this.block), attributes = (this && this.attributes) || {};
		;pug_debug_line = 4;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cdiv class="nav"\u003E';
		;pug_debug_line = 5;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cdiv class="nav__logo"\u003E';
		;pug_debug_line = 6;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cimg src="..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg" alt="logo"\u002F\u003E\u003C\u002Fdiv\u003E';
		;pug_debug_line = 7;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cdiv class="main-nav"\u003E';
		;pug_debug_line = 8;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		pug_html = pug_html + '\u003Cul\u003E';
		;pug_debug_line = 9;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		if ((isAuth)) {
			;pug_debug_line = 10;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
			;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Ca href="\u002Ffeed"\u003E';
			;pug_debug_line = 11;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + 'Главная\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
		}
		else {
			;pug_debug_line = 13;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
			;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Ca href="\u002Flogin"\u003E';
			;pug_debug_line = 14;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + 'Логин\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
			;pug_debug_line = 15;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cli class="nav-link"\u003E';
			;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Ca href="\u002Fsignup"\u003E';
			;pug_debug_line = 16;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + 'Регистрация\u003C\u002Fa\u003E\u003C\u002Fli\u003E';
		}
		pug_html = pug_html + '\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E';
		;pug_debug_line = 17;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
		if ((isAuth)) {
			;pug_debug_line = 18;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003Cbutton id="button-logout" type="button"\u003E';
			;pug_debug_line = 18;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + 'Выйти из аккаунта\u003C\u002Fbutton\u003E';
			;pug_debug_line = 19;pug_debug_filename = 'src\u002Fcomponents\u002FNavbar\u002FNavbar.pug';
			pug_html = pug_html + '\u003C!--+textButton(\'Выйти из аккаунта\', \'button-logout\')--\u003E';
		}
		pug_html = pug_html + '\u003C\u002Fdiv\u003E';
	};
	;pug_debug_line = 4;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Fsignup\u002Fsignup.pug';
	pug_mixins['navbar'](false);
	;pug_debug_line = 5;pug_debug_filename = '.\u002Fsrc\u002Fpages\u002Fsignup\u002Fsignup.pug';
	pug_mixins['base']('signup');} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}

/***/ }),

/***/ "./src/assets/fonts/Rubik-Regular.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Rubik-Regular.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e2df801dfc3b918e1eb.woff";

/***/ }),

/***/ "./src/assets/fonts/Rubik-Regular.woff2":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Rubik-Regular.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58d3c272722838d8411b.woff2";

/***/ }),

/***/ "./src/assets/img/background.svg":
/*!***************************************!*\
  !*** ./src/assets/img/background.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "957edad5853448d5dae3.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44OGQ5Njc5ZTc0MTdhMWI2OTIzOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtJQUFvRDtBQUNoRyw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDRDQUE0QyxtSUFBOEM7QUFDMUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25ELGdCQUFnQixtQ0FBbUM7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxlQUFlLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFB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Q0E7Ozs7O1dDaEVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NhcmFmdW4vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zYXJhZnVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zYXJhZnVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NhcmFmdW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NhcmFmdW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zYXJhZnVuLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NhcmFmdW4vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLmpzIiwid2VicGFjazovL3NhcmFmdW4vLi9zcmMvbW9kdWxlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL3NyYy9tb2R1bGVzL2FqYXguanMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly9zYXJhZnVuLy4vc3JjL21vZHVsZXMvYXBpU2VydmljZS5qcyIsIndlYnBhY2s6Ly9zYXJhZnVuLy4vc3JjL21vZHVsZXMvcm91dGVyLmpzIiwid2VicGFjazovL3NhcmFmdW4vLi9zcmMvbW9kdWxlcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3NhcmFmdW4vLi9zcmMvcGFnZXMvZmVlZC9mZWVkLmpzIiwid2VicGFjazovL3NhcmFmdW4vLi9zcmMvcGFnZXMvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLmpzIiwid2VicGFjazovL3NhcmFmdW4vLi9zcmMvdGVtcGxhdGVzL2ZlZWQuanMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL3NyYy90ZW1wbGF0ZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi8uL3NyYy90ZW1wbGF0ZXMvc2lnbnVwLmpzIiwid2VicGFjazovL3NhcmFmdW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3NhcmFmdW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NhcmFmdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYXJhZnVuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2FyYWZ1bi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zYXJhZnVuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3NhcmFmdW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NhcmFmdW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zYXJhZnVuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zYXJhZnVuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUnViaWstUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUnViaWstUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcbiAgICBzcmM6ICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tbmF2LXdpZHRoKTtcbn1cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeTogI0I5RjFEOUZGO1xuICAgIC0tc2Vjb25kYXJ5OiAjNDlCMkE2RkY7XG4gICAgLS1yZWQxOiAjRkYxQTFBRkY7XG4gICAgLS1lcnJvcjogI0ZGNjI3NUZGO1xuICAgIC0td2FybmluZzogI0ZBQzc0OEZGO1xuICAgIC0tc3VjY2VzczogIzIwNEU0QUZGO1xuICAgIC0td2hpdGUxOiAjRkZGRkZGRkY7XG4gICAgLS1ibGFjazE6ICMwMDAwMDBGRjtcbiAgICAtLWdyZXkxOiAjQzRDNEM0RkY7XG4gICAgLS1ncmV5MjogIzhDOEM4Q0ZGO1xuICAgIC0tbmF2LXdpZHRoOiA1NXB4O1xufVxuXG4uaDEge1xuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcbiAgICBmaWx0ZXI6IGJsdXIoMi4wMDAwcmVtKTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50ZXh0LWJhc2Uge1xuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcbiAgICBmaWx0ZXI6IGJsdXIoMS4wMDAwcmVtKTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4gIFxuLmgyIHtcbiAgICBmb250LWZhbWlseTogUnViaWs7XG4gICAgZmlsdGVyOiBibHVyKDEuNTAwMHJlbSk7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDAwJTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuICBcbi5oMyB7XG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICAgIGZpbHRlcjogYmx1cigxLjE4NzVyZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiAgXG4ubGluayB7XG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICAgIGZpbHRlcjogYmx1cigxLjAwMDByZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiAgXG4udGV4dC1iYXNlLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICAgIGZpbHRlcjogYmx1cigxLjAwMDByZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUxKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIG1pbi13aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIG1pbi1oZWlnaHQ6IDU5MnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG5cbi5sb2dvIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5hIHtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLm5hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LXdpZHRoKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlMSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuLm5hdiBidXR0b24ge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUxKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubmF2X19sb2dvIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubmF2X19sb2dvIGltZ3tcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyOyBcbn1cblxuLm5hdi1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjazEpO1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tYWluLW5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbn1cblxuLm1haW4tbmF2IHVsIGxpIGF7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrMSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9ybS1zZWN0aW9uLXRpbmRlciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9vdGVyLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBnYXA6IDFlbTtcbiAgICBjb2xvcjogdmFyKC0tZ3JleTIpO1xufVxuXG4uZm9vdGVyLXRleHQgYSB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9vdGVyLXRleHQgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5pbWFnZS1zZWN0aW9uLXdyYXBwZXIge1xuICAgIHdpZHRoOiA1MCU7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWFnZS1zZWN0aW9uIHtcbiAgICB3aWR0aDogNTAlOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxubGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogdmFyKC0tYmxhY2sxKTtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHBhZGRpbmc6IDEycHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlMSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvcik7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBkaXNwbGF5OiBub25lOyBcbn1cbi5pbWFnZS1zZWN0aW9uIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjsgXG59XG4uZGVzY3JpcHRpb24ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyBcbn1cblxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoOyBcbn1cbi5jYXJkLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG59XG5cbi5idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTEpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG59XG4uYnRuIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7IFxufVxuLmVycm9yIHtcbiAgICBjb2xvcjogdmFyKC0tZXJyb3IpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogbm9uZTsgXG59XG4uYnRuOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4vKiAuYnRuLnNraXA6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaWNvbnMvc2tpcC5zdmcnKTtcbn1cbi5idG4ubGlrZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pY29ucy9saWtlLnN2ZycpO1xufVxuLmJ0bi5waG90bzo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pY29ucy9waG90by5zdmcnKTtcbn1cbi5idG4uZ2lmdDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pY29ucy9naWZ0LnN2ZycpO1xufSAqL1xuXG4uY2FyZC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi50aW5kZXItLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAwIDAgMTAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZ2FwOiAyMHB4OyBcbn1cblxuLmN1c3RvbS1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNzAlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG5cbi50aW5kZXItLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGluZGVyLS1idXR0b25zIGJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTsgXG4gICAgbGVmdDogNTAlOyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmN1c3RvbS1idG4gaW1nIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogNzUlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlOyBcbiAgICBsZWZ0OiA1MCU7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udGluZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA5MnZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmxvYWRlZC50aW5kZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi50aW5kZXItLWNhcmRzIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi50aW5kZXItLWNhcmQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIGhlaWdodDogNzV2aDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZTEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IGdyYWI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbWFnZS1zZWN0aW9uLXRpbmRlciB7XG4gICAgd2lkdGg6IDUwJTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmltYWdlLXNlY3Rpb24tdGluZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubW92aW5nLnRpbmRlci0tY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuICBcbi50aW5kZXItLWNhcmQgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiAgXG4udGluZGVyLS1idXR0b25zIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn1cbiAgXG4udGluZGVyLS1idXR0b25zIGkge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZmEtaGVhcnQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmdlbmRlci1zZWxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdlbmRlci1zZWxlY3Rpb24gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSwgIzQ5QjJBNkZGKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5nZW5kZXItc2VsZWN0aW9uIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LCAjNDlCMkE2RkYpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5nZW5kZXItc2VsZWN0aW9uIGxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSwgIzQ5QjJBNkZGKTtcbn1cblxuaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7IFxufVxuXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7IFxuICAgIHdpZHRoOiAyMHB4OyBcbiAgICBoZWlnaHQ6IDIwcHg7IFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cblxuaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5vdXRwdXQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCO2dFQUM4RDtBQUNsRTs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMseURBQWtEO0lBQ2xELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJB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QUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxuICAgIHNyYzogIHVybCgnLi9hc3NldHMvZm9udHMvUnViaWstUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgICB1cmwoJy4vYXNzZXRzL2ZvbnRzL1J1YmlrLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLW5hdi13aWR0aCk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjQjlGMUQ5RkY7XFxuICAgIC0tc2Vjb25kYXJ5OiAjNDlCMkE2RkY7XFxuICAgIC0tcmVkMTogI0ZGMUExQUZGO1xcbiAgICAtLWVycm9yOiAjRkY2Mjc1RkY7XFxuICAgIC0td2FybmluZzogI0ZBQzc0OEZGO1xcbiAgICAtLXN1Y2Nlc3M6ICMyMDRFNEFGRjtcXG4gICAgLS13aGl0ZTE6ICNGRkZGRkZGRjtcXG4gICAgLS1ibGFjazE6ICMwMDAwMDBGRjtcXG4gICAgLS1ncmV5MTogI0M0QzRDNEZGO1xcbiAgICAtLWdyZXkyOiAjOEM4QzhDRkY7XFxuICAgIC0tbmF2LXdpZHRoOiA1NXB4O1xcbn1cXG5cXG4uaDEge1xcbiAgICBmb250LWZhbWlseTogUnViaWs7XFxuICAgIGZpbHRlcjogYmx1cigyLjAwMDByZW0pO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRleHQtYmFzZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gICAgZmlsdGVyOiBibHVyKDEuMDAwMHJlbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMDAlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4gIFxcbi5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gICAgZmlsdGVyOiBibHVyKDEuNTAwMHJlbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMDAlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4gIFxcbi5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gICAgZmlsdGVyOiBibHVyKDEuMTg3NXJlbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMDAlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4gIFxcbi5saW5rIHtcXG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xcbiAgICBmaWx0ZXI6IGJsdXIoMS4wMDAwcmVtKTtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbiAgXFxuLnRleHQtYmFzZS1tZWRpdW0ge1xcbiAgICBmb250LWZhbWlseTogUnViaWs7XFxuICAgIGZpbHRlcjogYmx1cigxLjAwMDByZW0pO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIG1pbi1oZWlnaHQ6IDU5MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZm9ybS1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcblxcbi5sb2dvIGltZyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZTEpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBwYWRkaW5nOiAwIDEwJTtcXG59XFxuXFxuLm5hdiBidXR0b24ge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTJweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTEpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5uYXZfX2xvZ28ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5uYXZfX2xvZ28gaW1ne1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7IFxcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjazEpO1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1haW4tbmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1uYXYgdWwgbGkgYXtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrMSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmZvcm0tc2VjdGlvbi10aW5kZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZ2FwOiAxZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5Mik7XFxufVxcblxcbi5mb290ZXItdGV4dCBhIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmltYWdlLXNlY3Rpb24td3JhcHBlciB7XFxuICAgIHdpZHRoOiA1MCU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmltYWdlLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogNTAlOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxubGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2sxKTtcXG59XFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIHBhZGRpbmc6IDEycHg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUxKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcXG59XFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHZhcigtLWVycm9yKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7IFxcbn1cXG4uaW1hZ2Utc2VjdGlvbiBpbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7IFxcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbn1cXG4uY2FyZC1jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlMSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcXG59XFxuLmJ0biBzcGFuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgXFxufVxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvcik7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBkaXNwbGF5OiBub25lOyBcXG59XFxuLmJ0bjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuLyogLmJ0bi5za2lwOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pY29ucy9za2lwLnN2ZycpO1xcbn1cXG4uYnRuLmxpa2U6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ljb25zL2xpa2Uuc3ZnJyk7XFxufVxcbi5idG4ucGhvdG86OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ljb25zL3Bob3RvLnN2ZycpO1xcbn1cXG4uYnRuLmdpZnQ6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ljb25zL2dpZnQuc3ZnJyk7XFxufSAqL1xcblxcbi5jYXJkLWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4udGluZGVyLS1idXR0b25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMCAwIDEwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZ2FwOiAyMHB4OyBcXG59XFxuXFxuLmN1c3RvbS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDcwJTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxufVxcblxcbi50aW5kZXItLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMCA4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGluZGVyLS1idXR0b25zIGJ1dHRvbiBpbWd7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlOyBcXG4gICAgbGVmdDogNTAlOyBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5jdXN0b20tYnRuIGltZyB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlOyBcXG4gICAgbGVmdDogNTAlOyBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi50aW5kZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogOTJ2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5sb2FkZWQudGluZGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRpbmRlci0tY2FyZHMge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRpbmRlci0tY2FyZCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDY1dnc7XFxuICAgIGhlaWdodDogNzV2aDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmltYWdlLXNlY3Rpb24tdGluZGVyIHtcXG4gICAgd2lkdGg6IDUwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5pbWFnZS1zZWN0aW9uLXRpbmRlciBpbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyOyBcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubW92aW5nLnRpbmRlci0tY2FyZCB7XFxuICAgIHRyYW5zaXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcbiAgXFxuLnRpbmRlci0tY2FyZCBwIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4gIFxcbi50aW5kZXItLWJ1dHRvbnMgYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuICBcXG4udGluZGVyLS1idXR0b25zIGkge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5mYS1oZWFydCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmdlbmRlci1zZWxlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2VuZGVyLXNlbGVjdGlvbiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnksICM0OUIyQTZGRik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmdlbmRlci1zZWxlY3Rpb24gaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LCAjNDlCMkE2RkYpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uZ2VuZGVyLXNlbGVjdGlvbiBsYWJlbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSwgIzQ5QjJBNkZGKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgYmFja2dyb3VuZDogI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lOyBcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxcbiAgICBhcHBlYXJhbmNlOiBub25lOyBcXG4gICAgd2lkdGg6IDIwcHg7IFxcbiAgICBoZWlnaHQ6IDIwcHg7IFxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpOyBcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5vdXRwdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBBcHAgZnJvbSAnLi9tb2R1bGVzL0FwcC5qcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuaWYgKHJvb3QpIHtcbiAgICBjb25zdCBhcHAgPSBuZXcgQXBwKHJvb3QpO1xuICAgIGF3YWl0IGFwcC5pbml0KCk7XG59XG5lbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IHdpdGggaWQgXCJyb290XCIgbm90IGZvdW5kLicpO1xufVxuIiwiaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9hcGlTZXJ2aWNlLmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIG5hdmlnYXRpb24gYmFyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXIge1xuXHQvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOYXZiYXIuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5hdiAtIFRoZSBuYXYgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGFwcCAtIFRoZSBhcHBsaWNhdGlvbiBpbnN0YW5jZS5cbiAgICovXG5cdGNvbnN0cnVjdG9yKG5hdiwgYXBwKSB7XG5cdFx0dGhpcy5uYXYgPSBuYXY7XG5cdFx0dGhpcy5hcHAgPSBhcHA7XG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXHR9XG4gIFxuXHQvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIG5hdmlnYXRpb24gbGlua3MgYW5kIGxvZ291dCBidXR0b24uXG4gICAqL1xuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHRjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLm5hdi1saW5rIGEnKTtcblxuXHRcdG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IHBhdGggPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdFx0XHR0aGlzLmFwcC5yZW5kZXIocGF0aCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbiAgICAgIFxuXHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tbG9nb3V0Jyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCBsb2dvdXQoKTtcblx0XHRcdFx0dGhpcy5hcHAucmVuZGVyKCcvbG9naW4nKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCB7Y2hlY2tBdXRofSBmcm9tICcuL2FwaVNlcnZpY2UuanMnO1xuaW1wb3J0IHtjcmVhdGVSb3V0ZXJ9IGZyb20gJy4vcm91dGVyLmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIG1haW4gYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG5cdCNzdGF0ZSA9IHt9O1xuXHRyb290O1xuXG5cdC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEFwcC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIFRoZSByb290IGVsZW1lbnQgZm9yIHJlbmRlcmluZyB0aGUgYXBwbGljYXRpb24uXG4gICAqL1xuXHRjb25zdHJ1Y3Rvcihyb290KSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLiNzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLnJvdXRlciA9IGNyZWF0ZVJvdXRlcih0aGlzKTtcblx0fVxuXG5cdC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYXBwbGljYXRpb24gYnkgY2hlY2tpbmcgYXV0aGVudGljYXRpb24gYW5kIHJlbmRlcmluZyB0aGUgYXBwcm9wcmlhdGUgcGFnZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuXHRhc3luYyBpbml0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLiNzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBhd2FpdCBjaGVja0F1dGgoKTtcblx0XHRcdGlmICh0aGlzLiNzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQpIHtcblx0XHRcdFx0dGhpcy5yZW5kZXIod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyKHRoaXMucm91dGVyLmxvZ2luLnBhdGgpO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG5cdFx0XHR9KTtcblxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aGlzLnJlbmRlcih0aGlzLnJvdXRlci5sb2dpbi5wYXRoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgICogUmVuZGVycyB0aGUgc3BlY2lmaWVkIHBhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTGluayAtIFRoZSBsaW5rIHRvIHRoZSBwYWdlIHRvIHJlbmRlci5cbiAgICovXG5cdHJlbmRlcihwYWdlTGluaykge1xuXHRcdGNvbnN0IHJvdXRlID0gT2JqZWN0LnZhbHVlcyh0aGlzLnJvdXRlcikuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXRoID09PSBwYWdlTGluayk7XG5cdFx0aWYgKHJvdXRlKSB7XG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHJvdXRlLnBhdGgpO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgcm91dGUuY29tcG9uZW50TmFtZSh0aGlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuI3N0YXRlLmlzQXV0aGVudGljYXRlZCkge1xuXHRcdFx0XHR0aGlzLnJlbmRlcih0aGlzLnJvdXRlci5mZWVkLnBhdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW5kZXIodGhpcy5yb3V0ZXIubG9naW4ucGF0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiLyoqXG4gKiBQZXJmb3JtcyBhbiBBSkFYIHJlcXVlc3QuXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG8uXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSAoZS5nLiwgJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYm9keT1udWxsXSAtIFRoZSByZXF1ZXN0IGJvZHkgdG8gc2VuZCwgaWYgYW55LlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZSBvYmplY3QuXG4gKiBAdGhyb3dzIHtFcnJvcn0gLSBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHJlc3BvbnNlIGlzIG5vdCBvay5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFqYXgodXJsLCBtZXRob2QsIGJvZHkgPSBudWxsKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0bWV0aG9kOiBtZXRob2QsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH0sXG5cdFx0Y3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuXHR9O1xuXG5cdGlmIChib2R5KSB7XG5cdFx0b3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuXHRcdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhbiBBSkFYIHJlcXVlc3Qgd2l0aCBhIG11bHRpcGFydCBmb3JtLlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIFVSTCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIFRoZSBIVFRQIG1ldGhvZCB0byB1c2UgKGUuZy4sICdQT1NUJykuXG4gKiBAcGFyYW0ge0ZpbGV9IGZpbGUgLSBUaGUgZmlsZSB0byBzZW5kIGluIHRoZSBtdWx0aXBhcnQgZm9ybS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2Ugb2JqZWN0LlxuICogQHRocm93cyB7RXJyb3J9IC0gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSByZXNwb25zZSBpcyBub3Qgb2suXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhamF4TXVsdGlwYXJ0Rm9ybSh1cmwsIG1ldGhvZCwgZmlsZSkge1xuXHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcblxuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGJvZHk6IGZvcm1EYXRhLFxuXHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcblx0fTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICAgICAgXG5cdFx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c306ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuIiwiaW1wb3J0IHsgYWpheCwgYWpheE11bHRpcGFydEZvcm0gfSBmcm9tICcuL2FqYXguanMnO1xuXG4vKipcbiAqIEVudW0gZm9yIEFKQVggbWV0aG9kcy5cbiAqIEByZWFkb25seVxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEFKQVhfTUVUSE9EUyA9IHtcblx0R0VUOiAnR0VUJyxcblx0UE9TVDogJ1BPU1QnLFxuXHRQVVQ6ICdQVVQnLFxuXHRERUxFVEU6ICdERUxFVEUnLFxufTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIEdFVCByZXF1ZXN0LlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIFVSTCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZSBvYmplY3QuXG4gKiBAdGhyb3dzIHtFcnJvcn0gLSBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHJlcXVlc3QgZmFpbHMuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXQgPSBhc3luYyAodXJsKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFqYXgodXJsLCBBSkFYX01FVEhPRFMuR0VUKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIFBPU1QgcmVxdWVzdC5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBib2R5IC0gVGhlIHJlcXVlc3QgYm9keSB0byBzZW5kLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZSBvYmplY3QuXG4gKiBAdGhyb3dzIHtFcnJvcn0gLSBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHJlcXVlc3QgZmFpbHMuXG4gKi9cbmV4cG9ydCBjb25zdCBwb3N0ID0gYXN5bmMgKHVybCwgYm9keSkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhamF4KHVybCwgQUpBWF9NRVRIT0RTLlBPU1QsIGJvZHkpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgUFVUIHJlcXVlc3QuXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gYm9keSAtIFRoZSByZXF1ZXN0IGJvZHkgdG8gc2VuZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2Ugb2JqZWN0LlxuICogQHRocm93cyB7RXJyb3J9IC0gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSByZXF1ZXN0IGZhaWxzLlxuICovXG5leHBvcnQgY29uc3QgcHV0ID0gYXN5bmMgKHVybCwgYm9keSkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhamF4KHVybCwgQUpBWF9NRVRIT0RTLlBVVCwgYm9keSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbi8qKlxuICogUGVyZm9ybXMgYSBERUxFVEUgcmVxdWVzdC5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0by5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2Ugb2JqZWN0LlxuICogQHRocm93cyB7RXJyb3J9IC0gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSByZXF1ZXN0IGZhaWxzLlxuICovXG5leHBvcnQgY29uc3QgZGVsID0gYXN5bmMgKHVybCkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhamF4KHVybCwgQUpBWF9NRVRIT0RTLkRFTEVURSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbi8qKlxuICogUGVyZm9ybXMgYSBQT1NUIHJlcXVlc3Qgd2l0aCBhIGZpbGUuXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG8uXG4gKiBAcGFyYW0ge0ZpbGV9IGZpbGUgLSBUaGUgZmlsZSB0byBzZW5kIGluIHRoZSByZXF1ZXN0LlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZSBvYmplY3QuXG4gKiBAdGhyb3dzIHtFcnJvcn0gLSBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHJlcXVlc3QgZmFpbHMuXG4gKi9cbmV4cG9ydCBjb25zdCBwb3N0RmlsZSA9IGFzeW5jICh1cmwsIGZpbGUpID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYWpheE11bHRpcGFydEZvcm0odXJsLCBBSkFYX01FVEhPRFMuUE9TVCwgZmlsZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbi8qKlxuICogUGVyZm9ybXMgYSBQVVQgcmVxdWVzdCB3aXRoIGEgZmlsZS5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0by5cbiAqIEBwYXJhbSB7RmlsZX0gZmlsZSAtIFRoZSBmaWxlIHRvIHNlbmQgaW4gdGhlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxSZXNwb25zZT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHJlc3BvbnNlIG9iamVjdC5cbiAqIEB0aHJvd3Mge0Vycm9yfSAtIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcmVxdWVzdCBmYWlscy5cbiAqL1xuZXhwb3J0IGNvbnN0IHB1dEZpbGUgPSBhc3luYyAodXJsLCBmaWxlKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFqYXhNdWx0aXBhcnRGb3JtKHVybCwgQUpBWF9NRVRIT0RTLlBVVCwgZmlsZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07IiwiaW1wb3J0IHtnZXQsIHBvc3R9IGZyb20gJy4vYXBpLmpzJztcblxuLyoqXG4gKiBMb2dzIGluIGEgdXNlci5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGxvZ2luIC0gVGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIC0gVGhlIHBhc3N3b3JkIG9mIHRoZSB1c2VyLlxuICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBcbiAqIFx0XHRcdFx0XHRcdFx0XHRpZiBsb2dpbiBpcyBzdWNjZXNzZnVsLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpblVzZXIobG9naW4sIHBhc3N3b3JkKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgYm9keSA9IHsndXNlcm5hbWUnOiBsb2dpbiwgJ3Bhc3N3b3JkJzogcGFzc3dvcmR9O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdCgnaHR0cDovLzUuMTg4LjE0MC43OjgwODAvc2lnbmluJywgYm9keSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBuZXcgdXNlci5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGxvZ2luIC0gVGhlIHVzZXJuYW1lIG9mIHRoZSBuZXcgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCAtIFRoZSBwYXNzd29yZCBvZiB0aGUgbmV3IHVzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZ2VuZGVyIC0gVGhlIGdlbmRlciBvZiB0aGUgbmV3IHVzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gYWdlIC0gVGhlIGFnZSBvZiB0aGUgbmV3IHVzZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIFxuICogXHRcdFx0XHRcdFx0XHRcdGlmIHJlZ2lzdHJhdGlvbiBpcyBzdWNjZXNzZnVsLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVzZXIobG9naW4sIHBhc3N3b3JkLCBnZW5kZXIsIGFnZSkge1xuXHR0cnkge1xuXHRcdGNvbnN0IGJvZHkgPSB7XG5cdFx0XHQndXNlcm5hbWUnOiBsb2dpbiwgXG5cdFx0XHQncGFzc3dvcmQnOiBwYXNzd29yZCwgXG5cdFx0XHQnZ2VuZGVyJzogZ2VuZGVyLCBcblx0XHRcdCdhZ2UnOiBwYXJzZUludChhZ2UpXG5cdFx0fTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3QoJ2h0dHA6Ly81LjE4OC4xNDAuNzo4MDgwL3NpZ251cCcsIGJvZHkpO1xuXHRcdHJldHVybiB0cnVlO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8qKlxuICogRmV0Y2hlcyB0aGUgbGlzdCBvZiB1c2Vycy5cbiAqIFxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0W10+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIHVzZXIgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcnMoKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoJ2h0dHA6Ly81LjE4OC4xNDAuNzo4MDgwL2dldHVzZXJzJyk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdHJldHVybiBbXTtcblx0fVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkLlxuICogXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlXG4gKiBcdFx0XHRcdFx0XHRcdFx0aWYgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tBdXRoKCkge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KCdodHRwOi8vNS4xODguMTQwLjc6ODA4MC9jaGVja2F1dGgnKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG4vKipcbiAqIExvZ3Mgb3V0IHRoZSB1c2VyLlxuICogXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIFxuICogXHRcdFx0XHRcdFx0XHRcdGlmIGxvZ291dCBpcyBzdWNjZXNzZnVsLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQoKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoJ2h0dHA6Ly81LjE4OC4xNDAuNzo4MDgwL2xvZ291dCcpO1xuXHRcdHJldHVybiB0cnVlO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59IiwiaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gJy4uL3BhZ2VzL2xvZ2luL2xvZ2luLmpzJztcbmltcG9ydCB7RmVlZFBhZ2V9IGZyb20gJy4uL3BhZ2VzL2ZlZWQvZmVlZC5qcyc7XG5pbXBvcnQge1JlZ2lzdHJhdGlvblBhZ2V9IGZyb20gJy4uL3BhZ2VzL3NpZ251cC9zaWdudXAuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByb3V0ZXIgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBcbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIHJvdXRlciBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGZlZWQgLSBUaGUgZmVlZCByb3V0ZSBjb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge3N0cmluZ30gZmVlZC5wYXRoIC0gVGhlIHBhdGggZm9yIHRoZSBmZWVkIHJvdXRlLlxuICogQHJldHVybnMge3N0cmluZ30gZmVlZC5oYW5kbGUgLSBUaGUgaGFuZGxlIGZvciB0aGUgZmVlZCByb3V0ZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gZmVlZC5jb21wb25lbnROYW1lIC0gVGhlIGNvbXBvbmVudCB0byByZW5kZXIgZm9yIHRoZSBmZWVkIHJvdXRlLlxuICogQHJldHVybnMge09iamVjdH0gbG9naW4gLSBUaGUgbG9naW4gcm91dGUgY29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGxvZ2luLnBhdGggLSBUaGUgcGF0aCBmb3IgdGhlIGxvZ2luIHJvdXRlLlxuICogQHJldHVybnMge3N0cmluZ30gbG9naW4uaGFuZGxlIC0gVGhlIGhhbmRsZSBmb3IgdGhlIGxvZ2luIHJvdXRlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBsb2dpbi5jb21wb25lbnROYW1lIC0gVGhlIGNvbXBvbmVudCB0byByZW5kZXIgZm9yIHRoZSBsb2dpbiByb3V0ZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IHNpZ251cCAtIFRoZSBzaWdudXAgcm91dGUgY29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IHNpZ251cC5wYXRoIC0gVGhlIHBhdGggZm9yIHRoZSBzaWdudXAgcm91dGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBzaWdudXAuaGFuZGxlIC0gVGhlIGhhbmRsZSBmb3IgdGhlIHNpZ251cCByb3V0ZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gc2lnbnVwLmNvbXBvbmVudE5hbWUgLSBUaGUgY29tcG9uZW50IHRvIHJlbmRlciBmb3IgdGhlIHNpZ251cCByb3V0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICgpID0+ICh7XG5cdGZlZWQ6IHtcblx0XHRwYXRoOiAnL2ZlZWQnLFxuXHRcdGhhbmRsZTogJ9CT0LvQsNCy0L3QsNGPJyxcblx0XHRjb21wb25lbnROYW1lOiBGZWVkUGFnZSxcblx0fSxcblx0bG9naW46IHtcblx0XHRwYXRoOiAnL2xvZ2luJyxcblx0XHRoYW5kbGU6ICfQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPJyxcblx0XHRjb21wb25lbnROYW1lOiBMb2dpblBhZ2UsXG5cdH0sXG5cdHNpZ251cDoge1xuXHRcdHBhdGg6ICcvc2lnbnVwJyxcblx0XHRoYW5kbGU6ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPJyxcblx0XHRjb21wb25lbnROYW1lOiBSZWdpc3RyYXRpb25QYWdlLFxuXHR9LFxufSk7IiwiLyoqXG4gKiBWYWxpZGF0ZXMgaWYgdGhlIGdpdmVuIHBhc3N3b3JkIG1lZXRzIHRoZSByZXF1aXJlZCBjcml0ZXJpYS5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIC0gVGhlIHBhc3N3b3JkIHRvIHZhbGlkYXRlLlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzd29yZCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFBhc3N3b3JkKHBhc3N3b3JkKSB7XG5cdGlmICghcGFzc3dvcmQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYgfHwgcGFzc3dvcmQubGVuZ3RoID4gNDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoIS9cXGQvLnRlc3QocGFzc3dvcmQpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Zm9yIChsZXQgY2hhciBvZiBwYXNzd29yZCkge1xuXHRcdGlmICghL1thLXpBLVowLTkqPyEkXS8udGVzdChjaGFyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlcyBpZiB0aGUgZ2l2ZW4gbG9naW4gbWVldHMgdGhlIHJlcXVpcmVkIGNyaXRlcmlhLlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9naW4gLSBUaGUgbG9naW4gdG8gdmFsaWRhdGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGxvZ2luIGlzIHZhbGlkLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTG9naW4obG9naW4pIHtcblx0aWYgKGxvZ2luLmxlbmd0aCA8IDUgfHwgbG9naW4ubGVuZ3RoID4gMTUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbiAgICBcblx0Y29uc3QgaW52YWxpZENoYXJzID0gL1teYS16QS1aMC05Xy1dLztcblx0aWYgKGludmFsaWRDaGFycy50ZXN0KGxvZ2luKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuICAgIFxuXHRpZiAoKGxvZ2luLnN0YXJ0c1dpdGgoJ18nKSB8fCBsb2dpbi5zdGFydHNXaXRoKCctJykpIHx8IFxuXHRcdChsb2dpbi5lbmRzV2l0aCgnXycpIHx8IGxvZ2luLmVuZHNXaXRoKCctJykpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG4gICAgXG5cdGlmICgvXFxkLy50ZXN0KGxvZ2luLmNoYXJBdCgwKSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbiAgICBcblx0cmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9mZWVkLmpzJztcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tICcuLi8uLi9tb2R1bGVzL2FwaVNlcnZpY2UuanMnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhci9uYXZiYXIuanMnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgRmVlZCBQYWdlLlxuICovXG5leHBvcnQgY2xhc3MgRmVlZFBhZ2Uge1xuXHQvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZlZWRQYWdlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnQgLSBUaGUgcGFyZW50IG9iamVjdCBjb250YWluaW5nIHRoZSByb290IGVsZW1lbnQuXG4gICAgICovXG5cdGNvbnN0cnVjdG9yKHBhcmVudCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMucGFyZW50LnJvb3QuaW5uZXJIVE1MID0gJyc7XG5cdFx0dGhpcy5yZW5kZXIoKS50aGVuKCgpID0+IHs7XG5cdFx0XHR0aGlzLm5hdmJhciA9IG5ldyBOYXZiYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JyksIHBhcmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBmZWVkIHBhZ2UgYnkgZmV0Y2hpbmcgdXNlcnMgYW5kIGluaXRpYWxpemluZyBjYXJkcy5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSByZW5kZXJpbmcgaXMgY29tcGxldGUuXG4gICAgICovXG5cdGFzeW5jIHJlbmRlcigpIHtcblx0XHRsZXQgdXNlcnMgPSBhd2FpdCBmZXRjaFVzZXJzKCk7XG5cdFx0aWYgKHVzZXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dXNlcnMgPSBbe3VzZXJuYW1lOiAn0JDQvdC60LXRgtGLINC30LDQutC+0L3Rh9C40LvQuNGB0YwgOignLCBnZW5kZXI6ICctJywgYWdlOiAnLSd9XTtcblx0XHR9XG5cblx0XHQvKipcbiAgICAgICAgICogSW5pdGlhbGl6ZXMgdGhlIGNhcmRzIGJ5IHNldHRpbmcgdGhlaXIgc3R5bGVzIGFuZCBhZGRpbmcgdGhlbSB0byB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKi9cblx0XHRmdW5jdGlvbiBpbml0Q2FyZHMoKSB7IFxuXHRcdFx0bGV0IG5ld0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbmRlci0tY2FyZDpub3QoLnJlbW92ZWQpJyk7XG5cdFx0XG5cdFx0XHRuZXdDYXJkcy5mb3JFYWNoKGZ1bmN0aW9uIChjYXJkLCBpbmRleCkge1xuXHRcdFx0XHRjYXJkLnN0eWxlLnpJbmRleCA9IGFsbENhcmRzLmxlbmd0aCAtIGluZGV4O1xuXHRcdFx0XHRjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFxuXHRcdFx0XHRcdCdzY2FsZSgnICsgKDIwIC0gaW5kZXgpIC8gMjAgKyAnKSAnICsgXG5cdFx0XHRcdFx0J3RyYW5zbGF0ZVkoLScgKyAzMCAqIGluZGV4ICsgJ3B4KSc7XG5cdFx0XHRcdGNhcmQuc3R5bGUub3BhY2l0eSA9ICgxMCAtIGluZGV4KSAvIDEwO1xuXHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0dGluZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuXHRcdH1cblxuXHRcdHRoaXMucGFyZW50LnJvb3QuaW5uZXJIVE1MID0gdGVtcGxhdGUoeyB1c2VycyB9KTtcblx0XHR2YXIgdGluZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbmRlcicpO1xuXHRcdHZhciBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW5kZXItLWNhcmQnKTtcblx0XHRsZXQgbm9wZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3BlJyk7XG5cdFx0bGV0IGxvdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG92ZScpO1xuXHRcdGluaXRDYXJkcygpO1xuXG5cdFx0YWxsQ2FyZHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdGxldCBzdGFydFgsIHN0YXJ0WSwgY3VycmVudFgsIGN1cnJlbnRZLCBpbml0aWFsWCwgaW5pdGlhbFk7XG5cdFx0XHRsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0XG5cdFx0XHQvKipcbiAgICAgICAgICAgICAqIFN0YXJ0cyB0aGUgZHJhZyBldmVudC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGRyYWcgc3RhcnQgZXZlbnQuXG4gICAgICAgICAgICAgKi9cblx0XHRcdGZ1bmN0aW9uIHN0YXJ0RHJhZyhldmVudCkge1xuXHRcdFx0XHRpc0RyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdFx0c3RhcnRYID0gZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WDtcblx0XHRcdFx0c3RhcnRZID0gZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WTtcblx0XHRcdFx0aWYgKGVsLnN0eWxlLnRyYW5zZm9ybSAmJiBlbC5zdHlsZS50cmFuc2Zvcm0uaW5jbHVkZXMoJ3RyYW5zbGF0ZScpKSB7XG5cdFx0XHRcdFx0bGV0IHRyYW5zZm9ybVZhbHVlcyA9IGVsLnN0eWxlLnRyYW5zZm9ybS5tYXRjaCgvdHJhbnNsYXRlXFwoKFteLF0rKSxcXHMqKFteKV0rKVxcKS8pO1xuXHRcdFx0XHRcdGlmICh0cmFuc2Zvcm1WYWx1ZXMpIHtcblx0XHRcdFx0XHRcdGluaXRpYWxYID0gcGFyc2VGbG9hdCh0cmFuc2Zvcm1WYWx1ZXNbMV0pO1xuXHRcdFx0XHRcdFx0aW5pdGlhbFkgPSBwYXJzZUZsb2F0KHRyYW5zZm9ybVZhbHVlc1syXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGluaXRpYWxYID0gMDtcblx0XHRcdFx0XHRcdGluaXRpYWxZID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHQgIFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbml0aWFsWCA9IDA7XG5cdFx0XHRcdFx0aW5pdGlhbFkgPSAwO1xuXHRcdFx0ICBcdH1cblx0XHRcdCAgXHRlbC5jbGFzc0xpc3QuYWRkKCdtb3ZpbmcnKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0LyoqXG4gICAgICAgICAgICAgKiBIYW5kbGVzIHRoZSBkcmFnIGV2ZW50LlxuICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZHJhZyBldmVudC5cbiAgICAgICAgICAgICAqL1xuXHRcdFx0ZnVuY3Rpb24gZHJhZyhldmVudCkge1xuXHRcdFx0XHRpZiAoIWlzRHJhZ2dpbmcpIHtyZXR1cm47fVxuXHRcdFx0XG5cdFx0XHRcdGN1cnJlbnRYID0gZXZlbnQudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYO1xuXHRcdFx0XHRjdXJyZW50WSA9IGV2ZW50LnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WTtcblx0XHRcdFxuXHRcdFx0XHRsZXQgZGVsdGFYID0gY3VycmVudFggLSBzdGFydFg7XG5cdFx0XHRcdGxldCBkZWx0YVkgPSBjdXJyZW50WSAtIHN0YXJ0WTtcblx0XHRcdFxuXHRcdFx0XHR0aW5kZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgndGluZGVyX2xvdmUnLCBkZWx0YVggPiAwKTtcblx0XHRcdFx0dGluZGVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3RpbmRlcl9ub3BlJywgZGVsdGFYIDwgMCk7XG5cdFx0XHRcblx0XHRcdFx0bGV0IHhNdWx0aSA9IGRlbHRhWCAqIDAuMDM7XG5cdFx0XHRcdGxldCB5TXVsdGkgPSBkZWx0YVkgLyA4MDtcblx0XHRcdFx0bGV0IHJvdGF0ZSA9IHhNdWx0aSAqIHlNdWx0aTtcblx0XHRcdFxuXHRcdFx0XHRlbC5zdHlsZS50cmFuc2Zvcm0gPSBcblx0XHRcdFx0XHQndHJhbnNsYXRlKCcgKyAoaW5pdGlhbFggKyBkZWx0YVgpICsgJ3B4LCAnICsgXG5cdFx0XHRcdFx0KGluaXRpYWxZICsgZGVsdGFZKSArICdweCkgcm90YXRlKCcgKyByb3RhdGUgKyAnZGVnKSc7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8qKlxuICAgICAgICAgICAgICogRW5kcyB0aGUgZHJhZyBldmVudC5cbiAgICAgICAgICAgICAqL1xuXHRcdFx0ZnVuY3Rpb24gZW5kRHJhZygpIHtcblx0XHRcdFx0aWYgKCFpc0RyYWdnaW5nKSB7cmV0dXJuO31cblx0XHRcdFx0aXNEcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0XG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmluZycpO1xuXHRcdFx0XHR0aW5kZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGluZGVyX2xvdmUnKTtcblx0XHRcdFx0dGluZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3RpbmRlcl9ub3BlJyk7XG5cdFx0XHRcblx0XHRcdFx0bGV0IGRlbHRhWCA9IGN1cnJlbnRYIC0gc3RhcnRYO1xuXHRcdFx0XHRsZXQgZGVsdGFZID0gY3VycmVudFkgLSBzdGFydFk7XG5cdFx0XHRcdGxldCBtb3ZlT3V0V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXHRcdFx0XHRsZXQga2VlcCA9IE1hdGguYWJzKGRlbHRhWCkgPCA4MDtcblx0XHRcdFxuXHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdyZW1vdmVkJywgIWtlZXApO1xuXHRcdFx0XG5cdFx0XHRcdGlmIChrZWVwKSB7XG5cdFx0XHRcdFx0ZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG5cdFx0XHQgIFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgdG9YID0gZGVsdGFYID4gMCA/IG1vdmVPdXRXaWR0aCA6IC1tb3ZlT3V0V2lkdGg7XG5cdFx0XHRcdFx0bGV0IHRvWSA9IGRlbHRhWTtcblx0XHRcdFx0XHRsZXQgeE11bHRpID0gZGVsdGFYICogMC4wMztcblx0XHRcdFx0XHRsZXQgeU11bHRpID0gZGVsdGFZIC8gODA7XG5cdFx0XHRcdFx0bGV0IHJvdGF0ZSA9IHhNdWx0aSAqIHlNdWx0aTtcblx0XHRcblx0XHRcdFx0XHRlbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyB0b1ggKyAncHgsICcgKyB0b1kgKyAncHgpIHJvdGF0ZSgnICsgcm90YXRlICsgJ2RlZyknO1xuXHRcdFx0XHRcdGluaXRDYXJkcygpO1xuXHRcdFx0ICBcdH1cblx0XHRcdH1cblx0ICBcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN0YXJ0RHJhZyk7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnKTtcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmFnKTtcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlbmREcmFnKTtcblx0ICBcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzdGFydERyYWcpO1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZyk7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZERyYWcpO1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBlbmREcmFnKTtcblx0XHR9KTtcblx0XHRcblx0XHQvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIGJ1dHRvbiBsaXN0ZW5lciBmb3IgdGhlIGxpa2Ugb3IgZGlzbGlrZSBidXR0b25zLlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvdmUgLSBJbmRpY2F0ZXMgaWYgdGhlIGJ1dHRvbiBpcyBmb3IgbGlraW5nICh0cnVlKSBvciBkaXNsaWtpbmcgKGZhbHNlKS5cbiAgICAgICAgICogQHJldHVybnMge0Z1bmN0aW9ufSAtIFRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICAgICAgICovXG5cdFx0ZnVuY3Rpb24gY3JlYXRlQnV0dG9uTGlzdGVuZXIobG92ZSkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGluZGVyLS1jYXJkOm5vdCgucmVtb3ZlZCknKTtcblx0XHRcdFx0bGV0IG1vdmVPdXRXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKiAxLjU7XG5cdFx0XHRcblx0XHRcdFx0aWYgKCFjYXJkcy5sZW5ndGgpIHtyZXR1cm4gZmFsc2U7fVxuXHRcdFx0XG5cdFx0XHRcdGxldCBjYXJkID0gY2FyZHNbMF07XG5cdFx0XHRcblx0XHRcdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkJyk7XG5cdFx0XHRcblx0XHRcdFx0aWYgKGxvdmUpIHtcblx0XHRcdFx0XHRjYXJkLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIG1vdmVPdXRXaWR0aCArICdweCwgLTEwMHB4KSByb3RhdGUoLTMwZGVnKSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2FyZC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0nICsgbW92ZU91dFdpZHRoICsgJ3B4LCAtMTAwcHgpIHJvdGF0ZSgzMGRlZyknO1xuXHRcdFx0XHR9XG5cdFx0XHRcblx0XHRcdFx0aW5pdENhcmRzKCk7XG5cdFx0XHRcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH07XG5cdFx0fVxuICBcblx0XHRsZXQgbm9wZUxpc3RlbmVyID0gY3JlYXRlQnV0dG9uTGlzdGVuZXIoZmFsc2UpO1xuXHRcdGxldCBsb3ZlTGlzdGVuZXIgPSBjcmVhdGVCdXR0b25MaXN0ZW5lcih0cnVlKTtcblx0XHRcblx0XHRub3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbm9wZUxpc3RlbmVyKTtcblx0XHRsb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG92ZUxpc3RlbmVyKTtcblx0fVxufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvbG9naW4uanMnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhci9uYXZiYXIuanMnO1xuaW1wb3J0IHsgbG9naW5Vc2VyIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9hcGlTZXJ2aWNlLmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIGxvZ2luIHBhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2Uge1xuXHQvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMb2dpblBhZ2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnQgLSBUaGUgcGFyZW50IG9iamVjdC5cbiAgICovXG5cdGNvbnN0cnVjdG9yKHBhcmVudCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMucGFyZW50LnJvb3QuaW5uZXJIVE1MID0gJyc7XG5cdFx0dGhpcy5wYXJlbnQucm9vdC5pbm5lckhUTUwgPSB0aGlzLnJlbmRlcigpO1xuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblx0XHR0aGlzLm5hdmJhciA9IG5ldyBOYXZiYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JyksIHBhcmVudCk7XG5cdH1cblxuXHQvKipcbiAgICogUmVuZGVycyB0aGUgbG9naW4gcGFnZSB0ZW1wbGF0ZS5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgSFRNTCBzdHJpbmcgb2YgdGhlIGxvZ2luIHBhZ2UgdGVtcGxhdGUuXG4gICAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRlbXBsYXRlKCk7XG5cdH1cblxuXHQvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGxvZ2luIHBhZ2UgZWxlbWVudHMuXG4gICAqL1xuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgdXJsID0gbmV3IFVSTChldmVudC50YXJnZXQuaHJlZik7XG5cdFx0XHRjb25zdCBwYXRoID0gdXJsLnBhdGhuYW1lO1xuXHRcdFx0dGhpcy5wYXJlbnQucmVuZGVyKHBhdGgpO1xuXHRcdH0pO1xuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBsb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpLnZhbHVlO1xuXHRcdFx0Y29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZTtcblxuXHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcblxuXHRcdFx0aWYgKCFsb2dpbikge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZXJyb3InKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1lcnJvcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghcGFzc3dvcmQpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdHZhbGlkID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtZXJyb3InKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsaWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBpc0xvZ2VkSW4gPSBhd2FpdCBsb2dpblVzZXIobG9naW4sIHBhc3N3b3JkKTtcblx0XHRcdFx0XHRpZiAoIWlzTG9nZWRJbikge1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXBhc3N3b3JkLWVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7ICAgICAgICAgICAgXG5cdFx0XHRcdFx0fSBlbHNlIHsgXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC5yZW5kZXIoJy9mZWVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhdXRob3JpemF0aW9uJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3NpZ251cC5qcyc7XG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tICcuLi8uLi9tb2R1bGVzL2FwaVNlcnZpY2UuanMnO1xuaW1wb3J0IHsgaXNWYWxpZFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy92YWxpZGF0aW9uLmpzJztcbmltcG9ydCB7IGlzVmFsaWRMb2dpbiB9IGZyb20gJy4uLy4uL21vZHVsZXMvdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyL25hdmJhci5qcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSByZWdpc3RyYXRpb24gcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvblBhZ2Uge1xuXHQvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZWdpc3RyYXRpb25QYWdlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50IC0gVGhlIHBhcmVudCBvYmplY3QuXG4gICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQpIHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLnBhcmVudC5yb290LmlubmVySFRNTCA9ICcnO1xuXHRcdHRoaXMucGFyZW50LnJvb3QuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXIoKTtcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cdFx0dGhpcy5uYXZiYXIgPSBuZXcgTmF2YmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpLCBwYXJlbnQpO1xuXHR9XG4gIFxuXHQvKipcbiAgICogUmVuZGVycyB0aGUgcmVnaXN0cmF0aW9uIHBhZ2UgdGVtcGxhdGUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIEhUTUwgc3RyaW5nIG9mIHRoZSByZWdpc3RyYXRpb24gcGFnZSB0ZW1wbGF0ZS5cbiAgICovXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUoKTtcblx0fVxuXG5cdC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgcmVnaXN0cmF0aW9uIHBhZ2UgZWxlbWVudHMuXG4gICAqL1xuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgdXJsID0gbmV3IFVSTChldmVudC50YXJnZXQuaHJlZik7XG5cdFx0XHRjb25zdCBwYXRoID0gdXJsLnBhdGhuYW1lO1xuXHRcdFx0dGhpcy5wYXJlbnQucmVuZGVyKHBhdGgpO1xuXHRcdH0pO1xuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBsb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpLnZhbHVlO1xuXHRcdFx0Y29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZTtcblx0XHRcdGNvbnN0IGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJnZW5kZXJcIl06Y2hlY2tlZCcpLnZhbHVlO1xuXHRcdFx0Y29uc3QgYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnZScpLnZhbHVlO1xuXG5cdFx0XHRsZXQgdmFsaWQgPSB0cnVlO1xuXG5cdFx0XHRpZiAoIWlzVmFsaWRMb2dpbihsb2dpbikpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdHZhbGlkID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZXJyb3InKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWlzVmFsaWRQYXNzd29yZChwYXNzd29yZCkpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdHZhbGlkID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtZXJyb3InKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsaWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBpc1NpZ25lZFVwID0gYXdhaXQgcmVnaXN0ZXJVc2VyKGxvZ2luLCBwYXNzd29yZCwgZ2VuZGVyLCBhZ2UpO1xuXHRcdFx0XHRcdGlmICghaXNTaWduZWRVcCkge1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXBhc3N3b3JkLWVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7ICAgICAgICAgICAgXG5cdFx0XHRcdFx0fSBlbHNlIHsgXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudC5yZW5kZXIoJy9mZWVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucGFyZW50LnJlbmRlcignL2ZlZWQnKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7bGV0IHB1Z19odG1sID0gJycsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtsZXQgcHVnX2RlYnVnX2ZpbGVuYW1lLCBwdWdfZGVidWdfbGluZTt0cnkgeztcblx0bGV0IGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pO1xuICAgIFxuXHQoZnVuY3Rpb24gKHVzZXJzKSB7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGU3dpcGVDYXJkXFx1MDAyRlN3aXBlQ2FyZC5wdWcnO1xuXHRcdHB1Z19taXhpbnNbJ2NhcmQnXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbih1c2VybmFtZSwgZ2VuZGVyLCBhZ2Upe1xuXHRcdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGU3dpcGVDYXJkXFx1MDAyRlN3aXBlQ2FyZC5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwidGluZGVyLS1jYXJkXCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlN3aXBlQ2FyZFxcdTAwMkZTd2lwZUNhcmQucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cImltYWdlLXNlY3Rpb25cIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGU3dpcGVDYXJkXFx1MDAyRlN3aXBlQ2FyZC5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW1nIHNyYz1cIi4uXFx1MDAyRmFzc2V0c1xcdTAwMkZpbWdcXHUwMDJGaW1hZ2Uuc3ZnXCIgYWx0PVwiSW1hZ2VcIiBkcmFnZ2FibGU9XCJmYWxzZVwiXFx1MDAyRlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGU3dpcGVDYXJkXFx1MDAyRlN3aXBlQ2FyZC5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwiZm9ybS1zZWN0aW9uLXRpbmRlclwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZTd2lwZUNhcmRcXHUwMDJGU3dpcGVDYXJkLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NoMVxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGU3dpcGVDYXJkXFx1MDAyRlN3aXBlQ2FyZC5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArIChudWxsID09IChwdWdfaW50ZXJwID0gdXNlcm5hbWUpID8gJycgOiBwdWdfaW50ZXJwKSArICdcXHUwMDNDXFx1MDAyRmgxXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZTd2lwZUNhcmRcXHUwMDJGU3dpcGVDYXJkLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0N0ZXh0LWJhc2VcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlN3aXBlQ2FyZFxcdTAwMkZTd2lwZUNhcmQucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J/QvtC7OiAnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGU3dpcGVDYXJkXFx1MDAyRlN3aXBlQ2FyZC5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArIChudWxsID09IChwdWdfaW50ZXJwID0gZ2VuZGVyKSA/ICcnIDogcHVnX2ludGVycCkgKyAnXFx1MDAzQ1xcdTAwMkZ0ZXh0LWJhc2VcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlN3aXBlQ2FyZFxcdTAwMkZTd2lwZUNhcmQucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3RleHQtYmFzZVxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGU3dpcGVDYXJkXFx1MDAyRlN3aXBlQ2FyZC5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQktC+0LfRgNCw0YHRgjogJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlN3aXBlQ2FyZFxcdTAwMkZTd2lwZUNhcmQucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IGFnZSkgPyAnJyA6IHB1Z19pbnRlcnApICsgJ1xcdTAwM0NcXHUwMDJGdGV4dC1iYXNlXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdFx0fTtcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZUZXh0QnV0dG9uXFx1MDAyRlRleHRCdXR0b24ucHVnJztcblxuXG5cblxuXG5cblxuXHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRwdWdfbWl4aW5zWyduYXZiYXInXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihpc0F1dGgpe1xuXHRcdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwibmF2XCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDU7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cIm5hdl9fbG9nb1wiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbWcgc3JjPVwiLi5cXHUwMDJGLi5cXHUwMDJGYXNzZXRzXFx1MDAyRmltZ1xcdTAwMkZMb2dvLnN2Z1wiIGFsdD1cImxvZ29cIlxcdTAwMkZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cIm1haW4tbmF2XCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3VsXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRpZiAoKGlzQXV0aCkpIHtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTA7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDbGkgY2xhc3M9XCJuYXYtbGlua1wiXFx1MDAzRSc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDExO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2EgaHJlZj1cIlxcdTAwMkZmZWVkXCJcXHUwMDNFJztcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQk9C70LDQstC90LDRj1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRSc7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDbGkgY2xhc3M9XCJuYXYtbGlua1wiXFx1MDAzRSc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2EgaHJlZj1cIlxcdTAwMkZsb2dpblwiXFx1MDAzRSc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JvQvtCz0LjQvVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRSc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2xpIGNsYXNzPVwibmF2LWxpbmtcIlxcdTAwM0UnO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NhIGhyZWY9XCJcXHUwMDJGc2lnbnVwXCJcXHUwMDNFJztcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFJztcblx0XHRcdH1cblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ1xcdTAwMkZ1bFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdGlmICgoaXNBdXRoKSkge1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NidXR0b24gaWQ9XCJidXR0b24tbG9nb3V0XCIgdHlwZT1cImJ1dHRvblwiXFx1MDAzRSc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JLRi9C50YLQuCDQuNC3INCw0LrQutCw0YPQvdGC0LBcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0UnO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0MhLS0rdGV4dEJ1dHRvbihcXCfQktGL0LnRgtC4INC40Lcg0LDQutC60LDRg9C90YLQsFxcJywgXFwnYnV0dG9uLWxvZ291dFxcJyktLVxcdTAwM0UnO1xuXHRcdFx0fVxuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdH07XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnLlxcdTAwMkZzcmNcXHUwMDJGcGFnZXNcXHUwMDJGZmVlZFxcdTAwMkZmZWVkLnB1Zyc7XG5cdFx0cHVnX21peGluc1snbmF2YmFyJ10odHJ1ZSk7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnLlxcdTAwMkZzcmNcXHUwMDJGcGFnZXNcXHUwMDJGZmVlZFxcdTAwMkZmZWVkLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwidGluZGVyXCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICcuXFx1MDAyRnNyY1xcdTAwMkZwYWdlc1xcdTAwMkZmZWVkXFx1MDAyRmZlZWQucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NkaXYgY2xhc3M9XCJ0aW5kZXItLWNhcmRzXCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICcuXFx1MDAyRnNyY1xcdTAwMkZwYWdlc1xcdTAwMkZmZWVkXFx1MDAyRmZlZWQucHVnJztcblx0XHQvLyBpdGVyYXRlIHVzZXJzXG5cdFx0OyhmdW5jdGlvbigpe1xuXHRcdFx0bGV0ICQkb2JqID0gdXNlcnM7XG5cdFx0XHRpZiAoJ251bWJlcicgPT09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcblx0XHRcdFx0Zm9yICh2YXIgcHVnX2luZGV4MCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgcHVnX2luZGV4MCA8ICQkbDsgcHVnX2luZGV4MCsrKSB7XG5cdFx0XHRcdFx0dmFyIHVzZXIgPSAkJG9ialtwdWdfaW5kZXgwXTtcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICcuXFx1MDAyRnNyY1xcdTAwMkZwYWdlc1xcdTAwMkZmZWVkXFx1MDAyRmZlZWQucHVnJztcblx0XHRcdFx0XHRwdWdfbWl4aW5zWydjYXJkJ10odXNlci51c2VybmFtZSwgdXNlci5nZW5kZXIsIHVzZXIuYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyICQkbCA9IDA7XG5cdFx0XHRcdGZvciAodmFyIHB1Z19pbmRleDAgaW4gJCRvYmopIHtcblx0XHRcdFx0XHQkJGwrKztcblx0XHRcdFx0XHR2YXIgdXNlciA9ICQkb2JqW3B1Z19pbmRleDBdO1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJy5cXHUwMDJGc3JjXFx1MDAyRnBhZ2VzXFx1MDAyRmZlZWRcXHUwMDJGZmVlZC5wdWcnO1xuXHRcdFx0XHRcdHB1Z19taXhpbnNbJ2NhcmQnXSh1c2VyLnVzZXJuYW1lLCB1c2VyLmdlbmRlciwgdXNlci5hZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSkuY2FsbCh0aGlzKTtcblxuXHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnLlxcdTAwMkZzcmNcXHUwMDJGcGFnZXNcXHUwMDJGZmVlZFxcdTAwMkZmZWVkLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwidGluZGVyLS1idXR0b25zXCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnLlxcdTAwMkZzcmNcXHUwMDJGcGFnZXNcXHUwMDJGZmVlZFxcdTAwMkZmZWVkLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDYnV0dG9uIGlkPVwibm9wZVwiXFx1MDAzRSc7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gMTI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJy5cXHUwMDJGc3JjXFx1MDAyRnBhZ2VzXFx1MDAyRmZlZWRcXHUwMDJGZmVlZC5wdWcnO1xuXHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2kgY2xhc3M9XCJmYSBmYS1yZW1vdmVcIlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDEzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICcuXFx1MDAyRnNyY1xcdTAwMkZwYWdlc1xcdTAwMkZmZWVkXFx1MDAyRmZlZWQucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbWcgc3JjPVwiLi5cXHUwMDJGYXNzZXRzXFx1MDAyRmltZ1xcdTAwMkZYLnN2Z1wiIGFsdD1cIlhcIlxcdTAwMkZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRSc7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gMTQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJy5cXHUwMDJGc3JjXFx1MDAyRnBhZ2VzXFx1MDAyRmZlZWRcXHUwMDJGZmVlZC5wdWcnO1xuXHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2J1dHRvbiBpZD1cImxvdmVcIlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDE1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICcuXFx1MDAyRnNyY1xcdTAwMkZwYWdlc1xcdTAwMkZmZWVkXFx1MDAyRmZlZWQucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpIGNsYXNzPVwiZmEgZmEtaGVhcnRcIlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDE2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICcuXFx1MDAyRnNyY1xcdTAwMkZwYWdlc1xcdTAwMkZmZWVkXFx1MDAyRmZlZWQucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbWcgc3JjPVwiLi5cXHUwMDJGYXNzZXRzXFx1MDAyRmltZ1xcdTAwMkZIZWFydC5zdmdcIiBhbHQ9XCJIZWFydFwiXFx1MDAyRlxcdTAwM0VcXHUwMDNDXFx1MDAyRmlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0fS5jYWxsKHRoaXMsICd1c2VycycgaW4gbG9jYWxzX2Zvcl93aXRoID9cblx0XHRsb2NhbHNfZm9yX3dpdGgudXNlcnMgOlxuXHRcdHR5cGVvZiB1c2VycyAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VycyA6IHVuZGVmaW5lZCkpO1xuXHQ7fSBjYXRjaCAoZXJyKSB7cHVnLnJldGhyb3coZXJyLCBwdWdfZGVidWdfZmlsZW5hbWUsIHB1Z19kZWJ1Z19saW5lKTt9O3JldHVybiBwdWdfaHRtbDt9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7bGV0IHB1Z19odG1sID0gJycsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtsZXQgcHVnX2RlYnVnX2ZpbGVuYW1lLCBwdWdfZGVidWdfbGluZTt0cnkgeztwdWdfZGVidWdfbGluZSA9IDE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkltYWdlU2VjdGlvblxcdTAwMkZJbWFnZVNlY3Rpb24ucHVnJztcblx0cHVnX21peGluc1snaW1hZ2VTZWN0aW9uJ10gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24ocGF0aCl7XG5cdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkltYWdlU2VjdGlvblxcdTAwMkZJbWFnZVNlY3Rpb24ucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NkaXYgY2xhc3M9XCJpbWFnZS1zZWN0aW9uXCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZJbWFnZVNlY3Rpb25cXHUwMDJGSW1hZ2VTZWN0aW9uLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDIS0taW1nKHNyYyE9cGF0aCwgYWx0PVwiSW1hZ2VcIiktLVxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkltYWdlU2VjdGlvblxcdTAwMkZJbWFnZVNlY3Rpb24ucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbWcgc3JjPVwiLi5cXHUwMDJGYXNzZXRzXFx1MDAyRmltZ1xcdTAwMkZpbWFnZS5zdmdcIiBhbHQ9XCJJbWFnZVwiXFx1MDAyRlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDU7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkltYWdlU2VjdGlvblxcdTAwMkZJbWFnZVNlY3Rpb24ucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0MhLS1pbWcoc3JjPWAuLlxcdTAwMkYuLlxcdTAwMkZhc3NldHNcXHUwMDJGaW1nXFx1MDAyRiR7cGF0aH1gIGFsdD1cIkltYWdlXCIpINCx0YPQtNC10YIg0YDQsNCx0L7RgtCw0YLRjC4uLi0tXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdH07XG5cdDtwdWdfZGVidWdfbGluZSA9IDc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkltYWdlU2VjdGlvblxcdTAwMkZJbWFnZVNlY3Rpb24ucHVnJztcblx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDIS0t0L3QsNC00L4g0YfQuNC90LjRgtGMLS1cXHUwMDNFJztcblx0O3B1Z19kZWJ1Z19saW5lID0gMztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQmFzZUxvZ1JlZ1xcdTAwMkZCYXNlTG9nUmVnLnB1Zyc7XG5cdGNvbnN0IHBhdGhUb0ltYWdlID0gJy4uL2Fzc2V0cy9pbWcvaW1hZ2Uuc3ZnJ1xuO3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQmFzZUxvZ1JlZ1xcdTAwMkZCYXNlTG9nUmVnLnB1Zyc7XG5cdHB1Z19taXhpbnNbJ2Jhc2UnXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbih0eXBlT2ZQYWdlKXtcblx0XHRsZXQgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQmFzZUxvZ1JlZ1xcdTAwMkZCYXNlTG9nUmVnLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwiY29udGFpbmVyXCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZCYXNlTG9nUmVnXFx1MDAyRkJhc2VMb2dSZWcucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NkaXYgY2xhc3M9XCJmb3JtLXNlY3Rpb25cIlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkJhc2VMb2dSZWdcXHUwMDJGQmFzZUxvZ1JlZy5wdWcnO1xuXHRcdGlmICh0eXBlT2ZQYWdlID09PSAnc2lnbnVwJykge1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdHB1Z19taXhpbnNbJ2N1c3RvbUlucHV0J10gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oaW5wdXRUeXBlLCBmb3JtVHlwZSl7XG5cdFx0XHRcdGxldCBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0aWYgKGlucHV0VHlwZT09J3Bhc3N3b3JkJykge1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDbGFiZWwgY2xhc3M9XCIudGV4dC1iYXNlXCIgZm9yPVwicGFzc3dvcmRcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQn9Cw0YDQvtC70YxcXHUwMDNDXFx1MDAyRmxhYmVsXFx1MDAzRSc7XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YxcIlxcdTAwMkZcXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdGlmIChmb3JtVHlwZT09J3JlZ2lzdHJhdGlvbicpIHtcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NwIGNsYXNzPVwiZXJyb3JcIiBpZD1cInBhc3N3b3JkLWVycm9yXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Cf0LDRgNC+0LvRjCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L7RgiA2INC00L4gNDAg0YHQuNC80LLQvtC70L7Qsiwg0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8INC+0LTQvdGDINGG0LjRhNGA0YMsINGA0LDQt9GA0LXRiNC10L3QvdGL0LUg0YHQv9C10YYg0LfQvdCw0LrQuCAoIT8qLSQpXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGlmIChmb3JtVHlwZT09J2xvZ2luJykge1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NwIGNsYXNzPVwiZXJyb3JcIiBpZD1cInBhc3N3b3JkLWVycm9yXCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQntGI0LjQsdC60LA6INCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NwIGNsYXNzPVwiZXJyb3JcIiBpZD1cImxvZ2luLXBhc3N3b3JkLWVycm9yXCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQntGI0LjQsdC60LA6INCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YxcXHUwMDNDXFx1MDAyRnBcXHUwMDNFJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aWYgKGlucHV0VHlwZT09J2xvZ2luJykge1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NsYWJlbCBjbGFzcz1cIi50ZXh0LWJhc2VcIiBmb3I9XCJsb2dpblwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JvQvtCz0LjQvVxcdTAwM0NcXHUwMDJGbGFiZWxcXHUwMDNFJztcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDEyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW5wdXQgY2xhc3M9XCIudGV4dC1iYXNlXCIgdHlwZT1cInRleHRcIiBpZD1cImxvZ2luXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9XCJcXHUwMDJGXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdGlmIChmb3JtVHlwZT09J3JlZ2lzdHJhdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3AgY2xhc3M9XCJlcnJvclwiIGlkPVwibG9naW4tZXJyb3JcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQm9C+0LPQuNC9INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQtNC70LjQvdC10LUgNSwg0LrQvtGA0L7Rh9C1IDE1LCDQvdC1INC80L7QttC10YIg0YHQvtC00LXRgNC20LDRgtGMINGB0L/QtdGGINGB0LjQvNCy0L7Qu9GLLCDQutGA0L7QvNC1ICgtLCBfKSwg0Lgg0L7QvdC4INC90LUg0LzQvtCz0YPRgiDQsdGL0YLRjCDQsiDQvdCw0YfQsNC70LUg0Lgg0LIg0LrQvtC90YbQtSwg0YbQuNGE0YDRiyDQvdC1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0LIg0L3QsNGH0LDQu9C1XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGlmIChmb3JtVHlwZT09J2xvZ2luJykge1xuXHRcdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3AgY2xhc3M9XCJlcnJvclwiIGlkPVwibG9naW4tZXJyb3JcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J7RiNC40LHQutCwOiDQktCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGSGVhZGVyXFx1MDAyRkhlYWRlci5wdWcnO1xuXHRcdFx0cHVnX21peGluc1snaGVhZGVyJ10gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24odGl0bGUpe1xuXHRcdFx0XHRsZXQgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkhlYWRlclxcdTAwMkZIZWFkZXIucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwibG9nb1wiXFx1MDAzRSc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkhlYWRlclxcdTAwMkZIZWFkZXIucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW1nIHNyYz1cIi4uXFx1MDAyRmFzc2V0c1xcdTAwMkZpbWdcXHUwMDJGTG9nby5zdmdcIiBhbHQ9XCJMb2dvXCJcXHUwMDJGXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkhlYWRlclxcdTAwMkZIZWFkZXIucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaDEgY2xhc3M9XCJkZXNjcmlwdGlvblwiXFx1MDAzRSc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkhlYWRlclxcdTAwMkZIZWFkZXIucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArIChudWxsID09IChwdWdfaW50ZXJwID0gdGl0bGUpID8gJycgOiBwdWdfaW50ZXJwKSArICdcXHUwMDNDXFx1MDAyRmgxXFx1MDAzRSc7XG5cdFx0XHR9O1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGVGV4dEJ1dHRvblxcdTAwMkZUZXh0QnV0dG9uLnB1Zyc7XG5cdFx0XHRwdWdfbWl4aW5zWyd0ZXh0QnV0dG9uJ10gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24odGV4dCwgZWxlbUlkKXtcblx0XHRcdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZUZXh0QnV0dG9uXFx1MDAyRlRleHRCdXR0b24ucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDYnV0dG9uIHR5cGU9XCJidXR0b25cIlxcdTAwM0UnO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZUZXh0QnV0dG9uXFx1MDAyRlRleHRCdXR0b24ucHVnJztcblx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArIChudWxsID09IChwdWdfaW50ZXJwID0gdGV4dCkgPyAnJyA6IHB1Z19pbnRlcnApICsgJ1xcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRSc7XG5cdFx0XHR9O1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRwdWdfbWl4aW5zWydmb290ZXJUZXh0J10gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24odHlwZSl7XG5cdFx0XHRcdGxldCBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdGlmICh0eXBlPT0nbG9naW4nKSB7XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwiZm9vdGVyLXRleHRcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3NwYW5cXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9CjINCy0LDRgSDQtdGJ0LUg0L3QtdGCINCw0LrQutCw0YPQvdGC0LA/IFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0UnO1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDU7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2EgY2xhc3M9XCIubGlua1wiIGhyZWY9XCJcXHUwMDJGc2lnbnVwXCIgaWQ9XCJsaW5rXCJcXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9CX0LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0YxcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aWYgKHR5cGU9PSdyZWdpc3RyYXRpb24nKSB7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cImZvb3Rlci10ZXh0XCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDc3BhblxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9CjINCy0LDRgSDRg9C20LUg0LXRgdGC0Ywg0LDQutC60LDRg9C90YI/IFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NhIGNsYXNzPVwiLmxpbmtcIiBocmVmPVwiXFx1MDAyRmxvZ2luXCIgaWQ9XCJsaW5rXCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQktC+0LnQtNC40YLQtSDQsiDQsNC60LrQsNGD0L3RglxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZSZWdpc3RyYXRpb25Gb3JtXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm0ucHVnJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm1cXHUwMDJGUmVnaXN0cmF0aW9uRm9ybS5wdWcnO1xuXHRcdFx0cHVnX21peGluc1snaGVhZGVyJ10oJ9CU0L7QsdGA0L4g0L/QvtC20LDQu9C+0LLQsNGC0YwhJyk7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZSZWdpc3RyYXRpb25Gb3JtXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm0ucHVnJztcblx0XHRcdHB1Z19taXhpbnNbJ2N1c3RvbUlucHV0J10oJ2xvZ2luJywgJ3JlZ2lzdHJhdGlvbicpO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTA7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm1cXHUwMDJGUmVnaXN0cmF0aW9uRm9ybS5wdWcnO1xuXHRcdFx0cHVnX21peGluc1snY3VzdG9tSW5wdXQnXSgncGFzc3dvcmQnLCAncmVnaXN0cmF0aW9uJyk7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZHZW5kZXJTZWxlY3Rpb25cXHUwMDJGR2VuZGVyU2VsZWN0aW9uLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0N0ZXh0IGNsYXNzPVwiLnRleHQtYmFzZVwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZHZW5kZXJTZWxlY3Rpb25cXHUwMDJGR2VuZGVyU2VsZWN0aW9uLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Cf0L7Quyc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZHZW5kZXJTZWxlY3Rpb25cXHUwMDJGR2VuZGVyU2VsZWN0aW9uLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NkaXYgY2xhc3M9XCJnZW5kZXItc2VsZWN0aW9uXCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkdlbmRlclNlbGVjdGlvblxcdTAwMkZHZW5kZXJTZWxlY3Rpb24ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2lucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibWFsZVwiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT1cIm1hbGVcIiBjaGVja2VkPVwiY2hlY2tlZFwiXFx1MDAyRlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDbGFiZWwgZm9yPVwibWFsZVwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZHZW5kZXJTZWxlY3Rpb25cXHUwMDJGR2VuZGVyU2VsZWN0aW9uLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Cc0YPQttGB0LrQvtC5XFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJmZW1hbGVcIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9XCJmZW1hbGVcIlxcdTAwMkZcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkdlbmRlclNlbGVjdGlvblxcdTAwMkZHZW5kZXJTZWxlY3Rpb24ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2xhYmVsIGZvcj1cImZlbWFsZVwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZHZW5kZXJTZWxlY3Rpb25cXHUwMDJGR2VuZGVyU2VsZWN0aW9uLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9CW0LXQvdGB0LrQuNC5XFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDcCBjbGFzcz1cImVycm9yXCIgaWQ9XCJnZW5kZXItZXJyb3JcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQktGL0LHQtdGA0LjRgtC1INC/0L7Qu1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRnRleHRcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZSZWdpc3RyYXRpb25Gb3JtXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm0ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2xhYmVsIGNsYXNzPVwiLnRleHQtYmFzZVwiIGZvcj1cImFnZVwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGUmVnaXN0cmF0aW9uRm9ybVxcdTAwMkZSZWdpc3RyYXRpb25Gb3JtLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9CS0L7Qt9GA0LDRgdGCXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTU7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm1cXHUwMDJGUmVnaXN0cmF0aW9uRm9ybS5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJhZ2VcIiBuYW1lPVwiYWdlXCIgbWluPVwiMThcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjE4XCIgb25pbnB1dD1cInRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnZhbHVlID0gdGhpcy52YWx1ZVwiXFx1MDAyRlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm1cXHUwMDJGUmVnaXN0cmF0aW9uRm9ybS5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDb3V0cHV0XFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGUmVnaXN0cmF0aW9uRm9ybVxcdTAwMkZSZWdpc3RyYXRpb25Gb3JtLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJzE4XFx1MDAzQ1xcdTAwMkZvdXRwdXRcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZSZWdpc3RyYXRpb25Gb3JtXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm0ucHVnJztcblx0XHRcdHB1Z19taXhpbnNbJ3RleHRCdXR0b24nXSgn0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPJyk7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyMDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGUmVnaXN0cmF0aW9uRm9ybVxcdTAwMkZSZWdpc3RyYXRpb25Gb3JtLnB1Zyc7XG5cdFx0XHRwdWdfbWl4aW5zWydmb290ZXJUZXh0J10oJ3JlZ2lzdHJhdGlvbicpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHRpZiAodHlwZU9mUGFnZSA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRwdWdfbWl4aW5zWydjdXN0b21JbnB1dCddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGlucHV0VHlwZSwgZm9ybVR5cGUpe1xuXHRcdFx0XHRcdGxldCBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdGlmIChpbnB1dFR5cGU9PSdwYXNzd29yZCcpIHtcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NsYWJlbCBjbGFzcz1cIi50ZXh0LWJhc2VcIiBmb3I9XCJwYXNzd29yZFwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQn9Cw0YDQvtC70YxcXHUwMDNDXFx1MDAyRmxhYmVsXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCJcXHUwMDJGXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0aWYgKGZvcm1UeXBlPT0ncmVnaXN0cmF0aW9uJykge1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NwIGNsYXNzPVwiZXJyb3JcIiBpZD1cInBhc3N3b3JkLWVycm9yXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQn9Cw0YDQvtC70Ywg0LTQvtC70LbQtdC9INCx0YvRgtGMINC+0YIgNiDQtNC+IDQwINGB0LjQvNCy0L7Qu9C+0LIsINGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCDQvtC00L3RgyDRhtC40YTRgNGDLCDRgNCw0LfRgNC10YjQtdC90L3Ri9C1INGB0L/QtdGGINC30L3QsNC60LggKCE/Ki0kKVxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRpZiAoZm9ybVR5cGU9PSdsb2dpbicpIHtcblx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3AgY2xhc3M9XCJlcnJvclwiIGlkPVwicGFzc3dvcmQtZXJyb3JcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQntGI0LjQsdC60LA6INCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDcCBjbGFzcz1cImVycm9yXCIgaWQ9XCJsb2dpbi1wYXNzd29yZC1lcnJvclwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Ce0YjQuNCx0LrQsDog0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGlmIChpbnB1dFR5cGU9PSdsb2dpbicpIHtcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2xhYmVsIGNsYXNzPVwiLnRleHQtYmFzZVwiIGZvcj1cImxvZ2luXCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JvQvtCz0LjQvVxcdTAwM0NcXHUwMDJGbGFiZWxcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2lucHV0IGNsYXNzPVwiLnRleHQtYmFzZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsb2dpblwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LvQvtCz0LjQvVwiXFx1MDAyRlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0aWYgKGZvcm1UeXBlPT0ncmVnaXN0cmF0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3AgY2xhc3M9XCJlcnJvclwiIGlkPVwibG9naW4tZXJyb3JcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JvQvtCz0LjQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LTQu9C40L3QtdC1IDUsINC60L7RgNC+0YfQtSAxNSwg0L3QtSDQvNC+0LbQtdGCINGB0L7QtNC10YDQttCw0YLRjCDRgdC/0LXRhiDRgdC40LzQstC+0LvRiywg0LrRgNC+0LzQtSAoLSwgXyksINC4INC+0L3QuCDQvdC1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0LIg0L3QsNGH0LDQu9C1INC4INCyINC60L7QvdGG0LUsINGG0LjRhNGA0Ysg0L3QtSDQvNC+0LPRg9GCINCx0YvRgtGMINCyINC90LDRh9Cw0LvQtVxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRpZiAoZm9ybVR5cGU9PSdsb2dpbicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDcCBjbGFzcz1cImVycm9yXCIgaWQ9XCJsb2dpbi1lcnJvclwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J7RiNC40LHQutCwOiDQktCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZIZWFkZXJcXHUwMDJGSGVhZGVyLnB1Zyc7XG5cdFx0XHRcdHB1Z19taXhpbnNbJ2hlYWRlciddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHRpdGxlKXtcblx0XHRcdFx0XHRsZXQgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGSGVhZGVyXFx1MDAyRkhlYWRlci5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cImxvZ29cIlxcdTAwM0UnO1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkhlYWRlclxcdTAwMkZIZWFkZXIucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbWcgc3JjPVwiLi5cXHUwMDJGYXNzZXRzXFx1MDAyRmltZ1xcdTAwMkZMb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIlxcdTAwMkZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZIZWFkZXJcXHUwMDJGSGVhZGVyLnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaDEgY2xhc3M9XCJkZXNjcmlwdGlvblwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGSGVhZGVyXFx1MDAyRkhlYWRlci5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHRpdGxlKSA/ICcnIDogcHVnX2ludGVycCkgKyAnXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0UnO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZUZXh0QnV0dG9uXFx1MDAyRlRleHRCdXR0b24ucHVnJztcblx0XHRcdFx0cHVnX21peGluc1sndGV4dEJ1dHRvbiddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHRleHQsIGVsZW1JZCl7XG5cdFx0XHRcdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlRleHRCdXR0b25cXHUwMDJGVGV4dEJ1dHRvbi5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2J1dHRvbiB0eXBlPVwiYnV0dG9uXCJcXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZUZXh0QnV0dG9uXFx1MDAyRlRleHRCdXR0b24ucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB0ZXh0KSA/ICcnIDogcHVnX2ludGVycCkgKyAnXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFJztcblx0XHRcdFx0fTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdHB1Z19taXhpbnNbJ2Zvb3RlclRleHQnXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbih0eXBlKXtcblx0XHRcdFx0XHRsZXQgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0aWYgKHR5cGU9PSdsb2dpbicpIHtcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwiZm9vdGVyLXRleHRcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NzcGFuXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0KMg0LLQsNGBINC10YnQtSDQvdC10YIg0LDQutC60LDRg9C90YLQsD8gXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2EgY2xhc3M9XCIubGlua1wiIGhyZWY9XCJcXHUwMDJGc2lnbnVwXCIgaWQ9XCJsaW5rXCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDU7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGlmICh0eXBlPT0ncmVnaXN0cmF0aW9uJykge1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwiZm9vdGVyLXRleHRcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDc3BhblxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQoyDQstCw0YEg0YPQttC1INC10YHRgtGMINCw0LrQutCw0YPQvdGCPyBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2EgY2xhc3M9XCIubGlua1wiIGhyZWY9XCJcXHUwMDJGbG9naW5cIiBpZD1cImxpbmtcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQktC+0LnQtNC40YLQtSDQsiDQsNC60LrQsNGD0L3RglxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZMb2dpbkZvcm1cXHUwMDJGTG9naW5Gb3JtLnB1Zyc7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkxvZ2luRm9ybVxcdTAwMkZMb2dpbkZvcm0ucHVnJztcblx0XHRcdFx0cHVnX21peGluc1snaGVhZGVyJ10oJ9ChINCy0L7Qt9Cy0YDQsNGJ0LXQvdC40LXQvCEnKTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTG9naW5Gb3JtXFx1MDAyRkxvZ2luRm9ybS5wdWcnO1xuXHRcdFx0XHRwdWdfbWl4aW5zWydjdXN0b21JbnB1dCddKCdsb2dpbicsICdsb2dpbicpO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTG9naW5Gb3JtXFx1MDAyRkxvZ2luRm9ybS5wdWcnO1xuXHRcdFx0XHRwdWdfbWl4aW5zWydjdXN0b21JbnB1dCddKCdwYXNzd29yZCcsICdsb2dpbicpO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTG9naW5Gb3JtXFx1MDAyRkxvZ2luRm9ybS5wdWcnO1xuXHRcdFx0XHRwdWdfbWl4aW5zWyd0ZXh0QnV0dG9uJ10oJ9CS0L7QudGC0Lgg0LIg0LDQutC60LDRg9C90YInLCAnbG9naW4tYnV0dG9uJyk7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDEzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZMb2dpbkZvcm1cXHUwMDJGTG9naW5Gb3JtLnB1Zyc7XG5cdFx0XHRcdHB1Z19taXhpbnNbJ2Zvb3RlclRleHQnXSgnbG9naW4nKTtcblx0XHRcdH1cblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gMTI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkJhc2VMb2dSZWdcXHUwMDJGQmFzZUxvZ1JlZy5wdWcnO1xuXHRcdHB1Z19taXhpbnNbJ2ltYWdlU2VjdGlvbiddKHBhdGhUb0ltYWdlKTtcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdH07XG5cdDtwdWdfZGVidWdfbGluZSA9IDE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlRleHRCdXR0b25cXHUwMDJGVGV4dEJ1dHRvbi5wdWcnO1xuXHRwdWdfbWl4aW5zWyd0ZXh0QnV0dG9uJ10gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24odGV4dCwgZWxlbUlkKXtcblx0XHRsZXQgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGVGV4dEJ1dHRvblxcdTAwMkZUZXh0QnV0dG9uLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDYnV0dG9uIHR5cGU9XCJidXR0b25cIlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlRleHRCdXR0b25cXHUwMDJGVGV4dEJ1dHRvbi5wdWcnO1xuXHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHRleHQpID8gJycgOiBwdWdfaW50ZXJwKSArICdcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0UnO1xuXHR9O1xuXHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdHB1Z19taXhpbnNbJ25hdmJhciddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGlzQXV0aCl7XG5cdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NkaXYgY2xhc3M9XCJuYXZcIlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDU7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NkaXYgY2xhc3M9XCJuYXZfX2xvZ29cIlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbWcgc3JjPVwiLi5cXHUwMDJGLi5cXHUwMDJGYXNzZXRzXFx1MDAyRmltZ1xcdTAwMkZMb2dvLnN2Z1wiIGFsdD1cImxvZ29cIlxcdTAwMkZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwibWFpbi1uYXZcIlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0N1bFxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRpZiAoKGlzQXV0aCkpIHtcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDEwO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NsaSBjbGFzcz1cIm5hdi1saW5rXCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDExO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NhIGhyZWY9XCJcXHUwMDJGZmVlZFwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQk9C70LDQstC90LDRj1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRSc7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2xpIGNsYXNzPVwibmF2LWxpbmtcIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2EgaHJlZj1cIlxcdTAwMkZsb2dpblwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQm9C+0LPQuNC9XFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NsaSBjbGFzcz1cIm5hdi1saW5rXCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NhIGhyZWY9XCJcXHUwMDJGc2lnbnVwXCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y9cXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0UnO1xuXHRcdH1cblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdGlmICgoaXNBdXRoKSkge1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2J1dHRvbiBpZD1cImJ1dHRvbi1sb2dvdXRcIiB0eXBlPVwiYnV0dG9uXCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9CS0YvQudGC0Lgg0LjQtyDQsNC60LrQsNGD0L3RgtCwXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0MhLS0rdGV4dEJ1dHRvbihcXCfQktGL0LnRgtC4INC40Lcg0LDQutC60LDRg9C90YLQsFxcJywgXFwnYnV0dG9uLWxvZ291dFxcJyktLVxcdTAwM0UnO1xuXHRcdH1cblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdH07XG5cdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJy5cXHUwMDJGc3JjXFx1MDAyRnBhZ2VzXFx1MDAyRmxvZ2luXFx1MDAyRmxvZ2luLnB1Zyc7XG5cdHB1Z19taXhpbnNbJ25hdmJhciddKGZhbHNlKTtcblx0O3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnLlxcdTAwMkZzcmNcXHUwMDJGcGFnZXNcXHUwMDJGbG9naW5cXHUwMDJGbG9naW4ucHVnJztcblx0cHVnX21peGluc1snYmFzZSddKCdsb2dpbicpO30gY2F0Y2ggKGVycikge3B1Zy5yZXRocm93KGVyciwgcHVnX2RlYnVnX2ZpbGVuYW1lLCBwdWdfZGVidWdfbGluZSk7fTtyZXR1cm4gcHVnX2h0bWw7fSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge2xldCBwdWdfaHRtbCA9ICcnLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7bGV0IHB1Z19kZWJ1Z19maWxlbmFtZSwgcHVnX2RlYnVnX2xpbmU7dHJ5IHs7cHVnX2RlYnVnX2xpbmUgPSAxO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZJbWFnZVNlY3Rpb25cXHUwMDJGSW1hZ2VTZWN0aW9uLnB1Zyc7XG5cdHB1Z19taXhpbnNbJ2ltYWdlU2VjdGlvbiddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHBhdGgpe1xuXHRcdGxldCBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZJbWFnZVNlY3Rpb25cXHUwMDJGSW1hZ2VTZWN0aW9uLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwiaW1hZ2Utc2VjdGlvblwiXFx1MDAzRSc7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gMztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGSW1hZ2VTZWN0aW9uXFx1MDAyRkltYWdlU2VjdGlvbi5wdWcnO1xuXHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQyEtLWltZyhzcmMhPXBhdGgsIGFsdD1cIkltYWdlXCIpLS1cXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZJbWFnZVNlY3Rpb25cXHUwMDJGSW1hZ2VTZWN0aW9uLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW1nIHNyYz1cIi4uXFx1MDAyRmFzc2V0c1xcdTAwMkZpbWdcXHUwMDJGaW1hZ2Uuc3ZnXCIgYWx0PVwiSW1hZ2VcIlxcdTAwMkZcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZJbWFnZVNlY3Rpb25cXHUwMDJGSW1hZ2VTZWN0aW9uLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDIS0taW1nKHNyYz1gLi5cXHUwMDJGLi5cXHUwMDJGYXNzZXRzXFx1MDAyRmltZ1xcdTAwMkYke3BhdGh9YCBhbHQ9XCJJbWFnZVwiKSDQsdGD0LTQtdGCINGA0LDQsdC+0YLQsNGC0YwuLi4tLVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHR9O1xuXHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZJbWFnZVNlY3Rpb25cXHUwMDJGSW1hZ2VTZWN0aW9uLnB1Zyc7XG5cdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQyEtLdC90LDQtNC+INGH0LjQvdC40YLRjC0tXFx1MDAzRSc7XG5cdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkJhc2VMb2dSZWdcXHUwMDJGQmFzZUxvZ1JlZy5wdWcnO1xuXHRjb25zdCBwYXRoVG9JbWFnZSA9ICcuLi9hc3NldHMvaW1nL2ltYWdlLnN2ZydcbjtwdWdfZGVidWdfbGluZSA9IDU7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkJhc2VMb2dSZWdcXHUwMDJGQmFzZUxvZ1JlZy5wdWcnO1xuXHRwdWdfbWl4aW5zWydiYXNlJ10gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24odHlwZU9mUGFnZSl7XG5cdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkJhc2VMb2dSZWdcXHUwMDJGQmFzZUxvZ1JlZy5wdWcnO1xuXHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cImNvbnRhaW5lclwiXFx1MDAzRSc7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gNztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQmFzZUxvZ1JlZ1xcdTAwMkZCYXNlTG9nUmVnLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwiZm9ybS1zZWN0aW9uXCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZCYXNlTG9nUmVnXFx1MDAyRkJhc2VMb2dSZWcucHVnJztcblx0XHRpZiAodHlwZU9mUGFnZSA9PT0gJ3NpZ251cCcpIHtcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRwdWdfbWl4aW5zWydjdXN0b21JbnB1dCddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGlucHV0VHlwZSwgZm9ybVR5cGUpe1xuXHRcdFx0XHRsZXQgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdGlmIChpbnB1dFR5cGU9PSdwYXNzd29yZCcpIHtcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2xhYmVsIGNsYXNzPVwiLnRleHQtYmFzZVwiIGZvcj1cInBhc3N3b3JkXCJcXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J/QsNGA0L7Qu9GMXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0UnO1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCJcXHUwMDJGXFx1MDAzRSc7XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRpZiAoZm9ybVR5cGU9PSdyZWdpc3RyYXRpb24nKSB7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDcCBjbGFzcz1cImVycm9yXCIgaWQ9XCJwYXNzd29yZC1lcnJvclwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQn9Cw0YDQvtC70Ywg0LTQvtC70LbQtdC9INCx0YvRgtGMINC+0YIgNiDQtNC+IDQwINGB0LjQvNCy0L7Qu9C+0LIsINGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCDQvtC00L3RgyDRhtC40YTRgNGDLCDRgNCw0LfRgNC10YjQtdC90L3Ri9C1INGB0L/QtdGGINC30L3QsNC60LggKCE/Ki0kKVxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRpZiAoZm9ybVR5cGU9PSdsb2dpbicpIHtcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDcCBjbGFzcz1cImVycm9yXCIgaWQ9XCJwYXNzd29yZC1lcnJvclwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J7RiNC40LHQutCwOiDQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YxcXHUwMDNDXFx1MDAyRnBcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDcCBjbGFzcz1cImVycm9yXCIgaWQ9XCJsb2dpbi1wYXNzd29yZC1lcnJvclwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J7RiNC40LHQutCwOiDQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIChpbnB1dFR5cGU9PSdsb2dpbicpIHtcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDExO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDbGFiZWwgY2xhc3M9XCIudGV4dC1iYXNlXCIgZm9yPVwibG9naW5cIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Cb0L7Qs9C40L1cXHUwMDNDXFx1MDAyRmxhYmVsXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2lucHV0IGNsYXNzPVwiLnRleHQtYmFzZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsb2dpblwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0LvQvtCz0LjQvVwiXFx1MDAyRlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRpZiAoZm9ybVR5cGU9PSdyZWdpc3RyYXRpb24nKSB7XG5cdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NwIGNsYXNzPVwiZXJyb3JcIiBpZD1cImxvZ2luLWVycm9yXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JvQvtCz0LjQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LTQu9C40L3QtdC1IDUsINC60L7RgNC+0YfQtSAxNSwg0L3QtSDQvNC+0LbQtdGCINGB0L7QtNC10YDQttCw0YLRjCDRgdC/0LXRhiDRgdC40LzQstC+0LvRiywg0LrRgNC+0LzQtSAoLSwgXyksINC4INC+0L3QuCDQvdC1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0LIg0L3QsNGH0LDQu9C1INC4INCyINC60L7QvdGG0LUsINGG0LjRhNGA0Ysg0L3QtSDQvNC+0LPRg9GCINCx0YvRgtGMINCyINC90LDRh9Cw0LvQtVxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRpZiAoZm9ybVR5cGU9PSdsb2dpbicpIHtcblx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NwIGNsYXNzPVwiZXJyb3JcIiBpZD1cImxvZ2luLWVycm9yXCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Ce0YjQuNCx0LrQsDog0JLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0LvQvtCz0LjQvVxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkhlYWRlclxcdTAwMkZIZWFkZXIucHVnJztcblx0XHRcdHB1Z19taXhpbnNbJ2hlYWRlciddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHRpdGxlKXtcblx0XHRcdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZIZWFkZXJcXHUwMDJGSGVhZGVyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cImxvZ29cIlxcdTAwM0UnO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZIZWFkZXJcXHUwMDJGSGVhZGVyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2ltZyBzcmM9XCIuLlxcdTAwMkZhc3NldHNcXHUwMDJGaW1nXFx1MDAyRkxvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiXFx1MDAyRlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZIZWFkZXJcXHUwMDJGSGVhZGVyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2gxIGNsYXNzPVwiZGVzY3JpcHRpb25cIlxcdTAwM0UnO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZIZWFkZXJcXHUwMDJGSGVhZGVyLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHRpdGxlKSA/ICcnIDogcHVnX2ludGVycCkgKyAnXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0UnO1xuXHRcdFx0fTtcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlRleHRCdXR0b25cXHUwMDJGVGV4dEJ1dHRvbi5wdWcnO1xuXHRcdFx0cHVnX21peGluc1sndGV4dEJ1dHRvbiddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHRleHQsIGVsZW1JZCl7XG5cdFx0XHRcdGxldCBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGVGV4dEJ1dHRvblxcdTAwMkZUZXh0QnV0dG9uLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2J1dHRvbiB0eXBlPVwiYnV0dG9uXCJcXHUwMDNFJztcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGVGV4dEJ1dHRvblxcdTAwMkZUZXh0QnV0dG9uLnB1Zyc7XG5cdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHRleHQpID8gJycgOiBwdWdfaW50ZXJwKSArICdcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0UnO1xuXHRcdFx0fTtcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0cHVnX21peGluc1snZm9vdGVyVGV4dCddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHR5cGUpe1xuXHRcdFx0XHRsZXQgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRpZiAodHlwZT09J2xvZ2luJykge1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cImZvb3Rlci10ZXh0XCJcXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NzcGFuXFx1MDAzRSc7XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQoyDQstCw0YEg0LXRidC1INC90LXRgiDQsNC60LrQsNGD0L3RgtCwPyBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NhIGNsYXNzPVwiLmxpbmtcIiBocmVmPVwiXFx1MDAyRnNpZ251cFwiIGlkPVwibGlua1wiXFx1MDAzRSc7XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmICh0eXBlPT0ncmVnaXN0cmF0aW9uJykge1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NkaXYgY2xhc3M9XCJmb290ZXItdGV4dFwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3NwYW5cXHUwMDNFJztcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDg7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQoyDQstCw0YEg0YPQttC1INC10YHRgtGMINCw0LrQutCw0YPQvdGCPyBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFJztcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDYSBjbGFzcz1cIi5saW5rXCIgaHJlZj1cIlxcdTAwMkZsb2dpblwiIGlkPVwibGlua1wiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JLQvtC50LTQuNGC0LUg0LIg0LDQutC60LDRg9C90YJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGUmVnaXN0cmF0aW9uRm9ybVxcdTAwMkZSZWdpc3RyYXRpb25Gb3JtLnB1Zyc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZSZWdpc3RyYXRpb25Gb3JtXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm0ucHVnJztcblx0XHRcdHB1Z19taXhpbnNbJ2hlYWRlciddKCfQlNC+0LHRgNC+INC/0L7QttCw0LvQvtCy0LDRgtGMIScpO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGUmVnaXN0cmF0aW9uRm9ybVxcdTAwMkZSZWdpc3RyYXRpb25Gb3JtLnB1Zyc7XG5cdFx0XHRwdWdfbWl4aW5zWydjdXN0b21JbnB1dCddKCdsb2dpbicsICdyZWdpc3RyYXRpb24nKTtcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDEwO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZSZWdpc3RyYXRpb25Gb3JtXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm0ucHVnJztcblx0XHRcdHB1Z19taXhpbnNbJ2N1c3RvbUlucHV0J10oJ3Bhc3N3b3JkJywgJ3JlZ2lzdHJhdGlvbicpO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDdGV4dCBjbGFzcz1cIi50ZXh0LWJhc2VcIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQn9C+0LsnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwiZ2VuZGVyLXNlbGVjdGlvblwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZHZW5kZXJTZWxlY3Rpb25cXHUwMDJGR2VuZGVyU2VsZWN0aW9uLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1hbGVcIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9XCJtYWxlXCIgY2hlY2tlZD1cImNoZWNrZWRcIlxcdTAwMkZcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkdlbmRlclNlbGVjdGlvblxcdTAwMkZHZW5kZXJTZWxlY3Rpb24ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2xhYmVsIGZvcj1cIm1hbGVcIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQnNGD0LbRgdC60L7QuVxcdTAwM0NcXHUwMDJGbGFiZWxcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDU7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkdlbmRlclNlbGVjdGlvblxcdTAwMkZHZW5kZXJTZWxlY3Rpb24ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2lucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZmVtYWxlXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPVwiZmVtYWxlXCJcXHUwMDJGXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZHZW5kZXJTZWxlY3Rpb25cXHUwMDJGR2VuZGVyU2VsZWN0aW9uLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NsYWJlbCBmb3I9XCJmZW1hbGVcIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGR2VuZGVyU2VsZWN0aW9uXFx1MDAyRkdlbmRlclNlbGVjdGlvbi5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQltC10L3RgdC60LjQuVxcdTAwM0NcXHUwMDJGbGFiZWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkdlbmRlclNlbGVjdGlvblxcdTAwMkZHZW5kZXJTZWxlY3Rpb24ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3AgY2xhc3M9XCJlcnJvclwiIGlkPVwiZ2VuZGVyLWVycm9yXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkdlbmRlclNlbGVjdGlvblxcdTAwMkZHZW5kZXJTZWxlY3Rpb24ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JLRi9Cx0LXRgNC40YLQtSDQv9C+0LtcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ0ZXh0XFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGUmVnaXN0cmF0aW9uRm9ybVxcdTAwMkZSZWdpc3RyYXRpb25Gb3JtLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NsYWJlbCBjbGFzcz1cIi50ZXh0LWJhc2VcIiBmb3I9XCJhZ2VcIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm1cXHUwMDJGUmVnaXN0cmF0aW9uRm9ybS5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQktC+0LfRgNCw0YHRglxcdTAwM0NcXHUwMDJGbGFiZWxcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZSZWdpc3RyYXRpb25Gb3JtXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm0ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2lucHV0IHR5cGU9XCJyYW5nZVwiIGlkPVwiYWdlXCIgbmFtZT1cImFnZVwiIG1pbj1cIjE4XCIgbWF4PVwiMTAwXCIgdmFsdWU9XCIxOFwiIG9uaW5wdXQ9XCJ0aGlzLm5leHRFbGVtZW50U2libGluZy52YWx1ZSA9IHRoaXMudmFsdWVcIlxcdTAwMkZcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZSZWdpc3RyYXRpb25Gb3JtXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm0ucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ291dHB1dFxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm1cXHUwMDJGUmVnaXN0cmF0aW9uRm9ybS5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICcxOFxcdTAwM0NcXHUwMDJGb3V0cHV0XFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGUmVnaXN0cmF0aW9uRm9ybVxcdTAwMkZSZWdpc3RyYXRpb25Gb3JtLnB1Zyc7XG5cdFx0XHRwdWdfbWl4aW5zWyd0ZXh0QnV0dG9uJ10oJ9CX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjycpO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjA7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlJlZ2lzdHJhdGlvbkZvcm1cXHUwMDJGUmVnaXN0cmF0aW9uRm9ybS5wdWcnO1xuXHRcdFx0cHVnX21peGluc1snZm9vdGVyVGV4dCddKCdyZWdpc3RyYXRpb24nKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0aWYgKHR5cGVPZlBhZ2UgPT09ICdsb2dpbicpIHtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0cHVnX21peGluc1snY3VzdG9tSW5wdXQnXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihpbnB1dFR5cGUsIGZvcm1UeXBlKXtcblx0XHRcdFx0XHRsZXQgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRpZiAoaW5wdXRUeXBlPT0ncGFzc3dvcmQnKSB7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDbGFiZWwgY2xhc3M9XCIudGV4dC1iYXNlXCIgZm9yPVwicGFzc3dvcmRcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J/QsNGA0L7Qu9GMXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2lucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFwiXFx1MDAyRlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdGlmIChmb3JtVHlwZT09J3JlZ2lzdHJhdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDcCBjbGFzcz1cImVycm9yXCIgaWQ9XCJwYXNzd29yZC1lcnJvclwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQvtGCIDYg0LTQviA0MCDRgdC40LzQstC+0LvQvtCyLCDRgdC+0LTQtdGA0LbQsNGC0Ywg0LzQuNC90LjQvNGD0Lwg0L7QtNC90YMg0YbQuNGE0YDRgywg0YDQsNC30YDQtdGI0LXQvdC90YvQtSDRgdC/0LXRhiDQt9C90LDQutC4ICghPyotJClcXHUwMDNDXFx1MDAyRnBcXHUwMDNFJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0aWYgKGZvcm1UeXBlPT0nbG9naW4nKSB7XG5cdFx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NwIGNsYXNzPVwiZXJyb3JcIiBpZD1cInBhc3N3b3JkLWVycm9yXCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0J7RiNC40LHQutCwOiDQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YxcXHUwMDNDXFx1MDAyRnBcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3AgY2xhc3M9XCJlcnJvclwiIGlkPVwibG9naW4tcGFzc3dvcmQtZXJyb3JcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQntGI0LjQsdC60LA6INCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YxcXHUwMDNDXFx1MDAyRnBcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRpZiAoaW5wdXRUeXBlPT0nbG9naW4nKSB7XG5cdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDExO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NsYWJlbCBjbGFzcz1cIi50ZXh0LWJhc2VcIiBmb3I9XCJsb2dpblwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDExO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Cb0L7Qs9C40L1cXHUwMDNDXFx1MDAyRmxhYmVsXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDEyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZDdXN0b21JbnB1dFxcdTAwMkZDdXN0b21JbnB1dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NpbnB1dCBjbGFzcz1cIi50ZXh0LWJhc2VcIiB0eXBlPVwidGV4dFwiIGlkPVwibG9naW5cIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC70L7Qs9C40L1cIlxcdTAwMkZcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTM7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdGlmIChmb3JtVHlwZT09J3JlZ2lzdHJhdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NwIGNsYXNzPVwiZXJyb3JcIiBpZD1cImxvZ2luLWVycm9yXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Cb0L7Qs9C40L0g0LTQvtC70LbQtdC9INCx0YvRgtGMINC00LvQuNC90LXQtSA1LCDQutC+0YDQvtGH0LUgMTUsINC90LUg0LzQvtC20LXRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0YHQv9C10YYg0YHQuNC80LLQvtC70YssINC60YDQvtC80LUgKC0sIF8pLCDQuCDQvtC90Lgg0L3QtSDQvNC+0LPRg9GCINCx0YvRgtGMINCyINC90LDRh9Cw0LvQtSDQuCDQsiDQutC+0L3RhtC1LCDRhtC40YTRgNGLINC90LUg0LzQvtCz0YPRgiDQsdGL0YLRjCDQsiDQvdCw0YfQsNC70LVcXHUwMDNDXFx1MDAyRnBcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGZvcm1UeXBlPT0nbG9naW4nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGQ3VzdG9tSW5wdXRcXHUwMDJGQ3VzdG9tSW5wdXQucHVnJztcblx0XHRcdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3AgY2xhc3M9XCJlcnJvclwiIGlkPVwibG9naW4tZXJyb3JcIlxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTY7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkN1c3RvbUlucHV0XFx1MDAyRkN1c3RvbUlucHV0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9Ce0YjQuNCx0LrQsDog0JLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0LvQvtCz0LjQvVxcdTAwM0NcXHUwMDJGcFxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGSGVhZGVyXFx1MDAyRkhlYWRlci5wdWcnO1xuXHRcdFx0XHRwdWdfbWl4aW5zWydoZWFkZXInXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbih0aXRsZSl7XG5cdFx0XHRcdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkhlYWRlclxcdTAwMkZIZWFkZXIucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NkaXYgY2xhc3M9XCJsb2dvXCJcXHUwMDNFJztcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZIZWFkZXJcXHUwMDJGSGVhZGVyLnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW1nIHNyYz1cIi4uXFx1MDAyRmFzc2V0c1xcdTAwMkZpbWdcXHUwMDJGTG9nby5zdmdcIiBhbHQ9XCJMb2dvXCJcXHUwMDJGXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGSGVhZGVyXFx1MDAyRkhlYWRlci5wdWcnO1xuXHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2gxIGNsYXNzPVwiZGVzY3JpcHRpb25cIlxcdTAwM0UnO1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkhlYWRlclxcdTAwMkZIZWFkZXIucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB0aXRsZSkgPyAnJyA6IHB1Z19pbnRlcnApICsgJ1xcdTAwM0NcXHUwMDJGaDFcXHUwMDNFJztcblx0XHRcdFx0fTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGVGV4dEJ1dHRvblxcdTAwMkZUZXh0QnV0dG9uLnB1Zyc7XG5cdFx0XHRcdHB1Z19taXhpbnNbJ3RleHRCdXR0b24nXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbih0ZXh0LCBlbGVtSWQpe1xuXHRcdFx0XHRcdGxldCBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcblx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZUZXh0QnV0dG9uXFx1MDAyRlRleHRCdXR0b24ucHVnJztcblx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NidXR0b24gdHlwZT1cImJ1dHRvblwiXFx1MDAzRSc7XG5cdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGVGV4dEJ1dHRvblxcdTAwMkZUZXh0QnV0dG9uLnB1Zyc7XG5cdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArIChudWxsID09IChwdWdfaW50ZXJwID0gdGV4dCkgPyAnJyA6IHB1Z19pbnRlcnApICsgJ1xcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRSc7XG5cdFx0XHRcdH07XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRwdWdfbWl4aW5zWydmb290ZXJUZXh0J10gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24odHlwZSl7XG5cdFx0XHRcdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdGlmICh0eXBlPT0nbG9naW4nKSB7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cImZvb3Rlci10ZXh0XCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDc3BhblxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ9CjINCy0LDRgSDQtdGJ0LUg0L3QtdGCINCw0LrQutCw0YPQvdGC0LA/IFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0UnO1xuXHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NhIGNsYXNzPVwiLmxpbmtcIiBocmVmPVwiXFx1MDAyRnNpZ251cFwiIGlkPVwibGlua1wiXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZGb290ZXJUZXh0XFx1MDAyRkZvb3RlclRleHQucHVnJztcblx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjFxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRpZiAodHlwZT09J3JlZ2lzdHJhdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cImZvb3Rlci10ZXh0XCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ3NwYW5cXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0KMg0LLQsNGBINGD0LbQtSDQtdGB0YLRjCDQsNC60LrQsNGD0L3Rgj8gXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRSc7XG5cdFx0XHRcdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkZvb3RlclRleHRcXHUwMDJGRm9vdGVyVGV4dC5wdWcnO1xuXHRcdFx0XHRcdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NhIGNsYXNzPVwiLmxpbmtcIiBocmVmPVwiXFx1MDAyRmxvZ2luXCIgaWQ9XCJsaW5rXCJcXHUwMDNFJztcblx0XHRcdFx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGRm9vdGVyVGV4dFxcdTAwMkZGb290ZXJUZXh0LnB1Zyc7XG5cdFx0XHRcdFx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JLQvtC50LTQuNGC0LUg0LIg0LDQutC60LDRg9C90YJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTG9naW5Gb3JtXFx1MDAyRkxvZ2luRm9ybS5wdWcnO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA3O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZMb2dpbkZvcm1cXHUwMDJGTG9naW5Gb3JtLnB1Zyc7XG5cdFx0XHRcdHB1Z19taXhpbnNbJ2hlYWRlciddKCfQoSDQstC+0LfQstGA0LDRidC10L3QuNC10LwhJyk7XG5cdFx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDk7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkxvZ2luRm9ybVxcdTAwMkZMb2dpbkZvcm0ucHVnJztcblx0XHRcdFx0cHVnX21peGluc1snY3VzdG9tSW5wdXQnXSgnbG9naW4nLCAnbG9naW4nKTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTA7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkxvZ2luRm9ybVxcdTAwMkZMb2dpbkZvcm0ucHVnJztcblx0XHRcdFx0cHVnX21peGluc1snY3VzdG9tSW5wdXQnXSgncGFzc3dvcmQnLCAnbG9naW4nKTtcblx0XHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRkxvZ2luRm9ybVxcdTAwMkZMb2dpbkZvcm0ucHVnJztcblx0XHRcdFx0cHVnX21peGluc1sndGV4dEJ1dHRvbiddKCfQktC+0LnRgtC4INCyINCw0LrQutCw0YPQvdGCJywgJ2xvZ2luLWJ1dHRvbicpO1xuXHRcdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTG9naW5Gb3JtXFx1MDAyRkxvZ2luRm9ybS5wdWcnO1xuXHRcdFx0XHRwdWdfbWl4aW5zWydmb290ZXJUZXh0J10oJ2xvZ2luJyk7XG5cdFx0XHR9XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDEyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZCYXNlTG9nUmVnXFx1MDAyRkJhc2VMb2dSZWcucHVnJztcblx0XHRwdWdfbWl4aW5zWydpbWFnZVNlY3Rpb24nXShwYXRoVG9JbWFnZSk7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHR9O1xuXHQ7cHVnX2RlYnVnX2xpbmUgPSAxO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZUZXh0QnV0dG9uXFx1MDAyRlRleHRCdXR0b24ucHVnJztcblx0cHVnX21peGluc1sndGV4dEJ1dHRvbiddID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHRleHQsIGVsZW1JZCl7XG5cdFx0bGV0IGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xuXHRcdDtwdWdfZGVidWdfbGluZSA9IDI7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRlRleHRCdXR0b25cXHUwMDJGVGV4dEJ1dHRvbi5wdWcnO1xuXHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2J1dHRvbiB0eXBlPVwiYnV0dG9uXCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAyO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZUZXh0QnV0dG9uXFx1MDAyRlRleHRCdXR0b24ucHVnJztcblx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB0ZXh0KSA/ICcnIDogcHVnX2ludGVycCkgKyAnXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFJztcblx0fTtcblx0O3B1Z19kZWJ1Z19saW5lID0gMztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRwdWdfbWl4aW5zWyduYXZiYXInXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihpc0F1dGgpe1xuXHRcdGxldCBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwibmF2XCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA1O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDZGl2IGNsYXNzPVwibmF2X19sb2dvXCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA2O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDaW1nIHNyYz1cIi4uXFx1MDAyRi4uXFx1MDAyRmFzc2V0c1xcdTAwMkZpbWdcXHUwMDJGTG9nby5zdmdcIiBhbHQ9XCJsb2dvXCJcXHUwMDJGXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gNztwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAnXFx1MDAzQ2RpdiBjbGFzcz1cIm1haW4tbmF2XCJcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDdWxcXHUwMDNFJztcblx0XHQ7cHVnX2RlYnVnX2xpbmUgPSA5O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0aWYgKChpc0F1dGgpKSB7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMDtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDbGkgY2xhc3M9XCJuYXYtbGlua1wiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxMTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDYSBocmVmPVwiXFx1MDAyRmZlZWRcIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTE7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JPQu9Cw0LLQvdCw0Y9cXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0UnO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDEzO3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NsaSBjbGFzcz1cIm5hdi1saW5rXCJcXHUwMDNFJztcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NhIGhyZWY9XCJcXHUwMDJGbG9naW5cIlxcdTAwM0UnO1xuXHRcdFx0O3B1Z19kZWJ1Z19saW5lID0gMTQ7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRcdHB1Z19odG1sID0gcHVnX2h0bWwgKyAn0JvQvtCz0LjQvVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDbGkgY2xhc3M9XCJuYXYtbGlua1wiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDYSBocmVmPVwiXFx1MDAyRnNpZ251cFwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxNjtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFJztcblx0XHR9XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRSc7XG5cdFx0O3B1Z19kZWJ1Z19saW5lID0gMTc7cHVnX2RlYnVnX2ZpbGVuYW1lID0gJ3NyY1xcdTAwMkZjb21wb25lbnRzXFx1MDAyRk5hdmJhclxcdTAwMkZOYXZiYXIucHVnJztcblx0XHRpZiAoKGlzQXV0aCkpIHtcblx0XHRcdDtwdWdfZGVidWdfbGluZSA9IDE4O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICdzcmNcXHUwMDJGY29tcG9uZW50c1xcdTAwMkZOYXZiYXJcXHUwMDJGTmF2YmFyLnB1Zyc7XG5cdFx0XHRwdWdfaHRtbCA9IHB1Z19odG1sICsgJ1xcdTAwM0NidXR0b24gaWQ9XCJidXR0b24tbG9nb3V0XCIgdHlwZT1cImJ1dHRvblwiXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxODtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICfQktGL0LnRgtC4INC40Lcg0LDQutC60LDRg9C90YLQsFxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRSc7XG5cdFx0XHQ7cHVnX2RlYnVnX2xpbmUgPSAxOTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnc3JjXFx1MDAyRmNvbXBvbmVudHNcXHUwMDJGTmF2YmFyXFx1MDAyRk5hdmJhci5wdWcnO1xuXHRcdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDIS0tK3RleHRCdXR0b24oXFwn0JLRi9C50YLQuCDQuNC3INCw0LrQutCw0YPQvdGC0LBcXCcsIFxcJ2J1dHRvbi1sb2dvdXRcXCcpLS1cXHUwMDNFJztcblx0XHR9XG5cdFx0cHVnX2h0bWwgPSBwdWdfaHRtbCArICdcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0UnO1xuXHR9O1xuXHQ7cHVnX2RlYnVnX2xpbmUgPSA0O3B1Z19kZWJ1Z19maWxlbmFtZSA9ICcuXFx1MDAyRnNyY1xcdTAwMkZwYWdlc1xcdTAwMkZzaWdudXBcXHUwMDJGc2lnbnVwLnB1Zyc7XG5cdHB1Z19taXhpbnNbJ25hdmJhciddKGZhbHNlKTtcblx0O3B1Z19kZWJ1Z19saW5lID0gNTtwdWdfZGVidWdfZmlsZW5hbWUgPSAnLlxcdTAwMkZzcmNcXHUwMDJGcGFnZXNcXHUwMDJGc2lnbnVwXFx1MDAyRnNpZ251cC5wdWcnO1xuXHRwdWdfbWl4aW5zWydiYXNlJ10oJ3NpZ251cCcpO30gY2F0Y2ggKGVycikge3B1Zy5yZXRocm93KGVyciwgcHVnX2RlYnVnX2ZpbGVuYW1lLCBwdWdfZGVidWdfbGluZSk7fTtyZXR1cm4gcHVnX2h0bWw7fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=