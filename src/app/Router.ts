/**
 * Class representing a router for managing navigation in a web application.
 */
export class Router {
	private static instance: Router;
	private root: HTMLElement;
	private isAuth: boolean;
	private routes: Map<string, { view: any, isPublic: boolean }>;
	private currentRoute: { path: string, view: any };
	/**
	 * Creates an instance of Router.
	 *
	 * @param {HTMLElement} root - The root element of the application where views will be rendered.
	 * @returns {Router} - The instance of the Router.
	 */
	constructor(root: HTMLElement) {
		if (Router.instance) {
			return Router.instance;
		}
		this.root = root;
		this.isAuth = false;
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
	register(path: string, view: any, isPublic: boolean): Router {
		this.routes.set(path, { view, isPublic });
		return this;
	}

	/**
	 * Starts the router by setting up event listeners and navigating to the initial route.
	 */
	start(isAuth: boolean): void {
		this.isAuth = isAuth;
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
	navigateTo(path: string, addToHistory: boolean = true): void {
		const route = this.routes.get(path);
		if (!route.isPublic && !this.isAuth) {
			this.navigateTo('/login');
			return;
		}
		if (route.isPublic && this.isAuth) {
			this.navigateTo('/feed');
			return;
		}
		
		const view = route.view;
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
	back(): void {
		window.history.back();
	}

	/**
	 * Navigates to the next page in the browser history.
	 */
	forward(): void {
		window.history.forward();
	}
}