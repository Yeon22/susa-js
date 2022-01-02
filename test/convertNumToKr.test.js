const assert = require("assert");
const { numKr } = require("../src");

describe("convertNumToKr()", () => {
  describe("argument is not valid number", () => {
    it("throw error when argument is not number", () => {
      assert.throws(() => numKr("hi"), Error, "argument is not number");
    });
    it("throw error when argument is over 999", () => {
      assert.throws(
        () => susa(1000),
        Error,
        "over 999 number is not support yet"
      );
    });
  });

  describe("argument is valid number", () => {
    it("replaces the number(<10) to approriate korean", () => {
      assert.equal(numKr(1), "일");
      assert.equal(numKr(2), "이");
      assert.equal(numKr(3), "삼");
      assert.equal(numKr(4), "사");
      assert.equal(numKr(5), "오");
      assert.equal(numKr(6), "육");
      assert.equal(numKr(7), "칠");
      assert.equal(numKr(8), "팔");
      assert.equal(numKr(9), "구");
    });
    it("replaces the number(<100) to approriate korean", () => {
      assert.equal(numKr(10), "십");
      assert.equal(numKr(11), "십일");
      assert.equal(numKr(22), "이십이");
      assert.equal(numKr(33), "삼십삼");
      assert.equal(numKr(44), "사십사");
      assert.equal(numKr(55), "오십오");
      assert.equal(numKr(66), "육십육");
      assert.equal(numKr(77), "칠십칠");
      assert.equal(numKr(88), "팔십팔");
      assert.equal(numKr(99), "구십구");
    });
    it("replaces the number(<1,000) to approriate korean", () => {
      assert.equal(numKr(100), "백");
      assert.equal(numKr(111), "백십일");
      assert.equal(numKr(222), "이백이십이");
      assert.equal(numKr(333), "삼백삼십삼");
      assert.equal(numKr(444), "사백사십사");
      assert.equal(numKr(555), "오백오십오");
      assert.equal(numKr(666), "육백육십육");
      assert.equal(numKr(777), "칠백칠십칠");
      assert.equal(numKr(888), "팔백팔십팔");
      assert.equal(numKr(999), "구백구십구");
    });
  });
});
