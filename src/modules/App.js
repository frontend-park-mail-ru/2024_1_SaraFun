import {checkAuth} from './apiService.js';
import {createRouter} from './router.js';

export default class App {
  #state = {};
  root;

  constructor(root) {
    this.root = root;
    this.#state.isAuthenticated = false;
    this.router = createRouter(this);
  }

  async init() {
    try {
      this.#state.isAuthenticated = await checkAuth();
      if (this.#state.isAuthenticated) {
        this.render(window.location.pathname);
      } else {
        this.render(this.router.login.path);
      }

      window.addEventListener('popstate', (event) => {
        this.render(window.location.pathname);
      });

    } catch (error) {
      this.render(this.router.login.path);
    }
  }

  render(pageLink) {
    const route = Object.values(this.router).find(route => route.path === pageLink);
    if (route) {
      history.pushState({}, '', route.path);
      const componentInstance = new route.componentName(this);
    } else {
      if (this.#state.isAuthenticated) {
        this.render(this.router.feed.path);
      } else {
        this.render(this.router.login.path);
      }
    }
  }
}