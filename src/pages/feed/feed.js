import Navbar from '../../widgets/Navbar/navbar.js';
import template from './ui/feed.pug';
import { getUsers } from './api/getUsers.js';
import { putLikeOrDislike } from './api/putLikeOrDislike.js';
import { showImage, scrollLeft, scrollRight } from '../../shared/lib/carousel.js';


/**
 * Class representing the Feed Page.
 */
export class FeedPage {
	/**
     * Creates an instance of FeedPage.
     * @param {Object} parent - The parent object containing the root element.
     */
	constructor(parent) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render().then(() => {;
			this.navbar = new Navbar(document.querySelector('navbar'), parent);
		});
	}

	/**
     * Renders the feed page by fetching users and initializing cards.
     * @returns {Promise<void>} - A promise that resolves when the rendering is complete.
     */
	async render() {
		let users = await getUsers();

		/**
         * Initializes the cards by setting their styles and adding them to the container.
         */
		function initCards() { 
			let newCards = document.querySelectorAll('.tinder__card:not(.removed)');
			const maxOffsetIndex = 10;
		
			newCards.forEach(function (card, index) {
				const limitedIndex = Math.min(index, maxOffsetIndex); 
				card.style.zIndex = allCards.length - index;
				card.style.transform = 
					'scale(' + (20 - limitedIndex) / 20 + ') ' + 
					'translateY(-' + 30 * limitedIndex + 'px)';
				card.style.opacity = (10 - index) / 10;
			});
				
			tinderContainer.classList.add('loaded');
		}

		this.parent.root.innerHTML = template({ users });
		if (users === null)
		{return;}
		let tinderContainer = document.querySelector('.tinder');
		let allCards = document.querySelectorAll('.tinder__card');
		let nope = document.getElementById('nope');
		let love = document.getElementById('love');

		allCards.forEach((card, index) => {
			const user = users[index];
			if (user) {
				card.setAttribute('data-item-id', user.user);
			}

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
		initCards();

		allCards.forEach(function (el) {
			let startX, startY, currentX, currentY, initialX, initialY;
			let isDragging = false;
			let isSwiping = false;
			
			/**
             * Starts the drag event.
             * @param {Event} event - The drag start event.
             */
			function startDrag(event) {
				if (event.target.tagName === 'BUTTON') {
					return;
				}
				isDragging = true;
				startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
				startY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;
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
				console.log('start');
				console.log("INITIAL X: ", initialX, " INITIAL Y: ", initialY);
			}
			
			/**
             * Handles the drag event.
             * @param {Event} event - The drag event.
             */
			function drag(event) {
				if (!isDragging) {return;}
				isSwiping = true;
				//isDragging = false;
			
				currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
				currentY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
			
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
				console.log('moving');
			}
			
			/**
             * Ends the drag event.
             */
			async function endDrag() {
				if (!isSwiping) {
					return;
				}
				isSwiping = false;
				isDragging = false;
			
				el.classList.remove('moving');
				tinderContainer.classList.remove('tinder_love');
				tinderContainer.classList.remove('tinder_nope');
				console.log("CURRENT X: ", currentX, " CURRENT Y: ", currentY);
				let deltaX = currentX - startX;
				let deltaY = currentY - startY;
				let moveOutWidth = document.body.clientWidth;
				let keep = (Math.abs(deltaX) < 80 || deltaX === NaN);
				console.log("DELTA X:", deltaX, " DELTA Y: ", deltaY);
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
    				await putLikeOrDislike(love, userId);

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
		function createButtonListener(love) {
			return async function (event) {
				let cards = document.querySelectorAll('.tinder__card:not(.removed)');
				let moveOutWidth = document.body.clientWidth * 1.5;
			
				if (!cards.length) {
					return false;
				}
			
				let card = cards[0];
				let userId = card.getAttribute('data-item-id');

				await putLikeOrDislike(love, userId);
			
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