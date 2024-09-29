import Login from "./js/views/Login.js";
import Feed from "./js/views/Feed.js";
import CardView from "./js/views/CardView.js";
import Registration from "./js/views/Registration.js";
import App from './app/App.js';

const root = document.querySelector('#root');

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Login },
        { path: "/feed", view: Feed },
        { path: "/feed/:id", view: CardView },
        { path: "/registration", view: Registration }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    root.innerHTML = await view.getHtml();

    // регистрация
    if (match.route.path === "/registration") {
        document.getElementById('register-button').addEventListener('click', () => {
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            let valid = true;

            if (!login) {
                document.getElementById('login-error').style.display = 'block';
                valid = false;
            } else {
                document.getElementById('login-error').style.display = 'none';
            }

            if (!password) {
                document.getElementById('password-error').style.display = 'block';
                valid = false;
            } else {
                document.getElementById('password-error').style.display = 'none';
            }

            if (valid) {
                console.log('Логин:', login); // Выводим логин в консоль для проверки
                registerUser(login, password);
            }
        });
    }
    async function registerUser(login, password) {
        try {
            console.log(login, password)
            const response = await fetch('http://5.188.140.7:8080/signup', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login, password }),
            });
    
            if (!response.ok) {
                throw new Error('Ошибка регистрации');
            }



            
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
    

    // логин
    if (match.route.path === "/") {
        document.getElementById('login-button').addEventListener('click', () => {
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            let valid = true;

            if (!login) {
                document.getElementById('login-error').style.display = 'block';
                valid = false;
            } else {
                document.getElementById('login-error').style.display = 'none';
            }

            if (!password) {
                document.getElementById('password-error').style.display = 'block';
                valid = false;
            } else {
                document.getElementById('password-error').style.display = 'none';
            }

            if (valid) {
                console.log('Логин:', login); // Выводим логин в консоль для проверки
                loginUser(login, password);
            }
        });
    }
    
    async function loginUser(login, password) {
        try {
            console.log(login, password)
            const response = await fetch('http://5.188.140.7:8080/signin', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login, password })
            });
    
            if (!response.ok) {
                throw new Error('Ошибка входа');
            }
    
            
            
            // Здесь вы добавить логику для перенаправления пользователя или отображения сообщения об успехе
    
        } catch (error) {
            console.error('Ошибка:', error);
            // Здесь можно показать сообщение об ошибке пользователю
        }
    }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
