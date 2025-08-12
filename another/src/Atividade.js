export function Atividade(i){
    const array = [9,2,7,1,8,5,6,4,0,3] 
    const index = i
    if(index >= 10){
        return "O aray em questão está limitado até ao nono índice"
    } 
    if (index < 0){
        return "O aray em questão está limitado apenas a números inteiros positivos partindo do 0"
    }
    if (isNaN(index)  || Array.isArray(i) || i == null){
        return "Erro"
    }

    return array[i]
}