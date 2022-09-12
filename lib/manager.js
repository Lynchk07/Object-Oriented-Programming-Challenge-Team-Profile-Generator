const Employee = require ('../Object-Oriented-Programming-Challenge-Team-Profile-Generator/employee');

class manager extends Employee {
    contructor (officeNumber) {
        this.officeNumber = officeNumber;
    }


getRole() {
    const manager = new Manager("officeNumber");
    if(this.office === true) {
    console.log (`Employee:${this.Manager}`);
    }
    //returns Employee
}

getOffice () {
    console.log (`Office-Number: ${this.officeNumber}`)
}

}
