const { faker } = require("@faker-js/faker");

function createRandomId() {
    const createId = {
      _id: faker.datatype.uuid(),
      
      }
      if(process.argv[2]==="crId"){
      return createId;
      }
    };

  
console.log(createRandomId());

function createRandomBrand(){
    const createBrand={
        brand: faker.company.name()


    }
    if(process.argv[2]==="crB"){
        return createBrand


    }


};
//console.log(createRandomBrand())

function createBoolean(){
    const createBLean= {
       
        locatedWithin5Miles: faker.datatype.boolean()
        }
    
        if(process.argv[2]==="cbLFunc"){
            return createBLean
    }
    
}
//console.log(createBoolean())

function createEntranceFee(){

    entranceFee= {
        entrancePriceMember: faker.commerce.price(10, 100, 2, "$"),
        entracePriceNonMember: faker.commerce.price(100, 200, 2, "$"),


    }
    return entranceFee
}
//console.log(createEntranceFee())







 module.exports={createRandomId,createRandomBrand,createBoolean,createEntranceFee}