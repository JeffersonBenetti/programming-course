// - Function Argumentos/Parâmetros:
 
// - Em JavaScript, você pode definir 'funções' que recebem 'argumentos' ou 'parâmetros', que são valores que podem ser passados para a função quando ela é chamada. Esses argumentos são usados dentro do corpo da função para realizar operações ou processamentos específicos. Você também pode definir funções com vários parâmetros separados por vírgula

// - Exemplo:
// function soma(a, b) {
//   return a + b;
// }

// const resultado = soma(3, 4);
// console.log(resultado);

// - Neste exemplo, a função 'soma' recebe dois parâmetros 'a' e 'b'. Quando a função é chamada com os argumentos '3' e '4', ela retorna a soma desses dois valores. O resultado, que é '7', é armazenado na variável 'resultado' e, em seguida, é exibido no console.

// - Os parâmetros em JavaScript são opcionais. Se você chamar uma função sem fornecer todos os argumentos esperados, os parâmetros restantes serão definidos como 'undefined'. Você também pode definir valores padrão para os parâmetros, caso nenhum argumento seja fornecido durante a chamada da função.

// function saudacao(nome = 'Visitante') {
//   console.log('Olá, ' + nome + '!');
// }

// saudacao(); // Saída: Olá, Visitante!
// saudacao('Maria'); // Saída: Olá, Maria!

// - Neste exemplo, a função 'saudacao' tem um parâmetro 'nome' com um valor padrão definido como ‘Visitante’. Se nenhum argumento for fornecido durante a chamada da função, o valor padrão será usado. Se um argumento for fornecido, o valor do parâmetro será substituído pelo argumento fornecido.

// - Os 'argumentos' e 'parâmetros' em JavaScript permitem que as 'funções' sejam 'flexíveis' e capazes de trabalhar com diferentes valores, permitindo que você reutilize o mesmo código com diferentes dados de entrada.

function sayMyName(name){
  console.log(`O nome é: ${name}`)
}
sayMyName('Jefferson')

// Soma
function sum(valor, valor2){
  console.log(valor + valor2)
}
sum(10, 2)

// Subtração
function sub(valor, valor2){
  console.log(valor - valor2)
}
sub(10, 2)

// Multiplicação
function mult(valor, valor2){
  console.log(valor * valor2)
}
mult(10, 2)

// Divisão
function div(valor, valor2){
  console.log(valor / valor2)
}
div(10, 2)

// Resto
function resto(valor, valor2){
  console.log(valor % valor2)
}
resto(11, 2)