// Define the Engineer class.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(eeName, id, email, gitHub) {
        super(eeName, id, email);
        if (!gitHub) {
            throw new Error("You are missing the engineer's gitHub.");
        }
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    // returns 'Engineer' to indicate this is an engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
