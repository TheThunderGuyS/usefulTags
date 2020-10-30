"use strict";
const usefulTags = require("./index.js");
{
    {
        const single = usefulTags.stripIndent`    This is ${"a"} single-line string. Random number: ${Math.random()}.`;
        const multi = usefulTags.stripIndent`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;

        console.log(`stripIndent tests:\n${single}\n${multi}\n`);
    }

    {
        const single = usefulTags.stripAllIndents`    This is ${"a"} single-line string. Random number: ${Math.random()}.`;
        const multi = usefulTags.stripAllIndents`This
    is
         ${"a"}
      multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;

        console.log(`stripAllIndents tests:\n${single}\n${multi}\n`);
    }

    {
        const single = usefulTags.oneLine`    This is ${"a"} single-line string. Random number: ${Math.random()}.`;
        const multi = usefulTags.oneLine`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;

        console.log(`oneLine tests:\n${single}\n${multi}\n`);
    }

    {
        const single = usefulTags.oneLineConcatenate`    This is ${"a"} single-line string. Random number: ${Math.random()}.`;
        const multi = usefulTags.oneLineConcatenate`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;

        console.log(`oneLineConcatenate tests:\n${single}\n${multi}\n`);
    }
}

console.log("Tests complete. Scroll back to check over output.");
