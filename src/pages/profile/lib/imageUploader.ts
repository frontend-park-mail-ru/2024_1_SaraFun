import { ImgData } from './profile';

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
                    alert(`Файл ${file.name} имеет недопустимый формат. Пожалуйста, загрузите изображение в формате JPEG, PNG или SVG.`);
                    continue; 
                }

                const reader = new FileReader();
                const promise = new Promise<void>((resolve) => {
                    reader.onload = (e) => {
                        const result = e.target!.result; 
                        if (typeof result === 'string') { 
                            const index = imagesURLs.length + 1; 
                            imagesNew.push({ file, index }); 
                            imagesIndexes.push(-1);
                            imagesURLs.push(result); 
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