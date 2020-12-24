//Convert arrays/template strings to actual strings, throw an error on an invalid type
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
            `Parameter "templateString" must be either a string or an array. Got type "${typeof templateString}" instead.`
        );
    }
}

export function stripIndent(templateString, ...literals) {
    const string = manageTypes(templateString, ...literals);

    const indents = string
        .match(/^[ \t]*?(?=\S)/gm) //Find whitespace characters at the beginning of lines
        .reduce((a, c) => Math.min(a, c.length), Infinity); //Get the number of whitespace characters

    return string
        .replace(new RegExp(`^[ \t]{${indents}}`, "gm"), "") //Trim whitespace
        .replace(/^[ \t]+/g, "") //Trim the trailing first-line whitespace, if it exists
        .replace(/^\n/, ""); //Trim the first newline
}

export function stripAllIndents(templateString, ...literals) {
    const string = manageTypes(templateString, ...literals);

    return string
        .replace(/^[ \t]+/gm, "") //Trim whitespace
        .replace(/^\n/, ""); //Trim the first newline
}

export function oneLine(templateString, ...literals) {
    const string = manageTypes(templateString, ...literals);

    return string
        .replace(/^\s+/gm, " ") //Trim all excess whitespace, replacing them with one space
        .replace(/^\s/g, "") //Trim the extra beginning space
        .replace(/\n/g, ""); //Trim all newlines
}

export function oneLineConcatenate(templateString, ...literals) {
    const string = manageTypes(templateString, ...literals);

    return string
        .replace(/^\s+/gm, "") //Trim all excess whitespace
        .replace(/\n/g, ""); //Trim all newlines
}
