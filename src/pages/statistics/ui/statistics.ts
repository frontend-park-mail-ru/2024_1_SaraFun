import { Router } from '../../../app/Router';
import template from './statistics.pug';
import { getStats } from '../api/getStats';
import { Statistics } from '../../../entities/Statistics';

export class StatisticsPage {
	private parent: Router;
	/**
   * Creates an instance of RegistrationPage.
   * @param {Object} parent - The parent object.
   */
	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render();
		//this.addEventListeners();
	}

    async render(): Promise<void> {
		const stats: Statistics[] = await getStats();
		this.parent.root.innerHTML = template({stats});
	}
}