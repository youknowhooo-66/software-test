export function verificarIdade(idd){
    if(typeof idd !== "number" || idd < 0 ){
        return "Erro"
    }
if(idd >= 18){
    return "Você é maior de idade"
} else {
    return "Você é menor de idade"
}
}