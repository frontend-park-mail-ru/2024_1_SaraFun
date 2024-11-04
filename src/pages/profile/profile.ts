import template from './ui/profile.pug';
import { UserProfile } from './api/profile';
import { getProfile } from './api/getProfile';
import { updProfile } from './api/updProfile';
import Navbar from '../../widgets/Navbar/navbar.js';
import './ui/profile.scss';

interface Parent {
  root: HTMLElement;
}

export class ProfilePage {
  private parent: Parent;
  private isEditing: boolean;
  private navbar: Navbar | null;
  private ID: number;
  private FirstName: string;
  private LastName: string;
  private Age: number;
  private Gender: string;
  private Target: string;
  private About: string;
  private imagesURLs: string[];

  constructor(parent: Parent) {
    this.parent = parent;
    this.isEditing = false;
    this.navbar = null;
    this.ID = -1;
    this.FirstName = 'Undefined';
    this.LastName = 'Undefined'
    this.Age = 0;
    this.Gender = 'male';
    this.Target = 'Undefined';
    this.About = 'Undefined';
    this.imagesURLs = ['./img/IMG_2098.JPG', "./img/IMG_0739.JPG", './img/IMG_2097.JPG', './img/IMG_1106.JPG', './img/IMG_1105.JPG', './img/IMG_2099.JPG'];
    this.loadProfile().then(() => {
      this.render();
    });
  }

  private async loadProfile(): Promise<void> {
    try {
      const profileData = await getProfile();
      if (profileData) {
        this.ID = profileData.ID || -1;
        this.FirstName = profileData.FirstName || '-';
        this.LastName = profileData.LastName || '-';
        this.Age = profileData.Age || 21;
        this.Gender = profileData.Gender || 'male';
        this.Target = profileData.Target || '-';
        this.About = profileData.About || '-';
        this.imagesURLs = profileData.imagesURLs || ['./img/image.svg'];
      }
      else {
        this.ID = -1;
        this.FirstName = 'Undefined';
        this.LastName = 'Undefined'
        this.Age = 0;
        this.Gender = 'male';
        this.Target = 'Undefined';
        this.About = 'Undefined';
        this.imagesURLs = ['./img/IMG_2098.JPG', "./img/IMG_0739.JPG", './img/IMG_2097.JPG', './img/IMG_1106.JPG', './img/IMG_1105.JPG', './img/IMG_2099.JPG'];
      }
    } catch (error) {
      console.error('Ошибка при загрузке профиля:', error);
    }
  }
  

  private limitText(textarea: HTMLTextAreaElement, limit: number): void {
    const limitLines = (): void => {
      const lines = textarea.value.split("\n");
      if (lines.length > limit) {
        textarea.value = lines.slice(0, limit).join("\n");
      }
    };

    limitLines();

    let timeout: NodeJS.Timeout;
    textarea.addEventListener("input", () => {
      clearTimeout(timeout);
      timeout = setTimeout(limitLines, 1);
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
  
    this.navbar = new Navbar(document.querySelector('nav') as HTMLElement, this.parent);

    const settingsButton = document.querySelector('.settings-button') as HTMLElement;
    settingsButton.addEventListener('click', () => this.toggleEditMode());

    const saveButton = document.getElementById('save-settings') as HTMLElement;
    if (saveButton) {
      saveButton.addEventListener('click', () => this.saveSettings());
    }

    const buttons = document.querySelectorAll('.delete-button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            this.deleteImage(index);
        });
    });


    if (this.isEditing) {
      const textarea = document.getElementById('About') as HTMLTextAreaElement; 
      this.limitText(textarea, 10); 

      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; 
        textarea.style.height = `${textarea.scrollHeight}px`; 
      });
    }
  }

  private deleteImage(index: number): void {
    this.imagesURLs.splice(index, 1);
    this.render();
    console.log(`Изображение с индексом ${index} удалено`);
  }


  private toggleEditMode(): void {
    this.isEditing = !this.isEditing; 
    this.loadProfile().then(() => {
      this.render();
    });
  }
  
  private async saveSettings(): Promise<void> {
    const firstName = (document.getElementById('FirstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('LastName') as HTMLInputElement).value;
    const gender = (document.getElementById('Gender') as HTMLSelectElement).value;
    const age = parseInt((document.getElementById('Age') as HTMLInputElement).value, 10);
    const target = (document.getElementById('Target') as HTMLTextAreaElement).value;
    const about = (document.getElementById('About') as HTMLTextAreaElement).value || 'nothing';

    const profileData: UserProfile = {
      ID: this.ID, 
      FirstName: firstName,
      LastName: lastName,
      Age: age,
      Gender: gender,
      Target: target,
      About: about,
      imagesURLs: this.imagesURLs,
    };

    const updateSuccess = await updProfile(profileData);
    
    
    if (updateSuccess) {
        console.log('Profile updated successfully');
    } else {
        console.error('Failed to update profile');
    }
    this.isEditing = false; 
    this.loadProfile().then(() => {
      this.render();
    });
  }
}