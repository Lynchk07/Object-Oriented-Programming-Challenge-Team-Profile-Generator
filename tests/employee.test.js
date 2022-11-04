const Employee = require("../lib/employee");
const employee = require("../lib/employee");

//create a test suite for Employee 
describe ("employee", () => {

        //testing name 
        it ("testing employee name", () => {
            //arrange
            const name = 'Dwight';
            const employee = new Employee(name);
            expect

            //Object properties are equal to what we expect them to be. 
            expect(employee.namex).toEqual(dwight.namex);
            // expect(employee.id).toEqual(dwight.id);
            // expect(employee.email).toEqual(dwight.email);
            // expect(employee.officeNumber).toEqual(dwight.officeNumber);
        });
        
    });
