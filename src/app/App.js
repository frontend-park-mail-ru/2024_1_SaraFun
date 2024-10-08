import templateFeed from '../Compile/Feed_v2.js';

function renderFeed (parent) {
	parent.innerHTML = '';
	parent.innerHTML = templateFeed();
};

function renderLogin (parent) {
	parent.innerHTML = '';
	parent.innerHTML = `
            <div class="container">
                <div class="form-section">
                    <h1 class="description"><Логин></h1>
                    <p>Здесь будет информация о пользователе.</p>
                    <div class="card-actions">
                    <button class="btn custom-btn" id="dislike">
                        <img src="../assets/img/X.svg" alt="X">
                    </button>
                    <button class="btn custom-btn" id="like">
                        <img src="../assets/img/Heart.svg" alt="Heart">
                    </button>
                    </div>
                </div>
                <div class="image-section">
                <img src="../assets/img/image.svg" alt="Image">
                </div>
            </div>
        `;
};

function renderSignup (parent) {
	parent.innerHTML = '';
	parent.innerHTML = `
            <div class="container">
                <div class="form-section">
                    <h1 class="description"><Логин></h1>
                    <p>Здесь будет информация о пользователе.</p>
                    <div class="card-actions">
                    <button class="btn custom-btn" id="dislike">
                        <img src="../assets/img/X.svg" alt="X">
                    </button>
                    <button class="btn custom-btn" id="like">
                        <img src="../assets/img/Heart.svg" alt="Heart">
                    </button>
                    </div>
                </div>
                <div class="image-section">
                <img src="../assets/img/image.svg" alt="Image">
                </div>
            </div>
        `;
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