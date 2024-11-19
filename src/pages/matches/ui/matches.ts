import template from './matches.pug';
import { getMatches } from '../api/getMatches';
import { Router } from '../../../app/Router';
import { User } from '../../../entities/User/User';
import { addCarousel } from '../../../shared/lib/carousel/addCarousel';
import templateCard from './card.pug';

export class MatchesPage {
	private parent: Router;

	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render();
	}

	async render(): Promise<void> {
		let users: User[] = await getMatches();
		this.parent.root.innerHTML = template({ users });
		let allCards = document.querySelectorAll('.match-card') as NodeListOf<HTMLElement>;
		if (allCards) {
			addCarousel(allCards, users);
		}
	}

	addCardClickListeners(cards: NodeListOf<HTMLElement>, users: User[]): void {
		cards.forEach((card, index) => {
		  	card.addEventListener('click', () => {
				this.openProfileModal(users[index]);
		  	});
		});
	}

	openProfileModal(user: User): void {
		const modal = document.createElement('div');
		modal.classList.add('profile-modal');
		modal.innerHTML = templateCard(user);
		document.body.appendChild(modal);
	
		const closeModal = () => {
		  modal.remove();
		};
	
		modal.addEventListener('click', (event) => {
		  if ((event.target as HTMLElement).classList.contains('profile-modal')) {
			closeModal();
		  }
		});
	
		const closeButton = modal.querySelector('.profile-modal__close');
		if (closeButton) {
		  closeButton.addEventListener('click', closeModal);
		}
	}
}