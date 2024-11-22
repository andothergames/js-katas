const { isEven } = require("../katas/03-is-even")

describe("isEven", () => {
  test("returns a boolean", () => {
    const input = 10;
    const result = isEven(input);
    expect(typeof result).toBe("boolean");
  });

  test("returns true when given integer is even", () => {
    const input = 30;
    const result = isEven(input);
    expect(result).toBe(true);
  });

  test("returns false when given integer is odd", () => {
    const input = 43;
    const result = isEven(input);
    expect(result).toBe(false);
  });
  });