/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.css ***!
  \****************************************************************************************************/
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
  font-family: "Rubik";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
}
body {
  font-family: "Rubik", sans-serif;
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
  filter: blur(2rem);
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 700;
}

.text-base {
  font-family: Rubik;
  filter: blur(1rem);
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 400;
}

.h2 {
  font-family: Rubik;
  filter: blur(1.5rem);
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 600;
}

.h3 {
  font-family: Rubik;
  filter: blur(1.1875rem);
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 500;
}

.link {
  font-family: Rubik;
  filter: blur(1rem);
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 400;
}

.text-base-medium {
  font-family: Rubik;
  filter: blur(1rem);
  line-height: normal;
  letter-spacing: 0%;
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

.nav__logo img {
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

.main-nav ul li a {
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

input[type=text], input[type=password] {
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
  content: "";
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
  display: flex;
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

.tinder--buttons button img {
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

.gender-selection input[type=radio] {
  appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  border: 2px solid var(--secondary, #49b2a6);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
}

.gender-selection input[type=radio]:checked::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--secondary, #49b2a6);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.gender-selection label {
  margin-right: 20px;
  color: var(--secondary, #49b2a6);
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--secondary);
  border-radius: 50%;
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: var(--secondary);
  border-radius: 50%;
  cursor: pointer;
}

output {
  margin-top: 10px;
  font-size: 16px;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACI,oBAAA;EACA,oHAAA;AACJ;AAGA;EACI,gCAAA;EACA,gCAAA;EACA,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,6BAAA;AADJ;;AAIA;EACI,oBAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,+BAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,2CAAA;EACA,aAAA;EACA,sBAAA;AADJ;;AAIA;EACI,UAAA;EACA,mBAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,sBAAA;AADJ;;AAMA;EACI,YAAA;EACA,iBAAA;EACA,oBAAA;AAHJ;;AAMA;EACI,uBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,wBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,yBAAA;EACA,2CAAA;EACA,cAAA;AAHJ;;AAMA;EACI,YAAA;EACA,kBAAA;EACA,aAAA;EACA,kCAAA;EACA,oBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;AAHJ;;AAMA;EACI,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;AAHJ;;AAMA;EACI,YAAA;EACA,iBAAA;EACA,uBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,kBAAA;EACA,qBAAA;EACA,oBAAA;AAHJ;;AAMA;EACI,0BAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,aAAA;EACA,SAAA;AAHJ;;AAMA;EACI,oBAAA;EACA,qBAAA;AAHJ;;AAMA;EACI,UAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,sBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,QAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,uBAAA;EACA,qBAAA;AAHJ;;AAMA;EACI,0BAAA;AAHJ;;AAMA;EACI,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAHJ;;AAKA;EACI,UAAA;EACA,kCAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;AAFJ;;AAIA;EACI,kBAAA;EACA,cAAA;EACA,oBAAA;AADJ;;AAGA;EACI,WAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,sBAAA;AAAJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,kCAAA;EACA,oBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,mBAAA;EACA,sBAAA;AACJ;;AACA;EACI,gCAAA;AAEJ;;AAAA;EACI,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;AAGJ;;AADA;EACI,YAAA;EACA,iBAAA;EACA,uBAAA;AAIJ;;AAFA;EACI,kBAAA;EACA,mBAAA;AAKJ;;AAFA;EACI,aAAA;EACA,sBAAA;EACA,aAAA;AAKJ;;AAHA;EACI,OAAA;AAMJ;;AAHA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,kCAAA;EACA,oBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,sBAAA;EACA,sCAAA;AAMJ;;AAJA;EACI,gCAAA;AAOJ;;AALA;EACI,gBAAA;AAQJ;;AANA;EACI,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;AASJ;;AAPA;EACI,WAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,iBAAA;AAUJ;;AARA;;;;;;;;;;;GAAA;AAaA;EACI,aAAA;EACA,SAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;AAUJ;;AAPA;EACI,aAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,SAAA;AAUJ;;AAPA;EACI,aAAA;EACA,kCAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAUJ;;AAPA;EACI,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,4BAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,2CAAA;AAUJ;;AAPA;EACI,UAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAUJ;;AAPA;EACI,UAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAUJ;;AAPA;EACI,YAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;AAUJ;;AAPA;EACI,UAAA;AAUJ;;AAPA;EACI,YAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,UAAA;AAUJ;;AAPA;EACI,aAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,UAAA;EACA,2CAAA;AAUJ;;AAPA;EACI,UAAA;EACA,kCAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;AAUJ;;AAPA;EACI,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;EACA,oBAAA;AAUJ;;AAPA;EACI,sBAAA;EACA,UAAA;EACA,SAAA;AAUJ;;AAPA;EACI,gBAAA;EACA,gBAAA;AAUJ;;AAPA;EACI,eAAA;EACA,eAAA;EACA,oBAAA;AAUJ;;AAPA;EACI,UAAA;AAUJ;;AAPA;EACI,eAAA;EACA,sBAAA;AAUJ;;AAPA;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AAUJ;;AAPA;EACI,aAAA;EACA,mBAAA;AAUJ;;AAPA;EACI,gBAAA;EACA,wBAAA;EACA,sBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;AAUJ;;AAPA;EACI,WAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,qCAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAUJ;;AAPA;EACI,kBAAA;EACA,gCAAA;AAUJ;;AAPA;EACI,wBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AAUJ;;AAPA;EACI,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,kBAAA;EACA,eAAA;AAUJ;;AAPA;EACI,WAAA;EACA,YAAA;EACA,4BAAA;EACA,kBAAA;EACA,eAAA;AAUJ;;AAPA;EACI,gBAAA;EACA,eAAA;AAUJ","sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (users) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_mixins["card"] = pug_interp = function(username, gender, age){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"tinder--card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-section\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002Fimage.svg\" alt=\"Image\" draggable=\"false\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-section-tinder\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + (null == (pug_interp = username) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Ctext-base\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "Пол: ";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + (null == (pug_interp = gender) ? "" : pug_interp) + "\u003C\u002Ftext-base\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "\u003Ctext-base\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + "Возраст: ";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FSwipeCard\u002FSwipeCard.pug";
pug_html = pug_html + (null == (pug_interp = age) ? "" : pug_interp) + "\u003C\u002Ftext-base\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";







;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_mixins["navbar"] = pug_interp = function(isAuth){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav__logo\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"main-nav\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
if ((isAuth)) {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Ffeed\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Главная\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Flogin\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Логин\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fsignup\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Регистрация\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
if ((isAuth)) {
;pug_debug_line = 19;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cbutton id=\"button-logout\" type=\"button\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Выйти из аккаунта\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_mixins["navbar"](true);
;pug_debug_line = 6;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Cdiv class=\"tinder\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Cdiv class=\"tinder--cards\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var user = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_mixins["card"](user.username, user.gender, user.age);
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var user = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_mixins["card"](user.username, user.gender, user.age);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Cdiv class=\"tinder--buttons\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Cbutton id=\"nope\"\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-remove\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FX.svg\" alt=\"X\"\u002F\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Cbutton id=\"love\"\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-heart\"\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Ffeed\u002Ffeed.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FHeart.svg\" alt=\"Heart\"\u002F\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"users" in locals_for_with?locals_for_with.users:typeof users!=="undefined"?users:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}

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
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (pathToImage) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FImageSection\u002FimageSection.pug";
pug_mixins["imageSection"] = pug_interp = function(path){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FImageSection\u002FimageSection.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-section\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FImageSection\u002FimageSection.pug";
pug_html = pug_html + "\u003Cimg src=\"Images\u002Fimage.svg\" alt=\"Image\"\u002F\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
pug_mixins["base"] = pug_interp = function(typeOfPage){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-section\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
if (typeOfPage === 'signup') {
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (inputType=='password') {
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"password\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cinput type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Введите пароль\u003C\u002Fp\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-password-error\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"login\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Логин\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cinput class=\".text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u002F\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Ch1 class=\"description\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + "\u003Cbutton type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
if (type=='login') {
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "У вас еще нет аккаунта? \u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Fsignup\" id=\"link\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "У вас уже есть аккаунт? \u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Flogin\" id=\"link\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["header"]('Добро пожаловать!');
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["customInput"]('login', 'registration');
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["customInput"]('password', 'registration');
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Ctext class=\".text-base\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "Пол";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Cdiv class=\"gender-selection\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" checked=\"checked\"\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Clabel for=\"male\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "Мужской\u003C\u002Flabel\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" id=\"female\" name=\"gender\" value=\"female\"\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Clabel for=\"female\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "Женский\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"gender-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "Выберите пол\u003C\u002Fp\u003E\u003C\u002Ftext\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"age\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "Возраст\u003C\u002Flabel\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "\u003Cinput type=\"range\" id=\"age\" name=\"age\" min=\"18\" max=\"100\" value=\"18\" oninput=\"this.nextElementSibling.value = this.value\"\u002F\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "\u003Coutput\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "18\u003C\u002Foutput\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["textButton"]('Зарегистрироваться');
;pug_debug_line = 20;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["footerText"]('registration');
}
else
if (typeOfPage === 'login') {
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (inputType=='password') {
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"password\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cinput type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Введите пароль\u003C\u002Fp\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-password-error\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"login\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Логин\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cinput class=\".text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u002F\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Ch1 class=\"description\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + "\u003Cbutton type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
if (type=='login') {
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "У вас еще нет аккаунта? \u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Fsignup\" id=\"link\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "У вас уже есть аккаунт? \u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Flogin\" id=\"link\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["header"]('С возвращением!');
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["customInput"]('login', 'login');
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["customInput"]('password', 'login');
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["textButton"]('Войти в аккаунт', 'login-button');
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["footerText"]('login');
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
pug_mixins["imageSection"](pathToImage);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + "\u003Cbutton type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_mixins["navbar"] = pug_interp = function(isAuth){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav__logo\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"main-nav\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
if ((isAuth)) {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Ffeed\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Главная\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Flogin\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Логин\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fsignup\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Регистрация\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
if ((isAuth)) {
;pug_debug_line = 19;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cbutton id=\"button-logout\" type=\"button\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Выйти из аккаунта\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Flogin\u002Flogin.pug";
pug_mixins["navbar"](false);
;pug_debug_line = 5;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Flogin\u002Flogin.pug";
pug_mixins["base"]('login');}.call(this,"pathToImage" in locals_for_with?locals_for_with.pathToImage:typeof pathToImage!=="undefined"?pathToImage:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}

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
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (pathToImage) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FImageSection\u002FimageSection.pug";
pug_mixins["imageSection"] = pug_interp = function(path){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FImageSection\u002FimageSection.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-section\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FImageSection\u002FimageSection.pug";
pug_html = pug_html + "\u003Cimg src=\"Images\u002Fimage.svg\" alt=\"Image\"\u002F\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
pug_mixins["base"] = pug_interp = function(typeOfPage){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-section\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
if (typeOfPage === 'signup') {
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (inputType=='password') {
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"password\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cinput type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Введите пароль\u003C\u002Fp\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-password-error\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"login\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Логин\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cinput class=\".text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u002F\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Ch1 class=\"description\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + "\u003Cbutton type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
if (type=='login') {
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "У вас еще нет аккаунта? \u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Fsignup\" id=\"link\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "У вас уже есть аккаунт? \u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Flogin\" id=\"link\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["header"]('Добро пожаловать!');
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["customInput"]('login', 'registration');
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["customInput"]('password', 'registration');
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Ctext class=\".text-base\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "Пол";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Cdiv class=\"gender-selection\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" checked=\"checked\"\u002F\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Clabel for=\"male\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "Мужской\u003C\u002Flabel\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Cinput type=\"radio\" id=\"female\" name=\"gender\" value=\"female\"\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Clabel for=\"female\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "Женский\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"gender-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FGenderSelection\u002FGenderSelection.pug";
pug_html = pug_html + "Выберите пол\u003C\u002Fp\u003E\u003C\u002Ftext\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"age\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "Возраст\u003C\u002Flabel\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "\u003Cinput type=\"range\" id=\"age\" name=\"age\" min=\"18\" max=\"100\" value=\"18\" oninput=\"this.nextElementSibling.value = this.value\"\u002F\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "\u003Coutput\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_html = pug_html + "18\u003C\u002Foutput\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["textButton"]('Зарегистрироваться');
;pug_debug_line = 20;pug_debug_filename = "src\u002Fcomponents\u002FRegistrationForm\u002FRegistrationForm.pug";
pug_mixins["footerText"]('registration');
}
else
if (typeOfPage === 'login') {
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (inputType=='password') {
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"password\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Пароль\u003C\u002Flabel\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cinput type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Введите пароль\u003C\u002Fp\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-password-error\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Clabel class=\".text-base\" for=\"login\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Логин\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cinput class=\".text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u002F\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
if (formType=='registration') {
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\" style=\"display:none;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FCustomInput\u002FCustomInput.pug";
pug_html = pug_html + "Ошибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + "\u003Ch1 class=\"description\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FHeader\u002FHeader.pug";
pug_html = pug_html + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + "\u003Cbutton type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
if (type=='login') {
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "У вас еще нет аккаунта? \u003C\u002Fspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Fsignup\" id=\"link\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "Зарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cdiv class=\"footer-text\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "У вас уже есть аккаунт? \u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "\u003Ca class=\".link\" href=\"\u002Flogin\" id=\"link\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FFooterText\u002FFooterText.pug";
pug_html = pug_html + "Войдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["header"]('С возвращением!');
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["customInput"]('login', 'login');
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["customInput"]('password', 'login');
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["textButton"]('Войти в аккаунт', 'login-button');
;pug_debug_line = 13;pug_debug_filename = "src\u002Fcomponents\u002FLoginForm\u002FLoginForm.pug";
pug_mixins["footerText"]('login');
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FBaseLogReg\u002FBaseLogReg.pug";
pug_mixins["imageSection"](pathToImage);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + "\u003Cbutton type=\"button\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002FTextButton\u002FTextButton.pug";
pug_html = pug_html + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_mixins["navbar"] = pug_interp = function(isAuth){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav__logo\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cimg src=\"..\u002F..\u002Fassets\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cdiv class=\"main-nav\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
if ((isAuth)) {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Ffeed\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Главная\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 14;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Flogin\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Логин\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cli class=\"nav-link\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fsignup\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Регистрация\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
if ((isAuth)) {
;pug_debug_line = 19;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "\u003Cbutton id=\"button-logout\" type=\"button\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fcomponents\u002FNavbar\u002FNavbar.pug";
pug_html = pug_html + "Выйти из аккаунта\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Fsignup\u002Fsignup.pug";
pug_mixins["navbar"](false);
;pug_debug_line = 5;pug_debug_filename = ".\u002Fsrc\u002Fpages\u002Fsignup\u002Fsignup.pug";
pug_mixins["base"]('signup');}.call(this,"pathToImage" in locals_for_with?locals_for_with.pathToImage:typeof pathToImage!=="undefined"?pathToImage:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}

/***/ }),

/***/ "./src/assets/fonts/Rubik-Regular.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Rubik-Regular.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Rubik-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/Rubik-Regular.woff2":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Rubik-Regular.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Rubik-Regular.woff2";

/***/ }),

/***/ "./src/assets/img/background.svg":
/*!***************************************!*\
  !*** ./src/assets/img/background.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.svg";

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
/******/ 			"bundle": 0
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
//# sourceMappingURL=bundlecbcf282fb66051b41220.js.map