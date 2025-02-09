// # - Operadores type of e delete:

// - Operador typeof: O operador 'typeof' é usado para verificar o tipo de dado de uma expressão. Ele retorna uma string que representa o tipo de dado da expressão.

// - Exemplo:
    let x = 5;
    console.log(typeof x); // Saída: "number"

    let y = "Hello";
    console.log(typeof y); // Saída: "string"

    let z = true;
    console.log(typeof z); // Saída: "boolean"

// - O operador 'typeof' é útil quando você precisa verificar o tipo de dado de uma variável ou valor antes de realizar operações ou tomar decisões com base no tipo.

// - Operador delete: O operador 'delete' é usado para remover uma propriedade de um objeto ou para remover um elemento de um array.

// - Exemplo:
    let obj = { nome: "João", idade: 25 };
    console.log(obj); // Saída: { nome: "João", idade: 25 }

    delete obj.nome;
    console.log(obj); // Saída: { idade: 25 }

    let arr = [1, 2, 3, 4];
    console.log(arr); // Saída: [1, 2, 3, 4]

    delete arr[2];
    console.log(arr); // Saída: [1, 2, undefined, 4]

// - Ao usar o 'delete' em objetos, a propriedade especificada é removida do objeto. Já em arrays, o 'delete' remove o elemento, mas o índice do elemento é mantido e o valor é definido como 'undefined'.

// - É importante ressaltar que o 'delete' não remove variáveis ou valores primitivos, ele é usado principalmente para manipular propriedades de objetos e elementos de arrays.