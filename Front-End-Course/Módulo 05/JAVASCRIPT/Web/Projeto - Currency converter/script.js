const convertButton = document.querySelector('.convert-button')
const convertedCurrencySelection = document.querySelector('.converted-currency-selection')

function currencyExchangeToCovert() {
    const convertedCurrencyImage = document.querySelector('.converted-currency-image')
    const convertedCurrencyName = document.querySelector('.converted-currency-name')

    if (convertedCurrencySelection.value == 'dolar') {
        convertedCurrencyImage.src = '././assets/image/dolar.png'
        convertedCurrencyName.innerHTML = '$ Dólar Americano'
    }
    if (convertedCurrencySelection.value == 'euro') {
        convertedCurrencyImage.src = '././assets/image/euro.png'
        convertedCurrencyName.innerHTML = '€ Euro'
    }

    ConvertValues()
}

function ConvertValues() {
    const inputValue = document.querySelector('.input-value').value
    const valueToConvert = document.querySelector('.value-to-convert')
    const convertedValue = document.querySelector('.converted-value')

    const dolarToday = 6.10
    const euroToday = 6.23

    if (convertedCurrencySelection.value == 'dolar') {
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue / dolarToday)
    }
    if (convertedCurrencySelection.value == 'euro') {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue / euroToday)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)


}

convertButton.addEventListener('click', ConvertValues)
convertedCurrencySelection.addEventListener('change', currencyExchangeToCovert)
