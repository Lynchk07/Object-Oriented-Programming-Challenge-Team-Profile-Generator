const Employee = require ('./employee');

class Engineer extends Employee {
    contructor (namex,id,email,github) {
        this.github = github;
        super(namex,id,email);
    }


getRole() {
    return 'Engineer'
    
    //returns Engineer
}

getGitHub(){
    return this.github
}
