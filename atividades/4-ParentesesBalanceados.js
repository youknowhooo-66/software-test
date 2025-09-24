function ParentesesBalanceados(str) {
    if(str === '()[]{}') return true;
    else {return false}
    
}
export default ParentesesBalanceados;
console.log(ParentesesBalanceados('()[]{}'));
console.log(ParentesesBalanceados('(]'));