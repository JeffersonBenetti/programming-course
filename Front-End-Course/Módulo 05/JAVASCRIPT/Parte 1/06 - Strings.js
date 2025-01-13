// - Strings:

// - Uma 'string' é uma sequência de caracteres que representa texto. Ela é usada para armazenar e manipular dados textual no código. Uma string pode conter 'letras', 'números', 'símbolos' e 'espaços em branco'.

// - String de texto são strings delimitadas por "aspas duplas" ou 'aspas simples' (””) (’’)

// - Exemplo:

    let mensagem = "Olá, mundo"

    console.log(mensagem) //Olá, mundo!

// - Nesse exemplo, a variável "mensagem" foi declarada e atribuída com a 'string de texto' "Olá, mundo!". Agora você pode usar essa variável para manipular ou exibir a string conforme necessário.

// - 'Strings de template' (template strings): São strings delimitadas por acento grave/backtick (``) que nos dão super poderes dentro das strings usando a sintaxe `${expressão}`. Isso facilita a introdução de variáveis e expressões (palavras e números) dentro da string.

// - Exemplo

    let nome = 'Stephani'
    let idade = 27
    let frase = `Meu nome é ${nome} e tenho ${idade} anos`

    console.log(frase) // Meu nome é Stephani e tenho 27 anos

// - Neste exemplo temos a variável 'nome' que recebe o valor 'stephani' e a variável 'idade 'recebendo '27'. Com o template string podemos inserir esses valores dentro de uma nova variável que no caso, a variável 'frase' de forma que ao ser exibida, ela inclua os valores das variáveis anteriores.