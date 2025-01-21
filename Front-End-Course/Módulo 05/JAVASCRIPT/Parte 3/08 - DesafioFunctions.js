/*
    - Calcular desconto:

        - Calcular o valor total dos produtos.

        - Todos os produtos acima de R$ 30,00 terá desconto de 10%.
*/

const cart = [10, 244, 99, 2, 20, 33, 250]

function ValueTotal(){
    totalValueOfProducts = 0

    cart.forEach( product => {
        totalValueOfProducts += product
    })

    return totalValueOfProducts.toFixed(2)
}

function ValueWithDiscount() {
    function discoutPercentage(product, percentage) {
        return (product * percentage) / 100
    }

    let totalValueOfProducts = 0

    cart.forEach(product => {
        if (product > 30) {
            // totalValueOfProducts = totalValueOfProducts + (product - discoutPercentage(product, 10))
            totalValueOfProducts += (product - discoutPercentage(product, 10))
        } else {
            // totalValueOfProducts = totalValueOfProducts + product
            totalValueOfProducts += product
        }
    })

    return totalValueOfProducts.toFixed(2)
}

function discount(){
    const result = ValueTotal() - ValueWithDiscount()
    return result.toFixed(2)
}

console.log(`O valor final da compra foi de R$: ${ValueTotal()}, porém você teve desconto e irá pagar apenas R$: ${ValueWithDiscount()}. Você economizou R$: ${discount()}`)