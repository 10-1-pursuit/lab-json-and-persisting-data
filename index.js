const { faker } = require("@faker-js/faker");

function createRandomId() {
    const createId = {
      _id: faker.datatype.uuid(),
      
      }
      //if(process.argv[2]=="crId"){
      console.log( createId);
      //}
    };

  
createRandomId();

function createRandomBrand(){
    const createBrand={
        brand: faker.company.name()


    }
   
        console.log( createBrand)


 


};
createRandomBrand();

function createBoolean(){
    const createBLean= {
       
        locatedWithin5Miles: faker.datatype.boolean()
        }
    
   return createBLean
    
}
createBoolean()

function createEntranceFee(){

    entranceFee={
        entrancePriceMember: faker.commerce.price(10, 100, 2, "$"),
        entracePriceNonMember: faker.commerce.price(100, 200, 2, "$"),


    }
console.log( entranceFee)
}
createEntranceFee();




const commandLine={
    _id: faker.datatype.uuid(),
    brand: faker.company.name(),
    locatedWithin5Miles: faker.datatype.boolean(),
    entranceFee: {
        entrancePriceMember: faker.commerce.price(10, 100, 2, "$"),
        entracePriceNonMember: faker.commerce.price(100, 200, 2, "$"),
      

    }}

function idCommandLine(){
    
        if(process.argv[2]==="createId"){
            return commandLine._id
        }
       console.log( commandLine)


}
idCommandLine()

function brandCommandLine(){
    
    if(process.argv[3]==="createBrand"){
        console.log(commandLine.brand)

    }

}
brandCommandLine()

function booleanCommandLine(){
    
    if(process.argv[4]==="createBoolean"){
        console.log((commandLine.locatedWithin5Miles))


    }
}
booleanCommandLine()

        
function entranceCommandLine(){
    if(process.argv[5]==="createEntranceFee"){
        console.log(commandLine.entranceFee)

    }
}
entranceCommandLine()
        


    
    



 module.exports={createRandomId,createRandomBrand,createBoolean,createEntranceFee}