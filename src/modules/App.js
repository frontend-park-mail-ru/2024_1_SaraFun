import {checkAuth} from './api.js';
import {createRouter} from './router.js';

export default class App {
	#state = {};
	handlers = {};
	root;

	constructor(root) {
		this.root = root;
		this.#state.user = null;
    this.router = createRouter(this);
	}

  async init() {
    try {
      const isAuthenticated = await checkAuth();
      //const isAuthenticated = false;
      if (isAuthenticated) {
        this.render(window.location.pathname);
      } else {
        this.render(this.router.login.path);
      }

      window.addEventListener('popstate', (event) => {
        this.render(window.location.pathname);
      });

    } catch (error) {
      console.error('Ошибка при проверке аутентификации:', error);
      this.render(this.router.login.path);
    }
  }

	render(pageLink) {
		const route = Object.values(this.router).find(route => route.path === pageLink);
    if (route) {
      history.pushState({}, '', route.path);
      const componentInstance = new route.componentName(this);
    } else {
      console.log('page not found');
      history.pushState({}, '', this.router.login.path);
      this.render(this.router.login.path);
    }
	}
}