// Resultados de uma Promise:
// resolve: Retorna a Promise resolvida.
// reject: Retorna a Promise rejeitada.

// Estados de uma Promise:
// Pending: Estado inicial, não foi realizada nem rejeitada.
// Fulfilled: Sucesso na operação.
// Rejected: Falha na operação.
// Settled: Estado final da Promise, quando já sabe se foi resolved ou rejected.


// Criando uma nova Promise.
const promise = new Promise((resolve, reject) => {
    if ("success")
        resolve("Promise completed successfully.");
    if ("failure")
        reject("Promise ended unsuccessfully.");
});

// Array de Promise para ilustração.
const promises = [
    new Promise((resolve, reject) => resolve("Promise Resolved.")),
    new Promise((resolve, reject) => resolve("Promise Resolved.")),
    new Promise((resolve, reject) => reject("Promise Rejected."))
];

// Criando Promise sempre resolvida ou rejeitada.
const resolved = Promise.resolve("Value");
const rejected = Promise.reject("Error");


// Métodos para lidar com várias Promises ao mesmo tempo:

// Executa várias Promises, retorna um array de sucesso se todas foram resolvidas ou se uma foi rejeitada.
Promise.all(promises)
    .then(res => console.log(res))
    .catch(error => error);

// Executa várias Promises de forma paralela, retorna um array com todos os resultado, tanto dos erros, quanto dos sucessos.
Promise.allSettled(promises)
    .then(res => console.log(res))
    .catch(error => error);

// Executa várias Promises, a que retornar primeiro vai ser o retorno do método por completo.
Promise.race(promises)
    .then(res => console.log(res))
    .catch(error => error);