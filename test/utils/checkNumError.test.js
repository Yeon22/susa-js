const assert = require("assert");
const { MAX_NUM_KR } = require("../../src/constant");
const { checkNumError } = require("../../src/utils");

describe("checkNumError()", () => {
  it("num is not number then throw error", () => {
    assert.throws(() => checkNumError("hi"), Error, "argument is not number");
  });

  describe("max is MAX_SUSA", () => {
    it("num >= MAX_SUSA then throw error", () => {
      assert.throws(
        () => checkNumError(1000000000000),
        Error,
        "over 999999999999 number is not support yet"
      );
    });

    it("num is valid number", () => {
      assert.equal(checkNumError(1), false);
      assert.equal(checkNumError(999999999999), false);
    });
  });

  describe("max is MAX_NUM_KR", () => {
    it("num >= MAX_NUM_KR then throw error", () => {
      assert.throws(
        () => checkNumError(10000, MAX_NUM_KR),
        Error,
        "over 9999 number is not support yet"
      );
    });

    it("num is valid number", () => {
      assert.equal(checkNumError(1, MAX_NUM_KR), false);
      assert.equal(checkNumError(999, MAX_NUM_KR), false);
    });
  });
});
