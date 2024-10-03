const fibonacci = function (num) {
	const number = Number(num);
	if (number < 0) return 'OOPS';
	if (number === 0) return 0;
	if (number === 1 || number === 2) return 1;

	let prev = 1,
		current = 1;

	for (let i = 3; i <= number; i++) {
		const next = prev + current;
		prev = current;
		current = next;
	}

	return current;
};

// Do not edit below this line
module.exports = fibonacci;
