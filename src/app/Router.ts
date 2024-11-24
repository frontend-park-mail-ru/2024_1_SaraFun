/**
 * Class representing a router for managing navigation in a web application.
 */
export class Router {
	private static instance: Router;
	private parent: any;
	private publicRoutes: Map<string, { view: any; regex: RegExp; paramNames: string[] }>;
	private privateRoutes: Map<string, { view: any; regex: RegExp; paramNames: string[] }>;
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
	register(path: string, view: any, isPublic: boolean): Router {
		const paramNames: string[] = [];
    	let regex: RegExp | null = null;

		if (path.includes(':')) {
			const regexPath = path.replace(/:([^\/]+)/g, (_, paramName) => {
				paramNames.push(paramName);
				return '([^\/]+)';
			});
			regex = new RegExp(`^${regexPath}$`);
		}

		const route = { view, regex, paramNames };

		if (isPublic) {
			this.publicRoutes.set(path, route);
		} else {
			this.privateRoutes.set(path, route);
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
		console.log(this.privateRoutes);
		console.log(this.publicRoutes);
	}

	/**
	 * Navigates to the specified path.
	 *
	 * @param {string} path - The path to navigate to.
	 * @param {boolean} addToHistory - Whether to add the navigation to the browser history. Defaults to true.
	 */
	navigateTo(path: string, addToHistory: boolean = true): void {
		if (path === this.curRoute) {
			return;
		}

		const route = this.findRoute(path, this.privateRoutes) || this.findRoute(path, this.publicRoutes);

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

		if (!route.regex && path !== route.path) {
			this.navigateTo('/login');
			return;
		}

		const view = route.view;
    	if (view) {
			this.curRoute = path;
			this.parent.setCurRoute(path);
			if (addToHistory) {
				history.pushState({}, '', path);
			}
			if (route.params) {
      			new view(this, route.params);
			} else {
				new view(this);
			}
    	} 
	}

	findRoute(path: string, routes: Map<string, any>): any {
		for (const [routePath, route] of routes) {
			if (route.regex) {
				const match = path.match(route.regex);
				if (match) {
					const params = route.paramNames.reduce((acc: { [key: string]: string }, paramName: string, index: number) => {
						acc[paramName] = match[index + 1];
						return acc;
					}, {});
					return { ...route, path: routePath, params };
				}
			} else if (routePath === path) {
				return { ...route, path: routePath, params: {} };
			}
		}
		return null;
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