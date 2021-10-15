/**
 * @fileoverview Tests for the numberToWords function.
 */
/*global describe, it*/

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

import { numberToWords } from "../src/number-to-words.js";
import { expect } from "chai";

//-----------------------------------------------------------------------------
// Tests
//-----------------------------------------------------------------------------

describe("numberToWords", () => {

    const cases = new Map([
        [0, "zero"],
        [1, "one"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [24, "twenty-four"],
        [35, "thirty-five"],
        [46, "forty-six"],
        [57, "fifty-seven"],
        [68, "sixty-eight"],
        [79, "seventy-nine"],
        [80, "eighty"],
        [91, "ninety-one"],
        [100, "one hundred"],
        [105, "one hundred five"],
        [117, "one hundred seventeen"],
        [123, "one hundred twenty-three"],
        [1000, "one thousand"],
        [1450, "one thousand four hundred fifty"],
        [1673, "one thousand six hundred seventy-three"],
        [12240, "twelve thousand two hundred forty"],
        [23456, "twenty-three thousand four hundred fifty-six"],
        [367000, "three hundred sixty-seven thousand"],
        [1569800, "one million five hundred sixty-nine thousand eight hundred"],
        [2001569800, "two billion one million five hundred sixty-nine thousand eight hundred"],
    ]);

    for (const [input, output] of cases) {
        it(`should return "${output}" when passed ${input}`, () => {
            expect(numberToWords(input)).to.equal(output);
        });
    }

    it("should throw an error when a string is passed", () => {
        expect(() => {
            numberToWords("");
        }).throws(/Parameter must be a positive integer/u);
    });

    it("should throw an error when a negative number is passed", () => {
        expect(() => {
            numberToWords(-1);
        }).throws(/Parameter must be a positive integer/u);
    });

    it("should throw an error when a float is passed", () => {
        expect(() => {
            numberToWords(4.5);
        }).throws(/Parameter must be a positive integer/u);
    });
});
