import template from './survey.pug';
import './survey.scss';
import { pushAnswer } from '../api/pushAnswer';

export class SurveyPage {
    private parent: HTMLElement
    private selectedRating: number | null = null;
    private feedbackOption: string;
    private feedback: string;

    constructor(parent: HTMLElement) {
        this.parent = parent;
        this.parent.innerHTML = '';
        this.parent.innerHTML = this.render();
        this.addEventListeners();
    }

    render(): string {
        return template();
    }
    

    private addEventListeners(): void {
        const surveyModal = document.getElementById('surveyModal');
        if (surveyModal) {
            surveyModal.style.display = 'block'; // Открываем модальное окно
        }
    
        const closeButton = document.getElementById('closeModalButton');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.closeModal());
        }

        const submitRatingButton = document.getElementById('submitRatingButton');
        if (submitRatingButton) {
            submitRatingButton.addEventListener('click', () => this.submitRating());
        }

        const ratingButtons = document.querySelectorAll<HTMLButtonElement>('.rating-button');
        ratingButtons.forEach(button => {
            button.addEventListener('click', () => this.selectRating(button));
        });
    }

    private selectRating(button: HTMLButtonElement): void {
        const ratingButtons = document.querySelectorAll('.rating-button');
        
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        
        button.classList.add('selected');

        this.selectedRating = parseInt(button.getAttribute('data-value') || '0', 10);
        console.log("Выбранный рейтинг:", this.selectedRating);
    }

    openModal(): void {
        const surveyModal = document.getElementById('surveyModal') as HTMLElement;

        if (surveyModal) {
            surveyModal.style.display = 'block';
        }
    }

    closeModal(): void {
        const surveyModal = document.getElementById('surveyModal') as HTMLElement;

        if (surveyModal) {
            surveyModal.style.display = 'none';
            this.selectedRating = null; 
            const ratingButtons = document.querySelectorAll('.rating-button');
            ratingButtons.forEach(btn => btn.classList.remove('selected')); 
        }
    }

    async submitRating(): Promise<void> {
        if (this.selectedRating === null || this.selectedRating < 0 || this.selectedRating > 10) {
            alert("Пожалуйста, выберите корректную оценку от 0 до 10.");
            return;
        }

        console.log("Отправка отзыва с рейтингом:", this.selectedRating);
        // Логика отправки отзыва
        const question = "Насколько вам понравился наш сервис?"; // Пример вопроса
        const comment = "первый опрос"; // Пример комментария
        const rating = this.selectedRating;
        const grade = 10; // Пример оценки

        const success = await pushAnswer(question, comment, rating, grade);
        if (success) {
            console.log("Отзыв успешно отправлен");
        } else {
            console.log("Ошибка при отправке отзыва");
        }

        const thankYouMessage = document.getElementById('thankYouMessage');
        if (thankYouMessage) {
            thankYouMessage.style.display = 'block';
        }

        const surveyModal = document.getElementById('surveyModal');
        if (surveyModal) {
            surveyModal.style.display = 'none';
        }

        setTimeout(() => {
            if (thankYouMessage) {
                thankYouMessage.style.display = 'none';
            }
            window.parent.postMessage('close-iframe', '*');
        }, 2000); 
    }
}