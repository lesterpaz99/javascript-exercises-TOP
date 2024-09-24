const reverseString = function (strValue) {
	if (strValue === '') return '';

	const splittedStr = strValue.split('');
	return splittedStr.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
