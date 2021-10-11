export const groupBy = <T extends object, K extends keyof T>(
  arr: T[],
  key: K
) =>
  arr.reduce((acc, item) => {
    acc.set(item[key], [...(acc.get(item[key]) || []), item]);
    return acc;
  }, new Map<T[K], T[]>());
