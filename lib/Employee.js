// Define the Employee class
class Employee {
    constructor(eeName, id, email) {
        this.name = eeName;
        let eeId = Number.parseInt(id);
        this.id = eeId;
        this.email = email;
    }

    getName() {
        return this.name;
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

