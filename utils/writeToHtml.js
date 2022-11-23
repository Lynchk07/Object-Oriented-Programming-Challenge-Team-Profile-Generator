
// JS functions to create new cards for each member of the team.import * as fs from 'fs';


// manager card
function newManager(info) {
    let managerEmployee = [];

    info.forEach(manager => {
        managerEmployee.push(`
    <div class="card shadow m-2 col-3">
    <div class="card-header bg-manager ml-0 mt-1 rounded">
        <h2 class= "card-title">${manager.name}</h2>
        <h5 class="card-text"><i class="fas fa-coffee"></i>&nbsp; Manager</h5>
    </div>
    <div class="card-body bg-light my-2">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`)
    });
    return managerEmployee.join("");
}


// engineer cards
function newEngineer(info) {
    let engineerEmployee = [];

    info.forEach(engineer => {
        engineerEmployee.push(`
        <div class="card shadow m-2 col-3">
        <div class="card-header bg-engineer ml-0 mt-1 rounded">
            <h2 class= "card-title">${engineer.name}</h2>
            <h5 class="card-text"><i class="fas fa-cogs"></i>&nbsp; Engineer</h5>
        </div>
        <div class="card-body bg-light my-2">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    </div>`);
    });
    return engineerEmployee.join("");
}

// intern cards
function newIntern(info) {
    let newInternEmployee = [];

    info.forEach(intern => {
        newInternEmployee.push(`
        <div class="card shadow m-2 col-3">
        <div class="card-header bg-intern ml-0 mt-1 rounded">
            <h2 class= "card-title">${intern.name}</h2>
            <h5 class="card-text"><i class="fas fa-graduation-cap"></i>&nbsp; Intern</h5>
        </div>
        <div class="card-body bg-light my-2">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`);
    });
    return newInternEmployee.join("");
}

// function to create main html page
function writeToHTML(info) {

console.table(info)

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
               <link rel="stylesheet" href="../src/style.css">
        <title>This Is The Team!</title>
    </head>
    <body>
        
        <nav class="navbar navbar-dark bg-warning text-center">
        <span class="navbar-brand mb-0 w-100 h1 text-white">My Team</span>
    </nav>
            <main class="container my-5">
            <div class="row justify-content-center">
            ${newManager(info.filter(member => member.getRole() === "manager"))}
            ${newEngineer(info.filter(member => member.getRole() === "engineer"))}
            ${newIntern(info.filter(member => member.getRole() === "intern"))}
            </div>
            </main>
       
    </body>
    </html>`
}

// EXPORTING
module.exports = writeToHTML;