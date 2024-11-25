import { post } from '../shared/api/api';
import reportModalTemplate from '../widgets/Report/report.pug'

export function openReportModal(userId: number): void {
  async function submitReport(userId: number, reason: string, comment: string): Promise<void> {
    try {
      const body = { userId };//'receiver': userId, 'reason': reason, 'loh': comment}; 
      const response = await post('/report', body);

      if (!response.ok) {
        throw new Error('Ошибка при отправке жалобы');
      }

      showSuccessMessage('Жалоба успешно отправлена.');
    } catch (error) {
      console.error(error);
      showError('Ошибка при отправке жалобы. Попробуйте позже.');
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

  function showError(message: string): void {
    const errorElement = document.getElementById('report-error') as HTMLElement;
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }

  function showSuccessMessage(message: string): void {
    const successElement = document.getElementById('report-error');
    if (successElement) {
        successElement.textContent = message;
        successElement.style.color = 'green'; 
        successElement.style.display = 'block';
    }
  }


}


