const Engineer = require("../lib/engineer")

describe ("engineer", () => {

        
        it ("should create an object with name", () =>{
            //arrange
            const michael = {
                    name:'michael',
                    id: 6,
                    email: 'paper2@gmail.com',
                    github: 'michaelScoot'
                
                    }
        
                    //act
            const employee = new Engineer('michael',6,'paper1@gmail.com','michaelScoot');
        
                    //Object properties are equal to what we expect them to be. 
            expect(employee.name).toEqual(michael.name);
                
            });
                
        });

describe ("engineer", () => {
        
        it ("should create an object with id", () =>{
            //arrange
            const michael = {
                    name:'michael',
                    id: 6,
                    email: 'paper2@gmail.com',
                    github: 'michaelScoot'
                    }
        
                    //act
            const employee = new Engineer('michael',6,'paper1@gmail.com','michaelScoot');
        
                    //Object properties are equal to what we expect them to be. 
            expect(employee.id).toEqual(michael.id);
                
            });
                
        });

describe ("engineer", () => {
        
        //testing name 
        it ("testing engineer github", () => {
            //arrange
            const michael = {
                name:'michael',
                id: 6,
                email: 'paper2@gmail.com',
                github: 'michaelScoot'
                }
            //act
            const employee = new Engineer('michael',6,'paper1@gmail.com','michaelScoot');

            //Object properties are equal to what we expect them to be. 
            expect(employee.github).toEqual(michael.github);
        });
        
    });


