import template from './profile.pug';
import { updProfile } from '../api/updProfile';
import './profile.scss';
import { uploadImg } from '../../../features/imageUploader';
import { UserProfile, ImgData } from '../api/profile';;
import { getProfile } from '../api/getProfile';
import { Router } from '../../../app/Router';

export class ProfilePage {
  private imagesDel: number[] = [];
  private imagesNew: ImgData[] = [];
  private parent: Router;
  private isEditing: boolean;
  private username: string;
  private ID: number;
  private imagesIndexes: number[];
  private FirstName: string;
  private LastName: string;
  private Age: number;
  private Gender: string;
  private Target: string;
  private About: string;
  private imagesURLs: string[];

  constructor(parent: Router) {
    this.parent = parent;
    this.isEditing = false;
    this.loadProfile().then(() => {
      this.render();
    });
  }

  private async loadProfile(): Promise<void> {
    const profileData = await getProfile();
    if (profileData) {
      this.ID = profileData.ID || -1;
      this.imagesIndexes = profileData.imagesIndexes || [];
      this.FirstName = profileData.FirstName || '';
      this.LastName = profileData.LastName || '';
      this.Age = profileData.Age || 21;
      this.Gender = profileData.Gender || 'male';
      this.Target = profileData.Target || '';
      this.About = profileData.About || '';
      this.imagesURLs = profileData.imagesURLs || ['./img/image.svg'];
    }    
  }
  

  private limitText(textarea: HTMLTextAreaElement, limit: number): void {
    const limitLines = (): void => {
      const lines = textarea.value.split("\n");
      if (lines.length > limit) {
        textarea.value = lines.slice(0, limit).join("\n");
      };
    };

    limitLines();

    let timeout: NodeJS.Timeout;
    textarea.addEventListener("input", () => {
      clearTimeout(timeout);
      timeout = setTimeout(limitLines, 1);
    });
  }

  private limitInput(input: HTMLInputElement): void {
    const regex = /^[A-Za-zА-Яа-яЁё-]*$/;
    input.addEventListener("input", () => {
      if (!regex.test(input.value)) {
        input.value = input.value.split('').filter(char => regex.test(char)).join('');
      }
    });
  }

  public render(): void {
    this.parent.root.innerHTML = template({
      isEditing: this.isEditing,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Age: this.Age,
      Gender: this.Gender,
      Target: this.Target,
      About: this.About,
      imagesURLs: this.imagesURLs,
    });

    this.componentWillMount();
  }

