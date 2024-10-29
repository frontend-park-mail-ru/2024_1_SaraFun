import App from './modules/App.js';
import './index.css'
   

const root = document.querySelector('#root');

const app = new App(root);
await app.init();