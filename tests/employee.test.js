const Employee = require("../lib/employee");

describe ("employee", () => {

    describe("Initialization", () => {
        //positive test
        it ("should create an object with name,id,and email", () =>{
            //arrange
            const dwight = {
                namex:'dwight',
                id: 3,
                email: 'paper@gmail.com',
                officeNumber: 867-9305
            }

            //act
           const employee = new employee('dwight',3,'paper@gmail.com');

            //Object properties are equal to what we expect them to be. 
            expect(employee.namex).toEqual(dwight.namex);
            expect(employee.id).toEqual(dwight.id);
            expect(employee.email).toEqual(dwight.email);
            expect(employee.officeNumber).toEqual(dwight.officeNumber);
        });
        
    });
});