
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * https://twitter.com/jaredpalmer/status/1177359518755360768?s=09
 */
export interface WhyAny {
  GenericTemplateArgument: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

declare module '*.png' {
  const value: string;

  export default value;
}
