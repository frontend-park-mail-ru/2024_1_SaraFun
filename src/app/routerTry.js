export default class Router {
    constructor(routes) {
        if (Router.instance) {
            return Router.instance;
        }
        this.routes = routes;
        this.currentRoute = null;
        Router.instance = this;
    }

    start() {
        window.addEventListener('popstate', this.popState);
    }

    popState() {

    }

    

    navigate(path) {

    }
}