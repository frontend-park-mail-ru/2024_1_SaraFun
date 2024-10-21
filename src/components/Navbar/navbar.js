import { logout } from '../../modules/apiService.js';

export default class Navbar {
    constructor(nav, app) {
        this.nav = nav;
        this.app = app;
        this.addEventListeners();
    }
  
    addEventListeners() {
        const navLinks = document.querySelectorAll('li.nav-link a');

        navLinks.forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            const path = link.getAttribute('href');
            this.app.render(path);
          });
        });
        
        const button = document.getElementById('button-logout');
        if (button) {
            button.addEventListener('click', async () => {
              console.log('try to logout');
              await logout();
              this.app.render('/login');
            });
        }
    }
  }