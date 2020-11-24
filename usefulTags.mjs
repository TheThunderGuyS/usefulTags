"use strict";
//Return a string from arrays, throw on non-string/array
function manageTypes(templateString, ...literals) {
    if (typeof templateString === "string") return templateString;
    else if (Array.isArray(templateString)) {
        let string = "";
        templateString.forEach((a, i) => {
            string += a + (literals[i] || "");
        });
        return string;
    } else {
        throw new TypeError(
            `Parameter "templateString" must be either a string or array. Got type "${typeof templateString}" instead.`
        );
    }
}

export function stripIndent(templateString, ...literals) {
    const string = manageTypes(templateString, ...literals);

    const indents = string
        .match(/^[ \t]*?(?=\S)/gm) //Find whitespace at the beginning of lines
        .reduce((a, c) => Math.min(a, c.length), Infinity); //Get the number of whitespace characters

    return string
        .replace(new RegExp(`^[ \t]{${indents}}`, "gm"), "") //Trim the whitespace
        .replace(/^[ \t]+/g, "") //Trim the trailing first-line whitespace, if any
        .replace(/^\n/, ""); //Trim the first newline
}

export function stripAllIndents(templateString, ...literals) {
    const string = manageTypes(templateString, ...literals);

    return string
        .replace(/^[ \t]+/gm, "") //Trim the spaces
        .replace(/^\n/, ""); //Trim the first newline
}

export function oneLine(templateString, ...literals) {
    const string = manageTypes(templateString, ...literals);

    return string
        .replace(/^\s+/gm, " ") //Trim all excess whitespace, replacing it with one space
        .replace(/^\s/g, "") //Trim the beginning space
        .replace(/\n/g, ""); //Trim all newlines
}

export function oneLineConcatenate(templateString, ...literals) {
    const string = manageTypes(templateString, ...literals);

    return string
        .replace(/^\s+/gm, "") //Trim all excess whitespace
        .replace(/\n/g, ""); //Trim all newlines
}
