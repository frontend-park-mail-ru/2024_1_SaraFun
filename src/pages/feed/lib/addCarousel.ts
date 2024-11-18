import { User } from '../../../entities/User/User';
import { showImage, scrollLeft, scrollRight } from '../../../shared/lib/carousel';

export function addCarousel(cards: NodeListOf<HTMLElement>, users : User[]): void {
    cards.forEach((card, index) => {
        const user = users[index];
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
}
