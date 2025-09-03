const numeroNegativo = (numb) => {
    if(numb < 0 && numb != 0){
        return "é negativo"
    } else if (numb === 0){
        return "zero não é positivo nem negativo"
    } else {
        return false
    }
}
export { numeroNegativo };