//employee class 
class Employee {
    constructor(namex,id,email) {
        this.namex = namex;
        this.id = id;
        this.email = email;

    };

    // returns Name
    getName() {
        console.log(this.namex);
        return this.namex;
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
