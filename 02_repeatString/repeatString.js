const repeatString = function (str, num) {
	if (num === 0) return '';
	if (num < 0) return 'ERROR';
	if (str === '') return '';

	let finalStr = str;

	for (let i = 1; i < num; i++) {
		finalStr += str;
	}

	return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
