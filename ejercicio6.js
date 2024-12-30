function swap(array, index_1, index_2) {
	let aux = array[index_1];

	array[index_1] = array[index_2];
	array[index_2] = aux;
	return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(swap(fantasticFour, 0, 2));
console.log(swap(fantasticFour, 1, 3));