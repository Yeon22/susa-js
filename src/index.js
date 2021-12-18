const { SUSA } = require("./constant");

const convertNumToSusa = (num) => {
  if (isNaN(Number(num))) throw new Error("argument is not number");
  if (num >= 100) throw new Error("over 99 number is not support yet");

  if (num < 10) return SUSA[num];

  const portion = Math.floor(num / 10) * 10;
  const remainder = num % 10;

  return `${SUSA[portion]}${remainder > 0 ? SUSA[remainder] : ""}`;
};

module.exports.susa = convertNumToSusa;
