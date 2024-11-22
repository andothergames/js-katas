import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { declareWinner } from "../katas/05-declare-winner.js";

Deno.test("declareWinner returns a string", () => {
  const input1 = { name: "Player1", score: 0 };
  const input2 = { name: "Player2", score: 1 };
  const result = declareWinner(input1, input2);
  assertStrictEquals(typeof result, "string");
});

Deno.test("declareWinner returns the correct winners name", () => {
  const input1 = { name: "Mo", score: 8 };
  const input2 = { name: "Olly", score: 9 };
  const result = declareWinner(input1, input2);
  assertEquals(result, "Olly");
});

Deno.test("declareWinner returns the correct winners name", () => {
  const input1 = { name: "Keshia", score: 18 };
  const input2 = { name: "Joseph", score: 9 };
  const result = declareWinner(input1, input2);
  assertEquals(result, "Keshia");
});

Deno.test(
  "declareWinner returns a draw when both players scores are the same",
  () => {
    const input1 = { name: "Jordan", score: 10 };
    const input2 = { name: "Penny", score: 10 };
    const result = declareWinner(input1, input2);
    assertEquals(result, "It is a draw");
  }
);
