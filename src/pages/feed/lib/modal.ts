import template from '../../../widgets/LimitNotification/LimitNotification.pug';

export function openNotificationModal(): void {
    const modal = document.createElement('div');
    modal.classList.add('profile-modal');
    modal.innerHTML = template();
    
    document.body.appendChild(modal);
    console.log('modal', modal);
    
    modal.classList.add('opening');
    modal.addEventListener('animationend', () => {
        modal.classList.add('open');
        modal.classList.remove('opening');
    }, { once: true });

    const closeModal = () => {
        modal.classList.add('closing');
        modal.addEventListener('animationend', () => {
            modal.classList.remove('closing');
            document.body.removeChild(modal);
        }, { once: true });
    };

    modal.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).classList.contains('profile-modal')) {
            closeModal();
        }
    });
}