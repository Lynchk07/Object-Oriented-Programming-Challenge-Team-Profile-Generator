const Employee = require ('./employee');

class manager extends Employee {
    contructor (namex,id,email,officeNumber) {
        this.officeNumber = officeNumber;
        super(namex,id,email);
    };

    getOffice () {
        console.log(this.officeNumber);
        return this.officeNumber;
    };

    getRole() {
        return 'manager';
    //returns Manager
    };



}
