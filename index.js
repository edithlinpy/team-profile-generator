const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// an array stores all employee data
const team = [];

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
                // Generate and return a block of HTML including templated divs for each employee
                const htmlOutput = render(team);
                // check if the directory exists
                try {
                    if (fs.existsSync(OUTPUT_DIR)) {
                        // Directory exists, write file.
                        writeToFile(htmlOutput);
                    } else {
                        // Directory does not exist.
                        fs.mkdirSync(OUTPUT_DIR);
                        writeToFile(htmlOutput);
                    }
                } catch(e) {
                    console.log("An error occurred: "+e);
                }
                // console.log(htmlOutput);
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
        team.push(engineer);
        console.log("Engineer record is created successfully.");
        askforNextAction();
    });
}

// prompt the user for an intern's details
function askForInternDetails() {
    let internQues = [...baseQues];
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
        team.push(intern);
        console.log("Intern record is created successfully.");
        askforNextAction();
    });
}

// Write output to a html file
async function writeToFile(htmlOutput) {
    // console.log("write file");
    // console.log(htmlOutput);
    fs.writeFile(outputPath, htmlOutput, (err) => {
        err ? console.error(err) : console.log('\nHTML file generated successfully!')
    });
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
        team.push(manager);
        console.log("Manager record is created successfully.");
        askforNextAction();
    });
}

init();


