// # **getElementsByName**

// A função **getElementsByName** em JavaScript permite selecionar elementos **HTML** com base em seus atributos **name**. Diferentemente das funções **getElementById** e **getElementByClassName**, a função **getElementsByName** retorna uma coleção de elementos correspondentes ao atributo **name** especificado, em vez de um único elemento.

// - HTML:
// <input type="text" name="nome" value="John Doe">
// <input type="text" name="nome" value="Jane Doe">
// <input type="text" name="nome" value="Alice Doe">

// - JavaScript:
  let elementos = document.getElementsByName("nome");

  for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].value);
  }
  // John Doe
  // Jane Doe
  // Alice Doe

// - Nesse exemplo, temos três elementos de entrada de texto (<input>) com o atributo 'name' definido como "nome". O código JavaScript usa a função 'getElementsByName' para selecionar todos esses elementos e, em seguida, itera sobre a coleção retornada para exibir o valor de cada um no console.