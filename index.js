// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project: ",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install your project?: ",
    name: "installation",
  },
  {
    type: "input",
    message: "What is this project used for?",
    name: "usage",
  },
  {
    type: "list",
    message: "Was there a license for this project?: ",
    choices: ["Apache", "GNU", "MIT", "Mozilla", "ISC", "Open"],
    name: "license",
  },
  {
    type: "input",
    message: "Who contributed to this project?",
    name: "collaborators",
  },
  {
    type: "input",
    message: "Is there a test?",
    name: "test",
  },
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email: ",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var readme = generateMarkdown(data);
  fs.writeFile(fileName, readme, function (err) {
    console.log(err);
    console.log("Your README is being generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    writeToFile("newREADME.md", answers);
  });
}

// // Function call to initialize app
init();
