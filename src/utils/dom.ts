import { isFunction } from '@utils/lang';
import debounce from 'lodash/debounce';

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

/**
 * Set custom properties for vh
 * @see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
export const setWindowCustomProperties = () => {
  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setViewportHeight();
  const setViewportHeightOnResize = debounce(setViewportHeight, 200);

  window.addEventListener('resize', setViewportHeightOnResize);

  return () => {
    window.removeEventListener('resize', setViewportHeightOnResize);
  };
}
