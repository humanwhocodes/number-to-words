/**
 * @fileoverview numberToWords function
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Data
//-----------------------------------------------------------------------------

const digits = new Map([
    ["1", "one"],
    ["2", "two"],
    ["3", "three"],
    ["4", "four"],
    ["5", "five"],
    ["6", "six"],
    ["7", "seven"],
    ["8", "eight"],
    ["9", "nine"],
]);

const teens = new Map([
    ["0", "ten"],
    ["1", "eleven"],
    ["2", "twelve"],
    ["3", "thirteen"],
    ["4", "fourteen"],
    ["5", "fifteen"],
    ["6", "sixteen"],
    ["7", "seventeen"],
    ["8", "eighteen"],
    ["9", "nineteen"]
]);

const tens = new Map([
    ["0", ""],
    ["2", "twenty"],
    ["3", "thirty"],
    ["4", "forty"],
    ["5", "fifty"],
    ["6", "sixty"],
    ["7", "seventy"],
    ["8", "eighty"],
    ["9", "ninety"],
]);

const powers = new Map([
    [3, "thousand"],
    [6, "million"],
    [9, "billion"],
    [12, "trillion"]
]);

//-----------------------------------------------------------------------------
// Function
//-----------------------------------------------------------------------------

/**
 * Creates an English-language description of the given number.
 * @param {number} value The integer value to create words for. 
 * @returns {string} The English-language description of the given number.
 * @throws {TypeError} If `value` isn't a positive number.
 */
export function numberToWords(value) {

    if (typeof value !== "number" || value < 0 || value !== Math.round(value)) {
        throw new TypeError("Parameter must be a positive integer.");
    }

    // special case: 0 doesn't need any more work
    if (value === 0) {
        return "zero";
    }

    const string = value.toString();
    const result = [];

    for (let i = string.length - 1, pos = 0; i >= 0; i--, pos++) {

        const c = string[i];

        // special case: never add anything for zero
        if (c === "0") {
            continue;
        }

        switch (pos % 3) {
            case 0:

                if (pos > 0) {
                    result.unshift(powers.get(pos));
                }

                if (digits.has(c)) {
                    result.unshift(digits.get(c));
                }

                break;

            case 1: {

                let words;

                const lastWord = result.shift();

                // special case: 10-19
                if (c === "1") {
                    words = teens.get(string[i + 1]);
                } else {

                    //TODO: Clean this up. Yuck.
                    words = tens.get(c) || lastWord;
                    if (lastWord && words !== lastWord) {
                        words = words + "-" + lastWord;
                    }
                }

                result.unshift(words);
                break;
            }
                
            case 2:
                result.unshift(digits.get(c) + " hundred");
                break;


        }
    }

    return result.join(" ");
}
