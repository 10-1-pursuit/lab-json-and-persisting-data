const { createHackerForum, randomCreateHackerForum } = require('../hackerForum');

describe('createHackerForum()', () => {
  it('should create one object', () => {
    const actual = typeof createHackerForum() === 'object'; 
    const expected = true;
    expect(actual).toEqual(expected);
  });
});

describe('randomCreateHackerForum()', () => {
  it('should create an array of objects according to the number passed in', () => {
    const input = 2;
    const actual = randomCreateHackerForum(input).length;
    const expected = input; 
    expect(actual).toEqual(expected);
  });
});