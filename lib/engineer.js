const Employee = require ('./employee');

class Engineer extends Employee {
    contructor (namex,id,email,github) {
        this.github = github;
        super(namex,id,email);
    }

    getGitHub(){
        console.log(this.github);
        return this.github;
    };

    getRole() {
        return 'Engineer';
        //returns Engineer
    };
}
