import { Router } from '../../../app/Router';
import template from './chats.pug';

export class ChatsPage {
	private parent: Router;
	/**
     * Creates an instance of FeedPage.
     * @param {Object} parent - The parent object containing the root element.
     */
	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render();
	}

    async render(): Promise<void> {
		this.parent.root.innerHTML = template();
    }
}