import App from "./modules/App.js"

const root = document.querySelector('#root');

const app = new App(root);
await app.init();