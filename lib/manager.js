const employee = require('./employee');

class manager extends employee {
    constructor(namex,id,email,officeNumber) {
        super(namex,id,email);
        this.officeNumber = officeNumber;
        
    };

    getOffice() {
        console.log(this.officeNumber);
        return this.officeNumber;
    };

    getRole() {
        return 'manager';
    //returns Manager
    };

}
module.exports = manager