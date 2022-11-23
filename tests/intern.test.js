//completed
const Intern = require("../lib/intern")

describe ("intern", () => {

        //positive test
        it ("should create an object with name", () =>{
            //arrange
            const pambo = {
                name:'pam',
                id: 4,
                email: 'paperpam@gmail.com',
                school: 'Penn State'
            }

            //act
            const employee = new Intern('pam',4,'paperpam@gmail.com','Penn State');

            //Object properties are equal to what we expect them to be. 
            expect(employee.name).toEqual(pambo.name);
            
        });
        
    });
describe ("intern", () => {
        //positive test
        it ("should create an object with id", () =>{
            //arrange
            const pambo = {
                name:'pam',
                id: 4,
                email: 'paperpam@gmail.com',
                school: 'Penn State'
            }

            //act
            const employee = new Intern('pam',4,'paperpam@gmail.com','Penn State');

            //Object properties are equal to what we expect them to be. 
            
            expect(employee.id).toEqual(pambo.id);
        
        });
        
    });

describe ("intern", () => {
        //positive test
        it ("should create an object with school", () =>{
            //arrange
            const pambo = {
                name:'pam',
                id: 4,
                email: 'paperpam@gmail.com',
                school: 'Penn State'
            }

            //act
           const employee = new Intern('pam',4,'paperpam@gmail.com','Penn State');

            //Object properties are equal to what we expect them to be. 
            expect(employee.school).toEqual(pambo.school);
            
        });
        
    });

describe ("intern", () => {
    
        //positive test
        it ("should create an object with email", () =>{
            //arrange
            const pambo = {
                name:'pam',
                id: 4,
                email: 'paperpam@gmail.com',
                school: 'Penn State'
            }

            //act
            const employee = new Intern('pam',4,'paperpam@gmail.com','Penn State');

            //Object properties are equal to what we expect them to be. 
            expect(employee.email).toEqual(pambo.email);
            
        });
        
    });
