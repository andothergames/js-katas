const { sumSmallNumbers } = require("../katas/04-sum-small-numbers")

describe("sumSmallNumbers", () => {
  test("returns an number", () => {
    const input1 = 0;
    const input2 = 0;
    const result = sumSmallNumbers(input1, input2);
    expect(typeof result).toBe("number");
  });

  test("returns sum of given arguments when both numbers are under 10", () => {
    const input1 = 2;
    const input2 = 7;
    const result = sumSmallNumbers(input1, input2);
    expect(result).toBe(9);
  });

  test("returns one number below 10 when the other argument is above 10", () => {
    const input1 = 8;
    const input2 = 12;
    const result = sumSmallNumbers(input1, input2);
    expect(result).toBe(8);
  });

  test("returns one number below 10 when the other argument is above 10", () => {
    const input1 = 90;
    const input2 = 6;
    const result = sumSmallNumbers(input1, input2);
    expect(result).toBe(6);
  });

  test("returns zero when both of the given arguments are 10 or above", () => {
    const input1 = 10;
    const input2 = 20;
    const result = sumSmallNumbers(input1, input2);
    expect(result).toBe(0);
  });
  });