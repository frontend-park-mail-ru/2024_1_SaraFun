import {checkAuth} from '../features/checkAuth.js';
import {createRouter} from './router.js';

/**
 * Class representing the main application.
 */
export default class App {
	#state = {};
	root;

	/**
   * Creates an instance of App.
   * @param {HTMLElement} root - The root element for rendering the application.
   */
	constructor(root) {
		this.root = root;
		this.#state.isAuthenticated = false;
		this.router = createRouter(this);
	}

	/**
   * Initializes the application by checking authentication and rendering the appropriate page.
   * @returns {Promise<void>} - A promise that resolves after initialization.
   */
	async init() {
		try {
			this.#state.isAuthenticated = await checkAuth();
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