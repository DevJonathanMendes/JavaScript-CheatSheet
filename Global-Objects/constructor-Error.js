// O construtor Error() cria um objeto de erro.

const message = "Uma descrição legível do erro.";

// Não padrão, melhor verificar a compatibilidade.
const fileName = "Propriedade fileName no objeto Error criado. Padrão é o nome do arquivo que contém o código que chamou o constructor Error().";

// Não padrão, melhor verificar a compatibilidade.
const lineNumber = "Propriedade lineNumber no objeto Error criado. padrão é o número da linha que contém a invocação do construtor Error().";

const options = { cause: err };

new Error();
new Error(message);
new Error(message, options);
new Error(message, fileName);
new Error(message, fileName, lineNumber);

Error();
Error(message);
Error(message, options);
Error(message, fileName);
Error(message, fileName, lineNumber);