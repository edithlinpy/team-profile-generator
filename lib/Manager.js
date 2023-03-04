// Define the Manager class.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(eeName, id, email, officeNumberStr) {
        super(eeName, id, email);
        let officeNumber = Number.parseInt(officeNumberStr);
        if (!officeNumber) {
            throw new Error("You are missing the manager's office number.");
        } else if (Number.isNaN(officeNumber)) {
            throw new Error("Please enter a valid manager's office number.");
        }
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
