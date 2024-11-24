import reportModalTemplate from '../widgets/Report/report.pug'

export function openReportModal(userId: number): void {
  async function submitReport(userId: number, reason: string, comment: string): Promise<void> {
    try {
      const response = await fetch('/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },


        body: JSON.stringify({ userId, reason, comment }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке жалобы');
      }

      alert('Жалоба успешно отправлена!');
    } catch (error) {
      console.error(error);
      alert('Не удалось отправить жалобу. Попробуйте еще раз.');
    }
  }
  // Вставляем модальное окно в DOM
  const modalHTML = reportModalTemplate();
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('reportModal') as HTMLElement;
  const closeModalButton = modal.querySelector('.close-modal') as HTMLElement;
  
  // Обработчик закрытия модального окна
  closeModalButton.addEventListener('click', () => {
    modal.remove();
  });

  const reportForm = document.getElementById('reportForm') as HTMLFormElement;
  
  // Обработчик отправки формы
  reportForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const reason = (document.getElementById('reason') as HTMLSelectElement).value;
    const comment = (document.getElementById('comment') as HTMLTextAreaElement).value;

    // Отправка жалобы на бэкэнд
    await submitReport(userId, reason, comment);
    
    // Закрытие модального окна после отправки
    modal.remove();
  });
}


