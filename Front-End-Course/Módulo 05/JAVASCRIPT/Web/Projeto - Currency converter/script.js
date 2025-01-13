const convertButton = document.querySelector('.convert-button')

function ConvertValues(){
    const inputValue = document.querySelector('.input-value').value
    const valueToConvert = document.querySelector('.value-to-convert')
    const convertedValue = document.querySelector('.converted-value')

    const dolarToday = 6.10
    const euroToday = 6.23

    valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)
    
    convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputValue / dolarToday)
}

convertButton.addEventListener('click', ConvertValues)
