import {post, put, del} from '../../../shared/api/api';
import { delImg } from './delImg';
import { ImgData, UserProfile } from '../lib/profile';
import { uploadImg } from '../lib/uploadImg';

/**
 * Updates the profile of a user by ID.
 * 
 * @param {number | string} id - The ID of the user.
 * @param {Object} profileData - The data to update the user's profile.
 * @returns {Promise<boolean>} - A promise that resolves to true if the update is successful, otherwise false.
 */
export async function updProfile(profileData: UserProfile, imagesNew: ImgData[], imagesDel: number[], imagesURLs: string[], imagesIndexes: number[]): Promise<boolean> {
  try {
    const imgNumbers = imagesIndexes.map((id, index) => ({
      id: id,
      number: index + 1
    }));


    const data = {
      first_name: profileData.FirstName,
      last_name: profileData.LastName,
      gender: profileData.Gender,
      age: profileData.Age,
      target: profileData.Target,
      about: profileData.About,
      imgNumbers: imgNumbers,
    };

    if (!( await uploadImg(imagesNew, imagesURLs, imagesIndexes) )) {
      return false;
    };
    
    
    if (!( await delImg(imagesDel) )) {
      return false
    };
    
  
    const response = await put('/updateprofile', data);
    
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