// Usamos o map() quando precisamos obter um array com a mesma quantidade de itens e transformados do array original.
// O método map chama a função callback recebida por parâmetro para cada elemento do Array original 
// e constrói um novo array com base nos retornos de cada chamada.

const numbers = [1, 2, 3];

// Sintaxe
const newNumbers = numbers.map((element, index, array) => element * 2);

const products = [
	{ name: "Monitor", price: 1399.99 },
	{ name: "Mouse", price: 39.99 },
	{ name: "Teclado", price: 199.99 },
	{ name: "Pen Drive 32Gb", price: 49.99 },
	{ name: "Pen Drive 16Gb", price: 28.99 },
	{ name: "Pen Drive 8Gb", price: 9.99 }
];

const saleProducts = products.map(({ name, price }) => {
	if (price >= 30) {
		return {
			name: name,
			price: price / 2
		};
	}

	return { name, price };
});