// - Operadores lógicos:

// - Os operadores lógicos em JavaScript são utilizados para combinar expressões lógicas e retornar um valor booleano (true ou false) com base nas condições fornecidas. Eles permitem realizar operações lógicas, como a negação, conjunção e disjunção, em valores booleanos.

// - E lógico (&&): O operador "E" lógico retorna true se as duas expressões que o cercam forem verdadeiras, caso contrário, retorna false.

// - Exemplo:
    let a = 5;
    let b = 3;
    let c = 7;
    console.log(a > b && b < c); // Saída: true (ambas as expressões são verdadeiras)

// - 'OU' lógico (||): O operador "OU" lógico retorna true se pelo menos uma das expressões que o cercam for verdadeira. Retorna false apenas se ambas as expressões forem falsas.

// - Exemplo:
    let ab = 5;
    let bc = 3;
    let cd = 7;
    console.log(ab > bc || bc > cd); // Saída: true (pelo menos uma das expressões é verdadeira)

// - - Negação lógica (!): O operador de negação lógica inverte o valor de uma expressão booleana. Se a expressão for verdadeira, a negação retornará false, e se a expressão for falsa, a negação retornará true.

// - Exemplo:
    let abc = 5;
    let bcd = 3;
    console.log(!(abc > bcd)); // Saída: false (a expressão é verdadeira, mas a negação a torna falsa)


// - Esses são os 'operadores lógicos' básicos do JavaScript. Eles são frequentemente utilizados em estruturas condicionais, como instruções if, para avaliar condições e tomar decisões com base nos resultados das expressões lógicas.