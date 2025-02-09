/* 
    - Arrow Functions:

    - function padrão -> function(){}

    - Arrow function -> () => {}

    - Não escrevemos "function".
    - Além disso, usamos o sinal "=>" para criá-la.
    - O que lembra uma flecha, fazendo jus ao nome "Arrow functions".

*/

function myName(name) {
    return `Seu nome é ${name}`
}

const myAge = (age) => `e você tem ${age}`

console.log(`${myName('Jefferson')}, ${myAge('32')} anos.`)