

/*
    - Map: O método MAP serve para mapear um array. Mapear ? Sim, com o map, você pode percorrer posição por posição de um array e criar um novo array, alterando tudo que você quiser do array original.
*/

const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal) => xxx)

/*
    - O Map aceita até 3 parâmetros:

        - 1) Item: O Map vai passar por todos os itens do array, e o primeiro parâmetro é cada item, um por vez do array que estamos mapeando. Item OBRIGATÓRIO.

        - 2) Indíce: O indíce é a posição atual que estamos mapeando. Item OPCIONAL.

        - 3) Array completo: Uma cópia do array original. Item OPCIONAL.
*/

const numbers = [1, 2, 3, 4];
const double = numbers.map((num) => num * 2);
// double ficou assim... [2, 4, 6, 8];
// numbers continua...   [1, 2, 3, 4];