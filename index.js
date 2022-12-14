
// NPM inquirer
const inquirer = require('inquirer');
//file 
const fs = require('fs');
// requires manager.js
const Manager = require('./lib/manager');
//requires engineer.js
const Engineer = require('./lib/engineer');
// requires intern.js 
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');

// Location where the html will be rendered from
const writeToHTML = require("./utils/writetoHtml");

//employee array - used to pull from later 
let employeeCards = [];



// create manager asking for the criteria to create a manager. name, id, email and office number makes the user a manager. 

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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

        }

    ])

        //answers for manager questions creates a new manager object. 
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

            //adds employee to the array of data for all employees but categorizes as manager. 
            employeeCards.push(manager);

            logNextEmp();
        });
}
//prompt questions for next employee answers 
const logNextEmp = () => {
    inquirer.prompt([

        {
            type: 'list',
            name: 'addEmployee',
            message: 'What type of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'I do not want to add another Employee'],

        },
    ]).then((answers) => {
    // adds employees to data based on answer for create engineer, create internship, create HTML page.
            if (answers.addEmployee === 'Engineer') {
                createEng();
            } else if (answers.addEmployee === 'Intern') {
                createInt();
            } else {
                fs.writeFile('./dist/index.html', writeToHTML(employeeCards), (err) => err ? console.log(err) : console.log('success!'));
            }
        })
};

//Prompt questions to create a new Engineer 

const createEng = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        // add intern to employee profile array data
        employeeCards.push(engineer);
        logNextEmp();
    });
}

//prompt questions to create a new intern.

const createInt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
    ])

        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            // add intern to employee profile array data
            employeeCards.push(intern);
            logNextEmp();
        });
};

// // // function to write HTML - need help here

function createHTML() {

   return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <title> EMPLOYEE Document</title>
    </head>
    <body>
        <!--make a clickable link in html file-->

        <a href="mailto:" target="_blank"></a>
        <!--to do - - bootstrap CDN-->
    
        <div class="employee"></div>
        
    </body>
    </html>`
};


//Initialize 
function init() {
    createManager();
    // 
};

init ();