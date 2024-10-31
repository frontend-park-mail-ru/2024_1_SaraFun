import App from './modules/App.js';
import './index.css';
import './assets/img/Logo.svg';
import './assets/img/image.svg';
import './assets/img/icon.svg';
import './assets/img/arrow.svg';
import './assets/img/shine.svg'
import './assets/img/arrowRight.svg'
import './assets/img/giftArrow.svg'
import './assets/img/X.svg';
import './assets/img/Heart.svg'


const root = document.querySelector('#root') as HTMLElement;

if (root) {
    const app = new App(root);
    await app.init();
} else {
    console.error('Element with id "root" not found.');
}