import {put} from '../../../shared/api/api.js';

/**
 * Updates the profile of a user by ID.
 * 
 * @param {number | string} id - The ID of the user.
 * @param {Object} profileData - The data to update the user's profile.
 * @returns {Promise<boolean>} - A promise that resolves to true if the update is successful, otherwise false.
 */
export async function updProfile(id: number, profileData: Object): Promise<boolean> {
  try {
    const response = await put(`http://5.188.140.7:8080/profile/${id}`, profileData);
    
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