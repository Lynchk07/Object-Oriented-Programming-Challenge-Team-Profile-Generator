
// NPM inquirer
const inquirer = require('inquirer');
//file 
const fs = require('fs');
// requires manager.js
const Manager = require('.lib/manager');
//requires engineer.js
const Engineer = require('.lib/engineer');
// requires intern.js 
const Intern = require('./lib/intern');

//employee array - used to pull from later 
let employeeData = [];

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
    .then ((answers)=> {
        const manager = new Manager(answers.namex,answers.id,answers.email,answers.officeNumber);
        //adds employee to the array of data for all employees but categorizes as manager. 
        employeeData.push(manager);

        logNextEmp ();
    });


const logNextEmp = ()=> {
    inquirer.prompt ([
        {
            {
                type: 'input',
                name: 'addEmployee',
                message: 'What type of employee would you like to add next?',
                choices: ['Engineer','Intern', 'I do not want to add another Employee'],
                
            },
    ]);
// adds employees to data based on answer for create engineer, create internship, create HTML page.
    .then ((answers) => {
        if(answers.add === " Add the Engineer to employee profile") {
            createEng();
        }else if(answers.add === 'Add an intern to employee profile') {
            createInt();
        }else {
            const generateHtml = generateEmpHTML (employees);
            createHtml(generateHtml);
        }
    })
};

//Prompt questions to create a new Engineer 
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

//prompt questions to create a new intern. 
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
            name: 'school',
            message: "what is the intern's school?",
               
        },
    ]);

    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email,answers.school);

    });
}









