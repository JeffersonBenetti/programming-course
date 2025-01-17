// - SetTimeout & setInterval:

// - 'SetTimeout' e 'setInterval' são funções em JavaScript que permitem agendar a execução de código após um determinado intervalo de tempo.

// - A função 'setTimeout' é usada para executar um bloco de código após um intervalo de tempo específico.

// - Exemplo:
  setTimeout(() => {
    console.log('Passaram-se 3 segundos.');
  }, 3000);

  setTimeout( function() {
    console.log('Passaram-se 3 segundos.');
  }, timeout);

  function generateNumber(){
    console.log('Passaram-se 3 segundos.');
  };

  setTimeout(generateNumber, timeout);

// - Neste exemplo, a função anônima é executada após '3 segundos' (3000 milissegundos). A mensagem 'Passaram-se 3 segundos.' será exibida no console.

// - A função 'setInterval' é usada para executar repetidamente um bloco de código em intervalos regulares.

// - Exemplo:
  let contador = 10;

  const intervalo = setInterval(() => {
    console.log(contador);
    contador--;

    if (contador === 0) {
      clearInterval(intervalo);
      console.log('Contagem regressiva concluída.');
    }
  }, 1000);

// - Neste exemplo, a função anônima é executada a cada segundo (1000 milissegundos). A variável 'contador' é decrementada a cada iteração e exibida no console. Quando o contador chega a 0, o 'clearInterval' é chamado para parar a execução do 'setInterval' e a mensagem 'Contagem regressiva concluída.' é exibida no console.

// - Ambas as funções 'setTimeout' e 'setInterval' são úteis para agendar ações em um determinado momento ou em intervalos de tempo regulares, permitindo a execução assíncrona de código em JavaScript.