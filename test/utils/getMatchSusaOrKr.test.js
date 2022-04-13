const assert = require("assert");
const { NUM_KR } = require("../../src/constant");
const { getMatchSusaOrKr } = require("../../src/utils");

describe("getMatchSusaOrKr(num)", () => {
  describe("num is not number", () => {
    it("throw error", () => {
      assert.throws(
        () => getMatchSusaOrKr("hi"),
        Error,
        "argument is not number"
      );
    });
  });

  describe("num < 1 and dividedNum < 1", () => {
    it("return empty string", () => {
      assert.equal(getMatchSusaOrKr(0), "");
      assert.equal(getMatchSusaOrKr(-1), "");
    });
  });

  describe("num < 10 and dividedNum < 1", () => {
    it("if match is SUSA then return SUSA[num]", () => {
      assert.equal(getMatchSusaOrKr(1), "하나");
      assert.equal(getMatchSusaOrKr(5), "다섯");
      assert.equal(getMatchSusaOrKr(9), "아홉");
    });
    it("if match is NUM_KR then return NUM_KR[num]", () => {
      assert.equal(getMatchSusaOrKr(1, NUM_KR), "일");
      assert.equal(getMatchSusaOrKr(4, NUM_KR), "사");
      assert.equal(getMatchSusaOrKr(9, NUM_KR), "구");
    });
  });

  describe("num > 10", () => {
    it("if match is SUSA return null", () => {
      assert.equal(getMatchSusaOrKr(10), null);
      assert.equal(getMatchSusaOrKr(235), null);
    });
    it("if match is NUM_KR return null", () => {
      assert.equal(getMatchSusaOrKr(10, NUM_KR), null);
      assert.equal(getMatchSusaOrKr(235, NUM_KR), null);
    });
  });
});
