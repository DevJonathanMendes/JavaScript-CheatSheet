// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
var book = {             // Objetos são colocados entre chaves.
    topic: "JavaScript", // A propriedade "topic" tem o valor "JavaScript".
    fat: true            // A propriedade "fat" tem o valor true.
};


// Acesse as propriedades de um objeto com . ou []:
book.topic                // Acessa topic que contém "JavaScript"
book["fat"]               // Outro modo de acessar valores de propriedade.
book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.contents = {};       // {} é um objeto vazio sem qualquer propriedade.