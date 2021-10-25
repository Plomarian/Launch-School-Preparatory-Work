function factorial(number) {
  let sum = 1;
  for(let i = number; i > 0; i -=1) {
     sum = sum * i;
  }
  return sum; 
}
console.log(factorial(8));