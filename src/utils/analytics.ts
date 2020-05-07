type EventTypes = 'click' | 'copy-to-clipboard';

/**
 * @see [Sending with different transport types](https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data#specify_different_transport_mechanisms)
 */
const transport = (() => {
  if (typeof navigator.sendBeacon === 'function') {
    return 'beacon';
  }
  return 'image';
})();

/**
 * Custom dimensions, refer index.html gtag.config() for which dimensions are configured.
 * @see [Using custom dimensions](https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets)
 */
export interface CustomDimensions {
  /* dimension1 */
  href?: string;
}

export interface Event extends CustomDimensions {
  action?: EventTypes;
  category?: string;
  label?: string;
  value?: number;
}

export const getCategoryForPage = () => {
  const { pathname } = window.location;
  if (pathname === '/') {
    return 'editor';
  }
  return pathname.split('/')[1];
};

export const track = (event: Event) => {
  const { action = 'click', category = getCategoryForPage(), label, value, ...rest } = event;
  const params: Gtag.EventParams | Gtag.CustomParams = {
    event_category: category,
    transport_type: transport,

    ...(label && { event_label: label }),
    ...(typeof value !== 'undefined' && Number.isInteger(value) && { value }),

    ...rest,
  };

  if (process.env.NODE_ENV === 'production') {
    window.gtag('event', action, params);
  } else {
    console.table({ action, ...params });
  }
};

export const trackClickExternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const element = e.target as HTMLAnchorElement;
  if (element && element.tagName === 'A') {
    track({
      label: element.innerText,
      href: element.href,
    });
  } else if (process.env.NODE_ENV !== 'production'){
    console.warn('trackClickExternalLink() called on non-anchor element.');
  }
}
