const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
	return arr.reduce((total, current) => total * current, 1);
};

const power = function (num1, num2) {
	return num1 ** num2;
};

const factorial = function (value) {
	if (value === 0) return 1;

	const arr = [];

	let i = 1;
	while (value >= i) {
		arr.push(i);
		i++;
	}

	return arr.reduce((total, current) => total * current, 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
