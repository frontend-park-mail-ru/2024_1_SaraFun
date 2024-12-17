import template from './profile.pug';
import { updProfile } from '../api/updProfile';
import './profile.scss';
import { uploadImg } from '../lib/imageUploader';
import { UserProfile, ImgData } from '../lib/profile';;
import { getProfile } from '../api/getProfile';
import { Router } from '../../../app/Router';
import { limitInput, limitText } from '../../../features/limitInput';
import { PasswordChanger } from '../lib/changePassword';
import { notificationManager } from '../../../widgets/Notification/notification';
import { WsMessage } from '../../../entities/WsMessage/WsMessage';
import { isValidBirthDate } from "../../../shared/utils/validation";

export class ProfilePage {
  private imagesDel: number[] = [];
  private imagesNew: ImgData[] = [];
  private parent: Router;
  private isEditing: boolean;
  private username: string;
  private ID: number;
  private imagesIndexes: number[];
  private first_name: string;
  private birth_date: string;
  private gender: string;
  private target: string;
  private about: string;
  private imagesURLs: string[];
  private moneyBalance: number;
  private dailyLikes: number;
  private purchasedLikes: number;

  constructor(parent: Router) {
    this.parent = parent;
    this.isEditing = false;
    this.loadProfile().then(() => {
      this.render();
    });
  }

  handleMessage(data: WsMessage) {
		if (data.type === "message") {
			notificationManager.addNotification(`Новое сообщение от ${data.username}: ${data.message}`, 'info');
		} else {
			notificationManager.addNotification(`У вас новый мэтч с пользователем ${data.username}`, 'info');
		}
	}

  private async loadProfile(): Promise<void> {
    const profileData = await getProfile();
    if (profileData) {
      this.ID = profileData.ID || -1;
      this.imagesIndexes = profileData.imagesIndexes || [];
      this.first_name = profileData.first_name || '';
      this.birth_date = profileData.birth_date || '2000-01-01';
      this.gender = profileData.gender || 'female';
      this.target = profileData.target || '';
      this.about = profileData.about || '';
      this.imagesURLs = profileData.imagesURLs || ['./img/image.svg'];
      this.moneyBalance = profileData.moneyBalance || 0;
      this.dailyLikes = profileData.dailyLikes || 0;
      this.purchasedLikes = profileData.purchasedLikes || 0;
    } else {
      notificationManager.addNotification('Не удалось получить информацию профиля', 'fail');
    }
  }

  public render(): void {
    this.parent.root.innerHTML = template({
      isEditing: this.isEditing,
      first_name: this.first_name,
      birth_date: this.birth_date,
      gender: this.gender,
      target: this.target,
      about: this.about,
      imagesURLs: this.imagesURLs,
      moneyBalance: this.moneyBalance,
      dailyLikes: this.dailyLikes,
      purchasedLikes: this.purchasedLikes,
    });

    this.componentWillMount();
  }

