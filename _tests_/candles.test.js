const {
    createRandomCandle
} = require("../candles");

const candle = require("../data/candles.json");


describe("createRandomCandle", () => {
    test("Should return a candle with an Id.", () => {
      const id = true;
      const actual = createRandomCandle(candlesData, id);
      const expected = 
      expect(actual).toStrictEqual(expected);

    });
  
    test("Should return 'null' if no candle is created.", () => {
      const id = false
      const actual = createRandomCandle(candlesData, id);
      const expected = null;
      expect(actual).toStrictEqual(expected);
    });
  });