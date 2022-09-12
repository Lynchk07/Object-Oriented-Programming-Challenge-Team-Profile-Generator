const inquirer = require('inquirer');

const fs = require('fs');

const employee = require('./lib/employee')

const generateHTML = require("..Object-Oriented-Programming-Challenge-Team-Profile-Generator/src/index.html")

//fake employee input for testing
const fakeEmp = [
    {
        name: "Dwight",
        id: 20,
        email: "dwight@gmail.com",
        name: "dwightfarm07",
    },
    {
        name: "Michael",
        id: 30,
        email: "michael@gmail.com",
        name: "Manager",
        officeNumber: 205,
    },
    {
        name: "Pam",
        id: 40,
        email: "pam@gmail.com",
        school: "PennState",
    },
    {
        name: "Jim",
        id: 50,
        email: "jim@gmail.com",
        github: "Jimbo07",
    },
];


// TODO: Create an array of questions for user input
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
            
        },
        {
            type: 'List',
            name: 'Team Manager',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer','Intern',"I don't want to add any employee's"]
            
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
            message: 'what is the the github user name?',
            
        },
        {
            type: 'list',
            name: 'school',
            message: 'Are you currently a student?',
            choice: ["yes","no"]
            
        },

        
// to take answers and write the file.
    ]).then(answers => {

    fs.writeFile("./utils/index.html",'answers', 
    
    (err) => {
        if(err) console.error(err)
      
        console.log("success")
      }
    
    
    )});

// TODO: Create a function to initialize app
function init() {

}

//write file to HTML
function endGame (){
    let employeCard = ["fakeEmp"]
    for (let i = 0; i < fakeEmp.length; i++) {
        
        
    }
}

// Function call to initialize app
init();
