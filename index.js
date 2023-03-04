const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// const manager = new Manager("Json Marlow", 1, "json.marlow@domain.com", 1001);
// console.log("---Manager---");
// console.log(manager);
// const engineer = new Engineer("Michael Jordon", 2, "mjordon@gmail.com", "http://lkasdf.lkla");
// console.log("---Engineer---");
// console.log(engineer);
// const intern = new Intern("Baby Mary", 3, "baby-mary@yahoo.com.uk", "Piggott School");
// console.log("---Intern---");
// console.log(intern);

