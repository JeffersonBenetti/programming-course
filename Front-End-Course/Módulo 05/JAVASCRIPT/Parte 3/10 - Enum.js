/*
    - Enum:

    - O formato utilizado para fazer o ENUM é:

        - GAME_OPTIONS -> Snake Case
                
                não o
        
        - gameOptions -> Camel Case.
*/

const result = document.querySelector('.result')
const yourScore = document.querySelector('#your-score')
const machineScore = document.querySelector('#machine-score')

let pointForHuman = 0
let pointForMachine = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human == machine) {
        result.innerHTML = 'Deu Empate!'
    }
    else if (
        (human == GAME_OPTIONS.PAPER && machine == GAME_OPTIONS.ROCK) ||
        (human == GAME_OPTIONS.ROCK && machine == GAME_OPTIONS.SCISSORS) ||
        (human == GAME_OPTIONS.SCISSORS && machine == GAME_OPTIONS.PAPER)) {
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