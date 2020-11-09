<h1 align="center">usefulTags</h1>
<p align="center">A tiny JavaScript library incorporating some useful template tag functions.</p>

---
![code size: < 10kb](https://img.shields.io/github/languages/code-size/thethunderguys/usefulTags) ![license: MIT](https://img.shields.io/github/license/thethunderguys/usefulTags?color=orange) ![release](https://img.shields.io/github/v/release/thethunderguys/usefulTags?sort=semver&color=brightgreen) [![codefactor](https://img.shields.io/codefactor/grade/github/thethunderguys/usefulTags/trunk?label=codefactor&logo=codefactor)](https://www.codefactor.io/repository/github/thethunderguys/usefultags) [![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=informational)](https://github.com/prettier/prettier)

usefulTags is a compact JavaScript library that adds a handful of commonly used and helpful template tags.
It aims to be small, simple and practical by adding 4 template tags with no frills.

By default, template strings preserve all newlines and indents, which can be irritating and make source code look awful.
usefulTags' primary purpose is to resolve this issue in the vast majority of use cases, with 4 tags for managing newlines and indents.

## Example
```js
import {stripIndent} from "usefultags";

stripIndent`
    Hello,
    World!`;

/*Output (has no extra indents):
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
- [License](#license)

## Installation
### Requirements
- Any Node.js / iojs version
- Any Deno version
- Any other environment supporting ES5 (most browsers)

usefulTags supports the vast majority of module loaders (CommonJS, ESModules, RequireJS, IEFF scripts, etc.) thanks to [UMD](https://github.com/umdjs/umd).
### Directions
Install with NPM:
```
npm i usefultags
```
For URL based loaders and browsers, see [importing](#importing) instead.

---
## Usage
Syntax:
```js
stripIndent`{templateStringArray}`;
stripIndent({string || Array});
```
See [available tags](#available-tags) for usage examples.
### Importing
You can swap or add to the `stripIndent` example in the import array with what's listed in [available tags](#available-tags).

The default suggested namespace is `usefulTags`, if you choose not to directly import tags.
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
//Remember that the ESModule version is located in the /usefulTags.mjs path
import {stripIndent} from "https://unpkg.com/usefultags@ver/usefulTags.mjs";
```

#### Deno
```js
//Ensure you replace @ver with a version tag
import {usefulTags} from "https://deno.land/x/usefultags@ver/usefulTags.mjs";
```

### Available Tags:
These are all of the tags exposed by usefulTags.
#### `stripIndent`:
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

#### `stripAllIndents`:
Remove *all* indentation from each line in a multi-line string
(useful deep in callbacks/conditionals where additional indents are a generated mistake)
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

#### `oneLineConcatenate`:
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

## Tags on Regular Strings
If needed, you can always use any tag without an actual template string.
Supply a string or array of strings as an argument to the function.
```js
stripIndent("    Hello,\n    World!");
/*Output:
Hello,
World!
*/
```

## License
usefulTags is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
