/*
    - Filter: O método FILTER serve para filtrar um array. Ele passará por todos os valores do array e você decidirá quais valores vão para seu novo array, e quais vão ser descartados.

 const novaArray = arrayOriginal.filter((valorAtual, indice, arrayOriginal) => {
			seu código aqui
});

	- 1) O filter vai passar por todos os itens do array, e o primeiro parâmetro é cada item, um por vez do array que estamos filtrando. Item OBRIGATÓRIO.

	- 2) O indíce é a posição atual que estamos filtrando. Item OPCIONAL.

	- 3) Uma cópia do array original. Item OPCIONAL.

	- A cada item, fazemos uma 'pergunta' ao código. Se a resposta for verdadeira naquele item, ele guardará o valorAtual no novo array. Caso seja falso, o valor 
    será descartado 
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(valorAtual => valorAtual % 2 === 0 );
// pares ficou assim... [2, 4, 6, 8, 10];
// numbers continua...   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];