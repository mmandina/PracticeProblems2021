// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(array) {
  array.sort();
  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1]) {
      return array[index];
    }
  }
  return undefined;
}
