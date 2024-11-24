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

      alert('Жалоба успешно отправлена!');
    } catch (error) {
      console.error(error);
      alert('Не удалось отправить жалобу. Попробуйте еще раз.');
    }
  }
  const modalHTML = reportModalTemplate();
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('reportModal') as HTMLElement;
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


