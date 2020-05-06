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
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  };

  setViewportHeight();
  const setViewportHeightOnResize = debounce(setViewportHeight, 200);

  window.addEventListener('resize', setViewportHeightOnResize);

  return () => {
    window.removeEventListener('resize', setViewportHeightOnResize);
  };
}

export const trackClickEvents = () => {
  const trackClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.getAttribute && target.getAttribute('data-tracking-enabled')) {
      const label = target.getAttribute('data-tracking-label');
      const valueAttribute = target.getAttribute('data-tracking-value');
      const value = valueAttribute ? parseInt(valueAttribute, 10) : null;

      const params: Gtag.EventParams = {
        event_category: 'boxshadows',
      };

      if (label) {
        params.event_label = label;
      } else {
        params.event_label = target.innerText;
      }

      if (value && !Number.isNaN(value)) {
        params.value = value;
      }

      window.gtag('event', 'click', params);
    }
  };

  document.body.addEventListener('click', trackClick, {
    capture: true,
  });

  return () => {
    document.body.removeEventListener('click', trackClick);
  };
};
