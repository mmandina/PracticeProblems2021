// add whatever parameters you deem necessary - good luck!
function stringFromObject(object) {
  let string = "";
  for (const [key, value] of Object.entries(object)) {
    string += key + " = " + value + ", ";
  }
  return string.substr(0, string.length - 2);
}
console.log(stringFromObject({ a: 1, b: "2" }));
