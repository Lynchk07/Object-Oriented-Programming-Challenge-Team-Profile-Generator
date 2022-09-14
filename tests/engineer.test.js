const Engineer = require("../lib/engineer")

describe ("engineer", () => {
    describe("Initialization", () => {
        
                it ("should create an object with name,id,github repo,and email", () =>{
                    //arrange
                    const michael = {
                        namex:'michael',
                        id: 6,
                        email: 'paper2@gmail.com',
                        github: 'michaelScoot'
                    }
        
                    //act
                   const employee = new employee('michael',6,'paper1@gmail.com');
        
                    //Object properties are equal to what we expect them to be. 
                    expect(employee.namex).toEqual(michael.namex);
                    expect(employee.id).toEqual(michael.id);
                    expect(employee.email).toEqual(michael.email);
                    expect(employee.officeNumber).toEqual(michael.github);
                });
                
            });
        });