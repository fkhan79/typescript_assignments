import inquirer from "inquirer";

let word_count: string[] = []

let para = await inquirer.prompt([
    {
        name: "paragraph",
        type: "string",
        message: "Enter Your Sentence >"
    }
]);
//Approach 1 using split for spaces.
if (para) {
   word_count= para.paragraph.toLowerCase().split(" ");
   console.log(word_count);
   console.log(word_count.length);
}
//approach 2 using Regex
let regex=new RegExp(/[^\w]+/g);
let temp=para.paragraph.toLowerCase().split(regex)
console.log(temp)
console.log(temp.length);

