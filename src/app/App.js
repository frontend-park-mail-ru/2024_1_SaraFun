import templateFeed from '../Compile/feed.js';
import templateLogin from '../Compile/login.js';
import templateSignup from '../Compile/signup.js';
import templateCard from '../Compile/SwipeCard.js';

function renderFeed (parent) {
	function createCard(user) {
		return `
			<div class="tinder--card">
				<div class="image-section">
					<img src="../assets/img/image.svg" alt="Image" draggable="false">
				</div>
				<div class="form-section-tinder">
					<h1>${user.username}</h1>
					<text-base>Пол: ${user.gender}</text-base>
					<text-base>Возраст: ${user.age}</text-base>
				</div>
			</div>
		`;
	}
	function initCards() { 
		var newCards = document.querySelectorAll('.tinder--card:not(.removed)');
	
		newCards.forEach(function (card, index) {
		  card.style.zIndex = allCards.length - index;
		  card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
		  card.style.opacity = (10 - index) / 10;
		});
			  
		tinderContainer.classList.add('loaded');
	}
	parent.innerHTML = '';
	const users = [ { "id": 1, "username": "Andrey", "age": 20, "gender": "male"}, { "id": 2, "username": "Anton", "age": 20, "gender": "male"}, { "id": 2, "username": "Anton", "age": 20, "gender": "male"},{ "id": 2, "username": "Anton", "age": 20, "gender": "male"},{ "id": 2, "username": "Anton", "age": 20, "gender": "male"},{ "id": 2, "username": "Anton", "age": 20, "gender": "male"},{ "id": 2, "username": "Anton", "age": 20, "gender": "male"},{ "id": 2, "username": "Anton", "age": 20, "gender": "male"},{ "id": 2, "username": "Anton", "age": 20, "gender": "male"},{ "id": 2, "username": "Anton", "age": 20, "gender": "male"} ];
	parent.innerHTML = templateFeed();
	const tinderContainer = document.querySelector('.tinder--cards');
	//tinderContainer.innerHTML = templateCard(users[0]);
	tinderContainer.innerHTML = users.map(user => createCard(user)).join('');
	var allCards = document.querySelectorAll('.tinder--card');
	initCards();
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