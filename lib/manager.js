const Employee = require ('../Object-Oriented-Programming-Challenge-Team-Profile-Generator/employee');

class manager extends Employee {
    contructor (namex,id,email,officeNumber) {
        this.officeNumber = officeNumber;
        super(namex,id,email);
    }


getRole() {
    return 'manager'
    //returns Manager
}

getOffice () {
    return this.officeNumber
}

}
