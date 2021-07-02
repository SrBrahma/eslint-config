// Add https://www.npmjs.com/package/eslint-plugin-import ?

// plugin vs extends: https://stackoverflow.com/a/61232480/10247962

module.exports = {
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended", // After the others https://stackoverflow.com/a/61555310/10247962
    "./js-no-extends.js", // Further configs!
  ],

  "rules": {

  // `any` / unsafe stuff handling. But, be responsible and careful!

    // Allows using `a!.b`. Not safe, but sometimes we really know it is valid.
    "@typescript-eslint/no-non-null-assertion": "off",

    // Let us have our empty stuff!
    "@typescript-eslint/no-empty-interface": "off",

    // Allows using `any` as explicit type. Sometimes, we know what we are doing!
    "@typescript-eslint/no-explicit-any": "off",

    // Allows `as any`. Sometimes it's really useful for really complex types.
    "@typescript-eslint/no-unsafe-assignment": "off",

    // Allows the function return as `any`.
    "@typescript-eslint/no-unsafe-return": "off",

    // Allows acessing props of any type var. Useful for `if ((X as any).Y)`, to check if it exists.
    "@typescript-eslint/no-unsafe-member-access": "off",

    // Allows calling new (Intl as any).RelativeTimeFormat(...), as TS doesn't know it yet.
    "@typescript-eslint/no-unsafe-call": "off",


  // Etc

    // Async functions that don't use await them will throw a warn. The default behaviour with the current extends, is to throw an error.
    "@typescript-eslint/require-await": "warn",

    // Allows explicitating implicit types, like `const a: number = 10`
    "@typescript-eslint/no-inferrable-types": "off",

    // Else would complain about // @ts-ignore in .js files. If I didn't need this ts-comment, this could be removed
    "@typescript-eslint/ban-ts-comment": "off",

    // Warn if using a Promise without await/then/catch. Good to avoid running stuff in background non intentionally.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    "@typescript-eslint/no-floating-promises": "warn",

    // This wasn't allowing different data types in `templates string`. Why the fuck not?
    "@typescript-eslint/restrict-template-expressions": "off",

    // wasn't allowing eg setTimeout(async () =>...). Any good reason to keep it on? https://stackoverflow.com/a/63488201/10247962
    "@typescript-eslint/no-misused-promises": "off",

    // Wasn't simply allowing `const a = x.y.functionA`.
    "@typescript-eslint/unbound-method": "off",

    // [1.1.0] Allows to use `const a = require('...')`. This is specially useful for `const pkg = require('../package.json')`,
    // as TS will complain about importing a file outside rootDir (defined in tsconfig)
    "@typescript-eslint/no-var-requires": "off",

    // Allow having a `function a(callback: () => void) {...}` to be called with a(async () => {...})`
    "@typescript-eslint/no-misused-promises": [ "error", {
      "checksVoidReturn": false
    }],


    // Limbo. Disabled, but may be reenabled at some point.
    // "@typescript-eslint/explicit-module-boundary-types": "off", // Removes the need of exported functions to have explicit rtn type
    // TS doesn't allow "== false" yet (4.1.2), so, this rule isn't good enough to test for falsy values.
    // https://github.com/microsoft/TypeScript/issues/26592#issuecomment-731608973
    // "@typescript-eslint/strict-boolean-expressions": ["warn", {
    //   allowNullableBoolean: true,
    // }],
    //
  }
};