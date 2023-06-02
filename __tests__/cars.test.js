const cars = require("../data/cars.json")
const {findNameOfKeysInArr, getPriceOfCar} = require("../src/cars")

describe("findNameOfKeysInArr()", () => {
    test("Return name of keys in array.", () => {
      const actual = findNameOfKeysInArr(cars);
      const expected = "name,vin,color,fuel,type,carsSold,inStock,price,currency";
      expect(actual).toStrictEqual(expected);
    });
  });


describe("getPriceOfCar()", () => {
    test("Return price of car with given name.", () => {
      const actual = getPriceOfCar(cars, "Maserati Durango");
      const expected = "$80854.00";
      expect(actual).toBe(expected);
    });
  });