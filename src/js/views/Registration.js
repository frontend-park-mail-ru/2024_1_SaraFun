import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Registration");
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
            <p class="error" id="login-error" style="display:none;">Ошибка: Введите правильный login</p>

            <label for="password" class=".text-base">Пароль</label>
            <input type="password" id="password" placeholder="Введите пароль">
            <p class="error" id="password-error" style="display:none;">Ошибка: Введите пароль</p>

            <button type="button" id="register-button">Зарегистрироваться</button>

            <div class=".footer-text">
                <div>У вас уже есть аккаунт?</div>
                <a href="/login" class=".link">Войдите в аккаунт</a>
            </div>
        </div>
           <div class="image-section">
            <img src="../assets/img/image.svg" alt="Image">
        </div>
    </div>`
        ;
    }
}