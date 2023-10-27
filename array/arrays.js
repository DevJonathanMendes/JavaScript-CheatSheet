// Arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0];                 // Acessa primeiro elemento (índice 0) do array.
primes.length;             // É 4: quantidade de elementos no array.
primes[primes.length - 1]; // É 7: o último elemento do array.
primes[4] = 9;             // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;            // Ou altera um elemento existente por meio de atribuição.
var empty = [];            // [] é um array vazio, sem qualquer elemento.


// Os arrays e objetos podem conter outros arrays e objetos:
var points = [ // Um array com 2 elementos.
	{ x: 0, y: 0 },    // Cada elemento é um objeto.
	{ x: 1, y: 1 }
];
var data = {            // Um objeto com 2 propriedades
	trial1: [[1, 2], [3, 4]], // O valor de cada propriedade é um array.
	trial2: [[2, 3], [4, 5]], // Os elementos dos arrays são arrays.
};