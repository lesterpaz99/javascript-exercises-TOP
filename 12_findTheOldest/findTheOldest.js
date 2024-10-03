const findTheOldest = function (peopleArr) {
	const ages = peopleArr.map((person) => ({
		name: person.name,
		age: person.yearOfDeath
			? person.yearOfDeath - person.yearOfBirth
			: new Date().getFullYear() - person.yearOfBirth,
	}));

	const sortedAges = ages.sort((a, b) => a.age - b.age);
	return sortedAges.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
