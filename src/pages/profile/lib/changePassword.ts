import { saveNewPassword } from "../api/changePassword";
import { validateOldPassword } from "../api/validOldPassword";

export class PasswordChanger {
  constructor(button: HTMLElement) {
    if (button) {
      button.addEventListener('click', () => this.changePassword());
    }
  }

  async changePassword() {
    const oldPassword = (document.getElementById('OldPassword') as HTMLInputElement).value;
    const newPassword = (document.getElementById('NewPassword') as HTMLInputElement).value;
    const repeatNewPassword = (document.getElementById('RepeatNewPassword') as HTMLInputElement).value;

    if (!this.validatePasswords(newPassword, repeatNewPassword)) {
      alert('Новый пароль и его повторение не совпадают.');
      return;
    }

    try {
      const isOldPasswordValid = await validateOldPassword(oldPassword);
      if (!isOldPasswordValid) {
        alert('Старый пароль неверный.');
        return;
      }
      await saveNewPassword(newPassword);
      alert('Пароль успешно изменен.');
    } catch (error) {
      console.error('Ошибка при смене пароля:', error);
      alert('Произошла ошибка при смене пароля. Попробуйте еще раз.');
    }
  }

  validatePasswords(newPassword: string, repeatNewPassword: string): boolean {
    return newPassword === repeatNewPassword;
  }
}