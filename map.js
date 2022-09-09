// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
// array.map(callback[, thisArg])

const numbers = [1, 4, 9];
const doubles = numbers.map(num => num * 2);
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]