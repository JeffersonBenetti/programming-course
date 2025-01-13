// - Function (funções):

// - No JavaScript, as 'funções' são blocos de código reutilizáveis que podem ser executados quando forem 'chamadas'. Elas permitem agrupar instruções relacionadas e executá-las com um único comando. As funções podem receber 'argumentos', processar esses argumentos e retornar um valor opcional. Existem 3 tipos de funções que são mais comuns.

// - Funções sem argumentos e sem retorno:

// - Exemplo:

    function saudacao() {
        console.log("Olá! Bem-vindo(a)")
    }

    saudacao() // Chama a função saudacao e exibe "Olá! Bem-vindo"

// - Nesse exemplo, a função saudacao não recebe nenhum 'argumento' e não retorna nenhum 'valor. Ela apenas exibe uma saudação no console quando é chamada.

// - Funções com argumentos e sem retorno:

// - Exemplo:

    function soma(a, b) {
        let resultado = a + b
        console.log("O resultado da soma é: " + resultado)
    }

    soma(3, 5) // Chama a função soma com os argumentos 3 e 5.
    // O resultado da soma é: 8

// - Nesse exemplo, a 'função soma' recebe dois argumentos ( 'a' e 'b' ), realiza a soma e exibe o resultado no console.

// - Funções com argumentos e com retorno:

// - Exemplo:

    function multiplicacao(a, b) {
        let resultado = a + b
        return resultado
    }

    let resultadoFinal = multiplicacao(4, 6) // Chama a função multiplicacao com os argumentos 4 e 6 e armazena o resultado retornado a variável resultadoFinal
    console.log("O resultado da multiplicação é: " + resultadoFinal) // Exibe "O resultado da multiplicação é: 10"
    //O resultado da multiplicação é: 10

// - Nesse exemplo, a função 'multiplicacao' recebe dois argumentos ( 'a' e 'b ), realiza a multiplicação e retorna o resultado. Esse resultado é armazenado na variável 'resultadoFinal' e depois exibido no console.