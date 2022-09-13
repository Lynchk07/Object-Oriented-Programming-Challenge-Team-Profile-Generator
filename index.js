
// NPM inquirer
const inquirer = require('inquirer');
//file 
const fs = require('fs');

const Manager = require('.lib/manager');

const Engineer = require('.lib/engineer');

const Intern = require('./lib/intern');

// create manager asking for the criteria to create a manager. name, id, email and office number makes the user a manager. 
const createManager = () => {
inquirer.prompt ([
        {
            type: 'input',
            name: 'namex',
            message: 'What is your team managers name?',
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team managers id?',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team managers email?',
            
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your team managers office number?',
            
        },
    
    ]);
//answers for manager questions creates a new manager object. 
    .then ((answers)=>{
        const manager = new Manager(answers.namex,answers.id,answers.email,answers.officeNumber)
    })
}

//Prompt quesitons to create a new Engineer 
const createEng = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'namex',
            message: "What is the Engineer's name?",
            
        },
        {
            type: 'input',
            name: 'id',
            message: "what is the engineer's ID?",
            
            
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the enginner's email?",
            
            
        },
        {
            type: 'input',
            name: 'github',
            message: "what is the engineer's github username?",
               
        },
    ]);
}


const createInt = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'namex',
            message: "What is the intern's name?",
            
        },
        {
            type: 'input',
            name: 'id',
            message: "what is the intern's ID?",
            
            
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the intern's email?",
            
            
        },
        {
            type: 'input',
            name: 'schoo',
            message: "what is the intern's school?",
               
        },
    

    ]);
}









