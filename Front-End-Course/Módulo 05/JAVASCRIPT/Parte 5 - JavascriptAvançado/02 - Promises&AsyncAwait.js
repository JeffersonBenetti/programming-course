/*
    - Em JavaScript, uma promise é um objeto que representa o resultado de uma operação assíncrona, que pode ser bem-sucedida ou falhar. Promises são úteis para lidar com operações que demoram para ser concluídas, como solicitações de rede ou leitura de arquivos.

    - Como funcionam?
    
        - Uma promise é um proxy para um valor que pode não ser conhecido quando a promise é criada.

        - A promise pode estar em três estados: pendente, resolvida ou rejeitada. 

        - A promise é criada e assume imediatamente o estado pendente. 

        - A promise pode ser resolvida, quando a operação é realizada sem erros, ou rejeitada, quando a operação encontra algum erro.

        - É possível associar manipuladores ao valor de sucesso ou motivo de falha da promise.

    - Vantagens das promises:

        - As promises permitem tratar eventos ou ações que acontecem de forma assíncrona.

        - As promises oferecem uma maneira mais elegante e legível de ver o fluxo do programa.

        - As promises permitem controlar melhor o código, inclusive na manipulação de erros. 


    - Async/Await é uma funcionalidade do JavaScript que permite escrever código assíncrono de forma mais legível e intuitiva.

        - O Async/Await é construído sobre o conceito de promessas, que são a ferramenta do JavaScript para lidar com código assíncrono. 

        - As palavras-chave "async" e "await" são usadas para:

        - Transformar um método em um método assíncrono.

        - Suspender a avaliação do método async delimitador até que a operação assíncrona seja concluída, retornar o resultado da operação assíncrona quando ela for concluída.

        - Tornar o código mais linear e fácil de seguir.

        - Reduzir a complexidade e eliminar a necessidade de callbacks.

    - O Async/Await é uma adição mais recente ao JavaScript e está presente nativamente no ECMAScript 2017 (ES8). 
*/