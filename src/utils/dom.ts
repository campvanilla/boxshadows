import { isFunction } from '@utils/lang';

export const removeClass = (element: HTMLElement, className: string) => {
  if (!element) return;

  if (isFunction(element.classList.remove)) {
    element.classList.remove(className);
  } else {
    element.className = element.className.split(' ').filter(name => name !== className).join(' ');
  }
};

export const addClass = (element: HTMLElement, className: string) => {
  if (!element) return;

  if (isFunction(element.classList.add)) {
    element.classList.add(className);
  } else {
    element.className = [element.className, className].join(' ');
  }
};
