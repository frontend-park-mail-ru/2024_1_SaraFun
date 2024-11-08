/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./shared/assets/fonts/Rubik-Regular.woff */ "./src/shared/assets/fonts/Rubik-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./shared/assets/fonts/Rubik-Regular.woff2 */ "./src/shared/assets/fonts/Rubik-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./shared/assets/img/background.svg */ "./src/shared/assets/img/background.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
  gap: 10px;
  padding-bottom: 10px;
}
.tinder__buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.tinder__cards {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
}
.tinder.loaded {
  opacity: 1;
}

.input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px;
  border: 1px solid var(--grey1);
}

.error {
  font-size: 12px;
}

.password__wrapper {
  width: 100%;
  position: relative;
  gap: 10px;
}
.password__icon {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
}

.footer {
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.footer__text {
  color: var(--grey2);
}
.footer__link {
  color: var(--secondary);
  text-decoration: none;
}
.footer__link:hover {
  color: var(--success);
  text-decoration: underline;
}

.gender-selection {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  gap: 16px;
}

.radio-input {
  display: flex;
  gap: 4px;
  cursor: pointer;
}
.radio-input label {
  cursor: pointer;
}
.radio-input__radio {
  appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  border: 2px solid var(--secondary);
  border-radius: 50%;
  position: relative;
  outline: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.radio-input__radio:checked::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--secondary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header__logo__img {
  width: 130px;
}
.header__description {
  align-self: center;
}

.image-section {
  flex: 1;
  background-color: var(--secondary);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.image-section__img {
  height: 100%;
  width: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;
}
.image-section__img_static {
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.tinder__card {
  padding: 17px;
  gap: 17px;
  min-width: 700px;
  width: 65vw;
  height: 75vh;
  background: var(--white1);
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  will-change: transform;
  transition: all 0.6s ease-in-out;
  cursor: grab;
  display: flex;
  user-select: none;
  opacity: 1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}
.tinder__card.moving {
  transition: none;
  cursor: grabbing;
}

.button_text {
  width: 100%;
  border-radius: 6px;
  padding: 12px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: var(--nav-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white1);
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0 10%;
}
.navbar__logo {
  height: 100%;
  display: flex;
}
.navbar__logo__img {
  height: 100%;
}
.navbar__list__ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
.navbar__link {
  padding: 12px 18px;
  text-decoration: none;
  color: var(--black1);
}
.navbar__link:hover {
  background: var(--success);
  color: var(--white1);
  border-radius: 10px;
}
.navbar__link--active {
  background: var(--secondary);
  color: var(--white1);
  border-radius: 10px;
}
.navbar__button {
  width: 180px;
  border-radius: 10px;
  box-sizing: border-box;
}

.range-input {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: var(--grey1);
  outline: none;
}
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--secondary);
  border-radius: 50%;
  cursor: pointer;
}
.range-input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: var(--secondary);
  border-radius: 50%;
  cursor: pointer;
}

output {
  font-size: 16px;
}

.matches {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 300px));
  gap: 20px;
  height: 92vh;
  padding: 25px;
  box-sizing: border-box;
}

@media (max-width: 700px) {
  .matches {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 250px));
    gap: 20px;
    height: 92vh;
    padding: 25px;
    box-sizing: border-box;
  }
}
.match-card {
  background-color: var(--white1);
  border-radius: 25px;
  display: flex;
  padding: 15px;
  gap: 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  aspect-ratio: 3/4;
}
.match-card__image-section {
  height: 90%;
}
.match-card__title {
  align-self: center;
}

.message-form {
  flex-direction: column;
}

.carousel {
  display: flex;
  height: 100%;
  overflow-x: hidden;
  width: 100%;
}
.carousel__button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: none;
  position: absolute;
}
.carousel__button_left {
  left: 5px;
}
.carousel__button_right {
  right: 5px;
}

.image-section:hover .carousel__button {
  display: block;
}

