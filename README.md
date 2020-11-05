<h1 align="center">usefulTags</h1>
<p align="center">A tiny JavaScript library incorporating some useful template tag functions.</p>

---
![code size: < 10kb](https://img.shields.io/github/languages/code-size/thethunderguys/usefulTags) ![license: MIT](https://img.shields.io/github/license/thethunderguys/usefulTags?color=orange) ![release](https://img.shields.io/github/v/release/thethunderguys/usefulTags?sort=semver&color=brightgreen) [![codefactor](https://img.shields.io/codefactor/grade/github/thethunderguys/usefulTags/trunk?label=codefactor&logo=codefactor)](https://www.codefactor.io/repository/github/thethunderguys/usefultags) [![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=informational)](https://github.com/prettier/prettier)

usefulTags is a small JavaScript library that adds a handful of commonly used and helpful template tag functions.

This project is not yet complete and functionality is subject to change. Full documentation is in the works.

## Example
```js
import {stripIndent} from "usefultags";

stripIndent`
    Hello
    World!`;

/*Output (has no indents):
Hello
World!
*/
```

## Table of Contents
- [Installation](#installation)
    - [Requirements](#requirements)
    - [Directions](#directions)
        - [Node](#node)
        - [Browsers](#browsers)
        - [Deno](#deno)
- [Usage](#usage)
    - [Available Tags](#available-tags)
        - [`stripIndent`](#stripindent)
        - [`stripAllIndents`](#stripallindents)
        - [`oneLine`](#oneline)
        - [`oneLineConcatenate`](#onelineconcatenate)
- [License](#license)

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

#### Browsers
Use UNPKG to load the library:
```html
<script src="https://unpkg.com/usefultags@ver"></script>
```
Ensure you replace `@ver` with a version tag. You can always download the library to your own CDN if you like.

For ESModule and RequireJS targets, see [usage](#usage).
#### Deno
Simply import `https://deno.land/x/usefultags/usefulTags.mjs`.

---
## Usage
### Importing
#### Node
```js
//CommonJS loader:
const usefulTags = require("usefultags");
//----
//RequireJS loader (assuming it's already configured for Node):
requirejs(["usefultags"], (usefulTags) => {
    //...
});
```
For non-ESModule enviroments, the default namespace is `usefulTags`.

All tags take a string or array as a required (automatically supplied) argument, and return a string.
See the below examples on how to use them.

### Available Tags:
#### stripIndent:
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

#### stripAllIndents:
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
#### oneLine:
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

#### oneLineConcatenate:
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
