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
import '@img/IMG_0739.JPG';
import '@img/IMG_1106.JPG';
import '@img/IMG_1105.JPG';
import '@img/IMG_2097.JPG';
import '@img/IMG_2098.JPG';
import '@img/IMG_2099.JPG';


import './nav.scss';



const root = document.querySelector('#root') as HTMLElement;

if (root) {
    const app = new App(root);
    await app.init();
} else {
    console.error('Element with id "root" not found.');
}