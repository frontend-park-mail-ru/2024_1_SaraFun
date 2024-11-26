import { post } from "../../../shared/api/api";
import { notificationManager } from "../../../widgets/Notification/notification";

export async function saveNewPassword(oldPassword: string, newPassword: string) {
  try {
    const body = {'current_password': oldPassword, 'new_password': newPassword };
    const response = await post('/changepassword', body);

    if (!response.ok) {
      if (response.status === 412) {
        notificationManager.addNotification('Старый пароль неверный. Пожалуйста, попробуйте снова.', 'fail');
        return false;
      }
      return false
    }
    notificationManager.addNotification('Пароль успешно изменен.', 'success');

    return true; 
  } catch (error) {
    console.error('Ошибка при смене пароля:', error);
    notificationManager.addNotification('Произошла ошибка при смене пароля. Попробуйте еще раз.', 'fail');
    return true;
  }
}