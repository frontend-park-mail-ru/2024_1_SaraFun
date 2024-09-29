import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `
        <div class="container">
            <div class="form-section">
            <div class="logo">
                <img src="../assets/img/Logo.svg" alt="Logo">
            </div>
            <h1 class="description">С возвращением!</h1>

            <label for="login" class=".text-base">Login</label>
            <input type="text" id="login" class=".text-base" placeholder="Введите login">
            <p class="error" id="login-error">Ошибка: Введите правильный login</p>

            <label for="password" class=".text-base">Пароль</label>
            <input type="password" id="password" placeholder="Введите пароль">
            <p class="error" id="password-error">Ошибка: Введите пароль</p>

            <button type="button" id="login-button">Войти в аккаунт</button>

            <div class="footer-text">
                <a href="#">Забыли пароль?</a>
            </div>

            <div class="footer-text">
                У вас еще нет аккаунта? <a href="#" class=".link">Зарегистрируйтесь</a>
            </div>
        </div>
           <div class="image-section">
            <img src="../assets/img/image.svg" alt="Image">
        </div>
    </div>
        `;
    }
}