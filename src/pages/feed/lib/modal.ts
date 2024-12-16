import template from '../../../widgets/LimitNotification/LimitNotification.pug';

export function openNotificationModal(): void {
    const modal = document.createElement('div');
    modal.classList.add('notification-modal');
    modal.innerHTML = template();
    this.parent.root.appendChild(modal);
    
    modal.classList.add('opening');
    modal.addEventListener('animationend', () => {
        modal.classList.add('open');
        modal.classList.remove('opening');
    }, { once: true });

    const closeModal = () => {
        modal.classList.add('closing');
        modal.addEventListener('animationend', () => {
            modal.style.display = 'none';
            modal.classList.remove('closing');
        }, { once: true });
    };

    modal.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).classList.contains('profile-modal')) {
            closeModal();
        }
    });
}