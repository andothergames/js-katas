import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { isEven } from "../katas/03-is-even.js";

Deno.test("isEven returns a boolean", () => {
  const input = 10;
  const result = isEven(input);
  assertStrictEquals(typeof result, "boolean");
});

Deno.test(
  "isEven returns true when given number is even",
  () => {
    const input = 30;
    const result = isEven(input);
    assertEquals(result, true);
  }
);

Deno.test(
  "isEven returns false when given number is odd",
  () => {
    const input = 43;
    const result = isEven(input);
    assertEquals(result, false);
  }
);