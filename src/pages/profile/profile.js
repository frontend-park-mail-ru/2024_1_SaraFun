import template from './ui/profile.pug';
import Navbar from '../../widgets/Navbar/navbar.js';
import './ui/profile.scss';

export class ProfilePage {
  constructor(parent) {
    this.parent = parent;
    this.isEditing = false; 
    this.render();
  }

  // Функция для ограничения количества строк
  limitText(textarea, limit) {
    const limitLines = () => {
      const lines = textarea.value.split("\n");
      if (lines.length > limit) {
        textarea.value = lines.slice(0, limit).join("\n");
      }
    };

    limitLines();

    let timeout;
    textarea.addEventListener("input", function () {
      clearTimeout(timeout);
      timeout = setTimeout(limitLines, 1);
    });
  }

  render() {
    this.parent.root.innerHTML = template({ isEditing: this.isEditing });
    this.navbar = new Navbar(document.querySelector('nav'), this.parent);
    
    const settingsButton = document.querySelector('.settings-button');
    settingsButton.addEventListener('click', () => this.toggleEditMode());

    const saveButton = document.getElementById('save-settings');
    if (saveButton) {
      saveButton.addEventListener('click', () => this.saveSettings());
    }

    const cancelButton = document.getElementById('cancel-settings');
    if (cancelButton) {
      cancelButton.addEventListener('click', () => this.toggleEditMode());
    }

    if (this.isEditing) {
      const textarea = document.getElementById('bio'); 
      this.limitText(textarea, 10); // Ограничение на кол-во строк

      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; 
        textarea.style.height = textarea.scrollHeight + 'px'; 
      });
    }
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing; 
    this.render(); 
  }
  
  saveSettings() {
    const username = document.getElementById('username').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;


    // Здесь добавить логику для сохранения данных (отправка на сервер)

    this.isEditing = false; 
    this.render(); 
  }
}