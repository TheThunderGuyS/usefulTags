<h1 align="center">usefulTags</h1>
<p align="center">A tiny JavaScript library incorporating some useful template tag functions.</p>

---
![code size: < 10kb](https://img.shields.io/github/languages/code-size/thethunderguys/usefulTags) ![license: MIT](https://img.shields.io/github/license/thethunderguys/usefulTags?color=orange) ![release: 1.x.x](https://img.shields.io/github/v/release/thethunderguys/usefulTags?sort=semver&color=brightgreen) [![codefactor: A+](https://img.shields.io/codefactor/grade/github/thethunderguys/usefulTags/trunk?label=codefactor&logo=codefactor)](https://www.codefactor.io/repository/github/thethunderguys/usefultags) [![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=informational)](https://github.com/prettier/prettier)

usefulTags is a compact JavaScript library that adds a handful of commonly used and helpful template tags.
It aims to be small, simple and practical by adding nothing but 4 template tags.

By default, template strings preserve all newlines and indents, which can be irritating and make source code look awful.
usefulTags' primary purpose is to resolve this issue in the vast majority of use cases, with 4 tags for managing newlines and indents.

```js
import {stripIndent} from "usefultags";

stripIndent`
    Hello,
      World!`;
/*
Output (has no extra indents):
Hello,
  World!
*/
```

## Table of Contents
- [Installation](#installation)
    - [Requirements](#requirements)
    - [Directions](#directions)
- [Usage](#usage)
    - [Importing](#importing)
        - [Node](#node)
        - [Browsers](#browsers)
        - [Deno](#deno)
    - [Available Tags](#available-tags)
        - [`stripIndent`](#stripindent)
        - [`stripAllIndents`](#stripallindents)
        - [`oneLine`](#oneline)
        - [`oneLineConcatenate`](#onelineconcatenate)
    - [Tags on Regular Strings](#tags-on-regular-strings)
    - [TypeScript Usage](#typescript-usage)
- [License](#license)

## Installation
### Requirements
- Any version of Node.js / iojs
- Any version of Deno
- Any other environment supporting ES5

usefulTags supports the vast majority of module loaders (CommonJS, ESModules, RequireJS, Script Tags, etc.) thanks to [UMD](https://github.com/umdjs/umd).

usefulTags works with transpilers like TypeScript and Babel, so you can write template literals in modern ES2015 syntax and transform it to ES5.
### Directions
Install with NPM:
```
npm i usefultags
```
For URL based loaders and browsers, see [importing](#importing) instead.

---
## Usage
The syntax is straightforward. All of the functions are used as template tags which automatically take the string as an argument. No more arguments get parsed.

When used as a regular function, either a string or array of any value is accepted.

A string is returned on success, and a `TypeError` is retruned when the provided arguments are an invalid type.

See [available tags](#available-tags) for usage examples.
### Importing
See importable functions at [available tags](#available-tags).

The default suggested namespace is `usefulTags` if you choose not to pollute the global namespace.
#### Node
```js
//CommonJS loader:
const {stripIndent} = require("usefultags");
```
```js
//RequireJS loader (assuming it's already configured for Node):
requirejs(["usefultags"], (usefulTags) => {
    //...
});
```
```js
//ESModule loader
import {stripIndent} from "usefultags";
```

#### Browsers
```html
<!--If you have no module loader, use this script (ensure you replace @ver with a version tag)-->
<!--The namespace is "usefulTags" or "window.usefulTags"-->
<script src="https://unpkg.com/usefultags@ver"></script>
```
```js
//RequireJS loader (ensure you replace @ver with a version tag)
requirejs(["https://unpkg.com/usefultags@ver"], (usefulTags) => {
    //...
});
```
```js
//ESModule loader (again, ensure you replace @ver with a version tag)
//Remember that the ESModule version is located in the /dist/usefulTags.mjs path
import {stripIndent} from "https://unpkg.com/usefultags@ver/dist/usefulTags.mjs";
```

#### Deno
```js
//Ensure you replace @ver with a version tag
//This will import the module with TypeScript type defenitions (v1.1.0 and later)
//For regular JavaScript you should do a more traditional import like Node.js
import * as usefulTags from "https://deno.land/x/usefultags@ver/usefulTags.mjs";
import * as _usefulTags from "https://deno.land/x/usefultags@ver/usefulTags.d.ts";
const {stripIndent} = usefulTags as typeof _usefulTags;
```

### Available Tags:
These are all of the tags exposed by usefulTags.
#### `stripIndent`
Remove initial indentation from each line in a multi-line string, but keep intentionally larger indents
(useful deep in callbacks/conditionals to keep indented source looking tidy and operational)
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

#### `stripAllIndents`
Remove *all* indentation from each line in a multi-line string
(useful deep in callbacks/conditionals where additional indents can be a mistake)
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
#### `oneLine`
Merge a multi-line string onto one line
(useful for keeping long lines under 80 characters)
```js
const line = oneLine`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  /
        string.
        Random number: ${Math.random()}.`;
console.log(line);

/*Output:
This is a multi-line newline indented  / string. Random number: 0.xxxxxxxxxxxxxxxx.
*/
```

#### `oneLineConcatenate`
Merge a multi-line string onto one line, without spaces
(useful for URLs constructed using template literals)
```js
const line = oneLineConcatenate`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  /
        string.
        Random number: ${Math.random()}.`;
console.log(line);

/*Output:
Thisisamulti-linenewlineindented  /string.Random number: 0.xxxxxxxxxxxxxxxx.
*/
```

### Tags on Regular Strings
If needed, you can always use a template tag without an actual template string.
Supply a string or array of strings as an argument to the function.
```js
stripIndent("    Hello,\n     World!");
/*Output:
Hello,
 World!
*/
```

### TypeScript Usage
usefulTags v1.1.0 and later ship with TypeScript type defenitions by default. They should automatically be loaded when used in Node.js.
For Deno, the instructions in [Importing/Deno](#deno) detail how to import with type defenitions.

## License
usefulTags is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
