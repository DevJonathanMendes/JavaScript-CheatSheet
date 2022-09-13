// As funções são blocos de código JavaScript parametrizados que podemos chamar.
function plus1(x) { // Define uma função chamada "plus1", com o parâmetro "x"
    return x + 1;  // Retorna x + 1.
}                  // As funções são incluídas entre chaves
// Chamada de função.
plus1(y) // y é 3; retorna 3 + 1.


var square = function (x) { // As funções são valores e podem ser atribuídas a variáveis
    return x * x;             // Retorna x vezes x.
};                        // Um ponto e vírgula marca o fim da atribuição.
// Chama duas funções em uma única expressão.
square(plus(y)) // y é 3. y + 1; 4 * 4 = 16.


// Quando funções recebem as propriedades de um objeto, as chamamos de "métodos".
// Todos os objetos de JavaScript têm métodos:
var a = [];    // Cria um array vazio
a.push(1, 2, 3); // O método push() adiciona elementos em um array
a.reverse();   // Outro método: inverte a ordem dos elementos


/* Também podemos definir nossos próprios métodos.
   A palavra-chave "this" se refere ao objeto no qual o método é definido: neste caso, o array de pontos anterior. */
points.dist = function () {       // Define um método para calcular a distância entre pontos
    var p1 = this[0];               // Primeiro elemento do array que chamamos
    var p2 = this[1];               // Segundo elemento do objeto "this"
    var a = p2.x - p1.x;            // Diferença em coordenadas X
    var b = p2.y - p1.y;            // Diferença em coordenadas Y
    return Math.sqrt(a * a + b * b) // O teorema de Pitágoras
    // Math.sqrt() calcula a raiz quadrada;
};
points.dist() // 1,414: distância entre nossos 2 pontos

// Funções Geradoras são funções cuja execução pode ser interrompida e posteriormente reconduzida.
function* generator() {
    let calls = 0;
    while (true)
        yield calls++;
};

const counter = generator();
console.log(counter.next().value);