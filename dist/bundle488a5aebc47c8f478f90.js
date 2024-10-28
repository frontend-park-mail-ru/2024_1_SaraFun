/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	'use strict';
	/******/ 	let __webpack_modules__ = ({

		/***/ './src/components/Navbar/navbar.js':
		/*!*****************************************!*\
  !*** ./src/components/Navbar/navbar.js ***!
  \*****************************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var _modules_apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/apiService.js */ "./src/modules/apiService.js");\n\n\n/**\n * Class representing the navigation bar.\n */\nclass Navbar {\n\t/**\n   * Creates an instance of Navbar.\n   * @param {HTMLElement} nav - The nav element.\n   * @param {Object} app - The application instance.\n   */\n\tconstructor(nav, app) {\n\t\tthis.nav = nav;\n\t\tthis.app = app;\n\t\tthis.addEventListeners();\n\t}\n  \n\t/**\n   * Adds event listeners to the navigation links and logout button.\n   */\n\taddEventListeners() {\n\t\tconst navLinks = document.querySelectorAll(\'li.nav-link a\');\n\n\t\tnavLinks.forEach(link => {\n\t\t\tlink.addEventListener(\'click\', (event) => {\n\t\t\t\tevent.preventDefault();\n\t\t\t\tconst path = link.getAttribute(\'href\');\n\t\t\t\tthis.app.render(path);\n\t\t\t});\n\t\t});\n      \n\t\tconst button = document.getElementById(\'button-logout\');\n\t\tif (button) {\n\t\t\tbutton.addEventListener(\'click\', async () => {\n\t\t\t\tawait (0,_modules_apiService_js__WEBPACK_IMPORTED_MODULE_0__.logout)();\n\t\t\t\tthis.app.render(\'/login\');\n\t\t\t});\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack://sarafun/./src/components/Navbar/navbar.js?');

			/***/ }),

		/***/ './src/index.js':
		/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
		/***/ ((module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/App.js */ "./src/modules/App.js");\n\n\nconst root = document.querySelector(\'#root\');\n\nconst app = new _modules_App_js__WEBPACK_IMPORTED_MODULE_0__["default"](root);\nawait app.init();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://sarafun/./src/index.js?');

			/***/ }),

		/***/ './src/modules/App.js':
		/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService.js */ "./src/modules/apiService.js");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ "./src/modules/router.js");\n\n\n\n/**\n * Class representing the main application.\n */\nclass App {\n\t#state = {};\n\troot;\n\n\t/**\n   * Creates an instance of App.\n   * @param {HTMLElement} root - The root element for rendering the application.\n   */\n\tconstructor(root) {\n\t\tthis.root = root;\n\t\tthis.#state.isAuthenticated = false;\n\t\tthis.router = (0,_router_js__WEBPACK_IMPORTED_MODULE_1__.createRouter)(this);\n\t}\n\n\t/**\n   * Initializes the application by checking authentication and rendering the appropriate page.\n   * @returns {Promise<void>} - A promise that resolves after initialization.\n   */\n\tasync init() {\n\t\ttry {\n\t\t\tthis.#state.isAuthenticated = await (0,_apiService_js__WEBPACK_IMPORTED_MODULE_0__.checkAuth)();\n\t\t\tif (this.#state.isAuthenticated) {\n\t\t\t\tthis.render(window.location.pathname);\n\t\t\t} else {\n\t\t\t\tthis.render(this.router.login.path);\n\t\t\t}\n\n\t\t\twindow.addEventListener(\'popstate\', () => {\n\t\t\t\tthis.render(window.location.pathname);\n\t\t\t});\n\n\t\t} catch (error) {\n\t\t\tthis.render(this.router.login.path);\n\t\t}\n\t}\n\n\t/**\n   * Renders the specified page.\n   * @param {string} pageLink - The link to the page to render.\n   */\n\trender(pageLink) {\n\t\tconst route = Object.values(this.router).find(route => route.path === pageLink);\n\t\tif (route) {\n\t\t\thistory.pushState({}, \'\', route.path);\n\t\t\tconst componentInstance = new route.componentName(this);\n\t\t} else {\n\t\t\tif (this.#state.isAuthenticated) {\n\t\t\t\tthis.render(this.router.feed.path);\n\t\t\t} else {\n\t\t\t\tthis.render(this.router.login.path);\n\t\t\t}\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack://sarafun/./src/modules/App.js?');

			/***/ }),

		/***/ './src/modules/ajax.js':
		/*!*****************************!*\
  !*** ./src/modules/ajax.js ***!
  \*****************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ajax: () => (/* binding */ ajax),\n/* harmony export */   ajaxMultipartForm: () => (/* binding */ ajaxMultipartForm)\n/* harmony export */ });\n/**\n * Performs an AJAX request.\n * \n * @param {string} url - The URL to send the request to.\n * @param {string} method - The HTTP method to use (e.g., \'GET\', \'POST\', \'PUT\', \'DELETE\').\n * @param {Object} [body=null] - The request body to send, if any.\n * @returns {Promise<Response>} - A promise that resolves to the response object.\n * @throws {Error} - Throws an error if the response is not ok.\n */\nasync function ajax(url, method, body = null) {\n\tconst options = {\n\t\tmethod: method,\n\t\theaders: {\n\t\t\t\'Content-Type\': \'application/json\'\n\t\t},\n\t\tcredentials: \'include\'\n\t};\n\n\tif (body) {\n\t\toptions.body = JSON.stringify(body);\n\t}\n\n\ttry {\n\t\tconst response = await fetch(url, options);\n\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`${response.status}: ${response.statusText}`);\n\t\t}\n\n\t\treturn response;\n\n\t} catch (error) {\n\t\tthrow error;\n\t}\n}\n\n/**\n * Performs an AJAX request with a multipart form.\n * \n * @param {string} url - The URL to send the request to.\n * @param {string} method - The HTTP method to use (e.g., \'POST\').\n * @param {File} file - The file to send in the multipart form.\n * @returns {Promise<Response>} - A promise that resolves to the response object.\n * @throws {Error} - Throws an error if the response is not ok.\n */\nasync function ajaxMultipartForm(url, method, file) {\n\tconst formData = new FormData();\n\tformData.append(\'file\', file);\n\n\tconst options = {\n\t\tmethod: method,\n\t\tbody: formData,\n\t\tcredentials: \'include\'\n\t};\n\n\ttry {\n\t\tconst response = await fetch(url, options);\n        \n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`${response.status}: ${response.statusText}`);\n\t\t}\n\n\t\treturn response;\n\n\t} catch (error) {\n\t\tthrow error;\n\t}\n}\n\n\n//# sourceURL=webpack://sarafun/./src/modules/ajax.js?');

			/***/ }),

		/***/ './src/modules/api.js':
		/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AJAX_METHODS: () => (/* binding */ AJAX_METHODS),\n/* harmony export */   del: () => (/* binding */ del),\n/* harmony export */   get: () => (/* binding */ get),\n/* harmony export */   post: () => (/* binding */ post),\n/* harmony export */   postFile: () => (/* binding */ postFile),\n/* harmony export */   put: () => (/* binding */ put),\n/* harmony export */   putFile: () => (/* binding */ putFile)\n/* harmony export */ });\n/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.js */ "./src/modules/ajax.js");\n\n\n/**\n * Enum for AJAX methods.\n * @readonly\n * @enum {string}\n */\nconst AJAX_METHODS = {\n\tGET: \'GET\',\n\tPOST: \'POST\',\n\tPUT: \'PUT\',\n\tDELETE: \'DELETE\',\n};\n\n/**\n * Performs a GET request.\n * \n * @param {string} url - The URL to send the request to.\n * @returns {Promise<Response>} - A promise that resolves to the response object.\n * @throws {Error} - Throws an error if the request fails.\n */\nconst get = async (url) => {\n\ttry {\n\t\treturn await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, AJAX_METHODS.GET);\n\t} catch (error) {\n\t\tthrow error;\n\t}\n};\n\n/**\n * Performs a POST request.\n * \n * @param {string} url - The URL to send the request to.\n * @param {Object} body - The request body to send.\n * @returns {Promise<Response>} - A promise that resolves to the response object.\n * @throws {Error} - Throws an error if the request fails.\n */\nconst post = async (url, body) => {\n\ttry {\n\t\treturn await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, AJAX_METHODS.POST, body);\n\t} catch (error) {\n\t\tthrow error;\n\t}\n};\n\n/**\n * Performs a PUT request.\n * \n * @param {string} url - The URL to send the request to.\n * @param {Object} body - The request body to send.\n * @returns {Promise<Response>} - A promise that resolves to the response object.\n * @throws {Error} - Throws an error if the request fails.\n */\nconst put = async (url, body) => {\n\ttry {\n\t\treturn await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, AJAX_METHODS.PUT, body);\n\t} catch (error) {\n\t\tthrow error;\n\t}\n};\n\n/**\n * Performs a DELETE request.\n * \n * @param {string} url - The URL to send the request to.\n * @returns {Promise<Response>} - A promise that resolves to the response object.\n * @throws {Error} - Throws an error if the request fails.\n */\nconst del = async (url) => {\n\ttry {\n\t\treturn await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, AJAX_METHODS.DELETE);\n\t} catch (error) {\n\t\tthrow error;\n\t}\n};\n\n/**\n * Performs a POST request with a file.\n * \n * @param {string} url - The URL to send the request to.\n * @param {File} file - The file to send in the request.\n * @returns {Promise<Response>} - A promise that resolves to the response object.\n * @throws {Error} - Throws an error if the request fails.\n */\nconst postFile = async (url, file) => {\n\ttry {\n\t\treturn await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajaxMultipartForm)(url, AJAX_METHODS.POST, file);\n\t} catch (error) {\n\t\tthrow error;\n\t}\n};\n\n/**\n * Performs a PUT request with a file.\n * \n * @param {string} url - The URL to send the request to.\n * @param {File} file - The file to send in the request.\n * @returns {Promise<Response>} - A promise that resolves to the response object.\n * @throws {Error} - Throws an error if the request fails.\n */\nconst putFile = async (url, file) => {\n\ttry {\n\t\treturn await (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajaxMultipartForm)(url, AJAX_METHODS.PUT, file);\n\t} catch (error) {\n\t\tthrow error;\n\t}\n};\n\n//# sourceURL=webpack://sarafun/./src/modules/api.js?');

			/***/ }),

		/***/ './src/modules/apiService.js':
		/*!***********************************!*\
  !*** ./src/modules/apiService.js ***!
  \***********************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkAuth: () => (/* binding */ checkAuth),\n/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   registerUser: () => (/* binding */ registerUser)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");\n\n\n/**\n * Logs in a user.\n * \n * @param {string} login - The username of the user.\n * @param {string} password - The password of the user.\n * @returns {Promise<boolean>} - A promise that resolves to true \n * \t\t\t\t\t\t\t\tif login is successful, otherwise false.\n */\nasync function loginUser(login, password) {\n\ttry {\n\t\tconst body = {\'username\': login, \'password\': password};\n\t\tconst response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.post)(\'http://5.188.140.7:8080/signin\', body);\n\t\treturn true;\n\n\t} catch (error) {\n\t\tconsole.error(error);\n\t\treturn false;\n\t}\n}\n\n/**\n * Registers a new user.\n * \n * @param {string} login - The username of the new user.\n * @param {string} password - The password of the new user.\n * @param {string} gender - The gender of the new user.\n * @param {string} age - The age of the new user.\n * @returns {Promise<boolean>} - A promise that resolves to true \n * \t\t\t\t\t\t\t\tif registration is successful, otherwise false.\n */\nasync function registerUser(login, password, gender, age) {\n\ttry {\n\t\tconst body = {\n\t\t\t\'username\': login, \n\t\t\t\'password\': password, \n\t\t\t\'gender\': gender, \n\t\t\t\'age\': parseInt(age)\n\t\t};\n\t\tconst response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.post)(\'http://5.188.140.7:8080/signup\', body);\n\t\treturn true;\n\n\t} catch (error) {\n\t\tconsole.error(error);\n\t\treturn false;\n\t}\n}\n\n/**\n * Fetches the list of users.\n * \n * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.\n */\nasync function fetchUsers() {\n\ttry {\n\t\tconst response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)(\'http://5.188.140.7:8080/getusers\');\n\t\treturn response.json();\n\n\t} catch (error) {\n\t\tconsole.error(error);\n\t\treturn [];\n\t}\n}\n\n/**\n * Checks if the user is authenticated.\n * \n * @returns {Promise<boolean>} - A promise that resolves to true\n * \t\t\t\t\t\t\t\tif the user is authenticated, otherwise false.\n */\nasync function checkAuth() {\n\ttry {\n\t\tconst response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)(\'http://5.188.140.7:8080/checkauth\');\n\t\treturn true;\n\n\t} catch (error) {\n\t\tconsole.error(error);\n\t\treturn false;\n\t}\n}\n\n/**\n * Logs out the user.\n * \n * @returns {Promise<boolean>} - A promise that resolves to true \n * \t\t\t\t\t\t\t\tif logout is successful, otherwise false.\n */\nasync function logout() {\n\ttry {\n\t\tconst response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)(\'http://5.188.140.7:8080/logout\');\n\t\treturn true;\n\n\t} catch (error) {\n\t\tconsole.error(error);\n\t\treturn false;\n\t}\n}\n\n//# sourceURL=webpack://sarafun/./src/modules/apiService.js?');

			/***/ }),

		/***/ './src/modules/router.js':
		/*!*******************************!*\
  !*** ./src/modules/router.js ***!
  \*******************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _pages_login_login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/login/login.js */ "./src/pages/login/login.js");\n/* harmony import */ var _pages_feed_feed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/feed/feed.js */ "./src/pages/feed/feed.js");\n/* harmony import */ var _pages_signup_signup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/signup/signup.js */ "./src/pages/signup/signup.js");\n\n\n\n\n/**\n * Creates a router configuration object.\n * \n * @returns {Object} - The router configuration object.\n * @returns {Object} feed - The feed route configuration.\n * @returns {string} feed.path - The path for the feed route.\n * @returns {string} feed.handle - The handle for the feed route.\n * @returns {Function} feed.componentName - The component to render for the feed route.\n * @returns {Object} login - The login route configuration.\n * @returns {string} login.path - The path for the login route.\n * @returns {string} login.handle - The handle for the login route.\n * @returns {Function} login.componentName - The component to render for the login route.\n * @returns {Object} signup - The signup route configuration.\n * @returns {string} signup.path - The path for the signup route.\n * @returns {string} signup.handle - The handle for the signup route.\n * @returns {Function} signup.componentName - The component to render for the signup route.\n */\nconst createRouter = () => ({\n\tfeed: {\n\t\tpath: \'/feed\',\n\t\thandle: \'Главная\',\n\t\tcomponentName: _pages_feed_feed_js__WEBPACK_IMPORTED_MODULE_1__.FeedPage,\n\t},\n\tlogin: {\n\t\tpath: \'/login\',\n\t\thandle: \'Авторизация\',\n\t\tcomponentName: _pages_login_login_js__WEBPACK_IMPORTED_MODULE_0__.LoginPage,\n\t},\n\tsignup: {\n\t\tpath: \'/signup\',\n\t\thandle: \'Регистрация\',\n\t\tcomponentName: _pages_signup_signup_js__WEBPACK_IMPORTED_MODULE_2__.RegistrationPage,\n\t},\n});\n\n//# sourceURL=webpack://sarafun/./src/modules/router.js?');

			/***/ }),

		/***/ './src/modules/validation.js':
		/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isValidLogin: () => (/* binding */ isValidLogin),\n/* harmony export */   isValidPassword: () => (/* binding */ isValidPassword)\n/* harmony export */ });\n/**\n * Validates if the given password meets the required criteria.\n * \n * @param {string} password - The password to validate.\n * @returns {boolean} - Returns true if the password is valid, otherwise false.\n */\nfunction isValidPassword(password) {\n\tif (!password) {\n\t\treturn false;\n\t}\n\tif (password.length < 6 || password.length > 40) {\n\t\treturn false;\n\t}\n\n\tif (!/\\d/.test(password)) {\n\t\treturn false;\n\t}\n\n\tfor (let char of password) {\n\t\tif (!/[a-zA-Z0-9*?!$]/.test(char)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\treturn true;\n}\n\n/**\n * Validates if the given login meets the required criteria.\n * \n * @param {string} login - The login to validate.\n * @returns {boolean} - Returns true if the login is valid, otherwise false.\n */\nfunction isValidLogin(login) {\n\tif (login.length < 5 || login.length > 15) {\n\t\treturn false;\n\t}\n    \n\tconst invalidChars = /[^a-zA-Z0-9_-]/;\n\tif (invalidChars.test(login)) {\n\t\treturn false;\n\t}\n    \n\tif ((login.startsWith(\'_\') || login.startsWith(\'-\')) || \n\t\t(login.endsWith(\'_\') || login.endsWith(\'-\'))) {\n\t\treturn false;\n\t}\n    \n\tif (/\\d/.test(login.charAt(0))) {\n\t\treturn false;\n\t}\n    \n\treturn true;\n}\n\n//# sourceURL=webpack://sarafun/./src/modules/validation.js?');

			/***/ }),

		/***/ './src/pages/feed/feed.js':
		/*!********************************!*\
  !*** ./src/pages/feed/feed.js ***!
  \********************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FeedPage: () => (/* binding */ FeedPage)\n/* harmony export */ });\n/* harmony import */ var _modules_apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/apiService.js */ "./src/modules/apiService.js");\n/* harmony import */ var _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Navbar/navbar.js */ "./src/components/Navbar/navbar.js");\n\n\n\n/**\n * Class representing the Feed Page.\n */\nclass FeedPage {\n\t/**\n     * Creates an instance of FeedPage.\n     * @param {Object} parent - The parent object containing the root element.\n     */\n\tconstructor(parent) {\n\t\tthis.parent = parent;\n\t\tthis.parent.root.innerHTML = \'\';\n\t\tthis.render().then(() => {;\n\t\t\tthis.navbar = new _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector(\'nav\'), parent);\n\t\t});\n\t}\n\n\t/**\n     * Renders the feed page by fetching users and initializing cards.\n     * @returns {Promise<void>} - A promise that resolves when the rendering is complete.\n     */\n\tasync render() {\n\t\tlet users = await (0,_modules_apiService_js__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)();\n\t\tif (users.length === 0) {\n\t\t\tusers = [{username: \'Анкеты закончились :(\', gender: \'-\', age: \'-\'}];\n\t\t}\n\n\t\t/**\n         * Initializes the cards by setting their styles and adding them to the container.\n         */\n\t\tfunction initCards() { \n\t\t\tlet newCards = document.querySelectorAll(\'.tinder--card:not(.removed)\');\n\t\t\n\t\t\tnewCards.forEach(function (card, index) {\n\t\t\t\tcard.style.zIndex = allCards.length - index;\n\t\t\t\tcard.style.transform = \n\t\t\t\t\t\'scale(\' + (20 - index) / 20 + \') \' + \n\t\t\t\t\t\'translateY(-\' + 30 * index + \'px)\';\n\t\t\t\tcard.style.opacity = (10 - index) / 10;\n\t\t\t});\n\t\t\t\t\n\t\t\ttinderContainer.classList.add(\'loaded\');\n\t\t}\n\n\t\tthis.parent.root.innerHTML = template({ users });\n\t\tvar tinderContainer = document.querySelector(\'.tinder\');\n\t\tvar allCards = document.querySelectorAll(\'.tinder--card\');\n\t\tlet nope = document.getElementById(\'nope\');\n\t\tlet love = document.getElementById(\'love\');\n\t\tinitCards();\n\n\t\tallCards.forEach(function (el) {\n\t\t\tlet startX, startY, currentX, currentY, initialX, initialY;\n\t\t\tlet isDragging = false;\n\t\t\t\n\t\t\t/**\n             * Starts the drag event.\n             * @param {Event} event - The drag start event.\n             */\n\t\t\tfunction startDrag(event) {\n\t\t\t\tisDragging = true;\n\t\t\t\tstartX = event.type === \'touchstart\' ? event.touches[0].clientX : event.clientX;\n\t\t\t\tstartY = event.type === \'touchstart\' ? event.touches[0].clientY : event.clientY;\n\t\t\t\tif (el.style.transform && el.style.transform.includes(\'translate\')) {\n\t\t\t\t\tlet transformValues = el.style.transform.match(/translate\\(([^,]+),\\s*([^)]+)\\)/);\n\t\t\t\t\tif (transformValues) {\n\t\t\t\t\t\tinitialX = parseFloat(transformValues[1]);\n\t\t\t\t\t\tinitialY = parseFloat(transformValues[2]);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tinitialX = 0;\n\t\t\t\t\t\tinitialY = 0;\n\t\t\t\t\t}\n\t\t\t  \t} else {\n\t\t\t\t\tinitialX = 0;\n\t\t\t\t\tinitialY = 0;\n\t\t\t  \t}\n\t\t\t  \tel.classList.add(\'moving\');\n\t\t\t}\n\t\t\t\n\t\t\t/**\n             * Handles the drag event.\n             * @param {Event} event - The drag event.\n             */\n\t\t\tfunction drag(event) {\n\t\t\t\tif (!isDragging) {return;}\n\t\t\t\n\t\t\t\tcurrentX = event.type === \'touchmove\' ? event.touches[0].clientX : event.clientX;\n\t\t\t\tcurrentY = event.type === \'touchmove\' ? event.touches[0].clientY : event.clientY;\n\t\t\t\n\t\t\t\tlet deltaX = currentX - startX;\n\t\t\t\tlet deltaY = currentY - startY;\n\t\t\t\n\t\t\t\ttinderContainer.classList.toggle(\'tinder_love\', deltaX > 0);\n\t\t\t\ttinderContainer.classList.toggle(\'tinder_nope\', deltaX < 0);\n\t\t\t\n\t\t\t\tlet xMulti = deltaX * 0.03;\n\t\t\t\tlet yMulti = deltaY / 80;\n\t\t\t\tlet rotate = xMulti * yMulti;\n\t\t\t\n\t\t\t\tel.style.transform = \n\t\t\t\t\t\'translate(\' + (initialX + deltaX) + \'px, \' + \n\t\t\t\t\t(initialY + deltaY) + \'px) rotate(\' + rotate + \'deg)\';\n\t\t\t}\n\t\t\t\n\t\t\t/**\n             * Ends the drag event.\n             */\n\t\t\tfunction endDrag() {\n\t\t\t\tif (!isDragging) {return;}\n\t\t\t\tisDragging = false;\n\t\t\t\n\t\t\t\tel.classList.remove(\'moving\');\n\t\t\t\ttinderContainer.classList.remove(\'tinder_love\');\n\t\t\t\ttinderContainer.classList.remove(\'tinder_nope\');\n\t\t\t\n\t\t\t\tlet deltaX = currentX - startX;\n\t\t\t\tlet deltaY = currentY - startY;\n\t\t\t\tlet moveOutWidth = document.body.clientWidth;\n\t\t\t\tlet keep = Math.abs(deltaX) < 80;\n\t\t\t\n\t\t\t\tel.classList.toggle(\'removed\', !keep);\n\t\t\t\n\t\t\t\tif (keep) {\n\t\t\t\t\tel.style.transform = \'\';\n\t\t\t  \t} else {\n\t\t\t\t\tlet toX = deltaX > 0 ? moveOutWidth : -moveOutWidth;\n\t\t\t\t\tlet toY = deltaY;\n\t\t\t\t\tlet xMulti = deltaX * 0.03;\n\t\t\t\t\tlet yMulti = deltaY / 80;\n\t\t\t\t\tlet rotate = xMulti * yMulti;\n\t\t\n\t\t\t\t\tel.style.transform = \'translate(\' + toX + \'px, \' + toY + \'px) rotate(\' + rotate + \'deg)\';\n\t\t\t\t\tinitCards();\n\t\t\t  \t}\n\t\t\t}\n\t  \n\t\t\tel.addEventListener(\'mousedown\', startDrag);\n\t\t\tel.addEventListener(\'mousemove\', drag);\n\t\t\tel.addEventListener(\'mouseup\', endDrag);\n\t\t\tel.addEventListener(\'mouseleave\', endDrag);\n\t  \n\t\t\tel.addEventListener(\'touchstart\', startDrag);\n\t\t\tel.addEventListener(\'touchmove\', drag);\n\t\t\tel.addEventListener(\'touchend\', endDrag);\n\t\t\tel.addEventListener(\'touchcancel\', endDrag);\n\t\t});\n\t\t\n\t\t/**\n         * Creates a button listener for the like or dislike buttons.\n         * @param {boolean} love - Indicates if the button is for liking (true) or disliking (false).\n         * @returns {Function} - The event listener function.\n         */\n\t\tfunction createButtonListener(love) {\n\t\t\treturn function (event) {\n\t\t\t\tlet cards = document.querySelectorAll(\'.tinder--card:not(.removed)\');\n\t\t\t\tlet moveOutWidth = document.body.clientWidth * 1.5;\n\t\t\t\n\t\t\t\tif (!cards.length) {return false;}\n\t\t\t\n\t\t\t\tlet card = cards[0];\n\t\t\t\n\t\t\t\tcard.classList.add(\'removed\');\n\t\t\t\n\t\t\t\tif (love) {\n\t\t\t\t\tcard.style.transform = \'translate(\' + moveOutWidth + \'px, -100px) rotate(-30deg)\';\n\t\t\t\t} else {\n\t\t\t\t\tcard.style.transform = \'translate(-\' + moveOutWidth + \'px, -100px) rotate(30deg)\';\n\t\t\t\t}\n\t\t\t\n\t\t\t\tinitCards();\n\t\t\t\n\t\t\t\tevent.preventDefault();\n\t\t\t};\n\t\t}\n  \n\t\tlet nopeListener = createButtonListener(false);\n\t\tlet loveListener = createButtonListener(true);\n\t\t\n\t\tnope.addEventListener(\'click\', nopeListener);\n\t\tlove.addEventListener(\'click\', loveListener);\n\t}\n}\n\n//# sourceURL=webpack://sarafun/./src/pages/feed/feed.js?');

			/***/ }),

		/***/ './src/pages/login/login.js':
		/*!**********************************!*\
  !*** ./src/pages/login/login.js ***!
  \**********************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginPage: () => (/* binding */ LoginPage)\n/* harmony export */ });\n/* harmony import */ var _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar/navbar.js */ "./src/components/Navbar/navbar.js");\n/* harmony import */ var _modules_apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/apiService.js */ "./src/modules/apiService.js");\n\n\n\n/**\n * Class representing the login page.\n */\nclass LoginPage {\n\t/**\n   * Creates an instance of LoginPage.\n   * @param {Object} parent - The parent object.\n   */\n\tconstructor(parent) {\n\t\tthis.parent = parent;\n\t\tthis.parent.root.innerHTML = \'\';\n\t\tthis.parent.root.innerHTML = this.render();\n\t\tthis.addEventListeners();\n\t\tthis.navbar = new _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector(\'nav\'), parent);\n\t}\n\n\t/**\n   * Renders the login page template.\n   * @returns {string} - The HTML string of the login page template.\n   */\n\trender() {\n\t\treturn template();\n\t}\n\n\t/**\n   * Adds event listeners to the login page elements.\n   */\n\taddEventListeners() {\n\t\tdocument.getElementById(\'link\').addEventListener(\'click\', (event) => {\n\t\t\tevent.preventDefault();\n\t\t\tconst url = new URL(event.target.href);\n\t\t\tconst path = url.pathname;\n\t\t\tthis.parent.render(path);\n\t\t});\n\n\t\tdocument.querySelector(\'button\').addEventListener(\'click\', async () => {\n\t\t\tconst login = document.getElementById(\'login\').value;\n\t\t\tconst password = document.getElementById(\'password\').value;\n\n\t\t\tlet valid = true;\n\n\t\t\tif (!login) {\n\t\t\t\tdocument.getElementById(\'login-error\').style.display = \'block\';\n\t\t\t\tvalid = false;\n\t\t\t} else {\n\t\t\t\tdocument.getElementById(\'login-error\').style.display = \'none\';\n\t\t\t}\n\n\t\t\tif (!password) {\n\t\t\t\tdocument.getElementById(\'password-error\').style.display = \'block\';\n\t\t\t\tvalid = false;\n\t\t\t} else {\n\t\t\t\tdocument.getElementById(\'password-error\').style.display = \'none\';\n\t\t\t}\n\n\t\t\tif (valid) {\n\t\t\t\ttry {\n\t\t\t\t\tconst isLogedIn = await (0,_modules_apiService_js__WEBPACK_IMPORTED_MODULE_1__.loginUser)(login, password);\n\t\t\t\t\tif (!isLogedIn) {\n\t\t\t\t\t\tdocument.getElementById(\'login-password-error\').style.display = \'block\';            \n\t\t\t\t\t} else { \n\t\t\t\t\t\tthis.parent.render(\'/feed\');\n\t\t\t\t\t}\n\t\t\t\t} catch (error) {\n\t\t\t\t\tconsole.error(error);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tconsole.error(\'Error in authorization\');\n\t\t\t}\n\t\t});\n\t}\n}\n\n//# sourceURL=webpack://sarafun/./src/pages/login/login.js?');

			/***/ }),

		/***/ './src/pages/signup/signup.js':
		/*!************************************!*\
  !*** ./src/pages/signup/signup.js ***!
  \************************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegistrationPage: () => (/* binding */ RegistrationPage)\n/* harmony export */ });\n/* harmony import */ var _modules_apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/apiService.js */ "./src/modules/apiService.js");\n/* harmony import */ var _modules_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/validation.js */ "./src/modules/validation.js");\n/* harmony import */ var _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar/navbar.js */ "./src/components/Navbar/navbar.js");\n\n\n\n\n\n/**\n * Class representing the registration page.\n */\nclass RegistrationPage {\n\t/**\n   * Creates an instance of RegistrationPage.\n   * @param {Object} parent - The parent object.\n   */\n\tconstructor(parent) {\n\t\tthis.parent = parent;\n\t\tthis.parent.root.innerHTML = \'\';\n\t\tthis.parent.root.innerHTML = this.render();\n\t\tthis.addEventListeners();\n\t\tthis.navbar = new _components_Navbar_navbar_js__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector(\'nav\'), parent);\n\t}\n  \n\t/**\n   * Renders the registration page template.\n   * @returns {string} - The HTML string of the registration page template.\n   */\n\trender() {\n\t\treturn template();\n\t}\n\n\t/**\n   * Adds event listeners to the registration page elements.\n   */\n\taddEventListeners() {\n\t\tdocument.getElementById(\'link\').addEventListener(\'click\', (event) => {\n\t\t\tevent.preventDefault();\n\t\t\tconst url = new URL(event.target.href);\n\t\t\tconst path = url.pathname;\n\t\t\tthis.parent.render(path);\n\t\t});\n\n\t\tdocument.querySelector(\'button\').addEventListener(\'click\', async () => {\n\t\t\tconst login = document.getElementById(\'login\').value;\n\t\t\tconst password = document.getElementById(\'password\').value;\n\t\t\tconst gender = document.querySelector(\'input[name="gender"]:checked\').value;\n\t\t\tconst age = document.getElementById(\'age\').value;\n\n\t\t\tlet valid = true;\n\n\t\t\tif (!(0,_modules_validation_js__WEBPACK_IMPORTED_MODULE_1__.isValidLogin)(login)) {\n\t\t\t\tdocument.getElementById(\'login-error\').style.display = \'block\';\n\t\t\t\tvalid = false;\n\t\t\t} else {\n\t\t\t\tdocument.getElementById(\'login-error\').style.display = \'none\';\n\t\t\t}\n\n\t\t\tif (!(0,_modules_validation_js__WEBPACK_IMPORTED_MODULE_1__.isValidPassword)(password)) {\n\t\t\t\tdocument.getElementById(\'password-error\').style.display = \'block\';\n\t\t\t\tvalid = false;\n\t\t\t} else {\n\t\t\t\tdocument.getElementById(\'password-error\').style.display = \'none\';\n\t\t\t}\n\n\t\t\tif (valid) {\n\t\t\t\ttry {\n\t\t\t\t\tconst isSignedUp = await (0,_modules_apiService_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)(login, password, gender, age);\n\t\t\t\t\tif (!isSignedUp) {\n\t\t\t\t\t\tdocument.getElementById(\'login-password-error\').style.display = \'block\';            \n\t\t\t\t\t} else { \n\t\t\t\t\t\tthis.parent.render(\'/feed\');\n\t\t\t\t\t}\n\t\t\t\t\tthis.parent.render(\'/feed\');\n\t\t\t\t} catch (error) {\n\t\t\t\t\tconsole.error(error);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n}\n\n//# sourceURL=webpack://sarafun/./src/pages/signup/signup.js?');

			/***/ })

		/******/ 	});
	/************************************************************************/
	/******/ 	// The module cache
	/******/ 	let __webpack_module_cache__ = {};
	/******/ 	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
		/******/ 		// Check if module is in cache
		/******/ 		let cachedModule = __webpack_module_cache__[moduleId];
		/******/ 		if (cachedModule !== undefined) {
			/******/ 			return cachedModule.exports;
			/******/ 		}
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		let module = __webpack_module_cache__[moduleId] = {
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
	/******/ 	/* webpack/runtime/async module */
	/******/ 	(() => {
		/******/ 		let webpackQueues = typeof Symbol === 'function' ? Symbol('webpack queues') : '__webpack_queues__';
		/******/ 		let webpackExports = typeof Symbol === 'function' ? Symbol('webpack exports') : '__webpack_exports__';
		/******/ 		let webpackError = typeof Symbol === 'function' ? Symbol('webpack error') : '__webpack_error__';
		/******/ 		let resolveQueue = (queue) => {
			/******/ 			if(queue && queue.d < 1) {
				/******/ 				queue.d = 1;
				/******/ 				queue.forEach((fn) => (fn.r--));
				/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
				/******/ 			}
			/******/ 		};
		/******/ 		let wrapDeps = (deps) => (deps.map((dep) => {
			/******/ 			if(dep !== null && typeof dep === 'object') {
				/******/ 				if(dep[webpackQueues]) {return dep;}
				/******/ 				if(dep.then) {
					/******/ 					let queue = [];
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
			/******/ 			let ret = {};
			/******/ 			ret[webpackQueues] = x => {};
			/******/ 			ret[webpackExports] = dep;
			/******/ 			return ret;
			/******/ 		}));
		/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
			/******/ 			let queue;
			/******/ 			hasAwait && ((queue = []).d = -1);
			/******/ 			let depQueues = new Set();
			/******/ 			let exports = module.exports;
			/******/ 			let currentDeps;
			/******/ 			let outerResolve;
			/******/ 			let reject;
			/******/ 			let promise = new Promise((resolve, rej) => {
				/******/ 				reject = rej;
				/******/ 				outerResolve = resolve;
				/******/ 			});
			/******/ 			promise[webpackExports] = exports;
			/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise['catch'](x => {}));
			/******/ 			module.exports = promise;
			/******/ 			body((deps) => {
				/******/ 				currentDeps = wrapDeps(deps);
				/******/ 				let fn;
				/******/ 				let getResult = () => (currentDeps.map((d) => {
					/******/ 					if(d[webpackError]) {throw d[webpackError];}
					/******/ 					return d[webpackExports];
					/******/ 				}));
				/******/ 				let promise = new Promise((resolve) => {
					/******/ 					fn = () => (resolve(getResult));
					/******/ 					fn.r = 0;
					/******/ 					let fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
					/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
					/******/ 				});
				/******/ 				return fn.r ? promise : getResult();
				/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
			/******/ 			queue && queue.d < 0 && (queue.d = 0);
			/******/ 		};
		/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/define property getters */
	/******/ 	(() => {
		/******/ 		// define getter functions for harmony exports
		/******/ 		__webpack_require__.d = (exports, definition) => {
			/******/ 			for(let key in definition) {
				/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
					/******/ 				}
				/******/ 			}
			/******/ 		};
		/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
	/******/ 	(() => {
		/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
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
	/************************************************************************/
	/******/ 	
	/******/ 	// startup
	/******/ 	// Load entry module and return exports
	/******/ 	// This entry module can't be inlined because the eval devtool is used.
	/******/ 	let __webpack_exports__ = __webpack_require__('./src/index.js');
/******/ 	
/******/ })()
;