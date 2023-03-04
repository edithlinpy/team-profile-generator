// Define the Employee class
class Employee {
    constructor(eeName, id, email) {
        if (!eeName) {
            throw new Error("You are missing the employee's name.");
        } else if (typeof eeName !== "string" || eeName.toLowerCase() < 'a' ||
                eeName.toLowerCase() > 'z') {
            throw new Error("Please enter a valid employee's name.");
        }
        if (!id) {
            throw new Error("You are missing the employee's id.");
        } else if (!Number.isInteger(id) || (id <= 0)) {
            throw new Error("Please enter a valid employee's name.");
        }
        if (!email) {
            throw new Error("You are missing the employee's email.");
        } else if (typeof email !== "string" || email.indexOf("@") < 2 ||
                email.substring(email.indexOf("@")).indexOf(".") < 1){
            throw new Error("Please enter a valid employee's email.");
        }
        this.eeName = eeName;
        this.id = id;
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

