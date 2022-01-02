const assert = require("assert");
const { getDividedNumber } = require("../../src/utils");

describe("getDividedNumber()", () => {
  describe("number < 10", () => {
    it("return 0", () => {
      assert.equal(getDividedNumber(0), 0);
      assert.equal(getDividedNumber(5), 0);
      assert.equal(getDividedNumber(9), 0);
    });
  });

  describe("number >= 10 and < 100", () => {
    it("return 10", () => {
      assert.equal(getDividedNumber(10), 10);
      assert.equal(getDividedNumber(55), 10);
      assert.equal(getDividedNumber(99), 10);
    });
  });

  describe("number >= 100 and < 1,000", () => {
    it("return 100", () => {
      assert.equal(getDividedNumber(100), 100);
      assert.equal(getDividedNumber(555), 100);
      assert.equal(getDividedNumber(999), 100);
    });
  });

  describe("number >= 1,000 and < 10,000", () => {
    it("return 1,000", () => {
      assert.equal(getDividedNumber(1000), 1000);
      assert.equal(getDividedNumber(7777), 1000);
      assert.equal(getDividedNumber(9999), 1000);
    });
  });

  describe("number >= 10,000 and < 100,000,000", () => {
    it("return 10,000", () => {
      assert.equal(getDividedNumber(10000), 10000);
      assert.equal(getDividedNumber(22222), 10000);
      assert.equal(getDividedNumber(99999), 10000);
    });
  });

  describe("number >= 100,000,000 and < 1,000,000,000,000", () => {
    it("return 100,000,000", () => {
      assert.equal(getDividedNumber(100000000), 100000000);
      assert.equal(getDividedNumber(444444444), 100000000);
      assert.equal(getDividedNumber(999999999), 100000000);
    });
  });

  describe("number >= 1,000,000,000,000", () => {
    it("return 1,000,000,000,000", () => {
      assert.equal(getDividedNumber(1000000000000), 1000000000000);
      assert.equal(getDividedNumber(1003006021699), 1000000000000);
    });
  });
});
