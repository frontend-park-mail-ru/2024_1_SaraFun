import Login from './js/views/Login.js';
import CardView from './js/views/CardView.js';
import Registration from './js/views/Registration.js';

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

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

const navMenu = document.querySelector('#nav-bar');
const renderNavBar = async () => {
  navMenu.innerHTML = '';
  const isAuthenticated = await checkAuth();

  if (isAuthenticated) {
    //console.log('auth');
    navMenu.innerHTML = `
      <a href='/feed' class="nav__link" data-link>Главная</a>
      <button type="button" id="logout-button" style="width: 200px; height: fit-content">Выйти из аккаунта</button>
    `;
    document.getElementById('logout-button').addEventListener('click', async () => { 
      await logout();
      await renderNavBar();
      navigateTo('/');
    });
  } else {
    navMenu.innerHTML = `
      <a href='/' class="nav__link" data-link>Войти в аккаунт</a>
      <a href='/registration' class="nav__link" data-link>Создать аккаунт</a>
    `;
  }
}

const router = async () => {
  const routes = [
    { path: '/', view: Login },
    { path: '/feed', view: CardView },
    { path: '/registration', view: Registration }
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

  if (match.route.path === '/feed') {
    const isAuth = await checkAuth()
    if (!isAuth) {
      navigateTo('/login');
    } else {
    }
  }
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', async () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  
  await renderNavBar();
  router();
}); 
