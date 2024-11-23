import { Router } from '../../../app/Router';
import template from './statistics.pug';

export class StatisticsPage {
	private parent: Router;
	/**
   * Creates an instance of RegistrationPage.
   * @param {Object} parent - The parent object.
   */
	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.parent.root.innerHTML = this.render();
		//this.addEventListeners();
	}

    render(): string {
		return template();
	}
}