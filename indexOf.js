// add whatever parameters you deem necessary - good luck!
function indexOf(array, num) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === num) {
      return index;
    }
  }
  return -1;
}
