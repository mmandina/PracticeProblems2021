// add whatever parameters you deem necessary - good luck!
function countNumbers(array) {
  let count = 0;

  for (let index = 0; index < array.length; index++) {
    array[index] = parseInt(array[index]);
    if (isNaN(array[index])) {
    } else {
      count++;
    }
  }
  return count;
}

console.log(countNumbers(["", " ", "3", "awesome", "4"]));
