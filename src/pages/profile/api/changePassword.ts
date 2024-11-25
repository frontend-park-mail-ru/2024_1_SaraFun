import { post } from "../../../shared/api/api";

export async function saveNewPassword(oldPassword: string, newPassword: string) {
    const response = await post('/changepassword', JSON.stringify({ oldPassword, newPassword }))

    if (!response.ok) {
      throw new Error('Ошибка при сохранении нового пароля');
    }

    return response.json(); 
  }