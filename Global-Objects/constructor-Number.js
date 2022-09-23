// O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos.
// Um objeto Number é criado utilizando o construtor Number().

// Os principais usos para o objeto Number são:
// * Se o objeto não pode ser convertido para um número, é retornado NaN.
// * Fora do contexto de um construtor, como sem o operador new, Number pode ser utilizador para realizar uma conversão de tipo.

var objNumber = new Number(value); // Cria um objeto com o valor(n°) fornecido. 
var number = Number(value); // Atribui o valor para a variável.
var maxNumber = Number.MAX_VALUE; // Usa uma das propriedades do objeto Number para atribuir a variável.

// Conversão de números.
var n = 123456.789;
n.toFixed(0);       // "123457"
n.toFixed(2);       // "123456.79"
n.toFixed(5);       // "123456.78900"
n.toExponential(1); // "1.2e+5"
n.toExponential(3); // "1.235e+5"
n.toPrecision(4);   // "1.235e+5"
n.toPrecision(7);   // "123456.8"
n.toPrecision(10);  // "123456.7890"

// Se uma string é passada para a função de conversão Number(),
// ela tenta analisar essa string como um inteiro ou literal em ponto flutuante.
parseInt("3 blind mice")   // = 3
parseFloat(" 3.14 meters") // = 3.14
parseInt("-12.34")         // = -12
parseInt("0xFF")           // = 255
parseInt("0xff")           // = 255
parseInt("-0XFF")          // = -255
parseFloat(".1")           // = 0.1
parseInt("0.1")            // = 0
parseInt(".1")             // = NaN: inteiros não podem começar com "."
parseFloat("$72.47");      // = NaN: números não podem começar com "$"

// parseInt() aceita um segundo argumento opcional especificando a raiz (base) do número a ser analisado.
// Os valores válidos estão entre 2 e 36.
parseInt("11", 2);   // => 3 (1*2 + 1)
parseInt("ff", 16);  // => 255 (15*16 + 15)
parseInt("zz", 36);  // => 1295 (35*36 + 35)
parseInt("077", 8);  // => 63 (7*8 + 7)
parseInt("077", 10); // => 77 (7*10 + 7)