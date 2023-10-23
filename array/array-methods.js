let array = [1, 2, 3];

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
array.find(element => element > 1);

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
array.includes(2);

// O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
array.indexOf(3); // Do início ao fim.
array.lastIndexOf(); // Do fim para o início.

// O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
// O intervalo de preenchimento dos elementos é [início, fim).
array.fill(1); // [1, 1, 1]
array.fill("a", 1, 2); // [a, 2, 3]

// Converte todos os elementos em strings, concatena e retorna.
array.join(" "); // > "1 2 3"
array.join(", "); // > "1, 2, 3"

// Inverte a ordem dos elementos e retorna o array invertido.
array.reverse();

// Retorna o array classificado. Quando chamado sem argumentos, classifica os elementos em ordem alfabética.
array.sort(); // (Use callback para fazer classificações minuciosas)

// Cria e retorna um novo array contendo os elementos do array original.
array.concat(4, 5) // > [1, 2, 3, 4, 5]
array.concat([4, 5]); // > [1, 2, 3, 4, 5]
array.concat([4, 5], [6, 7]) // > [1, 2, 3, 4, 5, 6, 7]
array.concat(4, [5, [6, 7]]) // > [1, 2, 3, 4, 5, [6, 7]]

// Retorna um pedaço (ou subarray) do array especificado. Seus dois argumentos especificam o início e o fim do trecho a ser retornado.
array.slice(0, 1) // > [1]
array.slice(-1) // > [3]

// every() e some().
array.every((valueIndex) => valueIndex < 10); // every() é como "para todo", se todos, retorna true, se não, false.
array.some((valueIndex) => valueIndex > 1); 	// some() é como "existe", se existir algum, true, se não, false.

// Remover/adiciona itens de um array, retorna o array novo.
const index = 1; // Onde começa a adicionar.
const howmany = 2; // Opcional. Número de itens para remover.
const item = "string"; // Opcional. Elemento(s) para adicionar.

array.splice(index, howmany, item)
array.splice(index, howmany, 5, 6, 8); // Retorna o array novo.

// push() e pop() permitem trabalhar com arrays como se fossem pilhas.
// O método push() anexa um ou mais novos elementos no final e retorna o novo comprimento.
// O método pop() faz o inverso: exclui o último elemento, decrementa o comprimento e retorna o valor que removeu.
let stack = []; // > []
stack.push(1, 2); // > [1, 2] Retorna o tamanho do array: 2
stack.pop(); // > [1] Retorna o valor removido: 2
stack.push(3); // > [1, 3] Retorna o tamanho do array: 2

// unshift() e shift() se comportam quase como push() e pop(), exceto que inserem e removem elementos do início de um array e não do final.
stack = []; // > []
stack.unshift(1); // > [1] Retorna o tamanho do array: 1
stack.unshift(22); // > [22,1] Retorna o tamanho do array: 2
stack.shift(); // > [1] Retorna o valor removido: 22
stack.unshift(3, [4, 5]); // > a:[3,[4,5],1] Retorna 3
stack.shift(); // > [[4,5],1] Retorna o valor removido: 3

// toString() e toLocaleString()
stack = [1, 2, 3]
stack.toString() // > "1,2,3"
stack.toLocaleString() // > "1,2,3" Versão específica para a localidade.