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
    }

    render(): string {
		return template();
	}
}