  private componentWillMount() {
    const dateInput = document.getElementById('birth_date');
		if (dateInput) {
			const today = new Date();
			const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
			const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

			dateInput.setAttribute('min', minDate.toISOString().split('T')[0]);
			dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
		}

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

    const newPasswordButton = document.querySelector('.new-password') as HTMLElement;

    if (newPasswordButton) {
      const passwordChanger = new PasswordChanger(newPasswordButton);
    }

    if (this.isEditing) {
      const birthDateInput = document.getElementById('birth_date') as HTMLInputElement;

      birthDateInput?.addEventListener('input', () => {
        const errorElement = document.getElementById('date-error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        const isValid = isValidBirthDate(birthDateInput);
        if (!isValid) {
            document.getElementById('date-error').style.display = 'block';
            document.getElementById(`date-error`).innerText = 'Вам должно быть от 18 до 120 лет';
        }
      });

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
              const draggedimage = this.imagesURLs[dragIndex];
              const drdatadId = this.imagesIndexes[dragIndex];
              this.imagesURLs.splice(dragIndex, 1); 
              this.imagesIndexes.splice(dragIndex, 1);
              this.imagesURLs.splice(index, 0, draggedimage); 
              this.imagesIndexes.splice(index, 0, drdatadId); 
              
              this.imagesNew.forEach((image, i) => { 
                if (image.index === dragIndex) {
                  image.index = index;
                } else if (dragIndex < index && image.index > dragIndex && image.index <= index) {
                  image.index -= 1;
                } else if (dragIndex > index && image.index < dragIndex && image.index >= index) {
                  image.index += 1;
                }
              });
        

              this.getInfoFromPdata();
              this.render();
            }
          });
        });
      }

      document.querySelectorAll('.password__icon').forEach(icon => {
        icon.addEventListener('click', (event) => {
          const passwordWrapper = icon.closest('.password__wrapper');
          if (passwordWrapper) {
            const passwordInput = passwordWrapper.querySelector('input[type="password"], input[type="text"]') as HTMLInputElement;
            if (passwordInput) {
                const newType = passwordInput.type === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', newType);
                icon.setAttribute('src', newType === 'password' ? '/img/eye-x.svg' : '/img/eye.svg');
            }
          }
        });
      });
    }
    


    const delButtons = document.querySelectorAll('.delete-button');
    delButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            this.deleteimage(index);
        });
    });

    const uploadButton = document.querySelector('.upload-button') as HTMLElement;
    if (uploadButton) {
        uploadButton.addEventListener('click', () => this.handleUploadImg());
    }



    if (this.isEditing) {
      this.limits();
    }
  }

  private handleUploadImg() {
    uploadImg(this.imagesNew, this.imagesURLs, this.imagesIndexes, () => this.getInfoFromPdata(), () => this.render());
  }
  
  private getInfoFromPdata() {
    this.first_name = (document.getElementById('first_name') as HTMLInputElement).value;
    this.gender = (document.querySelector('input[name="gender"]:checked') as HTMLSelectElement).value;
    this.birth_date = (document.getElementById('birth_date') as HTMLInputElement).value;
    this.target = (document.getElementById('target') as HTMLTextAreaElement).value;
    this.about = (document.getElementById('about') as HTMLTextAreaElement).value;
    return;
  }


  private deleteimage(index: number): void {
    const imageIndex = this.imagesIndexes[index];
    
    const isNewimage = this.imagesNew.some(img => img.index === index);
    
    if (isNewimage) {
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

    this.getInfoFromPdata();
    this.render();
  }


  private toggleEditMode(): void {
    this.isEditing = !this.isEditing; 
    this.loadProfile().then(() => {
      this.render();
    });
  }

  private limits(): void {
    const textarea = document.getElementById('about') as HTMLTextAreaElement; 
    limitText(textarea, 10); 

    const first_nameInput = document.getElementById('first_name') as HTMLInputElement; 
    if (first_nameInput) {
      limitInput(first_nameInput); 
    }

    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto'; 
      textarea.style.height = `${textarea.scrollHeight}px`; 
    });
	}
  
  private async saveSettings(): Promise<void> {
    if (!isValidBirthDate(document.getElementById('birth_date') as HTMLInputElement)) {
      notificationManager.addNotification('Неверная дата рождения!', 'fail');
      return;
    }
    
    this.getInfoFromPdata()

    const profileData: UserProfile = {
      ID: this.ID, 
      imagesIndexes: this.imagesIndexes,
      first_name: this.first_name,
      birth_date: this.birth_date,
      gender: this.gender,
      target: this.target,
      about: this.about,
      imagesURLs: this.imagesURLs,
      moneyBalance: this.moneyBalance,
      dailyLikes: this.dailyLikes,
      purchasedLikes: this.purchasedLikes,
    };

    const updateSuccess = await updProfile(profileData, this.imagesNew, this.imagesDel, this.imagesURLs, this.imagesIndexes);
    if (updateSuccess) {
      notificationManager.addNotification('Успешно сохранено!', 'success');
    } else {
      notificationManager.addNotification('Ошибка при сохранении, попробуйте позже!', 'fail');
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