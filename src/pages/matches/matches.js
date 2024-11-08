import Navbar from '../../widgets/Navbar/navbar.js';
import { showImage, scrollLeft, scrollRight } from '../../shared/lib/carousel.js';
import template from './ui/matches.pug';
import { getMatches } from './api/getMatches.js';

export class MatchesPage {
	constructor(parent) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render().then(() => {;
			this.navbar = new Navbar(document.querySelector('navbar'), parent);
		});
	}

	async render() {
		let users = await getMatches();
		this.parent.root.innerHTML = template({ users });
		let allCards = document.querySelectorAll('.match-card');
		if (allCards) {
			allCards.forEach((card, index) => {
				const user = users[index];
				if (user.images != null && user.images.length > 1) {
					const carousel = card.querySelector('.carousel');
					if (carousel) {
						carousel.setAttribute('data-current-index', 0);
						showImage(carousel, 0);
	
						const leftButton = card.querySelector('.carousel__button_left');
						const rightButton = card.querySelector('.carousel__button_right');
	
						leftButton.addEventListener('click', (event) => {
							scrollLeft(carousel);
						});
						rightButton.addEventListener('click', (event) => {
							scrollRight(carousel);
						});
					}
				}
			});
		}
	}
}