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
  //   {
  //     type: "input",
  //     name: "description",
  //     message: "Write a brief description of your project: ",
  //   },
  //     {
  //       type: "input",
  //       name: "installation",
  //       message: "Describe the installation process if any: ",
  //     },
  //     {
  //       type: "input",
  //       name: "usage",
  //       message: "What is this project usage for?",
  //     },
  //   {
  //     type: "list",
  //     name: "license",
  //     message: "Chose the appropriate license for this project: ",
  //     choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
  //   },
  //   //   {
  //     type: "input",
  //     name: "contributing",
  //     message: "Who are the contributors of this projects?",
  //   },
  //   {
  //     type: "input",
  //     name: "tests",
  //     message: "Is there a test included?",
  //   },
  //   {
  //     type: "input",
  //     name: "questions",
  //     message: "What do I do if I have an issue? ",
  //   },
  //   {
  //     type: "input",
  //     name: "username",
  //     message: "Please enter your GitHub username: ",
  //   },
  //   {
  //     type: "input",
  //     name: "email",
  //     message: "Please enter your email: ",
  //   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(err);
    console.log("Your README is being generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    return writeToFile("newREADME.md", generateMarkdown(answers));
  });
}

// // Function call to initialize app
init();
