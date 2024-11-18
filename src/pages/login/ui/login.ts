import Navbar from '../../../widgets/Navbar/navbar.js';
import { Router } from '../../../app/Router';
import template from './ui/login.pug';
import { loginUser } from '../api/loginUser.js';
import { isValidLogin, isValidPassword } from '../../../shared/utils/validation.js';

/**
 * Class representing the login page.
 */
export class LoginPage {
	private parent: Router;
	private navbar: Navbar | undefined;
	/**
   * Creates an instance of LoginPage.
   * @param {Object} parent - The parent object.
   */
	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.parent.root.innerHTML = this.render();
		this.addEventListeners();
		this.navbar = new Navbar(document.querySelector('nav'), parent);
	}

	/**
   * Renders the login page template.
   * @returns {string} - The HTML string of the login page template.
   */
	render(): string {
		return template();
	}

	/**
   * Adds event listeners to the login page elements.
   */
	addEventListeners(): void {
		document.getElementById('link').addEventListener('click', (event) => {
			event.preventDefault();
			const url = new URL((event.target as HTMLAnchorElement).href);
			const path = url.pathname;
			this.parent.navigateTo(path);
		});

		const passwordInputIcon = document.querySelector('.password__icon') as HTMLElement;
		passwordInputIcon.addEventListener('click', (event) => {
			const passwordInput = document.getElementById('password') as HTMLInputElement;
			passwordInput.setAttribute('type', passwordInput.type === 'password' ? 'text' : 'password');
			passwordInputIcon.setAttribute('src', passwordInput.type === 'password' ? './img/eye-x.svg' : './img/eye.svg');
		});

		document.querySelector('button').addEventListener('click', async () => {
			const login = (document.getElementById('login') as HTMLInputElement).value;
			const password = (document.getElementById('password') as HTMLInputElement).value;

			let valid = true;
			const loginErrors = isValidLogin(login);
			const passwordErrors = isValidPassword(password);

			if (loginErrors.length > 0 || passwordErrors.length > 0) {
				valid = false;
				document.getElementById('login-password-error').style.display = 'block'; 
			}


			if (!login) {
				(document.getElementById('login-error') as HTMLElement).style.display = 'block';
				valid = false;
			} else {
				(document.getElementById('login-error') as HTMLElement).style.display = 'none';
			}

			if (!password) {
				(document.getElementById('password-error') as HTMLElement).style.display = 'block';
				valid = false;
			} else {
				(document.getElementById('password-error') as HTMLElement).style.display = 'none';
			}

			if (valid) {
				try {
					const isLogedIn = await loginUser(login, password);
					if (!isLogedIn) {
						(document.getElementById('login-password-error') as HTMLElement).style.display = 'block';            
					} else { 
						//this.parent.curLogin = login;
						this.parent.isAuth = true;
						this.parent.navigateTo('/feed');
					}
				} catch (error) {
					console.error(error);
				}
			} else {
				console.error('Error in authorization');
			}
		});
	}
}