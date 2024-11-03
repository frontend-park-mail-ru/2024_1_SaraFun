import template from './ui/profile.pug';
import { getProfile } from './api/getProfile';
import Navbar from '../../widgets/Navbar/navbar.js';
import './ui/profile.scss';

interface Parent {
  root: HTMLElement;
}

export class ProfilePage {
  private parent: Parent;
  private isEditing: boolean;
  private navbar: Navbar | null;
  private FirstName: string;
  private LastName: string;
  private Age: number;
  private Gender: string;
  private Target: string;
  private About: string;

  constructor(parent: Parent) {
    this.parent = parent;
    this.isEditing = false;
    this.navbar = null;
    this.FirstName = 'Андрей';
    this.LastName = 'Карганов';
    this.Age = 20;
    this.Gender = 'male';
    this.Target = '$100';
    this.About = 'tg: @andrey_918';
  
    this.render();
  }

  private async loadProfile(): Promise<void> {
    try {
      const profileData = await getProfile();
      if (profileData) {
        this.FirstName = profileData.FirstName || 'Андрей';
        this.LastName = profileData.LastName || 'Карганов';
        this.Age = profileData.Age || 20;
        this.Gender = profileData.Gender || 'male';
        this.Target = profileData.Target || '$100';
        this.About = profileData.About || 'tg: @andrey_918';
      }
    } catch (error) {
      console.error('Ошибка при загрузке профиля:', error);
    }
  }
  

  // Функция для ограничения количества строк
  private limitText(textarea: HTMLTextAreaElement, limit: number): void {
    const limitLines = (): void => {
      const lines = textarea.value.split("n");
      if (lines.length > limit) {
        textarea.value = lines.slice(0, limit).join("n");
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
    });
  
    this.navbar = new Navbar(document.querySelector('nav') as HTMLElement, this.parent);

    const settingsButton = document.querySelector('.settings-button') as HTMLElement;
    settingsButton.addEventListener('click', () => this.toggleEditMode());

    const saveButton = document.getElementById('save-settings') as HTMLElement;
    if (saveButton) {
      saveButton.addEventListener('click', () => this.saveSettings());
    }

    if (this.isEditing) {
      const textarea = document.getElementById('bio') as HTMLTextAreaElement; 
      this.limitText(textarea, 10); // Ограничение на кол-во строк

      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; 
        textarea.style.height = `${textarea.scrollHeight}px`; 
      });
    }
  }

  private toggleEditMode(): void {
    this.isEditing = !this.isEditing; 
    this.render(); 
  }
  
  private saveSettings(): void {
    // const FirstName = (document.getElementById('FirstName') as HTMLInputElement).value;
    // const LastName = (document.getElementById('LastName') as HTMLSelectElement).value;
    // const Gender = (document.getElementById('Gender') as HTMLInputElement).value;
    // const Age = (document.getElementById('Age') as HTMLTextAreaElement).value;
    // const Target = (document.getElementById('Target') as HTMLTextAreaElement).value;
    // const About = (document.getElementById('About') as HTMLTextAreaElement).value || 'nothing';

    // Здесь добавить логику для сохранения данных (отправка на сервер)

    this.isEditing = false; 
    this.render(); 
  }
}