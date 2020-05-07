import { track } from './analytics';

export const copyToClipboard = (toCopy: string, label?: string, value?: number) => {
  const temporaryInput = document.createElement('input');
  document.body.appendChild(temporaryInput);
  temporaryInput.value = toCopy;
  temporaryInput.select();
  document.execCommand('copy', false);
  temporaryInput.remove();

  track({ action: 'copy-to-clipboard', label, value })
}
