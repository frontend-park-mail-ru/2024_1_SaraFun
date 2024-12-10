import { isValidPassword, isValidLogin } from '../../../shared/utils/validation';
import { signupUser } from '../api/signupUser';
import template from './signup.pug';
import { Router } from '../../../app/Router';
import { notificationManager } from '../../../widgets/Notification/notification';

/**
 * Class representing the registration page.
 */
export class RegistrationPage {
	private parent: Router;
	/**
   * Creates an instance of RegistrationPage.
   * @param {Object} parent - The parent object.
   */
	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.parent.root.innerHTML = this.render();
		this.addEventListeners();
	}
  
	/**
   * Renders the registration page template.
   * @returns {string} - The HTML string of the registration page template.
   */
	render(): string {
		return template();
	}

	/**
   * Adds event listeners to the registration page elements.
   */
	// Обновлённый метод addEventListeners
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
	
		document.querySelector('.signup-button').addEventListener('click', async () => {
		const login = (document.getElementById('login') as HTMLInputElement).value;
		const password = (document.getElementById('password') as HTMLInputElement).value;
		const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
	
		const ageInput = (document.getElementById('birth_date') as HTMLInputElement).value; 
		console.log(ageInput);
		
		if (!/\d{4}-\d{2}-\d{2}/.test(ageInput)) {
			notificationManager.addNotification('Некорректный формат даты. Используйте YYYY-MM-DD.', 'fail');
			return;
		}
	
		const passwordErrors = isValidPassword(password);
		const loginErrors = isValidLogin(login);
		let valid = true;
	
		document.querySelectorAll('.error').forEach(error => {
			(error as HTMLElement).style.display = 'none';
		});
	
		if (passwordErrors.length > 0) {
			passwordErrors.forEach((error, index) => {
			document.getElementById(`password-error-${index + 1}).innerText = error`);
			document.getElementById(`password-error-${index + 1}).style.display = 'block'`);
			});
			valid = false;
		}
	
		if (loginErrors.length > 0) {
			loginErrors.forEach((error, index) => {
			document.getElementById(`login-error-${index + 1}).innerText = error`);
			document.getElementById(`login-error-${index + 1}).style.display = 'block'`);
			});
			valid = false;
		}
	
		if (valid) {
			try {
				const isSignedUp = await signupUser(login, password, gender, ageInput);
				if (!isSignedUp) {
					document.getElementById('login-password-error').style.display = 'block';            
				} else { 
					this.parent.setAuth(true);
					this.parent.navigateTo('/feed');
				}
			} catch (error) {
				console.error(error);
				notificationManager.addNotification('Ошибка при регистрации. Попробуйте ещё раз.', 'fail');
			}
		}
		});
	}
}