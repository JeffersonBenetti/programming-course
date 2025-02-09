// - For of:

// - O 'for of' é uma estrutura de loop introduzida no ECMAScript 2015 (também conhecido como ES6) em JavaScript. Ele permite percorrer elementos iteráveis, como arrays, strings, Map, Set, entre outros, de uma maneira mais simples e concisa.

// - Exemplo:
    const numeros = [1, 2, 3, 4, 5];

    for (const numero of numeros) {
    console.log(numero);
    }
    // 1
    // 2
    // 3
    // 4
    // 5

// - Neste exemplo, o array 'numeros' é percorrido usando o 'for of'. Em cada iteração, o valor atual do elemento é atribuído à variável 'numero', e em seguida, o valor é exibido no console.

    const myName = 'Jefferson'
    const users = ['Jefferson', 'Maria', 'Lee Andrew', 'Gabriele']


    for (const name of users){
        console.log(name);
    }