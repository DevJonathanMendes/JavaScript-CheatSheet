// Usamos o filter() quando precisamos obter uma quantidade de elementos menor que do array original.
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const numbers = [1, 2, 3];

const newNumbers = numbers.filter((element, index, array) => element >= 2);
// newNumber = [2, 3]

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
];

const premiumUsers = users.filter(user => user.premium);