// Define the Intern class.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(eeName, id, email, school) {
        super(eeName, id, email);
        if (!school) {
            throw new Error("You are missing the intern's school.");
        }
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // returns 'Intern' to indicate this is an intern.
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;