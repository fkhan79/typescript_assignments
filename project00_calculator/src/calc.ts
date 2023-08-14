#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let num1 = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: chalk.bgBlue("enter num 1")
    }
]);
let num2 = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: chalk.bgBlue("enter num 2")
    }
]);
let opr = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        choices: ["add", "sub", "mul", "div", "exp"],
        message: chalk.bgYellow("enter opr")
    }
]);

switch (opr.operation) {
    case "add": {
        console.log(chalk.bgRedBright(num1.num1 + num2.num2));
        break;
    }
    case "sub": {
        console.log(chalk.bgRedBright(num1.num1 - num2.num2));
        break;
    }
    case "mul": {
        console.log(chalk.bgRedBright(num1.num1 * num2.num2));
        break;
    }
    case "div": {
        console.log(chalk.bgRedBright(num1.num1 / num2.num2));
        break;
    }
    case "exp": {
        console.log(chalk.bgRedBright(num1.num1 ** num2.num2));
        break;
    }
}
