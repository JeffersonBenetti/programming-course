// - Variáveis:

// - No JavaScript, existem várias formas de declarar variáveis. 
// - Abaixo estão alguns dos tipos de variáveis mais comuns, juntamente com uma explicação simplificada e exemplos de cada um:

// - 'var' : É a forma mais antiga de declarar variáveis em JavaScript. As variáveis 'var'  podem ser acessadas de qualquer lugar dentro da função em que foram declaradas.

// - Exemplo:

    // var age = 27

    // console.log(age)
        // 27

// - Nesse caso, a variável 'age' é declarada com a palavra-chave 'var' e recebe o valor "27". Essa variável pode ser acessada em qualquer lugar dentro da função que foi declarada (como uma função global). Mas é importante notar que o uso de var está sendo substituído por 'let' e 'const', são considerados mais seguros e preferidos nas versões mais recentes do JavaScript.

// - 'let' é usado para declarar uma variável local dentro de um bloco específico no projeto. Diferente de var que pode ser acessada por funções globais, let só é visível e acessível dentro do bloco onde foi declarada.

// - Exemplo:

    // let name = "Rodolfo"

    // if (true) {
        // let name = "Stephani"
        // console.log(name) // retornará stephani
    // }
        //// Stephani

    // console.log(name) // retornará rodolfo
        ////Rodolfo

// - Neste exemplo, temos duas declarações da variável 'name' usando let.

// - Inicialmente, a variável name é declarada e recebe o valor "Rodolfo" fora do bloco 'if'. Dentro do bloco if, uma nova declaração da variável 'name' é feita e recebe o valor "Stephani". Ao executar o código, o primeiro 'console.log' dentro do bloco 'if' exibe o valor "Stephani", pois ele está referenciando a variável 'name' declarada dentro desse bloco. Já o segundo 'console.log' é executado fora do bloco 'if', ele exibe o valor "Rodolfo", pois está referenciando a variável name que foi declarada fora do bloco, ou seja, não é afetada pela troca de valores de dentro do if.

// - 'const' é usado para definir um valor constante. Diferente de var e let, as variáveis de const não podem ser atualizadas nem declaradas novamente.

// - Exemplo:

    const name = "Stephani"

    name = "Rodolfo"

    console.log(name) //TypeError: Assignment to constant variable.

// - Neste caso é retornado um erro pois foi declarado inicialmente que 'name' recebia o valor 'stephani' e logo abaixo tentei alterar o valor da variável. Uma vez definido o valor de uma const, ele deve permanecer com esse valor.
