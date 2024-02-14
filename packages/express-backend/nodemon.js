{
    "watch": ["src"],
    "ext": "ts,mjs,js,json,graphql",
    "ignore": ["src/**/*.test.ts", "node_modules"],
    "exec": "etsc && node ./dist/index.js",
    "legacyWatch": true
}