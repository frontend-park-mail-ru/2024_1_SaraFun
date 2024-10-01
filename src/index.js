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
        { path: "/cards", view: CardView },
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

    if (match.route.path === "/cards") {
        var tinderContainer = document.querySelector('.tinder');
        var allCards = document.querySelectorAll('.tinder--card');
        var nope = document.getElementById('nope');
        var love = document.getElementById('love');

        function initCards(card, index) {
            var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

            newCards.forEach(function (card, index) {
                card.style.zIndex = allCards.length - index;
                card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
                card.style.opacity = (10 - index) / 10;
            });
            
            tinderContainer.classList.add('loaded');
        }

        initCards();

        allCards.forEach(function (el) {
            var startX, startY, currentX, currentY, initialX, initialY;
            var isDragging = false;
    
            function startDrag(event) {
                isDragging = true;
                startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
                startY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;
                if (el.style.transform && el.style.transform.includes('translate')) {
                    var transformValues = el.style.transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
                    if (transformValues) {
                        initialX = parseFloat(transformValues[1]);
                        initialY = parseFloat(transformValues[2]);
                    } else {
                        initialX = 0;
                        initialY = 0;
                    }
                } else {
                    initialX = 0;
                    initialY = 0;
                }
                el.classList.add('moving');
            }

            function drag(event) {
                if (!isDragging) return;
    
                currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
                currentY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
    
                var deltaX = currentX - startX;
                var deltaY = currentY - startY;
    
                tinderContainer.classList.toggle('tinder_love', deltaX > 0);
                tinderContainer.classList.toggle('tinder_nope', deltaX < 0);
    
                var xMulti = deltaX * 0.03;
                var yMulti = deltaY / 80;
                var rotate = xMulti * yMulti;
    
                el.style.transform = 'translate(' + (initialX + deltaX) + 'px, ' + (initialY + deltaY) + 'px) rotate(' + rotate + 'deg)';
            }

            function endDrag(event) {
                if (!isDragging) return;
                isDragging = false;
    
                el.classList.remove('moving');
                tinderContainer.classList.remove('tinder_love');
                tinderContainer.classList.remove('tinder_nope');
    
                var deltaX = currentX - startX;
                var deltaY = currentY - startY;
                var moveOutWidth = document.body.clientWidth;
                var keep = Math.abs(deltaX) < 80;
    
                el.classList.toggle('removed', !keep);
    
                if (keep) {
                    el.style.transform = '';
                } else {
                    var toX = deltaX > 0 ? moveOutWidth : -moveOutWidth;
                    var toY = deltaY;
                    var xMulti = deltaX * 0.03;
                    var yMulti = deltaY / 80;
                    var rotate = xMulti * yMulti;

                    el.style.transform = 'translate(' + toX + 'px, ' + toY + 'px) rotate(' + rotate + 'deg)';
                    initCards();
                }
            }

            el.addEventListener('mousedown', startDrag);
            el.addEventListener('mousemove', drag);
            el.addEventListener('mouseup', endDrag);
            el.addEventListener('mouseleave', endDrag);

            el.addEventListener('touchstart', startDrag);
            el.addEventListener('touchmove', drag);
            el.addEventListener('touchend', endDrag);
            el.addEventListener('touchcancel', endDrag);
        });

        function createButtonListener(love) {
            return function (event) {
                var cards = document.querySelectorAll('.tinder--card:not(.removed)');
                var moveOutWidth = document.body.clientWidth * 1.5;
    
                if (!cards.length) return false;
    
                var card = cards[0];
    
                card.classList.add('removed');
    
                if (love) {
                    card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
                } else {
                    card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
                }
    
                initCards();
    
                event.preventDefault();
            };
        }
    
        var nopeListener = createButtonListener(false);
        var loveListener = createButtonListener(true);
    
        nope.addEventListener('click', nopeListener);
        love.addEventListener('click', loveListener);
    }

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
                registerUser(login, password);
            }
            
        });

        document.getElementById('link').addEventListener('click', (event) => {
            event.preventDefault();
            navigateTo(event.target.href);
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
            console.log(login, password);
            const response = await fetch('http://5.188.140.7:8080/signup', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username": login, "password": password}),
            });
    
            if (!response.ok) {
                throw new Error('Ошибка регистрации');
            }

            window.location.href = '/feed';


            
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
                loginUser(login, password);
            }
        });
        
        document.getElementById('link').addEventListener('click', (event) => {
            event.preventDefault();
            navigateTo(event.target.href);
        });
    }

    async function loginUser(login, password) {
        try {
            console.log(login, password);
            const response = await fetch('http://5.188.140.7:8080/signin', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username": login, "password": password}),
            });

            if (!response.ok) {
                throw new Error('Ошибка входа');
            }
    
            
            window.location.href = '/feed';
    
        } catch (error) {
            console.error('Ошибка:', error);
            
        }
    }

    if (match.route.path === "/feed") {
        async function fetchUsers() {
            try {
                const response = await fetch('http://5.188.140.7:8080/getusers', {
                        method: 'GET',
                        credentials: 'include',
                        mode: 'cors'
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
