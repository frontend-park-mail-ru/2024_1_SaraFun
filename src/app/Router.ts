/**
 * Class representing a router for managing navigation in a web application.
 */
export class Router {
	private static instance: Router;
	private publicRoutes: Map<string, { view: any }>;
	private privateRoutes: Map<string, { view: any }>;
	
	curRoute: string;
	root: HTMLElement;
	isAuth: boolean;
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
		this.curRoute = '';
		this.isAuth = false;
		this.publicRoutes = new Map();
		this.privateRoutes = new Map();
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
		if (isPublic) {
			this.publicRoutes.set(path, { view });
		} else {
			this.privateRoutes.set(path, { view });
		}
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
		const route = this.publicRoutes.get(path) || this.privateRoutes.get(path);
		if (this.privateRoutes.has(path) && !this.isAuth) {
			const firstPublicRoute = Array.from(this.publicRoutes.keys())[0];
    		this.navigateTo(firstPublicRoute);
			return;
		}
		if (this.publicRoutes.has(path) && this.isAuth) {
			const firstPrivateRoute = Array.from(this.privateRoutes.keys())[0];
    		this.navigateTo(firstPrivateRoute);
			return;
		}
		
		const view = route.view;
    	if (view) {
			this.curRoute = path;
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