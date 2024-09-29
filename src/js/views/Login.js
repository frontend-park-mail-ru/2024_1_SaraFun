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

            <label for="email" class=".text-base">Email</label>
            <input type="text" id="email" class=".text-base" placeholder="Введите email">
            <p class="error" id="email-error">Ошибка: Введите правильный email</p>

            <label for="password" class=".text-base">Пароль</label>
            <input type="password" id="password" placeholder="Введите пароль">
            <p class="error" id="password-error">Ошибка: Введите пароль</p>

            <button type="button">Войти в аккаунт</button>

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