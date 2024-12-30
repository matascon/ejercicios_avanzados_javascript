function findArrayIndex(array, text) {
	let position;
	
	for (position = 0; position < array.length; position++) {
		if (array[position] === text) {
			return position;
		}
	}
	position = -1;
	return position;
}

function removeltem(array, textToDelet) {
	array.splice(findArrayIndex(array, textToDelet), 1);
	return array;
}

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, 'Obi-Wan'));
console.log(findArrayIndex(mainCharacters, 'Luke'));
console.log(findArrayIndex(mainCharacters, 'Rey'));
console.log(findArrayIndex(mainCharacters, 'ObiWan'));


console.log(removeltem(mainCharacters, 'Leia'));
console.log(removeltem(mainCharacters, 'Rey'));