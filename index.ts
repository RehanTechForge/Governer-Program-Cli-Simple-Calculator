#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const promptColor = chalk.yellow; // Color for the prompts

const answer = await inquirer.prompt([
    { message: promptColor("Please Enter Your First Number"), type: "number", name: "firstNumber" },
    { message: promptColor("Please Enter Your Second Number"), type: "number", name: "secondNumber" },
    {
        message: promptColor("Select One Of The Operator To Perform Action"), type: "list", name: "operator", choices: [
            "Addition", "Subtraction", "Multiplication", "Division"
        ]
    },
]);

const Addition = (firstNumber: number, secondNumber: number) => {
    return firstNumber + secondNumber;
}

const Subtraction = (firstNumber: number, secondNumber: number) => {
    return firstNumber - secondNumber;
}

const Multiplication = (firstNumber: number, secondNumber: number) => {
    return firstNumber * secondNumber;
}

const Division = (firstNumber: number, secondNumber: number) => {
    return firstNumber / secondNumber;
}

let result;
if (answer.operator === "Addition") {
    result = Addition(answer.firstNumber, answer.secondNumber);
    console.log(chalk.green(`Result Is: ${result}`));
} else if (answer.operator === "Subtraction") {
    result = Subtraction(answer.firstNumber, answer.secondNumber);
    console.log(chalk.blue(`Result Is: ${result}`));
} else if (answer.operator === "Multiplication") {
    result = Multiplication(answer.firstNumber, answer.secondNumber);
    console.log(chalk.magenta(`Result Is: ${result}`));
} else if (answer.operator === "Division") {
    result = Division(answer.firstNumber, answer.secondNumber);
    console.log(chalk.red(`Result Is: ${result}`));
} else {
    console.log(chalk.red("Please select a valid operator"));
}
