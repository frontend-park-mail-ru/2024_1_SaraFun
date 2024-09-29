import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Карточка пользователя");
    }

    async getHtml() {
        return `
            <div class="container">
                <div class="image-section-wrapper">
                    <div class="image-section">
                        <!-- Поле для фотографии пользователя (пока пустое) -->
                        <div class="user-photo-placeholder">
                            <img src="../assets/img/placeholder.png" alt="User Photo Placeholder">
                        </div>
                    </div>
                </div>
                <div class="form-section">
                    <h1 class="description"><Логин></h1>
                    <label for="information" class="text-base">Информация о пользователе</label>
                    <p>Здесь будет информация о пользователе.</p>

                    <button class="btn custom-btn">
                        <img src="../assets/img/X.svg" alt="X">
                    </button>
                    <button class="btn custom-btn">
                        <img src="../assets/img/Heart.svg" alt="Heart">
                    </button>
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