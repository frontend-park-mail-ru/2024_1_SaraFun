import { post } from "../../../shared/api/api";

export async function validateOldPassword(oldPassword: string) {
    const response = await post('/oldPassword', JSON.stringify({ oldPassword }));

    if (!response.ok) {
      throw new Error('Ошибка при проверке старого пароля');
    }

    const data = await response.json();
    return data.isValid;
  }