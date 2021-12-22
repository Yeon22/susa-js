const assert = require("assert");
const { susa } = require("../src");

describe("convertNumToSusa()", function () {
  describe("argument is not valid number", () => {
    it("throw error when argument is not number", () => {
      assert.throws(() => susa("hi"), Error, "argument is not number");
    });
    it("throw error when argument is over 99999", () => {
      assert.throws(
        () => susa("100000"),
        Error,
        "over 99999 number is not support yet"
      );
    });
  });

  describe("argument is valid number", () => {
    it("replaces the number(<100) to appropriate susa", () => {
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
    it("replaces the number(<1,000) to appropriate susa", () => {
      assert.equal(susa(100), "백");
      assert.equal(susa(101), "백하나");
      assert.equal(susa(111), "백열하나");
      assert.equal(susa(200), "이백");
      assert.equal(susa(202), "이백둘");
      assert.equal(susa(222), "이백스물둘");
      assert.equal(susa(300), "삼백");
      assert.equal(susa(303), "삼백셋");
      assert.equal(susa(333), "삼백서른셋");
      assert.equal(susa(400), "사백");
      assert.equal(susa(404), "사백넷");
      assert.equal(susa(444), "사백마흔넷");
      assert.equal(susa(500), "오백");
      assert.equal(susa(505), "오백다섯");
      assert.equal(susa(555), "오백쉰다섯");
      assert.equal(susa(600), "육백");
      assert.equal(susa(606), "육백여섯");
      assert.equal(susa(666), "육백예순여섯");
      assert.equal(susa(700), "칠백");
      assert.equal(susa(707), "칠백일곱");
      assert.equal(susa(777), "칠백일흔일곱");
      assert.equal(susa(800), "팔백");
      assert.equal(susa(808), "팔백여덟");
      assert.equal(susa(888), "팔백여든여덟");
      assert.equal(susa(900), "구백");
      assert.equal(susa(909), "구백아홉");
      assert.equal(susa(999), "구백아흔아홉");
    });
    it("replaces the number(<10,000) to appropriate susa", () => {
      assert.equal(susa(1000), "천");
      assert.equal(susa(1001), "천하나");
      assert.equal(susa(1011), "천열하나");
      assert.equal(susa(1111), "천백열하나");
      assert.equal(susa(2000), "이천");
      assert.equal(susa(2002), "이천둘");
      assert.equal(susa(2022), "이천스물둘");
      assert.equal(susa(2222), "이천이백스물둘");
      assert.equal(susa(3000), "삼천");
      assert.equal(susa(3003), "삼천셋");
      assert.equal(susa(3033), "삼천서른셋");
      assert.equal(susa(3333), "삼천삼백서른셋");
      assert.equal(susa(4000), "사천");
      assert.equal(susa(4004), "사천넷");
      assert.equal(susa(4044), "사천마흔넷");
      assert.equal(susa(4444), "사천사백마흔넷");
      assert.equal(susa(5000), "오천");
      assert.equal(susa(5005), "오천다섯");
      assert.equal(susa(5055), "오천쉰다섯");
      assert.equal(susa(5555), "오천오백쉰다섯");
      assert.equal(susa(6000), "육천");
      assert.equal(susa(6006), "육천여섯");
      assert.equal(susa(6066), "육천예순여섯");
      assert.equal(susa(6666), "육천육백예순여섯");
      assert.equal(susa(7000), "칠천");
      assert.equal(susa(7007), "칠천일곱");
      assert.equal(susa(7077), "칠천일흔일곱");
      assert.equal(susa(7777), "칠천칠백일흔일곱");
      assert.equal(susa(8000), "팔천");
      assert.equal(susa(8008), "팔천여덟");
      assert.equal(susa(8088), "팔천여든여덟");
      assert.equal(susa(8888), "팔천팔백여든여덟");
      assert.equal(susa(9000), "구천");
      assert.equal(susa(9009), "구천아홉");
      assert.equal(susa(9099), "구천아흔아홉");
      assert.equal(susa(9999), "구천구백아흔아홉");
    });
  });
});
