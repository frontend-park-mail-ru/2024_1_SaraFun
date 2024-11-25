import { post } from "../../../shared/api/api";

export async function saveNewPassword(oldPassword: string, newPassword: string) {
    const response = await post('/changepassword', JSON.stringify({ oldPassword, newPassword }))

    if (!response.ok) {
      return false;
    }

    return true; 
  }