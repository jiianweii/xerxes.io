export const getCurrency = (price) => {
  return "$" + (Math.round(price * 100) / 100).toFixed(2);
};
