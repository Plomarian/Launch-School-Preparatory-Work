// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// // function oddLengths(array) {
// //   let lengths = array.map(element => element.length);
// //   return lengths.filter(element => element % 2 === 1);

// // }
// // 

// function oddLengths(array) {
// return array.reduce((accumulator,element) => { 
//   if (element.length % 2 === 1) {
//      accumulator.push(element.length) 
//   }
//   return accumulator;
// }, []);
// }

// console.log(oddLengths(arr));

function oddLengths(array) {
  return array.reduce(function(accumulator,element) {
    if (element.length % 2 === 1) {
      accumulator.push(element.length)
    }
    return accumulator;
  }, [])
  
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

