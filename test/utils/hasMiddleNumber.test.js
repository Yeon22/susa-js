const assert = require("assert");
const { hasMiddleNumber } = require("../../src/utils");

describe("hasMiddleNumber(num)", () => {
  it("throw error num < 10", () => {
    assert.throws(() => hasMiddleNumber(0), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(1), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(2), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(3), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(4), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(5), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(6), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(7), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(8), Error, `Can't divide by 0`);
    assert.throws(() => hasMiddleNumber(9), Error, `Can't divide by 0`);
  });

  it("return true", () => {
    assert.equal(hasMiddleNumber(200), true);
    assert.equal(hasMiddleNumber(3111), true);
    assert.equal(hasMiddleNumber(41111), true);
    assert.equal(hasMiddleNumber(111111), true);
    assert.equal(hasMiddleNumber(511111), true);
    assert.equal(hasMiddleNumber(1111111), true);
    assert.equal(hasMiddleNumber(6111111), true);
    assert.equal(hasMiddleNumber(11111111), true);
    assert.equal(hasMiddleNumber(71111111), true);
    assert.equal(hasMiddleNumber(811111111), true);
    assert.equal(hasMiddleNumber(1111111111), true);
    assert.equal(hasMiddleNumber(9111111111), true);
    assert.equal(hasMiddleNumber(11111111111), true);
    assert.equal(hasMiddleNumber(21111111111), true);
    assert.equal(hasMiddleNumber(111111111111), true);
    assert.equal(hasMiddleNumber(311111111111), true);
    assert.equal(hasMiddleNumber(2000000000000), true);
  });

  it("return false", () => {
    assert.equal(hasMiddleNumber(11), false);
    assert.equal(hasMiddleNumber(101), false);
    assert.equal(hasMiddleNumber(1011), false);
    assert.equal(hasMiddleNumber(10111), false);
    assert.equal(hasMiddleNumber(101111111), false);
    assert.equal(hasMiddleNumber(1011111111111), false);
    assert.equal(hasMiddleNumber(1000000000000), false);
  });
});
