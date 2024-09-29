import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Карточка пользователя");
    }

    async getHtml() {
        return `
            <div class="container">
            <div class="form-section">
            <div class="logo">
                <img src="../assets/img/Logo.svg" alt="Logo">
            </div>
            <h1 class="description"><Логин></h1>

            <label for="information" class=".text-base">Информация о пользователе</label>
            

            <label for="additional inf" class=".text-base">...</label>
            

            

            <div class="card-actions">
                    <button class="btn skip">
                        <span>Пропустить</span>
                    </button>
                    <button class="btn like">
                        <span>Нравится</span>
                    </button>
                    <button class="btn photo">
                        <span>Листать фото</span>
                    </button>
                    <button class="btn gift">
                        <span>Сделать подарок</span>
                    </button>
            </div>

            
            </div>
            </div>
        `;
    }
}