import { post } from '../shared/api/api';
import reportModalTemplate from '../widgets/Report/report.pug'

export function openReportModal(userId: number): void {
  async function submitReport(userId: number, reason: string, comment: string): Promise<void> {
    try {
      const body = { 'receiver': userId, 'body': comment}; //no "reason" yet
      const response = await post('/report', body);

      if (!response.ok) {
        throw new Error('Ошибка при отправке жалобы');
      }
    } catch (error) {
      console.error(error);
      //тут бы писать, что надо попробовать позже
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
    
    modal.remove();
  });
}


