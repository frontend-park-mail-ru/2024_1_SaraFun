import notificationTemplate from './notification.pug';

interface Notification {
    message: string;
    type: 'success' | 'fail' | 'match';
}

class NotificationManager {
    private notificationsContainer: HTMLElement;
    private notifications: Notification[] = [];

    constructor() {
        this.notificationsContainer = document.createElement('div');
        this.notificationsContainer.className = 'notifications-container';
        document.body.appendChild(this.notificationsContainer);
    }

    public addNotification(message: string, type: 'success' | 'fail' | 'match'): void {
        const notification: Notification = { message, type };
        this.notifications.push(notification);
        this.render();
    }

    private render(): void {
        this.notificationsContainer.innerHTML = '';
        const modalHTML = notificationTemplate({ notifications: this.notifications });
        this.notificationsContainer.insertAdjacentHTML('beforeend', modalHTML);

        const modals = this.notificationsContainer.querySelectorAll('.notification-container');
        modals.forEach((modal, index) => {
            modal.addEventListener('click', () => {
                this.removeNotification(index);
            });

            setTimeout(() => {
                this.removeNotification(index);
            }, 5000);
        });
    }

    public removeNotification(index: number): void {
        this.notifications.splice(index, 1); 
        this.render(); 
    }
}

export const notificationManager = new NotificationManager();