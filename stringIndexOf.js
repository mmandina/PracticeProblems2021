// add whatever parameters you deem necessary - good luck!
function stringIndexOf(str1, char){
  
for ( let index = 0; index < str1.length; index++) {
  if (str1[index]===char){
    return index;
  } 
}
return -1;
}
