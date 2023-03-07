// Define the Manager class.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(eeName, id, email, officeNumberStr) {
        super(eeName, id, email);
        let officeNumber = Number.parseInt(officeNumberStr);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // returns 'Manager' to indicate this is a manager.
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
