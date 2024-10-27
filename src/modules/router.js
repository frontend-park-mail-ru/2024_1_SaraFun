import {LoginPage} from '../pages/login/login.js';
import {FeedPage} from '../pages/feed/feed.js';
import {RegistrationPage} from '../pages/signup/signup.js';

/**
 * Creates a router configuration object.
 * 
 * @returns {Object} - The router configuration object.
 * @returns {Object} feed - The feed route configuration.
 * @returns {string} feed.path - The path for the feed route.
 * @returns {string} feed.handle - The handle for the feed route.
 * @returns {Function} feed.componentName - The component to render for the feed route.
 * @returns {Object} login - The login route configuration.
 * @returns {string} login.path - The path for the login route.
 * @returns {string} login.handle - The handle for the login route.
 * @returns {Function} login.componentName - The component to render for the login route.
 * @returns {Object} signup - The signup route configuration.
 * @returns {string} signup.path - The path for the signup route.
 * @returns {string} signup.handle - The handle for the signup route.
 * @returns {Function} signup.componentName - The component to render for the signup route.
 */
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