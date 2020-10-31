"use strict";
var usefulTags = require("./dist/index.js");
{
    {
        var single = usefulTags.stripIndent("    This is ${\"a\"} single-line string. Random number: ${Math.random()}.");
        var multi = usefulTags.stripIndent("\n" +
"        This\n" +
"        is\n" +
"        ${\"a\"}\n" +
"        multi-line\n" +
"        newline\n" +
"         \n" +
"            indented  \n" +
"        string." +
"        Random number: ${Math.random()}.");

        console.log("stripIndent tests:\n" + single + "\n" + multi + "\n");
    }
}
