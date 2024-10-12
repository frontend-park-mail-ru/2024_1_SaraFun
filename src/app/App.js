import templateFeed from '../Compile/feed.js';
import templateLogin from '../Compile/login.js';
import templateSignup from '../Compile/signup.js';

function renderFeed (parent) {
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
	const users = [ 
		{ username: "Andrey", gender: "male", age: 20}, 
		{ username: "Anton", gender: "male", age: 20},
		{ username: "Ivan", gender: "male", age: 20},	
		{ username: "Alex", gender: "male", age: 20},
		{ username: "Alena", gender: "female", age: 20},
		{ username: "Andrey", gender: "male", age: 20}, 
		{ username: "Anton", gender: "male", age: 20},
		{ username: "Ivan", gender: "male", age: 20},	
		{ username: "Alex", gender: "male", age: 20},
		{ username: "Alena", gender: "female", age: 20},
		{ username: "Andrey", gender: "male", age: 20}
	];
	parent.innerHTML = templateFeed({ users} );
	const tinderContainer = document.querySelector('.tinder--cards');
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