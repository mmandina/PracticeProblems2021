// add whatever parameters you deem necessary - good luck!
function isAlt(word) {
  const vowels = "aeiouAEIOU";
  let array = word.split("");
  if (vowels.includes(array[0])) {
    //if the first letter is a vowel
    console.log("first is vowel");
    for (let index = 1; index < array.length; index++) {
      console.log(array[index]);
      console.log(index % 2);
      if (index % 2 === 0 && !vowels.includes(array[index])) {
        return false;
      }
      if (index % 2 === 1 && vowels.includes(array[index])) {
        return false;
      }
    }
  } else {
    console.log("first is not vowel");
    for (let index = 1; index < array.length; index++) {
      console.log(array[index]);
      console.log(index % 2);
      if (index % 2 === 1 && !vowels.includes(array[index])) {
        return false;
      }
      if (index % 2 === 0 && vowels.includes(array[index])) {
        return false;
      }
    }
  }
  return true;
}

console.log(isAlt("amazon"));
