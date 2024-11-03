import { get } from '../../../shared/api/api.js';

/**
 * Fetches the profile of a user by ID.
 * 
 * @param {number | string} id - The ID of the user.
 * @returns {Promise<Object | null>} - A promise that resolves to the user profile object or null if not found.
 */
export async function getProfile(id: number): Promise<Object | null> {
  try {
    const response = await get(`http://5.188.140.7:8080/profile/${id}`);
    
    if (!response.ok) {
      console.error('Failed to fetch profile:', response.statusText);
      return null; 
    }

    return await response.json(); 
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null; 
  }
}