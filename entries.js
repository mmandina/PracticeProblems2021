// add whatever parameters you deem necessary - good luck!
function entries(box) {
  let array = [];
  for (const key in box) {
    array.push([key, box[key]]);
    console.log(array);
  }

  return array;
}
let obj = { a: 1, b: 2, c: 3 };

console.log(entries(obj));
