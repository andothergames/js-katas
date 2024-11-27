import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { greetByTimeOfDay } from "../../katas/module-one/07-greet-time-day.js";

Deno.test("greetByTimeOfDay returns a string", () => {
  const input = 0;
  const result = greetByTimeOfDay(input);
  assertStrictEquals(typeof result, "string");
});

Deno.test("greetByTimeOfDay returns correct greeting in morning range", () => {
  const input = 6;
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Morning");
});

Deno.test(
  "greetByTimeOfDay returns correct greeting in afternoon range",
  () => {
    const input = 12;
    const result = greetByTimeOfDay(input);
    assertEquals(result, "Good Afternoon");
  }
);

Deno.test(
  "greetByTimeOfDay returns correct greeting in afternoon range",
  () => {
    const input = 16;
    const result = greetByTimeOfDay(input);
    assertEquals(result, "Good Afternoon");
  }
);

Deno.test("greetByTimeOfDay returns correct greeting in evening range", () => {
  const input = 17;
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Evening");
});

Deno.test("greetByTimeOfDay returns correct greeting in evening range", () => {
  const input = 22;
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Evening");
});

Deno.test("greetByTimeOfDay returns correct greeting in night range", () => {
  const input = 0;
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Night");
});

Deno.test("greetByTimeOfDay returns correct greeting in night range", () => {
  const input = 2;
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Night");
});

Deno.test("greetByTimeOfDay returns correct greeting in night range", () => {
  const input = 5;
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Night");
});

Deno.test(
  "greetByTimeOfDay returns invalid message if given number is outside of 0-23 range",
  () => {
    const input = 24;
    const result = greetByTimeOfDay(input);
    assertEquals(result, "Invalid hour");
  }
);

Deno.test(
  "greetByTimeOfDay returns invalid message if given number is outside of 0-23 range",
  () => {
    const input = -24;
    const result = greetByTimeOfDay(input);
    assertEquals(result, "Invalid hour");
  }
);
