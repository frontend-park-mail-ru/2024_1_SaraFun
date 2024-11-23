import { Router } from '../../../app/Router';
import template from './survey.pug';
import './survey.scss';

export class SurveyPage {
    private parent: HTMLElement;
    private siteRating: number | null = null;
    private swipeRating: number | null = null;
    private photoRating: number | null = null;
    private chatRating: number | null = null;
    private profileRating: number | null = null;


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
            this.resetSurvey();
            surveyModal.style.display = 'block'; 
        }
    
        const closeButton = document.getElementById('closeModalButton');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.closeModal());
        }

        const nextStep1Button = document.getElementById('nextStep1Button');
        if (nextStep1Button) {
            console.log(this.siteRating);
            nextStep1Button.addEventListener('click', () => this.nextStep(1));
        }

        const nextStep2Button = document.getElementById('nextStep2Button');
        if (nextStep2Button) {
            nextStep2Button.addEventListener('click', () => this.nextStep(2));
        }

        const nextStep3Button = document.getElementById('nextStep3Button');
        if (nextStep3Button) {
            nextStep3Button.addEventListener('click', () => this.nextStep(3));
        }

        const nextStep4Button = document.getElementById('nextStep4Button');
        if (nextStep4Button) {
            nextStep4Button.addEventListener('click', () => this.nextStep(4));
        }

        

        const goTo1 = document.getElementById('backButton2');
        if (goTo1) {
            goTo1.addEventListener('click', () => this.goBackToStep(2));
        }
        const goTo2 = document.getElementById('backButton3');
        if (goTo2) {
            goTo2.addEventListener('click', () => this.goBackToStep(3));
        }
        const goTo3 = document.getElementById('backButton4');
        if (goTo3) {
            goTo3.addEventListener('click', () => this.goBackToStep(4));
        }
        const goTo5 = document.getElementById('backButton5');
        if (goTo5) {
            goTo5.addEventListener('click', () => this.goBackToStep(5));
        }

        const submitFeedbackButton = document.getElementById('submitFeedbackButton');
        if (submitFeedbackButton) {
            submitFeedbackButton.addEventListener('click', () => this.submitDetailedFeedback());
        }

        const ratingButtonsStep1 = document.querySelectorAll<HTMLButtonElement>('#step1 .rating-button');
        ratingButtonsStep1.forEach(button => {
            button.addEventListener('click', () => this.selectRating(button, 'site'));
        });

        const ratingButtonsStep2 = document.querySelectorAll<HTMLButtonElement>('#step2 .rating-button');
        ratingButtonsStep2.forEach(button => {
            button.addEventListener('click', () => this.selectRating(button, 'swipe'));
        });

        const ratingButtonsStep3 = document.querySelectorAll<HTMLButtonElement>('#step3 .rating-button');
        ratingButtonsStep3.forEach(button => {
            button.addEventListener('click', () => this.selectRating(button, 'photo'));
        });

        const ratingButtonsStep4 = document.querySelectorAll<HTMLButtonElement>('#step4 .rating-button');
        ratingButtonsStep4.forEach(button => {
            button.addEventListener('click', () => this.selectRating(button, 'chat'));
        });

        const ratingButtonsStep5 = document.querySelectorAll<HTMLButtonElement>('#step5 .rating-button');
        ratingButtonsStep5.forEach(button => {
            button.addEventListener('click', () => this.selectRating(button, 'profile'));
        });
    }

    private selectRating(button: HTMLButtonElement, ratingType: 'site' | 'swipe' | 'photo' | 'chat' | 'profile'): void {
        const ratingButtons = document.querySelectorAll('.rating-button');
        
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        
        button.classList.add('selected');

        const rating = parseInt(button.getAttribute('data-value') || '0', 10);
        switch (ratingType) {
            case 'site':
                this.siteRating = rating;
                break;
            case 'swipe':
                this.swipeRating = rating;
                break;
            case 'photo':
                this.photoRating = rating;
                break;
            case 'chat':
                this.chatRating = rating;
                break;
            case 'profile':
                this.profileRating = rating;
                break;
        }

    }

    openModal(): void {
        const surveyModal = document.getElementById('surveyModal') as HTMLElement;
        const step1 = document.getElementById('step1') as HTMLElement;

        if (surveyModal && step1) {
            surveyModal.style.display = 'block';
            step1.style.display = 'block'; 
        }
    }

    private resetSurvey(): void {
        const step1 = document.getElementById('step1') as HTMLElement;
        const step2 = document.getElementById('step2') as HTMLElement;
        const step3 = document.getElementById('step3') as HTMLElement;
        const step4 = document.getElementById('step4') as HTMLElement;
        const step5 = document.getElementById('step5') as HTMLElement;
        if(step1){
            step1.style.display = 'none';
        }
        if(step2){
            step2.style.display = 'none';
        }
        if(step3){
            step3.style.display = 'none';
        }
        if(step4){
            step4.style.display = 'none';
        }
        if(step5){
            step5.style.display = 'none';
        }

        this.siteRating = null;
        this.swipeRating = null;
        this.photoRating = null;
        this.chatRating = null;
        this.profileRating = null;

    }

    closeModal(): void {
        const surveyModal = document.getElementById('surveyModal') as HTMLElement;
        const feedbackSelect = document.getElementById('feedbackOptions') as HTMLSelectElement;

        if (surveyModal) {
            this.resetSurvey(); 
            window.parent.postMessage('close-iframe', '*');
        }
    }

    submitRating(rating: number, ratingType: 'site' | 'swipe' | 'photo' | 'chat' | 'profile'): void {
        if (rating < 0 || rating > 10) {
            alert("Пожалуйста, выберите корректную оценку от 0 до 10.");
            return;
        }
    
        switch (ratingType) {
            case 'site':
                this.siteRating = rating;
                break;
            case 'swipe':
                this.swipeRating = rating;
                break;
            case 'photo':
                this.photoRating = rating;
                break;
            case 'chat':
                this.chatRating = rating;
                break;
            case 'profile':
                this.profileRating = rating;
                break;
        }
    }

    private nextStep(stepNum: number): void {
        const currentStep = document.querySelector(`#step${stepNum}`) as HTMLElement;
        
        if (currentStep) {
            currentStep.style.display = 'none';
            const nextStepId = stepNum + 1;
            const nextStep = document.getElementById(`step${nextStepId}`) as HTMLElement;

            if (nextStep) {
                nextStep.style.display = 'block';
            }
        }
    }


    private goBackToStep(stepNum : number): void {
        const currentStep = document.querySelector(`#step${stepNum}`) as HTMLElement;
        
        if (currentStep) {
            currentStep.style.display = 'none';
            const previousStepID = stepNum - 1;
            const previousStep = document.getElementById(`step${previousStepID}`) as HTMLElement;

            if (previousStep) {
                previousStep.style.display = 'block';
            }
        }
    }


    submitDetailedFeedback(): void {
        const step5 = document.getElementById('step5') as HTMLElement;
        if (step5) {
            step5.style.display = 'none';
        }

        // Логика отправки  отзыва
    
        const thankYouMessage = document.getElementById('thankYouMessage');
        if( thankYouMessage ) {
            thankYouMessage.style.display = 'block';
        }
        
        const surveyModal = document.getElementById('surveyModal');
    
        if (surveyModal) {
            surveyModal.style.display = 'none';
        }
        setTimeout(() => {
            const thankYouMessage = document.getElementById('thankYouMessage');
            if (thankYouMessage) {
                thankYouMessage.style.display = 'none';
            }
            window.parent.postMessage('close-iframe', '*');
        }, 2000); 
    }
}

