// - getElementById:

// - A ferramenta do JavaScript 'getElementById' permite acessar um elemento 'HTML' específico em uma página da web, com base no valor do atributo 'id' desse elemento. Ela retorna uma referência ao elemento encontrado, ou 'null' se nenhum elemento corresponder ao 'id' fornecido.

// - Exemplo:


// - HTML:
//<h2>Exemplo de Uso do getElementById</h2>
//<p id="demo">Este é um parágrafo de exemplo.</p>
//<button onclick="alterarTexto()">Clique aqui para alterar o texto</button>

// - JavaScript:
    function alterarTexto() {
        // Obtendo uma referência ao elemento com o id "demo"
        let elemento = document.getElementById("demo");

        // Alterando o conteúdo do parágrafo
        elemento.innerHTML = "Texto alterado!";
    }

// - Nesse exemplo, temos um parágrafo com o 'id' "demo" e um botão. Ao clicar no botão, a função *'alterarTexto' é executada. Dentro dessa função, usamos 'getElementById' para obter uma referência ao parágrafo com o id "demo". Em seguida, modificamos o conteúdo desse parágrafo, atribuindo um novo texto à propriedade 'innerHTML' do elemento. Como resultado, o texto do parágrafo será alterado para "Texto alterado!" quando o botão for clicado.