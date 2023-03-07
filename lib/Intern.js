// Define the Intern class.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(eeName, id, email, school) {
        super(eeName, id, email);
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