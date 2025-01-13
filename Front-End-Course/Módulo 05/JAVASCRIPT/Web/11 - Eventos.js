// - Eventos no JavaScript:

// - Os 'eventos' no 'JavaScript' são ações ou ocorrências que acontecem em um elemento 'HTML', como um clique do mouse, pressionamento de tecla, carregamento da página, etc. O JavaScript permite que você atribua funções a esses 'eventos' para responder a eles de maneira adequada.

// - Existem dois métodos principais para trabalhar com 'eventos' no JavaScript:

// - 'addEventListener': É usado para anexar um manipulador de eventos a um elemento específico. Ele permite que você especifique qual evento deseja ouvir e qual função será executada quando esse evento ocorrer.

// - Exemplo:

    // Obtém uma referência para o botão pelo ID
    let botao1 = document.getElementById("meuBotao");

    // Adiciona um ouvinte de evento para o clique do botão
    botao.addEventListener("click", function() {
    console.log("O botão foi clicado!");
    });

// - Neste exemplo, estamos obtendo uma referência para um elemento de botão com o 'ID' "meuBotao" e adicionando um ouvinte de evento para o evento de clique. Quando o botão for clicado, a função anônima passada como argumento será executada, imprimindo a mensagem "O botão foi clicado!" no console.

// - on[evento]: É um atributo especial que pode ser definido em um elemento 'HTML' ou em um 'objeto JavaScript' para especificar uma função que será executada quando um determinado evento ocorrer.

// - Exemplo:

// HTML:
{/* <body>
    <h1>JavaScript</h1>
    <input onKeypress="inputDigitado()" id="main-input" type="text">
    <p>Começando nossa Jornada para aprender</p>
    <p class="paragraph-js">A linguagem de <b>Programação</b> mais versátil do mundo</p>
    <button onClick="buttonChamado()" class="main-button">Clique aqui</button>
</body> */}

// Javascript:  
    //input
    const input = document.querySelector('#main-input')

    // função que será chamada quando o botão for clicado.
    function buttonChamado() {
        console.log('Botão clicado')
    }

    //Função para mostrar texto digitado no input.
    function inputDigitado() {
        console.log(input)
        console.log(input.value) // Pega o valor do input.
    }

// - Neste exemplo, estamos obtendo uma referência para um elemento de botão com o ID "meuBotao" e definindo a função 'onClick' para executar quando o botão for clicado. A função imprimirá a mensagem "O botão foi clicado!" no console.

// - Ambos os métodos podem ser usados para adicionar manipuladores de eventos a vários tipos de eventos, como cliques do mouse, teclas pressionadas, carregamento da página, entre outros. É importante lembrar de remover os manipuladores de eventos quando não forem mais necessários, usando os métodos 'removeEventListener' ou atribuindo 'null' ao atributo do evento.