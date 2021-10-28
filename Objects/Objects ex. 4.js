let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj);
let upper = arr.map(function(element) {
  return element.toUpperCase();
});

console.log(upper); 