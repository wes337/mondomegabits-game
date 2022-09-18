export const uniqueArrayByKey = (array, key) => {
  const uniqueArray = [
    ...array
      .reduce((a, c) => {
        a.set(c[key], c);
        return a;
      }, new Map())
      .values(),
  ];

  return uniqueArray;
};
