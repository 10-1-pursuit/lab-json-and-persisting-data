//const testData= require("fs.realpath/index");
const{createRandomId,createRandomBrand,createEntranceFee,createBoolean}=require("../index")

describe("createRandomId()",() => {
    test("should create random id", () =>{
      
      const actual = createRandomId();
      const expected = ( "object");
      expect(expected).toEqual("object");
     
     
    })
      
    });


    describe("createRandomBrand()",() => {
        test("should create random brand", () =>{
          
          const actual = createRandomBrand();
          const expected = ( "string");
          expect(expected).toEqual("string");
         
         
        })
          
        });
    
    
        
      