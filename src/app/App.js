import templateFeed from '../Compile/Feed_v2.js';
import templateLogin from '../Compile/login.js';
import templateSignup from '../Compile/signup.js';

function renderFeed (parent) {
	parent.innerHTML = '';
	parent.innerHTML = templateFeed();
};

function renderLogin (parent) {
	parent.innerHTML = '';
	parent.innerHTML = templateLogin();
};

function renderSignup (parent) {
	parent.innerHTML = '';
	parent.innerHTML = templateSignup();
};

export const createRouter = (root) => ({
    feed: {
      path: '/feed',
      handle: 'Главная',
      componentName: renderFeed,
    },
    login: {
      path: '/login',
      handle: 'Авторизация',
      componentName: renderLogin,
    },
    signup: {
      path: '/signup',
      handle: 'Регистрация',
      componentName: renderSignup
    },
});

export default class App {
	#state = {};
	handlers = {};
	#structure = {};
	root;
	constructor(root) {
		this.root = root;
		this.#state.user = null;
        this.router = createRouter(root);
	}

	render(pageLink) {
		const route = Object.values(this.router).find(route => route.path === pageLink);
        if (route) {
            history.pushState({}, '', route.path);
            this.clear(true);
            route.componentName(root);
            this.#structure[route.handle] = route.componentName;
        } else {
            history.pushState({}, '', this.router.feed.path);
			this.goToPage(this.router.login.path);
        }
	}

	goToPage(pageLink, deleteEverything = false) {
		this.clear(deleteEverything);
		this.render(pageLink);
	}

	clear(deleteEverything) {
		Object.keys(this.#structure).forEach((key) => {
			if (deleteEverything || key !== 'menu') {
				this.#structure[key].remove();
				delete this.#structure[key];
			}
		});
	}
}