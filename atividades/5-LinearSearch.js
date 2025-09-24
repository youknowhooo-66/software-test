function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
       console.log(i);
    }
  }
}
export default linearSearch;
linearSearch([1, 2, 3, 4, 5], 3);