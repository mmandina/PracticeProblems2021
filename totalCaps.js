// add whatever parameters you deem necessary - good luck!
function totalCaps(arrayList) {
  let count = 0;
  for (const string of arrayList) {
    for (const char of string) {
      if (char === char.toUpperCase()) {
        count++;
      }
    }
  }

  return count;
}
