import { checkAuth } from '../features/checkAuth.js';
import { Router } from './router.js';
import { ROUTES, ROUTES_NAME } from '../shared/constants/routes.js';

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

			ROUTES.forEach(({ path, view })=> {
				this.router.register(path, view);
			});

			this.router.start();

			if (!this.#state.isAuthenticated) {
				this.router.navigateTo(ROUTES.get(ROUTES_NAME.LOGIN).path);
			}
			else {
				this.router.navigateTo(window.location.pathname);
			}

		} catch (error) {
			this.router.navigateTo(ROUTES.get(ROUTES_NAME.LOGIN).path);
		}
	}
}