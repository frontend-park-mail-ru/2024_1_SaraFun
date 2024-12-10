export function limitText(textarea: HTMLTextAreaElement, limit: number): void {
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

export function limitInput(input: HTMLInputElement): void {
  const regex = /^[A-Za-zА-Яа-яЁё-]*$/;
  input.addEventListener("input", () => {
    if (!regex.test(input.value)) {
      input.value = input.value.split('').filter(char => regex.test(char)).join('');
    }
  });
}