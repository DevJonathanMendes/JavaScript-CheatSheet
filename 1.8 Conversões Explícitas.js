// O modo mais simples de fazer uma conversão de tipo explícita é usar as funções:
//Boolean(), Number(), String() ou Object().
// Já vimos essas funções como construtoras para objetos wrapper.
// Quando chamadas sem o operador new, elas funcionam como funções de conversão e
// fazem as conversões da Tabela.

Number("3")   // = 3
String(false) // = "false" Ou use false.toString()
Boolean([])   // = verdadeiro
Object(3)     // = novo Number(3)

// Conversão de tipo
x + "" // O mesmo que String(x)
+x     // O mesmo que Number(x). Você também poderá ver x-0
!!x    // O mesmo que Boolean(x). Observe o duplo !