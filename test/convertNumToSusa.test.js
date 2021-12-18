const assert = require("assert");
const { susa } = require("../src");

describe("convertNumToSusa()", function () {
  describe("argument is not valid number", () => {
    it("throw error when argument is not number", () => {
      assert.throws(() => susa("hi"), Error, "argument is not number");
    });
    it("throw error when argument is over 99", () => {
      assert.throws(
        () => susa("100"),
        Error,
        "over 99 number is not support yet"
      );
    });
  });

  describe("argument is valid number", () => {
    it("replaces the number to appropriate susa", () => {
      assert.equal(susa(1), "하나");
      assert.equal(susa(10), "열");
      assert.equal(susa(11), "열하나");
      assert.equal(susa(20), "스물");
      assert.equal(susa(22), "스물둘");
      assert.equal(susa(30), "서른");
      assert.equal(susa(33), "서른셋");
      assert.equal(susa(40), "마흔");
      assert.equal(susa(44), "마흔넷");
      assert.equal(susa(50), "쉰");
      assert.equal(susa(55), "쉰다섯");
      assert.equal(susa(60), "예순");
      assert.equal(susa(66), "예순여섯");
      assert.equal(susa(70), "일흔");
      assert.equal(susa(77), "일흔일곱");
      assert.equal(susa(80), "여든");
      assert.equal(susa(88), "여든여덟");
      assert.equal(susa(90), "아흔");
      assert.equal(susa(99), "아흔아홉");
    });
  });
});
