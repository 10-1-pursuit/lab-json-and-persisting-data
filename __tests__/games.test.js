const gamesData = require("../games.js");
const { randomVideoGameGenerator, randomGameFactory } = require("../games.js")

describe("randomVideoGameGenerator", () => {
    test("Should generate an object with various key-value pairs for a video game", () => {
        const actual = randomVideoGameGenerator();
        const expected = "";
        expect(actual).toBe(expected);
    });
});