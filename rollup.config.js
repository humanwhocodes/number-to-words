export default [
    {
        input: "src/number-to-words.js",
        output: [
            {
                file: "dist/number-to-words.cjs",
                format: "cjs"
            },
            {
                file: "dist/number-to-words.js",
                format: "esm"
            }
        ]
    }];
