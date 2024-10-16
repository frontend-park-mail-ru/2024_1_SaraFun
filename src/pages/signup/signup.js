import template from '../../Compile/signup.js';
import { registerUser } from '../../app/api.js';

export class RegistrationPage {
  constructor(parent) {
    this.parent = parent;
    this.parent.root.innerHTML = '';
    this.parent.root.innerHTML = this.render();
    this.addEventListeners();
  }

  render() {
    return template();
  }

  addEventListeners() {
		document.getElementById('link').addEventListener('click', (event) => {
			event.preventDefault();
			const url = new URL(event.target.href);
			const path = url.pathname;
			this.parent.goToPage(path);
		});

    document.querySelector('button').addEventListener('click', () => {
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
          //registerUser(login, password, gender, age);
          this.parent.goToPage('/feed');
        } catch (error) {
          console.error('Ошибка при входе:', error);
        }
      }
    });

    function isValidPassword(password) {
      if (!password) {
        return false;
      }
      // Проверка длины пароля
      if (password.length < 6 || password.length > 40) {
        //console.log('Пароль должен содержать от 6 до 40 символов.');
        return false;
      }
      
      // Проверка на наличие хотя бы одной цифры
      if (!/\d/.test(password)) {
        //console.log('Пароль должен содержать хотя бы одну цифру.');
        return false;
      }
      
      // Проверка на допустимые специальные символы
      for (let char of password) {
        if (!/[a-zA-Z0-9*?!$]/.test(char)) {
          //console.log('Пароль содержит недопустимые символы.');
          return false;
        }
      }
  
      return true;
    }

    function isValidLogin(login) {
      // Проверка длины логина
      if (login.length < 5 || login.length > 15) {
        //console.log('Логин должен содержать от 5 до 15 символов.');
        return false;
      }
      
      // Проверка на наличие недопустимых специальных символов
      const invalidChars = /[^a-zA-Z0-9_-]/;
      if (invalidChars.test(login)) {
        //console.log('Логин может содержать только буквы, цифры, \'_\' и \'-\'.');
        return false;
      }
      
      // Проверка на первую и последнюю позицию для специальных символов
      if (login.startsWith('_') || login.startsWith('-') || login.endsWith('_') || login.endsWith('-')) {
        //console.log('Специальные символы \'_\' и \'-\' не могут быть первыми или последними символами.');
        return false;
      }
      
      // Проверка на первую позицию для цифр
      if (/\d/.test(login.charAt(0))) {
        //console.log('Логин не может начинаться с цифры.');
        return false;
      }
      
      return true;
    }
	}
}