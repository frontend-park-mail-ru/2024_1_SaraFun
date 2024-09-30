import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing Card");
    }

    async getHtml() {
        return `
            <div class="tinder">
  <div class="tinder--status">
    <i class="fa fa-remove"></i>
    <i class="fa fa-heart"></i>
  </div>

  <div class="tinder--cards">
    <div class="tinder--card">
      <img src="../assets/img/logo.svg">
      <h3>Demo card 1</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div>
    <div class="tinder--card">
      <img src="../assets/img/logo.svg">
      <h3>Demo card 2</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div>
    <div class="tinder--card">
      <img src="../assets/img/logo.svg">
      <h3>Demo card 3</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div>
    <div class="tinder--card">
      <img src="../assets/img/logo.svg">
      <h3>Demo card 4</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div>
    <div class="tinder--card">
      <img src="../assets/img/logo.svg">
      <h3>Demo card 5</h3>
      <p>This is a demo for Tinder like swipe cards</p>
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
