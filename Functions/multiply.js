function multiply(a,b) {
  return a * b;
}

function giveNumber(value) {
  let rSync = require('readline-sync');
  return parseFloat(rSync.question(value));
}

let num1 = giveNumber('Give me a number, please ! ');
let num2 = giveNumber('Now, give me a second number: ');


console.log(multiply(num1,num2));