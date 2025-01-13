// - querySelectorAll:

// - O método 'querySelectorAll' é uma função JavaScript que permite selecionar vários elementos da 'DOM' (Document Object Model) com base em um seletor 'CSS'. Ele retorna uma lista de nós que correspondem ao seletor especificado.

// - Exemplo:

  // Seleciona todos os elementos <p> do documento
  let paragrafos = document.querySelectorAll("p");

  // Itera sobre os elementos selecionados
  for (let i = 0; i < paragrafos.length; i++) {
    // Altera o conteúdo de cada parágrafo
    paragrafos[i].textContent = "Novo conteúdo do parágrafo";
  }

// - Nesse exemplo, o código 'document.querySelectorAll("p")' seleciona todos os elementos '<p>' no documento HTML. Em seguida, podemos iterar sobre a lista de elementos retornada e fazer alterações em cada um deles. No exemplo, estamos definindo o conteúdo de cada parágrafo para "Novo conteúdo do parágrafo" usando a propriedade 'textContent'.