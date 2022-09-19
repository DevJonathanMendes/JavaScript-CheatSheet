// Funções Geradoras são funções cuja execução pode ser interrompida e posteriormente reconduzida.

/*
Uma função geradora quando chamada não é executada imediatamente 
ao invés disso um objeto iterator é retornado e quando o método next() 
deste objeto é executado o conteúdo da função geradora será processado até encontrar a palavra-chave yield.

O método next() retorna um objeto com dois valores, value e done.
Onde value é o valor que é retornado e done é um valor booleano que indica se aquele valor é o último ou não.
*/

function* generator() {
    let calls = 0;
    yield calls++; // Este yield não retorna nada, mas é um sinal.
    while (true)
        yield calls++ // Este yield é infinito porque está num while.

    yield calls++ // Este seria o último yield, onde iria retornar value: undefined e done: true.
};

let counter = generator();
counter.next();
counter.next().value;