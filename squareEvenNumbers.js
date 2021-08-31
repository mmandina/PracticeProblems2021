// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(array){
  let sum=0;
for (let index = 0; index < array.length; index++) {
  if (array[index]%2===0) {
    sum += (array[index])**2
  }
  
}return sum;
}