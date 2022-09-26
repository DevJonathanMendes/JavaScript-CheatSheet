// Rest transforma um número indeterminado de parâmetros em um array.
// Utilizamos quando se espera receber vários elementos e deseja transformá-los em um array.
// Só funciona dentro de uma função.

const rest = (...values) => {
    console.log(values);
};
rest(2, 4, 6, 8);