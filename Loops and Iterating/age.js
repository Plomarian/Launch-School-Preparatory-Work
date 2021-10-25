let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for (let futAge = 10; futAge < 41; futAge +=10 ) {
  console.log(`In ${futAge} years you will be ${age + futAge} years old !`);
}