.user-avatar {
  position: relative;
  display: flex;
}
.user-avatar__image-wrapper {
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  width: 40px;
  height: 40px;
}
.user-avatar__image-wrapper img {
  width: 40px;
  height: 40px;
}
.user-avatar__menu {
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: none;
}
.user-avatar__menu.is-active {
  display: block;
}
.user-avatar__menu__logout-button {
  padding: 10px 15px;
  border: none;
  background-color: #f44336;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}
.user-avatar__menu__logout-button:hover {
  background-color: #d32f2f;
}

@font-face {
  font-family: "Rubik";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
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

.root {
  display: flex;
  box-sizing: border-box;
}

body {
  font-family: "Rubik";
  background-color: var(--primary);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: center;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--nav-width);
  box-sizing: border-box;
}

h1 {
  line-height: normal;
  letter-spacing: 0;
  font-weight: 700;
}

h2 {
  line-height: normal;
  letter-spacing: 0;
  font-weight: 600;
}

h3 {
  line-height: normal;
  letter-spacing: 0;
  font-weight: 500;
}

.text-base {
  line-height: normal;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 16px;
}

.text-link,
.text-base-medium {
  filter: blur(1rem);
  line-height: normal;
  letter-spacing: 0;
}

.text-base-medium {
  font-weight: 500;
}

.img {
  user-select: none;
  pointer-events: none;
}

.button {
  background-color: var(--secondary);
  border: none;
  cursor: pointer;
  color: var(--white1);
}
.button:hover {
  background-color: var(--success);
}

.button_light {
  background-color: var(--primary);
  border: none;
  cursor: pointer;
}
.button_light:hover {
  background-color: var(--white1);
}

.form {
  background-color: var(--white1);
  border-radius: 25px;
  width: 70vw;
  min-width: 700px;
  height: auto;
  min-height: 85vh;
  display: flex;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;
}

.wrapper {
  max-height: 80vh;
}

.form-section {
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
}

.label {
  display: block;
  color: var(--black1);
}

.error {
  color: var(--error);
  display: none;
}

.button_img {
  border-radius: 50%;
  line-height: 60px;
  width: 80px;
  height: 80px;
  border: none;
  display: inline-block;
  margin: 0 8px;
  position: relative;
}
.button_img__img {
  width: 75%;
  height: 75%;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  transition: transform 0.1s ease-in-out;
}
.button_img:hover .button_img__img {
  transform: translate(-50%, -50%) scale(1.1);
}`, "",{"version":3,"sources":["webpack://./src/pages/feed/ui/feed.scss","webpack://./src/index.scss","webpack://./src/shared/components/CustomInput/customInput.scss","webpack://./src/shared/components/FooterText/footerText.scss","webpack://./src/shared/components/GenderSelection/genderSelection.scss","webpack://./src/shared/components/Header/header.scss","webpack://./src/shared/components/ImageSection/imageSection.scss","webpack://./src/widgets/SwipeCard/swipeCard.scss","webpack://./src/shared/components/TextButton/textButton.scss","webpack://./src/widgets/Navbar/ui/navbar.scss","webpack://./src/widgets/RegistrationForm/registrationForm.scss","webpack://./src/pages/matches/ui/matches.scss","webpack://./src/widgets/MatchCard/matchCard.scss","webpack://./src/pages/matches/ui/messageForm.scss","webpack://./src/shared/components/Carousel/Carousel.scss","webpack://./src/shared/components/Avatar/avatar.scss"],"names":[],"mappings":"AAAA;;;EAGI,sBAAA;EACA,UAAA;EACA,SAAA;ACCJ;;ADEA;EACI,YAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,SAAA;EACA,oBAAA;ACCJ;ADCI;EACI,aAAA;EACA,uBAAA;EACA,SAAA;ACCR;ADEI;EACI,YAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,UAAA;ACAR;ADGI;EACI,UAAA;ACDR;;AClCA;EACC,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;ADqCD;;AClCA;EACC,eAAA;ADqCD;;ACjCC;EACC,WAAA;EACA,kBAAA;EACA,SAAA;ADoCF;ACjCC;EACC,eAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;ADmCF;;AE7DA;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;AFgEJ;AE9DI;EACI,mBAAA;AFgER;AE7DI;EACI,uBAAA;EACA,qBAAA;AF+DR;AE7DQ;EACI,qBAAA;EACA,0BAAA;AF+DZ;;AG/EA;EACI,WAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AHkFJ;;AG/EA;EACI,aAAA;EACA,QAAA;EACA,eAAA;AHkFJ;AGjFI;EACI,eAAA;AHmFR;AGhFI;EACI,gBAAA;EACA,wBAAA;EACA,sBAAA;EACA,kCAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AHkFR;AGhFQ;EACI,WAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AHkFZ;;AIrHQ;EACI,YAAA;AJwHZ;AIpHI;EACI,kBAAA;AJsHR;;AK9HA;EACI,OAAA;EACA,kCAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;ALiIJ;AK/HI;EACI,YAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;ALiIR;AK/HQ;EACI,YAAA;EACA,iBAAA;EACA,uBAAA;ALiIZ;;AMtJA;EACI,aAAA;EACA,SAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,UAAA;EACA,2CAAA;ANyJJ;AMvJI;EACI,gBAAA;EACA,gBAAA;ANyJR;;AO7KA;EACI,WAAA;EACA,kBAAA;EACA,aAAA;APgLJ;;AQnLA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,wBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,yBAAA;EACA,sBAAA;EACA,2CAAA;EACA,cAAA;ARsLJ;AQpLI;EACI,YAAA;EACA,aAAA;ARsLR;AQpLQ;EACI,YAAA;ARsLZ;AQjLQ;EACI,gBAAA;EACA,aAAA;EACA,SAAA;ARmLZ;AQ/KI;EACI,kBAAA;EACA,qBAAA;EACA,oBAAA;ARiLR;AQ/KQ;EACI,0BAAA;EACA,oBAAA;EACA,mBAAA;ARiLZ;AQ9KQ;EACI,4BAAA;EACA,oBAAA;EACA,mBAAA;ARgLZ;AQ5KI;EACI,YAAA;EACA,mBAAA;EACA,sBAAA;AR8KR;;ASnOA;EACI,wBAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,wBAAA;EACA,aAAA;ATsOJ;ASpOI;EACI,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,kBAAA;EACA,eAAA;ATsOR;ASnOI;EACI,WAAA;EACA,YAAA;EACA,4BAAA;EACA,kBAAA;EACA,eAAA;ATqOR;;ASjOA;EACI,eAAA;AToOJ;;AUhQA;EACI,aAAA;EACA,sDAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AVmQJ;;AUhQA;EACI;IACI,aAAA;IACA,sDAAA;IACA,SAAA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;EVmQN;AACF;AWpRA;EACI,+BAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,SAAA;EACA,sBAAA;EACA,2CAAA;EACA,sBAAA;EACA,iBAAA;AXsRJ;AWpRI;EACI,WAAA;AXsRR;AWnRI;EACI,kBAAA;AXqRR;;AYrSA;EACI,sBAAA;AZwSJ;;AazSA;EACI,aAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;Ab4SJ;Aa1SI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,2CAAA;EACA,aAAA;EACA,kBAAA;Ab4SR;Aa1SQ;EACI,SAAA;Ab4SZ;AazSQ;EACI,UAAA;Ab2SZ;;AatSA;EACI,cAAA;AbySJ;;AclUA;EACI,kBAAA;EACA,aAAA;AdqUJ;AcnUI;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;AdqUN;AcnUM;EACE,WAAA;EACA,YAAA;AdqUR;AcjUI;EACI,kBAAA;EACA,SAAA;EACA,QAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;EACA,aAAA;AdmUR;AcjUQ;EACE,cAAA;AdmUV;AchUQ;EACE,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AdkUV;AchUY;EACI,yBAAA;AdkUhB;;AAxVA;EACI,oBAAA;EACA,oHAAA;AA2VJ;AAvVA;EACI,oBAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;AAyVJ;;AAtVA;EACI,aAAA;EACA,sBAAA;AAyVJ;;AAtVA;EACI,oBAAA;EACA,gCAAA;EACA,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;EACA,sBAAA;AAyVJ;;AAtVA;EACI,mBAAA;EACA,iBAAA;EACA,gBAAA;AAyVJ;;AAtVA;EACI,mBAAA;EACA,iBAAA;EACA,gBAAA;AAyVJ;;AAtVA;EACI,mBAAA;EACA,iBAAA;EACA,gBAAA;AAyVJ;;AAtVA;EACI,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AAyVJ;;AAtVA;;EAEI,kBAAA;EACA,mBAAA;EACA,iBAAA;AAyVJ;;AAtVA;EACI,gBAAA;AAyVJ;;AAtVA;EACI,iBAAA;EACA,oBAAA;AAyVJ;;AAtVA;EACI,kCAAA;EACA,YAAA;EACA,eAAA;EACA,oBAAA;AAyVJ;AAvVI;EACI,gCAAA;AAyVR;;AArVA;EACI,gCAAA;EACA,YAAA;EACA,eAAA;AAwVJ;AAtVI;EACI,+BAAA;AAwVR;;AApVA;EACI,+BAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,yCAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;AAuVJ;;AApVA;EACI,gBAAA;AAuVJ;;AApVA;EACI,OAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,SAAA;AAuVJ;;AApVA;EACI,cAAA;EACA,oBAAA;AAuVJ;;AApVA;EACI,mBAAA;EACA,aAAA;AAuVJ;;AApVA;EACI,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,qBAAA;EACA,aAAA;EACA,kBAAA;AAuVJ;AArVI;EACI,UAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,wBAAA;EACA,sCAAA;AAuVR;AApVI;EACI,2CAAA;AAsVR","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/profile/ui/profile.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/profile/ui/profile.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.profile {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 500px;
  margin-bottom: 100px;
}
.profile .profile-card {
  padding: 20px 40px 40px 40px;
  width: 65vw;
  margin-top: 12px;
  position: sticky;
  background: var(--white1);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.profile .profile-card .settings-button {
  background-color: var(--secondary);
  color: white;
}
.profile .profile-card .settings-button:hover {
  background-color: var(--success);
}
.profile .profile-card .info {
  padding-top: 20px;
  display: flex;
  gap: 50px;
  width: 100%;
}
.profile .profile-card .info-avatar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
.profile .profile-card .info-avatar__image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
.profile .profile-card .info-avatar__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid var(--primary);
}
.profile .profile-card h1 {
  align-self: flex-start;
  padding-bottom: 20px;
}
.profile .profile-card h3 {
  align-self: flex-start;
  padding-top: 40px;
  padding-bottom: 4px;
}
.profile .profile-card .image-section-profile {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.profile .profile-card .image-section-profile .image-container {
  display: flex;
  min-width: 200px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid grey;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}
.profile .profile-card .image-section-profile .image-container img {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  object-fit: contain;
}
.profile .profile-card .image-section-profile .image-container .delete-button {
  padding: 4px;
  background-color: #d30e0e;
  color: white;
  border: none;
  width: 26px;
  height: 26px;
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  cursor: pointer;
}
.profile .profile-card .image-section-profile .image-container .delete-button:hover {
  background-color: #c33f3f;
}
.profile .profile-card .image-section-profile .image-container .delete-button svg {
  width: 18px;
  height: 18px;
  stroke: rgb(255, 255, 255);
}
.profile .profile-card .upload {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed grey;
  border-radius: 10px;
  width: 200px;
  height: 200px;
}
.profile .profile-card .upload-button {
  margin-top: 10px;
  display: fix;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.profile .profile-card .upload-button:hover {
  background-color: #0056b3;
}
.profile .profile-card .info-section {
  text-align: left;
  width: 100%;
}
.profile .profile-card .info-section p {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}
.profile .profile-card .info-section p:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 5px;
  height: 5px;
  background-color: #007BFF;
  border-radius: 50%;
  transform: translateY(-50%);
}

.settings-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}
.settings-form label {
  margin-bottom: 10px;
  width: 100%;
}
.settings-form label input,
.settings-form label select,
.settings-form label textarea {
  margin-left: 0;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  resize: none;
}
.settings-form label textarea {
  min-height: 50px;
  max-height: 200px;
  overflow-y: hidden;
}

.button-wrapper {
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;
}
.button-wrapper button {
  padding: 10px 20px;
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 5px;
}
.button-wrapper button.settings-button {
  background-color: rgb(204, 204, 204);
  color: white;
  transition: background-color 0.3s;
}
.button-wrapper button.settings-button:hover {
  background-color: #ff9696;
}
.button-wrapper button.save-settings {
  background-color: var(--secondary);
  color: white;
}
.button-wrapper button.save-settings:hover {
  background-color: var(--success);
}
.button-wrapper button.cancel-settings {
  background-color: rgb(180, 179, 179);
  color: rgb(89, 88, 88);
}
.button-wrapper button.cancel-settings:hover {
  background-color: rgb(249, 113, 113);
}`, "",{"version":3,"sources":["webpack://./src/pages/profile/ui/profile.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,sBAAA;EACA,iBAAA;EACA,oBAAA;AACJ;AACI;EACI,4BAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,yBAAA;EACA,mBAAA;EACA,yCAAA;EACA,aAAA;EACA,sBAAA;AACR;AAEQ;EACI,kCAAA;EACA,YAAA;AAAZ;AAEY;EACI,gCAAA;AAAhB;AAKQ;EACI,iBAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;AAHZ;AAIY;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;AAFhB;AAGgB;EACI,YAAA;EACA,aAAA;EACA,iBAAA;AADpB;AAKY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,gCAAA;AAHhB;AAUQ;EACI,sBAAA;EACA,oBAAA;AARZ;AAUQ;EACI,sBAAA;EACA,iBAAA;EAEA,mBAAA;AATZ;AAaQ;EAEI,aAAA;EACA,eAAA;EACA,SAAA;AAZZ;AAcY;EACI,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EAEA,sBAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;AAbhB;AAgBgB;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;AAdpB;AAkBgB;EACI,YAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;AAhBpB;AAkBoB;EACI,yBAAA;AAhBxB;AAkBoB;EACI,WAAA;EACA,YAAA;EACA,0BAAA;AAhBxB;AAsBQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;AApBZ;AAuBQ;EACI,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AArBZ;AAuBY;EACI,yBAAA;AArBhB;AA0BQ;EACI,gBAAA;EACA,WAAA;AAxBZ;AA0BY;EACI,cAAA;EACA,kBAAA;EACA,kBAAA;AAxBhB;AA0BgB;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,2BAAA;AAxBpB;;AA8BA;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;AA3BJ;AA6BI;EACI,mBAAA;EACA,WAAA;AA3BR;AA6BQ;;;EAGI,cAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;AA3BZ;AA8BQ;EACI,gBAAA;EACA,iBAAA;EACA,kBAAA;AA5BZ;;AAiCA;EACI,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;AA9BJ;AAgCI;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;AA9BR;AAgCQ;EACE,oCAAA;EACA,YAAA;EACA,iCAAA;AA9BV;AAgCU;EACE,yBAAA;AA9BZ;AAkCQ;EACE,kCAAA;EACA,YAAA;AAhCV;AAiCU;EACE,gCAAA;AA/BZ;AAkCQ;EACI,oCAAA;EACA,sBAAA;AAhCZ;AAkCY;EACI,oCAAA;AAhChB","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/pages/feed/ui/feed.pug":
/*!************************************!*\
  !*** ./src/pages/feed/ui/feed.pug ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (users) {pug_mixins["carousel"] = pug_interp = function(images){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"carousel\"\u003E";
// iterate images
;(function(){
  var $$obj = images;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var image = $$obj[index];
pug_html = pug_html + "\u003Cimg" + (" class=\"img image-section__img\""+pug.attr("src", `http://5.188.140.7/${image.link.substring(image.link.lastIndexOf('/') + 1)}`, true, true)+" alt=\"Image #{index + 1}\" draggable=\"false\"") + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var image = $$obj[index];
pug_html = pug_html + "\u003Cimg" + (" class=\"img image-section__img\""+pug.attr("src", `http://5.188.140.7/${image.link.substring(image.link.lastIndexOf('/') + 1)}`, true, true)+" alt=\"Image #{index + 1}\" draggable=\"false\"") + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((images.length > 1)) {
pug_html = pug_html + "\u003Cbutton class=\"button_light carousel__button carousel__button_left\"\u003E\u003Cimg class=\"img button_img__img\" src=\".\u002Fimg\u002Fleft.svg\" alt=\"X\"\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"button_light carousel__button carousel__button_right\"\u003E\u003Cimg class=\"img button_img__img\" src=\".\u002Fimg\u002Fright.svg\" alt=\"X\"\u003E\u003C\u002Fbutton\u003E";
}
};
pug_mixins["card"] = pug_interp = function(user){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"tinder__card\"\u003E\u003Cdiv class=\"image-section\"\u003E";
if ((user.images != null && user.images.length > 0)) {
pug_mixins["carousel"](user.images);
}
else {
pug_html = pug_html + "\u003Cimg class=\"img image-section__img_static\" src=\".\u002Fimg\u002Fimage.svg\" alt=\"Image\" draggable=\"false\"\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-section\"\u003E";
if ((user.profile.first_name == "-" || user.profile.first_name == null)) {
pug_html = pug_html + "\u003Ch1\u003E" + (null == (pug_interp = user.username) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
}
else {
pug_html = pug_html + "\u003Ch1\u003E" + (null == (pug_interp = user.profile.first_name) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
}
if ((user.profile.gender == "male")) {
pug_html = pug_html + "\u003Ch3\u003EПол: мужской\u003C\u002Fh3\u003E";
}
else {
pug_html = pug_html + "\u003Ch3\u003EПол: женский\u003C\u002Fh3\u003E";
}
pug_html = pug_html + "\u003Ch3\u003EВозраст: " + (null == (pug_interp = user.profile.age) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
if ((user.profile.target != "-" && user.profile.target != null)) {
pug_html = pug_html + "\u003Ch3\u003EЦель знакомства: " + (null == (pug_interp = user.profile.target) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
}
if ((user.profile.about != "-" && user.profile.about != null)) {
pug_html = pug_html + "\u003Ch3\u003EО себе: " + (null == (pug_interp = user.profile.about) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};




pug_mixins["navbar"] = pug_interp = function(isAuth, activeNavbarItem){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"navbar\"\u003E\u003Cdiv class=\"navbar__logo\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Ffeed\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Flogin\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"navbar__list\"\u003E\u003Cul class=\"navbar__list__ul\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'feed' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Ffeed\"") + "\u003EГлавная\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'matches' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fmatches\"") + "\u003EМэтчи\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'profile' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fprofile\"") + "\u003EПрофиль\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E\u003Ca class=\"navbar__link\" href=\"\u002Flogin\"\u003EВойти\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"navbar__link navbar__link--active\" href=\"\u002Fsignup\"\u003EЗарегистрироваться\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
if ((isAuth)) {
pug_html = pug_html + (null == (pug_interp = (__webpack_require__(/*! ../../../shared/components/Avatar/Avatar.pug */ "./src/shared/components/Avatar/Avatar.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cbutton class=\"text-base button button_text navbar__button\" id=\"button-logout\" type=\"button\"\u003EВыйти из аккаунта\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["navbar"](true, 'feed');
if ((users != null)) {
pug_html = pug_html + "\u003Cdiv class=\"tinder\"\u003E\u003Cdiv class=\"tinder__cards\"\u003E";
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var user = $$obj[pug_index1];
pug_mixins["card"](user);
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var user = $$obj[pug_index1];
pug_mixins["card"](user);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"tinder__buttons\"\u003E\u003Cbutton class=\"button button_img\" id=\"nope\"\u003E\u003Cimg class=\"img button_img__img\" src=\".\u002Fimg\u002FX.svg\" alt=\"X\"\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"button button_img\" id=\"love\"\u003E\u003Cimg class=\"img button_img__img\" src=\".\u002Fimg\u002FHeart.svg\" alt=\"Heart\"\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"form message-form\"\u003E\u003Ch1\u003EПока что не появилось новых анкет\u003C\u002Fh1\u003E\u003Ch3\u003EПодсказка: заглядывайте почаще, чтобы не пропустить того самого человека!\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
}}.call(this,"users" in locals_for_with?locals_for_with.users:typeof users!=="undefined"?users:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pages/login/ui/login.pug":
/*!**************************************!*\
  !*** ./src/pages/login/ui/login.pug ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["imageSection"] = pug_interp = function(path){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"image-section\"\u003E\u003Cimg" + (" class=\"img image-section__img_static wrapper\""+pug.attr("src", path, true, true)+" alt=\"Image\"") + "\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["base"] = pug_interp = function(typeOfPage){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"form\"\u003E\u003Cdiv class=\"form-section\"\u003E";
if (typeOfPage === 'signup') {
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (inputType=='password') {
pug_html = pug_html + "\u003Clabel class=\".text-base label\" for=\"password\"\u003EПароль\u003C\u002Flabel\u003E\u003Cdiv class=\"password__wrapper\"\u003E\u003Cinput class=\"input\" type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u003E\u003Cimg class=\"password__icon\" src=\".\u002Fimg\u002Feye-x.svg\"\u003E\u003C\u002Fdiv\u003E";
if (formType=='registration') {
pug_html = pug_html + "\u003C!--p.error#password-error(style='display:none') Пароль должен соблюдать следующие требования:--\u003E\u003Cp class=\"error\" id=\"password-error-1\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"password-error-2\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"password-error-3\" style=\"display:none\"\u003E\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003EОшибка: Введите пароль\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-password-error\"\u003EОшибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
pug_html = pug_html + "\u003Clabel class=\".text-base label\" for=\"login\"\u003EЛогин\u003C\u002Flabel\u003E\u003Cinput class=\"input .text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u003E";
if (formType=='registration') {
pug_html = pug_html + "\u003C!--p.error#login-error(style='display:none') Логин должен соблюдать следующие требования:--\u003E\u003Cp class=\"error\" id=\"login-error-1\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-2\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-3\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-4\" style=\"display:none\"\u003E\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003EОшибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header__logo\"\u003E\u003Cimg class=\"img header__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u003E\u003C\u002Fdiv\u003E\u003Ch1 class=\"header__description\"\u003E" + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"text-base button button_text\" type=\"button\"\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (type=='login') {
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cspan class=\"footer__text\"\u003EУ вас еще нет аккаунта?&nbsp;\u003C\u002Fspan\u003E\u003Ca class=\"footer__link .link\" href=\"\u002Fsignup\" id=\"link\"\u003EЗарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cspan class=\"footer__text\"\u003EУ вас уже есть аккаунт?&nbsp;\u003C\u002Fspan\u003E\u003Ca class=\"footer__link .link\" href=\"\u002Flogin\" id=\"link\"\u003EВойдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
pug_mixins["header"]('Добро пожаловать!');
pug_mixins["customInput"]('login', 'registration');
pug_mixins["customInput"]('password', 'registration');
pug_html = pug_html + (null == (pug_interp = (__webpack_require__(/*! ../../../shared/components/GenderSelection/GenderSelection.pug */ "./src/shared/components/GenderSelection/GenderSelection.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Clabel class=\".text-base\" for=\"age\"\u003EВозраст\u003C\u002Flabel\u003E\u003Cinput class=\"range-input\" type=\"range\" id=\"age\" name=\"age\" min=\"18\" max=\"100\" value=\"18\" oninput=\"this.nextElementSibling.value = this.value\"\u003E\u003Coutput\u003E18\u003C\u002Foutput\u003E";
pug_mixins["textButton"]('Зарегистрироваться');
pug_mixins["footerText"]('registration');
}
else
if (typeOfPage === 'login') {
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (inputType=='password') {
pug_html = pug_html + "\u003Clabel class=\".text-base label\" for=\"password\"\u003EПароль\u003C\u002Flabel\u003E\u003Cdiv class=\"password__wrapper\"\u003E\u003Cinput class=\"input\" type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u003E\u003Cimg class=\"password__icon\" src=\".\u002Fimg\u002Feye-x.svg\"\u003E\u003C\u002Fdiv\u003E";
if (formType=='registration') {
pug_html = pug_html + "\u003C!--p.error#password-error(style='display:none') Пароль должен соблюдать следующие требования:--\u003E\u003Cp class=\"error\" id=\"password-error-1\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"password-error-2\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"password-error-3\" style=\"display:none\"\u003E\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003EОшибка: Введите пароль\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-password-error\"\u003EОшибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
pug_html = pug_html + "\u003Clabel class=\".text-base label\" for=\"login\"\u003EЛогин\u003C\u002Flabel\u003E\u003Cinput class=\"input .text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u003E";
if (formType=='registration') {
pug_html = pug_html + "\u003C!--p.error#login-error(style='display:none') Логин должен соблюдать следующие требования:--\u003E\u003Cp class=\"error\" id=\"login-error-1\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-2\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-3\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-4\" style=\"display:none\"\u003E\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003EОшибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header__logo\"\u003E\u003Cimg class=\"img header__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u003E\u003C\u002Fdiv\u003E\u003Ch1 class=\"header__description\"\u003E" + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"text-base button button_text\" type=\"button\"\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (type=='login') {
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cspan class=\"footer__text\"\u003EУ вас еще нет аккаунта?&nbsp;\u003C\u002Fspan\u003E\u003Ca class=\"footer__link .link\" href=\"\u002Fsignup\" id=\"link\"\u003EЗарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cspan class=\"footer__text\"\u003EУ вас уже есть аккаунт?&nbsp;\u003C\u002Fspan\u003E\u003Ca class=\"footer__link .link\" href=\"\u002Flogin\" id=\"link\"\u003EВойдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
pug_mixins["header"]('С возвращением!');
pug_mixins["customInput"]('login', 'login');
pug_mixins["customInput"]('password', 'login');
pug_mixins["textButton"]('Войти в аккаунт', 'login-button');
pug_mixins["footerText"]('login');
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
pug_mixins["imageSection"]('./img/image.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"text-base button button_text\" type=\"button\"\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
pug_mixins["navbar"] = pug_interp = function(isAuth, activeNavbarItem){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"navbar\"\u003E\u003Cdiv class=\"navbar__logo\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Ffeed\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Flogin\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"navbar__list\"\u003E\u003Cul class=\"navbar__list__ul\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'feed' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Ffeed\"") + "\u003EГлавная\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'matches' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fmatches\"") + "\u003EМэтчи\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'profile' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fprofile\"") + "\u003EПрофиль\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E\u003Ca class=\"navbar__link\" href=\"\u002Flogin\"\u003EВойти\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"navbar__link navbar__link--active\" href=\"\u002Fsignup\"\u003EЗарегистрироваться\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
if ((isAuth)) {
pug_html = pug_html + (null == (pug_interp = (__webpack_require__(/*! ../../../shared/components/Avatar/Avatar.pug */ "./src/shared/components/Avatar/Avatar.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cbutton class=\"text-base button button_text navbar__button\" id=\"button-logout\" type=\"button\"\u003EВыйти из аккаунта\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["navbar"](false);
pug_mixins["base"]('login');;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pages/matches/ui/matches.pug":
/*!******************************************!*\
  !*** ./src/pages/matches/ui/matches.pug ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (users) {



pug_mixins["navbar"] = pug_interp = function(isAuth, activeNavbarItem){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"navbar\"\u003E\u003Cdiv class=\"navbar__logo\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Ffeed\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Flogin\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"navbar__list\"\u003E\u003Cul class=\"navbar__list__ul\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'feed' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Ffeed\"") + "\u003EГлавная\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'matches' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fmatches\"") + "\u003EМэтчи\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'profile' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fprofile\"") + "\u003EПрофиль\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E\u003Ca class=\"navbar__link\" href=\"\u002Flogin\"\u003EВойти\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"navbar__link navbar__link--active\" href=\"\u002Fsignup\"\u003EЗарегистрироваться\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
if ((isAuth)) {
pug_html = pug_html + (null == (pug_interp = (__webpack_require__(/*! ../../../shared/components/Avatar/Avatar.pug */ "./src/shared/components/Avatar/Avatar.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cbutton class=\"text-base button button_text navbar__button\" id=\"button-logout\" type=\"button\"\u003EВыйти из аккаунта\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["matchCard"] = pug_interp = function(username, age, images){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"match-card\"\u003E\u003Cdiv class=\"image-section match-card__image-section\"\u003E";
if ((images != null && images.length > 0)) {
pug_html = pug_html + "\u003Cimg" + (" class=\"img image-section__img\""+pug.attr("src", `http://5.188.140.7/${images[0].link.substring(images[0].link.lastIndexOf('/') + 1)}`, true, true)+" alt=\"Image\" draggable=\"false\"") + "\u003E";
}
else {
pug_html = pug_html + "\u003Cimg class=\"img image-section__img_static\" src=\".\u002Fimg\u002Fimage.svg\" alt=\"Image\" draggable=\"false\"\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Ch3 class=\"match-card__title\"\u003E" + (null == (pug_interp = username) ? "" : pug_interp) + ", " + (null == (pug_interp = age) ? "" : pug_interp) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["navbar"](true, 'matches');
if ((users != null && users.length > 0)) {
pug_html = pug_html + "\u003Cdiv class=\"matches\"\u003E";
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var user = $$obj[pug_index0];
pug_mixins["matchCard"](user.username, user.profile.age, user.images);
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var user = $$obj[pug_index0];
pug_mixins["matchCard"](user.username, user.profile.age, user.images);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"form message-form\"\u003E\u003Ch1\u003EПока что у вас нет мэтчей\u003C\u002Fh1\u003E\u003Ch3\u003EПодсказка: чем больше лайков Вы поставите другим пользователям, тем больше вероятность мэтча!\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
}}.call(this,"users" in locals_for_with?locals_for_with.users:typeof users!=="undefined"?users:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pages/profile/ui/profile.pug":
/*!******************************************!*\
  !*** ./src/pages/profile/ui/profile.pug ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (About, Age, FirstName, Gender, LastName, Target, imagesURLs, isEditing, username) {



pug_mixins["navbar"] = pug_interp = function(isAuth, activeNavbarItem){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"navbar\"\u003E\u003Cdiv class=\"navbar__logo\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Ffeed\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Flogin\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"navbar__list\"\u003E\u003Cul class=\"navbar__list__ul\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'feed' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Ffeed\"") + "\u003EГлавная\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'matches' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fmatches\"") + "\u003EМэтчи\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'profile' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fprofile\"") + "\u003EПрофиль\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E\u003Ca class=\"navbar__link\" href=\"\u002Flogin\"\u003EВойти\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"navbar__link navbar__link--active\" href=\"\u002Fsignup\"\u003EЗарегистрироваться\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
if ((isAuth)) {
pug_html = pug_html + (null == (pug_interp = (__webpack_require__(/*! ../../../shared/components/Avatar/Avatar.pug */ "./src/shared/components/Avatar/Avatar.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cbutton class=\"text-base button button_text navbar__button\" id=\"button-logout\" type=\"button\"\u003EВыйти из аккаунта\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["trash"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FF6275FF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-trash\"\u003E\u003Cpath d=\"M3 6h18\"\u002F\u003E\u003Cpath d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"\u002F\u003E\u003Cpath d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"\u002F\u003E\u003C\u002Fsvg\u003E";
};
pug_html = pug_html + "\u003Cdiv class=\"profile\"\u003E\u003Cdiv class=\"profile-card\"\u003E";
pug_mixins["navbar"](true, 'profile');
if (isEditing) {
pug_html = pug_html + "\u003Ch1\u003EРедактирование профиля\u003C\u002Fh1\u003E\u003Cdiv class=\"settings-form\"\u003E\u003Clabel\u003EИмя:\u003Cinput" + (" type=\"text\" id=\"FirstName\" maxlength=\"50\""+pug.attr("value", FirstName, true, true)+pug.attr("required", true, true, true)) + "\u003E\u003C\u002Flabel\u003E\u003Clabel\u003EФамилия:\u003Cinput" + (" type=\"text\" id=\"LastName\" maxlength=\"50\""+pug.attr("value", LastName, true, true)+pug.attr("required", true, true, true)) + "\u003E\u003C\u002Flabel\u003E\u003Clabel\u003EПол:\u003Cselect id=\"Gender\" required\u003E\u003Coption" + (" value=\"male\""+pug.attr("selected", Gender === 'male', true, true)) + "\u003EМужской\u003C\u002Foption\u003E\u003Coption" + (" value=\"female\""+pug.attr("selected", Gender === 'female', true, true)) + "\u003EЖенский\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Flabel\u003E\u003Clabel\u003EВозраст:\u003Cinput" + (" class=\"range-input\""+" type=\"range\" id=\"Age\" name=\"Age\" min=\"18\" max=\"100\""+pug.attr("value", Age, true, true)) + "\u003E\u003Coutput\u003E18\u003C\u002Foutput\u003E\u003C\u002Flabel\u003E\u003Clabel\u003EЦель:\u003Cinput" + (" type=\"string\" id=\"Target\""+pug.attr("value", Target, true, true)+" maxlength=\"50\"") + "\u003E\u003C\u002Flabel\u003E\u003Clabel\u003EО себе:\u003Ctextarea id=\"About\" rows=\"1\" maxlength=\"200\"\u003E" + (pug.escape(null == (pug_interp = About) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E \u003Ch3\u003EФотографии\u003C\u002Fh3\u003E\u003Cdiv class=\"image-section-profile\"\u003E";
// iterate imagesURLs
;(function(){
  var $$obj = imagesURLs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var image = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"image-container\"\u003E\u003Cimg" + (pug.attr("src", image, true, true)+" alt=\"Фотография в профиле\"") + "\u003E\u003Cdiv class=\"delete-button\"\u003E";
pug_mixins["trash"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var image = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"image-container\"\u003E\u003Cimg" + (pug.attr("src", image, true, true)+" alt=\"Фотография в профиле\"") + "\u003E\u003Cdiv class=\"delete-button\"\u003E";
pug_mixins["trash"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cdiv class=\"upload\"\u003E\u003Cbutton class=\"upload-button\"\u003EДобавить фото +\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"button-wrapper\"\u003E\u003Cbutton class=\"save-settings\"\u003EСохранить\u003C\u002Fbutton\u003E\u003Cbutton class=\"cancel-settings\"\u003EОтмена\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Ch1\u003EПрофиль\u003C\u002Fh1\u003E\u003Cdiv class=\"info\"\u003E\u003Cdiv class=\"info-avatar\"\u003E\u003Cdiv class=\"info-avatar__wrapper\"\u003E";
if (imagesURLs.length == 0) {
pug_html = pug_html + "\u003Cimg class=\"info-avatar__image\" src=\".\u002Fimg\u002Fuser.svg\"\u003E";
}
else {
pug_html = pug_html + "\u003Cimg" + (" class=\"info-avatar__image\""+pug.attr("src", imagesURLs[0], true, true)) + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E" + (pug.escape(null == (pug_interp = username) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info-section\"\u003E\u003Cp\u003EИмя: " + (pug.escape(null == (pug_interp = FirstName) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp\u003EФамилия: " + (pug.escape(null == (pug_interp = LastName) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp\u003EПол: " + (pug.escape(null == (pug_interp = Gender === 'male' ? 'Мужской' : 'Женский') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp\u003EВозраст: " + (pug.escape(null == (pug_interp = Age) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp\u003EЦель: " + (pug.escape(null == (pug_interp = Target) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp\u003EО себе: " + (pug.escape(null == (pug_interp = About) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Ch3\u003EФотографии\u003C\u002Fh3\u003E\u003Cdiv class=\"image-section-profile\"\u003E";
// iterate imagesURLs
;(function(){
  var $$obj = imagesURLs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var image = $$obj[pug_index1];
pug_html = pug_html + "\u003Cdiv class=\"image-container\"\u003E\u003Cimg" + (pug.attr("src", image, true, true)+" alt=\"Фотография в профиле\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var image = $$obj[pug_index1];
pug_html = pug_html + "\u003Cdiv class=\"image-container\"\u003E\u003Cimg" + (pug.attr("src", image, true, true)+" alt=\"Фотография в профиле\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"button-wrapper\"\u003E\u003Cbutton class=\"settings-button\"\u003EНастройки\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"About" in locals_for_with?locals_for_with.About:typeof About!=="undefined"?About:undefined,"Age" in locals_for_with?locals_for_with.Age:typeof Age!=="undefined"?Age:undefined,"FirstName" in locals_for_with?locals_for_with.FirstName:typeof FirstName!=="undefined"?FirstName:undefined,"Gender" in locals_for_with?locals_for_with.Gender:typeof Gender!=="undefined"?Gender:undefined,"LastName" in locals_for_with?locals_for_with.LastName:typeof LastName!=="undefined"?LastName:undefined,"Target" in locals_for_with?locals_for_with.Target:typeof Target!=="undefined"?Target:undefined,"imagesURLs" in locals_for_with?locals_for_with.imagesURLs:typeof imagesURLs!=="undefined"?imagesURLs:undefined,"isEditing" in locals_for_with?locals_for_with.isEditing:typeof isEditing!=="undefined"?isEditing:undefined,"username" in locals_for_with?locals_for_with.username:typeof username!=="undefined"?username:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pages/signup/ui/signup.pug":
/*!****************************************!*\
  !*** ./src/pages/signup/ui/signup.pug ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["imageSection"] = pug_interp = function(path){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"image-section\"\u003E\u003Cimg" + (" class=\"img image-section__img_static wrapper\""+pug.attr("src", path, true, true)+" alt=\"Image\"") + "\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["base"] = pug_interp = function(typeOfPage){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"form\"\u003E\u003Cdiv class=\"form-section\"\u003E";
if (typeOfPage === 'signup') {
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (inputType=='password') {
pug_html = pug_html + "\u003Clabel class=\".text-base label\" for=\"password\"\u003EПароль\u003C\u002Flabel\u003E\u003Cdiv class=\"password__wrapper\"\u003E\u003Cinput class=\"input\" type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u003E\u003Cimg class=\"password__icon\" src=\".\u002Fimg\u002Feye-x.svg\"\u003E\u003C\u002Fdiv\u003E";
if (formType=='registration') {
pug_html = pug_html + "\u003C!--p.error#password-error(style='display:none') Пароль должен соблюдать следующие требования:--\u003E\u003Cp class=\"error\" id=\"password-error-1\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"password-error-2\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"password-error-3\" style=\"display:none\"\u003E\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003EОшибка: Введите пароль\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-password-error\"\u003EОшибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
pug_html = pug_html + "\u003Clabel class=\".text-base label\" for=\"login\"\u003EЛогин\u003C\u002Flabel\u003E\u003Cinput class=\"input .text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u003E";
if (formType=='registration') {
pug_html = pug_html + "\u003C!--p.error#login-error(style='display:none') Логин должен соблюдать следующие требования:--\u003E\u003Cp class=\"error\" id=\"login-error-1\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-2\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-3\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-4\" style=\"display:none\"\u003E\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003EОшибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header__logo\"\u003E\u003Cimg class=\"img header__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u003E\u003C\u002Fdiv\u003E\u003Ch1 class=\"header__description\"\u003E" + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"text-base button button_text\" type=\"button\"\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (type=='login') {
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cspan class=\"footer__text\"\u003EУ вас еще нет аккаунта?&nbsp;\u003C\u002Fspan\u003E\u003Ca class=\"footer__link .link\" href=\"\u002Fsignup\" id=\"link\"\u003EЗарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cspan class=\"footer__text\"\u003EУ вас уже есть аккаунт?&nbsp;\u003C\u002Fspan\u003E\u003Ca class=\"footer__link .link\" href=\"\u002Flogin\" id=\"link\"\u003EВойдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
pug_mixins["header"]('Добро пожаловать!');
pug_mixins["customInput"]('login', 'registration');
pug_mixins["customInput"]('password', 'registration');
pug_html = pug_html + (null == (pug_interp = (__webpack_require__(/*! ../../../shared/components/GenderSelection/GenderSelection.pug */ "./src/shared/components/GenderSelection/GenderSelection.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Clabel class=\".text-base\" for=\"age\"\u003EВозраст\u003C\u002Flabel\u003E\u003Cinput class=\"range-input\" type=\"range\" id=\"age\" name=\"age\" min=\"18\" max=\"100\" value=\"18\" oninput=\"this.nextElementSibling.value = this.value\"\u003E\u003Coutput\u003E18\u003C\u002Foutput\u003E";
pug_mixins["textButton"]('Зарегистрироваться');
pug_mixins["footerText"]('registration');
}
else
if (typeOfPage === 'login') {
pug_mixins["customInput"] = pug_interp = function(inputType, formType){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (inputType=='password') {
pug_html = pug_html + "\u003Clabel class=\".text-base label\" for=\"password\"\u003EПароль\u003C\u002Flabel\u003E\u003Cdiv class=\"password__wrapper\"\u003E\u003Cinput class=\"input\" type=\"password\" id=\"password\" placeholder=\"Введите пароль\"\u003E\u003Cimg class=\"password__icon\" src=\".\u002Fimg\u002Feye-x.svg\"\u003E\u003C\u002Fdiv\u003E";
if (formType=='registration') {
pug_html = pug_html + "\u003C!--p.error#password-error(style='display:none') Пароль должен соблюдать следующие требования:--\u003E\u003Cp class=\"error\" id=\"password-error-1\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"password-error-2\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"password-error-3\" style=\"display:none\"\u003E\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
pug_html = pug_html + "\u003Cp class=\"error\" id=\"password-error\"\u003EОшибка: Введите пароль\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-password-error\"\u003EОшибка: Неправильный логин или пароль\u003C\u002Fp\u003E";
}
}
else
if (inputType=='login') {
pug_html = pug_html + "\u003Clabel class=\".text-base label\" for=\"login\"\u003EЛогин\u003C\u002Flabel\u003E\u003Cinput class=\"input .text-base\" type=\"text\" id=\"login\" placeholder=\"Введите логин\"\u003E";
if (formType=='registration') {
pug_html = pug_html + "\u003C!--p.error#login-error(style='display:none') Логин должен соблюдать следующие требования:--\u003E\u003Cp class=\"error\" id=\"login-error-1\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-2\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-3\" style=\"display:none\"\u003E\u003C\u002Fp\u003E\u003Cp class=\"error\" id=\"login-error-4\" style=\"display:none\"\u003E\u003C\u002Fp\u003E";
}
else
if (formType=='login') {
pug_html = pug_html + "\u003Cp class=\"error\" id=\"login-error\"\u003EОшибка: Введите правильный логин\u003C\u002Fp\u003E";
}
}
};
pug_mixins["header"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header__logo\"\u003E\u003Cimg class=\"img header__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"Logo\"\u003E\u003C\u002Fdiv\u003E\u003Ch1 class=\"header__description\"\u003E" + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Fh1\u003E";
};
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"text-base button button_text\" type=\"button\"\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
pug_mixins["footerText"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (type=='login') {
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cspan class=\"footer__text\"\u003EУ вас еще нет аккаунта?&nbsp;\u003C\u002Fspan\u003E\u003Ca class=\"footer__link .link\" href=\"\u002Fsignup\" id=\"link\"\u003EЗарегистрируйтесь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (type=='registration') {
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cspan class=\"footer__text\"\u003EУ вас уже есть аккаунт?&nbsp;\u003C\u002Fspan\u003E\u003Ca class=\"footer__link .link\" href=\"\u002Flogin\" id=\"link\"\u003EВойдите в аккаунт\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
};
pug_mixins["header"]('С возвращением!');
pug_mixins["customInput"]('login', 'login');
pug_mixins["customInput"]('password', 'login');
pug_mixins["textButton"]('Войти в аккаунт', 'login-button');
pug_mixins["footerText"]('login');
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
pug_mixins["imageSection"]('./img/image.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["textButton"] = pug_interp = function(text, elemId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"text-base button button_text\" type=\"button\"\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fbutton\u003E";
};
pug_mixins["navbar"] = pug_interp = function(isAuth, activeNavbarItem){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"navbar\"\u003E\u003Cdiv class=\"navbar__logo\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Ffeed\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca class=\"navbar__logo__link\" href=\"\u002Flogin\"\u003E\u003Cimg class=\"img navbar__logo__img\" src=\".\u002Fimg\u002FLogo.svg\" alt=\"logo\"\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"navbar__list\"\u003E\u003Cul class=\"navbar__list__ul\"\u003E";
if ((isAuth)) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'feed' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Ffeed\"") + "\u003EГлавная\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'matches' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fmatches\"") + "\u003EМэтчи\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (pug.attr("class", pug.classes([`navbar__link ${activeNavbarItem === 'profile' ? 'navbar__link--active' : ''}`], [true]), false, true)+" href=\"\u002Fprofile\"") + "\u003EПрофиль\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E\u003Ca class=\"navbar__link\" href=\"\u002Flogin\"\u003EВойти\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"navbar__link navbar__link--active\" href=\"\u002Fsignup\"\u003EЗарегистрироваться\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
if ((isAuth)) {
pug_html = pug_html + (null == (pug_interp = (__webpack_require__(/*! ../../../shared/components/Avatar/Avatar.pug */ "./src/shared/components/Avatar/Avatar.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cbutton class=\"text-base button button_text navbar__button\" id=\"button-logout\" type=\"button\"\u003EВыйти из аккаунта\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["navbar"](false);
pug_mixins["base"]('signup');;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/shared/components/Avatar/Avatar.pug":
/*!*************************************************!*\
  !*** ./src/shared/components/Avatar/Avatar.pug ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"user-avatar\"\u003E\u003Ca class=\"user-avatar__image-wrapper\" href=\"\u002Fprofile\"\u003E\u003Cimg class=\"user-avatar__image\" src=\".\u002Fimg\u002Fuser.svg\" alt=\"User Avatar\"\u003E\u003C\u002Fa\u003E\u003Cdiv class=\"user-avatar__menu\" is-active\u003E\u003Cbutton class=\"user-avatar__logout-button\"\u003EВыйти\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/shared/components/GenderSelection/GenderSelection.pug":
/*!*******************************************************************!*\
  !*** ./src/shared/components/GenderSelection/GenderSelection.pug ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Ctext class=\".text-base label\"\u003EПол\u003C\u002Ftext\u003E\u003Cdiv class=\"gender-selection\"\u003E\u003Cdiv class=\"radio-input\"\u003E\u003Cinput class=\"radio-input__radio\" type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" checked\u003E\u003Clabel class=\"radio-input__label\" for=\"male\"\u003EМужской\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"radio-input\"\u003E\u003Cinput class=\"radio-input__radio\" type=\"radio\" id=\"female\" name=\"gender\" value=\"female\"\u003E\u003Clabel class=\"radio-input__label\" for=\"female\"\u003EЖенский\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"error\" id=\"gender-error\" style=\"display:none;\"\u003EВыберите пол\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/profile/ui/profile.scss":
/*!*******************************************!*\
  !*** ./src/pages/profile/ui/profile.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./profile.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/profile/ui/profile.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/features/imageUploader.ts":
/*!***************************************!*\
  !*** ./src/features/imageUploader.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadImg: () => (/* binding */ uploadImg)
/* harmony export */ });
function uploadImg(imagesNew, imagesURLs, imagesIndexes, getInfoFromPage, render) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', (event) => {
        const target = event.target;
        const file = target.files?.[0];
        if (file) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
            if (!validImageTypes.includes(file.type)) {
                alert('Пожалуйста, загрузите изображение в формате JPEG, PNG или SVG.');
                return;
            }
            imagesNew.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target.result;
                if (typeof result === 'string') {
                    imagesIndexes.push(-1);
                    imagesURLs.push(result);
                    getInfoFromPage();
                    render();
                }
            };
            reader.readAsDataURL(file);
        }
    });
    input.click();
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/App.js */ "./src/app/App.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _img_Logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @img/Logo.svg */ "./src/shared/assets/img/Logo.svg");
/* harmony import */ var _img_image_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @img/image.svg */ "./src/shared/assets/img/image.svg");
/* harmony import */ var _img_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @img/icon.svg */ "./src/shared/assets/img/icon.svg");
/* harmony import */ var _img_arrow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @img/arrow.svg */ "./src/shared/assets/img/arrow.svg");
/* harmony import */ var _img_shine_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @img/shine.svg */ "./src/shared/assets/img/shine.svg");
/* harmony import */ var _img_arrowRight_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @img/arrowRight.svg */ "./src/shared/assets/img/arrowRight.svg");
/* harmony import */ var _img_giftArrow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @img/giftArrow.svg */ "./src/shared/assets/img/giftArrow.svg");
/* harmony import */ var _img_X_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @img/X.svg */ "./src/shared/assets/img/X.svg");
/* harmony import */ var _img_Heart_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @img/Heart.svg */ "./src/shared/assets/img/Heart.svg");
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @img/delete.svg */ "./src/shared/assets/img/delete.svg");
/* harmony import */ var _img_left_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @img/left.svg */ "./src/shared/assets/img/left.svg");
/* harmony import */ var _img_right_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @img/right.svg */ "./src/shared/assets/img/right.svg");
/* harmony import */ var _img_eye_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @img/eye.svg */ "./src/shared/assets/img/eye.svg");
/* harmony import */ var _img_eye_x_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @img/eye-x.svg */ "./src/shared/assets/img/eye-x.svg");
/* harmony import */ var _img_user_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @img/user.svg */ "./src/shared/assets/img/user.svg");

















const root = document.querySelector('#root');
if (root) {
    const app = new _app_App_js__WEBPACK_IMPORTED_MODULE_0__["default"](root);
    await app.init();
}
else {
    console.error('Element with id "root" not found.');
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/pages/profile/api/delImg.ts":
/*!*****************************************!*\
  !*** ./src/pages/profile/api/delImg.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delImg: () => (/* binding */ delImg)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");

async function delImg(imagesDel) {
    try {
        for (const imageId of imagesDel) {
            if (imageId === -1) {
                continue;
            }
            const response = await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.del)(`http://5.188.140.7:8080/image/${imageId}`);
            if (!response.ok) {
                console.error('Failed to delete the image:', response.statusText);
                return false;
            }
        }
        return true;
    }
    catch (error) {
        console.error('Error deleting the image:', error);
        return false;
    }
}
;


/***/ }),

/***/ "./src/pages/profile/api/getProfile.ts":
/*!*********************************************!*\
  !*** ./src/pages/profile/api/getProfile.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfile: () => (/* binding */ getProfile)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");

/**
 * Fetches the profile of a user by ID.
 *
 * @returns {Promise<UserProfile | null>} - A promise that resolves to the user profile object or null if not found.
 */
async function getProfile() {
    try {
        const response = await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.get)('http://5.188.140.7:8080/profile');
        if (!response.ok) {
            console.error('Failed to fetch profile:', response.statusText);
            return null;
        }
        const data = await response.json();
        const images = Array.isArray(data.images) ? data.images : [];
        const userProfile = {
            ID: data.profile.id,
            imagesIndexes: images.map((image) => image.id),
            FirstName: data.profile.first_name,
            LastName: data.profile.last_name,
            Gender: data.profile.gender,
            Age: data.profile.age,
            Target: data.profile.target,
            About: data.profile.about,
            imagesURLs: images.map((image) => {
                const fileName = image.link.substring(image.link.lastIndexOf('/') + 1);
                return `http://5.188.140.7/${fileName}`;
            }),
        };
        return userProfile;
    }
    catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }
}


/***/ }),

/***/ "./src/pages/profile/api/updProfile.ts":
/*!*********************************************!*\
  !*** ./src/pages/profile/api/updProfile.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updProfile: () => (/* binding */ updProfile)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");
/* harmony import */ var _delImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delImg */ "./src/pages/profile/api/delImg.ts");
/* harmony import */ var _uploadImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploadImg */ "./src/pages/profile/api/uploadImg.ts");



