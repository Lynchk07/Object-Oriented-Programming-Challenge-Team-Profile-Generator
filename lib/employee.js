// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const index = require('../index.js');

const generateHTML = require("./index.html");

//employee class 
class Employee {
    constructor(namex,id,email) {
        this.namex = namex;
        this.id = id;
        this.email = email;

    }

    // returns Name
    getName() {
        console.log (`Name:${this.name}`);
    }

    //returns ID
    getID() {
        console.log (`ID: ${this.id}`);
    }

    //returns email 
    getEmail() {
        console.log (`Email:${this.email}`);
    }

    
    getRole() {
        const Employee = new Employee(namex,email);
        console.log (`Employee:${this.getName}\n ID:${this.getID}\n Email:${this.getEmail}\n`);
        //returns Employee
}

}
module.exports = Employee;
