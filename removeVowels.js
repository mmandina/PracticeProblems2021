// add whatever parameters you deem necessary - good luck!
function removeVowels(string) {
  let array = string.split("");
  console.log(array);
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let outArray = [];
  for (const index of array) {
    if (vowels.indexOf(index) === -1) {
      outArray.push(index);
    }
  }
  return outArray.join("");
}
console.log(removeVowels("Hello!"));
