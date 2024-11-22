import { assertEquals, assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

import { greetUser } from "../katas/01-greet-user.js";


  Deno.test("greetUser returns a string", () => {
    const input = "Hannah";
    const result = greetUser(input);
    assertStrictEquals(typeof result, "string");
  });
  
  Deno.test("greetUser returns correct greeting with given name", () => {
    const input = "Kai";
    const result = greetUser(input);
    assertEquals(result, "Hello, Kai! Have a nice day");
  });