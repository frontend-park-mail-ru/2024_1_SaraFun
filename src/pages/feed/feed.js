import Navbar from '../../widgets/Navbar/navbar.js';

import template from './ui/feed.pug';
import { getUsers } from './api/getUsers.js';
import { putLikeOrDislike } from './api/putLikeOrDislike.js';


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

	/*showImage(container, index) {
		const images = container.querySelectorAll('.image-section__img');
		images.forEach((img, i) => {
			img.style.display = i === index ? 'block' : 'none';
		});
	}

	scrollLeft(container) {
		const images = container.querySelectorAll('.image-section__img');
		let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
		currentIndex = (currentIndex - 1 + images.length) % images.length;  // Переход к последнему изображению
		container.setAttribute('data-current-index', currentIndex);
		this.showImage(container, currentIndex);
	}

	scrollRight(container) {
		const images = container.querySelectorAll('.image-section__img');
		let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
		currentIndex = (currentIndex + 1) % images.length;  // Переход к первому изображению
		container.setAttribute('data-current-index', currentIndex);
		this.showImage(container, currentIndex);
	}*/

	/**
     * Renders the feed page by fetching users and initializing cards.
     * @returns {Promise<void>} - A promise that resolves when the rendering is complete.
     */
	async render() {
		let users = await getUsers();
		/*if (users === null) {
			users = [{username: 'Анкеты закончились :(', gender: '-', age: '-'}];
		}*/

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
			/*if (user.profile.images != null && user.profile.images.length > 1) {
				const imageScrollContainer = card.querySelector('.image-scroll-container');
				if (imageScrollContainer) {
					imageScrollContainer.setAttribute('data-current-index', 0);
					this.showImage(imageScrollContainer, 0);

					const scrollLeftButton = card.querySelector('.scroll-button--left');
					const scrollRightButton = card.querySelector('.scroll-button--right');

					scrollLeftButton.addEventListener('click', (event) => {
						event.stopPropagation(); 
						this.scrollLeft(imageScrollContainer);
					});
					scrollRightButton.addEventListener('click', (event) => {
						event.stopPropagation();
						this.scrollRight(imageScrollContainer);
					});
				}
			}*/
		});
		initCards();

		allCards.forEach(function (el) {
			let startX, startY, currentX, currentY, initialX, initialY;
			let isDragging = false;
			
			/**
             * Starts the drag event.
             * @param {Event} event - The drag start event.
             */
			function startDrag(event) {
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
			}
			
			/**
             * Handles the drag event.
             * @param {Event} event - The drag event.
             */
			function drag(event) {
				if (!isDragging) {return;}
			
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
			}
			
			/**
             * Ends the drag event.
             */
			async function endDrag() {
				if (!isDragging) {
					return;
				}
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