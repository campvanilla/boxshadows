// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFunction = (input: unknown): input is (...args: any[]) => any => typeof input === 'function';

