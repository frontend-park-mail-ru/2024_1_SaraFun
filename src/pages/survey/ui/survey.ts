import template from './survey.pug';
import {post, put, get} from '../../../shared/api/api';
import './survey.scss';

export class SurveyPage {
    private questions: string[] = [];  
    private parent: HTMLElement;
    private ratings: (number | null)[] = [];
    private currentStep: number = 0;

    constructor(parent: HTMLElement) {
        this.parent = parent;
        this.parent.innerHTML = '';
        this.init();
    }

    private async init(): Promise<void> {
        await this.getQuestions();
        console.log(this.questions);
        console.log('nothing');
        this.render(); 
        this.addEventListeners();
    }


    render(): void {
        // Обновляем innerHTML родительского элемента
        this.parent.innerHTML = template({ questions: this.questions });
    }


    private resetSurvey(): void {
        this.ratings = Array(this.questions.length).fill(null);
        this.currentStep = 0;
    }

    async getQuestions(): Promise<void> {
        const response = await get('/getquestions');

        if (!response.ok) {
            throw new Error('Сеть ответила с ошибкой');
        }

        const data: { content: string; grade: number }[] = await response.json();

        this.questions = data.map(item => item.content);
        this.ratings = Array(this.questions.length).fill(null);
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

        this.questions.forEach((_, index) => {
            const nextButton = document.getElementById(`nextStep${index + 1}Button`);
            if (nextButton) {
                nextButton.addEventListener('click', () => this.nextStep());
            }
    
            const backButton = document.getElementById(`backButton${index + 1}`);
            if (backButton) {
                backButton.addEventListener('click', () => this.goBackToStep());
            }
    
            const ratingButtons = document.querySelectorAll<HTMLButtonElement>(`#step${index + 1} .rating-button`);
            ratingButtons.forEach(button => {
                button.addEventListener('click', () => this.selectRating(button, index));
            });
            
            if (index === this.questions.length - 1) {
                const submitButton = document.getElementById('submitSurveyButton');
                if (submitButton) {
                    submitButton.addEventListener('click', () => this.submitSurvey());
                }
            }
    
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

        const thankYouMessage = document.getElementById('thankYouMessage') as HTMLElement;
        if (this.currentStep >= this.questions.length) {
            thankYouMessage.style.display = 'block';
            const surveyModal = document.getElementById('surveyModal') as HTMLElement;
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
        window.parent.postMessage('close-iframe', '*');
    }

    private async submitSurvey(): Promise<void> {
        this.closeModal();
    
        console.log("Опрос отправлен:", this.ratings);

        const surveyData = this.questions.map((question, index) => ({
            'question': question,
            'comment': '',
            'rating': this.ratings[index],
            'grade': 10 
        }));

        try {
            const response = await post('/sendsurvey', surveyData);
            if (response.ok) {
                console.log('Опрос успешно отправлен');
            } else {
                console.error('Ошибка при отправке опроса');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    
        const thankYouMessage = document.getElementById('thankYouMessage');
        if (thankYouMessage) {
            thankYouMessage.style.display = 'block';
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
                window.parent.postMessage('close-iframe', '*');
            }, 2000);
        }
    }
}