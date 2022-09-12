// Invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
// array.map(callback[, thisArg])

const numbers = [2, 4, 6];

// Retorna um novo array. Para não retornar nada, use forEach().
const doubles = numbers.map(element => element * 2);
// doubles = [4, 8, 12]