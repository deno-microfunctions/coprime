
import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { isCoPrime } from "./isCoprime.ts"


Deno.test("should return true for coprime numbers", async () => {

    assertEquals(isCoPrime(2, 2), true)
    assertEquals(isCoPrime(5, 7), true)
    assertEquals(isCoPrime(13, 14), true)
    assertEquals(isCoPrime(19, 34), true)

})


Deno.test("should return false for non-coprime numbers", async () => {


    assertEquals(isCoPrime(30, 50), false)
    assertEquals(isCoPrime(14, 42), false)

})