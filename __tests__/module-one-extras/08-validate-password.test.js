import { assertEquals, assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

import { validatePassword } from "../../katas/module-one-extras/08-validate-password.js";


  Deno.test("validatePassword returns a string", () => {
    const input = "Password";
    const result = validatePassword(input);
    assertStrictEquals(typeof result, "string");
  });
  
  Deno.test("validatePassword returns Pass when given string does not contain !", () => {
    const input = "superPassword";
    const result = validatePassword(input);
    assertEquals(result, "Pass");
  });

  Deno.test("validatePassword returns Fail when given string contains !", () => {
    const input = "mYpAsS!wOrD";
    const result = validatePassword(input);
    assertEquals(result, "Fail");
  });