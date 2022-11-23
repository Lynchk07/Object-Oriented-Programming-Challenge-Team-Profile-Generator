//employee class 
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;

    };

    // returns Name
    getName() {
        console.log(this.name);
        return this.name;
    };

    //returns ID
    getID() {
        console.log(this.id);
        return this.id;
    };

    //returns email 
    getEmail() {
        console.log(this.email);
        return this.email;
    };

    
    getRole() {
        return 'employee';
        //returns Employee
    };

}
module.exports = Employee;
