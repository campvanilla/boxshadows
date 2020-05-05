export const copyToClipboard = (value: string, loadingSetter) => {
  const temporaryInput = document.createElement('input');
  document.body.appendChild(temporaryInput);
  temporaryInput.value = value;
  temporaryInput.select();
  document.execCommand('copy', false);
  temporaryInput.remove();

  loadingSetter(true);

  setTimeout(() => {
    loadingSetter(false);
  }, 2000);
}
