"use strict";
//Manage types (return string, add together array)
function manageTypes(strings, ...values) {
    if (typeof strings === "string") return strings;
    else if (Array.isArray(strings)) {
        let string = "";
        strings.forEach((str, i) => {
            string += str + (values[i] || "");
        });
        return string;
    } else {
        throw new TypeError(
            `Parameter "strings" must be either a string or array. Got type "${typeof strings}" instead.`
        );
    }
}

/**Strip excess indentation from a string
 * @returns {string} Returns the string without indents.
 */
export function stripIndent(strings, ...values) {
    const string = manageTypes(strings, ...values);

    const indents = string
        .match(/^\s+/gm) //Find whitespace at the beginning of lines
        .reduce((r, a) => Math.min(r, a.length), Infinity); //Get the number of whitespace characters from this

    return string
        .replace(new RegExp(`^[ \t]{${indents}}`, "gm"), "") //Trim the spaces
        .replace(/^\n/, ""); //Trim the first newline
}

/**Strip all indentation from a string
 * @returns {string} Returns the string without any indents.
 */
export function stripAllIndents(strings, ...values) {
    const string = manageTypes(strings, ...values);

    return string
        .replace(/^[ \t]+/gm, "") //Trim the spaces
        .replace(/^\n/, ""); //Trim the first newline
}

/**Put a multi-line string onto one line
 * @returns {string} Returns the string on one line.
 */
export function oneLine(strings, ...values) {
    const string = manageTypes(strings, ...values);

    return string
        .replace(/^\s+/gm, " ") //Trim all excess whitespace, replacing it with one space
        .replace(/^\s/g, "") //Remove the beginning space
        .replace(/\n/g, ""); //Trim all newlines
}

/**Put a multi-line string onto one line, without spaces between lines
 * @returns {string} Returns the string on one line.
 */
export function oneLineConcatenate(strings, ...values) {
    const string = manageTypes(strings, ...values);

    return string
        .replace(/^\s+/gm, "") //Trim all excess whitespace
        .replace(/\n/g, ""); //Trim all newlines
}