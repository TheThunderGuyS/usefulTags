<h1 align="center">usefulTags</h1>
<p align="center">A tiny JavaScript library incorporating some useful template tag functions.</p>

---
![code size: < 10kb](https://img.shields.io/github/languages/code-size/thethunderguys/usefulTags) ![license: MIT](https://img.shields.io/github/license/thethunderguys/usefulTags?color=orange) ![release](https://img.shields.io/github/v/release/thethunderguys/usefulTags?sort=semver&color=brightgreen) [![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/thethunderguys/usefulTags/trunk?label=codefactor&logo=codefactor)](https://www.codefactor.io/repository/github/thethunderguys/usefultags) [![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=informational)](https://github.com/prettier/prettier)

usefulTags is a small JavaScript library that adds a few useful and commonly used ES6 template tag functions. It can also be used as a regular function working with normal strings.

This is not yet complete and functionality is subject to change. Full documentation is in the works.

## Installation
### Node.js / iojs
Any version is supported.

Install the package with `npm i usefultags`.

#### For CommonJS enviroments:
```js
const usefulTags = require("usefultags");
```
#### For RequireJS enviroments
```js
const requirejs = require("requirejs");

requirejs.config({
    nodeRequire: require
});

requirejs(["usefultags"], (usefulTags) => {
    //...
});
```
#### For ESModule enviroments:
```js
import {stripIndent, stripAllIndents, oneLine, oneLineConcatenate} from "usefultags";
```
---
### Deno
In your source or dependencies file:
```js
import {*} from "https://deno.land/x/usefultags@ver/index.mjs";
```
Make sure you replace `@ver` with the version tag you plan on using.

---
### Browsers
#### For ES6 browsers
Ensure your script has `type="module"` in the HTML. In your source file:
```js
import {stripIndent, stripAllIndents, oneLine, oneLineConcatenate} from "https://unpkg.com/usefultags@ver/index.mjs";
```
Make sure you replace `@ver` with the verion tag you plan on using.
#### For legacy browsers
Coming soon!

---
## Usage
```js
usefulFunction`
    hello
    world`;
usefulFunction("hello world");
```
usefulFunction is any of the below available functions. A string or array is required as an argument when used as a normal function.

Proper documentation is still being worked on.

## Examples:

### stripIndent:
```js
const line = stripIndent`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;
console.log(line);
```
#### Expected Output:
```
This
is
a
multi-line
newline
 
    indented  
string.
Random number: 0.xxxxxxxxxxxxxxxx.
```

### stripAllIndents:
```js
const line = stripAllIndents`This
    is
         ${"a"}
      multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;
console.log(line);
```
#### Expected Output:
```
This
is
a
multi-line
newline

indented  
string.
Random number: 0.xxxxxxxxxxxxxxxx.
```

### oneLine:
```js
const line = oneLine`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;
console.log(line);
```
#### Expected Output:
```
This is a multi-line newline indented  string. Random number: 0.xxxxxxxxxxxxxxxx.
```

### oneLineConcatenate:
```js
const line = oneLineConcatenate`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;
console.log(line);
```
##### Expected Output:
```
Thisisamulti-linenewlineindented  string.Random number: 0.xxxxxxxxxxxxxxxx.
```
