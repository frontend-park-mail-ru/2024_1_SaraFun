let currentStep = 1;

function nextStep() {
    document.querySelector('.step-' + currentStep).classList.remove('active');

    currentStep++;

    document.querySelector('.step-' + currentStep).classList.add('active');
}
