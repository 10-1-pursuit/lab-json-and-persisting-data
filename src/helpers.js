const { readFileSync, writeFileSync } = require('node:fs');

function readJSONFile(path, fileName) {
	const collection = readFileSync(`${path}/${fileName}`, 'utf-8');

	// Is it an empty JSON file or not
	return collection ? JSON.parse(collection) : [];
}

function writeJSONFile(path, fileName, data) {
	data = JSON.stringify(data);

	return writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
}

module.exports = {
	readJSONFile,
	writeJSONFile,
};
