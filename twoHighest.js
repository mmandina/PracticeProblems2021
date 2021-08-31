// add whatever parameters you deem necessary - good luck!
function twoHighest(array){
  let secondHighest;
  let highest= Math.max(...array);
  array[array.indexOf(highest)]=-Infinity;
  secondHighest=Math.max(...array);

return [secondHighest,highest];
}
console.log(twoHighest([4, 25, 3, 20, 19, 5]))