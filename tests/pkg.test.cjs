/**
 * @fileoverview Tests that Common JS can access npm package.
 */

const { numberToWords } = require("../dist/number-to-words.cjs");
numberToWords(1);
console.log("CommonJS load: success");
