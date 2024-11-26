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
		if (this.curRoute === path) {
			return;
		}

		const route = this.findRoute(path);
		//const route = this.publicRoutes.get(path) || this.privateRoutes.get(path);

		if (this.privateRoutes.has(route.path) && !this.isAuth) {
			const firstPublicRoute = Array.from(this.publicRoutes.keys())[0];
    		this.navigateTo(firstPublicRoute);
			return;
		}
		if (this.publicRoutes.has(route.path) && this.isAuth) {
			const firstPrivateRoute = Array.from(this.privateRoutes.keys())[0];
    		this.navigateTo(firstPrivateRoute);
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
				const params = this.extractParams(route.path, path);
            	new view(this, params);
			} else {
      			new view(this);
			}
    	} 
	}

	private extractParams(routePath: string, currentPath: string): any {
		const params: any = {};
		const routeParts = routePath.split('/');
		const currentParts = currentPath.split('/');
		for (let i = 0; i < routeParts.length; i++) {
			if (routeParts[i].startsWith(':')) {
				const paramName = routeParts[i].substring(1);
				params[paramName] = currentParts[i];
			}
		}
		return params;
	}

	private findRoute(path: string): any {
        for (const [routePath, route] of this.publicRoutes) {
            if (this.matchRoute(routePath, path, route.useParams)) {
                return { ...route, path: routePath };
            }
        }
        for (const [routePath, route] of this.privateRoutes) {
            if (this.matchRoute(routePath, path, route.useParams)) {
                return { ...route, path: routePath };
            }
        }
        return null;
    }

	private matchRoute(routePath: string, currentPath: string, useParams: boolean): boolean {
        if (!useParams) {
            return routePath === currentPath;
        }
        const routeParts = routePath.split('/');
        const currentParts = currentPath.split('/');
        if (routeParts.length !== currentParts.length) {
            return false;
        }
        for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
                continue;
            }
            if (routeParts[i] !== currentParts[i]) {
                return false;
            }
        }
        return true;
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