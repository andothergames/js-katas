const { convertToFahrenheit } = require("../katas/02-convert-to-f")

describe("convertToFahrenheit", () => {
  test("returns a string", () => {
    const input = 0;
    const result = convertToFahrenheit(input);
    expect(typeof result).toBe("string");
  });

  test("returns correct conversion of temperature  when given a positive integer", () => {
    const input = 30;
    const result = convertToFahrenheit(input);
    expect(result).toBe("86F");
  });

  test("returns correct conversion of temperature when given a negative integer", () => {
    const input = -10;
    const result = convertToFahrenheit(input);
    expect(result).toBe("14F");
  });

  test("returns correct conversion of temperature when converted temperature is a negative integer", () => {
    const input = -100;
    const result = convertToFahrenheit(input);
    expect(result).toBe("-148F");
  });
  });