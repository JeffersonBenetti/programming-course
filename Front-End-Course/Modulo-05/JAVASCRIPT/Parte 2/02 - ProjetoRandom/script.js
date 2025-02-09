const generateNumber = () => {
    const min = Math.floor(document.querySelector('.input-min').value)
    const max = Math.ceil(document.querySelector('.input-max').value)

    if (min < max) {
        const result = Math.floor(Math.random() * (max - min + 1) + min);

        alert(result)
    }else {
        alert('O número mínimo não pode ser maior ou igual que o número maximo.')
    }
}