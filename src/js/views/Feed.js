import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Карточка пользователя');
  }

  async getHtml() {
    return `
            <div class="container">
                <div class="form-section">
                    <h1 class="description"><Логин></h1>
                    <p>Здесь будет информация о пользователе.</p>
                    <div class="card-actions">
                    <button class="btn custom-btn" id="dislike">
                        <img src="../assets/img/X.svg" alt="X">
                    </button>
                    <button class="btn custom-btn" id="like">
                        <img src="../assets/img/Heart.svg" alt="Heart">
                    </button>
                    </div>
                </div>
                <div class="image-section">
                <img src="../assets/img/image.svg" alt="Image">
                </div>
            </div>
        `;
  }
    
}