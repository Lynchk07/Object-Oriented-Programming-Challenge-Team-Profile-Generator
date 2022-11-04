const Employee = require('./employee');

class Engineer extends Employee {
    constructor (namex,id,email,github) {
        super(namex,id,email);
        this.github = github;
    };  

    getGitHub() {
        console.log(this.github);
        return this.github;
    };

    getRole () {
        return 'Engineer';
        //returns Engineer
    };


}

module.exports = Engineer
