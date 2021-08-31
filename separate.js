// add whatever parameters you deem necessary - good luck!
function separate(array) {
  let c = "cat";
  let d = "dog";
  let w = "water";
  let outArray = [];
  let cArray = [];
  let wArray = [];
  let dArray = [];
  for (const thing of array) {
    if (thing === "cat") {
      cArray.push(thing);
    } else if (thing === "dog") {
      dArray.push(thing);
    } else if (thing === "water") {
      wArray.push(thing);
    }
  }

  outArray = [...cArray, ...wArray, ...dArray];
  return outArray;
}
separate(["cat", "cat", "water", "dog", "water", "cat", "water", "dog"]);
