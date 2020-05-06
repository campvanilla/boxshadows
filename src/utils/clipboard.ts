export const copyToClipboard = (value: string) => {
  const temporaryInput = document.createElement('input');
  document.body.appendChild(temporaryInput);
  temporaryInput.value = value;
  temporaryInput.select();
  document.execCommand('copy', false);
  temporaryInput.remove();
}
