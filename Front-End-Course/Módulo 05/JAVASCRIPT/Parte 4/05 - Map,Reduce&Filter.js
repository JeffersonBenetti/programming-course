/*
    - Critério para comprar empresas.

        - Adicionar 10% de valor de mercado a todas as companhias -> Map.

        - Filtrar somente companhias fundadas abaixo de 1990 -> Filter.

        - Somar o valor de mercado das restantes -> Reduce.
*/

// Temos três formas de fazer a mesma coisa.

// // - Primeiro exemplo:
const companies = [
    { name: 'Sansung', marktValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marktValue: 415, CEO: 'Satya Nadella', FoundedOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marktValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', FoundedOn: 1976 }
]

const newCompanies = companies.map(company => {
    company.marktValue += (company.marktValue / 10)

    return company
})

const companiesFoundedOn = newCompanies.filter(company => company.FoundedOn < 1990)

const finalMarketValue = companiesFoundedOn.reduce((acc, value) => {
    return acc + value.marktValue
}, 0)
console.log(`Primeira forma ${finalMarketValue}`)

// // Fim do primeiro exemplo!

// - Segundo exemplo:
const companiesTwo = [
    { name: 'Sansung', marktValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marktValue: 415, CEO: 'Satya Nadella', FoundedOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marktValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', FoundedOn: 1976 }
]

const marketValueOldCompanies = companiesTwo.map(company => {
    company.marktValue += (company.marktValue / 10)

    return company
}).filter( company => company.FoundedOn < 1990).reduce( (acc, company) => acc + company.marktValue, 0)
console.log(`Segunda forma ${marketValueOldCompanies}`)

// Fim do segundo exemplo!

// Terceiro exemplo:
const companiesTree = [
    { name: 'Sansung', marktValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marktValue: 415, CEO: 'Satya Nadella', FoundedOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marktValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', FoundedOn: 1976 }
]

const AddPorcent = (company => {
    company.marktValue += (company.marktValue / 10)

    return company
})

const filterCompanies = (company => company.FoundedOn < 1990)

const reduceMarketValue = ((acc, company) => acc + company.marktValue)

const valueMarketOldCompanies = companiesTree
.map(AddPorcent)
.filter(filterCompanies)
.reduce(reduceMarketValue, 0)
console.log(`Terceira forma ${valueMarketOldCompanies}`)