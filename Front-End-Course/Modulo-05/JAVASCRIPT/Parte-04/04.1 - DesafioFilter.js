const companies = [
    { name: 'Sansung', marktValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marktValue: 415, CEO: 'Satya Nadella', FoundedOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marktValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', FoundedOn: 1976 }
]

/*
    - Critérios:

        - Empresas que o valor seja menor que 200milhões.
        - Empresas que sejam mais novas, de 1990 pra frente.
*/

const newCopanies = companies.filter( company => company.marktValue < 200 && company.FoundedOn > 1990)
//console.log(newCopanies)

const newCompaniesTwo = companies.filter( company => {
    if(company.marktValue < 200 && company.FoundedOn > 1990){
        return true
    } else {
        return false
    }
})
// console.log(newCompaniesTwo)