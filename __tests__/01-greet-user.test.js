const { greetUser } = require("../katas/01-greet-user")

describe("greetUser", () => {
    test("returns a string", () => {
      const input = "Hannah";
      const result = greetUser(input);
      expect(typeof result).toBe("string");
    });

    test("returns correct greeting with givenname", () => {
      const input = "Kai";
      const result = greetUser(input);
      expect(result).toBe("Hello, Kai! Have a nice day");
    });
  });