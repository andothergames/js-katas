import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { convertToFahrenheit } from "../katas/02-convert-to-f.js";

Deno.test("convertToFahrenheit returns a string", () => {
  const input = 0;
  const result = convertToFahrenheit(input);
  assertStrictEquals(typeof result, "string");
});

Deno.test(
  "convertToFahrenheit returns correct conversion of temperature when given a positive number",
  () => {
    const input = 30;
    const result = convertToFahrenheit(input);
    assertEquals(result, "86F");
  }
);

Deno.test(
  "convertToFahrenheit returns correct conversion of temperature when given a negative number",
  () => {
    const input = -10;
    const result = convertToFahrenheit(input);
    assertEquals(result, "14F");
  }
);

Deno.test(
  "convertToFahrenheit returns correct conversion of temperature when converted temperature is a negative number",
  () => {
    const input = -100;
    const result = convertToFahrenheit(input);
    assertEquals(result, "-148F");
  }
);
