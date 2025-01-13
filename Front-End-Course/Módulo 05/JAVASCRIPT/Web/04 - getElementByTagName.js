// - getElementByTagName:

// - A função 'getElementByTagName' é uma função em JavaScript que permite selecionar elementos 'HTML' com base em suas tags. Ela retorna uma coleção de elementos que possuem a tag especificada.

// - Exemplo:

// - HTML:
// <p>Parágrafo 1</p>
// <p>Parágrafo 2</p>
// <p>Parágrafo 3</p>

// - JavaScript:
  let paragrafos = document.getElementsByTagName("p");

  for (let i = 0; i < paragrafos.length; i++) {
    console.log(paragrafos[i].textContent);
  }
  // // Parágrafo 1
  // // Parágrafo 2
  // // Parágrafo 3

// - Nesse exemplo, temos três elementos '<p>'. O código JavaScript usa a função 'getElementByTagName' para selecionar todos os elementos <p> e, em seguida, itera sobre a coleção retornada para exibir o texto de cada parágrafo no console.