#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//lets create a number guessing game
let computer_guessed = Math.round(Math.random() * 10);
console.log(computer_guessed);

console.log("You have 4 tries to guess the correct number:");
let is_success=false;
for (let i = 1; i < 5; i++) {
    console.log(`Attempt no: ${i}`);
    let num1 = await inquirer.prompt([
        {
            name: "you_guessed",
            type: "number",
            message: chalk.bgBlue("Enter Your Guess >")
        }
    ]);
    if (num1.you_guessed === computer_guessed) {
        console.log("Your guess is correct. You Won!!!!!!");
        is_success=true;
        break;
    }else{
        console.log("wrong guess, try again")
    }
    
}
if(!is_success){
    console.log(`Computer guessed ${computer_guessed} !!!!`);
    console.log("hard luck buddy, better luck next time!!!!");

}else{
    console.log("Your are one lucky guesser!!!!");
}
