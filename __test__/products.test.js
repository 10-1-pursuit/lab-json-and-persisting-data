const {createRandomProduct, randomProductFactory} = require("../products")

const products = require("../data/products.json")

let productListLength = products.length

describe("createRandomProduct", () => {
    test("Valid value for keys", () => {
      expect(products.length).toStrictEqual(1)
      });
});
   
    describe("randomProductFactory ", () => {
        test("Checks to see if number is added ", () => {
                expect(randomProductFactory("ten")).toStrictEqual([]);         
            });
          });
 
  