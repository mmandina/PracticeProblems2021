// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(str1,char){
  let found = -1;
for (let index = 0; index < str1.length; index++) {
 if (str1[index]===char) {
   found=index;
 }
}
return found;
}
