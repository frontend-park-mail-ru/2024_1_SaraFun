import { isValidPassword, isValidLogin } from '../../../shared/utils/validation';
import { signupUser } from '../api/signupUser';
import template from './signup.pug';
import { Router } from '../../../app/Router';
import { notificationManager } from '../../../widgets/Notification/notification';
import { limitInput } from '../../../features/limitInput';

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

		this.limits();

		this.addInputListeners();

	
		document.querySelector('.signup-button').addEventListener('click', async () => {
			const login = (document.getElementById('login') as HTMLInputElement).value;
			const password = (document.getElementById('password') as HTMLInputElement).value;
			const first_name = (document.getElementById('first_name') as HTMLInputElement).value; 
			const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
			const birth_date = (document.getElementById('birth_date') as HTMLInputElement).value; 
			let valid = true;
			
			if (!/\d{4}-\d{2}-\d{2}/.test(birth_date)) {
				valid = false;
				notificationManager.addNotification('Некорректный формат даты. Используйте YYYY-MM-DD.', 'fail');
				return;
			}

			if (first_name === '') {
				this.showError('first-name-error', 'Имя не может быть пустым полем');
				valid = false;
			}

			const loginErrors = isValidLogin(login);
			const passwordErrors = isValidPassword(password);

			if (passwordErrors.length > 0) {
				passwordErrors.forEach((error, index) => {
					document.getElementById(`password-error-${index + 1}`).innerText = error;
					document.getElementById(`password-error-${index + 1}`).style.display = 'block';
				});
			}	
			  
			if (loginErrors.length > 0) {
				loginErrors.forEach((error, index) => {
					document.getElementById(`login-error-${index + 1}`).innerText = error;
					document.getElementById(`login-error-${index + 1}`).style.display = 'block';
				});
			}
			 
			
			if (loginErrors.length > 0 || passwordErrors.length > 0 || first_name === '') {
				notificationManager.addNotification('Пожалуйста, исправьте ошибки в форме.', 'fail');
				valid = false;
			}

						
		
			if (valid) {
				try {
					const isSignedUp = await signupUser(login, password, first_name, gender, birth_date);
					if (!isSignedUp) {
						notificationManager.addNotification('Ошибка при регистрации. Попробуйте ещё раз.', 'fail'); 
					} else { 
						notificationManager.addNotification('Успешная регистрация', 'success');
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

	limits(): void {
		const first_nameInput = document.getElementById('first_name') as HTMLInputElement; 
		if (first_nameInput) {
			limitInput(first_nameInput); 
		}
	}

	private addInputListeners(): void {
		document.querySelectorAll('.error').forEach(error => {
			(error as HTMLElement).style.display = 'none';
		});
		const loginInput = document.getElementById('login') as HTMLInputElement;
		const passwordInput = document.getElementById('password') as HTMLInputElement;
		const firstNameInput = document.getElementById('first_name') as HTMLInputElement;
	
		const clearError = (errorElementId: string): void => {
			const errorElement = document.getElementById(errorElementId);
			if (errorElement) {
				errorElement.textContent = '';
				errorElement.style.display = 'none';
			}
		};
	
		loginInput?.addEventListener('input', () => {
			for (let i = 1; i <= 4; i++) { 
				clearError(`login-error-${i}`);
			}			
			const loginErrors = isValidLogin(loginInput.value);
			if (loginErrors.length > 0) {
				loginErrors.forEach((error, index) => {
					document.getElementById(`login-error-${index + 1}`).innerText = error;
					document.getElementById(`login-error-${index + 1}`).style.display = 'block';
				});
			}
		});
	
		passwordInput?.addEventListener('input', () => {
			for (let i = 1; i <= 3; i++) { 
				clearError(`password-error-${i}`);
			}	
			const passwordErrors = isValidPassword(passwordInput.value);
			if (passwordErrors.length > 0) {
				passwordErrors.forEach((error, index) => {
					document.getElementById(`password-error-${index + 1}`).innerText = error;
					document.getElementById(`password-error-${index + 1}`).style.display = 'block';
				});
			}
		});
	
		firstNameInput?.addEventListener('input', () => clearError('first-name-error')); 
	}
	
	private showError(errorElementId: string, message: string): void {
		const errorElement = document.getElementById(errorElementId);
		if (errorElement) {
			errorElement.textContent = message;
			errorElement.style.display = 'block';
		}
	}
}