/**
 * Updates the profile of a user by ID.
 *
 * @param {number | string} id - The ID of the user.
 * @param {Object} profileData - The data to update the user's profile.
 * @returns {Promise<boolean>} - A promise that resolves to true if the update is successful, otherwise false.
 */
async function updProfile(profileData, imagesNew, imagesDel) {
    try {
        const data = {
            id: profileData.ID,
            first_name: profileData.FirstName,
            last_name: profileData.LastName,
            gender: profileData.Gender,
            age: profileData.Age,
            target: profileData.Target,
            about: profileData.About,
        };
        if (!(await (0,_uploadImg__WEBPACK_IMPORTED_MODULE_2__.uploadImg)(imagesNew))) {
            return false;
        }
        ;
        if (!(await (0,_delImg__WEBPACK_IMPORTED_MODULE_1__.delImg)(imagesDel))) {
            return false;
        }
        ;
        const response = await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.put)('http://5.188.140.7:8080/updateprofile', JSON.stringify(data));
        if (!response.ok) {
            console.error('Failed to update profile:', response.statusText);
            return false;
        }
        return true;
    }
    catch (error) {
        console.error('Error updating user profile:', error);
        return false;
    }
}


/***/ }),

/***/ "./src/pages/profile/api/uploadImg.ts":
/*!********************************************!*\
  !*** ./src/pages/profile/api/uploadImg.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadImg: () => (/* binding */ uploadImg)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");

