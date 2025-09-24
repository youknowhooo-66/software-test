function LinearEncadiadoSearch(array, target) {
const result = [];
const newarray = [].concat(...array)
  console.log(newarray);
  for (let i = 0; i < newarray.length; i++) {
    if(newarray[i] === target){
      result.push(i);
    }
  }
  console.log(result);
}
export default binarySearch;
binarySearch([[1, 2, 3, 4, 5],3,[4,3,2,3,1,6],[1,4,5,6]], 3);
