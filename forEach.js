//Método de array forEach() não retorna valor (ou retorna undefined), executa efeito colateral.

// Array para iteração.
const cities = ["RJ", "SP", "MG"];

// Executa uma função (efeito colateral) para cada item do array.
cities.forEach((item, index, array) => console.log(item, index, array));

// A mesmo coisa.
const log = (item, index, array) => console.log(item, index, array);
cities.forEach(log);

// Não retorna nada. Para isso use o map().
cities.forEach(function (index) { return index });