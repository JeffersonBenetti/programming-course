/*
    - Json: (JavaScript Object Notation) é um formato leve de troca de dados que é fácil de ler e escrever tanto para humanos quanto para máquinas. Ele é amplamente usado no JavaScript e em outras linguagens para representar e enviar dados entre sistemas, como em APIs ou armazenamento de informações.

    - Padrão de troca e armazanamento de informações.
    - Padrão lógico simples.
    - Leve para ser enviado e recebido.
    - Simples e fácil de entender.
    - Derivado do Javascript.
    - Utiliza o formato chave / valor.

    - Características do JSON:

        - Formato baseado em texto:

        - É sempre escrito como uma string.
        
        - Estruturado com chaves {} (objetos) e colchetes [] (arrays).

        - Estrutura simples:

        - Um JSON é composto por pares chave: valor.
        As chaves são sempre strings delimitadas por aspas duplas ".

        - Os valores podem ser:
            - String ("texto")
            - Número (123)
            - Booleano (true ou false)
            - Nulo (null)
            - Outro objeto { }
            - Um array [ ]

        - Independente de linguagem:

        - Embora tenha "JavaScript" no nome, JSON é usado em quase todas as linguagens modernas.
*/

// JSON em JavaScript:
// Para converter um objeto JavaScript em JSON:
const objeto = {
  nome: "João",
  idade: 25,
  profissao: "Desenvolvedor"
};

const jsToJson = JSON.stringify(objeto); // Converte para JSON
console.log(json); // {"nome":"João","idade":25,"profissao":"Desenvolvedor"}

// Para converter JSON em um objeto JavaScript:
const jsonToJs = '{"nome":"João","idade":25,"profissao":"Desenvolvedor"}';

const objeto2 = JSON.parse(jsonToJs); // Converte para objeto
console.log(objeto2); // João