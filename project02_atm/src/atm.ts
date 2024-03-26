import inquirer from "inquirer";
interface account {
    "userName": string;
    "password": number;
    "customerName": string;
    "customerBalance": number;
    "pinRetries": number;
    "accountBlocked": boolean
}
//Create a structure for Holding Account information
let accounts: account[] = [];
accounts.push({
    userName: "Faisal", password: 3232,
    customerName: "Faisal Khan", customerBalance: 100000, pinRetries: 0,
    accountBlocked: false
});
accounts.push({
    userName: "Anees", password: 2298,
    customerName: "Anees Ahmed", customerBalance: 100000, pinRetries: 0,
    accountBlocked: false
});
accounts.push({
    userName: "Humza", password: 4213,
    customerName: "Humza Syed", customerBalance: 100000, pinRetries: 0,
    accountBlocked: false
});

//Run this loop indefinitely
while (true) {
    let isValididated: boolean = false;
    console.log("welcome to basic atm");
    let userNameInput = await inquirer.prompt([
        {
            name: "inputUser",
            type: "string",
            message: "Input User Name:"
        }
    ]);
    let userPasswordInput = await inquirer.prompt([
        {
            name: "inputPassword",
            type: "password",
            message: "Input User Pin:"
        }
    ]);
  //  console.log(userNameInput.inputUser, userPasswordInput.inputPassword);
    let found = accounts.find(element => (element.userName == userNameInput.inputUser
        && element.password == userPasswordInput.inputPassword));
    if (found) {
        if (found.accountBlocked == true) {
            console.log(`Dear ${found.customerName},Your account is blocked, Please contact customer support.`);
        } else {
            found.pinRetries = 0;
            console.log("Welcome", found.customerName);
            let opr = await inquirer.prompt([
                {
                    name: "operation",
                    type: "list",
                    choices: ["Cash Deposit", "Cash Withdrawal", "View Balance","Exit"],
                    message: "Select your desired operation"
                }
            ]);
            switch (opr.operation) {
                case "Cash Deposit": {
                    console.log(`Your Current Balance is ${found.customerBalance}`);
                    let amount = await inquirer.prompt([
                        {
                            name: "deposit",
                            type: "number",
                            message: "Deposit Amount:"
                        }
                    ]);
                    if (amount.deposit >= 0) {
                        found.customerBalance += amount.deposit;
                        console.log(`Your Current Balance after Deposit is ${found.customerBalance}`);
                    }
                    else {
                        console.log("Deposit Amount cannot be Zero or Negative");
                    }
                    break;
                }
                case "Cash Withdrawal": {
                    console.log(`Your Current Balance is ${found.customerBalance}`);
                    let amount = await inquirer.prompt([
                        {
                            name: "witdrawal",
                            type: "number",
                            message: "Deposit Amount:"
                        }
                    ]);
                    if (amount.witdrawal >= 0) {
                        found.customerBalance -= amount.witdrawal;
                        console.log(`Your Current Balance after Withdrawal is ${found.customerBalance}`);
                    }
                    else {
                        console.log("Withdrawal Amount cannot be Zero or Negative");
                    }
                    break;
                }
                case "View Balance": {
                    console.log(`Dear ${found.customerName}: Your balance is ${found.customerBalance}`);
                    break;
                }
            }
            if (opr.operation==="Exit"){
                console.log("Exiting Application:");
                break;
            }
        }
    } else {
        found = accounts.find(element => (element.userName == userNameInput.inputUser));
        if (found) {
            found.pinRetries += 1;
            console.log("Invalid user or password");
            if (found.pinRetries > 3) {
                found.accountBlocked = true;
                console.log("3 failed pin retries, account is blocked. ");
            }
        }
        else{
            console.log(`Cannot find user ${userNameInput.inputUser}`);
        }
    }
}