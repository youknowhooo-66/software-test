export function executarOperacao(a, b, operacao){ 
    if(typeof a !== "number" || typeof b !== "number"){
        return "Erro ao somar"
    }
    if(operacao == "soma"){
        return a + b
    }
    else if (operacao == "multiplicacao"){
        return a * b
    }
    else if (operacao == "divisao"){
        return a / b
    }
    else if (operacao == "subtracao"){
        return a - b
    }
    else {
        return "erro: operação não existe"
    }
}

console.log(executarOperacao(2,2, "soma"))
console.log(executarOperacao(2,2, "multiplicacao"))
console.log(executarOperacao(2,2, "divisao"))
console.log(executarOperacao(2,2, "subtracao"))
console.log(executarOperacao(2,2, "adicionar"))