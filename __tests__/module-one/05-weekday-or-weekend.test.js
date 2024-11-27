import { assertEquals, assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

import { weekdayOrWeekend } from "../../katas/module-one/05-weekday-or-weekend.js";


  Deno.test("weekdayOrWeekend returns a string", () => {
    const result = weekdayOrWeekend();
    assertStrictEquals(typeof result, "string");
  });
  
  Deno.test("weekdayOrWeekend returns correct string on given day", () => {
    const today = new Date().getDay();
    const string = today < 5 ? "Weekday" : "Weekend";
    const result = weekdayOrWeekend();
    assertEquals(result, string);
  });