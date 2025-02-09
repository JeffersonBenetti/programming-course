// - JavaScript e a DOM:

// - JavaScript é uma linguagem de programação amplamente utilizada no desenvolvimento web. Ela permite adicionar interatividade e dinamismo às páginas da web. A sigla 'DOM' significa "Document Object Model" (Modelo de Objetos do Documento) e refere-se à representação da estrutura de um documento HTML em forma de árvore. O JavaScript 'interage' com a DOM para manipular os elementos da página, como alterar o conteúdo, estilos, adicionar ou remover elementos, manipular eventos, entre outros.

// - Manipulando estilos:

// - É possível modificar os estilos dos elementos HTML usando JavaScript. Por exemplo, você pode alterar a cor de fundo de um elemento:

    const myElement = document.getElementById('myElement');
    myElement.style.backgroundColor = 'red';

// - Manipulando eventos:

// - O JavaScript permite que você responda a eventos, como cliques de mouse ou envios de formulários. Por exemplo, você pode adicionar um ouvinte de evento para um botão:

    const myButton = document.getElementById('myButton');

    myButton.addEventListener('click', function() {
    console.log('Botão clicado!');
    });

// - Com Arrow Function:
    myButton.addEventListener('click', () => {
    console.log('Botão clicado!');
    });

// - Adicionando e removendo elementos:

// - O JavaScript permite adicionar e remover elementos da DOM. Por exemplo, você pode adicionar um novo elemento `<li>` a uma lista:

    const myList = document.getElementById('myList');
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Novo item';
    myList.appendChild(newListItem);

// - Esses são apenas exemplos básicos de como o JavaScript 'interage' com a DOM. A combinação desses recursos permite criar páginas da web interativas e dinâmicas. Existem muitos outros métodos e recursos disponíveis na 'API da 'DOM' para manipular elementos 'HTML' de maneiras mais avançadas.