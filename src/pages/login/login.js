import template from '../../templates/login.js';
import Navbar from '../../widgets/Navbar/navbar.js';
import { loginUser } from './api/loginUser.js';

/**
 * Class representing the login page.
 */
export class LoginPage {
	/**
   * Creates an instance of LoginPage.
   * @param {Object} parent - The parent object.
   */
	constructor(parent) {
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
	render() {
		return template();
	}

	/**
   * Adds event listeners to the login page elements.
   */
	addEventListeners() {
		document.getElementById('link').addEventListener('click', (event) => {
			event.preventDefault();
			const url = new URL(event.target.href);
			const path = url.pathname;
			this.parent.navigateTo(path);
		});

		document.querySelector('button').addEventListener('click', async () => {
			const login = document.getElementById('login').value;
			const password = document.getElementById('password').value;

			let valid = true;

			if (!login) {
				document.getElementById('login-error').style.display = 'block';
				valid = false;
			} else {
				document.getElementById('login-error').style.display = 'none';
			}

			if (!password) {
				document.getElementById('password-error').style.display = 'block';
				valid = false;
			} else {
				document.getElementById('password-error').style.display = 'none';
			}

			if (valid) {
				try {
					const isLogedIn = await loginUser(login, password);
					if (!isLogedIn) {
						document.getElementById('login-password-error').style.display = 'block';            
					} else { 
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