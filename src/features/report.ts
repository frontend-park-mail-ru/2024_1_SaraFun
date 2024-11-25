import { post } from '../shared/api/api';
import reportModalTemplate from '../widgets/Report/report.pug'

export function openReportModal(userId: number): void {
  async function submitReport(userId: number, reason: string, comment: string): Promise<void> {
    try {
      const body = { 'receiver': userId, 'reason': reason, 'body': comment}; 
      const response = await post('/report', body);

      if (!response.ok) {
        throw new Error('Ошибка при отправке жалобы');
      }

      showSuccess('report-success', 'Жалоба успешно отправлена.');
    } catch (error) {
      console.error(error);
      showError('report-error', 'Ошибка при отправке жалобы. Попробуйте позже.');
    }
  }
  
  const modalHTML = reportModalTemplate();
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('reportModal') as HTMLElement;
  modal.style.display = 'block';
  const closeModalButton = modal.querySelector('.close-modal') as HTMLElement;
  
  
  closeModalButton.addEventListener('click', () => {
    modal.remove();
  });

  const reportForm = document.getElementById('reportForm') as HTMLFormElement;
  
  
  reportForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const reason = (document.getElementById('reason') as HTMLSelectElement).value;
    const comment = (document.getElementById('comment') as HTMLTextAreaElement).value;

    await submitReport(userId, reason, comment);
    
    setTimeout(() => {
      modal.remove(); 
    }, 2000);
  });

  function showError(elementId: string, message: string): void {
    const errorElement = document.getElementById(elementId) as HTMLElement;
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }

  function showSuccess(elementId: string, message: string): void {
    const successElement = document.createElement('p');
    successElement.id = elementId;
    successElement.textContent = message;
    successElement.style.color = 'green'; // Цвет текста для успеха
    successElement.style.display = 'block';
    modal.appendChild(successElement); // Добавляем сообщение в модальное окно
  }


}


