import { handleSubmit } from "../js/formHandler"
import "core-js/stable";
import "regenerator-runtime/runtime";
import { test } from "jest-circus";

describe("Testing handle submit function functionality",()=>{
    test("Testing if handle submit function is defined",()=>{
        expect(handleSubmit).toBeDefined();
    })
})