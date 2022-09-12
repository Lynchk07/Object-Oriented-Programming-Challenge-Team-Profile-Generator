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
            name: 'Team Manager',
            message: 'What is your team managers name?',
            
        },
        {
            type: 'input',
            name: 'employee_number',
            message: 'what is the team managers employee number?',
            
        },
        {
            type: 'input',
            name: 'employee_email',
            message: 'what is the team managers employee email?',
            
            
        },
        {
            type: 'input',
            name: 'github_username',
            message: 'what is the the github user name?',
            
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
