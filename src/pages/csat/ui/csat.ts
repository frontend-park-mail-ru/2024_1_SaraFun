import template from './csat.pug';

interface QuestionConfig {
    [url: string]: string;
}

export class CsatPage {
    private parent: HTMLElement;
    private questions: QuestionConfig = {
        '/feed': 'Как вам наша главная страница?',
        '/matches': 'Как вам наши мэтчи?',
        '/profile': 'Как вам настройка профиля?',
    };
    private selectedRating: number | null = null;
	/**
     * 
   * Creates an instance of Navbar.
   * @param {Object} app - The application instance.
   */
	constructor(parent: HTMLElement) {
        this.parent = parent;
		this.parent.innerHTML = '';
        this.parent.innerHTML = this.render();
        this.addEventListeners();
    }

    render(): string {
		return template({question: this.questions[window.location.pathname]});
	}

    addEventListeners(): void {
        const closeButton = document.getElementById('close-iframe-button');
        if (closeButton) {
          closeButton.addEventListener('click', () => {
            window.parent.postMessage('close-iframe', '*');
          });
        }

        const ratingButtons = document.querySelectorAll<HTMLButtonElement>('.rating-button');
            ratingButtons.forEach(button => {
            button.addEventListener('click', () => this.selectRating(button));
        });

        const submitFeedbackButton = document.getElementById('submitFeedbackButton');
            if (submitFeedbackButton) {
                submitFeedbackButton.addEventListener('click', () => this.submitFeedback());
        }       
    }

    private selectRating(button: HTMLButtonElement): void {
        const ratingButtons = document.querySelectorAll('.rating-button');
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        this.selectedRating = parseInt(button.getAttribute('data-value') || '0', 10);
        console.log("Выбранный рейтинг:", this.selectedRating);
    }

    private submitFeedback(): void {
        if (this.selectedRating === null) {
            return;
        }
        console.log("Отправка отзыва с рейтингом:", this.selectedRating);
        window.parent.postMessage('close-iframe', '*');
    }
}