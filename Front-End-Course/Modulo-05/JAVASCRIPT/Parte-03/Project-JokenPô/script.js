const result = document.querySelector('.result')
const yourScore = document.querySelector('#your-score')
const machineScore = document.querySelector('#machine-score')

let pointForHuman = 0
let pointForMachine = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human == machine) {
        result.innerHTML = 'Deu Empate!'
    }
    else if (
        (human == 'paper' && machine == 'rock') ||
        (human == 'rock' && machine == 'scissors') ||
        (human == 'scissors' && machine == 'paper')) {
        pointForHuman++
        yourScore.innerHTML = pointForHuman
        result.innerHTML = 'Você GANHOUUU!'
    }
    else {
        pointForMachine++
        machineScore.innerHTML = pointForMachine
        result.innerHTML = 'Você PERDEUU'
    }
}