export const groupBy = (arr: any[], key: string) =>
  arr.reduce((acc, item) => {
    acc.set(item[key], [...(acc.get(item[key]) || []), item]);
    return acc;
  }, new Map());
