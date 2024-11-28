import {
    assertEquals,
    assertStrictEquals,
  } from "https://deno.land/std/testing/asserts.ts";
  
  import { leftoverSeats } from "../../katas/module-one-extras/04-leftover-seats.js";
  
  Deno.test("leftoverSeats returns a number", () => {
    const input1 = 64;
    const input2 = 2;
    const result = leftoverSeats(input1, input2);
    assertStrictEquals(typeof result, "number");
  });
  
  Deno.test(
    "leftoverSeats returns correct amount of seats left in front row",
    () => {
      const input1 = 81;
      const input2 = 5;
      const result = leftoverSeats(input1, input2);
      assertEquals(result, 4);
    }
  );
  
  Deno.test(
    "leftoverSeats returns correct amount of seats left in front row",
    () => {
      const input1 = 529;
      const input2 = 20;
      const result = leftoverSeats(input1, input2);
      assertEquals(result, 3);
    }
  );
  