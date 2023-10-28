# TypeScript Tutorial

## Installation

Most modern and popular frameworks (Astro, React) will either have TypeScript built into the framework,
or there are specific ways of integrating TypeScript with the codebase.

However, for demonstrative purposes, or if you want to just compile and run raw TypeScript files,
we can start by installing the TypeScript package:

```
npm install -g typescript
```

This installs TypeScript globally using the npm package manager. We can also install the compiler locally
in a project using `npm install --save-dev typescript` to avoid potential interactions with other TypeScript
environments and projects.


To verify that you have the TypeScript compiler running after installation, try to check its version:

```
tsc --version
tsc --help
```

## tsconfig.json

Typically the first step in any new TypeScript projects is to add a `tsconfig.json` file, which defines
the TypeScript *project settings*. Some frameworks will have done this automatically for you,
and the existence of a `tsconfig.json` file in any projects is an indicator that the project
support TypeScript.

A simple `tsconfig.json` looks like this for ES5, CommonJS modules and source maps:

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  }
}
```

## Transpile TypeScript into JavaScript

After installing the TypeScript compiler, any TypeScript code can be manually transpiled into JavaScript
and run using the following commands:

```
tsc ExampleFile.ts
node ExampleFile.js
```

Note that running `tsc ExampleFile.ts` transpiles the TypeScript file into a JavaScript file,
which then can be executed using Node as usual.

## Using TypeScript

I will manually add more here, but for now refer to [the offical TypeScript documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).