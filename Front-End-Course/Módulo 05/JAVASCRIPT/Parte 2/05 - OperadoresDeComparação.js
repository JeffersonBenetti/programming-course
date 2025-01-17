// - Operadores de comparação:

// - Os operadores de comparação em JavaScript são utilizados para 'comparar' dois valores e retornar um resultado booleano (true ou false) com base na comparação. Eles permitem verificar se os valores são iguais, diferentes, maiores, menores ou atendem a outras condições.

// - Igual (==): O operador de igual compara se dois valores são iguais e retorna true se forem iguais e false caso contrário. Ele também realiza coerção de tipo, o que pode levar a resultados inesperados.

// Exemplo:
    let a = 5;
    let b = "5";
    console.log(a == b); // Saída: true (apesar dos tipos diferentes, a coerção de tipo ocorre e os valores são considerados iguais)

// - Estritamente igual (===): O operador de estritamente igual compara se dois valores são iguais e do mesmo tipo. Ele não realiza coerção de tipo.

// - Exemplo:
    let c = 5;
    let d = "5";
    console.log(c === d); // Saída: false (os tipos são diferentes, portanto, o resultado é falso)

// - Diferente (!=): O operador de diferente compara se dois valores são diferentes e retorna true se forem diferentes e false caso contrário. Assim como o operador de igual, ele também realiza coerção de tipo.

// - Exemplo:
    let e = 5;
    let f = "5";
    console.log(e != f); // Saída: false (apesar dos tipos diferentes, a coerção de tipo ocorre e os valores são considerados iguais)

// - Estritamente diferente (!==): O operador de estritamente diferente compara se dois valores são diferentes e do mesmo tipo. Ele não realiza coerção de tipo.

// - Exemplo:
let g = 5;
let h = "5";
console.log(g !== h); // Saída: true (os tipos são diferentes, portanto, o resultado é verdadeiro)

// - Maior que (>): O operador maior que compara se o primeiro valor é estritamente maior que o segundo valor.

// - Exemplo:
    let i = 5;
    let j = 3;
    console.log(i > j); // Saída: true (5 é maior que 3)

// - Menor que (<): O operador menor que compara se o primeiro valor é estritamente menor que o segundo valor.

// - Exemplo:
    let k = 5;
    let l = 3;
    console.log(k < l); // Saída: false (5 não é menor que 3)

// - Maior ou igual a (>=): O operador maior ou igual a compara se o primeiro valor é maior ou igual ao segundo valor.

// - Exemplo:
    let m = 5;
    let n = 3;
    console.log(m >= n); // Saída: true (5 é maior ou igual a 3)

// - Menor ou igual a (<=): O operador menor ou igual a compara se o primeiro valor é menor ou igual ao segundo valor.

// - Exemplo:
    let o = 5;
    let p = 3;
    console.log(o <= p); // Saída: false (5 não é menor ou igual a 3)

// - Esses são alguns dos operadores de 'comparação' mais comuns do JavaScript. Eles são utilizados para comparar valores e tomar decisões com base nos resultados das comparações. É importante ter em mente a diferença entre os operadores de igualdade e os operadores de igualdade estrita, pois a coerção de tipo pode levar a resultados inesperados em algumas situações.