// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritméticos são os mais comuns:
3 + 2 // Adição
3 - 2 // Subtração
3 * 2 // Multiplicação
3 ** 2 // Potencia
3 / 2 // Divisão
3 % 2 // Resto da divisão
"3" + "2" // = "32": + soma números, ou concatena strings
points[1].x - points[0].x // = 1: Operandos mais complicados também funcionam


// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0; // Define uma variável
count++;       // Incrementa a variável
count--;       // Decrementa a variável
count += 2;    // Soma 2: o mesmo que count = count + 2;
count *= 3;    // Multiplica por 3: o mesmo que count = count * 3;
count          // 6: nomes de variáveis também são expressões.


// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.
var x = 2, y = 3; // Esses sinais = são atribuições e não testes de igualdade.
x == y           // falso: igualdade
x != y           // verdadeiro: desigualdade
x < y            // verdadeiro: menor que
x <= y           // verdadeiro: menor ou igual a
x > y            // falso: maior que
x >= y           // falso: maior ou igual a
"two" == "three" // falso: as duas strings são diferentes
"two" > "three"  // verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y) // verdadeiro: falso é igual a falso


    // Os operadores lógicos combinam ou invertem valores booleanos
    (x == 2) && (y == 3) // verdadeiro: as duas comparações são verdadeiras. && é E.
        (x > 3) || (y < 3)   // falso: nenhuma das comparações é verdadeira. || é OU.
!(x == y)            // verdadeiro: ! inverte um valor booleano

// === Operador de igualdade restrito (Não faz conversões ao testar a igualdade).

// O operador in espera um operando no lado esquerdo que seja ou possa ser convertido em uma string.
// No lado direito, ele espera um operando que seja um objeto.
// Ele é avaliado como true se o valor do lado esquerdo é o nome de uma propriedade do objeto do lado direito.
// Por exemplo:

var point = { x: 1, y: 1 }; // Define um objeto
"x" in point // => verdadeiro: o objeto tem uma propriedade chamada "x".
"z" in point // => falso: o objeto não tem propriedade "z".
"toString" in point // => verdadeiro: o objeto herda o método toString

var data = [7, 8, 9]; // Um array com elementos 0, 1 e 2
"0" in data // => verdadeiro: o array tem um elemento "0"
1 in data // => verdadeiro: números são convertidos em strings
3 in data // => falso: nenhum elemento 3

// O operador instanceof espera um objeto para o operando no lado esquerdo
// e um operando no lado direito que identifique uma classe de objetos.

var d = new Date(); // Cria um novo objeto com a construtora Date()
d instanceof Date; // É avaliado como true; d foi criado com Date()
d instanceof Object; // É avaliado como true; todos os objetos são instâncias de Object
d instanceof Number; // É avaliado como false; d não é um objeto Number

var a = [1, 2, 3]; // Cria um array com sintaxe de array literal
a instanceof Array;  // É avaliado como true; a é um array
a instanceof Object; // É avaliado como true; todos os arrays são objetos
a instanceof RegExp; // É avaliado como false; os arrays não são expressões regulares

// Ternário
x > 0 ? x : -x // O valor absoluto de x

// delete é um operador unário que tenta excluir a propriedade do objeto ou elemento do array especificado
// como operando1. Assim como os operadores de atribuição, incremento e decremento,
// delete é normalmente usado por seu efeito colateral de exclusão de propriedade e não pelo valor que retorna.

var o = { x: 1, y: 2 }; // Começa com um objeto
delete o.x; // Exclui uma de suas propriedades
"x" in o // => falso: a propriedade não existe mais

var a = [1, 2, 3]; // Começa com um array
delete a[2]; // Exclui o último elemento do array
2 in a // => falso: o elemento array 2 não existe mais
a.length // => 3: note que o comprimento do array não muda
// continue;


// throw: Uma exceção é um sinal indicando que ocorreu algum tipo de condição excepcional ou erro.
// Disparar uma exceção é sinalizar tal erro ou condição excepcional.

function factorial(x) {
    // Se o argumento de entrada é inválido, dispara uma exceção!
    if (x < 0) throw new Error("x must not be negative");
    // Caso contrário, calcula um valor e retorna normalmente
    for (var f = 1; x > 1; f *= x, x--) /* vazio */;
    return f;
}

/* O operador in espera um nome de propriedade(como uma string) em seu lado esquerdo e um
objeto à sua direita.Ele retorna true se o objeto tem uma propriedade própria ou uma propriedade
herdada com esse nome: */

var o = { x: 1 }
"x" in o; // verdadeiro: o tem uma propriedade própria "x"
"y" in o; // falso: o não tem uma propriedade "y"
"toString" in o; // verdadeiro: o herda uma propriedade toString