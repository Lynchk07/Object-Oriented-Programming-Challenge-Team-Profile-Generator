const inquirer = require('inquirer');

const fs = require('fs');



// TODO: Create an array of questions for user input
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
        {
            type: 'list',
            name: 'Team Manager',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer','Intern'],
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the employee number?',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the employee email?',
            
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'what is your github username?',
            
            
        },
        {
            type: 'input',
            name: 'school',
            message: 'Are you a student, if so answer what school you are attending?',
            
            
        },

]);



