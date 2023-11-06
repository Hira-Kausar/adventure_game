import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["skeleton", "assasin", "zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // "skeleton"
    if (opponent.select == "skeleton") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: (chalk.red.bold("Please Select The Action")),
            choices: ["Fight", "Power-up", "Save Your Life"]
        });
        if (ask.opt == "Fight") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold("You loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Power-up") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`Your fuel is up your health is ${p1.fuel}`));
        }
        ;
        if (ask.opt == "Save Your Life") {
            console.log(chalk.red.bold("You loose Better Luck Next Time"));
            process.exit();
        }
        ;
    }
    // "assasin"
    if (opponent.select == "assasin") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: (chalk.red.bold("Please Select The Action")),
            choices: ["Fight", "Power-up", "Save Your Life"]
        });
        if (ask.opt == "Fight") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold("You loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Power-up") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`Your fuel is up your health is ${p1.fuel}`));
        }
        ;
        if (ask.opt == "Save Your Life") {
            console.log(chalk.red.bold("You loose Better Luck Next Time"));
            process.exit();
        }
        ;
    }
    //"zombie"
    if (opponent.select == "zombie") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: (chalk.red.bold("Please Select The Action")),
            choices: ["Fight", "Power-up", "Save Your Life"]
        });
        if (ask.opt == "Fight") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold("You loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Power-up") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`Your fuel is up your health is $fuel}`));
        }
        ;
        if (ask.opt == "Save Your Life") {
            console.log(chalk.red.bold("You loose Better Luck Next Time"));
            process.exit();
        }
        ;
    }
} while (true);
