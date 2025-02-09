// - forEach:

// - O método 'forEach()' é uma funcionalidade 'incorporada' em 'arrays' em JavaScript, que permite iterar de forma simples e concisa sobre os elementos do array, executando uma função de callback para cada elemento.

// - Exemplo:
    const numeros = [1, 2, 3, 4, 5];

    numeros.forEach(function(numero) {
    console.log(numero);
    });
    // 1
    // 2
    // 3
    // 4
    // 5

// - Neste exemplo, o método 'forEach()' é chamado no array 'numeros'. Para cada elemento do array, a função de callback é executada, exibindo o valor do elemento no console.