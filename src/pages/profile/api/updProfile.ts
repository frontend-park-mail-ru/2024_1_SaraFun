import {post, put, del} from '../../../shared/api/api.js';
import { UserProfile } from './profile';

/**
 * Updates the profile of a user by ID.
 * 
 * @param {number | string} id - The ID of the user.
 * @param {Object} profileData - The data to update the user's profile.
 * @returns {Promise<boolean>} - A promise that resolves to true if the update is successful, otherwise false.
 */
export async function updProfile(profileData: UserProfile, imagesNew: File[], imagesDel: number[]): Promise<boolean> {
  try {
    const data = {
      id: profileData.ID,
      first_name: profileData.FirstName,
      last_name: profileData.LastName,
      gender: profileData.Gender,
      age: profileData.Age,
      target: profileData.Target,
      about: profileData.About,
    };
    
    for (const image of imagesNew) {
      const formData = new FormData();
      formData.append('image', image);
      const response = await post('http://5.188.140.7:8080/uploadimage', formData);
      if (!response.ok) {
        console.error('Failed to upload image:', response.statusText);
        return false; 
      }
    }

    for (const imageId of imagesDel) {
      if (imageId === -1) {
        continue;
      }
      const response = await del(`http://5.188.140.7:8080/image/${imageId}`);
      if (!response.ok) {
        console.error('Failed to delete image:', response.statusText);
        return false; 
      }
    }
  
    const response = await put('http://5.188.140.7:8080/updateprofile', data);
    
    if (!response.ok) {
      console.error('Failed to update profile:', response.statusText);
      return false; 
    }

    return true; 
  } catch (error) {
    console.error('Error updating user profile:', error);
    return false; 
  }
}