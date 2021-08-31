// add whatever parameters you deem necessary - good luck!
function max(array){
  let found=array[0];
for (let index = 0; index < array.length; index++) {
  if (array[index]>found) {
    found=array[index];
  }
}return found;
}