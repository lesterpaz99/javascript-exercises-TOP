const removeFromArray = function (arr, ...itemsToDelete) {
	if (itemsToDelete.length === 1) {
		const finalArr = arr.filter((item) => {
			return item !== itemsToDelete[0];
		});
		return finalArr;
	}

	const finalArr = [...arr];
	itemsToDelete.forEach((itemToDelete) => {
		const itemIndex = finalArr.findIndex((item) => item === itemToDelete);

		if (itemIndex !== -1) {
			finalArr.splice(itemIndex, 1);
		}
	});

	return finalArr;
};
// Do not edit below this line
module.exports = removeFromArray;
