import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Viewing Card');
  }

  async getHtml() {
    return `
            <div class="tinder">
              <div class="tinder--cards">
                <div class="tinder--card">
                  <div class="image-section">
                      <img src="../assets/img/image.svg" alt="Image" draggable="false">
                  </div>
                  <div class="form-section-tinder">
                    <h1>Антон</h1>
                    <text-base>Пол: мужской</text-base>
                    <text-base>Возраст: 27 лет</text-base>
                    <div class="card-actions">
                      <button class="btn custom-btn fa-remove" id="dislike">
                          <img src="../assets/img/X.svg" alt="X">
                      </button>
                      <button class="btn custom-btn" id="like">
                          <img src="../assets/img/Heart.svg" alt="Heart">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="tinder--card">
                  <div class="image-section">
                      <img src="../assets/img/image.svg" alt="Image" draggable="false">
                  </div>
                  <div class="form-section-tinder">
                    <h1>Антон</h1>
                    <text-base>Пол: мужской</text-base>
                    <text-base>Возраст: 27 лет</text-base>
                    <div class="card-actions">
                      <button class="btn custom-btn" id="dislike">
                          <img src="../assets/img/X.svg" alt="X">
                      </button>
                      <button class="btn custom-btn" id="like">
                          <img src="../assets/img/Heart.svg" alt="Heart">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="tinder--card">
                  <div class="image-section">
                      <img src="../assets/img/image.svg" alt="Image" draggable="false">
                  </div>
                  <div class="form-section-tinder">
                    <h1>Антон</h1>
                    <text-base>Пол: мужской</text-base>
                    <text-base>Возраст: 27 лет</text-base>
                    <div class="card-actions">
                      <button class="btn custom-btn" id="dislike">
                          <img src="../assets/img/X.svg" alt="X">
                      </button>
                      <button class="btn custom-btn" id="like">
                          <img src="../assets/img/Heart.svg" alt="Heart">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="tinder--card">
                  <div class="image-section">
                      <img src="../assets/img/image.svg" alt="Image" draggable="false">
                  </div>
                  <div class="form-section-tinder">
                    <h1>Антон</h1>
                    <text-base>Пол: мужской</text-base>
                    <text-base>Возраст: 27 лет</text-base>
                    <div class="card-actions">
                      <button class="btn custom-btn" id="dislike">
                          <img src="../assets/img/X.svg" alt="X">
                      </button>
                      <button class="btn custom-btn" id="like">
                          <img src="../assets/img/Heart.svg" alt="Heart">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="tinder--card">
                  <div class="image-section">
                      <img src="../assets/img/image.svg" alt="Image" draggable="false">
                  </div>
                  <div class="form-section-tinder">
                    <h1>Антон</h1>
                    <text-base>Пол: мужской</text-base>
                    <text-base>Возраст: 27 лет</text-base>
                    <div class="card-actions">
                      <button class="btn custom-btn" id="dislike">
                          <img src="../assets/img/X.svg" alt="X">
                      </button>
                      <button class="btn custom-btn" id="like">
                          <img src="../assets/img/Heart.svg" alt="Heart">
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tinder--buttons">
                <button id="nope"><i class="fa fa-remove"></i></button>
                <button id="love"><i class="fa fa-heart"></i></button>
              </div>
            </div>
        `;
  }
}
