function rollDice(numFacesDice) {
	return Math.round(Math.random() * (numFacesDice - 1) + 1);
}

console.log(rollDice(9));