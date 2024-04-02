#! /usr/bin/env node
import inquirer from "inquirer"

console.log("\n\twelcome to Muntaha's - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random()*4 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess Number (Number limit from 1 to 4)",
    },
]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations you guess a correct number.");
}

else{
    console.log("Sorry you guess a wrong Number");
}