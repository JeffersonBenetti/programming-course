// Var x Let X Const

var myVar = 'Hello'

// let myLet = 'Olá'
// const myConst = 'Hei'

// console.log( myLet) // Tentiva de acessar a variável let no escopo "global/pai". Resultado: Consegue acessar. 

if (true) {
    let myLet = 'Olá'
    const myConst = 'Hei'
}

console.log(myLet) // Tentativa de acessar a variável let dentro do escopo "filho". Resultado: Não da para acessar.

// Resumindo, quanto o let e const, por segurança você só consegue acessar ele quando você tenta acessa-lo no mesmo escopo, porém os dois você consegue acessa-los através do escopo "filho" que está no escopo "pai".

// Já a variável "var" você consegue ter acessdo mesmo fora do escopo. Isso é muito perigoso.