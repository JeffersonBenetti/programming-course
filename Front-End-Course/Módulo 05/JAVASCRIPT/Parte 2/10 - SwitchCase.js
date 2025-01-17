// - Switch case:

// - O 'switch' é uma estrutura de controle em JavaScript que permite avaliar expressões e executar diferentes blocos de código com base no valor dessas expressões. Ele é útil quando se tem múltiplas condições para verificar e executar ações diferentes em cada caso.

// - Exemplo:
  const diaDaSemana = 5;
  let mensagem;

  switch (diaDaSemana) {
    case 1:
      mensagem = 'Hoje é segunda-feira.';
      break;
    case 2:
      mensagem = 'Hoje é terça-feira.';
      break;
    case 3:
      mensagem = 'Hoje é quarta-feira.';
      break;
    case 4:
      mensagem = 'Hoje é quinta-feira.';
      break;
    case 5:
      mensagem = 'Hoje é sexta-feira.';
      break;
    case 6:
      mensagem = 'Hoje é sábado.';
      break;
    case 7:
      mensagem = 'Hoje é domingo.';
      break;
    default:
      mensagem = 'Dia inválido.';
  }

  console.log(mensagem); // Output: Hoje é sexta-feira.

// - Neste exemplo, a variável 'diaDaSemana' possui o valor 5, correspondendo a sexta-feira. O 'switch'  verifica o valor de 'diaDaSemana' e executa o código associado ao caso correspondente. No caso de 'diaDaSemana' ser 5, a mensagem 'Hoje é sexta-feira.' será atribuída à variável 'mensagem'.