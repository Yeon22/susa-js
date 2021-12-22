const { SUSA, MAX_NUMBER, MIN_NUMBER, NUM_KR } = require("./constant");
const { getDividedNumber } = require("./utils");

const convertNumToSusa = (num) => {
  if (isNaN(Number(num))) throw new Error("argument is not number");
  if (num >= MAX_NUMBER)
    throw new Error(`over ${MAX_NUMBER - 1} number is not support yet`);

  const dN = getDividedNumber(num);
  if (dN < 1 && num <= 0) return "";
  if (dN < 1 && num < MIN_NUMBER) return SUSA[num];

  const portion = Math.floor(num / dN) * dN;
  if (portion > dN && !SUSA[portion]) {
    return (
      NUM_KR[Math.floor(portion / dN)] +
      SUSA[dN] +
      convertNumToSusa(num - portion)
    );
  }

  return SUSA[portion] + convertNumToSusa(num - portion);
};

module.exports.susa = convertNumToSusa;
