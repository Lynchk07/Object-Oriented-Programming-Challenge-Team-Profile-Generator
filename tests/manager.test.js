const Employee = require("../lib/employee")

const Manager = require("../lib/manager")

describe ("manager", () => {
    

        //positive test
        it ("should create an object with name", () =>{
            //arrange
            const jim = {
                name:'jim',
                id: 2,
                email: 'manager@gmail.com',
                officeNumber: '6569'
            }

            //act
            const employee = new Manager('jim',2,'manager@gmail.com',6569);

            //Object properties are equal to what we expect them to be. 
            expect(employee.name).toEqual(jim.name);
            
        });
        
    });

describe ("manager", () => {
    

        //positive test
        it ("should create an object with id", () =>{
            //arrange
            const jim = {
                name:'jim',
                id: 2,
                email: 'manager@gmail.com',
                officeNumber: '6569'
            }

            //act
            const employee = new Manager('jim',2,'manager@gmail.com',6569);

            //Object properties are equal to what we expect them to be. 
           
            expect(employee.id).toEqual(jim.id);
           
        });
        
    });

describe ("manager", () => {
    

        //positive test
        it ("should create an object with email", () =>{
            //arrange
            const jim = {
                name:'jim',
                id: 2,
                email: 'manager@gmail.com',
                officeNumber: '6569'
            }

            //act
            const employee = new Manager('jim',2,'manager@gmail.com',6569);

            //Object properties are equal to what we expect them to be. 
            expect(employee.email).toEqual(jim.email);
           
        });
        
    });
describe ("manager", () => {
    

        //positive test
        it ("should create an object with Office Number ", () =>{
            //arrange
            const jim = {
                name:'jim',
                id: 2,
                email: 'manager@gmail.com',
                officeNumber: 6569
            }

            //act
           const employee = new Manager('jim',2,'manager@gmail.com',6569);

            //Object properties are equal to what we expect them to be. 
        
            expect(employee.officeNumber).toEqual(jim.officeNumber);
        });
        
    });

