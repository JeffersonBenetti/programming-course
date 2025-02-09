// - querySelector:

// - O método 'querySelector' é uma função em JavaScript que permite selecionar elementos em um documento HTML usando seletores CSS. Ele retorna o primeiro elemento que corresponde ao seletor especificado ou null se nenhum elemento for encontrado.

// - Exemplo:

// - HTML: 
// <body>
//   <div id="conteudo">
//     <h1>Título</h1>
//     <p>Parágrafo de exemplo</p>
//   </div>
// </body>

// Javascript:
    // Selecionando o elemento <h1> dentro do elemento com o id "conteudo"
    let titulo = document.querySelector("#conteudo h1");

    // Alterando o conteúdo do elemento
    titulo.textContent = "Novo Título";