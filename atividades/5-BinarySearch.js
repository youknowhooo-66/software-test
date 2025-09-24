function BinarySearch(array, target){
    const result = [];
    const newarray = []
    array.sort(function(a,b){
        return a - b;})
    newarray.push(...array);
    console.log(newarray);
    
    let baixo = 0;
    let alto = array.length-1;

    while(baixo <= alto){

        const meio = Math.floor((baixo + alto) / 2);
        
        if(newarray[meio] === target){
         return meio;     
        } else if(newarray[meio] < target){
            baixo = meio + 1;
         
        } else {
            alto = meio-1
        }
    }

}
export default BinarySearch;
console.log(BinarySearch([2,3,4,5,2,3,5,6,7,9,8], 5));