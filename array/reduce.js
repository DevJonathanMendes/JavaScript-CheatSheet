// Usamos o reduce() quando precisamos reduzir o array à um valor.
// O método reduce() executa uma função reducer para cada elemento do array, resultando num único valor de retorno.


const numbers = [1, 2, 3];

const newNumbers = numbers.reduce((accumulator, item,) => {
	accumulator + item;
}, 0); // O segundo parâmetro (opcional) é o valor inicial do accumulator.

const phaseScores = [
	{ name: 'Vinicius Costa', score: 337 },
	{ name: 'Roger Melo', score: 43 },
	{ name: 'Alfredo Braga', score: 234 },
	{ name: 'Pedro H. Silva', score: 261 },
	{ name: 'Ana Paula Rocha', score: 491 },
	{ name: 'Vinicius Costa', score: 167 },
	{ name: 'Roger Melo', score: 137 },
	{ name: 'Alfredo Braga', score: 135 },
	{ name: 'Ana Paula Rocha', score: 359 },
	{ name: 'Pedro H. Silva', score: 133 }
];

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
	if (phaseScore.name === "Roger Melo") {
		return accumulator + phaseScore.score;
	};

	return accumulator;
}, 0);