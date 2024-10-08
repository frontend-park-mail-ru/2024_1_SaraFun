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
           // this.#renderLogin();
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

	/*#renderMenu() {
		const menu = new Menu(this.config.homeConfig.menu, this.root);
		if (!this.#structure.menu) {
			this.#structure.menu = menu;
			menu.render();
		}

		menu.addHandler(
			menu.htmlElement.querySelector('a[data-section="feed"]'),
			'click',
			(event) => {
				event.preventDefault();
				this.goToPage(this.router.feed.path);
			},
		);
		menu.addHandler(
			menu.htmlElement.querySelector('a[data-section="login"]'),
			'click',
			(event) => {
				event.preventDefault();
				this.goToPage(this.router.login.path, true);
			},
		);
		menu.addHandler(
			menu.htmlElement.querySelector('a[data-section="signup"]'),
			'click',
			(event) => {
				event.preventDefault();
				this.goToPage(this.router.signup.path, true);
			},
		);
	}

	#renderFeed() {
		const config = this.config.homeConfig;

		this.#renderMenu();

		const main = new Container({ key: 'main', ...config.main }, this.root);
		main.render();
		this.#structure.main = main;

		const header = new Header(
			{ key: 'header', ...config.main.header },
			main.htmlElement,
		);
		header.render();
		this.#structure.main.header = header;

		const content = new Container(
			{ key: 'content', ...config.main.content },
			main.htmlElement,
		);
		content.render();
		this.#structure.main.content = content;

		const aside = new Container(
			{
				key: 'aside',
				...config.main.aside,
			},
			main.htmlElement,
		);
		aside.render();
		this.#structure.main.aside = aside;

		const logoutButton = header.htmlElement.querySelector(
			'img.header-profile-logout',
		);
		const logoutButtonHandler = () => {
			Ajax.post('/auth/logout', {}, (data, error) => {
				if (error) {
					console.log('logoutError:', error);
				}
				this.goToPage(router.login, true);
			});
		};
		header.addHandler(logoutButton, 'click', logoutButtonHandler);
	}

	#renderSignup() {
		const config = this.config.signupConfig;
		const signUp = new SignupForm(config, this.root);
		signUp.render();
		this.#structure.signUp = signUp;

		const signupForm = signUp.htmlElement.querySelector('form');
		const submitHandler = (event) => {
			event.preventDefault();
			const data = validateForm(config.inputs, signupForm);
			if (data) {
				Ajax.sendForm('/auth/signup', data, (response, error) => {
					if (response.ok) {
						this.goToPage(router.feed, true);
					} else {
						console.log('status:', response.statusText);
					}
				});
			}
		};
		signUp.addHandler(signupForm, 'submit', submitHandler);

		const toLoginLink = signUp.items.toLoginLink;
		const clickHandler = (event) => {
			event.preventDefault();
			this.goToPage(router.login, true);
		};
		toLoginLink.addHandler('click', clickHandler);
	}

	#renderLogin() {
		const config = this.config.loginConfig;
		const login = new LoginForm(config, this.root);
		login.render();
		this.#structure.login = login;

		const loginForm = login.htmlElement.querySelector('form');
		const submitHandler = (event) => {
			event.preventDefault();
			const data = validateForm(config.inputs, loginForm);
			if (data) {
				Ajax.sendForm('/auth/login', data, (response, error) => {
					if (response.ok) {
						this.goToPage(router.feed, true);
					} else {
						console.log('status:', response.statusText);
					}
				});
			}
		};
		login.addHandler(loginForm, 'submit', submitHandler);

		const toSignupLink = login.items.toSignupLink;
		const clickHandler = (event) => {
			event.preventDefault();
			this.goToPage(router.signup, true);
		};
		toSignupLink.addHandler('click', clickHandler);
	}*/
}