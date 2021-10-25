
// Second way

function multi(a,b) {
  return a * b;
}
function getNumber(value) {
  let rSync = require('readline-sync');
  return rSync.question(value);
  
} 
let num1 = getNumber('GIVE ME A NUMBER: ');
let num2 = getNumber('GIVE ME ANOTHER NUMBER: ');
console.log(multi(num1,num2));
