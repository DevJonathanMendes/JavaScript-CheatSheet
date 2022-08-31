(/^HTML/) // Corresponde às letras H T M L no início de uma string
(/[1-9][0-9]*/) // Corresponde a um dígito diferente de zero, seguido de qualquer número de dígitos
(/\bjavascript\b/i) // Corresponde a "javascript" como uma palavra, sem considerar letras maiúsculas e minúsculas

//Os objetos RegExp definem vários métodos úteis e as strings também têm métodos que aceitam
//argumentos de RegExp.Por exemplo:

var text = "testing: 1, 2, 3"; // Exemplo de texto
var pattern = /\d+/g // Corresponde a todas as instâncias de um ou mais dígitos
pattern.test(text) // => verdadeiro: existe uma correspondência
text.search(pattern) // => 9: posição da primeira correspondência
text.match(pattern) // => ["1", "2", "3"]: array de todas as correspondências
text.replace(pattern, "#"); // => "testing: #, #, #"
text.split(/\D+/); // => ["","1","2","3"]: divide em não dígitos