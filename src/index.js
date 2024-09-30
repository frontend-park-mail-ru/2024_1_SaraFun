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

            if (!isValidLogin(login)) {
                document.getElementById('login-error').style.display = 'block';
                valid = false;
            } else {
                document.getElementById('login-error').style.display = 'none';
            }

            if (!isValidPassword(password)) {
                document.getElementById('password-error').style.display = 'block';
                valid = false;
            } else {
                document.getElementById('password-error').style.display = 'none';
            }

            if (valid) {
                registerUser(login, password)
            }
            
        });
    }

    function isValidLogin(login) {
        // Проверка длины логина
        if (login.length < 5 || login.length > 15) {
            console.log("Логин должен содержать от 5 до 15 символов.");
            return false;
        }
    
        // Проверка на наличие недопустимых специальных символов
        const invalidChars = /[^a-zA-Z0-9_-]/;
        if (invalidChars.test(login)) {
            console.log("Логин может содержать только буквы, цифры, '_' и '-'.");
            return false;
        }
    
        // Проверка на первую и последнюю позицию для специальных символов
        if (login.startsWith('_') || login.startsWith('-') || login.endsWith('_') || login.endsWith('-')) {
            console.log("Специальные символы '_' и '-' не могут быть первыми или последними символами.");
            return false;
        }
    
        // Проверка на первую позицию для цифр
        if (/\d/.test(login.charAt(0))) {
            console.log("Логин не может начинаться с цифры.");
            return false;
        }
    
        return true;
    }

    function isValidPassword(password) {
        if (!password) {
            return false;
        }
        // Проверка длины пароля
        if (password.length < 6 || password.length > 40) {
            console.log("Пароль должен содержать от 6 до 40 символов.");
            return false;
        }
    
        // Проверка на наличие хотя бы одной цифры
        if (!/\d/.test(password)) {
            console.log("Пароль должен содержать хотя бы одну цифру.");
            return false;
        }
    
        // Проверка на допустимые специальные символы
        for (let char of password) {
            if (!/[a-zA-Z0-9*?!$]/.test(char)) {
                console.log("Пароль содержит недопустимые символы.");
                return false;
            }
        }

        return true;
    }
    

    async function registerUser(login, password) {
        try {
            console.log(login, password)
            const response = await fetch('http://5.188.140.7:8080/signup', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ "username": login, "password": password }),
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
                loginUser(login, password)
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
                credentials: "include",
                body: JSON.stringify({ "username": login, "password": password }),
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

    if (match.route.path === "/feed") {
        async function fetchUsers() {
            try {
                const response = await fetch('http://5.188.140.7:8080/getusers', {
                        method: 'GET',
                        credentials: "include",
                        headers: {
                            'Content-Type': 'application/json'
                        }
                });
                if (!response.ok) {
                    throw new Error('Ошибка при получении списка пользователей');
                }
                return await response.json();
            } catch (error) {
                console.error('Ошибка при получении списка пользователей:', error);
                return [];
            }
        }

        function displayUser(user) {
            const formSection = document.querySelector('.form-section');
            if (user) {
                formSection.innerHTML = `
                    <h1 class="description">${user.login}</h1>
                    <p>Информация о пользователе: ${user.info}</p>
                    <div class="card-actions">
                        <button class="btn custom-btn" id="dislike">
                            <img src="../assets/img/X.svg" alt="X">
                        </button>
                        <button class="btn custom-btn" id="like">
                            <img src="../assets/img/Heart.svg" alt="Heart">
                        </button>
                    </div>
                `;
            } else {
                formSection.innerHTML = '<p>Нет больше пользователей</p>';
            }
        }

        async function loadFeed() {
            const users = await fetchUsers();
            let currentIndex = 0;
    
            function showNextUser() {
                if (currentIndex < users.length) {
                    displayUser(users[currentIndex]);
                    currentIndex++;
                } else {
                    displayUser(null);
                }
            }
    
            const root = document.getElementById('root');
            root.innerHTML = `
                <div class="container">
                    <div class="form-section"></div>
                    <div class="image-section">
                        <img src="../assets/img/image.svg" alt="Image">
                    </div>
                </div>
            `;
    
            showNextUser();
    
            root.addEventListener('click', (event) => {
                if (event.target.closest('#like') || event.target.closest('#dislike')) {
                    showNextUser();
                }
            });
        }
        loadFeed();
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
