/*
    - This

        - This em inglês significa -> Este, Esta, Isto...

    - No javascript, o this faz referência:

        - Node -> module.exports
        - Web -> window

    - Escopo:
        
        - Global -> Quando começamos a escrever nossa aplicação. No contexto global, o this faz referência ao objeto global, que é o objeto window no navegador de internet ou do objeto globla no node.js.

        - Local -> Por exemplo, dentro de uma função!
*/

const person = {
    name: 'Rodolfo',
    age: 25,
    talk: function(){
        console.log(this.name)
    }
}

function myFunction(){
    this.console.log('Agora sou o global')
}