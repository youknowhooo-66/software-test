
function RPN(expr) {
  const pilha = [];
  const tokens = expr.split(' ');

  for (const token of tokens) {

    if (!isNaN(parseFloat(token)) && isFinite(token)) {
      pilha.push(parseFloat(token));
    } else {
      const operandor2 = pilha.pop();
      const operandor1 = pilha.pop();
      let resultado;

      switch (token) {
        case '+':
          result = operandor1 + operandor2;
          break;
        case '-':
          result = operandor1 - operandor2;
          break;
        case '*':
          result = operandor1 * operandor2;
          break;
        case '/':
          result = operandor1 / operandor2;
          break;
        default:
          throw new Error(`Operador desconhecido: ${token}`);
      }
      pilha.push(resultado);
    }
  }

  if (pilha.length !== 1) {
    throw new Error("Expressão RPN inválida");
  }

  return pilha.pop();
}


console.log(RPN("3 4 + 2 *"));
console.log(RPN("5 1 2 + 4 * + 3 -"));