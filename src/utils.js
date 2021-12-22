const { MIN_NUMBER, MAX_NUMBER } = require("./constant");

const getDividedNumber = (num) => {
  if (num < MIN_NUMBER) return 0;
  if (num >= MIN_NUMBER && num < 100) return 10;
  if (num >= 100 && num < 1000) return 100;
  if (num >= 1000 && num < 10000) return 1000;
  if (num >= 10000 && num < 100000000) return 10000;
  if (num >= 100000000 && num < MAX_NUMBER) return 100000000;
  if (num >= MAX_NUMBER) return MAX_NUMBER;
};

module.exports = { getDividedNumber };
