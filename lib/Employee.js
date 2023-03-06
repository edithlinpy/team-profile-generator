// Define the Employee class
class Employee {
    constructor(eeName, id, email) {
        if (!eeName) {
            throw new Error("You are missing the employee's name.");
        }
        let eeId = Number.parseInt(id);
        if (!eeId) {
            throw new Error("You are missing the employee's id.");
        }
        if (!email) {
            throw new Error("You are missing the employee's email.");
        }
        this.eeName = eeName;
        this.id = eeId;
        this.email = email;
    }

    getName() {
        return this.eeName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    // returns 'Employee' to indicate this is an empolyee
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;

