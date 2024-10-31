import App from './app/App.js';
import './index.css';
import './shared/assets/img/Logo.svg';
import './shared/assets/img/image.svg';
import './shared/assets/img/icon.svg';
import './shared/assets/img/arrow.svg';
import './shared/assets/img/shine.svg'
import './shared/assets/img/arrowRight.svg'
import './shared/assets/img/giftArrow.svg'
import './shared/assets/img/X.svg';
import './shared/assets/img/Heart.svg';


const root = document.querySelector('#root') as HTMLElement;

if (root) {
    const app = new App(root);
    await app.init();
} else {
    console.error('Element with id "root" not found.');
}