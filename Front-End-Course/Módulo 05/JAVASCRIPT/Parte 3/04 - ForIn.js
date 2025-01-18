// - For in:

// - O 'for in' é uma estrutura de loop em JavaScript que permite iterar sobre as propriedades enumeráveis de um objeto. Ele percorre todas as propriedades enumeráveis, incluindo as propriedades herdadas do protótipo do objeto.

// - Exemplo:
    // const pessoa = {
    // nome: 'João',
    // idade: 30,
    // profissao: 'Engenheiro'
    // };

    // for (const propriedade in pessoa) {
    // console.log(propriedade + ': ' + pessoa[propriedade]);
    // }
    // nome: João
    // idade: 30
    // profissao: Engenheiro

// - Neste exemplo, o objeto 'pessoa' possui três propriedades: 'nome', 'idade' e 'profissao'. O 'for in' é usado para percorrer essas propriedades. Em cada iteração, o nome da propriedade é atribuído à variável 'propriedade', e o valor correspondente é exibido no console usando 'pessoa[propriedade]'.

    const users = {name: 'Rodolfo', age: 33, street: 'Rua dos bobos'}

    // for (const key in users) {
    //     console.log(key)
    // }

// - Como acessar a chave junto com o valor. Tem duas formas para estar fazendo isso no for in:
    console.log(users.name) // Tradicional.
    console.log(users['name']) // Essa forma da alguns super poderes.

// - Exemplo:
    for (const key in users) {
        console.log(key + ' : ' + users[key])
        console.log(`${key} : ${users[key]}`)
        // users[chave, uma hora ela vai ser o name, age e o street]
    }