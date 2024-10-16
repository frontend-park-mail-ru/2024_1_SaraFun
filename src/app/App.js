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

export default class App {
	#state = {};
	handlers = {};
	root;
	constructor(root) {
		this.root = root;
		this.#state.user = null;
        this.router = createRouter(this);
	}

	render(pageLink) {
		const route = Object.values(this.router).find(route => route.path === pageLink);
        if (route) {
            history.pushState({}, '', route.path);
            const componentInstance = new route.componentName(this);
        } else {
			console.log('page not found');
            history.pushState({}, '', this.router.login.path);
			this.goToPage(this.router.login.path);
        }
	}

	goToPage(pageLink, deleteEverything = false) {
		console.log('goToPage', pageLink);
		this.render(pageLink);
	}
}