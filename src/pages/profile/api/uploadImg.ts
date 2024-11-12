import {post} from '../../../shared/api/api.js';

export async function uploadImg(imagesNew: File[]): Promise<boolean> {
    try {
        for (const image of imagesNew) {
            const formData = new FormData();
            formData.append('image', image);
            const response = await post('/uploadimage', formData);
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

