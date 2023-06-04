const { randomProductFactory, createRandomProduct } = require('./src/products');
const { writeJSONFile, readJSONFile } = require('./src/helpers');

function run() {
	let products = readJSONFile('./data', 'products.json');
	console.log(products);
	if (process.argv[3]) {
		products.push(...randomProductFactory(process.argv[3]));
	} else {
		products.push(createRandomProduct());
	}
	writeJSONFile('./data', 'products.json', products);
}

run();
