import { ImgData } from './profile';
import { notificationManager } from '../../../widgets/Notification/notification';

export function uploadImg(imagesNew: ImgData[], imagesURLs: string[], imagesIndexes: number[], getInfoFromPage: () => void, render: () => void) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; 
    input.multiple = true; 

    input.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement; 
        const files = target.files; 
        
        if (files) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
            const promises: Promise<void>[] = []; 

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                if (!validImageTypes.includes(file.type)) {
                    notificationManager.addNotification(`Файл ${file.name} имеет недопустимый формат. Пожалуйста, загрузите изображение в формате JPEG, PNG или SVG.`, 'fail');
                    continue; 
                }

                const reader = new FileReader();
                const promise = new Promise<void>((resolve) => {
                    reader.onload = (e) => {
                        const result = e.target!.result; 
                        if (typeof result === 'string') { 
                            const index = imagesURLs.length; 
                            imagesNew.push({ file, index }); 
                            imagesURLs.push(result); 
                            imagesIndexes.push(-1);
                            resolve(); 
                        }
                    };
                    reader.readAsDataURL(file); 
                });

                promises.push(promise); 
            }

            Promise.all(promises).then(() => {
                getInfoFromPage(); 
                render(); 
            });
        }
    });
    input.click(); 
}