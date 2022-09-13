const Employee = require ('./employee');

class Intern extends Employee {
    contructor (namex,id,email,school) {
        this.school = school;
        super(namex,id,email);
    };

    getSchool(){
        console.log(this.school);
        return this.school;
    };

    getRole() {
        return 'Intern';
    //returns Employee
    };



}