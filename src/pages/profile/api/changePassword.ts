import { post } from "../../../shared/api/api";

export async function saveNewPassword(oldPassword: string, newPassword: string) {
  const body = {'current_password': oldPassword, 'new_password': newPassword };
  const response = await post('/changepassword', body);

  if (!response.ok) {
    return false;
  }

  return true; 
}