async function uploadImg(imagesNew) {
    try {
        for (const image of imagesNew) {
            const formData = new FormData();
            formData.append('image', image);
            const response = await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.post)('http://5.188.140.7:8080/uploadimage', formData);
            if (!response.ok) {
                console.error('Failed to upload the image:', response.statusText);
                return false;
            }
            ;
        }
        return true;
    }
    catch (error) {
        console.error('Error uploading the image:', error);
        return false;
    }
}
;


/***/ }),

/***/ "./src/pages/profile/profile.ts":
/*!**************************************!*\
  !*** ./src/pages/profile/profile.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePage: () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _ui_profile_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/profile.pug */ "./src/pages/profile/ui/profile.pug");
/* harmony import */ var _ui_profile_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_profile_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_getProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/getProfile */ "./src/pages/profile/api/getProfile.ts");
/* harmony import */ var _api_updProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/updProfile */ "./src/pages/profile/api/updProfile.ts");
/* harmony import */ var _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/Navbar/navbar.js */ "./src/widgets/Navbar/navbar.js");
/* harmony import */ var _ui_profile_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/profile.scss */ "./src/pages/profile/ui/profile.scss");
/* harmony import */ var _features_imageUploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/imageUploader */ "./src/features/imageUploader.ts");






