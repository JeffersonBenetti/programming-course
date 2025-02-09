//  - For:

// - O 'for' é uma estrutura de controle em JavaScript que permite executar um bloco de código repetidamente por um determinado número de vezes. É especialmente útil quando você sabe quantas iterações são necessárias.

// - A 'inicialização' é uma expressão que é executada antes do loop iniciar e geralmente é usada para inicializar variáveis de controle.
// - A 'condição' é uma expressão que é verificada antes de cada iteração. Se a condição for avaliada como verdadeira, o bloco de código é executado; caso contrário, o loop é encerrado.
// - A 'expressão final' é uma expressão que é executada após cada iteração e geralmente é usada para atualizar as variáveis de controle.

// - Exemplo:
    for (let i = 1; i <= 5; i++) {
    console.log(i);
    }
    // 1
    // 2
    // 3
    // 4
    // 5

// - Neste exemplo, a variável 'i' é inicializada com o valor 1. A condição 'i <= 5' é verificada antes de cada iteração. Enquanto a condição for verdadeira, o bloco de código é executado, exibindo o valor atual de 'i' no console. Após cada iteração, a expressão 'i++' é executada para incrementar o valor de 'i' . O loop é encerrado quando 'i' alcança o valor 6.