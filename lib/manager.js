const Employee = require('./employee');

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
        
    };

    getOffice() {
        console.log(this.officeNumber);
        return this.officeNumber;
    };

    getRole() {
        return 'manager';
    //returns Manager
    };

}
module.exports = Manager