const palindromes = function (str) {
	let regex = /[\W]/g;
	const formattedStr = str.toLowerCase().replaceAll(regex, '');
	const arr = formattedStr.split('');
	const reversedArr = [...arr].reverse();

	return arr.every((item, i) => item === reversedArr[i]);
};

// Do not edit below this line
module.exports = palindromes;
