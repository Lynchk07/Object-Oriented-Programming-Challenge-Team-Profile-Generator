// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const index = require('../index.js');


//employee class 
class Employee {
    constructor(namex,id,email) {
        this.namex = namex;
        this.id = id;
        this.email = email;

    }

    // returns Name
    getName() {
        return this.namex
    }

    //returns ID
    getID() {
        return this.id
    }

    //returns email 
    getEmail() {
        return this.email
    }

    
    getRole() {
        return 'Employee'
        
        //returns Employee
}

}
module.exports = Employee;
