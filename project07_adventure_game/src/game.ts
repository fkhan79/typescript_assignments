import inquirer from "inquirer";
import chalk from "chalk";

let playerName = await inquirer.prompt({ name: "playerName", message: "Enter Your Name" });

//Run the Game for Indefinite time
console.log("Welcome to the Text Street Fighter!!!!!")
let reset: string = "";
reset:
while (true) {
    let enemies: string[] = ["Ryu", "Robert", "E-Honda", "Zangief"];
    let maxEnemyHealth = 75;
    let attackDamageEnemy = 25;

    //Game Objects Player
    let playerHealth = 100;
    let attackDamagerPlayer = 50;
    let healthPotsNumber = 3;
    let healthPotionHeal = 30;
    let healthPotionDropChance = 1000;

    console.log(`--------Welcome ${playerName.playerName}-------------`);
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
    let enemyName = enemies[Math.floor(Math.random() * enemies.length)]
    console.log(`\t${enemyName} Appeared:`);
    while (enemyHealth > 0) {
        if (playerHealth >= 30) {
            console.log(chalk.greenBright(`\tYour Health: ${playerHealth}`));
        } else {
            console.log(chalk.redBright(`\tYour Health: ${playerHealth}, Drink Potion to Regain Strength!!!1`));
        }
        console.log(chalk.redBright(`\t${enemyName} Health: ${enemyHealth}`));
        let combatModeSelection = await inquirer.prompt({
            name: "combatMode",
            type: "list",
            choices: ["Attack", "Heal Yourself", "Run Away", "Exit"],
            message: chalk.bgGreen("Enter Your Choice")
        })

        reset = combatModeSelection.combatMode;

        switch (combatModeSelection.combatMode) {
            case "Attack": {
                let damageDealt = Math.ceil(Math.random() * attackDamagerPlayer);
                let damageTaken = Math.floor(Math.random() * attackDamageEnemy);
                enemyHealth -= damageDealt;
                playerHealth -= damageTaken;
                console.log(chalk.greenBright(`\n\tDamage Dealt to ${enemyName}: ${damageDealt}`));
                console.log(chalk.redBright(`\tDamage Done by ${enemyName}: ${damageTaken}`));
                if (playerHealth >= 30) {
                    console.log(chalk.greenBright(`\tYour Remaining Health: ${playerHealth}`));
                } else {
                    console.log(chalk.redBright(`\tYour Remaining Health: ${playerHealth}, Drink Potion to Regain Strength!!!1`));
                }
                if (enemyHealth <= 0) {
                    let chance = Math.ceil(Math.random() * attackDamageEnemy);
                    if (chance > 10) {
                        healthPotsNumber++;
                        console.log(chalk.cyanBright(chalk.blueBright(`\tYou got a health potion, You have ${healthPotsNumber} available:`)));
                    }
                    console.log(`\n\n\t${enemyName}: defeated`);
                    break;
                }
                console.log(`\t${healthPotsNumber}  Health Potions Available`);
                if (playerHealth < 1) {
                    console.log(`\tToo much damge taken, You are defeated by ${enemyName}:`);
                    break;
                }
                break;
            }
            case "Heal Yourself": {
                if (healthPotsNumber > 0) {
                    playerHealth += healthPotionHeal;
                    console.log(`\tHealth Potion taken, Stregth Increase by ${healthPotionHeal}!!! Your health is ${playerHealth}:`);
                    healthPotsNumber--;
                    break;
                }
                else {
                    console.log(`-------No Health Potion Available:--------------`);
                }
                break;
            }
            case "Run Away": {
                console.log(`-------You Ran Away, Resetting Game--------------`);
                continue reset;
            }
            case "Exit": {
                enemyHealth = -1;
                break;
            }
        }

    }
    if (reset == "Exit") {
        break;
    }

}
console.log("Thanks for Playing!!!!!");
