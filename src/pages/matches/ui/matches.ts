import template from './matches.pug';
import { getMatches } from '../api/getMatches';
import { Router } from '../../../app/Router';
import { User } from '../../../entities/User/User';
import { addCarousel } from '../../../shared/lib/carousel/addCarousel';
import templateCard from './card.pug';
import { openReportModal } from '../../../features/report';

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
			this.addCardClickListeners(allCards, users);
		}
	}

	addCardClickListeners(cards: NodeListOf<HTMLElement>, users: User[]): void {
		cards.forEach((card, index) => {
		  	card.addEventListener('click', (event) => {
				if (event.target instanceof HTMLElement && event.target.tagName === 'BUTTON') {
					return;
				}
				this.openProfileModal(users[index]);
		  	});
		});
	}

	openProfileModal(user: User): void {
		const modal = document.createElement('div');
		modal.classList.add('profile-modal');
		modal.innerHTML = templateCard({user});
		addCarousel(modal.querySelectorAll('.tinder__card'), [user]);
		this.parent.root.appendChild(modal);
		
		modal.classList.add('opening');
		modal.addEventListener('animationend', () => {
			modal.classList.remove('opening');
		}, { once: true });
		
		if (user) {
			const reportButton = modal.querySelector('.report') as HTMLButtonElement;
			reportButton.addEventListener('click', () => {
				openReportModal(user.user);
				const reportForm = document.getElementById('reportForm') as HTMLFormElement;
				reportForm.addEventListener('submit', async (event) => {
					event.preventDefault();
					setTimeout(() => {
						closeModal();
					}, 500);
				});
			});
		}
	
		const closeModal = () => {
			modal.classList.add('closing');
			modal.addEventListener('animationend', () => {
				modal.style.display = 'none';
				modal.classList.remove('closing');
			}, { once: true });
		};
	
		modal.addEventListener('click', (event) => {
			if ((event.target as HTMLElement).classList.contains('profile-modal')) {
				closeModal();
			}
		});
	}
}