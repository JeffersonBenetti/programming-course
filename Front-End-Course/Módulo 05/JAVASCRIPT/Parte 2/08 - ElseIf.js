// - Else if:

// - O 'Else if' em JavaScript é uma construção utilizada para adicionar condições adicionais em uma estrutura condicional 'if' . Essa construção permite testar várias condições sequencialmente, fornecendo blocos de código alternativos para executar, caso as condições anteriores não sejam atendidas. Isso é útil quando há mais de duas possibilidades de resultado a serem consideradas. Cada 'else if'  é seguido por uma nova condição a ser testada. Se a condição anterior for falsa, a próxima condição será avaliada. Se a condição atual for verdadeira, o bloco de código correspondente será executado. Se nenhuma das condições anteriores for verdadeira, o bloco 'else'  opcional será executado.

    let diaSemana = "quarta-feira";

    if (diaSemana === "segunda-feira") {
    console.log("Hoje é segunda-feira.");
    } else if (diaSemana === "terça-feira") {
    console.log("Hoje é terça-feira.");
    } else if (diaSemana === "quarta-feira") {
    console.log("Hoje é quarta-feira.");
    } else if (diaSemana === "quinta-feira") {
    console.log("Hoje é quinta-feira.");
    } else {
    console.log("Hoje não é segunda, terça, quarta ou quinta-feira.");
    }

// - Nesse exemplo, o valor da variável 'diasSemana' é "quarta-feira". O código testa cada condição sequencialmente e, como a terceira condição é verdadeira, o bloco de código correspondente ao 'else if (diaSemana ===”quarta-feira”)' será executado, exibindo a mensagem "Hoje é quarta-feira." no console.