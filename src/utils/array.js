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

export const arraysAreEqual = (arrayOne, arrayTwo) => {
  try {
    return JSON.stringify(arrayOne.sort()) === JSON.stringify(arrayTwo.sort());
  } catch (error) {
    console.error(error);
    return false;
  }
};
