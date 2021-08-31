// add whatever parameters you deem necessary - good luck!
function removeFromString(str1,start,numb){
let arr1=str1.split('');
arr1.splice(start,numb);
str1=arr1.toString();
str1=str1.replaceAll(',','');
return str1;
}

