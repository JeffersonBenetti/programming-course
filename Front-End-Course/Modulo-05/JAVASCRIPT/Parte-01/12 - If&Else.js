// - If & else:

// - No JavaScript, o "if" e "else" são usados para criar estruturas condicionais. Essas estruturas permitem que o código execute diferentes blocos de instruções com base em uma condição. O bloco de código dentro do "if" é executado se a condição fornecida for 'verdadeira', enquanto o bloco de código dentro do "else" é executado se a condição for 'false'.

// - Exemplo:

    // let idade = 18

    // if ( idade >= 18) {
    //     console.log("Você é maior de idade.")
    // } else {
    //     console.log("Você é menor de idade.")
    // }
        //// Você é maior de idade.

// - Nesse exemplo, a variável "idade" é definida como '18'. O bloco de código dentro do "if" é executado porque a condição "idade >= 18" é verdadeira. Portanto, a mensagem "Você é maior de idade" será exibida no console. Se alterarmos o valor de "idade" para '16', o bloco de código dentro do "else" será executado, e a mensagem "Você é menor de idade" será exibida no console.


const notaDoAluno = (5 + 4 + 8) / 3
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){
    // Será executado, se o IF for verdadeiro.
    console.log('Parabéns, você passou de ano!!')
} else {
    // Se o IF for falso, ele entra aqui.
    console.log('Você foi reprovado')
}