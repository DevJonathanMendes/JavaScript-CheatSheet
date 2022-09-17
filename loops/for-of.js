// for-of percorre os valores de objetos iterativos (Array, Map, Set, o objeto arguments etc).
// Chama uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

const numbers = [1, 2, 3];

for (let value of numbers)
    console.log(value);

for (const value of numbers)
    console.log(numbers);

//
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
    console.log(entry);
}
// [a, 1] | [b, 2] | [c, 3]

for (let [key, value] of iterable) {
    console.log(value);
}
// 1 | 2 | 3