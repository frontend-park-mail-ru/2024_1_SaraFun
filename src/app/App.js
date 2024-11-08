import { checkAuth } from '../features/checkAuth.js';
import { ROUTES, ROUTES_NAME } from '../shared/constants/routes.js';

import { Router } from './router.js';

/**
 * Class representing the main application.
 */
export default class App {
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
		this.router = new Router(root);
	}

	/**
     * Initializes the application by checking authentication and rendering the appropriate page.
     * @returns {Promise<void>} - A promise that resolves after initialization.
     */
	async init() {
		try {
			this.#state.isAuthenticated = await checkAuth();
			ROUTES.forEach(({ path, view, isPublic })=> {
				this.router.register(path, view, isPublic);
			});

			this.router.start(this.#state.isAuthenticated);

			if (!this.#state.isAuthenticated) {
				this.router.navigateTo(ROUTES.get(ROUTES_NAME.LOGIN).path);
				console.log("false");
			}
			else {
				this.router.navigateTo(window.location.pathname);
				console.log("true");
			}

		} catch (error) {
			this.router.navigateTo(ROUTES.get(ROUTES_NAME.LOGIN).path);
		}
	}
}