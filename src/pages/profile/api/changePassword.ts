import { post } from "../../../shared/api/api";

export async function saveNewPassword(newPassword: string) {
    const response = await post('/changepassword', JSON.stringify({ newPassword }))

    if (!response.ok) {
      throw new Error('Ошибка при сохранении нового пароля');
    }

    return response.json(); // Предполагается, что API возвращает какой-то ответ
  }