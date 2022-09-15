// Sintaxe básica
() => { };

// Poremos omitir "( )" quando temos um único parâmetro, mas é obrigatório quando não há parâmetro.
// Podemos omitir "{ }" e "return" quando temos uma função simples.
// Arrow Function não tem seu próprio "this".
const addOne = number => number + 1;