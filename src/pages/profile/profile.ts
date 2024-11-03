import template from './ui/profile.pug';
import Navbar from '../../widgets/Navbar/navbar.js';
import './ui/profile.scss';

interface Parent {
  root: HTMLElement;
}

export class ProfilePage {
  private parent: Parent;
  private isEditing: boolean;
  private navbar: Navbar | null;

  constructor(parent: Parent) {
    this.parent = parent;
    this.isEditing = false;
    this.navbar = null;
    this.render();
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
    this.parent.root.innerHTML = template({ isEditing: this.isEditing });
    this.navbar = new Navbar(document.querySelector('nav') as HTMLElement, this.parent);

    const settingsButton = document.querySelector('.settings-button') as HTMLElement;
    settingsButton.addEventListener('click', () => this.toggleEditMode());

    const saveButton = document.getElementById('save-settings') as HTMLElement;
    if (saveButton) {
      saveButton.addEventListener('click', () => this.saveSettings());
    }

    const cancelButton = document.getElementById('cancel-settings') as HTMLElement;
    if (cancelButton) {
      cancelButton.addEventListener('click', () => this.toggleEditMode());
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
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLSelectElement).value;
    const age = (document.getElementById('age') as HTMLInputElement).value;
    const bio = (document.getElementById('bio') as HTMLTextAreaElement).value;

    // Здесь добавить логику для сохранения данных (отправка на сервер)

    this.isEditing = false; 
    this.render(); 
  }
}