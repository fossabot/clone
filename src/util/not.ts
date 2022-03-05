export const not =
  <T>(f: (...args: T[]) => boolean) =>
  (...args: T[]) =>
    !f(...args)
