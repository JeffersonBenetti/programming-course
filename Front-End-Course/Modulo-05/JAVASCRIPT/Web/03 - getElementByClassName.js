// - getElementByClassName:

// - A função 'getElementByClassName' é uma função em JavaScript que permite selecionar elementos 'HTML' com base em suas classes. Ela retorna uma coleção de elementos que possuem a classe especificada.

// - Exemplo:

// - HTML
// <div class="destaque">Elemento 1</div>
// <div class="destaque">Elemento 2</div>
// <div class="destaque">Elemento 3</div>
// <div class="outro">Elemento 4</div>

// - JavaScript:
  let elementos = document.getElementsByClassName("destaque");

  for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].textContent);
  }
  // // Elemento 1
  // // Elemento 2
  // // Elemento 3

// - Nesse exemplo, temos um conjunto de elementos '<div>'. A classe "destaque" é atribuída a três desses elementos. O código JavaScript usa a função 'getElementByClassName' para selecionar todos os elementos com a classe "destaque" e, em seguida, itera sobre a coleção retornada para exibir o texto de cada elemento no console.