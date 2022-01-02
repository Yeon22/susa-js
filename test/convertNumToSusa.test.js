const assert = require("assert");
const { susa } = require("../src");

describe("convertNumToSusa()", () => {
  describe("argument is not valid number", () => {
    it("throw error when argument is not number", () => {
      assert.throws(() => susa("hi"), Error, "argument is not number");
    });
    it("throw error when argument is over 999,999,999,999", () => {
      assert.throws(
        () => susa(1000000000000),
        Error,
        "over 999999999999 number is not support yet"
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
      assert.equal(susa(900), "구백");
      assert.equal(susa(909), "구백아홉");
      assert.equal(susa(999), "구백아흔아홉");
    });
    it("replaces the number(<10,000) to appropriate susa", () => {
      assert.equal(susa(1000), "천");
      assert.equal(susa(1001), "천하나");
      assert.equal(susa(1011), "천열하나");
      assert.equal(susa(1111), "천백열하나");
      assert.equal(susa(9000), "구천");
      assert.equal(susa(9009), "구천아홉");
      assert.equal(susa(9099), "구천아흔아홉");
      assert.equal(susa(9999), "구천구백아흔아홉");
    });
    it("replaces the number(<100,000) to appropriate susa", () => {
      assert.equal(susa(10000), "만");
      assert.equal(susa(10001), "만하나");
      assert.equal(susa(10011), "만열하나");
      assert.equal(susa(10111), "만백열하나");
      assert.equal(susa(11111), "만천백열하나");
      assert.equal(susa(90000), "구만");
      assert.equal(susa(90009), "구만아홉");
      assert.equal(susa(90099), "구만아흔아홉");
      assert.equal(susa(90999), "구만구백아흔아홉");
      assert.equal(susa(99999), "구만구천구백아흔아홉");
    });
    it("replaces the number(<1,000,000) to appropriate susa", () => {
      assert.equal(susa(100000), "십만");
      assert.equal(susa(100001), "십만하나");
      assert.equal(susa(100011), "십만열하나");
      assert.equal(susa(100111), "십만백열하나");
      assert.equal(susa(101111), "십만천백열하나");
      assert.equal(susa(111111), "십일만천백열하나");
      assert.equal(susa(900000), "구십만");
      assert.equal(susa(900009), "구십만아홉");
      assert.equal(susa(900099), "구십만아흔아홉");
      assert.equal(susa(900999), "구십만구백아흔아홉");
      assert.equal(susa(909999), "구십만구천구백아흔아홉");
      assert.equal(susa(999999), "구십구만구천구백아흔아홉");
    });
    it("replaces the number(<10,000,000) to appropriate susa", () => {
      assert.equal(susa(1000000), "백만");
      assert.equal(susa(1000001), "백만하나");
      assert.equal(susa(1000011), "백만열하나");
      assert.equal(susa(1000111), "백만백열하나");
      assert.equal(susa(1001111), "백만천백열하나");
      assert.equal(susa(1011111), "백일만천백열하나");
      assert.equal(susa(1111111), "백십일만천백열하나");
      assert.equal(susa(9000000), "구백만");
      assert.equal(susa(9000009), "구백만아홉");
      assert.equal(susa(9000099), "구백만아흔아홉");
      assert.equal(susa(9000999), "구백만구백아흔아홉");
      assert.equal(susa(9009999), "구백만구천구백아흔아홉");
      assert.equal(susa(9099999), "구백구만구천구백아흔아홉");
      assert.equal(susa(9999999), "구백구십구만구천구백아흔아홉");
    });
    it("replaces the number(<100,000,000) to appropriate susa", () => {
      assert.equal(susa(10000000), "천만");
      assert.equal(susa(10000001), "천만하나");
      assert.equal(susa(10000011), "천만열하나");
      assert.equal(susa(10000111), "천만백열하나");
      assert.equal(susa(10001111), "천만천백열하나");
      assert.equal(susa(10011111), "천일만천백열하나");
      assert.equal(susa(10111111), "천십일만천백열하나");
      assert.equal(susa(11111111), "천백십일만천백열하나");
      assert.equal(susa(90000000), "구천만");
      assert.equal(susa(90000009), "구천만아홉");
      assert.equal(susa(90000099), "구천만아흔아홉");
      assert.equal(susa(90000999), "구천만구백아흔아홉");
      assert.equal(susa(90009999), "구천만구천구백아흔아홉");
      assert.equal(susa(90099999), "구천구만구천구백아흔아홉");
      assert.equal(susa(90999999), "구천구십구만구천구백아흔아홉");
      assert.equal(susa(99999999), "구천구백구십구만구천구백아흔아홉");
    });
    it("replaces the number(<1,000,000,000) to appropriate susa", () => {
      assert.equal(susa(100000000), "억");
      assert.equal(susa(100000001), "억하나");
      assert.equal(susa(100000011), "억열하나");
      assert.equal(susa(100000111), "억백열하나");
      assert.equal(susa(100001111), "억천백열하나");
      assert.equal(susa(100011111), "억만천백열하나");
      assert.equal(susa(100111111), "억십일만천백열하나");
      assert.equal(susa(101111111), "억백십일만천백열하나");
      assert.equal(susa(111111111), "억천백십일만천백열하나");
      assert.equal(susa(900000000), "구억");
      assert.equal(susa(900000009), "구억아홉");
      assert.equal(susa(900000099), "구억아흔아홉");
      assert.equal(susa(900000999), "구억구백아흔아홉");
      assert.equal(susa(900009999), "구억구천구백아흔아홉");
      assert.equal(susa(900099999), "구억구만구천구백아흔아홉");
      assert.equal(susa(900999999), "구억구십구만구천구백아흔아홉");
      assert.equal(susa(909999999), "구억구백구십구만구천구백아흔아홉");
      assert.equal(susa(999999999), "구억구천구백구십구만구천구백아흔아홉");
    });
    it("replaces the number(<10,000,000,000) to appropriate susa", () => {
      assert.equal(susa(1000000000), "십억");
      assert.equal(susa(1000000001), "십억하나");
      assert.equal(susa(1000000011), "십억열하나");
      assert.equal(susa(1000000111), "십억백열하나");
      assert.equal(susa(1000001111), "십억천백열하나");
      assert.equal(susa(1000011111), "십억만천백열하나");
      assert.equal(susa(1000111111), "십억십일만천백열하나");
      assert.equal(susa(1001111111), "십억백십일만천백열하나");
      assert.equal(susa(1011111111), "십억천백십일만천백열하나");
      assert.equal(susa(1111111111), "십일억천백십일만천백열하나");
      assert.equal(susa(9000000000), "구십억");
      assert.equal(susa(9000000009), "구십억아홉");
      assert.equal(susa(9000000099), "구십억아흔아홉");
      assert.equal(susa(9000000999), "구십억구백아흔아홉");
      assert.equal(susa(9000009999), "구십억구천구백아흔아홉");
      assert.equal(susa(9000099999), "구십억구만구천구백아흔아홉");
      assert.equal(susa(9000999999), "구십억구십구만구천구백아흔아홉");
      assert.equal(susa(9009999999), "구십억구백구십구만구천구백아흔아홉");
      assert.equal(susa(9099999999), "구십억구천구백구십구만구천구백아흔아홉");
      assert.equal(
        susa(9999999999),
        "구십구억구천구백구십구만구천구백아흔아홉"
      );
    });
    it("replaces the number(<100,000,000,000) to appropriate susa", () => {
      assert.equal(susa(10000000000), "백억");
      assert.equal(susa(10000000001), "백억하나");
      assert.equal(susa(10000000011), "백억열하나");
      assert.equal(susa(10000000111), "백억백열하나");
      assert.equal(susa(10000001111), "백억천백열하나");
      assert.equal(susa(10000011111), "백억만천백열하나");
      assert.equal(susa(10000111111), "백억십일만천백열하나");
      assert.equal(susa(10001111111), "백억백십일만천백열하나");
      assert.equal(susa(10011111111), "백억천백십일만천백열하나");
      assert.equal(susa(10111111111), "백일억천백십일만천백열하나");
      assert.equal(susa(11111111111), "백십일억천백십일만천백열하나");
      assert.equal(susa(90000000000), "구백억");
      assert.equal(susa(90000000009), "구백억아홉");
      assert.equal(susa(90000000099), "구백억아흔아홉");
      assert.equal(susa(90000000999), "구백억구백아흔아홉");
      assert.equal(susa(90000009999), "구백억구천구백아흔아홉");
      assert.equal(susa(90000099999), "구백억구만구천구백아흔아홉");
      assert.equal(susa(90000999999), "구백억구십구만구천구백아흔아홉");
      assert.equal(susa(90009999999), "구백억구백구십구만구천구백아흔아홉");
      assert.equal(susa(90099999999), "구백억구천구백구십구만구천구백아흔아홉");
      assert.equal(
        susa(90999999999),
        "구백구억구천구백구십구만구천구백아흔아홉"
      );
      assert.equal(
        susa(99999999999),
        "구백구십구억구천구백구십구만구천구백아흔아홉"
      );
    });
  });
});
