import template from '../../Compile/signup.js';
import { registerUser } from '../../modules/apiService.js';
import { isValidPassword } from '../../modules/validation.js';
import { isValidLogin } from '../../modules/validation.js';
import Navbar from '../../components/Navbar/navbar.js';

export class RegistrationPage {
  constructor(parent) {
    this.parent = parent;
    this.parent.root.innerHTML = '';
    this.parent.root.innerHTML = this.render();
    this.addEventListeners();
    this.navbar = new Navbar(document.querySelector('nav'), parent);
  }

  render() {
    return template();
  }

  addEventListeners() {
		document.getElementById('link').addEventListener('click', (event) => {
			event.preventDefault();
			const url = new URL(event.target.href);
			const path = url.pathname;
			this.parent.render(path);
		});

    document.querySelector('button').addEventListener('click', async () => {
      const login = document.getElementById('login').value;
      const password = document.getElementById('password').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const age = document.getElementById('age').value;

      let valid = true;

      if (!isValidLogin(login)) {
        document.getElementById('login-error').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('login-error').style.display = 'none';
      }

      if (!isValidPassword(password)) {
        document.getElementById('password-error').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('password-error').style.display = 'none';
      }

      if (valid) {
        try {
          const isSignedUp = await registerUser(login, password, gender, age);
          if (!isSignedUp) {
            document.getElementById('login-password-error').style.display = 'block';            
          } else { 
            this.parent.render('/feed');
          }
          this.parent.render('/feed');
        } catch (error) {
          console.error('Ошибка при входе:', error);
        }
      }
    });
	}
}