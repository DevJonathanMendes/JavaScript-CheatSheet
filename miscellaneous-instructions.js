/* A instrução with é usada para ampliar o
encadeamento de escopo temporariamente. Ela tem a seguinte sintaxe:
with (objeto)
instrução */

/* Essa instrução adiciona objeto na frente do encadeamento de escopo, executa instrução e, então,
restaura o encadeamento de escopo ao seu estado original. */

/* A instrução with é proibida no modo restrito e deve ser considerada desaprovada
no modo não restrito: evite usá-la, quando possível.
Um código JS que utiliza with é difícil de otimizar e é provável que seja executado
mais lentamente do que um código equivalente escrito sem a instrução with. */

document.forms[0].address.value

/* Caso precise escrever expressões como essa várias vezes, você pode usar a instrução with para adicionar
o objeto formulário no encadeamento de escopo: */

with (document.forms[0]) {
    // Acessa elementos do formulário diretamente aqui. Por exemplo:
    name.value = "";
    address.value = "";
    email.value = "";
}