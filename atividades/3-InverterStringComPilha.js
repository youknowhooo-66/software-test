function InverterStringComPilha(str){
 const pilha = [];
    pilha.push(...str);
    pilha.reverse()
    console.log(pilha);
}
export default InverterStringComPilha;
InverterStringComPilha('oi');