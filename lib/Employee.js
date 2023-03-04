// Define the Employee class
class Employee {
    constructor(eeName, id, email) {
        if (!eeName) {
            throw new Error("You are missing the employee's name.");
        } else if (typeof eeName !== "string") {
            throw new Error("Please enter a valid employee's name.");
        }
        let eeId = Number.parseInt(id);
        if (!eeId) {
            throw new Error("You are missing the employee's id.");
        } else if (Number.isNaN(eeId)) {
            console.log(id + " -- " + Number.isInteger(id));
            throw new Error("Please enter a valid employee's id.");
        }
        if (!email) {
            throw new Error("You are missing the employee's email.");
        } else if (typeof email !== "string" || email.indexOf("@") < 2 ||
                email.substring(email.indexOf("@")).indexOf(".") < 1){
            throw new Error("Please enter a valid employee's email.");
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

