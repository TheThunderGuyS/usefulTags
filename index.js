"use strict";
/**Strip excess indentation from template strings (as a tagged template)
 * @returns {string} Returns the string without indents.
 */
function stripIndent(strings) {
    //Get template literals and add back to string
    const values = [];
    for (let i = 1; i < arguments.length; i++) {
        values[i - 1] = arguments[i];
    }
    let string = "";
    strings.forEach((str, i) => {
        string += str + (values[i] || "");
    });

    const indents = string
        .match(/^\s+/gm) //Find whitespace at the beginning of lines
        .reduce((r, a) => Math.min(r, a.length), Infinity); //Get the number of whitespace characters from this
    return string
        .replace(new RegExp(`^[ \t]{${indents}}`, "gm"), "") //Trim the spaces
        .replace(/^\n/, ""); //Trim the first newline
}

/**Strip all indentation from template strings (as a tagged template)
 * @returns {string} Returns the string without any indents.
 */
function stripAllIndents(strings) {
    //Get template literals and add back to string
    const values = [];
    for (let i = 1; i < arguments.length; i++) {
        values[i - 1] = arguments[i];
    }
    let string = "";
    strings.forEach((str, i) => {
        string += str + (values[i] || "");
    });

    return string
        .replace(/^[ \t]+/gm, "") //Trim the spaces
        .replace(/^\n/, ""); //Trim the first newline
}

/**Put a multi-line template string onto one line (as a tagged template)
 * @returns {string} Returns the string on one line.
 */
function oneLine(strings) {
    //Get template literals and add back to string
    const values = [];
    for (let i = 1; i < arguments.length; i++) {
        values[i - 1] = arguments[i];
    }
    let string = "";
    strings.forEach((str, i) => {
        string += str + (values[i] || "");
    });

    return string
        .replace(/^\s+/gm, " ") //Trim all excess whitespace, replacing it with one space
        .replace(/^\s/g, "") //Remove the beginning space
        .replace(/\n/g, ""); //Trim all newlines
}

/**Put a multi-line template string onto one line, without spaces between lines (as a tagged template)
 * @returns {string} Returns the string on one line.
 */
function oneLineConcatenate(strings) {
    //Get template literals and add back to string
    const values = [];
    for (let i = 1; i < arguments.length; i++) {
        values[i - 1] = arguments[i];
    }
    let string = "";
    strings.forEach((str, i) => {
        string += str + (values[i] || "");
    });

    return string
        .replace(/^\s+/gm, "") //Trim all excess whitespace
        .replace(/\n/g, ""); //Trim all newlines
}

module.exports.stripIndent = stripIndent;
module.exports.stripAllIndents = stripAllIndents;
module.exports.oneLine = oneLine;
module.exports.oneLineConcatenate = oneLineConcatenate;
