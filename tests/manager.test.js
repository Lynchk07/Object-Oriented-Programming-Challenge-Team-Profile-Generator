const employee = require("../lib/employee")

const manager = require("../lib/manager")

describe ("manager", () => {
    
    describe("Initialization", () => {
        //positive test
        it ("should create an object with name,id,school,and email", () =>{
            //arrange
            const jim = {
                namex:'jim',
                id: 2,
                email: 'manager@gmail.com',
                officeNumber: '867-9305'
            }

            //act
           const employee = new employee('jim',2,'manager@gmail.com');

            //Object properties are equal to what we expect them to be. 
            expect(employee.namex).toEqual(jim.namex);
            expect(employee.id).toEqual(jim.id);
            expect(employee.email).toEqual(jim.email);
            expect(employee.officeNumber).toEqual(jim.github);
        });
        
    });
});