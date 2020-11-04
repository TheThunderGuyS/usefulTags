<h1 align="center">usefulTags</h1>
<p align="center">A tiny JavaScript library incorporating some useful template tag functions.</p>

---
![code size: < 10kb](https://img.shields.io/github/languages/code-size/thethunderguys/usefulTags) ![license: MIT](https://img.shields.io/github/license/thethunderguys/usefulTags?color=orange) ![release](https://img.shields.io/github/v/release/thethunderguys/usefulTags?sort=semver&color=brightgreen) [![codefactor](https://img.shields.io/codefactor/grade/github/thethunderguys/usefulTags/trunk?label=codefactor&logo=codefactor)](https://www.codefactor.io/repository/github/thethunderguys/usefultags) [![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=informational)](https://github.com/prettier/prettier)

usefulTags is a small JavaScript library that adds a few useful and commonly needed ES6 template tag functions.

4 tags can be used:
1. [stripIndent](#stripindent): Remove indents from each line in a multi-line string, but keep intentionally larger ones
2. [stripAllIndents](#stripallindents): Remove all indents from each line in a multi-line string
3. [oneLine](#oneline): Merge a multi-line string onto one line (useful to keep lines under 80 characters)
4. [oneLineConcatenate](#onelineconcatenate): Merge a multi-line string onto one line, without spaces (useful for URLs)

This project is not yet complete and functionality is subject to change. Full documentation is in the works.

## Example
```js
import {stripIndent} from "usefultags"
const string = stripIndent`
    Hello
    World!`;

/*Output (has no indents!):
Hello
World
*/
```

## Installation
### Requirements
- Any Node.js / iojs version
- Any Deno version
- Any other enviroment supporting ES5

Supports the majority of module loaders (CommonJS, ESModules, RequireJS, IEFF scripts, etc.)

### Directions
#### Node
Install with NPM:
```sh
npm i usefultags
```
Require the package as usual, supports both CommonJS and ESModule (and RequireJS if you use it).

#### Browsers
Use UNPKG to load the module:

`https://unpkg.com/usefultags@ver/usefulTags.mjs` (ESModule)

`https://unpkg.com/usefultags@ver/dist/usefulTags.js` (IEFF script/AMD)

Ensure you replace `@ver` with a version tag. You can always download these scripts to your own CDN if you like.

#### Deno
Import `https://deno.land/x/usefultags/usefulTags.mjs`.

---
## Usage
For non-ESModule enviroments, the default namespace is `usefulTags`.

All tags take a string or array as a required (automatically supplied) argument, and return a string.
See the below examples on how to use them.

## Available tags:
### stripIndent:
Remove indents from each line in a multi-line string, but keep intentionally larger ones
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

/*Output:
This
is
a
multi-line
newline
 
    indented  
string.
Random number: 0.xxxxxxxxxxxxxxxx.
*/
```

### stripAllIndents:
Remove all indents from each line in a multi-line string
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

/*Output:
This
is
a
multi-line
newline

indented  
string.
Random number: 0.xxxxxxxxxxxxxxxx.
*/
```
### oneLine:
Merge a multi-line string onto one line (useful to keep lines under 80 characters)
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

/*Output:
This is a multi-line newline indented  string. Random number: 0.xxxxxxxxxxxxxxxx.
*/
```

### oneLineConcatenate:
Merge a multi-line string onto one line, without spaces (useful for URLs)
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

/*Output:
Thisisamulti-linenewlineindented  string.Random number: 0.xxxxxxxxxxxxxxxx.
*/
```
## License
usefulTags is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
