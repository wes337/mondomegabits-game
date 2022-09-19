export const ellipsisToString = (
  fullString,
  maxLength = 50,
  ellipsisSize = 3
) => {
  if (fullString.length <= maxLength) {
    return fullString;
  }

  return `${fullString.slice(0, maxLength - ellipsisSize)}...`;
};
