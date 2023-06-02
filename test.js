const faker = require("../lab-json-and-persisting-data/index");

describe('randomUser', () => {
  let randomUser;

  beforeEach(() => {
    randomUser = {
      hackerName: `${faker.hacker.adjective()} ${faker.hacker.abbreviation()} ${faker.animal.type()}`,
      messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,
      messageContent: faker.lorem.paragraph(),
      isResolved: faker.datatype.boolean(),
      messageResponse: faker.hacker.phrase(),
      date: faker.date.recent(),
      numberOfUpvotes: faker.datatype.number()
    };
  });

  it('should have a valid hackerName', () => {
    expect(randomUser.hackerName).toBeDefined();
    expect(typeof randomUser.hackerName).toBe('string');
  });

  it('should have a valid messageTitle', () => {
    expect(randomUser.messageTitle).toBeDefined();
    expect(typeof randomUser.messageTitle).toBe('string');
  });

  it('should have a valid messageContent', () => {
    expect(randomUser.messageContent).toBeDefined();
    expect(typeof randomUser.messageContent).toBe('string');
  });

  it('should have a valid isResolved', () => {
    expect(randomUser.isResolved).toBeDefined();
    expect(typeof randomUser.isResolved).toBe('boolean');
  });

  it('should have a valid messageResponse', () => {
    expect(randomUser.messageResponse).toBeDefined();
    expect(typeof randomUser.messageResponse).toBe('string');
  });

  it('should have a valid date', () => {
    expect(randomUser.date).toBeDefined();
    expect(randomUser.date instanceof Date).toBe(true);
  });

  it('should have a valid numberOfUpvotes', () => {
    expect(randomUser.numberOfUpvotes).toBeDefined();
    expect(typeof randomUser.numberOfUpvotes).toBe('number');
  });
});
