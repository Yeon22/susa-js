const assert = require("assert");
const { getPortion } = require("../../src/utils");

describe("getPortion(num)", () => {
  it("throw error if num < 10", () => {
    assert.throws(() => getPortion(0), Error, `Can't 0/0`);
    assert.throws(() => getPortion(1), Error, `Can't 0/0`);
    assert.throws(() => getPortion(2), Error, `Can't 0/0`);
    assert.throws(() => getPortion(3), Error, `Can't 0/0`);
    assert.throws(() => getPortion(4), Error, `Can't 0/0`);
    assert.throws(() => getPortion(5), Error, `Can't 0/0`);
    assert.throws(() => getPortion(6), Error, `Can't 0/0`);
    assert.throws(() => getPortion(7), Error, `Can't 0/0`);
    assert.throws(() => getPortion(8), Error, `Can't 0/0`);
    assert.throws(() => getPortion(9), Error, `Can't 0/0`);
  });

  it("return portion if number >= 10", () => {
    assert.equal(getPortion(10), 10);
    assert.equal(getPortion(15), 10);
    assert.equal(getPortion(20), 20);
    assert.equal(getPortion(22), 20);
    assert.equal(getPortion(100), 100);
    assert.equal(getPortion(110), 100);
    assert.equal(getPortion(312), 300);
    assert.equal(getPortion(1000), 1000);
    assert.equal(getPortion(7457), 7000);
    assert.equal(getPortion(10000), 10000);
    assert.equal(getPortion(53231), 50000);
    assert.equal(getPortion(946720), 940000);
    assert.equal(getPortion(4367128), 4360000);
    assert.equal(getPortion(61048572), 61040000);
    assert.equal(getPortion(837128964), 800000000);
    assert.equal(getPortion(1000000000000), 1000000000000);
    assert.equal(getPortion(2947205760296), 2000000000000);
  });
});
