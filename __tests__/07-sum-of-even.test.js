import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { sumOfEven } from "../katas/07-sum-of-even.js";

Deno.test("sumOfEven returns a number", () => {
  const input = [1, 2];
  const result = sumOfEven(input);
  assertStrictEquals(typeof result, "number");
});

Deno.test(
  "sumOfEven returns 0 when there are no even numbers included in given array",
  () => {
    const input = [3, 5, 9];
    const result = sumOfEven(input);
    assertEquals(result, 0);
  }
);

Deno.test(
  "sumOfEven returns sum of even numbers included in given array",
  () => {
    const input = [2, 6, 7, 10];
    const result = sumOfEven(input);
    assertEquals(result, 18);
  }
);