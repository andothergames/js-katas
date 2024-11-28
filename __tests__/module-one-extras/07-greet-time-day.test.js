import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { greetByTimeOfDay } from "../../katas/module-one-extras/07-greet-time-day.js";

Deno.test("greetByTimeOfDay returns a string", () => {
  const input = "2022-05-12T13:45:00.000Z";
  const result = greetByTimeOfDay(input);
  assertStrictEquals(typeof result, "string");
});

Deno.test("greetByTimeOfDay returns correct greeting in morning range", () => {
  const input = "2023-10-17T10:45:00.000Z";
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Morning");
});

Deno.test(
  "greetByTimeOfDay returns correct greeting in afternoon range",
  () => {
    const input = "2023-10-17T12:00:00.000Z";
    const result = greetByTimeOfDay(input);
    assertEquals(result, "Good Afternoon");
  }
);

Deno.test(
  "greetByTimeOfDay returns correct greeting in afternoon range",
  () => {
    const input = "2023-10-17T16:05:00.000Z";
    const result = greetByTimeOfDay(input);
    assertEquals(result, "Good Afternoon");
  }
);

Deno.test("greetByTimeOfDay returns correct greeting in evening range", () => {
  const input = "2023-10-17T17:00:00.000Z";
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Evening");
});

Deno.test("greetByTimeOfDay returns correct greeting in evening range", () => {
  const input = "2023-10-17T22:00:00.000Z";
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Evening");
});

Deno.test("greetByTimeOfDay returns correct greeting in night range", () => {
  const input = "2023-10-17T00:00:00.000Z";
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Night");
});

Deno.test("greetByTimeOfDay returns correct greeting in night range", () => {
  const input = "2023-10-17T02:36:00.000Z";
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Night");
});

Deno.test("greetByTimeOfDay returns correct greeting in night range", () => {
  const input = "2023-10-17T05:00:00.000Z";
  const result = greetByTimeOfDay(input);
  assertEquals(result, "Good Night");
});
