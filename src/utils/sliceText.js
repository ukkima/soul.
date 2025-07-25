export const sliceText = (count, text) => {
  return text.length > count ? text.slice(0, count) + "..." : text;
};
