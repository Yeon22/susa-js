const { SUSA, NUM_KR, MAX_NUM_KR } = require("./constant");
const {
  getMatchSusaOrKr,
  checkNumError,
  getPortion,
  hasMiddleNumber,
  getDividedNumber,
} = require("./utils");

const convertNumToKr = (num) => {
  checkNumError(num, MAX_NUM_KR);

  const krFromNum = getMatchSusaOrKr(num, NUM_KR);
  if (krFromNum !== null) return krFromNum;

  const portion = getPortion(num);
  const dividedNum = getDividedNumber(num);
  if (hasMiddleNumber(num, NUM_KR)) {
    return (
      NUM_KR[Math.floor(portion / dividedNum)] +
      NUM_KR[dividedNum] +
      convertNumToKr(num - portion)
    );
  }

  return NUM_KR[portion] + convertNumToKr(num - portion);
};

const convertNumToSusa = (num) => {
  checkNumError(num);

  const susa = getMatchSusaOrKr(num, SUSA);
  if (susa !== null) return susa;

  const portion = getPortion(num);
  const dividedNum = getDividedNumber(num);
  if (hasMiddleNumber(num)) {
    return (
      convertNumToKr(Math.floor(portion / dividedNum)) +
      SUSA[dividedNum] +
      convertNumToSusa(num - portion)
    );
  }

  return SUSA[portion] + convertNumToSusa(num - portion);
};

module.exports = { susa: convertNumToSusa, numKr: convertNumToKr };
