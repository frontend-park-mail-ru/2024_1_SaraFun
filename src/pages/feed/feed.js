import template from '../../Compile/feed.js';
import { fetchUsers } from '../../modules/apiService.js';
import Navbar from '../../components/Navbar/navbar.js';

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
			this.navbar = new Navbar(document.querySelector('nav'), parent);
		});
	}

	/**
     * Renders the feed page by fetching users and initializing cards.
     * @returns {Promise<void>} - A promise that resolves when the rendering is complete.
     */
	async render() {
		var users = await fetchUsers();
		if (users.length === 0) {
			users = [{username: "Анкеты закончились :(", gender: "-", age: "-"}];
		}

		/**
         * Initializes the cards by setting their styles and adding them to the container.
         */
		function initCards() { 
			var newCards = document.querySelectorAll('.tinder--card:not(.removed)');
		
			newCards.forEach(function (card, index) {
				card.style.zIndex = allCards.length - index;
				card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
				card.style.opacity = (10 - index) / 10;
			});
				
			tinderContainer.classList.add('loaded');
		}

		this.parent.root.innerHTML = template({ users });
		var tinderContainer = document.querySelector('.tinder');
		var allCards = document.querySelectorAll('.tinder--card');
		var nope = document.getElementById('nope');
		var love = document.getElementById('love');
		initCards();

		allCards.forEach(function (el) {
			var startX, startY, currentX, currentY, initialX, initialY;
			var isDragging = false;
			
			/**
             * Starts the drag event.
             * @param {Event} event - The drag start event.
             */
			function startDrag(event) {
				isDragging = true;
				startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
				startY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;
				if (el.style.transform && el.style.transform.includes('translate')) {
					var transformValues = el.style.transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
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
			
				var deltaX = currentX - startX;
				var deltaY = currentY - startY;
			
				tinderContainer.classList.toggle('tinder_love', deltaX > 0);
				tinderContainer.classList.toggle('tinder_nope', deltaX < 0);
			
				var xMulti = deltaX * 0.03;
				var yMulti = deltaY / 80;
				var rotate = xMulti * yMulti;
			
				el.style.transform = 'translate(' + (initialX + deltaX) + 'px, ' + (initialY + deltaY) + 'px) rotate(' + rotate + 'deg)';
			}
			
			/**
             * Ends the drag event.
             */
			function endDrag() {
				if (!isDragging) {return;}
				isDragging = false;
			
				el.classList.remove('moving');
				tinderContainer.classList.remove('tinder_love');
				tinderContainer.classList.remove('tinder_nope');
			
				var deltaX = currentX - startX;
				var deltaY = currentY - startY;
				var moveOutWidth = document.body.clientWidth;
				var keep = Math.abs(deltaX) < 80;
			
				el.classList.toggle('removed', !keep);
			
				if (keep) {
					el.style.transform = '';
			  	} else {
					var toX = deltaX > 0 ? moveOutWidth : -moveOutWidth;
					var toY = deltaY;
					var xMulti = deltaX * 0.03;
					var yMulti = deltaY / 80;
					var rotate = xMulti * yMulti;
		
					el.style.transform = 'translate(' + toX + 'px, ' + toY + 'px) rotate(' + rotate + 'deg)';
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
			return function (event) {
				var cards = document.querySelectorAll('.tinder--card:not(.removed)');
				var moveOutWidth = document.body.clientWidth * 1.5;
			
				if (!cards.length) {return false;}
			
				var card = cards[0];
			
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
  
		var nopeListener = createButtonListener(false);
		var loveListener = createButtonListener(true);
		
		nope.addEventListener('click', nopeListener);
		love.addEventListener('click', loveListener);
	}
}