class ProfilePage {
    imagesDel = [];
    imagesNew = [];
    parent;
    isEditing;
    navbar;
    ID;
    imagesIndexes;
    FirstName;
    LastName;
    Age;
    Gender;
    Target;
    About;
    imagesURLs;
    constructor(parent) {
        this.parent = parent;
        this.isEditing = false;
        this.navbar = null;
        this.ID = -1;
        this.imagesIndexes = [];
        this.FirstName = 'Андрей';
        this.LastName = 'Девелопер';
        this.Age = 18;
        this.Gender = 'male';
        this.Target = '-';
        this.About = '-';
        this.imagesURLs = ['./img/image.svg', './img/image.svg', './img/image.svg', './img/image.svg', './img/image.svg', './img/image.svg'];
        this.loadProfile().then(() => {
            this.render();
        });
    }
    async loadProfile() {
        try {
            const profileData = await (0,_api_getProfile__WEBPACK_IMPORTED_MODULE_1__.getProfile)();
            if (profileData) {
                this.ID = profileData.ID || -1;
                this.imagesIndexes = profileData.imagesIndexes || [-1];
                this.FirstName = profileData.FirstName || '-';
                this.LastName = profileData.LastName || '-';
                this.Age = profileData.Age || 21;
                this.Gender = profileData.Gender || 'male';
                this.Target = profileData.Target || '-';
                this.About = profileData.About || '-';
                this.imagesURLs = profileData.imagesURLs || ['./img/image.svg'];
            }
            ;
        }
        catch (error) {
            console.error('Ошибка при загрузке профиля:', error);
        }
    }
    limitText(textarea, limit) {
        const limitLines = () => {
            const lines = textarea.value.split("\n");
            if (lines.length > limit) {
                textarea.value = lines.slice(0, limit).join("\n");
            }
            ;
        };
        limitLines();
        let timeout;
        textarea.addEventListener("input", () => {
            clearTimeout(timeout);
            timeout = setTimeout(limitLines, 1);
        });
    }
    render() {
        this.parent.root.innerHTML = _ui_profile_pug__WEBPACK_IMPORTED_MODULE_0___default()({
            username: this.parent.curLogin,
            isEditing: this.isEditing,
            FirstName: this.FirstName,
            LastName: this.LastName,
            Age: this.Age,
            Gender: this.Gender,
            Target: this.Target,
            About: this.About,
            imagesURLs: this.imagesURLs,
        });
        this.componentWillMount();
    }
    componentWillMount() {
        this.navbar = new _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('nav'), this.parent);
        const settingsButton = document.querySelector('.settings-button');
        if (settingsButton) {
            settingsButton.addEventListener('click', () => this.toggleEditMode());
        }
        const cancelButton = document.querySelector('.cancel-settings');
        if (cancelButton) {
            cancelButton.addEventListener('click', () => this.toggleEditMode());
        }
        const saveButton = document.querySelector('.save-settings');
        if (saveButton) {
            saveButton.addEventListener('click', () => this.saveSettings());
        }
        if (this.isEditing) {
            const rangeInput = document.getElementById('Age');
            const output = rangeInput.nextElementSibling;
            const updateOutput = () => {
                const value = rangeInput.value;
                output.value = value === '100' ? '100+' : value;
            };
            updateOutput();
            rangeInput.addEventListener('input', updateOutput);
        }
        const delButtons = document.querySelectorAll('.delete-button');
        delButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.deleteImage(index);
            });
        });
        const uploadButton = document.querySelector('.upload-button');
        if (uploadButton) {
            uploadButton.addEventListener('click', () => this.handleUploadImg());
        }
        if (this.isEditing) {
            const textarea = document.getElementById('About');
            this.limitText(textarea, 10);
            textarea.addEventListener('input', () => {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
            });
        }
    }
    handleUploadImg() {
        (0,_features_imageUploader__WEBPACK_IMPORTED_MODULE_5__.uploadImg)(this.imagesNew, this.imagesURLs, this.imagesIndexes, () => this.getInfoFromPage(), () => this.render());
    }
    getInfoFromPage() {
        this.FirstName = document.getElementById('FirstName').value;
        this.LastName = document.getElementById('LastName').value;
        this.Gender = document.getElementById('Gender').value;
        this.Age = parseInt(document.getElementById('Age').value, 10);
        this.Target = document.getElementById('Target').value;
        this.About = document.getElementById('About').value;
        return;
    }
    deleteImage(index) {
        this.imagesDel.push(this.imagesIndexes[index]);
        this.imagesIndexes.splice(index, 1);
        this.imagesURLs.splice(index, 1);
        this.getInfoFromPage();
        this.render();
    }
    toggleEditMode() {
        this.isEditing = !this.isEditing;
        this.loadProfile().then(() => {
            this.render();
        });
    }
    async saveSettings() {
        this.getInfoFromPage();
        const profileData = {
            ID: this.ID,
            imagesIndexes: this.imagesIndexes,
            FirstName: this.FirstName,
            LastName: this.LastName,
            Age: this.Age,
            Gender: this.Gender,
            Target: this.Target,
            About: this.About,
            imagesURLs: this.imagesURLs,
        };
        const updateSuccess = await (0,_api_updProfile__WEBPACK_IMPORTED_MODULE_2__.updProfile)(profileData, this.imagesNew, this.imagesDel);
        if (updateSuccess) {
            //console.log('Profile updated successfully'); тут бы всплывающее окно
        }
        else {
            //console.error('Failed to update profile'); //тут тоже
        }
        this.isEditing = false;
        this.imagesDel = [];
        this.imagesNew = [];
        this.loadProfile().then(() => {
            this.render();
        });
    }
}


