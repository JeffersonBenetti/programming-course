// - While:
// Em quanto a condição for verdadeira o while irá rodar!
let i = 0

while (i < 30) {
    i++;
    console.log(i)
}

// - Do while:

// - O 'do while' é uma estrutura de loop em JavaScript que executa um bloco de código uma vez e, em seguida, verifica uma condição para determinar se deve continuar a executar o bloco novamente. Ao contrário do 'for' e do 'while' , o 'do while' garante que o bloco de código seja executado pelo menos uma vez, independentemente da condição.

// - Exemplo:
let contador = 1;

do {
console.log(contador);
contador++;
} while (contador <= 5);
// 1
// 2
// 3
// 4
// 5

// - Neste exemplo, o bloco de código dentro do 'do' é executado primeiro. Em cada iteração, o valor atual do 'contador' é exibido no console e, em seguida, o 'contador' é incrementado. Depois disso, a condição 'contador <= 5' é verificada. Se for verdadeira, o bloco de código é executado novamente. O loop é encerrado quando 'contador' atinge o valor 6.