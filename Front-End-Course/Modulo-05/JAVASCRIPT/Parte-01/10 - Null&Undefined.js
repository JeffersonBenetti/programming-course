// - Null e Undefined:

// - O valor 'null' é um valor nulo ou "vazio” definido pelo Dev quando cria o código. Enquanto o valor 'undefined' é quando estamos uma propriedade inexistente.

// - Exemplo null:

    let nome = null

    if (nome === null) {
        console.log("O nome não foi fornecido")
    } else {
        console.log("O nome é: " + nome)
    } //O nome não foi fornecido

// - Neste exemplo, atribuímos o valor 'null' à variável 'nome'. Em seguida, verificamos se o valor de nome é exatamente igual a 'null 'usando o operador de igualdade estrita (===). Se for igual, exibimos a mensagem "O nome não foi fornecido.". Caso contrário, exibimos a mensagem "O nome é: " seguida do valor de 'nome'.

// - Exemplo undefined:

    if (nome === null) {
        console.log("O nome não foi fornecido.")
    } else {
        console.log("O nome é: " + nome)
    } // ReferenceError: nome is not defined

// - Neste exemplo eu tento pegar o valor de nome porém como exclui a variável e estou tentando usar algo que não existe, faz com que eu receba como resposta 'undefined'.