/***/ }),

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _features_checkAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/checkAuth.js */ "./src/features/checkAuth.js");
/* harmony import */ var _shared_constants_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/routes.js */ "./src/shared/constants/routes.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.js */ "./src/app/router.js");





/**
 * Class representing the main application.
 */
class App {
	#state = {};
	root;
	router;

	/**
     * Creates an instance of App.
     * @param {HTMLElement} root - The root element for rendering the application.
     */
	constructor(root) {
		this.root = root;
		this.#state.isAuthenticated = false;
		this.router = new _router_js__WEBPACK_IMPORTED_MODULE_2__.Router(root);
	}

	/**
     * Initializes the application by checking authentication and rendering the appropriate page.
     * @returns {Promise<void>} - A promise that resolves after initialization.
     */
	async init() {
		try {
			this.#state.isAuthenticated = await (0,_features_checkAuth_js__WEBPACK_IMPORTED_MODULE_0__.checkAuth)();

			_shared_constants_routes_js__WEBPACK_IMPORTED_MODULE_1__.ROUTES.forEach(({ path, view })=> {
				this.router.register(path, view);
			});

			this.router.start();

			if (!this.#state.isAuthenticated) {
				this.router.navigateTo(_shared_constants_routes_js__WEBPACK_IMPORTED_MODULE_1__.ROUTES.get(_shared_constants_routes_js__WEBPACK_IMPORTED_MODULE_1__.ROUTES_NAME.LOGIN).path);
			}
			else {
				this.router.navigateTo(window.location.pathname);
			}

		} catch (error) {
			this.router.navigateTo(_shared_constants_routes_js__WEBPACK_IMPORTED_MODULE_1__.ROUTES.get(_shared_constants_routes_js__WEBPACK_IMPORTED_MODULE_1__.ROUTES_NAME.LOGIN).path);
		}
	}
}

/***/ }),

/***/ "./src/app/router.js":
/*!***************************!*\
  !*** ./src/app/router.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/**
 * Class representing a router for managing navigation in a web application.
 */
class Router {
	/**
	 * Creates an instance of Router.
	 *
	 * @param {HTMLElement} root - The root element of the application where views will be rendered.
	 * @returns {Router} - The instance of the Router.
	 */
	constructor(root) {
		if (Router.instance) {
			return Router.instance;
		}
		this.root = root;
		this.routes = new Map;
		this.currentRoute = null;
		Router.instance = this;
	}

	/**
	 * Registers a route with its corresponding view.
	 *
	 * @param {string} path - The path of the route to register.
	 * @param {Function} view - The class of view associated with the route.
	 * @returns {Router} - The instance of the Router for chaining method calls.
	 */
	register(path, view) {
		this.routes.set(path, view);
		return this;
	}

	/**
	 * Starts the router by setting up event listeners and navigating to the initial route.
	 */
	start() {
		window.addEventListener('popstate', () => {
			this.navigateTo(window.location.pathname, false);
		});
		this.navigateTo(window.location.pathname, false);
	}

	/**
	 * Navigates to the specified path.
	 *
	 * @param {string} path - The path to navigate to.
	 * @param {boolean} addToHistory - Whether to add the navigation to the browser history. Defaults to true.
	 */
	navigateTo(path, addToHistory = true) {
		const view = this.routes.get(path);
    	if (view) {
			this.currentRoute = {path, view};
			if (addToHistory) {
				history.pushState({}, '', path);
			}
      		new view(this);
    	} 
	}

	/**
	 * Navigates to the previous page in the browser history.
	 */
	back() {
		window.history.back();
	}

	/**
	 * Navigates to the next page in the browser history.
	 */
	forward () {
		window.history.forward();
	}
}

/***/ }),

/***/ "./src/features/checkAuth.js":
/*!***********************************!*\
  !*** ./src/features/checkAuth.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkAuth: () => (/* binding */ checkAuth)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/api/api.js */ "./src/shared/api/api.js");


/**
 * Checks if the user is authenticated.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true
 * 								if the user is authenticated, otherwise false.
 */
async function checkAuth() {
	try {
		await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.get)('http://5.188.140.7:8080/checkauth');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/***/ }),

/***/ "./src/pages/feed/api/getUsers.js":
/*!****************************************!*\
  !*** ./src/pages/feed/api/getUsers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUsers: () => (/* binding */ getUsers)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");


/**
 * Fetches the list of users.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.
 */
async function getUsers() {
	try {
		const response = await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.get)('http://5.188.140.7:8080/getusers');
		return response.json();

	} catch (error) {
		console.error(error);
		return [];
	}
}

/***/ }),

/***/ "./src/pages/feed/api/putLikeOrDislike.js":
/*!************************************************!*\
  !*** ./src/pages/feed/api/putLikeOrDislike.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   putLikeOrDislike: () => (/* binding */ putLikeOrDislike)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");


async function putLikeOrDislike(like, userID) {
	try {
		const body = { 'receiver': parseInt(userID), 'type': like };
		await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.post)('http://5.188.140.7:8080/reaction', JSON.stringify(body));
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/***/ }),

/***/ "./src/pages/feed/feed.js":
/*!********************************!*\
  !*** ./src/pages/feed/feed.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedPage: () => (/* binding */ FeedPage)
