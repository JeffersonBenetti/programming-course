// - FunctionReturn:

// - A declaração 'return' é usada dentro de uma função para especificar o 'valor' que a função deve retornar quando for chamada. O valor retornado pode ser de qualquer tipo de dado, como números, strings, objetos ou até mesmo outras funções.

// - Exemplo:
    function saudacao(nome) {
    if (!nome) {
        return; // Encerra a função e retorna undefined
    }
    return 'Olá, ' + nome + '!';
    }

    const mensagem = saudacao('João');
    console.log(mensagem);

// - Neste exemplo, a função 'saudacao' verifica se o parâmetro 'nome' é fornecido. Se o 'nome' não for fornecido, a função é encerrada imediatamente e retorna 'undefined'. Caso contrário, a função retorna uma mensagem de saudação concatenando o nome fornecido. A mensagem é armazenada na variável 'mensagem', em seguida, é exibida no console.