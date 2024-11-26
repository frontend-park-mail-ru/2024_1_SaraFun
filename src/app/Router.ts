/**
 * Class representing a router for managing navigation in a web application.
 */
export class Router {
	private static instance: Router;
	private parent: any;
	private publicRoutes: Map<string, { view: any, useParams: boolean, params: any }>;
	private privateRoutes: Map<string, { view: any, useParams: boolean, params: any }>;
	private isAuth: boolean;
	private curRoute: string;
	
	root: HTMLElement;
	/**
	 * Creates an instance of Router.
	 *
	 * @param {HTMLElement} root - The root element of the application where views will be rendered.
	 * @returns {Router} - The instance of the Router.
	 */
	constructor(app: any, root: HTMLElement) {
		if (Router.instance) {
			return Router.instance;
		}
		this.parent = app;
		this.root = root;
		this.curRoute = '';
		this.isAuth = false;
		this.publicRoutes = new Map();
		this.privateRoutes = new Map();
		Router.instance = this;
	}

	getAuth(): boolean {
		return this.isAuth;
	}

	setAuth(isAuth: boolean): void {
		this.isAuth = isAuth;
		this.parent.setAuth(isAuth);
	}

	getCurRoute(): string {
		return this.curRoute;
	}

	/**
	 * Registers a route with its corresponding view.
	 *
	 * @param {string} path - The path of the route to register.
	 * @param {Function} view - The class of view associated with the route.
	 * @returns {Router} - The instance of the Router for chaining method calls.
	 */
	register(path: string, view: any, isPublic: boolean, useParams: boolean, params: any): Router {
		if (isPublic) {
			this.publicRoutes.set(path, { view, useParams, params });
		} else {
			this.privateRoutes.set(path, { view, useParams, params });
		}
		return this;
	}

	/**
	 * Starts the router by setting up event listeners and navigating to the initial route.
	 */
	start(): void {
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
		console.log(path);
		if (this.curRoute === path) {
			return;
		}

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

		const route = this.publicRoutes.get(path) || this.privateRoutes.get(path);

		if (path !== this.trimPath(path) && !route.useParams) {
			this.navigateTo(this.trimPath(path));
			return;
		}
		
		const view = route.view;
    	if (view) {
			this.curRoute = path;
			this.parent.setCurRoute(path);
			if (addToHistory) {
				history.pushState({}, '', path);
			}
			if (route.useParams) {
				//const params = this.extractParams(route.path, path);
            	new view(this);
			} else {
      			new view(this);
			}
    	} 
	}

	trimPath(path: string): string {
		const segments = path.split('/');
		if (segments.length > 2) {
		  return `/${segments[1]}`;
		}
		return path;
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