/* harmony export */ });
/* harmony import */ var _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/Navbar/navbar.js */ "./src/widgets/Navbar/navbar.js");
/* harmony import */ var _ui_feed_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/feed.pug */ "./src/pages/feed/ui/feed.pug");
/* harmony import */ var _ui_feed_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_feed_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_getUsers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/getUsers.js */ "./src/pages/feed/api/getUsers.js");
/* harmony import */ var _api_putLikeOrDislike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/putLikeOrDislike.js */ "./src/pages/feed/api/putLikeOrDislike.js");
/* harmony import */ var _shared_lib_carousel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/lib/carousel.js */ "./src/shared/lib/carousel.js");







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
			this.navbar = new _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('navbar'), parent);
		});
	}

	/**
     * Renders the feed page by fetching users and initializing cards.
     * @returns {Promise<void>} - A promise that resolves when the rendering is complete.
     */
	async render() {
		let users = await (0,_api_getUsers_js__WEBPACK_IMPORTED_MODULE_2__.getUsers)();

		/**
         * Initializes the cards by setting their styles and adding them to the container.
         */
		function initCards() { 
			let newCards = document.querySelectorAll('.tinder__card:not(.removed)');
			const maxOffsetIndex = 10;
		
			newCards.forEach(function (card, index) {
				const limitedIndex = Math.min(index, maxOffsetIndex); 
				card.style.zIndex = allCards.length - index;
				card.style.transform = 
					'scale(' + (20 - limitedIndex) / 20 + ') ' + 
					'translateY(-' + 30 * limitedIndex + 'px)';
				card.style.opacity = (10 - index) / 10;
			});
				
			tinderContainer.classList.add('loaded');
		}

		this.parent.root.innerHTML = _ui_feed_pug__WEBPACK_IMPORTED_MODULE_1___default()({ users });
		if (users === null)
		{return;}
		let tinderContainer = document.querySelector('.tinder');
		let allCards = document.querySelectorAll('.tinder__card');
		let nope = document.getElementById('nope');
		let love = document.getElementById('love');

		allCards.forEach((card, index) => {
			const user = users[index];
			if (user) {
				card.setAttribute('data-item-id', user.user);
			}

			if (user.images != null && user.images.length > 1) {
				const carousel = card.querySelector('.carousel');
				if (carousel) {
					carousel.setAttribute('data-current-index', 0);
					(0,_shared_lib_carousel_js__WEBPACK_IMPORTED_MODULE_4__.showImage)(carousel, 0);

					const leftButton = card.querySelector('.carousel__button_left');
					const rightButton = card.querySelector('.carousel__button_right');

					leftButton.addEventListener('click', (event) => {
						(0,_shared_lib_carousel_js__WEBPACK_IMPORTED_MODULE_4__.scrollLeft)(carousel);
					});
					rightButton.addEventListener('click', (event) => {
						(0,_shared_lib_carousel_js__WEBPACK_IMPORTED_MODULE_4__.scrollRight)(carousel);
					});
				}
			}
		});
		initCards();

		allCards.forEach(function (el) {
			let startX, startY, currentX, currentY, initialX, initialY;
			let isDragging = false;
			let isSwiping = false;
			
			/**
             * Starts the drag event.
             * @param {Event} event - The drag start event.
             */
			function startDrag(event) {
				if (event.target.tagName === 'BUTTON') {
					return;
				}
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
				isSwiping = true;
			
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
			async function endDrag() {
				if (!isSwiping) {
					return;
				}
				isSwiping = false;
				isDragging = false;
			
				el.classList.remove('moving');
				tinderContainer.classList.remove('tinder_love');
				tinderContainer.classList.remove('tinder_nope');
				let deltaX = currentX - startX;
				let deltaY = currentY - startY;
				let moveOutWidth = document.body.clientWidth;
				let keep = (Math.abs(deltaX) < 80 || deltaX === NaN);
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

					let love = deltaX > 0;
					let userId = el.getAttribute('data-item-id');
    				await (0,_api_putLikeOrDislike_js__WEBPACK_IMPORTED_MODULE_3__.putLikeOrDislike)(love, userId);

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
			return async function (event) {
				let cards = document.querySelectorAll('.tinder__card:not(.removed)');
				let moveOutWidth = document.body.clientWidth * 1.5;
			
				if (!cards.length) {
					return false;
				}
			
				let card = cards[0];
				let userId = card.getAttribute('data-item-id');

				await (0,_api_putLikeOrDislike_js__WEBPACK_IMPORTED_MODULE_3__.putLikeOrDislike)(love, userId);
			
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

/***/ "./src/pages/login/api/loginUser.js":
/*!******************************************!*\
  !*** ./src/pages/login/api/loginUser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginUser: () => (/* binding */ loginUser)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");


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
		await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.post)('http://5.188.140.7:8080/signin', JSON.stringify(body));
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/***/ }),

/***/ "./src/pages/login/login.js":
/*!**********************************!*\
  !*** ./src/pages/login/login.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/Navbar/navbar.js */ "./src/widgets/Navbar/navbar.js");
/* harmony import */ var _ui_login_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/login.pug */ "./src/pages/login/ui/login.pug");
/* harmony import */ var _ui_login_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_login_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_loginUser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/loginUser.js */ "./src/pages/login/api/loginUser.js");





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
		this.navbar = new _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('nav'), parent);
	}

	/**
   * Renders the login page template.
   * @returns {string} - The HTML string of the login page template.
   */
	render() {
		return _ui_login_pug__WEBPACK_IMPORTED_MODULE_1___default()();
	}

	/**
   * Adds event listeners to the login page elements.
   */
	addEventListeners() {
		document.getElementById('link').addEventListener('click', (event) => {
			event.preventDefault();
			const url = new URL(event.target.href);
			const path = url.pathname;
			this.parent.navigateTo(path);
		});

		const passwordInputIcon = document.querySelector('.password__icon');
		passwordInputIcon.addEventListener('click', (event) => {
			const passwordInput = document.getElementById('password');
			passwordInput.setAttribute('type', passwordInput.type === 'password' ? 'text' : 'password');
			passwordInputIcon.setAttribute('src', passwordInput.type === 'password' ? './img/eye-x.svg' : './img/eye.svg');
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
					const isLogedIn = await (0,_api_loginUser_js__WEBPACK_IMPORTED_MODULE_2__.loginUser)(login, password);
					if (!isLogedIn) {
						document.getElementById('login-password-error').style.display = 'block';            
					} else { 
						this.parent.curLogin = login;
						this.parent.navigateTo('/feed');
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

/***/ "./src/pages/matches/api/getMatches.js":
/*!*********************************************!*\
  !*** ./src/pages/matches/api/getMatches.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMatches: () => (/* binding */ getMatches)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");


/**
 * Fetches the list of users.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.
 */
async function getMatches() {
	try {
		const response = await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.get)('http://5.188.140.7:8080/matches');
		return response.json();

	} catch (error) {
		console.error(error);
		return [];
	}
}

/***/ }),

/***/ "./src/pages/matches/matches.js":
/*!**************************************!*\
  !*** ./src/pages/matches/matches.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchesPage: () => (/* binding */ MatchesPage)
/* harmony export */ });
/* harmony import */ var _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/Navbar/navbar.js */ "./src/widgets/Navbar/navbar.js");
/* harmony import */ var _ui_matches_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/matches.pug */ "./src/pages/matches/ui/matches.pug");
/* harmony import */ var _ui_matches_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_matches_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_getMatches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/getMatches.js */ "./src/pages/matches/api/getMatches.js");





class MatchesPage {
	constructor(parent) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render().then(() => {;
			this.navbar = new _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('navbar'), parent);
		});
	}

	async render() {
		let users = await (0,_api_getMatches_js__WEBPACK_IMPORTED_MODULE_2__.getMatches)();
		this.parent.root.innerHTML = _ui_matches_pug__WEBPACK_IMPORTED_MODULE_1___default()({ users });
	}
}

/***/ }),

/***/ "./src/pages/signup/api/signupUser.js":
/*!********************************************!*\
  !*** ./src/pages/signup/api/signupUser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   signupUser: () => (/* binding */ signupUser)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");


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
async function signupUser(login, password, gender, age) {
	try {
		const body = {
			user: {
				'username': login,
				'password': password,
			},
			profile: {
				'gender': gender, 
				'age': parseInt(age),
			}
		};
		await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.post)('http://5.188.140.7:8080/signup', JSON.stringify(body));
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/***/ }),

/***/ "./src/pages/signup/signup.js":
/*!************************************!*\
  !*** ./src/pages/signup/signup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationPage: () => (/* binding */ RegistrationPage)
/* harmony export */ });
/* harmony import */ var _shared_utils_validation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils//validation.js */ "./src/shared/utils/validation.js");
/* harmony import */ var _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/Navbar/navbar.js */ "./src/widgets/Navbar/navbar.js");
/* harmony import */ var _api_signupUser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/signupUser.js */ "./src/pages/signup/api/signupUser.js");
/* harmony import */ var _ui_signup_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/signup.pug */ "./src/pages/signup/ui/signup.pug");
/* harmony import */ var _ui_signup_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ui_signup_pug__WEBPACK_IMPORTED_MODULE_3__);







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
		this.navbar = new _widgets_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('nav'), parent);
	}
  
	/**
   * Renders the registration page template.
   * @returns {string} - The HTML string of the registration page template.
   */
	render() {
		return _ui_signup_pug__WEBPACK_IMPORTED_MODULE_3___default()();
	}

	/**
   * Adds event listeners to the registration page elements.
   */
	addEventListeners() {
		document.getElementById('link').addEventListener('click', (event) => {
			event.preventDefault();
			const url = new URL(event.target.href);
			const path = url.pathname;
			this.parent.navigateTo(path);
		});

		const passwordInputIcon = document.querySelector('.password__icon');
		passwordInputIcon.addEventListener('click', (event) => {
			const passwordInput = document.getElementById('password');
			passwordInput.setAttribute('type', passwordInput.type === 'password' ? 'text' : 'password');
			passwordInputIcon.setAttribute('src', passwordInput.type === 'password' ? './img/eye-x.svg' : './img/eye.svg');
		});

		document.querySelector('button').addEventListener('click', async () => {
			const login = document.getElementById('login').value;
			const password = document.getElementById('password').value;
			const gender = document.querySelector('input[name="gender"]:checked').value;
			const age = parseInt((document.getElementById('age')).value, 10);

			const passwordErrors = (0,_shared_utils_validation_js__WEBPACK_IMPORTED_MODULE_0__.isValidPassword)(password);
			const loginErrors = (0,_shared_utils_validation_js__WEBPACK_IMPORTED_MODULE_0__.isValidLogin)(login);
			let valid = true;

			document.querySelectorAll('.error').forEach(error => {
				error.style.display = 'none';
			});

			if (passwordErrors.length > 0) {
				passwordErrors.forEach((error, index) => {
					document.getElementById(`password-error-${index + 1}`).innerText = error;
					document.getElementById(`password-error-${index + 1}`).style.display = 'block';
				});
				valid = false;
			}

			if (loginErrors.length > 0) {
				loginErrors.forEach((error, index) => {
					document.getElementById(`login-error-${index + 1}`).innerText = error;
					document.getElementById(`login-error-${index + 1}`).style.display = 'block';
				});
				valid = false;
			}


			if (valid) {
				try {
					const isSignedUp = await (0,_api_signupUser_js__WEBPACK_IMPORTED_MODULE_2__.signupUser)(login, password, gender, age);
					if (!isSignedUp) {
						document.getElementById('login-password-error').style.display = 'block';            
					} else { 
						this.parent.curLogin = login;
						this.parent.navigateTo('/feed');
					}
					this.parent.curLogin = login;
					this.parent.navigateTo('/feed');
				} catch (error) {
					console.error(error);
				}
			}
		});
	}
}

