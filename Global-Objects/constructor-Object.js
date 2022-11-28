const myObject = {
    "property": "value",
    method() {
        console.log("Hello!");
    }
};

Object();
Object.create(); // É usado para criar um novo objeto e conectá-lo ao protótipo de um objeto existente.
Object.keys(); // Cria um array que contém as chaves de um objeto.
Object.values(); // Cria uma array que contém os valores de um objeto.
Object.entries(); // Cria um array aninhado dos pares chave/valor de um objeto.
Object.assign(); // É usado para copiar valores de um objeto para outro.
Object.freeze(); // Impede a modificação de propriedades e valores, não podem ser adicionadas ou removidas de um objeto.
Object.seal(); // Impede que novas propriedades sejam adicionadas a um objeto, mas permite a modificação de propriedades existentes.
Object.getPrototypeOf(); // É usado para obter o [[Prototype]] interno oculto de um objeto, também acessível através da propriedade __proto__.