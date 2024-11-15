import Navbar from '../../widgets/Navbar/navbar';
import { showImage, scrollLeft, scrollRight } from '../../shared/lib/carousel';
import template from './ui/matches.pug';
import { getMatches } from './api/getMatches';
import { Router } from '../../app/Router';
import { User } from '../../entities/User/User';

export class MatchesPage {
	private parent: Router;
	private navbar: Navbar | undefined;

	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render().then(() => {;
			this.navbar = new Navbar(document.querySelector('navbar'), parent);
		});
	}

	async render(): Promise<void> {
		let users: User[] = await getMatches();
		this.parent.root.innerHTML = template({ users });
		let allCards = document.querySelectorAll('.match-card') as NodeListOf<HTMLElement>;
		if (allCards) {
			allCards.forEach((card, index) => {
				const user = users[index];
				if (user.images != null && user.images.length > 1) {
					const carousel = card.querySelector('.carousel') as HTMLElement;
					if (carousel) {
						carousel.setAttribute('data-current-index', '0');
						showImage(carousel, 0);
	
						const leftButton = card.querySelector('.carousel__button_left') as HTMLElement;
						const rightButton = card.querySelector('.carousel__button_right') as HTMLElement;
	
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