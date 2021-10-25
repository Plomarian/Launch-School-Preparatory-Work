function evenOrOdd(value) {
  if(!(Number.isInteger(value))) {
    console.log('wrong number')
    return;
  };
  if (value % 2 ===0) {
    console.log('even number');
  } else {
    console.log('odd number');
  }
}

evenOrOdd(10.5);