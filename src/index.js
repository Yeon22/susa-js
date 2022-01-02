const { SUSA, NUM_KR, MAX_NUM_KR } = require("./constant");
const { getBase, checkNumError, getDividedNumber } = require("./utils");

const convertNumToKr = (num) => {
  checkNumError(num, MAX_NUM_KR);
  const dividedNum = getDividedNumber(num);
  const base = getBase({ num, dividedNum, match: NUM_KR });
  if (base !== null) return base;

  const portion = Math.floor(num / dividedNum) * dividedNum;
  if (portion > dividedNum && !NUM_KR[portion]) {
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
  const dividedNum = getDividedNumber(num);
  const base = getBase({ num, dividedNum });
  if (base !== null) return base;

  const portion = Math.floor(num / dividedNum) * dividedNum;

  if (portion > dividedNum && !SUSA[portion]) {
    return (
      convertNumToKr(Math.floor(portion / dividedNum)) +
      SUSA[dividedNum] +
      convertNumToSusa(num - portion)
    );
  }

  return SUSA[portion] + convertNumToSusa(num - portion);
};

module.exports = { susa: convertNumToSusa, numKr: convertNumToKr };
