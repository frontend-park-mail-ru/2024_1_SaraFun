import App from './app/App.js';

const root = document.querySelector('#root');

const app = new App(root);
await app.init();