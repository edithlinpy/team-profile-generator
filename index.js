const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// an object stores all employee data, including
// an manager object
// an array of engineers
// an array of interns
const empolyeeData = {
    manager: {},
    engineers: [],
    interns: []
} 

// const manager = new Manager("Json Marlow", 1, "json.marlow@domain.com", 1001);
// console.log("---Manager---");
// console.log(manager);
// const engineer = new Engineer("Michael Jordon", 2, "mjordon@gmail.com", "http://lkasdf.lkla");
// console.log("---Engineer---");
// console.log(engineer);
// const intern = new Intern("Baby Mary", 3, "baby-mary@yahoo.com.uk", "Piggott School");
// console.log("---Intern---");
// console.log(intern);

// array of questions for asking manager's details
const baseQues = [
    {
    type: 'input',
    message: 'Name:',
    name: 'eeName',
    },
    {
    type: 'input',
    message: 'Id:',
    name: 'id',
    },
    {
    type: 'input',
    message: 'Email:',
    name: 'email',
    },
];


function askforNextAction() {
    inquirer
    .prompt(
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'next',
            choices: ["Add an engineer", 
                "Add an intern", 
                "Finish building the team"]
        }
    )
    .then((val) => {
        switch (val.next) {
            case "Add an engineer":
                askforEngineerDetails();
                break;
            case "Add an intern":
                askForInternDetails();
                break;
            default:
                quit();
        }
    })
}

// prompt the user for an engineer's details
function askforEngineerDetails() {
    let engineerQues = [...baseQues];;
    engineerQues.push({
        type: 'input',
        message: 'GitHub link:',
        name: 'gitHub',
    })
    console.log("Please enter engineer's details below:");
    inquirer
    .prompt(engineerQues)
    .then((val) => {
        // console.log(val);
        // create a new Engineer object
        const engineer = new Engineer(val.eeName, val.id, val.email, val.gitHub);
        empolyeeData.engineers.push(engineer);
        console.log("Engineer record is created successfully.");
        askforNextAction();
    });
}

// prompt the user for an intern's details
function askForInternDetails() {
    let internQues = [...baseQues];;
    internQues.push({
        type: 'input',
        message: 'Graduated from:',
        name: 'school',
    })
    console.log("Please enter intern's details below:");
    inquirer
    .prompt(internQues)
    .then((val) => {
        // console.log(val);
        // create a new Intern object
        const intern = new Intern(val.eeName, val.id, val.email, val.school);
        empolyeeData.interns.push(intern);
        console.log("Intern record is created successfully.");
        askforNextAction();
    });
}

// Logs goodbye and exits the node app
function quit() {
    console.log("--- Employee Data ---");
    console.log(empolyeeData);
    console.log("\nGoodbye!");
    process.exit(0);
}

// Asks the user if they want to play again after running out of guessesLeft
function init() {
    let managerQues = [...baseQues];
    managerQues.push({
        type: 'input',
        message: 'Office number:',
        name: 'officeNum',
    })
    console.log("Please enter manager's details below:");
    inquirer
    .prompt(managerQues)
    .then((val) => {
        // console.log(val);
        // create a new Manager object
        const manager = new Manager(val.eeName, val.id, val.email, val.officeNum);
        empolyeeData.manager = manager;
        console.log("Manager record is created successfully.");
        askforNextAction();
    });
}

init();

