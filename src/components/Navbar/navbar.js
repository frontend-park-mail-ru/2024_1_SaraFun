import { logout } from '../../modules/api.js';

export default class Navbar {
    constructor(nav, app) {
        this.nav = nav;
        this.app = app;
        this.addEventListeners();
    }
  
    addEventListeners() {
        const navLinks = document.querySelectorAll('li.nav-link a');
        console.log('navLinks', navLinks);

        navLinks.forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            const path = link.getAttribute('href');
            this.app.render(path);
          });
        });
        
        const button = document.getElementById('button-logout');
        console.log('button', button);
        if (button) {
            button.addEventListener('click', async () => {
              console.log('try to logout');
              await logout();
              this.app.render('/login');
            });
        }
    }
  }