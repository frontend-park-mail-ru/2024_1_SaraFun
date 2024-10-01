import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Registration');
  }

  async getHtml() {
    return `
       <div class="container">
            <div class="form-section">
            <div class="logo">
                <img src="../assets/img/Logo.svg" alt="Logo">
            </div>
            <h1 class="description">Добро пожаловать!</h1>

            <label for="login" class=".text-base">Login</label>
            <input type="text" id="login" class=".text-base" placeholder="Введите логин">
            <p class="error" id="login-error" style="display:none;">Логин должен быть длинее 5, короче 15, не может содержать спец символы, кроме (-, _), и они не могут быть в начале и в конце, цифры не могут быть в начале</p>

            <label for="password" class=".text-base">Пароль</label>
            <input type="password" id="password" placeholder="Введите пароль">
            <p class="error" id="password-error" style="display:none;">Пароль должен быть от 6 до 40 символов, содержать минимум одну цифру, разрешенные спец знаки (!?*-$)</p>
            
           <label for="gender" class=".text-base">Пол</label>
           <div class="gender-selection">
                <input type="radio" id="male" name="gender" value="male">
                <label for="male">Мужской</label>
                <input type="radio" id="female" name="gender" value="female">
                <label for="female">Женский</label>
            </div>
            
            <label for="age" class=".text-base">Возраст</label>
            <input type="range" id="age" name="age" min="18" max="100" value="18" oninput="this.nextElementSibling.value = this.value">
            <output>18</output>
           
            <button type="button" id="register-button">Зарегистрироваться</button>

            <div class="footer-text">
                У вас уже есть аккаунт? <a href="/login" id="link" class=".link">Войдите в аккаунт</a>
            </div>
        </div>
           <div class="image-section">
            <img src="../assets/img/image.svg" alt="Image">
        </div>
    </div>`
    ;
  }
}
