const sumAll = function (num1, num2) {
	const numberArr = [num1, num2];

	const isInvalidNumber = (x) =>
		Math.sign(x) === -1 || !Number.isInteger(x) || isNaN(x);

	if (numberArr.some(isInvalidNumber)) {
		return 'ERROR';
	}
	const [value1, value2] = numberArr.sort((a, b) => a - b);

	let numbers = [];
	for (let i = value1; i <= value2; i++) {
		numbers.push(i);
	}

	return numbers.reduce((prev, current) => prev + current);
};

// Do not edit below this line
module.exports = sumAll;
