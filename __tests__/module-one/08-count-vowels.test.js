import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { countVowels } from "../../katas/module-one/08-count-vowels.js";

Deno.test("countVowels returns a number", () => {
  const input = "hello";
  const result = countVowels(input);
  assertStrictEquals(typeof result, "number");
});

Deno.test("countVowels returns sum of counted vowels in given string", () => {
  const input = "alienation";
  const result = countVowels(input);
  assertEquals(result, 6);
});

Deno.test("countVowels returns 0 when given string contains no vowels", () => {
  const input = "hymn";
  const result = countVowels(input);
  assertEquals(result, 0);
});

Deno.test(
  "countVowels returns sum of counted vowels in given string ignoring case sensitivity",
  () => {
    const input = "foUnDIng";
    const result = countVowels(input);
    assertEquals(result, 3);
  }
);

Deno.test(
  "countVowels returns sum of counted vowels in given string that contains spaces",
  () => {
    const input = "polar bears are ok";
    const result = countVowels(input);
    assertEquals(result, 7);
  }
);
