# Number to Words

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

A function that accepts a positive integer (or zero) and returns the English-language description of the number.

## Usage

### Node.js

Install using [npm][npm] or [yarn][yarn]:

```
npm install @humanwhocodes/number-to-words --save

# or

yarn add @humanwhocodes/number-to-words
```

Import into your Node.js project:

```js
// CommonJS
const { numberToWords } = require("@humanwhocodes/number-to-words");

// ESM
import { numberToWords } from "@humanwhocodes/number-to-words";
```

### Deno

Import into your Deno project:

```js
import { numberToWords } from "https://cdn.skypack.dev/@humanwhocodes/number-to-words?dts";
```

### Browser

It's recommended to import the minified version to save bandwidth:

```js
import { numberToWords } from "https://cdn.skypack.dev/@humanwhocodes/number-to-words?min";
```

However, you can also import the unminified version for debugging purposes:

```js
import { numberToWords } from "https://cdn.skypack.dev/@humanwhocodes/number-to-words";
```

## API

After importing, pass any positive integer or zero to `numberToWords()`:

```js
console.log(numberToWords(0));      // "zero"
console.log(numberToWords(10));     // "ten"
console.log(numberToWords(524));    // "five hundred twenty-four"
```

The `numberToWords()` function works up to 999 trillion. If you need larger numbers then that, I envy you.

## Developer Setup

1. Fork the repository
2. Clone your fork
3. Run `npm install` to setup dependencies
4. Run `npm test` to run tests

## License

Apache 2.0

[npm]: https://npmjs.com/
[yarn]: https://yarnpkg.com/
