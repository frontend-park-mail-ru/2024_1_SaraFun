import { checkAuth } from '../features/checkAuth';
import { ROUTES, ROUTES_NAME } from '../shared/constants/routes';
import { Router } from './Router';
import Navbar from '../widgets/Navbar/navbar';
import template from './layouts/baseLayout.pug';

/**
 * Class representing the main application.
 */
export default class App {
	private state: { isAuthenticated: boolean, currentRoute: any } = { isAuthenticated: false, currentRoute: null };
	private root: HTMLElement;
	private contentRoot: HTMLElement;
	private navbarRoot: HTMLElement;
	private router: Router;
	private navbar: Navbar;

	/**
     * Creates an instance of App.
     * @param {HTMLElement} root - The root element for rendering the application.
     */
	constructor(root: HTMLElement) {
		this.root = root;
		this.root.innerHTML = template();
		this.navbarRoot = this.root.querySelector('.navbarRoot') as HTMLElement;
		this.contentRoot = this.root.querySelector('.contentRoot') as HTMLElement;
		this.router = new Router(this, this.contentRoot);
		this.navbar = new Navbar(this.router);
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

			this.router.setAuth(this.state.isAuthenticated);
			this.router.start();

			this.navbarRoot.innerHTML = this.navbar.render();
			this.navbar.componentDidMount();

		} catch (error) {
			this.router.navigateTo(ROUTES.get(ROUTES_NAME.LOGIN).path);
		}
	}

	setAuth(isAuth: boolean): void {
		this.state.isAuthenticated = isAuth;
		this.navbar.setAuth(isAuth);
		this.navbarRoot.innerHTML = '';
		this.navbarRoot.innerHTML = this.navbar.render();
		this.navbar.componentDidUpdate();
	}

	setCurRoute(route: string): void {
		this.state.currentRoute = route;
		this.navbar.setCurRoute(route);
		this.navbar.componentDidUpdateActiveLink();
	}

	getAuth(): boolean {	
		return this.state.isAuthenticated;
	}

	getCurRoute(): string {
		return this.state.currentRoute;
	}
}