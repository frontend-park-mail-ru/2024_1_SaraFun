import template from './ui/csat.pug';
import { Router } from '../../app/Router';


export default class CsatPage {
    private parent: Router;
	/**
     * 
   * Creates an instance of Navbar.
   * @param {Object} app - The application instance.
   */
	constructor(router: Router) {
        this.parent = router;
		this.parent.root.innerHTML = '';
        this.parent.root.innerHTML = this.render();
        this.addEventListeners();
    }

    render(): string {
		return template();
	}

    addEventListeners(): void {
        const closeButton = document.getElementById('close-iframe-button');
        if (closeButton) {
          closeButton.addEventListener('click', () => {
            window.parent.postMessage('close-iframe', '*');
          });
        }
    }
}