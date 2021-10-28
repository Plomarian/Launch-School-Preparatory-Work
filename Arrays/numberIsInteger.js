let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = [];
function findIntegers(array) {
  array.filter( function(num) {
    if (Number.isInteger(num)) {
      newArray.push(num);
    }
  });
}
findIntegers(things);
console.log(newArray);