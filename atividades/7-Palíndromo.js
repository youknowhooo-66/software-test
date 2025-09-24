
function Palindromo(str) {

  const limparStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (limparStr.length === 0) {
    return true; 
  }

  const pilha = [];
  const fila = [];


  for (let i = 0; i < limparStr.length; i++) {
    const char = limparStr[i];
    pilha.push(char);
    fila.push(char);
  }

  while (pilha.length > 0) {
    if (pilha.pop() !== fila.shift()) {
      return false;
    }
  }

  return true;
}

console.log(Palindromo("arara"));
console.log(Palindromo("teste"));
console.log(Palindromo("A Man, a Plan, a Canal: Panama"));