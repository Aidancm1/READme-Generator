// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        type: "input",
        name: "title"
    },
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
    },
    {
        message: "What type of License do you want to include?",
        type: 'list',
        name: 'license',
        choices: ['apache', 'mit', 'isc']
    }
];


// inquirer
//     .prompt(questions);
    

// Creating questions for READme file


// TODO: Create a function to write README file
const writeToFile = function(templateString) {
    fs.writeFile('README.md', templateString, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        let readMeMarkdown = generateMarkdown(answers)
        console.log (readMeMarkdown)
        writeToFile(readMeMarkdown)
    });
};

// Function call to initialize app
init();



// function add(num1, num2) {
//     console.log(num1 + num2)
// }

// var number = 1
// var anotherNumber = 5

// add(number, anotherNumber) // 6

