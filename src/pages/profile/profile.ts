import template from './ui/profile.pug';
import { updProfile } from './api/updProfile';
import Navbar from '../../widgets/Navbar/navbar.js';
import './ui/profile.scss';
import { uploadImg } from '../../features/imageUploader';
import { UserProfile } from '../login/api/profile';


interface Parent {
  curLogin: string;
  ID: number;
  imagesIndexes: number[];
  FirstName: string;
  LastName: string;
  Age: number;
  Gender: string;
  Target: string;
  About: string;
  imagesURLs: string[];
  root: HTMLElement;
}

export class ProfilePage {
  private imagesDel: number[] = [];
  private imagesNew: File[] = [];
  private parent: Parent;
  private isEditing: boolean;
  private navbar: Navbar | null;
  private ID: number;
  private imagesIndexes: number[];
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
    this.imagesIndexes = [];
    this.FirstName = 'Андрей';
    this.LastName = 'Девелопер'
    this.Age = 18;
    this.Gender = 'male';
    this.Target = '-';
    this.About = '-';
    this.imagesURLs = ['./img/image.svg', './img/image.svg', './img/image.svg', './img/image.svg', './img/image.svg', './img/image.svg'];
    this.loadProfile().then(() => {
      this.render();
    });
  }

  private async loadProfile(): Promise<void> {
    this.ID = this.parent.ID || -1;
    this.imagesIndexes = this.parent.imagesIndexes || [];
    this.FirstName = this.parent.FirstName || '-';
    this.LastName = this.parent.LastName || '-';
    this.Age = this.parent.Age || 21;
    this.Gender = this.parent.Gender || 'male';
    this.Target = this.parent.Target || '-';
    this.About = this.parent.About || '-';
    this.imagesURLs = this.parent.imagesURLs || ['./img/image.svg'];
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

  public render(): void {
    this.parent.root.innerHTML = template({
      username: this.parent.curLogin,
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
    this.navbar = new Navbar(document.querySelector('nav') as HTMLElement, this.parent);

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
    this.imagesDel.push(this.imagesIndexes[index]);
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

    const updateSuccess = await updProfile(profileData, this.imagesNew, this.imagesDel);
    
    if (updateSuccess) {
      this.parent.FirstName = this.FirstName;
      this.parent.LastName = this.LastName;
      this.parent.Age = this.Age;
      this.parent.Gender = this.Gender;
      this.parent.Target = this.Target;
      this.parent.About = this.About;
      this.parent.imagesURLs = this.imagesURLs;
      this.parent.imagesIndexes = this.imagesIndexes;
      //console.log('Profile updated successfully'); //тут бы всплывающее окно
    } else {
      // console.error('Failed to update profile'); //тут тоже
    }

    this.isEditing = false;
    this.imagesDel = [];
    this.imagesNew = [];
    this.loadProfile().then(() => {
      this.render();
    });
  }
}