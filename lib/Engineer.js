// Define the Engineer class.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(eeName, id, email, github) {
        super(eeName, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // returns 'Engineer' to indicate this is an engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
