import App from './app/App.js';
import './index.css';
import '@img/Logo.svg';
import '@img/image.svg';
import '@img/icon.svg';
import '@img/arrow.svg';
import '@img/shine.svg'
import '@img/arrowRight.svg'
import '@img/giftArrow.svg'
import '@img/X.svg';
import '@img/Heart.svg';


import './nav.scss';



const root = document.querySelector('#root') as HTMLElement;

if (root) {
    const app = new App(root);
    await app.init();
} else {
    console.error('Element with id "root" not found.');
}