const {
	createRandomProduct,
	randomProductFactory,
} = require('../src/products');

const productKeys = [
	'_id',
	'name',
	'description',
	'brand',
	'price',
	'currency',
	'inStock',
	'attributes',
];

describe('createRandomProduct()', () => {
	it('should create one object', () => {
		const actual = typeof createRandomProduct() === 'object';
		const expected = true;
		expect(actual).toEqual(expected);
	});
	it('object should have all correct keys', () => {
		const actual = Object.keys(createRandomProduct());
		const expected = productKeys;
		expect(actual).toStrictEqual(expected);
	});
});

describe('randomProductFactory()', () => {
	it('should create an array of objects according to the number passed in', () => {
		const input = 5;
		const actual = randomProductFactory(input).length;
		const expected = 5;
		expect(actual).toEqual(expected);
	});
});

console.log(productKeys);
