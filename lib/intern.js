const Employee = require ('./employee');

class Intern extends Employee {
    contructor (namex,id,email,school) {
        this.school = school;
        super(namex,id,email);
    }


getRole() {
    return 'Intern'
    //returns Employee
}

getSchool(){
    return this.school
}

}