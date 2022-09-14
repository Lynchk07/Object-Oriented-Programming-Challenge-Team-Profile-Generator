const employee = require('./employee');

class engineer extends employee {
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

module.exports = engineer
