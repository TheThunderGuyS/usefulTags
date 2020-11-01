<h1 align="center">usefulTags</h1>
<p align="center">A tiny JavaScript library incorporating some useful template tag functions.</p>

---
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/thethunderguys/usefulTags) ![License: MIT](https://img.shields.io/github/license/thethunderguys/usefulTags?color=orange) ![Release](https://img.shields.io/github/v/release/thethunderguys/usefulTags?sort=semver&color=brightgreen) [![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/thethunderguys/usefulTags/trunk?label=codefactor&logo=codefactor)](https://www.codefactor.io/repository/github/thethunderguys/usefultags) [![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=informational)](https://github.com/prettier/prettier)

## Work in progress.

There is currently support for all versions of Node.js/iojs, using both CommonJS and ESModules. It can be installed with `npm i usefultags`.
It also supports any version of Deno, include `https://deno.land/x/usefultags/index.js` in your script. For ES6 browsers, include `https://unpkg.com/usefultags@latest/index.js`
ES3 browser support is coming soon.

Being in early development, the functions are subject to change. They currently should be used as either a template tag or regular function, and simply accept the string as an argument.
Documentation is an early work-in-progress.

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
##### Expected Output:
```
This
is
a
multi-line
newline
 
    indented  
string.
Random number: 0.xxxxxxxxxxxxxxxx.`;
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
##### Expected Output:
```
This
is
a
multi-line
newline

indented  
string.
Random number: 0.xxxxxxxxxxxxxxxx.`;
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
##### Expected Output:
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
Thisisamulti-linenewlineindented  string.Random number: 0.xxxxxxxxxxxxxxxx.`;
```
