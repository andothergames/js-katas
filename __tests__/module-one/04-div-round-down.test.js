import {
    assertEquals,
    assertStrictEquals,
  } from "https://deno.land/std/testing/asserts.ts";
  
  import { divideRoundedDown } from '../../katas/module-one/04-div-round-down.js'
  
  Deno.test("divideRoundedDown returns a number", () => {
    const input1 = 0;
    const input2 = 0;
    const result = divideRoundedDown(input1, input2);
    assertStrictEquals(typeof result, "number");
  });
  
  Deno.test("divideRoundedDown returns correct rounded down number", () => {
    const input1 = 9;
    const input2 = 2;
    const result = divideRoundedDown(input1, input2);
    assertEquals(result, 4);
  });

  Deno.test("divideRoundedDown returns correct number when calculated decimal number is above .5", () => {
    const input1 = 21;
    const input2 = 2;
    const result = divideRoundedDown(input1, input2);
    assertEquals(result, 10);
  });
  