// Método de array forEach() não retorna valor (ou retorna undefined), executa efeito colateral.

// Array para iteração.
const cities = ["RJ", "SP", "MG"];

// Executa uma função (efeito colateral) para cada item do array.
cities.forEach((element, index, array) => console.log(element, index, array));

// A mesmo coisa.
const log = (element, index, array) => console.log(element, index, array);
cities.forEach(log);

// Não retorna nada, apenas causa um efeito colateral. Para isso use o map().
cities.forEach(function (index) { return index });