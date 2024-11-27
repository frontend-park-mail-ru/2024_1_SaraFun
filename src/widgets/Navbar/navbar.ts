import { logout } from './api/logout';
import {getProfile} from "../../pages/profile/api/getProfile";
import { Router } from '../../app/Router';
import template from './ui/Navbar.pug';

/**
 * Class representing the navigation bar.
 */
export default class Navbar {
	private parent: Router;
	private isAuth: boolean;
	private curRoute: string;
	/**
   * Creates an instance of Navbar.
   * @param {Object} app - The application instance.
   */
	constructor(parent: Router) {
		this.parent = parent;
		this.isAuth = parent.getAuth();
		this.curRoute = parent.getCurRoute();
	}

	render(): string {
		return template({isAuth: this.isAuth, curRoute: this.curRoute});
	}

	componentDidMount(): void {
		this.addEventListeners();
		this.getUserAvatar();
		this.componentDidUpdateActiveLink();
	}

	setAuth(isAuth: boolean): void {
		this.isAuth = isAuth;
	}

	setCurRoute(curRoute: string): void {
		this.curRoute = curRoute;
	}

	componentDidUpdate(): void {
		this.isAuth = this.parent.getAuth();
		this.curRoute = this.parent.getCurRoute();
		this.getUserAvatar();
		this.addEventListeners();
	}

	componentDidUpdateActiveLink(): void {
		const links = document.querySelectorAll('li a');
		links.forEach(link => {
			link.classList.remove('navbar__link--active');
		});
		const activeLink = document.querySelector(`li a[href="${this.curRoute}"]`);
		if (activeLink) {
			activeLink.classList.add('navbar__link--active');
		}
	}

	async getUserAvatar(): Promise<void> {
		if (!this.isAuth) {
			return;
		}

		const userData = await getProfile();
		const avatarSrc = userData?.imagesURLs?.[0] ?? './img/user.svg';
		const avatarImg = document.querySelector('.user-avatar__image');
		avatarImg.setAttribute('src', avatarSrc);
	}
  
	/**
   * Adds event listeners to the navigation links and logout button.
   */
	addEventListeners(): void {
		const navLinks = document.querySelectorAll('li a');

		navLinks.forEach(link => {
			link.addEventListener('click', (event) => {
				event.preventDefault();
				const path = link.getAttribute('href');
				this.parent.navigateTo(path);
			});
		});
      
		const button = document.getElementById('button-logout');
		if (button) {
			button.addEventListener('click', async () => {
				await logout();
				this.parent.setAuth(false);
				this.parent.navigateTo('/login');
			});
		}

		const logoLink = document.querySelector('.navbar__logo__link');
		if (logoLink) {
			logoLink.addEventListener('click', (event) => {
				event.preventDefault();
				const path = logoLink.getAttribute('href');
				this.parent.navigateTo(path);
			});
		}

		const profileLink = document.querySelector('li.nav-link a[href="/profile"]');
		if (profileLink) {
			profileLink.addEventListener('click', (event) => {
				event.preventDefault();
				this.parent.navigateTo('/profile');
			});
		}

		const avatarImage = document.querySelector('.user-avatar__image');
		if (avatarImage) {
			avatarImage.addEventListener('click', (event) => {
				event.preventDefault();
				const path = logoLink.getAttribute('href');
				this.parent.navigateTo('/profile');
			});
		}
	}
};