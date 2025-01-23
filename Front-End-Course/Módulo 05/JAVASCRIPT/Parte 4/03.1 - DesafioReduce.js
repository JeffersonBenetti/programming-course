const companies = [
    { name: 'Sansung', marktValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marktValue: 415, CEO: 'Satya Nadella', FoundedOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marktValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', FoundedOn: 1976 }
]

const totalMarktValue = companies.reduce((acc, value) => {
    return acc + value.marktValue
}, 0)
// console.log(totalMarktValue)

const cart = [
    { productName: 'Abóbora', PricePerKg: 5, Kg: 1 },
    { productName: 'Pepino', PricePerKg: 3.55, Kg: 1.3 },
    { productName: 'Limão', PricePerKg: 1.2, Kg: 2 },
    { productName: 'Abacate', PricePerKg: 5.4, Kg: 1.67 },
    { productName: 'Morango', PricePerKg: 11.9, Kg: 3 },
]

const finalValue = cart.reduce((acc, price) => {
    return acc + (price.PricePerKg * price.Kg)
}, 0)
console.log(`A sua compra ficou no valor de R$:${finalValue.toFixed(2)}`)