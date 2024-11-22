import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { sumSmallNumbers } from "../katas/04-sum-small-numbers.js";

Deno.test("sumSmallNumbers returns a boolean", () => {
  const input1 = 0;
  const input2 = 0;
  const result = sumSmallNumbers(input1, input2);
  assertStrictEquals(typeof result, "number");
});

Deno.test("sumSmallNumbers returns sum of given arguments when both numbers are under 10", () => {
  const input1 = 2;
  const input2 = 7;
  const result = sumSmallNumbers(input1, input2);
  assertEquals(result, 9);
});

Deno.test("sumSmallNumbers returns one number below 10 when the other argument is above 10", () => {
  const input1 = 8;
  const input2 = 12;
  const result = sumSmallNumbers(input1, input2);
  assertEquals(result, 8);
});

Deno.test("sumSmallNumbers returns one number below 10 when the other argument is above 10", () => {
  const input1 = 90;
  const input2 = 6;
  const result = sumSmallNumbers(input1, input2);
  assertEquals(result, 6);
});

Deno.test("sumSmallNumbers returns zero when both of the given arguments are 10 or above", () => {
  const input1 = 10;
  const input2 = 20;
  const result = sumSmallNumbers(input1, input2);
  assertEquals(result, 0);
});