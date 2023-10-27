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
