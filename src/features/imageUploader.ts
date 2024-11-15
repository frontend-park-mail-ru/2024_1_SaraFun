import { ImgData } from '../pages/profile/api/profile';
export function uploadImg(imagesNew: ImgData[], imagesURLs: string[], imagesIndexes: number[], getInfoFromPage: () => void, render: () => void) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; 

    input.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement; 
        const file = target.files?.[0]; 
        if (file) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
            if (!validImageTypes.includes(file.type)) {
                alert('Пожалуйста, загрузите изображение в формате JPEG, PNG или SVG.');
                return; 
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target!.result; 
                if (typeof result === 'string') { 
                    const index = imagesURLs.length; 
                    imagesNew.push({ file, index }); 
                    imagesIndexes.push(-1);
                    imagesURLs.push(result); 
                    getInfoFromPage();
                    render();
                }
            };
            reader.readAsDataURL(file); 
        }
    });

    input.click(); 
}