const convertToCelsius = function (gradesInF) {
	const gradesConverted = (gradesInF - 32) * (5 / 9);
	const roundedResult = (Math.round(gradesConverted * 10) / 10).toFixed(1);
	return Number(roundedResult);
};

const convertToFahrenheit = function (gradesInC) {
	const gradesConverted = gradesInC * (9 / 5) + 32;
	const roundedResult = (Math.round(gradesConverted * 10) / 10).toFixed(1);
	return Number(roundedResult);
};
// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
