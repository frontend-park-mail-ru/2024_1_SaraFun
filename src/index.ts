import App from './modules/App.js';
import './index.css'
import './assets/img/Logo.svg'



const root = document.querySelector('#root') as HTMLElement;

if (root) {
    const app = new App(root);
    await app.init();
} else {
    console.error('Element with id "root" not found.');
}