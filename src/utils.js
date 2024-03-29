const { MIN_NUMBER, MAX_SUSA, SUSA } = require("./constant");

const getDividedNumber = (num = 0) => {
  if (num < MIN_NUMBER) return 0;
  if (num >= MIN_NUMBER && num < 100) return 10;
  if (num >= 100 && num < 1000) return 100;
  if (num >= 1000 && num < 10000) return 1000;
  if (num >= 10000 && num < 100000000) return 10000;
  if (num >= 100000000 && num < MAX_SUSA) return 100000000;
  if (num >= MAX_SUSA) return MAX_SUSA;
};

const getMatchSusaOrKr = (num, match = SUSA) => {
  const dividedNum = getDividedNumber(num);
  if (isNaN(Number(num)) || isNaN(Number(dividedNum)))
    throw new Error("argument is not number");

  if (dividedNum < 1 && num <= 0) return "";
  if (dividedNum < 1 && num < MIN_NUMBER) return match[num];

  return null;
};

const getPortion = (num) => {
  const dividedNum = getDividedNumber(num);
  if (dividedNum < 1) throw new Error(`Can't divide by 0`);
  return Math.floor(num / dividedNum) * dividedNum;
};

const checkNumError = (num, max = MAX_SUSA) => {
  if (isNaN(Number(num))) throw new Error("argument is not number");
  if (num >= max) throw new Error(`over ${max - 1} number is not support yet`);

  return false;
};

const hasMiddleNumber = (num, match = SUSA) => {
  const dividedNum = getDividedNumber(num);
  const portion = getPortion(num);
  if (dividedNum < 1) throw new Error(`Can't divide by 0`);
  return portion > dividedNum && !match[portion];
};

module.exports = {
  getDividedNumber,
  getMatchSusaOrKr,
  getPortion,
  checkNumError,
  hasMiddleNumber,
};
