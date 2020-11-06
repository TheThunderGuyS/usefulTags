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
- [License](#license)

## Installation
### Requirements
- Any Node.js / iojs version
- Any Deno version
- Any other enviroment supporting ES5
- Enviroment supporting template literals (try [Babel](https://babeljs.io) for ES5 enviroments)

usefulTags supports the vast majority of module loaders (CommonJS, ESModules, RequireJS, IEFF scripts, etc.)

If you want to support older enviroments, you will need to use an ES5 polyfill.
### Directions
Install with NPM:
```
npm i usefultags
```
For URL based loaders, instead see [importing](#importing).

---
## Usage
Syntax:
```js
stripIndent`<templateStringArray>`;
stripIndent(string || Array);
```
See [available tags](#available-tags) for examples.
### Importing
For ESModule imports, you can swap or add to the `stripIndent` example with what's listed in [available tags](#available-tags).

For non-ESModule enviroments, the default namespace is `usefulTags`.
#### Node
```js
//CommonJS loader:
const usefulTags = require("usefultags");
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
<!--If you have no module loader, use the script-->
<script src="https://unpkg.com/usefultags@ver"></script>
<!--The namespace is "usefulTags" or "window.usefulTags"-->
```
```js
//RequireJS loader (ensure you replace `@ver` with a version tag)
requirejs(["https://unpkg.com/usefultags@ver"], (usefulTags) => {
    //...
});
```
```js
//ESModule loader (again, ensure you replace `@ver` with a version tag)
//Remember that the ESModule version loads from the /usefulTags.mjs path
import {stripIndent} from "https://unpkg.com/usefultags@ver/usefulTags.mjs";
```

#### Deno
```js
import * from "https://deno.land/x/usefultags/usefulTags.mjs";
```

### Available Tags:
These are all of the functions available from usefulTags.
#### `stripIndent`:
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

#### `stripAllIndents`:
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
#### `oneLine`:
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

#### `oneLineConcatenate`:
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
