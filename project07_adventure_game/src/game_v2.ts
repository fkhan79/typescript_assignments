import inquirer from "inquirer";
import chalk from "chalk";

class Enemy {
    enemyName: string = "";
    maxEnemyHealth: number = 0;
    attackDamageEnemy: number = 0;
}




let playerName = await inquirer.prompt({ name: "playerName", message: "Enter Your Name" });
let enemies: Enemy[] = [];
let enemy1 = new Enemy();
enemy1.enemyName = "Ryu Hoshi";
enemy1.attackDamageEnemy = 78;
enemy1.maxEnemyHealth = 85;
enemies.push(enemy1);

let enemy2 = new Enemy();
enemy2.enemyName = "Blanka";
enemy2.attackDamageEnemy = 48;
enemy2.maxEnemyHealth = 75;
enemies.push(enemy2);

let enemy3 = new Enemy();
enemy3.enemyName = "Chun Li";
enemy3.attackDamageEnemy = 35;
enemy3.maxEnemyHealth = 75;
enemies.push(enemy3);

let enemy4 = new Enemy();
enemy4.enemyName = "M-Bison";
enemy4.attackDamageEnemy = 85;
enemy4.maxEnemyHealth = 150;
enemies.push(enemy4);

console.log("Welcome to the Text Street Fighter!!!!!")
let reset: string = "";
let playerHealth = 100;
let attackDamagerPlayer = 50;
let healthPotsNumber = 3;
let healthPotionHeal = 30;
let healthPotionDropChance = 1000;
//Run the Game for Indefinite time
reset:
while (true) {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    

    console.log(`--------Welcome ${playerName.playerName}-------------`);
    let enemyHealth = Math.floor(Math.random() * enemy.maxEnemyHealth);
    console.log(`\t${enemy.enemyName} Appeared:`);
    while (enemyHealth > 0) {
        if (playerHealth >= 30) {
            console.log(chalk.greenBright(`\tYour Health: ${playerHealth}`));
        } else {
            console.log(chalk.redBright(`\tYour Health: ${playerHealth}, Drink Potion to Regain Strength!!!1`));
        }
        console.log(chalk.redBright(`\t${enemy.enemyName} Health: ${enemyHealth}`));
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
                let damageTaken = Math.floor(Math.random() * enemy.attackDamageEnemy);
                enemyHealth -= damageDealt;
                playerHealth -= damageTaken;
                console.log(chalk.greenBright(`\n\tDamage Dealt to ${enemy.enemyName}: ${damageDealt}`));
                console.log(chalk.redBright(`\tDamage Done by ${enemy.enemyName}: ${damageTaken}`));
                if (playerHealth >= 30) {
                    console.log(chalk.greenBright(`\tYour Remaining Health: ${playerHealth}`));
                } else if (playerHealth <= 0) {
                    console.log(`\tToo much damge taken, You are defeated by ${enemy.enemyName}:`);
                    break;
                } else if(healthPotsNumber>0) {
                    console.log(chalk.redBright(`\tYour Remaining Health: ${playerHealth}, Drink Potion to Regain Strength!!!1`));
                }
                if (enemyHealth <= 0) {
                    let chance = Math.ceil(Math.random() * enemy.attackDamageEnemy);
                    if (chance > 10) {
                        healthPotsNumber++;
                        console.log(chalk.cyanBright(chalk.blueBright(`\tYou got a health potion, You have ${healthPotsNumber} available:`)));
                    }
                    console.log(`\n\n\t${enemy.enemyName}: defeated`);
                    break;
                }
                console.log(`\t${healthPotsNumber}  Health Potions Available`);
                if (playerHealth <= 0) {
                    console.log(`\tToo much damge taken, You are defeated by ${enemy.enemyName}:`);
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
    if (reset == "Exit" || playerHealth <= 0) {
        break;
    }

}
console.log("Thanks for Playing!!!!!");
