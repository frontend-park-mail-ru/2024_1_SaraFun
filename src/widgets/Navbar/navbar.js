import { logout } from './api/logout.js';
import {getProfile} from "../../pages/profile/api/getProfile";
import {checkAuth} from "../../features/checkAuth";

/**
 * Class representing the navigation bar.
 */
export default class Navbar {
	/**
   * Creates an instance of Navbar.
   * @param {HTMLElement} nav - The nav element.
   * @param {Object} app - The application instance.
   */
	constructor(nav, parent) {
		this.nav = nav;
		this.parent = parent;
		this.addEventListeners();
		this.getUserAvatar();
	}

	async getUserAvatar() {
		const isAuth = await checkAuth();
		if (!isAuth) {
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
	addEventListeners() {
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
				this.app.render('/profile');
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