// / <reference types="gtag.js" />

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * https://twitter.com/jaredpalmer/status/1177359518755360768?s=09
 */
interface WhyAny {
  GenericTemplateArgument: any;
  InitialValue: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

declare module '*.png' {
  const value: string;
  export default value;
}


declare module '*.svg' {
  const value: string;

  export default value;
}

interface Window {
  /**
   * The gtag.js
   * @see [Google Analytics documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs)
   * @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/23718
   */
  gtag: Gtag.Gtag;
}
