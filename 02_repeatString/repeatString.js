const repeatString = function (str, num) {
	if (num === 0 || str === '') return '';
	if (num < 0) return 'ERROR';

	let finalStr = str;
	for (let i = 1; i < num; i++) {
		finalStr += str;
	}

	return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
