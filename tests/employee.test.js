const Employee = require("../lib/employee");
const employee = require("../lib/employee");

//create a test suite for Employee 

describe ("employee", () => {
    
        //testing name 
        it ("testing employee name", () => {
            //arrange
            const dwight = {
                name:'dwight',
                id: 3,
                email: 'dwightisaright@gmail.com',
                github: 'DwightFARM'
            }

            const employee = new Employee('dwight',3,'dwightisaright@gmail.com','DwightFARM');

            //Object properties are equal to what we expect them to be. 
            expect(employee.name).toEqual(dwight.name);
          
        });
        
    });
    describe ("employee", () => {

        //testing name 
        it ("testing employee id", () => {
            //arrange
            const dwight = {
                name:'dwight',
                id: 3,
                email: 'dwightisaright@gmail.com',
                github: 'DwightFARM'
            }

            const employee = new Employee('dwight',3,'dwightisaright@gmail.com','DwightFARM');

            //Object properties are equal to what we expect them to be. 
            expect(employee.id).toEqual(dwight.id);
          
           
        });
        
    });
    describe ("employee", () => {

        //testing name 
        it ("testing employee email", () => {
            //arrange
            const dwight = {
                name:'dwight',
                id: 3,
                email: 'dwightisaright@gmail.com',
                github: 'DwightFARM'
            }

            const employee = new Employee('dwight',3,'dwightisaright@gmail.com','DwightFARM');

            //Object properties are equal to what we expect them to be. 
            expect(employee.email).toEqual(dwight.email);
          
        });
        
    });
   
