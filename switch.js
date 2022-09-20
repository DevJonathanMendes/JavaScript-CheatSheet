// A condicional switch avalia uma expressão,
// combinando o valor da expressão para um cláusula case, 
// e executa as instruções associadas ao case.
const expression = "option";

switch (expression) {
    case "start":
        console.log("Start Selected");
        break;
    case "option":
        console.log("Option Selected");
        break;
    case "":
    // Sem break, vaza para o case abaixo.
    case 1:
        break;
    // Não obrigatório. Executa se não houver case.
    default:
        console.log("There is no case option for this.");
};