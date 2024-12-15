import notificationTemplate from './notification.pug';

interface Notification {
    id: string; 
    message: string;
    type: 'success' | 'fail' | 'info';
}

class NotificationManager {
    private notificationsContainer: HTMLElement;
    private notifications: Notification[] = [];
    private timeoutIds: { [key: string]: ReturnType<typeof setTimeout> } = {};

    constructor() {
        this.notificationsContainer = document.createElement('div');
        this.notificationsContainer.className = 'notifications-container';
        document.body.appendChild(this.notificationsContainer);
    }

    public addNotification(message: string, type: 'success' | 'fail' | 'info'): void {
        const notification: Notification = { message, type };
        this.notifications.push(notification);
        this.render();
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }

    private render(): void {
        this.notificationsContainer.innerHTML = '';
        const modalHTML = notificationTemplate({ notifications: this.notifications });
        this.notificationsContainer.insertAdjacentHTML('beforeend', modalHTML);

        const modals = this.notificationsContainer.querySelectorAll('.notification-container');
        modals.forEach((modal) => {
            const notificationId = (modal as HTMLElement).dataset.id;

            if (notificationId) {
                modal.addEventListener('click', () => {
                    this.removeNotification(notificationId);
                });
    
                const timeoutId = setTimeout(() => {
                    this.removeNotification(notificationId);
                }, 5000);
    
                this.timeoutIds[notificationId] = timeoutId;
            }
        });
    }

    public removeNotification(id: string): void {

        this.notifications = this.notifications.filter(notification => notification.id !== id);
        
        if (this.timeoutIds[id]) {
            clearTimeout(this.timeoutIds[id]);
            delete this.timeoutIds[id];
        }
        
        this.render();
    }
}

export const notificationManager = new NotificationManager();