  private componentWillMount() {

    const settingsButton = document.querySelector('.settings-button') as HTMLElement;
    if (settingsButton) {
      settingsButton.addEventListener('click', () => this.toggleEditMode());
    }

    const cancelButton = document.querySelector('.cancel-settings') as HTMLElement;
    if (cancelButton) {
      cancelButton.addEventListener('click', () => this.toggleEditMode());
    }

    const saveButton = document.querySelector('.save-settings') as HTMLElement;
    if (saveButton) {
      saveButton.addEventListener('click', () => this.saveSettings());
    }

    


    if (this.isEditing) {
      const rangeInput = document.getElementById('Age') as HTMLInputElement;
      const output = rangeInput.nextElementSibling as HTMLOutputElement;

      const updateOutput = () => {
        const value = rangeInput.value;
        output.value = value === '100' ? '100+' : value;
      };

      updateOutput();
      rangeInput.addEventListener('input', updateOutput);

      //перетаскивание фотографий
      const imageContainers = document.querySelectorAll('.image-container') as NodeListOf<HTMLElement>;

      if (imageContainers) {
        imageContainers.forEach((container, index) => {
          container.addEventListener('dragstart', (event) => {
            event.dataTransfer?.setData('text/plain', index.toString());
          });


          container.addEventListener('dragover', (event) => {
            event.preventDefault(); 
          });

          container.addEventListener('drop', (event) => {
            event.preventDefault();
            const dragIndex = parseInt(event.dataTransfer?.getData('text/plain') || '0');

            if (dragIndex !== index) {
              const draggedImage = this.imagesURLs[dragIndex];
              const dragedId = this.imagesIndexes[dragIndex];
              this.imagesURLs.splice(dragIndex, 1); 
              this.imagesIndexes.splice(dragIndex, 1);
              this.imagesURLs.splice(index, 0, draggedImage); 
              this.imagesIndexes.splice(index, 0, dragedId); 
              
              this.imagesNew.forEach((image, i) => { //мне кажется, что непонятный код, поэтому есть комменты
                if (image.index === dragIndex) {
                  // Если индекс совпадает с перетаскиваемым, обновляем его на новый индекс
                  image.index = index;
                } else if (dragIndex < index && image.index > dragIndex && image.index <= index) {
                  // Если элемент находится между старым и новым индексами, уменьшаем индекс на 1
                  image.index -= 1;
                } else if (dragIndex > index && image.index < dragIndex && image.index >= index) {
                  // Если элемент находится между новым и старым индексами, увеличиваем индекс на 1
                  image.index += 1;
                }
              });
        

              this.getInfoFromPage();
              this.render();
            }
          });
        });
      }
    }
    


    const delButtons = document.querySelectorAll('.delete-button');
    delButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            this.deleteImage(index);
        });
    });

    const uploadButton = document.querySelector('.upload-button') as HTMLElement;
    if (uploadButton) {
        uploadButton.addEventListener('click', () => this.handleUploadImg());
    }



    if (this.isEditing) {
      const textarea = document.getElementById('About') as HTMLTextAreaElement; 
      this.limitText(textarea, 10); 

      const firstNameInput = document.getElementById('FirstName') as HTMLInputElement; 
      if (firstNameInput) {
        this.limitInput(firstNameInput); 
      }
      

      const lastNameInput = document.getElementById('LastName') as HTMLInputElement; 
      if (lastNameInput) {
        this.limitInput(lastNameInput); 
      }

      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; 
        textarea.style.height = `${textarea.scrollHeight}px`; 
      });
    }
  }

  private handleUploadImg() {
    uploadImg(this.imagesNew, this.imagesURLs, this.imagesIndexes, () => this.getInfoFromPage(), () => this.render());
  }
  
  private getInfoFromPage() {
    this.FirstName = (document.getElementById('FirstName') as HTMLInputElement).value;
    this.LastName = (document.getElementById('LastName') as HTMLInputElement).value;
    this.Gender = (document.querySelector('input[name="gender"]:checked') as HTMLSelectElement).value;
    this.Age = parseInt((document.getElementById('Age') as HTMLInputElement).value, 10);
    this.Target = (document.getElementById('Target') as HTMLTextAreaElement).value;
    this.About = (document.getElementById('About') as HTMLTextAreaElement).value;
    return;
  }


  private deleteImage(index: number): void {
    const imageIndex = this.imagesIndexes[index];
    
    const isNewImage = this.imagesNew.some(img => img.index === index);
    
    if (isNewImage) {
        this.imagesNew = this.imagesNew.filter(img => img.index !== index);
    } else {
        this.imagesDel.push(imageIndex);
    }

    this.imagesNew = this.imagesNew.map(img => {
      if (img.index > index) {
          return { ...img, index: img.index - 1 }; 
      }
      return img;
    });


    this.imagesIndexes.splice(index, 1);
    this.imagesURLs.splice(index, 1);

    this.getInfoFromPage();
    this.render();
}


  private toggleEditMode(): void {
    this.isEditing = !this.isEditing; 
    this.loadProfile().then(() => {
      this.render();
    });
  }
  
  private async saveSettings(): Promise<void> {
    this.getInfoFromPage()

    const profileData: UserProfile = {
      ID: this.ID, 
      imagesIndexes: this.imagesIndexes,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Age: this.Age,
      Gender: this.Gender,
      Target: this.Target,
      About: this.About,
      imagesURLs: this.imagesURLs,
    };

    const updateSuccess = await updProfile(profileData, this.imagesNew, this.imagesDel, this.imagesURLs, this.imagesIndexes);
    if (updateSuccess) {
      //console.log('Profile updated successfully'); //тут бы всплывающее окно
    } else {
      // console.error('Failed to update profile'); //тут тоже
    }

    this.isEditing = false;
    this.imagesDel = [];
    this.imagesNew = [];
    this.loadProfile().then(() => {
      this.render();
      const avatarSrc = this.imagesURLs?.[0] ?? './img/user.svg';
      const avatarImg = document.querySelector('.user-avatar__image');
      avatarImg.setAttribute('src', avatarSrc);
    });
  }
}