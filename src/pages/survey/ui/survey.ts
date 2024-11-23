import template from './survey.pug';
import './survey.scss';

export class SurveyPage {
    private questions = [
        { text: "Оцените сайт" },
        { text: "Нравятся ли вам свайпы?" },
        { text: "Нравятся ли вам фотографии?" },
        { text: "Удобные ли чаты?" },
        { text: "Удобно ли настраивать профиль?" }
    ];
      
    private parent: HTMLElement;
    private ratings: (number | null)[] = Array(this.questions.length).fill(null);
    private currentStep: number = 0;

    constructor(parent: HTMLElement) {
        this.parent = parent;
        this.parent.innerHTML = '';
        this.parent.innerHTML = this.render();
        this.addEventListeners();
    }

    render(): string {
        return template({ questions: this.questions });
    }

    private resetSurvey(): void {
        this.ratings = Array(this.questions.length).fill(null);
        this.currentStep = 0;
    }
    
    private addEventListeners(): void {
        const surveyModal = document.getElementById('surveyModal');
        if (surveyModal) {
            this.resetSurvey();
            surveyModal.style.display = 'block'; 
        }
    
        const closeButton = document.getElementById('closeModalButton');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.closeModal());
        }

        this.updateNextStepButton();

        const goBack = document.getElementById('backButton');
        if (goBack) {
            goBack.addEventListener('click', () => this.goBackToStep());
        }

        const submitFeedbackButton = document.getElementById('submitFeedbackButton');
        if (submitFeedbackButton) {
            submitFeedbackButton.addEventListener('click', () => this.submitDetailedFeedback());
        }

        this.questions.forEach((_, index) => {
            const ratingButtons = document.querySelectorAll<HTMLButtonElement>(`#step${index + 1} .rating-button`);
            ratingButtons.forEach(button => {
                button.addEventListener('click', () => this.selectRating(button, index));
            });
        });
    }

    private selectRating(button: HTMLButtonElement, questionIndex: number): void {
        const ratingButtons = document.querySelectorAll<HTMLButtonElement>(`#step${questionIndex + 1} .rating-button`);
        
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        
        button.classList.add('selected');
        
        // Сохраняем оценку
        const ratingValue = parseInt(button.getAttribute('data-value')!);
        this.ratings[questionIndex] = ratingValue;

        // Обновляем кнопку "Далее" после выбора оценки
        this.updateNextStepButton();
    }

    private updateNextStepButton(): void {
        const nextStepButton = document.getElementById(`nextStep${this.currentStep + 1}Button`);
        if (nextStepButton) {
            nextStepButton.style.display = this.ratings[this.currentStep] !== null ? 'block' : 'none';
        }
    }

    private nextStep(): void {
        if (this.ratings[this.currentStep] === null) {
            alert("Пожалуйста, выберите оценку.");
            return;
        }
        
        this.currentStep++;
        this.updateStepVisibility();
    }

    private goBackToStep(): void {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.updateStepVisibility();
        }
    }

    private updateStepVisibility(): void {
        const steps = document.querySelectorAll<HTMLElement>('.step');
        steps.forEach((step, index) => {
            step.style.display = index === this.currentStep ? 'block' : 'none';
        });    

        const thankYouMessage = document.getElementById('thankYouMessage');
        if (this.currentStep >= this.questions.length) {
            thankYouMessage.style.display = 'block';
            const surveyModal = document.getElementById('surveyModal');
            if (surveyModal) {
                surveyModal.style.display = 'none';
            }
        } else {
            if (thankYouMessage) {
                thankYouMessage.style.display = 'none';
            }
            this.updateNextStepButton();
        }
    }

    private closeModal(): void {
        const surveyModal = document.getElementById('surveyModal');
        if (surveyModal) {
            surveyModal.style.display = 'none';
        }
    }

    private submitDetailedFeedback(): void {
        // Здесь можно реализовать отправку данных на сервер или другое действие
        this.closeModal();
        console.log("Ratings submitted:", this.ratings);
    }
}