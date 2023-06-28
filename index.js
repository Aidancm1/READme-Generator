// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
// Creating questions for READme file
inquirer
    .createPromptModule([
        {
            message: "What was your motivation?",
            type: "input",
            name: "motivation"
        },
        {
            message: "Why did you build this project?",
            type: "input",
            name: "why"
        },
        {
            message: "What problem does it solve?",
            type: "input",
            name: "problem"
        },
        {
            message: "What did you learn building this project?",
            type: "input",
            name: "learn"
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

