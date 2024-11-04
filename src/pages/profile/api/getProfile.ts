import { get } from '../../../shared/api/api.js';
import { UserProfile } from './profile';

/**
 * Fetches the profile of a user by ID.
 * 
 * @returns {Promise<UserProfile | null>} - A promise that resolves to the user profile object or null if not found.
 */
export async function getProfile(): Promise<UserProfile | null> {
  try {
    const response = await get('http://5.188.140.7:8080/profile');
    
    if (!response.ok) {
      console.error('Failed to fetch profile:', response.statusText);
      return null; 
    }

    const data = await response.json();

    const userProfile: UserProfile = {
      ID: data.profile.id,
      imagesIndexes: data.profile.imagesIndexes,
      FirstName: data.profile.first_name,
      LastName: data.profile.last_name,
      Gender: data.profile.gender,
      Age: data.profile.age,
      Target: data.profile.target,
      About: data.profile.about,
      imagesURLs: data.profile.imagesURLs,
    };


    return userProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null; 
  }
}