import {LoginPage} from '../pages/login/login.js';
import {FeedPage} from '../pages/feed/feed.js';
import {RegistrationPage} from '../pages/signup/signup.js';

export const createRouter = () => ({
    feed: {
      path: '/feed',
      handle: 'Главная',
      componentName: FeedPage,
    },
    login: {
      path: '/login',
      handle: 'Авторизация',
      componentName: LoginPage,
    },
    signup: {
      path: '/signup',
      handle: 'Регистрация',
      componentName: RegistrationPage,
    },
});