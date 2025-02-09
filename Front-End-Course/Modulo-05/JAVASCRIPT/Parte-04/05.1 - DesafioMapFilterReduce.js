/*
    - Subtrair 10% de valor de mercado a todas companhias.
    - Filtrar somente companhias fundadas depois de 1980.
    - Somar o valor de mercado das restantes.
*/
// Para treinar, estarei utilizando as três formas de fazer esse exercício para estar colocando em pratica e absorver melhor o conteúdo.

// Primeiro forma só para saber que existe, mas não utilizada:
const companies = [
    { name: 'Sansung', marktValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marktValue: 415, CEO: 'Satya Nadella', FoundedOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marktValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', FoundedOn: 1976 }
]

const newCompanies = companies.map(company => {
    company.marktValue -= company.marktValue / 10

    return company
})

const companiesFundedOn = newCompanies.filter( company => company.FoundedOn > 1980) 

const marketValueReduce = companiesFundedOn.reduce( (acc, company) => acc + company.marktValue, 0)

console.log(`Primeira forma ${marketValueReduce}`)

// Segunda forma, bastante utilizada:
const companiesTwo = [
    { name: 'Sansung', marktValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marktValue: 415, CEO: 'Satya Nadella', FoundedOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marktValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', FoundedOn: 1976 }
]

const finalMarketValue = companiesTwo.map( company => {
    company.marktValue -= company.marktValue / 10

    return company
}).filter( company => company.FoundedOn > 1980).reduce((acc, company) => acc + company.marktValue, 0)

console.log(`Segunda forma ${finalMarketValue}`)

// Terceira forma, muito utiliza quando você quer reutilizar o código:
const companiesTree = [
    { name: 'Sansung', marktValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marktValue: 415, CEO: 'Satya Nadella', FoundedOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marktValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', FoundedOn: 1976 }
]

const discountPorcent = (company => {
    company.marktValue = company.marktValue - (company.marktValue / 10)

    return company
})

const companiesFoundedOnNew = (company => company.FoundedOn > 1980)

const reduceMarketValueFinal = ((acc, company) => acc + company.marktValue)

const valueFinalCompanies = companiesTree
.map(discountPorcent)
.filter(companiesFoundedOnNew)
.reduce(reduceMarketValueFinal, 0)

console.log(`Terceira forma ${valueFinalCompanies}`)