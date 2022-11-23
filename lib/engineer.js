const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name,id,email,github) {
        super(name,id,email);
        this.github = github;
    };  

    getGitHub() {
        console.log(this.github);
        return this.github;
    };

    getRole () {
        return 'engineer';
        //returns Engineer
    };


}

module.exports = Engineer