/***/ }),

/***/ "./src/shared/api/ajax.js":
/*!********************************!*\
  !*** ./src/shared/api/ajax.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
		// headers: {
		// 	'Content-Type': 'application/json'
		// },
		credentials: 'include'
	};

	if (body) {
		// options.body = JSON.stringify(body);
		options.body = body;
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

/***/ "./src/shared/api/api.js":
/*!*******************************!*\
  !*** ./src/shared/api/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.js */ "./src/shared/api/ajax.js");


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

/***/ "./src/shared/constants/routes.js":
/*!****************************************!*\
  !*** ./src/shared/constants/routes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES),
/* harmony export */   ROUTES_NAME: () => (/* binding */ ROUTES_NAME)
/* harmony export */ });
/* harmony import */ var _pages_feed_feed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/feed/feed.js */ "./src/pages/feed/feed.js");
/* harmony import */ var _pages_login_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/login/login.js */ "./src/pages/login/login.js");
/* harmony import */ var _pages_signup_signup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/signup/signup.js */ "./src/pages/signup/signup.js");
/* harmony import */ var _pages_matches_matches_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/matches/matches.js */ "./src/pages/matches/matches.js");
/* harmony import */ var _pages_profile_profile_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/profile/profile.ts */ "./src/pages/profile/profile.ts");






const ROUTES_NAME = {
	LOGIN: 'login',
	FEED: 'feed',
	MATCHES: 'matches',
	SIGNUP: 'signup',
	PROFILE: 'profile',
};

const ROUTES = new Map([
	[ROUTES_NAME.LOGIN, { path: '/login', view: _pages_login_login_js__WEBPACK_IMPORTED_MODULE_1__.LoginPage }],
	[ROUTES_NAME.FEED, { path: '/feed', view: _pages_feed_feed_js__WEBPACK_IMPORTED_MODULE_0__.FeedPage }],
	[ROUTES_NAME.MATCHES, { path: '/matches', view: _pages_matches_matches_js__WEBPACK_IMPORTED_MODULE_3__.MatchesPage }],
	[ROUTES_NAME.SIGNUP, { path: '/signup', view: _pages_signup_signup_js__WEBPACK_IMPORTED_MODULE_2__.RegistrationPage }],
	[ROUTES_NAME.PROFILE, { path: '/profile', view: _pages_profile_profile_ts__WEBPACK_IMPORTED_MODULE_4__.ProfilePage }],
]);

/***/ }),

/***/ "./src/shared/lib/carousel.js":
/*!************************************!*\
  !*** ./src/shared/lib/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollLeft: () => (/* binding */ scrollLeft),
/* harmony export */   scrollRight: () => (/* binding */ scrollRight),
/* harmony export */   showImage: () => (/* binding */ showImage)
/* harmony export */ });
function showImage(container, index) {
    const images = container.querySelectorAll('.image-section__img');
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function scrollLeft(container) {
    const images = container.querySelectorAll('.image-section__img');
    let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    container.setAttribute('data-current-index', currentIndex);
    showImage(container, currentIndex);
}

function scrollRight(container) {
    const images = container.querySelectorAll('.image-section__img');
    let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex + 1) % images.length; 
    container.setAttribute('data-current-index', currentIndex);
    showImage(container, currentIndex);
}

/***/ }),

/***/ "./src/shared/utils/validation.js":
/*!****************************************!*\
  !*** ./src/shared/utils/validation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    const errors = [];

    if (!password) {
        errors.push("Пароль не должен быть пустым.");
    }
    if (password.length < 6 || password.length > 40) {
        errors.push("Пароль должен быть длиной от 6 до 40 символов.");
    }
    if (!/\d/.test(password)) {
        errors.push("Пароль должен содержать минимум одну цифру.");
    }
    for (let char of password) {
        if (!/[a-zA-Z0-9*?!$]/.test(char)) {
            errors.push("Пароль содержит недопустимые специальные символы. Разрешены: ! ? * - $");
            break;
        }
    }

    return errors;
}


/**
 * Validates if the given login meets the required criteria.
 * 
 * @param {string} login - The login to validate.
 * @returns {boolean} - Returns true if the login is valid, otherwise false.
 */
function isValidLogin(login) {
    const errors = [];

    if (login.length < 5 || login.length > 25) {
        errors.push("Логин должен быть длиной от 5 до 25 символов.");
    }

    const invalidChars = /[^a-zA-Z0-9_-]/;
    if (invalidChars.test(login)) {
        errors.push("Логин может содержать только буквы, цифры, - и _.");
    }

    if ((login.startsWith('_') || login.startsWith('-')) || (login.endsWith('_') || login.endsWith('-'))) {
        errors.push("Специальные символы не могут быть в начале и в конце логина.");
    }

    if (/\d/.test(login.charAt(0))) {
		errors.push("Логин не может начинаться с цифры.");
	}

    return errors;
}

/***/ }),

/***/ "./src/widgets/Navbar/api/logout.js":
/*!******************************************!*\
  !*** ./src/widgets/Navbar/api/logout.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logout: () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api/api.js */ "./src/shared/api/api.js");


/**
 * Logs out the user.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if logout is successful, otherwise false.
 */
async function logout() {
	try {
		await (0,_shared_api_api_js__WEBPACK_IMPORTED_MODULE_0__.get)('http://5.188.140.7:8080/logout');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/***/ }),

/***/ "./src/widgets/Navbar/navbar.js":
/*!**************************************!*\
  !*** ./src/widgets/Navbar/navbar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _api_logout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/logout.js */ "./src/widgets/Navbar/api/logout.js");
/* harmony import */ var _pages_profile_api_getProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/profile/api/getProfile */ "./src/pages/profile/api/getProfile.ts");
/* harmony import */ var _features_checkAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/checkAuth */ "./src/features/checkAuth.js");




/**
 * Class representing the navigation bar.
 */
class Navbar {
	/**
   * Creates an instance of Navbar.
   * @param {HTMLElement} nav - The nav element.
   * @param {Object} app - The application instance.
   */
	constructor(nav, parent) {
		this.nav = nav;
		this.parent = parent;
		this.addEventListeners();
		this.getUserAvatar();
	}

	async getUserAvatar() {
		const isAuth = await (0,_features_checkAuth__WEBPACK_IMPORTED_MODULE_2__.checkAuth)();
		if (!isAuth) {
			return;
		}

		const userData = await (0,_pages_profile_api_getProfile__WEBPACK_IMPORTED_MODULE_1__.getProfile)();
		const avatarSrc = userData?.imagesURLs?.[0] ?? './img/user.svg';
		const avatarImg = document.querySelector('.user-avatar__image');
		avatarImg.setAttribute('src', avatarSrc);
	}
  
	/**
   * Adds event listeners to the navigation links and logout button.
   */
	addEventListeners() {
		const navLinks = document.querySelectorAll('li a');

		navLinks.forEach(link => {
			link.addEventListener('click', (event) => {
				event.preventDefault();
				const path = link.getAttribute('href');
				this.parent.navigateTo(path);
			});
		});
      
		const button = document.getElementById('button-logout');
		if (button) {
			button.addEventListener('click', async () => {
				await (0,_api_logout_js__WEBPACK_IMPORTED_MODULE_0__.logout)();
				this.parent.navigateTo('/login');
			});
		}

		const logoLink = document.querySelector('.navbar__logo__link');
		if (logoLink) {
			logoLink.addEventListener('click', (event) => {
				event.preventDefault();
				const path = logoLink.getAttribute('href');
				this.parent.navigateTo(path);
			});
		}

		const profileLink = document.querySelector('li.nav-link a[href="/profile"]');
		if (profileLink) {
			profileLink.addEventListener('click', (event) => {
				event.preventDefault();
				this.app.render('/profile');
			});
		}

		const avatarImage = document.querySelector('.user-avatar__image');
		if (avatarImage) {
			avatarImage.addEventListener('click', (event) => {
				event.preventDefault();
				const path = logoLink.getAttribute('href');
				this.parent.navigateTo('/profile');
			});
		}
	}
};

/***/ }),

/***/ "./src/shared/assets/fonts/Rubik-Regular.woff":
/*!****************************************************!*\
  !*** ./src/shared/assets/fonts/Rubik-Regular.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Rubik-Regular.woff";

/***/ }),

/***/ "./src/shared/assets/fonts/Rubik-Regular.woff2":
/*!*****************************************************!*\
  !*** ./src/shared/assets/fonts/Rubik-Regular.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Rubik-Regular.woff2";

/***/ }),

/***/ "./src/shared/assets/img/Heart.svg":
/*!*****************************************!*\
  !*** ./src/shared/assets/img/Heart.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Heart.svg";

/***/ }),

/***/ "./src/shared/assets/img/Logo.svg":
/*!****************************************!*\
  !*** ./src/shared/assets/img/Logo.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Logo.svg";

/***/ }),

/***/ "./src/shared/assets/img/X.svg":
/*!*************************************!*\
  !*** ./src/shared/assets/img/X.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/X.svg";

/***/ }),

/***/ "./src/shared/assets/img/arrow.svg":
/*!*****************************************!*\
  !*** ./src/shared/assets/img/arrow.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/arrow.svg";

/***/ }),

/***/ "./src/shared/assets/img/arrowRight.svg":
/*!**********************************************!*\
  !*** ./src/shared/assets/img/arrowRight.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/arrowRight.svg";

/***/ }),

/***/ "./src/shared/assets/img/background.svg":
/*!**********************************************!*\
  !*** ./src/shared/assets/img/background.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/background.svg";

/***/ }),

/***/ "./src/shared/assets/img/delete.svg":
/*!******************************************!*\
  !*** ./src/shared/assets/img/delete.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/delete.svg";

/***/ }),

/***/ "./src/shared/assets/img/eye-x.svg":
/*!*****************************************!*\
  !*** ./src/shared/assets/img/eye-x.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/eye-x.svg";

/***/ }),

/***/ "./src/shared/assets/img/eye.svg":
/*!***************************************!*\
  !*** ./src/shared/assets/img/eye.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/eye.svg";

/***/ }),

/***/ "./src/shared/assets/img/giftArrow.svg":
/*!*********************************************!*\
  !*** ./src/shared/assets/img/giftArrow.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/giftArrow.svg";

/***/ }),

/***/ "./src/shared/assets/img/icon.svg":
/*!****************************************!*\
  !*** ./src/shared/assets/img/icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon.svg";

/***/ }),

/***/ "./src/shared/assets/img/image.svg":
/*!*****************************************!*\
  !*** ./src/shared/assets/img/image.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/image.svg";

/***/ }),

/***/ "./src/shared/assets/img/left.svg":
/*!****************************************!*\
  !*** ./src/shared/assets/img/left.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/left.svg";

/***/ }),

/***/ "./src/shared/assets/img/right.svg":
/*!*****************************************!*\
  !*** ./src/shared/assets/img/right.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/right.svg";

/***/ }),

/***/ "./src/shared/assets/img/shine.svg":
/*!*****************************************!*\
  !*** ./src/shared/assets/img/shine.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/shine.svg";

/***/ }),

/***/ "./src/shared/assets/img/user.svg":
/*!****************************************!*\
  !*** ./src/shared/assets/img/user.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/user.svg";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
//# sourceMappingURL=bundleac27de9ca0c0ef8fbce0.js.map