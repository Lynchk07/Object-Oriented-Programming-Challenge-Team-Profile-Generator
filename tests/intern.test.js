const intern = require("../lib/intern")

describe ("intern", () => {
    describe("Initialization", () => {
        //positive test
        it ("should create an object with name,id,school,and email", () =>{
            //arrange
            const pambo = {
                namex:'pam',
                id: 4,
                email: 'paperpam@gmail.com',
                school: 'Penn State'
            }

            //act
           const employee = new employee('Pam',4,'paperpam@gmail.com');

            //Object properties are equal to what we expect them to be. 
            expect(employee.namex).toEqual(pambo.namex);
            expect(employee.id).toEqual(pambo.id);
            expect(employee.email).toEqual(pambo.email);
            expect(employee.officeNumber).toEqual(pambo.github);
        });
        
    });
});