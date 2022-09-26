// Utilizamos o spread para espalhar valores de um conjunto de dados (array, objeto, string) para outro, fazendo modificações se necessário.

const numbers = [2, 4, 6, 8];
const string = "Hello!";

console.log(Math.max(numbers)) // Saída: NaN
console.log(Math.max(...numbers)) // Saída: 8

console.log(...string) // Saída: H e l l o !