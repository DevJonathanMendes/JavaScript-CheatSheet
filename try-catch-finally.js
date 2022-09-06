/* try/catch/finally
Essa instrução é o mecanismo de tratamento de exceção de JavaScript.
A cláusula try simplesmente define o bloco de código cujas exceções devem ser tratadas.

O bloco try é seguido de uma cláusula catch, a qual é um bloco de instruções que são chamadas quando
ocorre uma exceção em qualquer lugar dentro do bloco try.

A cláusula catch é seguida por um bloco finally contendo o código de limpeza que é garantidamente executado, independente do que
aconteça no bloco try. Os blocos catch e finally são opcionais, mas um bloco try deve estar acompanhado
de pelo menos um desses blocos. Os blocos try, catch e finally começam e terminam com
chaves. Essas chaves são uma parte obrigatória da sintaxe e não podem ser omitidas, mesmo que uma
cláusula contenha apenas uma instrução. */


// O código a seguir ilustra a sintaxe e o objetivo da instrução try/catch/finally:

try {
    // Normalmente, este código é executado do início ao fim do bloco sem problemas.
    // Mas às vezes pode disparar uma exceção
    // diretamente, com uma instrução throw, ou indiretamente, pela
    // chamada de um método que lança uma exceção.
}
catch (e) {
    // As instruções deste bloco são executadas se, e somente se, o bloco
    // try dispara uma exceção. Essas instruções podem usar a variável local
    // e se referir ao objeto Error ou a outro valor que foi lançado.
    // Este bloco pode tratar da exceção de algum modo, pode ignorá-la
    // não fazendo nada ou pode lançar a exceção novamente com throw.
}
finally {
    // Este bloco contém instruções que são sempre executadas, independente
    // do que aconteça no bloco try. Elas são executadas se o bloco try terminar:
    // 1) normalmente, após chegar ao final do bloco
    // 2) por causa de uma instrução break, continue ou return
    // 3) com uma exceção que é tratada por uma cláusula catch anterior
    // 4) com uma exceção não capturada que ainda está se propagando
}

/* Aqui está um exemplo realista da instrução try/catch. Ele usa o método factorial() definido na
seção anterior e os métodos JavaScript do lado do cliente prompt() e alert() para entrada e saída: */

function factorial(x) {
    // Se o argumento de entrada é inválido, dispara uma exceção!
    if (x < 0) throw new Error("x must not be negative");
    // Caso contrário, calcula um valor e retorna normalmente
    for (var f = 1; x > 1; f *= x, x--) /* vazio */;
    return f;
}

try {
    // Pede para o usuário inserir um número
    var n = Number(prompt("Please enter a positive integer", ""));
    // Calcula o fatorial do número, supondo que a entrada seja válida
    var f = factorial(n);
    // Mostra o resultado
    alert(n + "! = " + f);
}
catch (ex) { // Se a entrada do usuário não foi válida, terminamos aqui
    alert(ex); // Informa ao usuário qual é o erro
}