// Definindo classe.
class Retangulo {
	constructor(altura, largura) {
		this.altura = altura;
		this.largura = largura;
	}

	get area() {
		return this.calculaArea();
	}

	get x() {
		return this.x;
	}

	static x = 10; // só acessível pela classe.
	y = 15; // só acessivel pela instância.

	set area({ alt, lar }) {
		this.altura = alt;
		this.largura = lar;
	}

	calculaArea() {
		return this.altura * this.largura;
	}
}

// Expressões de Classes.

// sem nome.
let Retangulo = class {
	constructor(altura, largura) {
		this.altura = altura;
		this.largura = largura;
	}
};

// nomeada.
let Retangulo = class Retangulo {
	constructor(altura, largura) {
		this.altura = altura;
		this.largura = largura;
	}
};

// Sub classes com o extends.
// A palavra-chave extends é usada em uma declaração de classe,
// ou em uma expressão de classe para criar uma classe como filha de uma outra classe.

class Animal {
	constructor(nome) {
		this.nome = nome;
	}

	falar() {
		console.log(this.nome + " emite um barulho.");
	}
}

class Cachorro extends Animal {
	falar() {
		console.log(this.nome + " latidos.");
	}
}

let cachorro = new Cachorro("Mat");
cachorro.falar();

// Chamada da classe pai com super.
class Gato {
	constructor(nome) {
		this.nome = nome;
	}

	falar() {
		console.log(this.nome + " faça barulho.");
	}
}

class Leao extends Gato {
	falar() {
		super.falar();
		console.log(this.nome + " roars.");
	}
}

let leao = new Leao("Fuzzy");
leao.falar();

class Point {
	/**
	 * Creates an object containing X and Y positions.
	 * @param {number} posX - X axis position.
	 * @param {number} posY - Y axis position.
	 * @returns {object} Return a object with X e Y positions.
	 */
	constructor(posX, posY) {
		this.x = posX;
		this.y = posY;
	}

	// Propriedades privadas reais. Só podem ser acessadas dentro da classe onde foram definidas.
	/**
	 * @type {number}
	 */
	#x;
	/**
	 * @type {number}
	 */
	#y;

	// Propriedade "privadas/interna". Não devem ser acessadas, mas tem a possibilidade.
	/**
	 * @type {number}
	 */
	_z = 10;

	// Getter e Setter para a posição X
	get x() {
		return this.#x;
	}

	/**
	 * @param {number} value - X position.
	 */
	set x(valor) {
		this.#x = this.#setPos(valor);
	}

	/**
	 * @type {number}
	 */
	get y() {
		return this.#y;
	}

	/**
	 * @param {number} value - Y position.
	 */
	set y(valor) {
		this.#y = this.#setPos(valor);
	}

	/**
	 * Function that deals with assigning the axis value.
	 * @param {number} value - The value of the axis.
	 */
	#setPos(value) {
		if (isNaN(value)) {
			throw new Error("The position value must be of type number");
		}

		if (value < 0) {
			throw new Error("Position value cannot be less than zero");
		}

		return value;
	}

	// Método estático para retornar o nome da classe quando não instanciada.
	static toString() {
		return this.prototype.constructor.name;
	}
}

// Método de instância para retornar uma representação em string do objeto Point.
Point.prototype.toString = function () {
	return `Point { x: ${this.x}, y: ${this.y} }`;
};
