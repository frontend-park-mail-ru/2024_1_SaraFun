import { checkAuth } from '../features/checkAuth';
import { ROUTES, ROUTES_NAME } from '../shared/constants/routes';
import { Router } from './Router';

/**
 * Class representing the main application.
 */
export default class App {
	private state: { isAuthenticated: boolean } = { isAuthenticated: false };
	private root: HTMLElement;
	private router: Router;

	/**
     * Creates an instance of App.
     * @param {HTMLElement} root - The root element for rendering the application.
     */
	constructor(root: HTMLElement) {
		this.root = root;
		this.router = new Router(root);
	}

	/**
     * Initializes the application by checking authentication and rendering the appropriate page.
     * @returns {Promise<void>} - A promise that resolves after initialization.
     */
	async init(): Promise<void> {
		try {
			this.state.isAuthenticated = await checkAuth();
			ROUTES.forEach(({ path, view, isPublic })=> {
				this.router.register(path, view, isPublic);
			});

			this.router.start(this.state.isAuthenticated);

			if (!this.state.isAuthenticated) {
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