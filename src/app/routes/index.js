import { LoginPage, MainPage, RegistrationPage } from "../../pages/index.js";

export const createRouter = (root) => ({
    feed: {
      path: '/feed',
      handle: 'Главная',
      componentName: new MainPage(root),
    },
    login: {
      path: '/login',
      handle: 'Авторизоваться',
      componentName: new LoginPage(root),
    },
    signup: {
      path: '/signup',
      handle: 'Регистрация',
      componentName: new RegistrationPage(root)
    },
})
