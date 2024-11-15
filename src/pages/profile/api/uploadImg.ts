import {post} from '../../../shared/api/api.js';
import { ImgData } from './profile.js';
export async function uploadImg(imagesNew: ImgData[]): Promise<boolean> {
    try {
        for (const image of imagesNew) {
            const formData = new FormData();
            formData.append('image', image.file);
            const response = await post('http://5.188.140.7:8080/uploadimage', formData);
            if (!response.ok) {
              console.error('Failed to upload the image:', response.statusText);
              return false; 
            };
        }
        return true;
    }
    catch(error) {
        console.error('Error uploading the image:', error);
        return false; 
    }
};

