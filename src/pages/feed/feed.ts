import Navbar from '../../widgets/Navbar/navbar';
import template from './ui/feed.pug';
import { getUsers } from './api/getUsers';
import { putLikeOrDislike } from './api/putLikeOrDislike';
import { showImage, scrollLeft, scrollRight } from '../../shared/lib/carousel';
import { User } from '../../entities/User/User'


/**
 * Class representing the Feed Page.
 */
export class FeedPage {
	private parent: { root: HTMLElement };
  	private navbar: Navbar | undefined;
	/**
     * Creates an instance of FeedPage.
     * @param {Object} parent - The parent object containing the root element.
     */
	constructor(parent: { root: HTMLElement }) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render().then(() => {;
			this.navbar = new Navbar(document.querySelector('navbar') as HTMLElement, parent);
		});
	}

	/**
     * Renders the feed page by fetching users and initializing cards.
     * @returns {Promise<void>} - A promise that resolves when the rendering is complete.
     */
	async render(): Promise<void> {
		let users: User[] = await getUsers();

		/**
         * Initializes the cards by setting their styles and adding them to the container.
         */
		function initCards(): void { 
			let newCards = document.querySelectorAll('.tinder__card:not(.removed)') as NodeListOf<HTMLElement>;
			const maxOffsetIndex = 10;
		
			newCards.forEach(function (card, index) {
				const limitedIndex = Math.min(index, maxOffsetIndex); 
				card.style.zIndex = `${allCards.length - index}`;
				card.style.transform = 
					'scale(' + (20 - limitedIndex) / 20 + ') ' + 
					'translateY(-' + 30 * limitedIndex + 'px)';
				card.style.opacity = `${(10 - index) / 10}`;
			});
				
			tinderContainer.classList.add('loaded');
		}

		this.parent.root.innerHTML = template({ users });
		if (users === null)
		{return;}
		let tinderContainer = document.querySelector('.tinder') as HTMLElement;
		let allCards = document.querySelectorAll('.tinder__card') as NodeListOf<HTMLElement>;
		let nope = document.getElementById('nope') as HTMLElement;
		let love = document.getElementById('love') as HTMLElement;

		allCards.forEach((card, index) => {
			const user = users[index];
			if (user) {
				card.setAttribute('data-item-id', `${user.user}`);
			}

			if (user.images != null && user.images.length > 1) {
				const carousel = card.querySelector('.carousel') as HTMLElement;
				if (carousel) {
					carousel.setAttribute('data-current-index', `${0}`);
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
		initCards();

		allCards.forEach(function (el) {
			let startX: number, startY: number, currentX: number, currentY: number, initialX: number, initialY: number;
			let isDragging = false;
			let isSwiping = false;
			
			/**
             * Starts the drag event.
             * @param {Event} event - The drag start event.
             */
			function startDrag(event: MouseEvent | TouchEvent): void {
				if ((event.target as HTMLElement).tagName === 'BUTTON') {
					return;
				}
				isDragging = true;
				startX = event.type === 'touchstart' ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;
				startY = event.type === 'touchstart' ? (event as TouchEvent).touches[0].clientY : (event as MouseEvent).clientY;
				if (el.style.transform && el.style.transform.includes('translate')) {
					let transformValues = el.style.transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
					if (transformValues) {
						initialX = parseFloat(transformValues[1]);
						initialY = parseFloat(transformValues[2]);
					} else {
						initialX = 0;
						initialY = 0;
					}
			  	} else {
					initialX = 0;
					initialY = 0;
			  	}
			  	el.classList.add('moving');
			}
			
			/**
             * Handles the drag event.
             * @param {Event} event - The drag event.
             */
			function drag(event: MouseEvent | TouchEvent): void {
				if (!isDragging) {return;}
				isSwiping = true;
			
				currentX = event.type === 'touchmove' ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;
				currentY = event.type === 'touchmove' ? (event as TouchEvent).touches[0].clientY : (event as MouseEvent).clientY;
			
				let deltaX = currentX - startX;
				let deltaY = currentY - startY;
			
				tinderContainer.classList.toggle('tinder_love', deltaX > 0);
				tinderContainer.classList.toggle('tinder_nope', deltaX < 0);
			
				let xMulti = deltaX * 0.03;
				let yMulti = deltaY / 80;
				let rotate = xMulti * yMulti;
			
				el.style.transform = 
					'translate(' + (initialX + deltaX) + 'px, ' + 
					(initialY + deltaY) + 'px) rotate(' + rotate + 'deg)';
			}
			
			/**
             * Ends the drag event.
             */
			async function endDrag(): Promise<void> {
				if (!isSwiping) {
					return;
				}
				isSwiping = false;
				isDragging = false;
			
				el.classList.remove('moving');
				tinderContainer.classList.remove('tinder_love');
				tinderContainer.classList.remove('tinder_nope');
				let deltaX = currentX - startX;
				let deltaY = currentY - startY;
				let moveOutWidth = document.body.clientWidth;
				let keep = Math.abs(deltaX) < 80;
				el.classList.toggle('removed', !keep);
			
				if (keep) {
					el.style.transform = '';
			  	} else {
					let toX = deltaX > 0 ? moveOutWidth : -moveOutWidth;
					let toY = deltaY;
					let xMulti = deltaX * 0.03;
					let yMulti = deltaY / 80;
					let rotate = xMulti * yMulti;
		
					el.style.transform = 'translate(' + toX + 'px, ' + toY + 'px) rotate(' + rotate + 'deg)';

					let love = deltaX > 0;
					let userId = el.getAttribute('data-item-id');
    				await putLikeOrDislike(love, parseInt(userId));

					initCards();
			  	}
			}
	  
			el.addEventListener('mousedown', startDrag);
			el.addEventListener('mousemove', drag);
			el.addEventListener('mouseup', endDrag);
			el.addEventListener('mouseleave', endDrag);
	  
			el.addEventListener('touchstart', startDrag);
			el.addEventListener('touchmove', drag);
			el.addEventListener('touchend', endDrag);
			el.addEventListener('touchcancel', endDrag);
		});
		
		/**
         * Creates a button listener for the like or dislike buttons.
         * @param {boolean} love - Indicates if the button is for liking (true) or disliking (false).
         * @returns {Function} - The event listener function.
         */
		function createButtonListener(love: boolean) {
			return async function (event: Event) {
				let cards = document.querySelectorAll('.tinder__card:not(.removed)') as NodeListOf<HTMLElement>;
				let moveOutWidth = document.body.clientWidth * 1.5;
			
				if (!cards.length) {
					return false;
				}
			
				let card = cards[0];
				let userId = card.getAttribute('data-item-id');

				await putLikeOrDislike(love, parseInt(userId));
			
				card.classList.add('removed');
			
				if (love) {
					card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
				} else {
					card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
				}
			
				initCards();
			
				event.preventDefault();
			};
		}
  
		let nopeListener = createButtonListener(false);
		let loveListener = createButtonListener(true);
		
		nope.addEventListener('click', nopeListener);
		love.addEventListener('click', loveListener);
	}
}