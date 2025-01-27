const list = document.querySelector('.list')
const showAllButton = document.querySelector('.show-all')
const discountItemsButton = document.querySelector('.discount-items')
const sumAllButton = document.querySelector('.sum-all')
const filterVeganButton = document.querySelector('.filter-vegan')

const formatCurrency = (value) => {
    return value.toLocaleString('pt-br', { 
    style: 'currency', 
    currency: 'BRL' 
    });
}

const showAll = (array) => {
    let newLi = ''

    array.forEach(product => {
        newLi += `
            <li>
                <img src=${product.src} alt=${product.alt}>
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = newLi
}

const discountPrices = () => {
    const newPrice = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9
    }))

    showAll(newPrice)
}

const sumAll = () => {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>O valor de todos os lanches é ${formatCurrency(totalValue)}</p>
        </li>
    `
}

const filterVegan = () => {
    const veganOnly = menuOptions.filter(product => product.vegan)

    showAll(veganOnly)
}

showAllButton.addEventListener('click', () => showAll(menuOptions))
discountItemsButton.addEventListener('click', discountPrices)
sumAllButton.addEventListener('click', sumAll)
filterVeganButton.addEventListener('click', filterVegan)