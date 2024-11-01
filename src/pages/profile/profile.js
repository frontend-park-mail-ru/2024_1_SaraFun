import template from './ui/profile.pug';
import Navbar from '../../widgets/Navbar/navbar.js';


/**
 * Class representing the profile page.
 */
export class ProfilePage {
	/**
   * Creates an instance of ProfilePage.
   * @param {Object} parent - The parent object.
   */
	constructor(parent) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.parent.root.innerHTML = this.render();
		this.navbar = new Navbar(document.querySelector('nav'), parent);
	}

	/**
   * Renders the profile page template.
   * @returns {string} - The HTML string of the profile page template.
   */
	render() {
		return template();
	}
}