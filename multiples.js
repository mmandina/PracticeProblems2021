// add whatever parameters you deem necessary - good luck!
function multiples(x, n) {
  let array = [x];
  for (let index = 1; index < n; index++) {
    array[index] = array[index - 1] + x;
  }
  return array;
}
console.log(multiples(2, 5));
