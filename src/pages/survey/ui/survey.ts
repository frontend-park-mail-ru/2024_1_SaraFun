import { Router } from '../../../app/Router';
import template from './survey.pug';
import './survey.scss';

export class SurveyPage {
    private parent: HTMLElement;
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

        const nextStepButton = document.getElementById('nextStepButton');
        if (nextStepButton) {
            nextStepButton.addEventListener('click', () => this.nextStep());
        }

        const submitFeedbackButton = document.getElementById('submitFeedbackButton');
        if (submitFeedbackButton) {
            submitFeedbackButton.addEventListener('click', () => this.submitDetailedFeedback());
        }

        const ratingButtons = document.querySelectorAll<HTMLButtonElement>('.rating-button');
        ratingButtons.forEach(button => {
            button.addEventListener('click', () => this.selectRating(button));
        });


        const feedbackSelect = document.getElementById('feedbackOptions') as HTMLSelectElement;
        if (feedbackSelect) {
            feedbackSelect.addEventListener('change', () => this.updateFeedbackOption(feedbackSelect));
        }

        const goBack1 = document.getElementById('backToStep1Button');
        if (goBack1) {
            goBack1.addEventListener('click', () => this.goBack1());
        }

        const goBack2 = document.getElementById('backToStep2Button');
        if (goBack2) {
            goBack2.addEventListener('click', () => this.goBack2());
        }
    }

    private selectRating(button: HTMLButtonElement): void {
        const ratingButtons = document.querySelectorAll('.rating-button');
        
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        
        button.classList.add('selected');

        this.selectedRating = parseInt(button.getAttribute('data-value') || '0', 10);
        console.log("Выбранный рейтинг:", this.selectedRating);
    }

    private updateFeedbackOption(selectElement: HTMLSelectElement): void {
        this.feedbackOption = selectElement.value; 
        console.log("Выбранный вариант обратной связи:", this.feedbackOption);
    }

    openModal(): void {
        const surveyModal = document.getElementById('surveyModal') as HTMLElement;
        const step1 = document.getElementById('step1') as HTMLElement;

        if (surveyModal && step1) {
            surveyModal.style.display = 'block';
            step1.style.display = 'block'; 
        }
    }

    closeModal(): void {
        const surveyModal = document.getElementById('surveyModal') as HTMLElement;
        const feedbackSelect = document.getElementById('feedbackOptions') as HTMLSelectElement;
        const step2 = document.getElementById('step2') as HTMLElement;
        const step3 = document.getElementById('step3') as HTMLElement;

        if (surveyModal) {
            surveyModal.style.display = 'none';
            feedbackSelect.value = 'default';
            this.selectedRating = null; 
            this.feedbackOption = 'default';
            step2.style.display = 'none';
            step3.style.display = 'none';
            const ratingButtons = document.querySelectorAll('.rating-button');
            ratingButtons.forEach(btn => btn.classList.remove('selected')); 
            window.parent.postMessage('close-iframe', '*');
        }
    }

    submitRating(): void {
        if (this.selectedRating === null || this.selectedRating < 0 || this.selectedRating > 10) { // Исправлено условие
            alert("Пожалуйста, выберите корректную оценку от 0 до 10.");
            return;
        }

        console.log(this.selectedRating);

        const step1 = document.getElementById('step1') as HTMLElement;
        const step2 = document.getElementById('step2') as HTMLElement;
        const followUpQuestionElement = document.getElementById('followUpQuestion') as HTMLElement;

        if (step1 && step2 && followUpQuestionElement) {
            step1.style.display = 'none';
            step2.style.display = 'block';

            const followUpQuestion = this.selectedRating <= 7                
                ? "Что именно вам не понравилось?" 
                : "Что именно вам понравилось?";
            followUpQuestionElement.innerText = followUpQuestion;
        }
    }

    nextStep(): void {
        const step2 = document.getElementById('step2') as HTMLElement;
        const step3 = document.getElementById('step3') as HTMLElement;
        if (step2 && step3) {
            step2.style.display = 'none';
            step3.style.display = 'block';
        }
    }

    goBack1(): void {
        const step1 = document.getElementById('step1') as HTMLElement;
        const step2 = document.getElementById('step2') as HTMLElement;
        if (step1 && step2) {
            step2.style.display = 'none';
            step1.style.display = 'block';
        }
    }

    goBack2(): void {
        const step2 = document.getElementById('step2') as HTMLElement;
        const step3 = document.getElementById('step3') as HTMLElement;
        if (step2 && step3) {
            step2.style.display = 'block';
            step3.style.display = 'none';
        }
    }

    submitDetailedFeedback(): void {
        const feedback = (document.getElementById('detailedFeedback') as HTMLTextAreaElement).value;
        this.feedback = feedback; 

        const step3 = document.getElementById('step3') as HTMLElement;
        if (step3) {
            step3.style.display = 'none';
        }

        console.log(this.selectedRating);
        console.log(this.feedbackOption);
        console.log(this.feedback);
        // Логика отправки  отзыва
        console.log("Отправка отзыва...");

    
        const thankYouMessage = document.getElementById('thankYouMessage');
        if( thankYouMessage ) {
            thankYouMessage.style.display = 'block';
        }
        
        const surveyModal = document.getElementById('surveyModal');
    
        if (surveyModal) {
            surveyModal.style.display = 'none';
        }
        setTimeout(() => {
            //тут закрытие опроса
            const thankYouMessage = document.getElementById('thankYouMessage');
            if (thankYouMessage) {
                thankYouMessage.style.display = 'none';
            }
            window.parent.postMessage('close-iframe', '*');
        }, 2000); 
    }
}

