// Desafio 1:

const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false }
]

const newList = list.map( user => {
    // Usando uma variável por fora para determinar se o usuário é vip ou não.
    let braceletColor
    // Usando if para verificar e adicionar um valor a variável braceletColor.
    if(user.vip){
        braceletColor = 'Black'
    } else {
        braceletColor = 'Green'
    }
    // Variável para guardar o novo objeto criado.
    const newUser = {
        name: user.name,
        braceletColor: braceletColor
    }

    return newUser
})
// console.log(newList)

const newListTwo = list.map( user => {
    // Variável para guardar o novo objeto criado.
    const newUser = {
        name: user.name,
        // Usando o ternário de "if else" dentro da variável.
        braceletColor: user.vip ? 'Black' : 'Green'
    }

    return newUser
})
// console.log(newListTwo);

const newListTree = list.map( user => {
    // Usando somente o return na composição do código.
    return {
        name: user.name,
        // Usando o ternário de "if else" dentro da variável.
        braceletColor: user.vip ? 'Black' : 'Green'
    }
})
// console.log(newListTree)


// Final do desafio 1.


// Desafio 2:

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 }
]


const newStudents = students.map( student => {
    // Usando uma variável para determinar se o aluno está aprovado ou reprovado.
    let studentStatus 
    // Usando if para verificar e adicionar um valor a variável studentStatus.
    if(student.testGrade > 5){
        studentStatus = 'Aprovado'
    } else if(student.testGrade = 5) {
        studentStatus = 'Recuperação'
    } else {
        studentStatus = 'Reprovado'
    }
    // Variável para guardar o novo objeto criado.
    const newStudents = {
        name: student.name,
        studentStatus: studentStatus
    }

    return newStudents
})
// console.log(newStudents)

const newStudentsTwo = students.map( student => {
    const newStudent = {
        name: student.name,
        studentStatus: student.testGrade > 5 ? 'Aprovado' : student.testGrade = 5 ? 'Recuperação' : 'Reprovado'
    }

    return newStudent
})
// console.log(newStudentsTwo)

const newStudentsTree = students.map( student => {
    return {
        name: student.name,
        studentStatus: student.testGrade > 5 ? 'Aprovado' : student.testGrade = 5 ? 'Recuperação' : 'Reprovado'
    }
})
// console.log(newStudentsTree)