const Employee = require('./employee');

class Intern extends Employee {
    constructor (namex,id,email,school) {
        super(namex,id,email);
        this.school = school;
        
    };

    getSchool() {
        console.log(this.school);
        return this.school;
    };

    getRole() {
        
        return 'intern';
    //returns Employee
    };
}

module.exports = Intern