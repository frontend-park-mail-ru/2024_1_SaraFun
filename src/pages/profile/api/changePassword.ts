import { post } from "../../../shared/api/api";
import { notificationManager } from "../../../widgets/Notification/notification";

export async function saveNewPassword(oldPassword: string, newPassword: string) {
  try {
    const body = {'current_password': oldPassword, 'new_password': newPassword };
    const response = await post('/changepassword', body);

    if (!response.ok) {
      return false
    }
    notificationManager.addNotification('Пароль успешно изменен.', 'success');

    return true; 
  } catch (error) {
    if (error === 'Error: 412: Precondition Failed') {
      return false;
    }
    console.error('Ошибка при смене пароля:', error);
    notificationManager.addNotification('Произошла ошибка при смене пароля. Попробуйте еще раз.', 'fail');
    return true;
  }
}