import { isValidPassword } from "../../../shared/utils/validation";
import { saveNewPassword } from "../api/changePassword";

export class PasswordChanger {
    constructor(button: HTMLElement) {
        if (button) {
            button.addEventListener('click', () => this.changePassword());
        }

        // Добавление обработчиков событий для полей ввода
        this.addInputListeners();
    }

    async changePassword() {
        const oldPassword = (document.getElementById('OldPassword') as HTMLInputElement).value;
        const newPassword = (document.getElementById('NewPassword') as HTMLInputElement).value;
        const repeatNewPassword = (document.getElementById('RepeatNewPassword') as HTMLInputElement).value;

        const passwordErrors = isValidPassword(newPassword);
        if (passwordErrors.length > 0) {
            this.showError('new-password-error', passwordErrors.join('\n'));
            return;
        }

        if (!this.validatePasswords(newPassword, repeatNewPassword)) {
            this.showError('repeat-password-error', 'Новый пароль и его повторение не совпадают.');
            return;
        }

        try {
            const oldpasswordErrors = isValidPassword(oldPassword);
            if (oldpasswordErrors.length > 0 ){
                this.showError('old-password-error', 'Неправильный старый пароль!');
                return;
            }
            
            const isOldPasswordValid = await saveNewPassword(oldPassword, newPassword);
            if (!isOldPasswordValid) {
                this.showError('old-password-error', 'Старый пароль неверный.');
                return;
            }
            this.showSuccessMessage('Пароль успешно изменен.'); 
        } catch (error) {
            console.error('Ошибка при смене пароля:', error);
            this.showError('new-password-error', 'Произошла ошибка при смене пароля. Попробуйте еще раз.');
        }

    }

    validatePasswords(newPassword: string, repeatNewPassword: string): boolean {
        return newPassword === repeatNewPassword;
    }

    private showSuccessMessage(message: string): void {
        const successElement = document.getElementById('success-message');
        if (successElement) {
            successElement.textContent = message;
            successElement.style.display = 'block';
        }
    }

    private showError(errorElementId: string, message: string): void {
        const errorElement = document.getElementById(errorElementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    private addInputListeners(): void {
        const oldPasswordInput = document.getElementById('OldPassword') as HTMLInputElement;
        const newPasswordInput = document.getElementById('NewPassword') as HTMLInputElement;
        const repeatNewPasswordInput = document.getElementById('RepeatNewPassword') as HTMLInputElement;

        const clearError = (errorElementId: string): void => {
            const errorElement = document.getElementById(errorElementId);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        };

        oldPasswordInput?.addEventListener('input', () => clearError('old-password-error'));
        newPasswordInput?.addEventListener('input', () => {
            clearError('new-password-error');
            const passwordErrors = isValidPassword(newPasswordInput.value);
            if (passwordErrors.length > 0) {
                this.showError('new-password-error', passwordErrors.join('\n'));
            }
        });
        repeatNewPasswordInput?.addEventListener('input', () => clearError('repeat-password-error'));
    }
}