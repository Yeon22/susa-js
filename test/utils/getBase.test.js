const assert = require("assert");
const { NUM_KR } = require("../../src/constant");
const { getBase } = require("../../src/utils");

describe("getBase()", () => {
  describe("num is not number", () => {
    it("throw error", () => {
      assert.throws(
        () => getBase({ num: "hi", dividedNum: 1000 }),
        Error,
        "argument is not number"
      );
    });
  });

  describe("dividedNum is not valid", () => {
    it("is not number throw error", () => {
      assert.throws(
        () => getBase({ num: 15, dividedNum: "hi" }),
        Error,
        "argument is not number"
      );
    });
  });

  describe("num < 1 and dividedNum < 1", () => {
    it("return empty string", () => {
      assert.equal(getBase({ num: 0, dividedNum: 0 }), "");
      assert.equal(getBase({ num: -1, dividedNum: -1 }), "");
    });
  });

  describe("num < 10 and dividedNum < 1", () => {
    it("if match is SUSA then return SUSA[num]", () => {
      assert.equal(getBase({ num: 1, dividedNum: 0 }), "하나");
      assert.equal(getBase({ num: 5, dividedNum: 0 }), "다섯");
      assert.equal(getBase({ num: 9, dividedNum: 0 }), "아홉");
    });
    it("if match is NUM_KR then return NUM_KR[num]", () => {
      assert.equal(getBase({ num: 1, dividedNum: 0, match: NUM_KR }), "일");
      assert.equal(getBase({ num: 4, dividedNum: 0, match: NUM_KR }), "사");
      assert.equal(getBase({ num: 9, dividedNum: 0, match: NUM_KR }), "구");
    });
  });

  describe("num > 10", () => {
    it("if match is SUSA return null", () => {
      assert.equal(getBase({ num: 10, dividedNum: 10 }), null);
      assert.equal(getBase({ num: 235, dividedNum: 0 }), null);
    });
    it("if match is NUM_KR return null", () => {
      assert.equal(getBase({ num: 10, dividedNum: 10, match: NUM_KR }), null);
      assert.equal(getBase({ num: 235, dividedNum: 0, match: NUM_KR }), null);
    });
  });
});
